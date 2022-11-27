import { a as _export_sfc, _ as __nuxt_component_0$9 } from '../server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
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

const _imports_0 = "" + globalThis.__publicAssetsURL("img/about-us.webp");
function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AboutUsWrapperInformation = __nuxt_component_0$9;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-us" }, _attrs))} data-v-98a308f7><div class="about-us__wrapper" data-v-98a308f7><img class="about-us__wrapper__img"${ssrRenderAttr("src", _imports_0)} data-v-98a308f7>`);
  _push(ssrRenderComponent(_component_AboutUsWrapperInformation, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_main = {};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aboutUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", ssrRender], ["__scopeId", "data-v-98a308f7"]]);

export { aboutUs as default };
//# sourceMappingURL=about-us.4245e168.mjs.map
