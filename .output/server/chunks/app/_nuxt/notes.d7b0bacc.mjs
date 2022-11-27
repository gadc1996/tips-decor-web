import { a as _export_sfc, i as useNotes, j as __nuxt_component_0$1 } from '../server.mjs';
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
  __name: "notes",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const notes2 = ([__temp, __restore] = withAsyncContext(() => useNotes()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NoteCard = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "notes" }, _attrs))} data-v-8f1fcb8f><h1 class="notes__title" data-v-8f1fcb8f>Notes</h1><div class="notes__cards" data-v-8f1fcb8f><!--[-->`);
      ssrRenderList(unref(notes2), (note) => {
        _push(ssrRenderComponent(_component_NoteCard, { note }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/notes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const notes = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8f1fcb8f"]]);

export { notes as default };
//# sourceMappingURL=notes.d7b0bacc.mjs.map
