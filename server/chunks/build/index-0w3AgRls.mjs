import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, renderSlot, createCommentVNode, useSSRContext, mergeProps, withCtx, createVNode, warn, getCurrentInstance, inject, ref } from 'vue';
import { fromPairs } from 'lodash-unified';
import { isObject, hasOwn } from '@vue/shared';
import { _ as __nuxt_component_1 } from './index-lzWAhsZo.mjs';
import { u as useHead } from './index-BabADJUJ.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc$1 } from './server.mjs';
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

const epPropKey = "__epPropKey";
const definePropType = (val) => val;
const isEpProp = (val) => isObject(val) && !!val[epPropKey];
const buildProp = (prop, key) => {
  if (!isObject(prop) || isEpProp(prop))
    return prop;
  const { values, required, default: defaultValue, type, validator } = prop;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = Array.from(values);
      if (hasOwn(prop, "default")) {
        allowedValues.push(defaultValue);
      }
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }
    return valid;
  } : void 0;
  const epProp = {
    type,
    required: !!required,
    validator: _validator,
    [epPropKey]: true
  };
  if (hasOwn(prop, "default"))
    epProp.default = defaultValue;
  return epProp;
};
const buildProps = (props) => fromPairs(Object.entries(props).map(([key, option]) => [
  key,
  buildProp(option, key)
]));
const withInstall = (main, extra) => {
  main.install = (app) => {
    for (const comp of [main, ...Object.values({})]) {
      app.component(comp.name, comp);
    }
  };
  return main;
};
const defaultNamespace = "el";
const statePrefix = "is-";
const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
const namespaceContextKey = Symbol("namespaceContextKey");
const useGetDerivedNamespace = (namespaceOverrides) => {
  const derivedNamespace = getCurrentInstance() ? inject(namespaceContextKey, ref(defaultNamespace)) : ref(defaultNamespace);
  const namespace = computed(() => {
    return unref(derivedNamespace) || defaultNamespace;
  });
  return namespace;
};
const useNamespace = (block, namespaceOverrides) => {
  const namespace = useGetDerivedNamespace();
  const b = (blockSuffix = "") => _bem(namespace.value, block, blockSuffix, "", "");
  const e = (element) => element ? _bem(namespace.value, block, "", element, "") : "";
  const m = (modifier) => modifier ? _bem(namespace.value, block, "", "", modifier) : "";
  const be = (blockSuffix, element) => blockSuffix && element ? _bem(namespace.value, block, blockSuffix, element, "") : "";
  const em = (element, modifier) => element && modifier ? _bem(namespace.value, block, "", element, modifier) : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace.value, block, blockSuffix, "", modifier) : "";
  const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(namespace.value, block, blockSuffix, element, modifier) : "";
  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : "";
  };
  const cssVar = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarBlock = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${block}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarName = (name) => `--${namespace.value}-${name}`;
  const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
    cssVar,
    cssVarName,
    cssVarBlock,
    cssVarBlockName
  };
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const dividerProps = buildProps({
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal"
  },
  contentPosition: {
    type: String,
    values: ["left", "center", "right"],
    default: "center"
  },
  borderStyle: {
    type: definePropType(String),
    default: "solid"
  }
});
const __default__ = defineComponent({
  name: "ElDivider"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: dividerProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("divider");
    const dividerStyle = computed(() => {
      return ns.cssVar({
        "border-style": props.borderStyle
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns).b(), unref(ns).m(_ctx.direction)]),
        style: normalizeStyle(unref(dividerStyle)),
        role: "separator"
      }, [
        _ctx.$slots.default && _ctx.direction !== "vertical" ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(ns).e("text"), unref(ns).is(_ctx.contentPosition)])
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)) : createCommentVNode("v-if", true)
      ], 6);
    };
  }
});
var Divider = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "divider.vue"]]);
const ElDivider = withInstall(Divider);
const _imports_0 = "" + buildAssetsURL("Joseph-Pilates-1.BdMviZxJ.jpg");
const _imports_1 = "" + buildAssetsURL("about-2.CPBoS6y6.jpg");
const _imports_2 = "" + buildAssetsURL("about-3.CFoJHRZx.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u5173\u4E8E\u666E\u62C9\u63D0",
      meta: [
        { hid: "keywords", name: "keywords", content: "\u666E\u62C9\u63D0,\u5B81\u6CE2\u666E\u62C9\u63D0, Pilates, \u666E\u62C9\u63D0\u4F5C\u7528, \u666E\u62C9\u63D0\u529F\u6548, \u666E\u62C9\u63D0\u6548\u679C,\u666E\u62C9\u63D0\u9002\u7528\u4EBA\u7FA4,\u5851\u5F62, \u5065\u8EAB, \u51CF\u80A5, \u5851\u5F62\u51CF\u80A5, \u51CF\u80A5\u51CF\u8102, \u75BC\u75DB" },
        { hid: "description", name: "description", content: "\u666E\u62C9\u63D0\u4F5C\u4E3A\u4E00\u79CD\u4F4E\u51B2\u51FB\u3001\u6CE8\u91CD\u8EAB\u4F53\u6838\u5FC3\u529B\u91CF\u548C\u6574\u4F53\u534F\u8C03\u6027\u7684\u8FD0\u52A8\uFF0C\u9002\u5408\u591A\u79CD\u4EBA\u7FA4\u8FDB\u884C\u7EC3\u4E60" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_divider = ElDivider;
      const _component_footer_black = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-all" }, _attrs))} data-v-4b4011bc><div class="content-body" data-v-4b4011bc><div class="Pilates-introduce" data-v-4b4011bc><div class="Pilates-introduce-img" data-v-4b4011bc><img${ssrRenderAttr("src", _imports_0)} alt="Joseph" title="Joseph Pilates" data-v-4b4011bc></div><div class="Pilates-introduce-content" data-v-4b4011bc><h1 class="text-3xl font-bold mb-8 mt-11" data-v-4b4011bc>\u4EC0\u4E48\u662F\u666E\u62C9\u63D0</h1><div class="border" style="${ssrRenderStyle({ "border-color": "rgb(151, 61, 1)" })}" data-v-4b4011bc><p class="text-base leading-relaxed ml-4 mr-4 mt-4 text-left" style="${ssrRenderStyle({ "text-indent": "2em" })}" data-v-4b4011bc> \u666E\u62C9\u63D0\uFF0C\u8FD9\u4E2A\u540D\u5B57\u6E90\u81EA\u4E8E20\u4E16\u7EAA\u521D\u7684\u5FB7\u56FD\uFF0C\u7531\u4E00\u4F4D\u540D\u53EB\u7EA6\u745F\u592B\xB7\u666E\u62C9\u63D0\u7684\u5065\u8EAB\u5927\u5E08\u6240\u521B\u9020\u3002\u5B83\u8D77\u521D\u662F\u4E3A\u4E86\u5E2E\u52A9\u53D7\u4F24\u7684\u58EB\u5175\u6062\u590D\u8EAB\u4F53\u800C\u8BDE\u751F\uFF0C\u4F46\u5F88\u5FEB\uFF0C\u5B83\u7684\u9B45\u529B\u5C31\u5438\u5F15\u4E86\u5168\u4E16\u754C\u3002\u666E\u62C9\u63D0\u4E0D\u4EC5\u4EC5\u662F\u4E00\u79CD\u953B\u70BC\uFF0C\u5B83\u662F\u4E00\u79CD\u827A\u672F\uFF0C\u4E00\u79CD\u8BA9\u8EAB\u4F53\u53D8\u5F97\u5F3A\u5065\u3001\u7075\u6D3B\u3001\u5E73\u8861\u7684\u827A\u672F\u3002 </p><br data-v-4b4011bc><p class="text-base leading-relaxed ml-4 mr-4 mb-4 text-left" style="${ssrRenderStyle({ "text-indent": "2em" })}" data-v-4b4011bc> \u666E\u62C9\u63D0\u7684\u7EC3\u4E60\u65B9\u5F0F\u591A\u79CD\u591A\u6837\uFF0C\u65E2\u6709\u4F7F\u7528\u5404\u79CD\u9177\u70AB\u5668\u68B0\u7684\uFF0C\u4E5F\u6709\u5728\u57AB\u5B50\u4E0A\u8FDB\u884C\u7684\u3002\u8FD9\u4E9B\u7EC3\u4E60\u4E0D\u4EC5\u8BA9\u4F60\u7684\u808C\u8089\u53D8\u5F97\u66F4\u5F3A\u58EE\uFF0C\u8FD8\u80FD\u8BA9\u4F60\u7684\u59FF\u52BF\u66F4\u633A\u62D4\uFF0C\u51CF\u5C11\u80CC\u75DB\uFF0C\u751A\u81F3\u5E2E\u4F60\u51CF\u8F7B\u538B\u529B\u548C\u7126\u8651\u3002 </p></div></div></div>`);
      _push(ssrRenderComponent(_component_el_divider, {
        "content-position": "right",
        class: "color-line"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="line-content" style="${ssrRenderStyle({ "color": "rgb(151, 61, 1)" })}" data-v-4b4011bc${_scopeId}>ALITA\u666E\u62C9\u63D0</span>`);
          } else {
            return [
              createVNode("span", {
                class: "line-content",
                style: { "color": "rgb(151, 61, 1)" }
              }, "ALITA\u666E\u62C9\u63D0")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="Pilates-introduce" data-v-4b4011bc><div class="Pilates-introduce-content" data-v-4b4011bc><h1 class="text-3xl font-bold mb-8 mt-11" style="${ssrRenderStyle({ "text-align": "right" })}" data-v-4b4011bc>\u9002\u7528\u4EBA\u7FA4</h1><div class="border" style="${ssrRenderStyle({ "border-color": "rgb(151, 61, 1)" })}" data-v-4b4011bc><p class="text-base leading-relaxed ml-4 mr-4 mt-4 text-left" style="${ssrRenderStyle({ "text-indent": "2em" })}" data-v-4b4011bc> \u666E\u62C9\u63D0\u662F\u4E00\u79CD\u9002\u5408\u6240\u6709\u4EBA\u7684\u953B\u70BC\u65B9\u5F0F\uFF0C\u5C24\u5176\u9002\u5408\u5EB7\u590D\u4E2D\u7684\u60A3\u8005\u3001\u5B55\u5987\u3001\u8001\u5E74\u4EBA\u3001\u8FD0\u52A8\u5458\u3001\u529E\u516C\u5BA4\u5DE5\u4F5C\u8005\u3001\u5065\u8EAB\u7231\u597D\u8005\u3001\u521D\u5B66\u8005\u3001\u5BFB\u6C42\u653E\u677E\u7684\u4EBA\uFF0C\u4EE5\u53CA\u8FFD\u6C42\u5065\u5EB7\u751F\u6D3B\u7684\u4EBA </p><br data-v-4b4011bc><p class="text-base leading-relaxed ml-4 mr-4 mb-4 text-left" style="${ssrRenderStyle({ "text-indent": "2em" })}" data-v-4b4011bc> \u5B83\u80FD\u5E2E\u52A9\u63D0\u9AD8\u6838\u5FC3\u7A33\u5B9A\u6027\u3001\u6539\u5584\u8EAB\u4F53\u59FF\u6001\u3001\u51CF\u5C11\u80CC\u75DB\u3001\u63D0\u9AD8\u5E73\u8861\u80FD\u529B\u548C\u7075\u6D3B\u6027\u3002\u7279\u522B\u662F\u5BF9\u4E8E\u8001\u5E74\u4EBA\u548C\u6709\u7279\u6B8A\u5065\u5EB7\u72B6\u51B5\u7684\u4EBA\uFF0C\u666E\u62C9\u63D0\u7684\u4F4E\u51B2\u51FB\u6027\u4F7F\u5176\u6210\u4E3A\u7406\u60F3\u9009\u62E9\u3002 </p></div></div><div class="Pilates-introduce-img" data-v-4b4011bc><img${ssrRenderAttr("src", _imports_1)} alt="Joseph" title="Joseph Pilates" data-v-4b4011bc></div></div>`);
      _push(ssrRenderComponent(_component_el_divider, { "content-position": "left" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="line-content" style="${ssrRenderStyle({ "color": "rgb(151, 61, 1)" })}" data-v-4b4011bc${_scopeId}>ALITA\u666E\u62C9\u63D0</p>`);
          } else {
            return [
              createVNode("p", {
                class: "line-content",
                style: { "color": "rgb(151, 61, 1)" }
              }, "ALITA\u666E\u62C9\u63D0")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="Pilates-introduce" data-v-4b4011bc><div class="Pilates-introduce-img" data-v-4b4011bc><img${ssrRenderAttr("src", _imports_2)} alt="Joseph" title="Joseph Pilates" data-v-4b4011bc></div><div class="Pilates-introduce-content" data-v-4b4011bc><h1 class="text-3xl font-bold mb-8 mt-11" data-v-4b4011bc>\u5E38\u89C1\u8FD0\u52A8\u5BF9\u6BD4</h1><div class="border" style="${ssrRenderStyle({ "border-color": "rgb(151, 61, 1)" })}" data-v-4b4011bc><p class="text-base leading-relaxed ml-4 mr-4 mt-4 text-left" style="${ssrRenderStyle({ "text-indent": "2em" })}" data-v-4b4011bc> \u666E\u62C9\u63D0\u4E0E\u745C\u4F3D\u76F8\u6BD4\uFF0C\u66F4\u4FA7\u91CD\u4E8E\u6838\u5FC3\u808C\u7FA4\u7684\u5F3A\u5316\u548C\u8EAB\u4F53\u534F\u8C03\u6027\uFF0C\u540C\u65F6\u5B83\u662F\u4E00\u79CD\u4F4E\u51B2\u51FB\u6027\u7684\u953B\u70BC\u65B9\u5F0F\uFF0C\u9002\u5408\u5404\u79CD\u8EAB\u4F53\u72B6\u51B5\u7684\u4EBA\u7FA4\u3002\u666E\u62C9\u63D0\u901A\u8FC7\u7CBE\u786E\u63A7\u5236\u548C\u534F\u8C03\u7684\u7EC3\u4E60\uFF0C\u6709\u52A9\u4E8E\u63D0\u9AD8\u8EAB\u4F53\u7684\u7A33\u5B9A\u6027\u548C\u5E73\u8861\u80FD\u529B\uFF0C\u800C\u745C\u4F3D\u5219\u66F4\u6CE8\u91CD\u6DF1\u5EA6\u4F38\u5C55\u548C\u7075\u6D3B\u6027\u7684\u63D0\u5347\u3002 </p><br data-v-4b4011bc><p class="text-base leading-relaxed ml-4 mr-4 mb-4 text-left" style="${ssrRenderStyle({ "text-indent": "2em" })}" data-v-4b4011bc> \u4E0E\u529B\u91CF\u8BAD\u7EC3\u76F8\u6BD4\uFF0C\u666E\u62C9\u63D0\u5F3A\u8C03\u7684\u662F\u5168\u8EAB\u5747\u8861\u53D1\u5C55\u548C\u4F4E\u53D7\u4F24\u98CE\u9669\u7684\u953B\u70BC\u3002\u5B83\u901A\u8FC7\u4E00\u7CFB\u5217\u7684\u7EC3\u4E60\u6765\u589E\u5F3A\u8EAB\u4F53\u7684\u534F\u8C03\u6027\u548C\u5E73\u8861\uFF0C\u540C\u65F6\u63D0\u9AD8\u8EAB\u4F53\u7684\u67D4\u97E7\u6027\u548C\u5173\u8282\u7684\u6D3B\u52A8\u8303\u56F4\u3002\u529B\u91CF\u8BAD\u7EC3\uFF08\u5982\u786C\u62C9\u3001\u6760\u94C3\u7B49\uFF09\u5219\u4E3B\u8981\u5173\u6CE8\u4E8E\u808C\u8089\u529B\u91CF\u548C\u4F53\u79EF\u7684\u589E\u52A0\uFF0C\u901A\u5E38\u4F34\u968F\u7740\u8F83\u9AD8\u7684\u51B2\u51FB\u548C\u5F3A\u5EA6\u3002 </p></div></div></div></div>`);
      _push(ssrRenderComponent(_component_footer_black, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-4b4011bc"]]);

export { index as default };
//# sourceMappingURL=index-0w3AgRls.mjs.map
