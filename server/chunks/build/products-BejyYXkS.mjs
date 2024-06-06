import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './wechat-work-BBuI0NqK.mjs';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_1 } from './index-lzWAhsZo.mjs';
import { u as useHead } from './index-BabADJUJ.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-share" }, _attrs))} data-v-7fec291e><div class="share-content" data-v-7fec291e><ul class="social-icons" data-v-7fec291e><li data-v-7fec291e><a aria-label="external-link" href="https://www.instagram.com/#" target="_blank" class="link social-link" rel="noreferrer" data-v-7fec291e><span class="visually-hidden" data-v-7fec291e>Instagram</span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="30" width="30" xmlns="http://www.w3.org/2000/svg" data-v-7fec291e><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" data-v-7fec291e></path></svg></a></li><li data-v-7fec291e><a aria-label="external-link" href="https://www.facebook.com/#" target="_blank" class="link social-link" rel="noreferrer" data-v-7fec291e><span class="visually-hidden" data-v-7fec291e>Facebook</span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="30" width="30" xmlns="http://www.w3.org/2000/svg" data-v-7fec291e><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" data-v-7fec291e></path></svg></a></li><li data-v-7fec291e><a aria-label="external-link" href="https://www.youtube.com/channel/#" target="_blank" class="link social-link" rel="noreferrer" data-v-7fec291e><span class="visually-hidden" data-v-7fec291e>YouTube</span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="35" width="35" xmlns="http://www.w3.org/2000/svg" data-v-7fec291e><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" data-v-7fec291e></path></svg></a></li><li data-v-7fec291e><a aria-label="external-link" href="https://www.weichat.com/#" target="_blank" class="link social-link" rel="noreferrer" data-v-7fec291e><span class="visually-hidden" data-v-7fec291e>WeChat</span><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-wechat" viewBox="0 0 16 16" width="30" height="30" data-v-7fec291e><path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.32.32 0 0 0-.12.366l.218.81a.6.6 0 0 1 .029.117.166.166 0 0 1-.162.162.2.2 0 0 1-.092-.03l-1.057-.61a.5.5 0 0 0-.256-.074.5.5 0 0 0-.142.021 5.7 5.7 0 0 1-1.576.22M9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.6.6 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.63.63 0 0 0 .098.356" data-v-7fec291e></path><path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.5.5 0 0 0-.032.14.19.19 0 0 0 .193.193q.06 0 .111-.029l1.268-.733a.6.6 0 0 1 .308-.088q.088 0 .171.025a6.8 6.8 0 0 0 1.625.26 4.5 4.5 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02l.15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826m4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0m3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0" data-v-7fec291e></path></svg></a></li><li class="text-brown-500 opacity-20" data-v-7fec291e>\u793E\u4EA4\u5A92\u4F53<br data-v-7fec291e>\u656C\u8BF7\u671F\u5F85...</li></ul></div><div class="addr" data-v-7fec291e><img${ssrRenderAttr("src", _imports_0)} alt="WeChat" data-v-7fec291e><p data-v-7fec291e><a target="_blank" rel="noopener noreferrer" href="https://surl.amap.com/lQjmr1K1vfnU" data-v-7fec291e>\u4F4D\u7F6E\uFF1A\u5B81\u6CE2\u5E02\u6D77\u66D9\u533A\u9F13\u697C\u8857\u9053\u4E2D\u5C71\u897F\u8DEF2\u53F7\u6052\u9686\u4E2D\u5FC319D(\u9F13\u697C\u5730\u94C1\u7AD9F\u53E3\u65C1)</a><br data-v-7fec291e>\u7535\u8BDD\uFF1A13486449299</p></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/share-link/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7fec291e"]]);
const _sfc_main = {
  __name: "products",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u666E\u62C9\u63D0\u8BFE\u7A0B",
      meta: [
        { hid: "keywords", name: "keywords", content: "\u666E\u62C9\u63D0,\u5B81\u6CE2\u666E\u62C9\u63D0\u4EF7\u683C, Pilates," },
        { hid: "description", name: "description", content: "\u666E\u62C9\u63D0\u8BFE\u7A0B\u4ECB\u7ECD" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_share_link = __nuxt_component_0;
      const _component_footer_black = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-course" }, _attrs))} data-v-07f37f65><div class="products" data-v-07f37f65><div class="blank" data-v-07f37f65></div><div class="color" data-v-07f37f65><div class="once-course" data-v-07f37f65><div class="card-type" data-v-07f37f65><h3 data-v-07f37f65>\u5B63\u5361</h3><p data-v-07f37f65>\u4EF7\u683C: 19800\u5143</p><p data-v-07f37f65>\u6709\u6548\u671F: 90\u5929</p><br data-v-07f37f65></div><div class="card-type" data-v-07f37f65><h3 data-v-07f37f65>\u534A\u5E74\u5361</h3><p data-v-07f37f65>\u4EF7\u683C: 36980\u5143</p><p data-v-07f37f65>\u6709\u6548\u671F: 180\u5929</p><br data-v-07f37f65></div><div class="card-type" data-v-07f37f65><h3 data-v-07f37f65>\u4E00\u5E74\u5361</h3><p data-v-07f37f65>\u4EF7\u683C: 66666\u5143</p><p data-v-07f37f65>\u6709\u6548\u671F: 365\u5929</p><br data-v-07f37f65></div></div><div class="times-course" data-v-07f37f65><div class="card-type-times" data-v-07f37f65><h3 data-v-07f37f65>\u6B21\u5361</h3><p data-v-07f37f65>\u6B21\u6570: 12\u6B21</p><p data-v-07f37f65>\u4EF7\u683C: 5616\u5143</p><p data-v-07f37f65>\u6709\u6548\u671F: 60\u5929</p></div><div class="card-type-no loader" data-v-07f37f65><h3 data-v-07f37f65></h3></div><div data-v-07f37f65></div></div></div></div><div class="Pilates instructor" data-v-07f37f65></div>`);
      _push(ssrRenderComponent(_component_share_link, null, null, _parent));
      _push(ssrRenderComponent(_component_footer_black, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const products = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-07f37f65"]]);

export { products as default };
//# sourceMappingURL=products-BejyYXkS.mjs.map
