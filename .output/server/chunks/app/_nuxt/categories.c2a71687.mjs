import { a as _export_sfc, u as useCategories, b as __nuxt_component_0$8 } from '../server.mjs';
import { useSSRContext, defineComponent, withAsyncContext, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "categories",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const categories2 = ([__temp, __restore] = withAsyncContext(() => useCategories()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CategoriesCard = __nuxt_component_0$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "categories" }, _attrs))} data-v-6d8b16b0><h1 class="categories__title" data-v-6d8b16b0>Categorias</h1><div class="categories__cards" data-v-6d8b16b0><!--[-->`);
      ssrRenderList(unref(categories2), (category) => {
        _push(ssrRenderComponent(_component_CategoriesCard, { category }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/categories.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const categories = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6d8b16b0"]]);

export { categories as default };
//# sourceMappingURL=categories.c2a71687.mjs.map
