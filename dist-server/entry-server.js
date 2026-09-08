var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b;
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import React__default, { Component, useState, useEffect, lazy, Suspense } from "react";
import { renderToString } from "react-dom/server";
import { stripBasename, UNSAFE_warning, UNSAFE_invariant, matchPath, joinPaths, Action } from "@remix-run/router";
import { UNSAFE_NavigationContext, useHref, useNavigate, useLocation, useResolvedPath, createPath, UNSAFE_DataRouterStateContext, UNSAFE_useRouteId, UNSAFE_RouteContext, UNSAFE_DataRouterContext, parsePath, Router, Routes, Route } from "react-router";
import fastCompare from "react-fast-compare";
import invariant from "invariant";
import shallowEqual from "shallowequal";
import "react-dom";
/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
const defaultMethod = "get";
const defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && // Ignore everything but left clicks
  (!target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event);
}
let _formDataSupportsSubmitter = null;
function isFormDataSubmitterSupported() {
  if (_formDataSupportsSubmitter === null) {
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      );
      _formDataSupportsSubmitter = false;
    } catch (e) {
      _formDataSupportsSubmitter = true;
    }
  }
  return _formDataSupportsSubmitter;
}
const supportedFormEncTypes = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function getFormEncType(encType) {
  if (encType != null && !supportedFormEncTypes.has(encType)) {
    process.env.NODE_ENV !== "production" ? UNSAFE_warning(false, '"' + encType + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + defaultEncType + '"')) : void 0;
    return null;
  }
  return encType;
}
function getFormSubmissionInfo(target, basename) {
  let method;
  let action;
  let encType;
  let formData;
  let body;
  if (isFormElement(target)) {
    let attr = target.getAttribute("action");
    action = attr ? stripBasename(attr, basename) : null;
    method = target.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(target);
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;
    if (form == null) {
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    }
    let attr = target.getAttribute("formaction") || form.getAttribute("action");
    action = attr ? stripBasename(attr, basename) : null;
    method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(form, target);
    if (!isFormDataSubmitterSupported()) {
      let {
        name,
        type,
        value
      } = target;
      if (type === "image") {
        let prefix = name ? name + "." : "";
        formData.append(prefix + "x", "0");
        formData.append(prefix + "y", "0");
      } else if (name) {
        formData.append(name, value);
      }
    }
  } else if (isHtmlElement(target)) {
    throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
  } else {
    method = defaultMethod;
    action = null;
    encType = defaultEncType;
    body = target;
  }
  if (formData && encType === "text/plain") {
    body = formData;
    formData = void 0;
  }
  return {
    action,
    method: method.toLowerCase(),
    encType,
    formData,
    body
  };
}
const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"], _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"], _excluded3 = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"];
const REACT_ROUTER_VERSION = "6";
try {
  window.__reactRouterVersion = REACT_ROUTER_VERSION;
} catch (e) {
}
const ViewTransitionContext = /* @__PURE__ */ React.createContext({
  isTransitioning: false
});
if (process.env.NODE_ENV !== "production") {
  ViewTransitionContext.displayName = "ViewTransition";
}
const FetchersContext = /* @__PURE__ */ React.createContext(/* @__PURE__ */ new Map());
if (process.env.NODE_ENV !== "production") {
  FetchersContext.displayName = "Fetchers";
}
if (process.env.NODE_ENV !== "production") ;
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const ABSOLUTE_URL_REGEX$1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const Link = /* @__PURE__ */ React.forwardRef(function LinkWithRef(_ref7, ref) {
  let {
    onClick,
    relative,
    reloadDocument,
    replace,
    state,
    target,
    to,
    preventScrollReset,
    viewTransition
  } = _ref7, rest = _objectWithoutPropertiesLoose(_ref7, _excluded);
  let {
    basename
  } = React.useContext(UNSAFE_NavigationContext);
  let absoluteHref;
  let isExternal = false;
  if (typeof to === "string" && ABSOLUTE_URL_REGEX$1.test(to)) {
    absoluteHref = to;
    if (isBrowser) {
      try {
        let currentUrl = new URL(window.location.href);
        let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
        let path = stripBasename(targetUrl.pathname, basename);
        if (targetUrl.origin === currentUrl.origin && path != null) {
          to = path + targetUrl.search + targetUrl.hash;
        } else {
          isExternal = true;
        }
      } catch (e) {
        process.env.NODE_ENV !== "production" ? UNSAFE_warning(false, '<Link to="' + to + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.') : void 0;
      }
    }
  }
  let href = useHref(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
    preventScrollReset,
    relative,
    viewTransition
  });
  function handleClick(event) {
    if (onClick) onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ React.createElement("a", _extends({}, rest, {
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref,
      target
    }))
  );
});
if (process.env.NODE_ENV !== "production") {
  Link.displayName = "Link";
}
const NavLink = /* @__PURE__ */ React.forwardRef(function NavLinkWithRef(_ref8, ref) {
  let {
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    viewTransition,
    children
  } = _ref8, rest = _objectWithoutPropertiesLoose(_ref8, _excluded2);
  let path = useResolvedPath(to, {
    relative: rest.relative
  });
  let location = useLocation();
  let routerState = React.useContext(UNSAFE_DataRouterStateContext);
  let {
    navigator,
    basename
  } = React.useContext(UNSAFE_NavigationContext);
  let isTransitioning = routerState != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useViewTransitionState(path) && viewTransition === true;
  let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
  let locationPathname = location.pathname;
  let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
    toPathname = toPathname.toLowerCase();
  }
  if (nextLocationPathname && basename) {
    nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
  }
  const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
  let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
  let renderProps = {
    isActive,
    isPending,
    isTransitioning
  };
  let ariaCurrent = isActive ? ariaCurrentProp : void 0;
  let className;
  if (typeof classNameProp === "function") {
    className = classNameProp(renderProps);
  } else {
    className = [classNameProp, isActive ? "active" : null, isPending ? "pending" : null, isTransitioning ? "transitioning" : null].filter(Boolean).join(" ");
  }
  let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
  return /* @__PURE__ */ React.createElement(Link, _extends({}, rest, {
    "aria-current": ariaCurrent,
    className,
    ref,
    style,
    to,
    viewTransition
  }), typeof children === "function" ? children(renderProps) : children);
});
if (process.env.NODE_ENV !== "production") {
  NavLink.displayName = "NavLink";
}
const Form = /* @__PURE__ */ React.forwardRef((_ref9, forwardedRef) => {
  let {
    fetcherKey,
    navigate,
    reloadDocument,
    replace,
    state,
    method = defaultMethod,
    action,
    onSubmit,
    relative,
    preventScrollReset,
    viewTransition
  } = _ref9, props = _objectWithoutPropertiesLoose(_ref9, _excluded3);
  let submit = useSubmit();
  let formAction = useFormAction(action, {
    relative
  });
  let formMethod = method.toLowerCase() === "get" ? "get" : "post";
  let submitHandler = (event) => {
    onSubmit && onSubmit(event);
    if (event.defaultPrevented) return;
    event.preventDefault();
    let submitter = event.nativeEvent.submitter;
    let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
    submit(submitter || event.currentTarget, {
      fetcherKey,
      method: submitMethod,
      navigate,
      replace,
      state,
      relative,
      preventScrollReset,
      viewTransition
    });
  };
  return /* @__PURE__ */ React.createElement("form", _extends({
    ref: forwardedRef,
    method: formMethod,
    action: formAction,
    onSubmit: reloadDocument ? onSubmit : submitHandler
  }, props));
});
if (process.env.NODE_ENV !== "production") {
  Form.displayName = "Form";
}
if (process.env.NODE_ENV !== "production") ;
var DataRouterHook;
(function(DataRouterHook2) {
  DataRouterHook2["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook2["UseSubmit"] = "useSubmit";
  DataRouterHook2["UseSubmitFetcher"] = "useSubmitFetcher";
  DataRouterHook2["UseFetcher"] = "useFetcher";
  DataRouterHook2["useViewTransitionState"] = "useViewTransitionState";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function(DataRouterStateHook2) {
  DataRouterStateHook2["UseFetcher"] = "useFetcher";
  DataRouterStateHook2["UseFetchers"] = "useFetchers";
  DataRouterStateHook2["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
  let ctx = React.useContext(UNSAFE_DataRouterContext);
  !ctx ? process.env.NODE_ENV !== "production" ? UNSAFE_invariant(false, getDataRouterConsoleError(hookName)) : UNSAFE_invariant(false) : void 0;
  return ctx;
}
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative,
    viewTransition
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to, {
    relative
  });
  return React.useCallback((event) => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      let replace = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
      navigate(to, {
        replace,
        state,
        preventScrollReset,
        relative,
        viewTransition
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative, viewTransition]);
}
function validateClientSideSubmission() {
  if (typeof document === "undefined") {
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
  }
}
let fetcherId = 0;
let getUniqueFetcherId = () => "__" + String(++fetcherId) + "__";
function useSubmit() {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseSubmit);
  let {
    basename
  } = React.useContext(UNSAFE_NavigationContext);
  let currentRouteId = UNSAFE_useRouteId();
  return React.useCallback(function(target, options) {
    if (options === void 0) {
      options = {};
    }
    validateClientSideSubmission();
    let {
      action,
      method,
      encType,
      formData,
      body
    } = getFormSubmissionInfo(target, basename);
    if (options.navigate === false) {
      let key = options.fetcherKey || getUniqueFetcherId();
      router.fetch(key, currentRouteId, options.action || action, {
        preventScrollReset: options.preventScrollReset,
        formData,
        body,
        formMethod: options.method || method,
        formEncType: options.encType || encType,
        flushSync: options.flushSync
      });
    } else {
      router.navigate(options.action || action, {
        preventScrollReset: options.preventScrollReset,
        formData,
        body,
        formMethod: options.method || method,
        formEncType: options.encType || encType,
        replace: options.replace,
        state: options.state,
        fromRouteId: currentRouteId,
        flushSync: options.flushSync,
        viewTransition: options.viewTransition
      });
    }
  }, [router, basename, currentRouteId]);
}
function useFormAction(action, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    basename
  } = React.useContext(UNSAFE_NavigationContext);
  let routeContext = React.useContext(UNSAFE_RouteContext);
  !routeContext ? process.env.NODE_ENV !== "production" ? UNSAFE_invariant(false, "useFormAction must be used inside a RouteContext") : UNSAFE_invariant(false) : void 0;
  let [match] = routeContext.matches.slice(-1);
  let path = _extends({}, useResolvedPath(action ? action : ".", {
    relative
  }));
  let location = useLocation();
  if (action == null) {
    path.search = location.search;
    let params = new URLSearchParams(path.search);
    let indexValues = params.getAll("index");
    let hasNakedIndexParam = indexValues.some((v) => v === "");
    if (hasNakedIndexParam) {
      params.delete("index");
      indexValues.filter((v) => v).forEach((v) => params.append("index", v));
      let qs = params.toString();
      path.search = qs ? "?" + qs : "";
    }
  }
  if ((!action || action === ".") && match.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  }
  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
  }
  return createPath(path);
}
function useViewTransitionState(to, opts) {
  if (opts === void 0) {
    opts = {};
  }
  let vtContext = React.useContext(ViewTransitionContext);
  !(vtContext != null) ? process.env.NODE_ENV !== "production" ? UNSAFE_invariant(false, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : UNSAFE_invariant(false) : void 0;
  let {
    basename
  } = useDataRouterContext(DataRouterHook.useViewTransitionState);
  let path = useResolvedPath(to, {
    relative: opts.relative
  });
  if (!vtContext.isTransitioning) {
    return false;
  }
  let currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
  let nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
  return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
}
function StaticRouter({
  basename,
  children,
  location: locationProp = "/",
  future
}) {
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let action = Action.Pop;
  let location = {
    pathname: locationProp.pathname || "/",
    search: locationProp.search || "",
    hash: locationProp.hash || "",
    state: locationProp.state != null ? locationProp.state : null,
    key: locationProp.key || "default"
  };
  let staticNavigator = getStatelessNavigator();
  return /* @__PURE__ */ React.createElement(Router, {
    basename,
    children,
    location,
    navigationType: action,
    navigator: staticNavigator,
    future,
    static: true
  });
}
function getStatelessNavigator() {
  return {
    createHref,
    encodeLocation,
    push(to) {
      throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)})\` somewhere in your app.`);
    },
    replace(to) {
      throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)}, { replace: true })\` somewhere in your app.`);
    },
    go(delta) {
      throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${delta})\` somewhere in your app.`);
    },
    back() {
      throw new Error(`You cannot use navigator.back() on the server because it is a stateless environment.`);
    },
    forward() {
      throw new Error(`You cannot use navigator.forward() on the server because it is a stateless environment.`);
    }
  };
}
function createHref(to) {
  return typeof to === "string" ? to : createPath(to);
}
function encodeLocation(to) {
  let href = typeof to === "string" ? to : createPath(to);
  href = href.replace(/ $/, "%20");
  let encoded = ABSOLUTE_URL_REGEX.test(href) ? new URL(href) : new URL(href, "http://localhost");
  return {
    pathname: encoded.pathname,
    search: encoded.search,
    hash: encoded.hash
  };
}
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var TAG_NAMES = /* @__PURE__ */ ((TAG_NAMES2) => {
  TAG_NAMES2["BASE"] = "base";
  TAG_NAMES2["BODY"] = "body";
  TAG_NAMES2["HEAD"] = "head";
  TAG_NAMES2["HTML"] = "html";
  TAG_NAMES2["LINK"] = "link";
  TAG_NAMES2["META"] = "meta";
  TAG_NAMES2["NOSCRIPT"] = "noscript";
  TAG_NAMES2["SCRIPT"] = "script";
  TAG_NAMES2["STYLE"] = "style";
  TAG_NAMES2["TITLE"] = "title";
  TAG_NAMES2["FRAGMENT"] = "Symbol(react.fragment)";
  return TAG_NAMES2;
})(TAG_NAMES || {});
var SEO_PRIORITY_TAGS = {
  link: { rel: ["amphtml", "canonical", "alternate"] },
  script: { type: ["application/ld+json"] },
  meta: {
    charset: "",
    name: ["generator", "robots", "description"],
    property: [
      "og:type",
      "og:title",
      "og:url",
      "og:image",
      "og:image:alt",
      "og:description",
      "twitter:url",
      "twitter:title",
      "twitter:description",
      "twitter:image",
      "twitter:image:alt",
      "twitter:card",
      "twitter:site"
    ]
  }
};
var VALID_TAG_NAMES = Object.values(TAG_NAMES);
var REACT_TAG_MAP = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
};
var HTML_TAG_MAP = Object.entries(REACT_TAG_MAP).reduce(
  (carry, [key, value]) => {
    carry[value] = key;
    return carry;
  },
  {}
);
var HELMET_ATTRIBUTE = "data-rh";
var HELMET_PROPS = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate",
  PRIORITIZE_SEO_TAGS: "prioritizeSeoTags"
};
var getInnermostProperty = (propsList, property) => {
  for (let i = propsList.length - 1; i >= 0; i -= 1) {
    const props = propsList[i];
    if (Object.prototype.hasOwnProperty.call(props, property)) {
      return props[property];
    }
  }
  return null;
};
var getTitleFromPropsList = (propsList) => {
  let innermostTitle = getInnermostProperty(
    propsList,
    "title"
    /* TITLE */
  );
  const innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);
  if (Array.isArray(innermostTitle)) {
    innermostTitle = innermostTitle.join("");
  }
  if (innermostTemplate && innermostTitle) {
    return innermostTemplate.replace(/%s/g, () => innermostTitle);
  }
  const innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);
  return innermostTitle || innermostDefaultTitle || void 0;
};
var getOnChangeClientState = (propsList) => getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || (() => {
});
var getAttributesFromPropsList = (tagType, propsList) => propsList.filter((props) => typeof props[tagType] !== "undefined").map((props) => props[tagType]).reduce((tagAttrs, current) => ({ ...tagAttrs, ...current }), {});
var getBaseTagFromPropsList = (primaryAttributes, propsList) => propsList.filter((props) => typeof props[
  "base"
  /* BASE */
] !== "undefined").map((props) => props[
  "base"
  /* BASE */
]).reverse().reduce((innermostBaseTag, tag) => {
  if (!innermostBaseTag.length) {
    const keys = Object.keys(tag);
    for (let i = 0; i < keys.length; i += 1) {
      const attributeKey = keys[i];
      const lowerCaseAttributeKey = attributeKey.toLowerCase();
      if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
        return innermostBaseTag.concat(tag);
      }
    }
  }
  return innermostBaseTag;
}, []);
var warn = (msg) => console && typeof console.warn === "function" && console.warn(msg);
var getTagsFromPropsList = (tagName, primaryAttributes, propsList) => {
  const approvedSeenTags = {};
  return propsList.filter((props) => {
    if (Array.isArray(props[tagName])) {
      return true;
    }
    if (typeof props[tagName] !== "undefined") {
      warn(
        `Helmet: ${tagName} should be of type "Array". Instead found type "${typeof props[tagName]}"`
      );
    }
    return false;
  }).map((props) => props[tagName]).reverse().reduce((approvedTags, instanceTags) => {
    const instanceSeenTags = {};
    instanceTags.filter((tag) => {
      let primaryAttributeKey;
      const keys2 = Object.keys(tag);
      for (let i = 0; i < keys2.length; i += 1) {
        const attributeKey = keys2[i];
        const lowerCaseAttributeKey = attributeKey.toLowerCase();
        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === "rel" && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === "rel" && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
          primaryAttributeKey = lowerCaseAttributeKey;
        }
        if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === "innerHTML" || attributeKey === "cssText" || attributeKey === "itemprop")) {
          primaryAttributeKey = attributeKey;
        }
      }
      if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
        return false;
      }
      const value = tag[primaryAttributeKey].toLowerCase();
      if (!approvedSeenTags[primaryAttributeKey]) {
        approvedSeenTags[primaryAttributeKey] = {};
      }
      if (!instanceSeenTags[primaryAttributeKey]) {
        instanceSeenTags[primaryAttributeKey] = {};
      }
      if (!approvedSeenTags[primaryAttributeKey][value]) {
        instanceSeenTags[primaryAttributeKey][value] = true;
        return true;
      }
      return false;
    }).reverse().forEach((tag) => approvedTags.push(tag));
    const keys = Object.keys(instanceSeenTags);
    for (let i = 0; i < keys.length; i += 1) {
      const attributeKey = keys[i];
      const tagUnion = {
        ...approvedSeenTags[attributeKey],
        ...instanceSeenTags[attributeKey]
      };
      approvedSeenTags[attributeKey] = tagUnion;
    }
    return approvedTags;
  }, []).reverse();
};
var getAnyTrueFromPropsList = (propsList, checkedTag) => {
  if (Array.isArray(propsList) && propsList.length) {
    for (let index = 0; index < propsList.length; index += 1) {
      const prop = propsList[index];
      if (prop[checkedTag]) {
        return true;
      }
    }
  }
  return false;
};
var reducePropsToState = (propsList) => ({
  baseTag: getBaseTagFromPropsList([
    "href"
    /* HREF */
  ], propsList),
  bodyAttributes: getAttributesFromPropsList("bodyAttributes", propsList),
  defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
  encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
  htmlAttributes: getAttributesFromPropsList("htmlAttributes", propsList),
  linkTags: getTagsFromPropsList(
    "link",
    [
      "rel",
      "href"
      /* HREF */
    ],
    propsList
  ),
  metaTags: getTagsFromPropsList(
    "meta",
    [
      "name",
      "charset",
      "http-equiv",
      "property",
      "itemprop"
      /* ITEM_PROP */
    ],
    propsList
  ),
  noscriptTags: getTagsFromPropsList("noscript", [
    "innerHTML"
    /* INNER_HTML */
  ], propsList),
  onChangeClientState: getOnChangeClientState(propsList),
  scriptTags: getTagsFromPropsList(
    "script",
    [
      "src",
      "innerHTML"
      /* INNER_HTML */
    ],
    propsList
  ),
  styleTags: getTagsFromPropsList("style", [
    "cssText"
    /* CSS_TEXT */
  ], propsList),
  title: getTitleFromPropsList(propsList),
  titleAttributes: getAttributesFromPropsList("titleAttributes", propsList),
  prioritizeSeoTags: getAnyTrueFromPropsList(propsList, HELMET_PROPS.PRIORITIZE_SEO_TAGS)
});
var flattenArray = (possibleArray) => Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
var checkIfPropsMatch = (props, toMatch) => {
  const keys = Object.keys(props);
  for (let i = 0; i < keys.length; i += 1) {
    if (toMatch[keys[i]] && toMatch[keys[i]].includes(props[keys[i]])) {
      return true;
    }
  }
  return false;
};
var prioritizer = (elementsList, propsToMatch) => {
  if (Array.isArray(elementsList)) {
    return elementsList.reduce(
      (acc, elementAttrs) => {
        if (checkIfPropsMatch(elementAttrs, propsToMatch)) {
          acc.priority.push(elementAttrs);
        } else {
          acc.default.push(elementAttrs);
        }
        return acc;
      },
      { priority: [], default: [] }
    );
  }
  return { default: elementsList, priority: [] };
};
var without = (obj, key) => {
  return {
    ...obj,
    [key]: void 0
  };
};
var SELF_CLOSING_TAGS = [
  "noscript",
  "script",
  "style"
  /* STYLE */
];
var encodeSpecialCharacters = (str, encode = true) => {
  if (encode === false) {
    return String(str);
  }
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};
var generateElementAttributesAsString = (attributes) => Object.keys(attributes).reduce((str, key) => {
  const attr = typeof attributes[key] !== "undefined" ? `${key}="${attributes[key]}"` : `${key}`;
  return str ? `${str} ${attr}` : attr;
}, "");
var generateTitleAsString = (type, title, attributes, encode) => {
  const attributeString = generateElementAttributesAsString(attributes);
  const flattenedTitle = flattenArray(title);
  return attributeString ? `<${type} ${HELMET_ATTRIBUTE}="true" ${attributeString}>${encodeSpecialCharacters(
    flattenedTitle,
    encode
  )}</${type}>` : `<${type} ${HELMET_ATTRIBUTE}="true">${encodeSpecialCharacters(
    flattenedTitle,
    encode
  )}</${type}>`;
};
var generateTagsAsString = (type, tags, encode = true) => tags.reduce((str, t) => {
  const tag = t;
  const attributeHtml = Object.keys(tag).filter(
    (attribute) => !(attribute === "innerHTML" || attribute === "cssText")
  ).reduce((string, attribute) => {
    const attr = typeof tag[attribute] === "undefined" ? attribute : `${attribute}="${encodeSpecialCharacters(tag[attribute], encode)}"`;
    return string ? `${string} ${attr}` : attr;
  }, "");
  const tagContent = tag.innerHTML || tag.cssText || "";
  const isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;
  return `${str}<${type} ${HELMET_ATTRIBUTE}="true" ${attributeHtml}${isSelfClosing ? `/>` : `>${tagContent}</${type}>`}`;
}, "");
var convertElementAttributesToReactProps = (attributes, initProps = {}) => Object.keys(attributes).reduce((obj, key) => {
  const mapped = REACT_TAG_MAP[key];
  obj[mapped || key] = attributes[key];
  return obj;
}, initProps);
var generateTitleAsReactComponent = (_type, title, attributes) => {
  const initProps = {
    key: title,
    [HELMET_ATTRIBUTE]: true
  };
  const props = convertElementAttributesToReactProps(attributes, initProps);
  return [React__default.createElement("title", props, title)];
};
var generateTagsAsReactComponent = (type, tags) => tags.map((tag, i) => {
  const mappedTag = {
    key: i,
    [HELMET_ATTRIBUTE]: true
  };
  Object.keys(tag).forEach((attribute) => {
    const mapped = REACT_TAG_MAP[attribute];
    const mappedAttribute = mapped || attribute;
    if (mappedAttribute === "innerHTML" || mappedAttribute === "cssText") {
      const content = tag.innerHTML || tag.cssText;
      mappedTag.dangerouslySetInnerHTML = { __html: content };
    } else {
      mappedTag[mappedAttribute] = tag[attribute];
    }
  });
  return React__default.createElement(type, mappedTag);
});
var getMethodsForTag = (type, tags, encode = true) => {
  switch (type) {
    case "title":
      return {
        toComponent: () => generateTitleAsReactComponent(type, tags.title, tags.titleAttributes),
        toString: () => generateTitleAsString(type, tags.title, tags.titleAttributes, encode)
      };
    case "bodyAttributes":
    case "htmlAttributes":
      return {
        toComponent: () => convertElementAttributesToReactProps(tags),
        toString: () => generateElementAttributesAsString(tags)
      };
    default:
      return {
        toComponent: () => generateTagsAsReactComponent(type, tags),
        toString: () => generateTagsAsString(type, tags, encode)
      };
  }
};
var getPriorityMethods = ({ metaTags, linkTags, scriptTags, encode }) => {
  const meta = prioritizer(metaTags, SEO_PRIORITY_TAGS.meta);
  const link = prioritizer(linkTags, SEO_PRIORITY_TAGS.link);
  const script = prioritizer(scriptTags, SEO_PRIORITY_TAGS.script);
  const priorityMethods = {
    toComponent: () => [
      ...generateTagsAsReactComponent("meta", meta.priority),
      ...generateTagsAsReactComponent("link", link.priority),
      ...generateTagsAsReactComponent("script", script.priority)
    ],
    toString: () => (
      // generate all the tags as strings and concatenate them
      `${getMethodsForTag("meta", meta.priority, encode)} ${getMethodsForTag(
        "link",
        link.priority,
        encode
      )} ${getMethodsForTag("script", script.priority, encode)}`
    )
  };
  return {
    priorityMethods,
    metaTags: meta.default,
    linkTags: link.default,
    scriptTags: script.default
  };
};
var mapStateOnServer = (props) => {
  const {
    baseTag,
    bodyAttributes,
    encode = true,
    htmlAttributes,
    noscriptTags,
    styleTags,
    title = "",
    titleAttributes,
    prioritizeSeoTags
  } = props;
  let { linkTags, metaTags, scriptTags } = props;
  let priorityMethods = {
    toComponent: () => [],
    toString: () => ""
  };
  if (prioritizeSeoTags) {
    ({ priorityMethods, linkTags, metaTags, scriptTags } = getPriorityMethods(props));
  }
  return {
    priority: priorityMethods,
    base: getMethodsForTag("base", baseTag, encode),
    bodyAttributes: getMethodsForTag("bodyAttributes", bodyAttributes, encode),
    htmlAttributes: getMethodsForTag("htmlAttributes", htmlAttributes, encode),
    link: getMethodsForTag("link", linkTags, encode),
    meta: getMethodsForTag("meta", metaTags, encode),
    noscript: getMethodsForTag("noscript", noscriptTags, encode),
    script: getMethodsForTag("script", scriptTags, encode),
    style: getMethodsForTag("style", styleTags, encode),
    title: getMethodsForTag("title", { title, titleAttributes }, encode)
  };
};
var server_default = mapStateOnServer;
var instances = [];
var isDocument = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var HelmetData = class {
  constructor(context, canUseDOM) {
    __publicField(this, "instances", []);
    __publicField(this, "canUseDOM", isDocument);
    __publicField(this, "context");
    __publicField(this, "value", {
      setHelmet: (serverState) => {
        this.context.helmet = serverState;
      },
      helmetInstances: {
        get: () => this.canUseDOM ? instances : this.instances,
        add: (instance) => {
          (this.canUseDOM ? instances : this.instances).push(instance);
        },
        remove: (instance) => {
          const index = (this.canUseDOM ? instances : this.instances).indexOf(instance);
          (this.canUseDOM ? instances : this.instances).splice(index, 1);
        }
      }
    });
    this.context = context;
    this.canUseDOM = canUseDOM || false;
    if (!canUseDOM) {
      context.helmet = server_default({
        baseTag: [],
        bodyAttributes: {},
        htmlAttributes: {},
        linkTags: [],
        metaTags: [],
        noscriptTags: [],
        scriptTags: [],
        styleTags: [],
        title: "",
        titleAttributes: {}
      });
    }
  }
};
var major = parseInt(React__default.version.split(".")[0], 10);
var isReact19 = major >= 19;
var defaultValue = {};
var Context = React__default.createContext(defaultValue);
var HelmetProvider = (_a = class extends Component {
  constructor(props) {
    super(props);
    __publicField(this, "helmetData");
    if (isReact19) {
      this.helmetData = null;
    } else {
      this.helmetData = new HelmetData(this.props.context || {}, _a.canUseDOM);
    }
  }
  render() {
    if (isReact19) {
      return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, this.props.children);
    }
    return /* @__PURE__ */ React__default.createElement(Context.Provider, { value: this.helmetData.value }, this.props.children);
  }
}, __publicField(_a, "canUseDOM", isDocument), _a);
var updateTags = (type, tags) => {
  const headElement = document.head || document.querySelector(
    "head"
    /* HEAD */
  );
  const tagNodes = headElement.querySelectorAll(`${type}[${HELMET_ATTRIBUTE}]`);
  const oldTags = [].slice.call(tagNodes);
  const newTags = [];
  let indexToDelete;
  if (tags && tags.length) {
    tags.forEach((tag) => {
      const newElement = document.createElement(type);
      for (const attribute in tag) {
        if (Object.prototype.hasOwnProperty.call(tag, attribute)) {
          if (attribute === "innerHTML") {
            newElement.innerHTML = tag.innerHTML;
          } else if (attribute === "cssText") {
            const cssText = tag.cssText;
            newElement.appendChild(document.createTextNode(cssText));
          } else {
            const attr = attribute;
            const value = typeof tag[attr] === "undefined" ? "" : tag[attr];
            newElement.setAttribute(attribute, value);
          }
        }
      }
      newElement.setAttribute(HELMET_ATTRIBUTE, "true");
      if (oldTags.some((existingTag, index) => {
        indexToDelete = index;
        return newElement.isEqualNode(existingTag);
      })) {
        oldTags.splice(indexToDelete, 1);
      } else {
        newTags.push(newElement);
      }
    });
  }
  oldTags.forEach((tag) => {
    var _a2;
    return (_a2 = tag.parentNode) == null ? void 0 : _a2.removeChild(tag);
  });
  newTags.forEach((tag) => headElement.appendChild(tag));
  return {
    oldTags,
    newTags
  };
};
var updateAttributes = (tagName, attributes) => {
  const elementTag = document.getElementsByTagName(tagName)[0];
  if (!elementTag) {
    return;
  }
  const helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
  const helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
  const attributesToRemove = [...helmetAttributes];
  const attributeKeys = Object.keys(attributes);
  for (const attribute of attributeKeys) {
    const value = attributes[attribute] || "";
    if (elementTag.getAttribute(attribute) !== value) {
      elementTag.setAttribute(attribute, value);
    }
    if (helmetAttributes.indexOf(attribute) === -1) {
      helmetAttributes.push(attribute);
    }
    const indexToSave = attributesToRemove.indexOf(attribute);
    if (indexToSave !== -1) {
      attributesToRemove.splice(indexToSave, 1);
    }
  }
  for (let i = attributesToRemove.length - 1; i >= 0; i -= 1) {
    elementTag.removeAttribute(attributesToRemove[i]);
  }
  if (helmetAttributes.length === attributesToRemove.length) {
    elementTag.removeAttribute(HELMET_ATTRIBUTE);
  } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
    elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
  }
};
var updateTitle = (title, attributes) => {
  if (typeof title !== "undefined" && document.title !== title) {
    document.title = flattenArray(title);
  }
  updateAttributes("title", attributes);
};
var commitTagChanges = (newState, cb) => {
  const {
    baseTag,
    bodyAttributes,
    htmlAttributes,
    linkTags,
    metaTags,
    noscriptTags,
    onChangeClientState,
    scriptTags,
    styleTags,
    title,
    titleAttributes
  } = newState;
  updateAttributes("body", bodyAttributes);
  updateAttributes("html", htmlAttributes);
  updateTitle(title, titleAttributes);
  const tagUpdates = {
    baseTag: updateTags("base", baseTag),
    linkTags: updateTags("link", linkTags),
    metaTags: updateTags("meta", metaTags),
    noscriptTags: updateTags("noscript", noscriptTags),
    scriptTags: updateTags("script", scriptTags),
    styleTags: updateTags("style", styleTags)
  };
  const addedTags = {};
  const removedTags = {};
  Object.keys(tagUpdates).forEach((tagType) => {
    const { newTags, oldTags } = tagUpdates[tagType];
    if (newTags.length) {
      addedTags[tagType] = newTags;
    }
    if (oldTags.length) {
      removedTags[tagType] = tagUpdates[tagType].oldTags;
    }
  });
  if (cb) {
    cb();
  }
  onChangeClientState(newState, addedTags, removedTags);
};
var _helmetCallback = null;
var handleStateChangeOnClient = (newState) => {
  if (_helmetCallback) {
    cancelAnimationFrame(_helmetCallback);
  }
  if (newState.defer) {
    _helmetCallback = requestAnimationFrame(() => {
      commitTagChanges(newState, () => {
        _helmetCallback = null;
      });
    });
  } else {
    commitTagChanges(newState);
    _helmetCallback = null;
  }
};
var client_default = handleStateChangeOnClient;
var HelmetDispatcher = class extends Component {
  constructor() {
    super(...arguments);
    __publicField(this, "rendered", false);
  }
  shouldComponentUpdate(nextProps) {
    return !shallowEqual(nextProps, this.props);
  }
  componentDidUpdate() {
    this.emitChange();
  }
  componentWillUnmount() {
    const { helmetInstances } = this.props.context;
    helmetInstances.remove(this);
    this.emitChange();
  }
  emitChange() {
    const { helmetInstances, setHelmet } = this.props.context;
    let serverState = null;
    const state = reducePropsToState(
      helmetInstances.get().map((instance) => {
        const { context: _context, ...props } = instance.props;
        return props;
      })
    );
    if (HelmetProvider.canUseDOM) {
      client_default(state);
    } else if (server_default) {
      serverState = server_default(state);
    }
    setHelmet(serverState);
  }
  // componentWillMount will be deprecated
  // for SSR, initialize on first render
  // constructor is also unsafe in StrictMode
  init() {
    if (this.rendered) {
      return;
    }
    this.rendered = true;
    const { helmetInstances } = this.props.context;
    helmetInstances.add(this);
    this.emitChange();
  }
  render() {
    this.init();
    return null;
  }
};
var react19Instances = [];
var toHtmlAttributes = (props) => {
  const result = {};
  for (const key of Object.keys(props)) {
    result[HTML_TAG_MAP[key] || key] = props[key];
  }
  return result;
};
var toReactProps = (attrs) => {
  const result = {};
  for (const key of Object.keys(attrs)) {
    const mapped = REACT_TAG_MAP[key];
    result[mapped || key] = attrs[key];
  }
  return result;
};
var applyAttributes = (tagName, attributes) => {
  if (!isDocument)
    return;
  const el = document.getElementsByTagName(tagName)[0];
  if (!el)
    return;
  const managedAttr = "data-rh-managed";
  const prev = el.getAttribute(managedAttr);
  const prevKeys = prev ? prev.split(",") : [];
  const nextKeys = Object.keys(attributes);
  for (const key of prevKeys) {
    if (!nextKeys.includes(key)) {
      el.removeAttribute(key);
    }
  }
  for (const key of nextKeys) {
    const value = attributes[key];
    if (value === void 0 || value === null || value === false) {
      el.removeAttribute(key);
    } else if (value === true) {
      el.setAttribute(key, "");
    } else {
      el.setAttribute(key, String(value));
    }
  }
  if (nextKeys.length > 0) {
    el.setAttribute(managedAttr, nextKeys.join(","));
  } else {
    el.removeAttribute(managedAttr);
  }
};
var syncAllAttributes = () => {
  const htmlAttrs = {};
  const bodyAttrs = {};
  for (const instance of react19Instances) {
    const { htmlAttributes, bodyAttributes } = instance.props;
    if (htmlAttributes) {
      Object.assign(htmlAttrs, toHtmlAttributes(htmlAttributes));
    }
    if (bodyAttributes) {
      Object.assign(bodyAttrs, toHtmlAttributes(bodyAttributes));
    }
  }
  applyAttributes("html", htmlAttrs);
  applyAttributes("body", bodyAttrs);
};
var React19Dispatcher = class extends Component {
  componentDidMount() {
    react19Instances.push(this);
    syncAllAttributes();
  }
  componentDidUpdate() {
    syncAllAttributes();
  }
  componentWillUnmount() {
    const index = react19Instances.indexOf(this);
    if (index !== -1) {
      react19Instances.splice(index, 1);
    }
    syncAllAttributes();
  }
  resolveTitle() {
    const { title, titleTemplate, defaultTitle } = this.props;
    if (title && titleTemplate) {
      return titleTemplate.replace(/%s/g, () => Array.isArray(title) ? title.join("") : title);
    }
    return title || defaultTitle || void 0;
  }
  renderTitle() {
    const title = this.resolveTitle();
    if (title === void 0)
      return null;
    const titleAttributes = this.props.titleAttributes || {};
    return React__default.createElement("title", toReactProps(titleAttributes), title);
  }
  renderBase() {
    const { base } = this.props;
    if (!base)
      return null;
    return React__default.createElement("base", toReactProps(base));
  }
  renderMeta() {
    const { meta } = this.props;
    if (!meta || !Array.isArray(meta))
      return null;
    return meta.map(
      (attrs, i) => React__default.createElement("meta", {
        key: i,
        ...toReactProps(attrs)
      })
    );
  }
  renderLink() {
    const { link } = this.props;
    if (!link || !Array.isArray(link))
      return null;
    return link.map(
      (attrs, i) => React__default.createElement("link", {
        key: i,
        ...toReactProps(attrs)
      })
    );
  }
  renderScript() {
    const { script } = this.props;
    if (!script || !Array.isArray(script))
      return null;
    return script.map((attrs, i) => {
      const { innerHTML, ...rest } = attrs;
      const props = toReactProps(rest);
      if (innerHTML) {
        props.dangerouslySetInnerHTML = { __html: innerHTML };
      }
      return React__default.createElement("script", { key: i, ...props });
    });
  }
  renderStyle() {
    const { style } = this.props;
    if (!style || !Array.isArray(style))
      return null;
    return style.map((attrs, i) => {
      const { cssText, ...rest } = attrs;
      const props = toReactProps(rest);
      if (cssText) {
        props.dangerouslySetInnerHTML = { __html: cssText };
      }
      return React__default.createElement("style", { key: i, ...props });
    });
  }
  renderNoscript() {
    const { noscript } = this.props;
    if (!noscript || !Array.isArray(noscript))
      return null;
    return noscript.map((attrs, i) => {
      const { innerHTML, ...rest } = attrs;
      const props = toReactProps(rest);
      if (innerHTML) {
        props.dangerouslySetInnerHTML = { __html: innerHTML };
      }
      return React__default.createElement("noscript", { key: i, ...props });
    });
  }
  render() {
    return React__default.createElement(
      React__default.Fragment,
      null,
      this.renderTitle(),
      this.renderBase(),
      this.renderMeta(),
      this.renderLink(),
      this.renderScript(),
      this.renderStyle(),
      this.renderNoscript()
    );
  }
};
var Helmet = (_b = class extends Component {
  shouldComponentUpdate(nextProps) {
    return !fastCompare(without(this.props, "helmetData"), without(nextProps, "helmetData"));
  }
  mapNestedChildrenToProps(child, nestedChildren) {
    if (!nestedChildren) {
      return null;
    }
    switch (child.type) {
      case "script":
      case "noscript":
        return {
          innerHTML: nestedChildren
        };
      case "style":
        return {
          cssText: nestedChildren
        };
      default:
        throw new Error(
          `<${child.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`
        );
    }
  }
  flattenArrayTypeChildren(child, arrayTypeChildren, newChildProps, nestedChildren) {
    return {
      ...arrayTypeChildren,
      [child.type]: [
        ...arrayTypeChildren[child.type] || [],
        {
          ...newChildProps,
          ...this.mapNestedChildrenToProps(child, nestedChildren)
        }
      ]
    };
  }
  mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren) {
    switch (child.type) {
      case "title":
        return {
          ...newProps,
          [child.type]: nestedChildren,
          titleAttributes: { ...newChildProps }
        };
      case "body":
        return {
          ...newProps,
          bodyAttributes: { ...newChildProps }
        };
      case "html":
        return {
          ...newProps,
          htmlAttributes: { ...newChildProps }
        };
      default:
        return {
          ...newProps,
          [child.type]: { ...newChildProps }
        };
    }
  }
  mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
    let newFlattenedProps = { ...newProps };
    Object.keys(arrayTypeChildren).forEach((arrayChildName) => {
      newFlattenedProps = {
        ...newFlattenedProps,
        [arrayChildName]: arrayTypeChildren[arrayChildName]
      };
    });
    return newFlattenedProps;
  }
  warnOnInvalidChildren(child, nestedChildren) {
    invariant(
      VALID_TAG_NAMES.some((name) => child.type === name),
      typeof child.type === "function" ? `You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.` : `Only elements types ${VALID_TAG_NAMES.join(
        ", "
      )} are allowed. Helmet does not support rendering <${child.type}> elements. Refer to our API for more information.`
    );
    invariant(
      !nestedChildren || typeof nestedChildren === "string" || Array.isArray(nestedChildren) && !nestedChildren.some((nestedChild) => typeof nestedChild !== "string"),
      `Helmet expects a string as a child of <${child.type}>. Did you forget to wrap your children in braces? ( <${child.type}>{\`\`}</${child.type}> ) Refer to our API for more information.`
    );
    return true;
  }
  mapChildrenToProps(children, newProps) {
    let arrayTypeChildren = {};
    React__default.Children.forEach(children, (child) => {
      if (!child || !child.props) {
        return;
      }
      const { children: nestedChildren, ...childProps } = child.props;
      const newChildProps = Object.keys(childProps).reduce((obj, key) => {
        obj[HTML_TAG_MAP[key] || key] = childProps[key];
        return obj;
      }, {});
      let { type } = child;
      if (typeof type === "symbol") {
        type = type.toString();
      } else {
        this.warnOnInvalidChildren(child, nestedChildren);
      }
      switch (type) {
        case "Symbol(react.fragment)":
          newProps = this.mapChildrenToProps(nestedChildren, newProps);
          break;
        case "link":
        case "meta":
        case "noscript":
        case "script":
        case "style":
          arrayTypeChildren = this.flattenArrayTypeChildren(
            child,
            arrayTypeChildren,
            newChildProps,
            nestedChildren
          );
          break;
        default:
          newProps = this.mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren);
          break;
      }
    });
    return this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
  }
  render() {
    const { children, ...props } = this.props;
    let newProps = { ...props };
    let { helmetData } = props;
    if (children) {
      newProps = this.mapChildrenToProps(children, newProps);
    }
    if (helmetData && !(helmetData instanceof HelmetData)) {
      const data = helmetData;
      helmetData = new HelmetData(data.context, true);
      delete newProps.helmetData;
    }
    if (isReact19) {
      return /* @__PURE__ */ React__default.createElement(React19Dispatcher, { ...newProps });
    }
    return helmetData ? /* @__PURE__ */ React__default.createElement(HelmetDispatcher, { ...newProps, context: helmetData.value }) : /* @__PURE__ */ React__default.createElement(Context.Consumer, null, (context) => /* @__PURE__ */ React__default.createElement(HelmetDispatcher, { ...newProps, context }));
  }
}, __publicField(_b, "defaultProps", {
  defer: true,
  encodeSpecialCharacters: true,
  prioritizeSeoTags: false
}), _b);
const navLinks = [
  { path: "/", label: "Home" },
  { path: "/channel-list", label: "Channels" },
  { path: "/buy-iptv-subscription", label: "Pricing" },
  { path: "/setup-guides", label: "Installation" },
  { path: "/iptv-reseller-panel", label: "Reseller" },
  { path: "/faq", label: "FAQ" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);
  return /* @__PURE__ */ jsx("nav", { className: `navbar ${scrolled ? "navbar--scrolled" : ""} ${mobileOpen ? "navbar--open" : ""}`, id: "main-nav", children: /* @__PURE__ */ jsxs("div", { className: "navbar__inner container", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "navbar__logo", id: "nav-logo", "aria-label": "Zyminex Logo", children: [
      /* @__PURE__ */ jsx("span", { className: "navbar__logo-icon material-icons-outlined", "aria-hidden": "true", children: "play_circle" }),
      /* @__PURE__ */ jsx("span", { className: "navbar__logo-text", children: "Zyminex" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `navbar__links ${mobileOpen ? "navbar__links--open" : ""}`, children: [
      navLinks.map((link) => /* @__PURE__ */ jsx(
        Link,
        {
          to: link.path,
          className: `navbar__link ${location.pathname === link.path ? "navbar__link--active" : ""}`,
          id: `nav-${link.label.toLowerCase()}`,
          children: link.label
        },
        link.path
      )),
      /* @__PURE__ */ jsx(Link, { to: "/iptv-free-trial", className: "btn btn-primary btn-sm navbar__cta", id: "nav-trial-btn", children: "Free Trial" })
    ] }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: "navbar__hamburger",
        onClick: () => setMobileOpen(!mobileOpen),
        id: "nav-hamburger",
        "aria-label": "Toggle menu",
        children: [
          /* @__PURE__ */ jsx("span", { className: `navbar__hamburger-line ${mobileOpen ? "open" : ""}` }),
          /* @__PURE__ */ jsx("span", { className: `navbar__hamburger-line ${mobileOpen ? "open" : ""}` }),
          /* @__PURE__ */ jsx("span", { className: `navbar__hamburger-line ${mobileOpen ? "open" : ""}` })
        ]
      }
    )
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "footer", id: "site-footer", children: [
    /* @__PURE__ */ jsx("div", { className: "footer__cta-band", children: /* @__PURE__ */ jsxs("div", { className: "container footer__cta-inner", children: [
      /* @__PURE__ */ jsx("h2", { className: "display-sm", children: "Ready to upgrade your streaming?" }),
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "520px", margin: "0 auto" }, children: "Join over 50,000 users who have ditched traditional cable for the future of streaming." }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap", marginTop: "var(--space-6)" }, children: [
        /* @__PURE__ */ jsx(Link, { to: "/buy-iptv-subscription", className: "btn btn-primary btn-lg", children: "Choose Your Plan" }),
        /* @__PURE__ */ jsx(Link, { to: "/iptv-free-trial", className: "btn btn-secondary btn-lg", children: "Start Free Test 🎁" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "footer__main", children: /* @__PURE__ */ jsxs("div", { className: "container footer__grid", children: [
      /* @__PURE__ */ jsxs("div", { className: "footer__brand", children: [
        /* @__PURE__ */ jsxs("div", { className: "footer__logo", children: [
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { fontSize: "1.75rem", color: "var(--primary)" }, children: "play_circle" }),
          /* @__PURE__ */ jsx("span", { style: { fontFamily: "var(--font-headline)", fontWeight: 800, fontSize: "1.25rem" }, children: "Zyminex" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--outline)", marginTop: "var(--space-3)" }, children: "Premium 4K IPTV streaming. Blazing-fast delivery, rock-solid uptime." }),
        /* @__PURE__ */ jsxs("div", { className: "footer__socials", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://wa.me/212763569826",
              className: "footer__social-link",
              "aria-label": "WhatsApp",
              id: "footer-whatsapp",
              target: "_blank",
              rel: "noopener noreferrer",
              children: /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: "chat" })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "mailto:contact@zyminex.pro",
              className: "footer__social-link",
              "aria-label": "Email",
              id: "footer-email",
              children: /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: "email" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer__col", children: [
        /* @__PURE__ */ jsx("h4", { className: "label-md footer__col-title", children: "Navigate" }),
        /* @__PURE__ */ jsx(Link, { to: "/", className: "footer__link", children: "Home" }),
        /* @__PURE__ */ jsx(Link, { to: "/buy-iptv-subscription", className: "footer__link", children: "Pricing" }),
        /* @__PURE__ */ jsx(Link, { to: "/setup-guides", className: "footer__link", children: "Installation" }),
        /* @__PURE__ */ jsx(Link, { to: "/faq", className: "footer__link", children: "FAQ" }),
        /* @__PURE__ */ jsx(Link, { to: "/contact", className: "footer__link", children: "Contact" }),
        /* @__PURE__ */ jsx(Link, { to: "/iptv-reseller-panel", className: "footer__link", children: "Reseller Program" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer__col", children: [
        /* @__PURE__ */ jsx("h4", { className: "label-md footer__col-title", children: "Support" }),
        /* @__PURE__ */ jsx(Link, { to: "/iptv-free-trial", className: "footer__link", children: "Free Test Trial" }),
        /* @__PURE__ */ jsx(Link, { to: "/faq", className: "footer__link", children: "Help Center" }),
        /* @__PURE__ */ jsx(Link, { to: "/setup-guides", className: "footer__link", children: "Setup Guides" }),
        /* @__PURE__ */ jsx(Link, { to: "/contact", className: "footer__link", children: "Support Ticket" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer__col", children: [
        /* @__PURE__ */ jsx("h4", { className: "label-md footer__col-title", children: "Legal" }),
        /* @__PURE__ */ jsx(Link, { to: "/terms", className: "footer__link", children: "Terms of Service" }),
        /* @__PURE__ */ jsx(Link, { to: "/privacy", className: "footer__link", children: "Privacy Policy" }),
        /* @__PURE__ */ jsx(Link, { to: "/refund", className: "footer__link", children: "Refund Policy" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "footer__bottom", children: /* @__PURE__ */ jsx("div", { className: "container footer__bottom-inner", children: /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--outline)" }, children: "© 2026 Zyminex. All rights reserved." }) }) })
  ] });
}
const WhatsAppWidget = () => {
  const phoneNumber = "212763569826";
  const message = "Hello Zyminex, I am interested in your service!";
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return /* @__PURE__ */ jsx("a", { href: waUrl, target: "_blank", rel: "noopener noreferrer", className: "wa-widget", "aria-label": "Chat with us on WhatsApp", children: /* @__PURE__ */ jsx("div", { className: "wa-widget__icon", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "#FFF", xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" }) }) }) });
};
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
const LogoMarquee = ({ items = [], direction = "left", variant = "poster" }) => {
  if (items.length === 0) return null;
  const totalItems = [...items, ...items, ...items, ...items];
  return /* @__PURE__ */ jsx("div", { className: `marquee-container variant-${variant}`, id: `marquee-${variant}-${direction}`, children: /* @__PURE__ */ jsx("div", { className: `marquee-content scroll-${direction}`, id: `marquee-content-${variant}-${direction}`, children: totalItems.map((item, index) => /* @__PURE__ */ jsx("div", { className: "marquee-item", children: item.src ? /* @__PURE__ */ jsx(
    "img",
    {
      src: item.src,
      alt: item.alt,
      className: "marquee-img",
      loading: "lazy",
      decoding: "async",
      width: variant === "poster" ? 189 : 221,
      height: variant === "poster" ? 284 : 39
    }
  ) : /* @__PURE__ */ jsxs("div", { className: "marquee-placeholder", style: { background: item.bg || "var(--surface-container-high)" }, children: [
    /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { fontSize: "2rem" }, children: item.icon || "tv" }),
    /* @__PURE__ */ jsx("span", { className: "label-md", children: item.label })
  ] }) }, index)) }) });
};
const bnaLogo = "/assets/bna-BRznUohG.webp";
const champLogo = "/assets/champ-vkSDrodq.webp";
const disnepLogo = "data:image/webp;base64,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";
const hboLogo = "data:image/webp;base64,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";
const inbeLogo = "/assets/inbe-Brca07in.webp";
const primeLogo = "data:image/webp;base64,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";
const ucfLogo = "/assets/ucf-DzHby-RK.webp";
const poster1 = "/assets/poster-1-CFhKlQot.webp";
const poster2 = "/assets/poster-2-C2mZLgHf.webp";
const poster3 = "/assets/poster-3-BzzXk99v.webp";
const poster4 = "/assets/poster-4-tWvN7VqK.webp";
const poster5 = "/assets/poster-5-BF-4BoQT.webp";
const poster6 = "/assets/poster-6-BE2q2XrJ.webp";
const blogPosts = [
  {
    id: "tivimate-multi-screen-sports-setup",
    path: "/blog/tivimate-multi-screen-sports-setup",
    image: "/images/blog/tivimate-multi-screen-sports-setup-hero.webp",
    category: "Setup Guides",
    date: "Sep 8, 2026",
    title: "Ultimate TiviMate Multi-Screen Sports Setup for College Football",
    excerpt: "Learn how to set up TiviMate multi-screen for College Football. Discover why you need a 4-connection IPTV package to avoid bans and buffering."
  },
  {
    id: "cheap-nfl-sunday-ticket-alternative",
    path: "/blog/cheap-nfl-sunday-ticket-alternative",
    image: "/images/blog/cheap-nfl-sunday-ticket-alternative-hero.webp",
    category: "Sports Streaming",
    date: "Sep 8, 2026",
    title: "The Best Cheap NFL Sunday Ticket Alternative for 2026",
    excerpt: "Looking for a cheap NFL Sunday Ticket alternative? Discover how to bypass the $480 YouTube fee and stream out-of-market games, RedZone & UFC for less."
  },
  {
    id: "stream-box-office-ppv-cheap-uk",
    path: "/blog/stream-box-office-ppv-cheap-uk",
    image: "/images/blog/stream-box-office-ppv-cheap-hero.webp",
    category: "Sports Streaming",
    date: "Aug 31, 2026",
    title: "Stream Box Office PPV Cheap: Skip the £25 Sky Price Tag",
    excerpt: "Looking to stream Box Office PPV free or cheap? Don't risk buffering during the knockout. Discover the best reliable 4K alternative to Sky Box Office today."
  },
  {
    id: "stream-college-football-no-cable",
    path: "/blog/stream-college-football-no-cable",
    image: "/images/blog/stream-college-football-no-cable-hero.webp",
    category: "Sports Streaming",
    date: "Aug 31, 2026",
    title: "Stream College Football No Cable: Unlock SEC, Big Ten, and ACC Networks",
    excerpt: "Ready for kickoff? Learn how to stream college football with no cable. Unlock SEC, Big Ten, and ACC networks hassle-free. Discover the ultimate TV alternative!"
  },
  {
    id: "setup-firestick-for-sports-season-2026-guide",
    path: "/blog/setup-firestick-for-sports-season-2026-guide",
    image: "/images/blog/setup-firestick-for-sports-season-hero.webp",
    category: "Tutorials & Setup",
    date: "Aug 10, 2026",
    title: "Setup Firestick for Sports Season 2026/27 in Under 3 Minutes",
    excerpt: "Get your Firestick ready for the 2026/27 sports season kickoff! Clear cache, install TiviMate, and activate high-speed IPTV M3U streams in 3 mins."
  },
  {
    id: "iptv-catch-up-sports-2026-guide",
    path: "/blog/iptv-catch-up-sports-2026-guide",
    image: "/images/blog/iptv-catch-up-sports-2026-hero.webp",
    category: "Sports Streaming",
    date: "Aug 10, 2026",
    title: "IPTV Catch Up Sports 2026: How to Watch Missed Football Matches & 4K Highlights",
    excerpt: "Missed early-season football matches while traveling? Discover how 48-hour IPTV catch up sports, 4K replays, and VOD docs let you stream top games anywhere."
  },
  {
    id: "iptv-multiple-connections-multi-room-guide",
    path: "/blog/iptv-multiple-connections-multi-room-guide",
    image: "/images/blog/iptv_multiple_connections_hero.webp",
    category: "Cord-Cutting Guides",
    date: "May 28, 2026",
    title: "IPTV Multiple Connections: The Complete 2026 Multi-Room Streaming Guide",
    excerpt: "Discover how to get IPTV multiple connections on one subscription. Stop account bans, stream on 4 TVs at once, and save €1,200/year!"
  },
  {
    id: "replace-cable-and-netflix-2026",
    path: "/blog/replace-cable-and-netflix-2026",
    image: "/images/blog/replace-cable-and-netflix-hero-2026.webp",
    category: "Cord-Cutting Guides",
    date: "May 19, 2026",
    title: 'Tired of Paying €150+ for Streaming? The Ultimate "All-In-One" TV Solution',
    excerpt: "Suffering from subscription fatigue? Learn how to replace cable and Netflix with the ultimate all-in-one streaming app. Bundle live TV and VOD to save big in 2026."
  },
  {
    id: "watch-champions-league-final-2026-4k",
    path: "/blog/watch-champions-league-final-2026-4k",
    image: "/images/blog/champions-league-final-2026-hero.webp",
    category: "Streaming Guides",
    date: "May 19, 2026",
    title: "Watch Champions League Final 2026: Stream in 4K Without Cable",
    excerpt: "Don't miss Arsenal vs PSG! Learn how to watch Champions League Final 2026 in 4K without expensive cable bills. Get buffer-free sports IPTV today!"
  },
  {
    id: "fix-broken-iptv-playlist-dead-m3u-links-2026",
    path: "/blog/fix-broken-iptv-playlist-dead-m3u-links-2026",
    image: "/fix-broken-iptv-playlist-m3u.png",
    category: "Troubleshooting",
    date: "May 14, 2026",
    title: "Fix Broken IPTV Playlist: 5 Ways to Update Dead M3U Links",
    excerpt: "IPTV playlist failed to load? Learn how to fix broken IPTV playlists, update dead M3U links, and bypass ISP blocking after the May 2026 server seizures."
  },
  {
    id: "bypass-mlb-blackout-iptv-2026-guide",
    path: "/blog/bypass-mlb-blackout-iptv-2026-guide",
    image: "/bypass-mlb-blackout-iptv-hero.png",
    category: "Sports Streaming",
    date: "May 14, 2026",
    title: "Bypass MLB Blackout with IPTV: 2026 NBA & MLB Guide",
    excerpt: "Frustrated by sports blackouts? Learn how to bypass MLB blackouts with IPTV and stream the 2026 NBA Playoffs in 4K without cable. Start your free trial today."
  },
  {
    id: "buy-iptv-with-crypto-safe-2026-guide",
    path: "/blog/buy-iptv-with-crypto-safe-2026-guide",
    image: "/buy-iptv-crypto-hero.png",
    category: "Legal & Security",
    date: "May 12, 2026",
    title: "Buy IPTV with Crypto Safe? What 'Operation Switch Off' Taught Us for 2026",
    excerpt: "Police traced millions in 'Operation Switch Off' using crypto audits. Discover if buying IPTV with Bitcoin or Monero is still safe and how to protect your data."
  },
  {
    id: "iptv-cable-replacement-usa-2026-guide",
    path: "/blog/iptv-cable-replacement-usa-2026-guide",
    image: "/images/blog/iptv-cable-replacement-hero-2026.webp",
    category: "Cord-Cutting Guides",
    date: "May 10, 2026",
    title: "IPTV Cable Replacement USA: Save €1,500/Year in 2026",
    excerpt: "Discover why 80M+ Americans chose IPTV cable replacement in USA for 2026. Compare costs, skip the €200 cable bill, and keep your 4K live sports."
  },
  {
    id: "stop-isp-throttling-iptv-2026",
    path: "/blog/stop-isp-throttling-iptv-2026",
    image: "/images/blog/stop-isp-throttling-hero-2026.webp",
    category: "Troubleshooting",
    date: "May 10, 2026",
    title: "ISP Throttling IPTV: How to Stop 2026 Buffering Waves",
    excerpt: "Tired of IPTV buffering? Learn how to detect and bypass ISP throttling IPTV in May 2026 using VPN obfuscation, DNS tweaks, and private nodes."
  },
  {
    id: "install-iptv-samsung-lg-smart-tv-2026",
    path: "/blog/install-iptv-samsung-lg-smart-tv-2026",
    image: "/images/blog/iptv-smart-tv-2026-installation.webp",
    category: "Troubleshooting",
    date: "Apr 30, 2026",
    title: "IPTV on Smart TV 2026: Install Banned Apps (Samsung & LG)",
    excerpt: "Apps gone? Learn how to restore IPTV on your Samsung or LG TV using Developer Mode and USB sideloading. Step-by-step 2026 guide for Tizen & WebOS."
  },
  {
    id: "portable-iptv-streaming-travel-guide-2026",
    path: "/blog/portable-iptv-streaming-travel-guide-2026",
    image: "/images/blog/portable-iptv-streaming-europe-holiday.webp",
    category: "Travel Guides",
    date: "Apr 30, 2026",
    title: "Portable IPTV Streaming: Best Travel Setups for Europe 2026",
    excerpt: "Heading to Spain or Greece? Learn how to stream your IPTV flawlessly. From travel routers to bypassing hotel Wi-Fi blocks, get the 2026 travel guide."
  },
  {
    id: "stream-nfl-draft-2026-no-cable",
    path: "/blog/stream-nfl-draft-2026-no-cable",
    image: "/images/blog/stream-nfl-draft-2026-hero.webp",
    category: "Streaming Guides",
    date: "Apr 01, 2026",
    title: "Stream NFL Draft 2026 Live: Watch Without Cable (HD)",
    excerpt: "Don't miss a single pick! Learn how to stream the 2026 NFL Draft live in Pittsburgh without cable. Get 4K quality on ESPN and NFL Network now."
  },
  {
    id: "sky-tv-alternatives-europe-2026",
    path: "/blog/sky-tv-alternatives-europe-2026",
    image: "/images/blog/hero_sky_alternatives_2026.png",
    category: "Streaming Guides",
    date: "Apr 26, 2026",
    title: "7 Best Sky TV Alternatives in Europe (2026 IPTV Guide)",
    excerpt: "Tired of Sky and DAZN price hikes? Discover why millions in Europe are switching to IPTV in 2026 to save €1,200+ annually on sports and movies."
  },
  {
    id: "best-latino-iptv-usa-2026",
    path: "/blog/best-latino-iptv-usa-2026",
    image: "/images/blog/best_latino_iptv_hero_2026.png",
    category: "Streaming Guides",
    date: "Apr 19, 2026",
    title: "Best Latino IPTV USA 2026: Top Spanish Channels & Live Sports",
    excerpt: "Discover the best Latino IPTV in the USA for 2026. Stream Liga MX, Univision, and Telemundo in 4K with no buffering. See our top-rated bilingual services."
  },
  {
    id: "youtube-tv-vs-premium-iptv-2026",
    path: "/blog/youtube-tv-vs-premium-iptv-2026",
    image: "/images/blog/youtube_vs_iptv_hero_2026.png",
    category: "Comparisons",
    date: "Apr 18, 2026",
    title: "YouTube TV vs. Premium IPTV: Which is the Best Cable Replacement in 2026?",
    excerpt: "Comparing YouTube TV vs Premium IPTV in 2026. Discover which service offers better sports, 4K quality, and the best value for cord-cutters this year."
  },
  {
    id: "iptv-vs-cable-cord-cutting-2026",
    path: "/blog/iptv-vs-cable-cord-cutting-2026",
    image: "/images/blog/iptv_vs_cable_cord_cutting.png",
    category: "Cord-Cutting Guides",
    date: "Apr 17, 2026",
    title: "IPTV vs. Traditional Cable: Why Millions are Cord-Cutting This Year",
    excerpt: "Discover why millions are ditching traditional cable TV packages for affordable IPTV streaming in 2026. Compare the costs, flexibility, and equipment needed to cut the cord."
  },
  {
    id: "iptv-free-trial-checklist-2026",
    path: "/blog/iptv-free-trial-checklist-2026",
    image: "/images/blog/iptv_free_trial_checklist.png",
    category: "Purchasing Advice",
    date: "Apr 16, 2026",
    title: "IPTV Free Trial 2026: The Ultimate 24-Hour Testing Checklist",
    excerpt: "Before you buy a subscription, use this exact 2026 checklist to test IPTV free trials. Learn how to verify 4K quality, test anti-freeze servers, and avoid scams."
  },
  {
    id: "iptv-crackdown-2026",
    path: "/blog/iptv-crackdown-2026",
    image: "/images/blog/iptv_crackdown_2026.png",
    category: "Legal & Security",
    date: "Apr 16, 2026",
    title: "IPTV Crackdowns in 2026: Why Courts are Now Blocking VPNs",
    excerpt: "Discover how the 2026 IPTV legal crackdown impacts you, why the French court IPTV ban targets VPNs, and how to find safe IPTV alternatives immediately."
  },
  {
    id: "best-iptv-apps-2026",
    path: "/blog/best-iptv-apps-2026",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1200&q=80",
    category: "App Reviews & Tutorials",
    date: "Apr 15, 2026",
    title: "Top 5 Best IPTV Apps for Smart TV & Android in 2026",
    excerpt: "Looking for the fastest, most reliable IPTV player? We review the top 5 best IPTV apps for Smart TV, Android, and Firestick in 2026."
  },
  {
    id: "best-iptv-service-2026",
    path: "/blog/best-iptv-service-2026",
    image: "/images/blog/best_iptv_service.png",
    category: "Cord-Cutting Guides",
    date: "Apr 14, 2026",
    title: "The Best IPTV Service in 2026: Ultimate Cord-Cutting Guide",
    excerpt: "Discover the best IPTV service in 2026. Learn how to cut the cord, find premium channel lineups, and stream flawlessly in 4K without buffering."
  },
  {
    id: "iptv-firestick-setup-guide",
    path: "/blog/iptv-firestick-setup-guide",
    image: "/images/blog/firestick_setup.png",
    category: "Tutorials & Setup",
    date: "Apr 14, 2026",
    title: "How to Set Up IPTV on Firestick (2026 Ultimate Guide)",
    excerpt: "A complete 2026 step-by-step tutorial on how to safely install and set up IPTV on your Amazon Firestick."
  },
  {
    id: "watch-sports-iptv",
    path: "/blog/watch-sports-iptv",
    image: "/images/blog/watch_sports.png",
    category: "Sports Streaming",
    date: "Apr 14, 2026",
    title: "How to Watch Live Sports on IPTV Without Buffering in 2026",
    excerpt: "Tired of buffering during the big game? Learn how to optimize your IPTV setup for flawless 60FPS live sports streaming."
  },
  {
    id: "anti-freeze-iptv-explained",
    path: "/blog/anti-freeze-iptv-explained",
    image: "/images/blog/anti_freeze_servers.png",
    category: "Technology & Servers",
    date: "Apr 14, 2026",
    title: "Anti-Freeze IPTV Technology Explained: Why Servers Matter",
    excerpt: "What is anti-freeze IPTV technology? Discover how advanced server infrastructure completely eliminates buffering and stuttering."
  },
  {
    id: "iptv-free-trial-guide",
    path: "/blog/iptv-free-trial-guide",
    image: "/images/blog/free_trial_ticket.png",
    category: "Purchasing Advice",
    date: "Apr 14, 2026",
    title: "IPTV Free Trial Guide: How to Test Services Safely in 2026",
    excerpt: "Never pay upfront. Learn how to secure an IPTV free trial, what specifically to test, and how to verify 4K quality before committing."
  },
  {
    id: "tivimate-vs-smarters-2026",
    path: "/tivimate-vs-iptv-smarters-pro-best-player-2026",
    image: "https://i.ibb.co/3YYDYxKz/Tivi-Mate-vs-IPTV-202604130102.jpg",
    category: "App Reviews & Tutorials",
    date: "Apr 13, 2026",
    title: "TiviMate vs. IPTV Smarters Pro: Which is the Best IPTV Player in 2026?",
    excerpt: "Confused about which streaming app to use? Read our ultimate 2026 comparison of TiviMate vs. IPTV Smarters Pro."
  }
];
const features = [
  { icon: "hd", title: "4K Ultra HD Streaming", desc: "Experience every detail with breathtaking clarity. Optimized for high-bitrate streaming." },
  { icon: "speed", title: "Anti-Freezing Technology", desc: "Zero buffering. Our proprietary compression ensures smooth playback even on modest connections." },
  { icon: "live_tv", title: "20,000+ Channels", desc: "From local news to international blockbusters, your library is endless." },
  { icon: "support_agent", title: "24/7 Support", desc: "Our technicians ensure your stream never drops. Average response < 5 min." },
  { icon: "devices", title: "Multi-Device Compatible", desc: "Watch on Smart TV, Fire Stick, Android, iOS, tablets, and more." },
  { icon: "download", title: "Easy Setup", desc: "Download the app, log in, and start watching in under 5 minutes." }
];
const moviePosters = [
  { src: poster1, alt: "Premium Movie 1" },
  { src: poster2, alt: "Premium Movie 2" },
  { src: poster3, alt: "Premium Movie 3" },
  { src: poster4, alt: "Premium Movie 4" },
  { src: poster5, alt: "Premium Movie 5" },
  { src: poster6, alt: "Premium Movie 6" }
];
const channelLogos = [
  { src: inbeLogo, alt: "IN Sports" },
  { src: champLogo, alt: "League" },
  { src: hboLogo, alt: "Hobx" },
  { src: disnepLogo, alt: "Dis+" },
  { src: bnaLogo, alt: "NA" },
  { src: primeLogo, alt: "Amazrime" },
  { src: ucfLogo, alt: "UF" }
];
const categories = [
  { name: "Sports", icon: "sports_soccer" },
  { name: "Movies", icon: "movie" },
  { name: "Documentaries", icon: "nature_people" },
  { name: "Kids", icon: "child_care" },
  { name: "News", icon: "newspaper" },
  { name: "Music", icon: "music_note" }
];
const testimonials = [
  {
    quote: "The Anti-Freezing technology actually works! I switched from Kemo IPTV and the difference is night and day.",
    name: "David Chen",
    role: "Premium Subscriber"
  },
  {
    quote: "Setup was incredibly easy on my Firestick. I was watching 4K sports within 5 minutes.",
    name: "Sarah Jenkins",
    role: "Firestick User"
  },
  {
    quote: "Best IPTV service in 2026 without a doubt. The VOD library is huge and constantly updated.",
    name: "Maria Lopez",
    role: "12-Month Subscriber"
  }
];
const stats = [
  { value: "50,000+", label: "Active Users" },
  { value: "99.9%", label: "Uptime" },
  { value: "20,000+", label: "Channels" },
  { value: "<5 min", label: "Setup Time" }
];
const homeFaqs = [
  {
    q: "How fast is the delivery after I buy Zyminex?",
    a: "Delivery is instant! As soon as your payment is confirmed, your credentials and setup instructions are sent directly to your email inbox so you can start streaming immediately."
  },
  {
    q: "Can I use my subscription on multiple devices?",
    a: "Yes, depending on the plan you choose. While a standard package allows for one connection, you can easily upgrade your plan during checkout to include 2, 3, or more simultaneous connections for your entire household."
  },
  {
    q: "Do I need a VPN to use the service?",
    a: "While our platform is highly secure, we always recommend using a VPN if your local Internet Service Provider (ISP) is known for throttling streaming traffic. Our service is 100% VPN-friendly."
  },
  {
    q: "What happens if I need technical support?",
    a: "We offer 24/7 customer support. Whether you need help navigating the Zyminex login dashboard or configuring your apps, our dedicated support team is always just a message away."
  }
];
const plans = [
  {
    name: "3 Months",
    price: "29.99",
    period: "/ 3 months",
    perMonth: "~€10/mo",
    features: [
      "4K Quality",
      "20,000+ Channels",
      "All Devices",
      "VIP 24/7 Support",
      "Full VOD Library Access",
      "Live PPV Events Included"
    ],
    badge: null,
    highlighted: false
  },
  {
    name: "12 Months",
    price: "59.99",
    period: "/ year",
    perMonth: "~€5/mo",
    features: [
      "4K Quality",
      "20,000+ Channels",
      "All Devices",
      "VIP 24/7 Support",
      "Full VOD Library Access",
      "Live PPV Events Included"
    ],
    badge: "Best Value",
    highlighted: true
  },
  {
    name: "6 Months",
    price: "44.99",
    period: "/ 6 months",
    perMonth: "~€7.50/mo",
    features: [
      "4K Quality",
      "20,000+ Channels",
      "All Devices",
      "VIP 24/7 Support",
      "Full VOD Library Access",
      "Live PPV Events Included"
    ],
    badge: "Popular",
    highlighted: false
  }
];
const homeBlogPosts = blogPosts.slice(0, 3);
function HomePage() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zyminex",
    "url": "https://www.zyminex.pro",
    "logo": "https://www.zyminex.pro/assets/logo.png",
    "description": "Zyminex is the best Premium IPTV Service Provider offering 20,000+ live channels and 4K VODs.",
    "sameAs": [
      "https://wa.me/212763569826"
    ]
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zyminex",
    "url": "https://www.zyminex.pro",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.zyminex.pro/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homeFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
  return /* @__PURE__ */ jsxs("div", { className: "home", id: "home-page", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Zyminex — Best 4K IPTV Subscription" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Zyminex offers the best 4K IPTV subscription. Experience 22,000+ live channels, VODs, and anti-freeze technology with a free trial today." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://www.zyminex.pro/" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Zyminex" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Zyminex — Best 4K IPTV Subscription" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Zyminex offers the best 4K IPTV subscription. Experience 22,000+ live channels, VODs, and anti-freeze technology with a free trial today." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://www.zyminex.pro/og-image.png" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://www.zyminex.pro/" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:site", content: "@zyminex" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Zyminex — Best 4K IPTV Subscription" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Zyminex offers the best 4K IPTV subscription. Experience 22,000+ live channels, VODs, and anti-freeze technology with a free trial today." }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://www.zyminex.pro/og-image.png" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(orgSchema) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(websiteSchema) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(faqSchema) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "hero", id: "hero-section", children: [
      /* @__PURE__ */ jsxs("div", { className: "hero__bg-effects", children: [
        /* @__PURE__ */ jsx("div", { className: "hero__glow hero__glow--1" }),
        /* @__PURE__ */ jsx("div", { className: "hero__glow hero__glow--2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "container hero__content", children: [
        /* @__PURE__ */ jsxs("div", { className: "hero__badge animate-fade-in-up", children: [
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { fontSize: "14px" }, children: "bolt" }),
          "Anti-Freezing Technology Active"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "display-lg hero__title animate-fade-in-up stagger-1", children: [
          "Welcome to Zyminex:",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "hero__title-accent", children: "The Ultimate 4K Streaming Experience" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "body-lg hero__subtitle animate-fade-in-up stagger-2", children: "Zyminex is your all-in-one gateway to limitless entertainment. Get access to 20,000+ live TV channels, blockbuster movies, and exclusive PPV — all in crystal-clear 4K. No contracts. No buffering. Just stream." }),
        /* @__PURE__ */ jsxs("div", { className: "hero__actions animate-fade-in-up stagger-3", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/buy-iptv-subscription", className: "btn btn-primary btn-lg", children: [
            /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: "rocket_launch" }),
            "View Plans"
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/iptv-free-trial", className: "btn btn-secondary btn-lg", children: [
            /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: "play_circle" }),
            "Start Your Free Test Trial"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "trust-signals animate-fade-in-up stagger-4", style: { marginTop: "var(--space-6)", display: "flex", gap: "var(--space-4)", justifyContent: "center", color: "var(--on-surface-variant)" }, children: [
          /* @__PURE__ */ jsxs("span", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
            /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: "verified_user" }),
            " Secure Payments"
          ] }),
          /* @__PURE__ */ jsxs("span", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
            /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: "speed" }),
            " Zero Buffering"
          ] }),
          /* @__PURE__ */ jsxs("span", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
            /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: "replay" }),
            " Money-Back Guarantee"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hero__stats animate-fade-in-up stagger-4", style: { marginTop: "var(--space-10)" }, children: stats.map((stat) => /* @__PURE__ */ jsxs("div", { className: "hero__stat", children: [
          /* @__PURE__ */ jsx("span", { className: "hero__stat-value", children: stat.value }),
          /* @__PURE__ */ jsx("span", { className: "hero__stat-label label-sm", children: stat.label })
        ] }, stat.label)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "section", id: "pricing-trials", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "section-header", children: [
        /* @__PURE__ */ jsx("h2", { className: "display-sm", children: "Flexible Zyminex Pricing & Risk-Free Trials" }),
        /* @__PURE__ */ jsxs("div", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-3)" }, children: [
          /* @__PURE__ */ jsx("p", { children: "We believe in transparency. There are no hidden fees, no cancellation penalties, and no hardware rentals. Our Zyminex pricing is straightforward, offering massive discounts for longer commitments. You can securely buy Zyminex for a full year for maximum savings, or simply start with a flexible Zyminex 3 month plan to test the waters." }),
          /* @__PURE__ */ jsx("p", { children: "Not ready to commit your hard-earned money just yet? We completely understand. We want you to experience our premium quality risk-free. Simply request a Zyminex Free Test Trial today. Your Free Test Trial will give you full, unrestricted access to our complete channel list and VOD library so you can test our anti-freezing technology for yourself." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "plans-grid", style: { marginTop: "var(--space-10)" }, children: plans.map((plan) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `plan-card ${plan.highlighted ? "plan-card--highlighted" : ""}`,
          id: `plan-${plan.name.replace(/\s/g, "-").toLowerCase()}`,
          children: [
            plan.badge && /* @__PURE__ */ jsxs("div", { className: `plan-card__badge ${plan.highlighted ? "plan-card__badge--accent" : ""}`, children: [
              plan.highlighted && /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { fontSize: "14px" }, children: "stars" }),
              plan.badge
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "headline-md", children: plan.name }),
            /* @__PURE__ */ jsxs("div", { className: "plan-card__price", children: [
              /* @__PURE__ */ jsx("span", { className: "plan-card__currency", children: "€" }),
              /* @__PURE__ */ jsx("span", { className: "plan-card__amount", children: plan.price })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--outline)" }, children: plan.perMonth }),
            /* @__PURE__ */ jsx("ul", { className: "plan-card__features", children: plan.features.map((feat) => /* @__PURE__ */ jsxs("li", { className: "plan-card__feature", children: [
              /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { fontSize: "18px", color: "var(--primary)" }, children: "check_circle" }),
              /* @__PURE__ */ jsx("span", { className: "body-md", children: feat })
            ] }, feat)) }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: `https://wa.me/212763569826?text=${encodeURIComponent(`Hello Zyminex, I am interested in ordering the ${plan.name} plan for €${plan.price}.`)}`,
                target: "_blank",
                rel: "noopener noreferrer",
                className: `btn btn-lg ${plan.highlighted ? "btn-primary" : "btn-secondary"}`,
                style: { width: "100%" },
                children: plan.highlighted ? "Get Best Value" : "Order Now"
              }
            )
          ]
        },
        plan.name
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section section-alt features-section", id: "features-section", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "section-header", children: [
        /* @__PURE__ */ jsxs("span", { className: "section-eyebrow", children: [
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { fontSize: "12px" }, children: "bolt" }),
          "Why Zyminex"
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "display-sm", children: "Why Choose a Zyminex Subscription Over Cable?" }),
        /* @__PURE__ */ jsxs("div", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-3)" }, children: [
          /* @__PURE__ */ jsx("p", { children: "The television landscape has changed, and a modern Zyminex subscription gives you ultimate control over what you watch and how much you pay. Recognized as the best premium IPTV service on the market, we offer a massive, frequently updated Zyminex channel list that includes local networks, international broadcasts, and a massive Video-on-Demand (VOD) library." }),
          /* @__PURE__ */ jsx("p", { children: "Instead of settling for standard definition, you can finally enjoy your favorite shows in stunning high resolution with our dedicated 4K IPTV subscription packages. Why pay hundreds of dollars a month for a fraction of the content when you can have it all in one place?" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "dual-marquee-wrapper", style: { marginTop: "var(--space-8)", marginBottom: "var(--space-12)" }, children: [
        /* @__PURE__ */ jsx(LogoMarquee, { items: moviePosters, direction: "left", variant: "poster" }),
        /* @__PURE__ */ jsx(LogoMarquee, { items: channelLogos, direction: "right", variant: "16-9" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "features-grid", children: features.map((f, i) => /* @__PURE__ */ jsxs("div", { className: "card feature-card", children: [
        /* @__PURE__ */ jsx("div", { className: "feature-card__icon", children: /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: f.icon }) }),
        /* @__PURE__ */ jsx("h3", { className: "title-md", children: f.title }),
        /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--on-surface-variant)" }, children: f.desc })
      ] }, f.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section categories-section", id: "categories-section", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "section-header", children: [
        /* @__PURE__ */ jsx("h2", { className: "display-sm", children: "A Buffer-Free IPTV Provider Built for Live Sports & Entertainment" }),
        /* @__PURE__ */ jsxs("div", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-3)" }, children: [
          /* @__PURE__ */ jsx("p", { children: "There is nothing worse than your screen freezing right before a game-winning touchdown or a crucial movie scene. We know that stability is the most important factor for our users. That’s why we operate as a strictly buffer-free IPTV provider, utilizing advanced anti-freezing IPTV service technology and premium global servers to ensure 100% uptime." }),
          /* @__PURE__ */ jsx("p", { children: "Because of our high-speed server network, we are widely considered the best IPTV for live sports, offering seamless streams of football, basketball, MMA, and international racing events. If you are tired of your current lagging provider, making the switch to us is the perfect upgrade. In fact, our service is so reliable that users tell us they never even have to search for a Zyminex alternative once they experience our streaming quality." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "categories-grid", children: categories.map((cat) => /* @__PURE__ */ jsxs("div", { className: "category-card", children: [
        /* @__PURE__ */ jsx("span", { className: "material-icons-outlined category-card__icon", style: { fontSize: "3.5rem" }, children: cat.icon }),
        /* @__PURE__ */ jsx("span", { className: "title-md", style: { marginTop: "0.5rem", fontWeight: "bold" }, children: cat.name })
      ] }, cat.name)) }),
      /* @__PURE__ */ jsx("div", { style: { textAlign: "center", marginTop: "var(--space-8)" }, children: /* @__PURE__ */ jsx(Link, { to: "/buy-iptv-subscription", className: "btn btn-primary", children: "Unlock Full Library" }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section section-alt", id: "devices-section", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "section-header", children: [
        /* @__PURE__ */ jsx("h2", { className: "display-sm", children: "Seamless Device Compatibility: Watch Anywhere" }),
        /* @__PURE__ */ jsxs("div", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-3)" }, children: [
          /* @__PURE__ */ jsx("p", { children: "We believe your entertainment should fit your lifestyle, not the other way around. Our service is highly versatile and compatible with almost any smart device in your home." }),
          /* @__PURE__ */ jsx("p", { children: "If you prefer watching on a television, our service is perfectly optimized as the premier Zyminex for Firestick solution, and it also stands out as the best IPTV for Android TV boxes. Prefer to watch on your computer while working? Simply access the Zyminex login portal and stream directly through our convenient Zyminex web player—no extra downloads required." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "setup-steps", children: [
        /* @__PURE__ */ jsxs("div", { className: "setup-step", children: [
          /* @__PURE__ */ jsx("div", { className: "setup-step__icon", children: /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: "settings_remote" }) }),
          /* @__PURE__ */ jsx("h3", { className: "title-md", children: "Amazon Firestick" }),
          /* @__PURE__ */ jsx(Link, { to: "/iptv-for-firestick", className: "btn btn-sm btn-secondary", style: { marginTop: "var(--space-2)" }, children: "View Guide" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "setup-step", children: [
          /* @__PURE__ */ jsx("div", { className: "setup-step__icon", children: /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: "tv" }) }),
          /* @__PURE__ */ jsx("h3", { className: "title-md", children: "Smart TVs" }),
          /* @__PURE__ */ jsx(Link, { to: "/setup-guides", className: "btn btn-sm btn-secondary", style: { marginTop: "var(--space-2)" }, children: "View Guide" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "setup-step", children: [
          /* @__PURE__ */ jsx("div", { className: "setup-step__icon", children: /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: "smartphone" }) }),
          /* @__PURE__ */ jsx("h3", { className: "title-md", children: "Mobile & Tablets" }),
          /* @__PURE__ */ jsx(Link, { to: "/setup-guides", className: "btn btn-sm btn-secondary", style: { marginTop: "var(--space-2)" }, children: "View Guide" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { textAlign: "center", marginTop: "var(--space-8)" }, children: /* @__PURE__ */ jsx(Link, { to: "/setup-guides", className: "btn btn-secondary", children: "See All Setup Tutorials" }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", id: "setup-instructions", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "section-header", children: [
      /* @__PURE__ */ jsx("h2", { className: "display-sm", children: "Simple Setup and Easy-to-Use Applications" }),
      /* @__PURE__ */ jsxs("div", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-3)" }, children: [
        /* @__PURE__ */ jsx("p", { children: "Getting started is incredibly easy, even if you aren't tech-savvy. We provide a comprehensive Zyminex setup guide that walks you through exactly how to connect your devices in minutes." }),
        /* @__PURE__ */ jsx("p", { children: "Our servers integrate flawlessly with the most popular streaming players on the market. Whether you need a quick Zyminex Smarters Pro setup tutorial or you prefer customizing your TV guide layout using Zyminex TiviMate, our step-by-step instructions make installation a breeze." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "section section-alt", id: "subscription-banner", children: /* @__PURE__ */ jsxs("div", { className: "container", style: { textAlign: "center" }, children: [
      /* @__PURE__ */ jsx("h3", { className: "display-sm", children: "Ready to Transform Your TV Experience?" }),
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "800px", margin: "var(--space-4) auto var(--space-6)" }, children: "Stop overpaying for cable and say goodbye to buffering screens. Join thousands of satisfied customers who have already made the switch to the ultimate entertainment hub." }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsx(Link, { to: "/iptv-free-trial", className: "btn btn-primary btn-lg", children: "Start Free Test 🎁" }),
        /* @__PURE__ */ jsx(Link, { to: "/buy-iptv-subscription", className: "btn btn-secondary btn-lg", children: "View Our Premium Pricing Plans" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", marginTop: "var(--space-4)", fontWeight: "bold" }, children: "...and start streaming in 4K today!" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section testimonials-section", id: "testimonials-section", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "section-header", children: [
        /* @__PURE__ */ jsxs("span", { className: "section-eyebrow", children: [
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { fontSize: "12px" }, children: "verified" }),
          "Real Reviews"
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "display-sm", children: "Trusted by Thousands" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "testimonials-grid", children: testimonials.map((t, i) => /* @__PURE__ */ jsxs("div", { className: "testimonial-card", children: [
        /* @__PURE__ */ jsx("div", { className: "testimonial-card__stars", children: "★★★★★".split("").map((s, si) => /* @__PURE__ */ jsx("span", { style: { color: "var(--tertiary)", fontSize: "16px" }, children: "★" }, si)) }),
        /* @__PURE__ */ jsxs("p", { className: "body-lg testimonial-card__quote", children: [
          '"',
          t.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "testimonial-card__author", children: [
          /* @__PURE__ */ jsx("div", { className: "testimonial-card__avatar", children: t.name.charAt(0) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "label-lg", children: t.name }),
            /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--outline)" }, children: t.role })
          ] })
        ] })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section section-alt", id: "home-faq", children: /* @__PURE__ */ jsxs("div", { className: "container", style: { maxWidth: "760px" }, children: [
      /* @__PURE__ */ jsx("div", { className: "section-header", children: /* @__PURE__ */ jsx("h2", { className: "display-sm", children: "Frequently Asked Questions" }) }),
      /* @__PURE__ */ jsx("div", { className: "home-faq-list", children: homeFaqs.map((faq, idx) => /* @__PURE__ */ jsxs("div", { className: `faq-item ${openFaq === idx ? "faq-item--open" : ""}`, style: { marginBottom: "var(--space-3)" }, children: [
        /* @__PURE__ */ jsxs("button", { className: "faq-item__trigger", onClick: () => toggleFaq(idx), style: { width: "100%", display: "flex", justifyContent: "space-between", padding: "var(--space-5)", background: "var(--surface-container-low)", color: "var(--on-surface)", border: "none", borderRadius: "var(--radius-lg)", cursor: "pointer", textAlign: "left" }, children: [
          /* @__PURE__ */ jsx("h3", { className: "title-md", children: faq.q }),
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { color: openFaq === idx ? "var(--primary)" : "var(--outline)" }, children: openFaq === idx ? "expand_less" : "expand_more" })
        ] }),
        openFaq === idx && /* @__PURE__ */ jsx("div", { style: { padding: "var(--space-4) var(--space-5)", background: "var(--surface-container-low)", color: "var(--on-surface-variant)", borderBottomLeftRadius: "var(--radius-lg)", borderBottomRightRadius: "var(--radius-lg)", marginTop: "-8px" }, children: /* @__PURE__ */ jsx("p", { className: "body-lg", children: faq.a }) })
      ] }, idx)) }),
      /* @__PURE__ */ jsx("div", { style: { textAlign: "center", marginTop: "var(--space-6)" }, children: /* @__PURE__ */ jsx(Link, { to: "/faq", className: "btn btn-secondary", children: "Read Full FAQ" }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", id: "home-articles", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx("div", { className: "section-header", children: /* @__PURE__ */ jsx("h2", { className: "display-sm", children: "Latest Guides & Insights" }) }),
      /* @__PURE__ */ jsx("div", { className: "blog-grid", style: { marginTop: "var(--space-8)" }, children: homeBlogPosts.map((post) => /* @__PURE__ */ jsxs("article", { className: "blog-card card", children: [
        /* @__PURE__ */ jsxs("div", { className: "blog-card__image-container", children: [
          /* @__PURE__ */ jsx("img", { src: post.image, alt: post.title, className: "blog-card__image", loading: "lazy" }),
          /* @__PURE__ */ jsx("span", { className: "blog-card__category", children: post.category })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "blog-card__content", children: [
          /* @__PURE__ */ jsx("span", { className: "label-sm", style: { color: "var(--outline)" }, children: post.date }),
          /* @__PURE__ */ jsx("h3", { className: "title-lg blog-card__title", children: /* @__PURE__ */ jsx(Link, { to: post.path, children: post.title }) }),
          /* @__PURE__ */ jsx("p", { className: "body-md blog-card__excerpt", style: { color: "var(--on-surface-variant)" }, children: post.excerpt }),
          /* @__PURE__ */ jsxs(Link, { to: post.path, className: "blog-card__read-more", children: [
            "Read Article ",
            /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { fontSize: "16px" }, children: "arrow_forward" })
          ] })
        ] })
      ] }, post.id)) }),
      /* @__PURE__ */ jsx("div", { style: { textAlign: "center", marginTop: "var(--space-8)" }, children: /* @__PURE__ */ jsx(Link, { to: "/blog", className: "btn btn-secondary btn-lg", children: "View All Articles" }) })
    ] }) })
  ] });
}
const PricingPage = lazy(() => import("./assets/PricingPage-DpjDYoXl.js"));
const FaqPage = lazy(() => import("./assets/FaqPage-Cy8d8-4j.js"));
const ContactPage = lazy(() => import("./assets/ContactPage-j_8Ktp4P.js"));
const FreeTrialPage = lazy(() => import("./assets/FreeTrialPage-duuRpCo_.js"));
const InstallationPage = lazy(() => import("./assets/InstallationPage-A3pKRRpz.js"));
const TermsPage = lazy(() => import("./assets/TermsPage-DBiPYgLQ.js"));
const PrivacyPage = lazy(() => import("./assets/PrivacyPage-p6z-WcWf.js"));
const RefundPage = lazy(() => import("./assets/RefundPage-ClEHbgn4.js"));
const FirestickPage = lazy(() => import("./assets/FirestickPage-BDp2P1U0.js"));
const ResellerPage = lazy(() => import("./assets/ResellerPage-DUNhvzzB.js"));
const CompetitorPage = lazy(() => import("./assets/CompetitorPage-BlgLkeZa.js"));
const TutorialTivimatePage = lazy(() => import("./assets/TutorialTivimatePage-eaSBw836.js"));
const TutorialSmartersPage = lazy(() => import("./assets/TutorialSmartersPage-MqERewql.js"));
const TutorialIBOPage = lazy(() => import("./assets/TutorialIBOPage-CFPFxO_D.js"));
const TutorialDownloaderPage = lazy(() => import("./assets/TutorialDownloaderPage-CwQ0rTHf.js"));
const BlogPage = lazy(() => import("./assets/BlogPage-BkpEnivr.js"));
const TivimateVsSmartersPage = lazy(() => import("./assets/TivimateVsSmartersPage-DtBiRJ2V.js"));
const BestIptvService2026 = lazy(() => import("./assets/best-iptv-service-2026-BzT4DZD6.js"));
const IptvMultipleConnectionsMultiRoomGuide = lazy(() => import("./assets/iptv-multiple-connections-multi-room-guide-tNnpG4d8.js"));
const BestIptvApps2026 = lazy(() => import("./assets/best-iptv-apps-2026-JOdVCygL.js"));
const IptvFirestickSetupGuide = lazy(() => import("./assets/iptv-firestick-setup-guide-DUGC2Jps.js"));
const WatchSportsIptv = lazy(() => import("./assets/watch-sports-iptv-DMhW-hkN.js"));
const AntiFreezeIptvExplained = lazy(() => import("./assets/anti-freeze-iptv-explained-BjZDzeMX.js"));
const IptvFreeTrialGuide = lazy(() => import("./assets/iptv-free-trial-guide-CGL0kTcB.js"));
const IptvCrackdown2026 = lazy(() => import("./assets/iptv-crackdown-2026-bQTVI-5X.js"));
const IptvFreeTrialChecklist2026 = lazy(() => import("./assets/iptv-free-trial-checklist-2026-C62r_dt2.js"));
const IptvVsCableCordCutting2026 = lazy(() => import("./assets/iptv-vs-cable-cord-cutting-2026-Bsq7IuRs.js"));
const YoutubeTvVsPremiumIptv2026 = lazy(() => import("./assets/youtube-tv-vs-premium-iptv-2026-Da3ww0iN.js"));
const BestLatinoIptvUsa2026 = lazy(() => import("./assets/best-latino-iptv-usa-2026-B56veabk.js"));
const SkyTvAlternativesEurope2026 = lazy(() => import("./assets/SkyTvAlternativesEurope2026-DOh8ZL8Q.js"));
const StreamNflDraft2026NoCable = lazy(() => import("./assets/StreamNflDraft2026NoCable-BpHBrgyt.js"));
const PortableIptvStreamingTravelGuide2026 = lazy(() => import("./assets/PortableIptvStreamingTravelGuide2026-E_0RDMTa.js"));
const InstallIptvSamsungLgSmartTv2026 = lazy(() => import("./assets/InstallIptvSamsungLgSmartTv2026-CNnRUo7k.js"));
const StopIspThrottlingIptv2026 = lazy(() => import("./assets/StopIspThrottlingIptv2026-Jn1biLKu.js"));
const IptvCableReplacementUsa2026 = lazy(() => import("./assets/IptvCableReplacementUsa2026-BSHND2d0.js"));
const BuyIptvWithCryptoSafe2026 = lazy(() => import("./assets/BuyIptvWithCryptoSafe2026-PRZMIe9f.js"));
const BypassMlbBlackoutIptv2026Guide = lazy(() => import("./assets/BypassMlbBlackoutIptv2026Guide-DWVvZKaI.js"));
const FixBrokenIptvPlaylist2026 = lazy(() => import("./assets/FixBrokenIptvPlaylist2026-BI8YzDa4.js"));
const WatchChampionsLeagueFinal20264k = lazy(() => import("./assets/watch-champions-league-final-2026-4k-qmCLoMRZ.js"));
const ReplaceCableAndNetflix2026 = lazy(() => import("./assets/replace-cable-and-netflix-2026-BJ7LURP3.js"));
const IptvCatchUpSports2026Guide = lazy(() => import("./assets/iptv-catch-up-sports-2026-guide-DjpjOoc0.js"));
const SetupFirestickForSportsSeason2026Guide = lazy(() => import("./assets/setup-firestick-for-sports-season-2026-guide-CEKHySgT.js"));
const StreamCollegeFootballNoCable = lazy(() => import("./assets/StreamCollegeFootballNoCable-BmnAtc9B.js"));
const StreamBoxOfficePpvCheapUk = lazy(() => import("./assets/StreamBoxOfficePpvCheapUk-CxGuHixd.js"));
const CheapNflSundayTicketAlternative = lazy(() => import("./assets/CheapNflSundayTicketAlternative-DahTdaYw.js"));
const TivimateMultiScreenSportsSetup = lazy(() => import("./assets/TivimateMultiScreenSportsSetup-Dfca2Sv1.js"));
const ChannelPage = lazy(() => import("./assets/ChannelPage-2HCnOVpG.js"));
function App() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ScrollToTop, {}),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { style: {
      minHeight: "100vh",
      background: "#0d0f14",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }, children: /* @__PURE__ */ jsx("div", { style: {
      width: "40px",
      height: "40px",
      border: "3px solid rgba(255,255,255,0.1)",
      borderTop: "3px solid #6aabff",
      borderRadius: "50%",
      animation: "spin 0.8s linear infinite"
    } }) }), children: /* @__PURE__ */ jsxs(Routes, { children: [
      /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(HomePage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/buy-iptv-subscription", element: /* @__PURE__ */ jsx(PricingPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/faq", element: /* @__PURE__ */ jsx(FaqPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/contact", element: /* @__PURE__ */ jsx(ContactPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/iptv-free-trial", element: /* @__PURE__ */ jsx(FreeTrialPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/setup-guides", element: /* @__PURE__ */ jsx(InstallationPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/iptv-for-firestick", element: /* @__PURE__ */ jsx(FirestickPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/iptv-reseller-panel", element: /* @__PURE__ */ jsx(ResellerPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/imax-iptv-alternative", element: /* @__PURE__ */ jsx(CompetitorPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/tutorials/how-to-setup-tivimate", element: /* @__PURE__ */ jsx(TutorialTivimatePage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/tutorials/how-to-setup-smarters-pro", element: /* @__PURE__ */ jsx(TutorialSmartersPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/tutorials/how-to-setup-ibo-player", element: /* @__PURE__ */ jsx(TutorialIBOPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/tutorials/how-to-set-up-downloader", element: /* @__PURE__ */ jsx(TutorialDownloaderPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/channel-list", element: /* @__PURE__ */ jsx(ChannelPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog", element: /* @__PURE__ */ jsx(BlogPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog/best-iptv-service-2026", element: /* @__PURE__ */ jsx(BestIptvService2026, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog/iptv-multiple-connections-multi-room-guide", element: /* @__PURE__ */ jsx(IptvMultipleConnectionsMultiRoomGuide, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog/best-iptv-apps-2026", element: /* @__PURE__ */ jsx(BestIptvApps2026, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog/iptv-firestick-setup-guide", element: /* @__PURE__ */ jsx(IptvFirestickSetupGuide, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog/watch-sports-iptv", element: /* @__PURE__ */ jsx(WatchSportsIptv, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog/anti-freeze-iptv-explained", element: /* @__PURE__ */ jsx(AntiFreezeIptvExplained, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog/iptv-free-trial-guide", element: /* @__PURE__ */ jsx(IptvFreeTrialGuide, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog/iptv-crackdown-2026", element: /* @__PURE__ */ jsx(IptvCrackdown2026, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog/iptv-free-trial-checklist-2026", element: /* @__PURE__ */ jsx(IptvFreeTrialChecklist2026, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog/iptv-vs-cable-cord-cutting-2026", element: /* @__PURE__ */ jsx(IptvVsCableCordCutting2026, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog/youtube-tv-vs-premium-iptv-2026", element: /* @__PURE__ */ jsx(YoutubeTvVsPremiumIptv2026, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog/best-latino-iptv-usa-2026", element: /* @__PURE__ */ jsx(BestLatinoIptvUsa2026, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog/sky-tv-alternatives-europe-2026", element: /* @__PURE__ */ jsx(SkyTvAlternativesEurope2026, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog/stream-nfl-draft-2026-no-cable", element: /* @__PURE__ */ jsx(StreamNflDraft2026NoCable, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog/portable-iptv-streaming-travel-guide-2026", element: /* @__PURE__ */ jsx(PortableIptvStreamingTravelGuide2026, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog/install-iptv-samsung-lg-smart-tv-2026", element: /* @__PURE__ */ jsx(InstallIptvSamsungLgSmartTv2026, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog/stop-isp-throttling-iptv-2026", element: /* @__PURE__ */ jsx(StopIspThrottlingIptv2026, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog/iptv-cable-replacement-usa-2026-guide", element: /* @__PURE__ */ jsx(IptvCableReplacementUsa2026, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog/buy-iptv-with-crypto-safe-2026-guide", element: /* @__PURE__ */ jsx(BuyIptvWithCryptoSafe2026, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog/bypass-mlb-blackout-iptv-2026-guide", element: /* @__PURE__ */ jsx(BypassMlbBlackoutIptv2026Guide, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog/fix-broken-iptv-playlist-dead-m3u-links-2026", element: /* @__PURE__ */ jsx(FixBrokenIptvPlaylist2026, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog/watch-champions-league-final-2026-4k", element: /* @__PURE__ */ jsx(WatchChampionsLeagueFinal20264k, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog/replace-cable-and-netflix-2026", element: /* @__PURE__ */ jsx(ReplaceCableAndNetflix2026, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog/iptv-catch-up-sports-2026-guide", element: /* @__PURE__ */ jsx(IptvCatchUpSports2026Guide, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog/setup-firestick-for-sports-season-2026-guide", element: /* @__PURE__ */ jsx(SetupFirestickForSportsSeason2026Guide, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog/stream-college-football-no-cable", element: /* @__PURE__ */ jsx(StreamCollegeFootballNoCable, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog/stream-box-office-ppv-cheap-uk", element: /* @__PURE__ */ jsx(StreamBoxOfficePpvCheapUk, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog/cheap-nfl-sunday-ticket-alternative", element: /* @__PURE__ */ jsx(CheapNflSundayTicketAlternative, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog/tivimate-multi-screen-sports-setup", element: /* @__PURE__ */ jsx(TivimateMultiScreenSportsSetup, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/tivimate-vs-iptv-smarters-pro-best-player-2026", element: /* @__PURE__ */ jsx(TivimateVsSmartersPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/terms", element: /* @__PURE__ */ jsx(TermsPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/privacy", element: /* @__PURE__ */ jsx(PrivacyPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/refund", element: /* @__PURE__ */ jsx(RefundPage, {}) })
    ] }) }) }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(WhatsAppWidget, {})
  ] });
}
function render(url, helmetContext = {}) {
  return renderToString(
    /* @__PURE__ */ jsx(React__default.StrictMode, { children: /* @__PURE__ */ jsx(HelmetProvider, { context: helmetContext, children: /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(App, {}) }) }) })
  );
}
export {
  Helmet as H,
  Link as L,
  blogPosts as b,
  render as default
};
