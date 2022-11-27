import { a as _export_sfc, c as useAxiosGet } from '../server.mjs';
import { useSSRContext, defineComponent, withAsyncContext, unref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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

const useNote = async (noteId) => {
  const response = await useAxiosGet(`notes/${noteId}`);
  return response == null ? void 0 : response.data;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const note = ([__temp, __restore] = withAsyncContext(() => useNote(1)), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(note)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "note" }, _attrs))} data-v-7cd9b6e1><h1 class="note__title" data-v-7cd9b6e1>${ssrInterpolate(unref(note).title)}</h1><img class="note__img"${ssrRenderAttr("src", unref(note).image.presigned_url)} data-v-7cd9b6e1><p class="note__content" data-v-7cd9b6e1>${unref(note).content}</p></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/note/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7cd9b6e1"]]);

export { _id_ as default };
//# sourceMappingURL=_id_.d39987f2.mjs.map
