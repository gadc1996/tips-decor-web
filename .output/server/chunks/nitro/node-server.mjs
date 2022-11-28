globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { eventHandler, setHeaders, sendRedirect, defineEventHandler, handleCacheHeaders, createEvent, getRequestHeader, createError, createApp, createRouter as createRouter$1, lazyEventHandler, toNodeListener } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ohmyfetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, withLeadingSlash, withoutTrailingSlash, joinURL } from 'ufo';
import { createStorage } from 'unstorage';
import defu from 'defu';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'fs';
import { dirname, resolve } from 'pathe';
import { fileURLToPath } from 'url';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":"","baseUrl":"http://localhost:8000/api/","authEmail":"admin@example.com","authPassword":"guest"},"nitro":{"routeRules":{"/__nuxt_error":{"cache":false}},"envPrefix":"NUXT_"},"public":{}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config$1 = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config$1;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
const timingMiddleware = eventHandler((event) => {
  const start = globalTiming.start();
  const _end = event.res.end;
  event.res.end = function(chunk, encoding, cb) {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!event.res.headersSent) {
      event.res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(event.res, chunk, encoding, cb);
    return this;
  }.bind(event.res);
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(createRouter({ routes: config.nitro.routeRules }));
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(event, routeRules.redirect.to, routeRules.redirect.statusCode);
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(path);
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      if (validate(entry)) {
        useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    let _resSendBody;
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      },
      end(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      write(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      writeHead(statusCode, headers2) {
        this.statusCode = statusCode;
        if (headers2) {
          for (const header in headers2) {
            this.setHeader(header, headers2[header]);
          }
        }
        return this;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event) || _resSendBody;
    const headers = event.res.getHeaders();
    headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
    headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["cache-control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.res.setHeader("Content-Type", "application/json");
    event.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.req.url?.startsWith("/__nuxt_error");
  let html = !isErrorPage ? await $fetch(withQuery("/__nuxt_error", errorObject)).catch(() => null) : null;
  if (!html) {
    const { template } = await import('../error-500.mjs');
    html = template(errorObject);
  }
  event.res.setHeader("Content-Type", "text/html;charset=UTF-8");
  event.res.end(html);
});

const assets = {
  "/favicon-128.png": {
    "type": "image/png",
    "etag": "\"9938-ueD3eVaP7n/jLokWYdrZp8ZixLA\"",
    "mtime": "2022-11-28T02:10:04.751Z",
    "size": 39224,
    "path": "../public/favicon-128.png"
  },
  "/favicon-16.png": {
    "type": "image/png",
    "etag": "\"4c7-6yRpEgVXQDwh2FWyu6464UJq48g\"",
    "mtime": "2022-11-28T02:10:04.751Z",
    "size": 1223,
    "path": "../public/favicon-16.png"
  },
  "/favicon-256.png": {
    "type": "image/png",
    "etag": "\"1d139-8bbZLQgu77HxIhb03cRGwHlu3eM\"",
    "mtime": "2022-11-28T02:10:04.748Z",
    "size": 119097,
    "path": "../public/favicon-256.png"
  },
  "/favicon-32.png": {
    "type": "image/png",
    "etag": "\"dda-vxKx6aQ5HNNVkA8HtZlFKpMTWrk\"",
    "mtime": "2022-11-28T02:10:04.748Z",
    "size": 3546,
    "path": "../public/favicon-32.png"
  },
  "/favicon-64.png": {
    "type": "image/png",
    "etag": "\"2e89-FGxtkAmT8DaAzDukPidBjYyeAZc\"",
    "mtime": "2022-11-28T02:10:04.748Z",
    "size": 11913,
    "path": "../public/favicon-64.png"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"1778e-1I3wJwGkUjGwou9iYwy52OEiy1A\"",
    "mtime": "2022-11-28T02:10:04.748Z",
    "size": 96142,
    "path": "../public/favicon.ico"
  },
  "/_nuxt/_id_.2a790ac7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"173-bq0TnvSqO8D4f8juHYwNr4BbAOE\"",
    "mtime": "2022-11-28T02:10:04.715Z",
    "size": 371,
    "path": "../public/_nuxt/_id_.2a790ac7.css"
  },
  "/_nuxt/_id_.b4527117.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"117-UxQzJCg5/sENddvMhO8MBCjLDyE\"",
    "mtime": "2022-11-28T02:10:04.715Z",
    "size": 279,
    "path": "../public/_nuxt/_id_.b4527117.css"
  },
  "/_nuxt/_id_.b87e34ec.js": {
    "type": "application/javascript",
    "etag": "\"28a-MmsHz1ZhsluATrMQFHdv+ftaQto\"",
    "mtime": "2022-11-28T02:10:04.715Z",
    "size": 650,
    "path": "../public/_nuxt/_id_.b87e34ec.js"
  },
  "/_nuxt/_id_.e40615b8.js": {
    "type": "application/javascript",
    "etag": "\"3d7-f68uFkxnHcYicAT95c0CUZ6XflE\"",
    "mtime": "2022-11-28T02:10:04.715Z",
    "size": 983,
    "path": "../public/_nuxt/_id_.e40615b8.js"
  },
  "/_nuxt/about-us.0799e318.js": {
    "type": "application/javascript",
    "etag": "\"79e-lpxEsvjHi4l75sll2tRfCPtoo3c\"",
    "mtime": "2022-11-28T02:10:04.715Z",
    "size": 1950,
    "path": "../public/_nuxt/about-us.0799e318.js"
  },
  "/_nuxt/about-us.a7ea271d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"131-I5snMhyMc2YGMAQBBi//91AxnMs\"",
    "mtime": "2022-11-28T02:10:04.715Z",
    "size": 305,
    "path": "../public/_nuxt/about-us.a7ea271d.css"
  },
  "/_nuxt/categories.7c7649ca.js": {
    "type": "application/javascript",
    "etag": "\"434-Gq0WDgQ5fAX3czyPCDMuOUaAzz8\"",
    "mtime": "2022-11-28T02:10:04.715Z",
    "size": 1076,
    "path": "../public/_nuxt/categories.7c7649ca.js"
  },
  "/_nuxt/categories.9419d875.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"11a-53/bZ4C6IVZ2b9kzPvLfSyoqMGA\"",
    "mtime": "2022-11-28T02:10:04.715Z",
    "size": 282,
    "path": "../public/_nuxt/categories.9419d875.css"
  },
  "/_nuxt/default.4a89da6e.js": {
    "type": "application/javascript",
    "etag": "\"13c9-E9i1xc1mnlMZtXtLDX+KR6N8xWc\"",
    "mtime": "2022-11-28T02:10:04.715Z",
    "size": 5065,
    "path": "../public/_nuxt/default.4a89da6e.js"
  },
  "/_nuxt/default.ab72116d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"d80-OntjXMbmAVr/RLepBn7yxL95jiU\"",
    "mtime": "2022-11-28T02:10:04.715Z",
    "size": 3456,
    "path": "../public/_nuxt/default.ab72116d.css"
  },
  "/_nuxt/entry.4744035a.js": {
    "type": "application/javascript",
    "etag": "\"251eb-JMlOvnW42FnV742YK6zr3bKTEkU\"",
    "mtime": "2022-11-28T02:10:04.715Z",
    "size": 152043,
    "path": "../public/_nuxt/entry.4744035a.js"
  },
  "/_nuxt/entry.6c161d8b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ffc-eNOayqErb54KWT/edPVm6AKCUpU\"",
    "mtime": "2022-11-28T02:10:04.715Z",
    "size": 4092,
    "path": "../public/_nuxt/entry.6c161d8b.css"
  },
  "/_nuxt/error-404.18ced855.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-F8gJ3uSz6Dg2HRyb374Ax3RegKE\"",
    "mtime": "2022-11-28T02:10:04.715Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.18ced855.css"
  },
  "/_nuxt/error-404.d58fe1d7.js": {
    "type": "application/javascript",
    "etag": "\"8ad-juLrxoaEX/NK++gTwFJVw+lOTQg\"",
    "mtime": "2022-11-28T02:10:04.715Z",
    "size": 2221,
    "path": "../public/_nuxt/error-404.d58fe1d7.js"
  },
  "/_nuxt/error-500.69c2a63b.js": {
    "type": "application/javascript",
    "etag": "\"756-wZeTPftEcNA+MKZGvIt+dHLBjq4\"",
    "mtime": "2022-11-28T02:10:04.715Z",
    "size": 1878,
    "path": "../public/_nuxt/error-500.69c2a63b.js"
  },
  "/_nuxt/error-500.e60962de.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-VhleGjkSRH7z4cQDJV3dxcboMhU\"",
    "mtime": "2022-11-28T02:10:04.715Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.e60962de.css"
  },
  "/_nuxt/error-component.aaa3873b.js": {
    "type": "application/javascript",
    "etag": "\"465-AcOUt5Rb0zCi0QsRYhmyEjrUTHg\"",
    "mtime": "2022-11-28T02:10:04.715Z",
    "size": 1125,
    "path": "../public/_nuxt/error-component.aaa3873b.js"
  },
  "/_nuxt/index.837356b1.js": {
    "type": "application/javascript",
    "etag": "\"1bd6c-3J6OUiXgc7vjJblcVieV87OQMCg\"",
    "mtime": "2022-11-28T02:10:04.711Z",
    "size": 114028,
    "path": "../public/_nuxt/index.837356b1.js"
  },
  "/_nuxt/modal.2751a23c.js": {
    "type": "application/javascript",
    "etag": "\"f5-OcykNv412dr/SH28z9NpM7XvXU0\"",
    "mtime": "2022-11-28T02:10:04.711Z",
    "size": 245,
    "path": "../public/_nuxt/modal.2751a23c.js"
  },
  "/_nuxt/notes.7f7103e1.js": {
    "type": "application/javascript",
    "etag": "\"3d9-CxXeFUaASRSWnFM/o+SUe5LAfeM\"",
    "mtime": "2022-11-28T02:10:04.711Z",
    "size": 985,
    "path": "../public/_nuxt/notes.7f7103e1.js"
  },
  "/_nuxt/notes.a0e91c6e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"10b-3EkNvPFrcmoydnagYdCH0+dApoU\"",
    "mtime": "2022-11-28T02:10:04.711Z",
    "size": 267,
    "path": "../public/_nuxt/notes.a0e91c6e.css"
  },
  "/_nuxt/useAxios.8c54b351.js": {
    "type": "application/javascript",
    "etag": "\"1e9-Sn3zwTiz8BYJ6tduSCGSDnoxL7w\"",
    "mtime": "2022-11-28T02:10:04.711Z",
    "size": 489,
    "path": "../public/_nuxt/useAxios.8c54b351.js"
  },
  "/_nuxt/useCategories.66d1889e.js": {
    "type": "application/javascript",
    "etag": "\"a6-9SD0QBjSkqrp3Xwdn032uULIHCY\"",
    "mtime": "2022-11-28T02:10:04.711Z",
    "size": 166,
    "path": "../public/_nuxt/useCategories.66d1889e.js"
  },
  "/_nuxt/useNotes.b4190512.js": {
    "type": "application/javascript",
    "etag": "\"a1-pe/d6dflcbANmtMfoGalrcdgxdo\"",
    "mtime": "2022-11-28T02:10:04.711Z",
    "size": 161,
    "path": "../public/_nuxt/useNotes.b4190512.js"
  },
  "/img/about-us.webp": {
    "type": "image/webp",
    "etag": "\"f6bf0-kVQwIXiqseKZW2ksfmfJv3T1AIY\"",
    "mtime": "2022-11-28T02:10:04.748Z",
    "size": 1010672,
    "path": "../public/img/about-us.webp"
  },
  "/img/bed.webp": {
    "type": "image/webp",
    "etag": "\"2b06-EzeKA0+mq1er4zzf6LCX7SCjS5g\"",
    "mtime": "2022-11-28T02:10:04.748Z",
    "size": 11014,
    "path": "../public/img/bed.webp"
  },
  "/img/bureau.webp": {
    "type": "image/webp",
    "etag": "\"3708-uqIqijU7KvaeSqYkBZDlu3s5TM4\"",
    "mtime": "2022-11-28T02:10:04.748Z",
    "size": 14088,
    "path": "../public/img/bureau.webp"
  },
  "/img/chair.webp": {
    "type": "image/webp",
    "etag": "\"494c-Sia/hWYKCjTMVrPCGe8kvaeYtNw\"",
    "mtime": "2022-11-28T02:10:04.748Z",
    "size": 18764,
    "path": "../public/img/chair.webp"
  },
  "/img/desk.webp": {
    "type": "image/webp",
    "etag": "\"3e90-XtHAG3diKoVVb5Fd7vO8EzTwx/A\"",
    "mtime": "2022-11-28T02:10:04.745Z",
    "size": 16016,
    "path": "../public/img/desk.webp"
  },
  "/img/hero.webp": {
    "type": "image/webp",
    "etag": "\"1ee4-5ZUTzQwzz52lcC0WmZc1GpQopqE\"",
    "mtime": "2022-11-28T02:10:04.745Z",
    "size": 7908,
    "path": "../public/img/hero.webp"
  },
  "/img/loading.png": {
    "type": "image/png",
    "etag": "\"d35-4vJE+zYBfAWgEU3d8wdCw+532uM\"",
    "mtime": "2022-11-28T02:10:04.745Z",
    "size": 3381,
    "path": "../public/img/loading.png"
  },
  "/img/logo.jpg": {
    "type": "image/jpeg",
    "etag": "\"41711-YwjmRAtFI3H3MG/kAzlG99f3UEQ\"",
    "mtime": "2022-11-28T02:10:04.745Z",
    "size": 268049,
    "path": "../public/img/logo.jpg"
  },
  "/img/logo.png": {
    "type": "image/png",
    "etag": "\"3b1a9-ul09tVKvfvTrDZQjkTdqSa/oDTM\"",
    "mtime": "2022-11-28T02:10:04.731Z",
    "size": 242089,
    "path": "../public/img/logo.png"
  },
  "/img/logo.webp": {
    "type": "image/webp",
    "etag": "\"13776-yY2c2kpdR20xEiikZvu9tJMysTk\"",
    "mtime": "2022-11-28T02:10:04.731Z",
    "size": 79734,
    "path": "../public/img/logo.webp"
  },
  "/img/note.jpg": {
    "type": "image/jpeg",
    "etag": "\"cb087-pdLj0fkTxFYrDlIgPZiHTYX18vQ\"",
    "mtime": "2022-11-28T02:10:04.731Z",
    "size": 831623,
    "path": "../public/img/note.jpg"
  },
  "/img/notes1.jpg": {
    "type": "image/jpeg",
    "etag": "\"2434d2-3xMALE260SuSVsPousBfeceJtao\"",
    "mtime": "2022-11-28T02:10:04.731Z",
    "size": 2372818,
    "path": "../public/img/notes1.jpg"
  },
  "/img/notes2.jpg": {
    "type": "image/jpeg",
    "etag": "\"233626-wlDfwZcsoxRovOrVG4hDQZqL6ko\"",
    "mtime": "2022-11-28T02:10:04.728Z",
    "size": 2307622,
    "path": "../public/img/notes2.jpg"
  },
  "/img/notes3.jpg": {
    "type": "image/jpeg",
    "etag": "\"e94b1-w9A0l4o0c7ksAhKXemGawe+V0Lg\"",
    "mtime": "2022-11-28T02:10:04.725Z",
    "size": 955569,
    "path": "../public/img/notes3.jpg"
  },
  "/img/notes4.jpg": {
    "type": "image/jpeg",
    "etag": "\"1a1dcd-/tBvdv249uD9F2zo6sSGLvHDlHA\"",
    "mtime": "2022-11-28T02:10:04.725Z",
    "size": 1711565,
    "path": "../public/img/notes4.jpg"
  },
  "/img/notes5.jpg": {
    "type": "image/jpeg",
    "etag": "\"2e8f42-QrTXQKKCUtQ6jaCiYna5AY9BBs0\"",
    "mtime": "2022-11-28T02:10:04.721Z",
    "size": 3051330,
    "path": "../public/img/notes5.jpg"
  },
  "/img/notes6.jpg": {
    "type": "image/jpeg",
    "etag": "\"162e24-RiQzEFTX22nr+6nG7NuR8uCKjx8\"",
    "mtime": "2022-11-28T02:10:04.721Z",
    "size": 1453604,
    "path": "../public/img/notes6.jpg"
  },
  "/svg/catalog-decoration.svg": {
    "type": "image/svg+xml",
    "etag": "\"9e-8tjq2/l8zB9hziA3AdEusRaYIdU\"",
    "mtime": "2022-11-28T02:10:04.718Z",
    "size": 158,
    "path": "../public/svg/catalog-decoration.svg"
  },
  "/svg/fb-white.svg": {
    "type": "image/svg+xml",
    "etag": "\"279-NrPDzUFW6lYLf58GimZY7HayYR0\"",
    "mtime": "2022-11-28T02:10:04.718Z",
    "size": 633,
    "path": "../public/svg/fb-white.svg"
  },
  "/svg/fb.svg": {
    "type": "image/svg+xml",
    "etag": "\"305-qFfzGXXhvzvDW3Z/GprfYZTWvqA\"",
    "mtime": "2022-11-28T02:10:04.718Z",
    "size": 773,
    "path": "../public/svg/fb.svg"
  },
  "/svg/instagram-white.svg": {
    "type": "image/svg+xml",
    "etag": "\"10a7-bGvoqNTiBCoOBExdp/SYF+xtEy4\"",
    "mtime": "2022-11-28T02:10:04.718Z",
    "size": 4263,
    "path": "../public/svg/instagram-white.svg"
  },
  "/svg/instagram.svg": {
    "type": "image/svg+xml",
    "etag": "\"10a3-N9P6tnM6XK9LrOoA7uLyv2bDiXE\"",
    "mtime": "2022-11-28T02:10:04.718Z",
    "size": 4259,
    "path": "../public/svg/instagram.svg"
  },
  "/svg/right-arrow.svg": {
    "type": "image/svg+xml",
    "etag": "\"d9-bRmDVJbeJoADQxt15PYak2ggNrE\"",
    "mtime": "2022-11-28T02:10:04.718Z",
    "size": 217,
    "path": "../public/svg/right-arrow.svg"
  },
  "/svg/testimonials-decoration.svg": {
    "type": "image/svg+xml",
    "etag": "\"b1-BJEtzfEC25yBFkAKMhP5vzuo190\"",
    "mtime": "2022-11-28T02:10:04.718Z",
    "size": 177,
    "path": "../public/svg/testimonials-decoration.svg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler(async (event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  const encodingHeader = String(event.req.headers["accept-encoding"] || "");
  const encodings = encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort().concat([""]);
  if (encodings.length > 1) {
    event.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end("Not Modified (etag)");
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end("Not Modified (mtime)");
      return;
    }
  }
  if (asset.type) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding) {
    event.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size) {
    event.res.setHeader("Content-Length", asset.size);
  }
  const contents = await readAsset(id);
  event.res.end(contents);
});

const _lazy_QFMINu = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_QFMINu, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_QFMINu, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(h.route.replace(/:\w+|\*\*/g, "_"));
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
