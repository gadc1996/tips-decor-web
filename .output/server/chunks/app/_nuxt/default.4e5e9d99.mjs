import { a as _export_sfc, k as useState, l as __nuxt_component_0$b, m as __nuxt_component_2$1 } from '../server.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, unref, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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

const useIsModalVisible = () => useState("isModalVisible", () => false);
const useIsSubmiting = () => useState("isSubmiting", () => false);
const useIsSubmited = () => useState("isSubmited", () => false);
const useOpenModal = () => {
  useIsModalVisible().value = true;
};
const _imports_0 = "" + globalThis.__publicAssetsURL("img/logo.webp");
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      {
        text: "Inicio",
        route: "/"
      },
      {
        text: "Catalogo",
        route: "/categories"
      },
      {
        text: "Notas",
        route: "/notes"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$b;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "app-header" }, _attrs))} data-v-48551a27><img class="app-header__logo"${ssrRenderAttr("src", _imports_0)} alt="Logo" data-v-48551a27><nav class="app-header__nav" data-v-48551a27><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "app-header__nav__link",
          to: link.route
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.text)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.text), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "app-header__nav__link pointer",
        onClick: ($event) => unref(useOpenModal)()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contacto `);
          } else {
            return [
              createTextVNode("Contacto ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></header>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-48551a27"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "AppContactModalForm",
  __ssrInlineRender: true,
  setup(__props) {
    const formIsSubmiting = useIsSubmiting();
    const formIsSubmited = useIsSubmited();
    return (_ctx, _push, _parent, _attrs) => {
      if (!unref(formIsSubmiting) && !unref(formIsSubmited)) {
        _push(`<form${ssrRenderAttrs(mergeProps({ class: "app-contact-modal-form app-contact-modal__dialog__form" }, _attrs))} data-v-d5c23917><h2 class="app-contact-modal-form__title" data-v-d5c23917>Tienes alguna idea o bucas asesoria, <br data-v-d5c23917>Nosotros te ayudamos! </h2><label class="app-contact-modal-form__label" for="name" data-v-d5c23917>Nombre</label><input class="app-contact-modal-form__input" type="text" name="name" data-v-d5c23917><label class="app-contact-modal-form__label" for="contact_info" data-v-d5c23917>Telefono o Correo</label><input class="app-contact-modal-form__input" type="text" name="contact_info" data-v-d5c23917><label class="app-contact-modal-form__label" for="message" data-v-d5c23917>Mensaje</label><textarea class="app-contact-modal-form__textarea" name="message" data-v-d5c23917></textarea><div class="app-contact-modal-form__actions" type="submit" data-v-d5c23917><button class="app-contact-modal-form__actions__submit" type="submit" data-v-d5c23917>Enviar</button><button class="app-contact-modal-form__actions__close" data-v-d5c23917>Cerrar</button></div></form>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppContactModalForm.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-d5c23917"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "lds-ring" }, _attrs))} data-v-a26a42e7><div data-v-a26a42e7></div><div data-v-a26a42e7></div><div data-v-a26a42e7></div><div data-v-a26a42e7></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppContactModalLoader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a26a42e7"]]);
const useSocialLinks = () => useState("socialLinks", () => [
  {
    logo: "/svg/instagram.svg",
    logo_white: "/svg/instagram-white.svg",
    url: "https://www.instagram.com/tipsdecor_chih/"
  },
  {
    logo: "/svg/fb.svg",
    logo_white: "/svg/fb-white.svg",
    url: "https://www.facebook.com/tipsdecor"
  }
]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppContactModalThankYou",
  __ssrInlineRender: true,
  setup(__props) {
    const contactLinks = useSocialLinks();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-contact-modal-thank-you" }, _attrs))} data-v-eec9ef7f><h2 class="app-contact-modal-thank-you__title" data-v-eec9ef7f>Mensaje Enviado Con Exito!</h2><h3 class="app-contact-modal-thank-you__subtitle" data-v-eec9ef7f>Nos pondremos en contacto contigo <br data-v-eec9ef7f>Siguenos en nuestras Redes! </h3><div class="app-contact-modal-thank-you__icons" data-v-eec9ef7f><!--[-->`);
      ssrRenderList(unref(contactLinks), (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "app-contact-modal-thank-you__icons__icon",
          to: link.url
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", link.logo)} data-v-eec9ef7f${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: link.logo
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><button class="app-contact-modal-thank-you__close" data-v-eec9ef7f>Volver</button></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppContactModalThankYou.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-eec9ef7f"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppContactModal",
  __ssrInlineRender: true,
  setup(__props) {
    const isModalVisible = useIsModalVisible();
    const modalIsSubmiting = useIsSubmiting();
    const modalIsSubmited = useIsSubmited();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppContactModalForm = __nuxt_component_0;
      const _component_AppContactModalLoader = __nuxt_component_1$1;
      const _component_AppContactModalThankYou = __nuxt_component_2;
      if (unref(isModalVisible)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-contact-modal" }, _attrs))} data-v-66e113f0><div class="app-contact-modal__overlay" data-v-66e113f0></div><dialog class="app-contact-modal__dialog"${ssrIncludeBooleanAttr(true) ? " open" : ""} data-v-66e113f0>`);
        _push(ssrRenderComponent(_component_AppContactModalForm, null, null, _parent));
        if (unref(modalIsSubmiting) && !unref(modalIsSubmited)) {
          _push(ssrRenderComponent(_component_AppContactModalLoader, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (!unref(modalIsSubmiting) && unref(modalIsSubmited)) {
          _push(ssrRenderComponent(_component_AppContactModalThankYou, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</dialog></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppContactModal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-66e113f0"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const footerLinks = useSocialLinks();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-footer" }, _attrs))} data-v-e9630830><div class="app-footer__logos" data-v-e9630830><!--[-->`);
      ssrRenderList(unref(footerLinks), (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: link.url
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="app-footer__logos__logo"${ssrRenderAttr("src", link.logo_white)} data-v-e9630830${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "app-footer__logos__logo",
                  src: link.logo_white
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="app-footer__copyright" data-v-e9630830>${ssrInterpolate(new Date().getFullYear())} Made with \u{1F497} By <a class="app-footer__copyright__link" href="https://www.alexdelgado.com.mx" data-v-e9630830>Alex Delgado</a></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e9630830"]]);
function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = __nuxt_component_0$1;
  const _component_AppContactModal = __nuxt_component_1;
  const _component_NuxtPage = __nuxt_component_2$1;
  const _component_AppFooter = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "default" }, _attrs))} data-v-6e585dba>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_AppContactModal, null, null, _parent));
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_main = {};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", ssrRender], ["__scopeId", "data-v-6e585dba"]]);

export { _default as default };
//# sourceMappingURL=default.4e5e9d99.mjs.map
