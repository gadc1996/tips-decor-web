import { a as _export_sfc, e as __nuxt_component_0$5, f as __nuxt_component_1, g as __nuxt_component_2$1, h as __nuxt_component_3 } from '../server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import 'ohmyfetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import 'defu';
import '@vueuse/shared';
import 'vue-router';
import 'axios';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'fs';
import 'pathe';
import 'url';

function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_IndexHero = __nuxt_component_0$5;
  const _component_IndexCatalog = __nuxt_component_1;
  const _component_IndexTestimonials = __nuxt_component_2$1;
  const _component_IndexNotes = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "index" }, _attrs))} data-v-c9b73791>`);
  _push(ssrRenderComponent(_component_IndexHero, null, null, _parent));
  _push(ssrRenderComponent(_component_IndexCatalog, null, null, _parent));
  _push(ssrRenderComponent(_component_IndexTestimonials, null, null, _parent));
  _push(ssrRenderComponent(_component_IndexNotes, null, null, _parent));
  _push(`</div>`);
}
const _sfc_main = {};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", ssrRender], ["__scopeId", "data-v-c9b73791"]]);

export { index as default };
//# sourceMappingURL=index.decba614.mjs.map
