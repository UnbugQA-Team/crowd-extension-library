(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.id="crowd-app-io-32.26539000450539",t.appendChild(document.createTextNode('.crowd-prompt{position:fixed;z-index:5000}.crowd-prompt iframe{z-index:1100;background-color:transparent!important;background:transparent!important;border:none}.crowd-prompt .prompt-body-frame{width:470px;background:transparent;position:fixed;box-shadow:#00000029 0 5px 5px;-webkit-box-shadow:rgba(0,0,0,.16) 0px 5px 5px;-moz-box-shadow:rgba(0,0,0,.16) 0px 5px 6px;border-radius:10px}.crowd-prompt .prompt-body-iframe{width:470px;background:transparent;position:fixed;border-radius:10px}@media (max-width: 600px){.crowd-prompt .prompt-body-frame,.crowd-prompt .prompt-body-iframe{width:100%!important}}.crowd-prompt .close-prompt-panel-btn{width:35px!important;height:35px!important;background:#111827!important;position:absolute!important;border-radius:50%!important;right:10px!important;top:-20px;z-index:1110;display:flex;justify-content:center!important;align-items:center!important;cursor:pointer;border:none!important}.crowd-prompt .close-prompt-panel-btn svg{width:25px!important;height:25px!important}.crowd-prompt .close-prompt-panel-btn svg path{stroke-width:2.5px!important}.prompt-body-frame.prompt-panel-container-bottom-right{position:fixed;right:10px;bottom:10px}.prompt-body-frame.prompt-panel-container-bottom-left{position:fixed;left:10px;bottom:10px}.prompt-body-frame.prompt-panel-container-middle-left{position:fixed;left:-2px;top:50%;transform:translate(-50%) rotate(-90deg);transform-origin:50% 0%}.prompt-body-frame.prompt-panel-container-middle-right{position:fixed;top:50%;right:0;transform:rotate(-90deg) translate(50%,-50%);transform-origin:100% 50%}@media (max-width: 600px){.prompt-body-frame.prompt-panel-container-bottom-right{right:0;bottom:0}.prompt-body-frame.prompt-panel-container-bottom-left{left:0;bottom:0}.prompt-body-frame.prompt-panel-container-middle-left{left:0;transform:translateY(0);top:auto!important;bottom:0}.prompt-body-frame.prompt-panel-container-middle-right{right:0;transform:translateY(0);top:auto!important;bottom:0}}.prompt-body-frame.prompt-panel-bottom-right{position:fixed;right:10px;bottom:10px}.prompt-body-frame.prompt-panel-bottom-left{position:fixed;left:10px;bottom:10px}.prompt-body-frame.prompt-panel-middle-left{position:fixed;left:-2px;top:50%;transform:translate(-50%) rotate(-90deg);transform-origin:50% 0%}.prompt-body-frame.prompt-panel-middle-right{position:fixed;top:50%;right:0;transform:rotate(-90deg) translate(50%,-50%);transform-origin:100% 50%}@media (max-width: 600px){.prompt-body-frame.prompt-panel-bottom-right{right:0;bottom:0}.prompt-body-frame.prompt-panel-bottom-left{left:0;bottom:0}.prompt-body-frame.prompt-panel-middle-left{left:0;transform:translateY(0);top:auto!important;bottom:0}.prompt-body-frame.prompt-panel-middle-right{right:0;transform:translateY(0);top:auto!important;bottom:0}}.crowd-widget{position:fixed;z-index:5000}.crowd-widget iframe{z-index:1100;background-color:transparent;border:none}.crowd-widget .crowd-widget-body-frame{width:400px;background:transparent;position:fixed;box-shadow:#00000029 0 5px 5px;-webkit-box-shadow:rgba(0,0,0,.16) 0px 5px 5px;-moz-box-shadow:rgba(0,0,0,.16) 0px 5px 6px;border-radius:10px}.crowd-widget .crowd-widget-body-iframe{width:400px;background:transparent;position:fixed;border-radius:10px}@media (max-width: 500px){.crowd-widget .crowd-widget-body-frame,.crowd-widget .crowd-widget-body-iframe{width:100%}}.crowd-widget .crowd-widget-body-frame,.crowd-widget .crowd-widget-launcher-frame,.crowd-widget .crowd-widget-body-iframe{opacity:1;transition:visibility 0s,opacity .9s}.crowd-widget .close-widget-panel-btn{width:35px!important;height:35px!important;background:#111827!important;position:absolute!important;border-radius:50%!important;right:5px!important;top:-20px;z-index:1110;display:flex;justify-content:center!important;align-items:center!important;cursor:pointer;border:none!important}.crowd-widget .close-widget-panel-btn svg{width:25px!important;height:25px!important}.crowd-widget .close-widget-panel-btn svg path{stroke-width:2.5px!important}.crowd-widget-body-frame.widget-panel-container-bottom-right{position:fixed;right:10px;bottom:10px}.crowd-widget-body-frame.widget-panel-container-bottom-left{position:fixed;left:10px;bottom:10px}.crowd-widget-body-frame.widget-panel-container-middle-left{position:fixed;top:50%;left:10px;transform:translateY(-50%)}.crowd-widget-body-frame.widget-panel-container-middle-right{position:fixed;top:50%;right:10px;transform:translateY(-50%)}.crowd-widget-body-frame.widget-panel-bottom-right{position:fixed;right:10px;bottom:10px}.crowd-widget-body-frame.widget-panel-bottom-left{position:fixed;left:10px;bottom:10px}.crowd-widget-body-frame.widget-panel-middle-left{position:fixed;top:50%;left:10px;transform:translateY(-50%)}.crowd-widget-body-frame.widget-panel-middle-right{position:fixed;top:50%;right:10px;transform:translateY(-50%)}.crowd-widget-launcher-frame.widget-launcher-bottom-right{position:fixed;right:0;bottom:0}.crowd-widget-launcher-frame.widget-launcher-bottom-left{position:fixed;left:0;bottom:0}.crowd-widget-launcher-frame.widget-launcher-middle-left{position:fixed;left:-2px;top:50%;transform:translate(-50%) rotate(-90deg);transform-origin:50% 0%}.crowd-widget-launcher-frame.widget-launcher-middle-right{position:fixed;top:50%;right:0;transform:rotate(-90deg) translate(50%,-50%);transform-origin:100% 50%}@media (max-width: 500px){.crowd-widget-body-frame.widget-panel-container-bottom-right{right:0;bottom:0}.crowd-widget-body-frame.widget-panel-container-bottom-left{left:0;bottom:0}.crowd-widget-body-frame.widget-panel-container-middle-left{left:0;transform:translateY(0);top:auto!important;bottom:0}.crowd-widget-body-frame.widget-panel-container-middle-right{right:0;transform:translateY(0);top:auto!important;bottom:0}.crowd-widget-body-frame.widget-panel-bottom-right{right:0;bottom:0}.crowd-widget-body-frame.widget-panel-bottom-left{left:0;bottom:0}.crowd-widget-body-frame.widget-panel-middle-left{left:0;transform:translateY(0);top:auto!important;bottom:0}.crowd-widget-body-frame.widget-panel-middle-right{right:0;transform:translateY(0);top:auto!important;bottom:0}}.controller-frame.rr-block{background-color:transparent!important}.controller-frame{position:fixed;bottom:15px;left:calc(50% - 135px);right:calc(50% - 135px);padding:0;transform-origin:50% 50%;cursor:move;height:60px!important;width:300px;min-width:300px;max-width:300px}.controller-frame .controller-wrapper{display:flex;justify-content:center;align-items:center;width:300px;min-width:300px;max-width:300px;border-radius:7px;height:60px!important}.controller-frame .controller-drag{height:30px;width:30px}.controller-frame svg{height:30px;width:30px;stroke:#000}.controller-frame iframe{position:relative;height:60px!important;width:240px!important}.crowd-recording-frame{padding:10px}.crowd-recording-frame .recording-frame{position:fixed;border:4px solid red;top:0;left:0;right:0;bottom:0;z-index:9999;display:flex;justify-content:center;align-items:center;pointer-events:none}body.show-crowd-player{overflow:hidden!important}.crowd-widget .record-player-frame{position:fixed!important;background:rgba(0,0,0,.72)!important;width:100vw!important;height:100vh!important;padding:80px 100px!important;top:0!important;left:0!important;right:0!important;bottom:0!important;display:flex!important;justify-content:center!important;flex-direction:column!important;align-items:center!important;gap:20px!important}.crowd-widget .player-action{width:100%!important;height:50px!important;min-height:50px!important;display:flex!important;flex-direction:row!important;justify-content:center!important;align-items:center!important;gap:20px!important}.crowd-widget .player-action button{display:flex!important;padding:8px 16px!important;justify-content:center!important;align-items:center!important;gap:10px!important;min-width:130px!important;width:130px!important;border-radius:4px!important;color:#fff!important;border:1px solid #fff!important}.crowd-widget .crowd-player-container{width:100%;display:flex;justify-content:center}@media (max-width: 500px){.crowd-widget .record-player-frame{padding:40px 20px}}.replayer-wrapper{position:relative}.replayer-mouse{position:absolute;width:20px;height:20px;transition:left .05s linear,top .05s linear;background-size:contain;background-position:50%;background-repeat:no-repeat;background-image:url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMwMCIgd2lkdGg9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCA1MCA1MCI+PHBhdGggZD0iTTQ4LjcxIDQyLjkxTDM0LjA4IDI4LjI5IDQ0LjMzIDE4YTEgMSAwIDAwLS4zMy0xLjYxTDIuMzUgMS4wNmExIDEgMCAwMC0xLjI5IDEuMjlMMTYuMzkgNDRhMSAxIDAgMDAxLjY1LjM2bDEwLjI1LTEwLjI4IDE0LjYyIDE0LjYzYTEgMSAwIDAwMS40MSAwbDQuMzgtNC4zOGExIDEgMCAwMC4wMS0xLjQyem0tNS4wOSAzLjY3TDI5IDMyYTEgMSAwIDAwLTEuNDEgMGwtOS44NSA5Ljg1TDMuNjkgMy42OWwzOC4xMiAxNEwzMiAyNy41OEExIDEgMCAwMDMyIDI5bDE0LjU5IDE0LjYyeiIvPjwvc3ZnPg==);border-color:transparent}.replayer-mouse:after{content:"";display:inline-block;width:20px;height:20px;background:#4950f6;border-radius:100%;transform:translate(-50%,-50%);opacity:.3}.replayer-mouse.active:after{animation:click .2s ease-in-out 1}.replayer-mouse.touch-device{background-image:none;width:70px;height:70px;border-radius:100%;margin-left:-37px;margin-top:-37px;border:4px solid rgba(73,80,246,0);transition:left 0s linear,top 0s linear,border-color .2s ease-in-out}.replayer-mouse.touch-device.touch-active{border-color:#4950f6;transition:left .25s linear,top .25s linear,border-color .2s ease-in-out}.replayer-mouse.touch-device:after{opacity:0}.replayer-mouse.touch-device.active:after{animation:touch-click .2s ease-in-out 1}.replayer-mouse-tail{position:absolute;pointer-events:none}@keyframes click{0%{opacity:.3;width:20px;height:20px}50%{opacity:.5;width:10px;height:10px}}@keyframes touch-click{0%{opacity:0;width:20px;height:20px}50%{opacity:.5;width:10px;height:10px}}.rr-player{position:relative;background:white;float:left;border-radius:5px;box-shadow:0 24px 48px #11103e1f}.rr-player__frame{overflow:hidden}.replayer-wrapper{float:left;clear:both;transform-origin:top left;left:50%;top:50%}.replayer-wrapper>iframe{border:none}.rr-controller.svelte-19ke1iv.svelte-19ke1iv{width:100%;height:80px;background:#fff;display:flex;flex-direction:column;justify-content:space-around;align-items:center;border-radius:0 0 5px 5px}.rr-timeline.svelte-19ke1iv.svelte-19ke1iv{width:80%;display:flex;align-items:center}.rr-timeline__time.svelte-19ke1iv.svelte-19ke1iv{display:inline-block;width:100px;text-align:center;color:#11103e}.rr-progress.svelte-19ke1iv.svelte-19ke1iv{flex:1;height:12px;background:#eee;position:relative;border-radius:3px;cursor:pointer;box-sizing:border-box;border-top:solid 4px #fff;border-bottom:solid 4px #fff}.rr-progress.disabled.svelte-19ke1iv.svelte-19ke1iv{cursor:not-allowed}.rr-progress__step.svelte-19ke1iv.svelte-19ke1iv{height:100%;position:absolute;left:0;top:0;background:#e0e1fe}.rr-progress__handler.svelte-19ke1iv.svelte-19ke1iv{width:20px;height:20px;border-radius:10px;position:absolute;top:2px;transform:translate(-50%,-50%);background:rgb(73,80,246)}.rr-controller__btns.svelte-19ke1iv.svelte-19ke1iv{display:flex;align-items:center;justify-content:center;font-size:13px}.rr-controller__btns.svelte-19ke1iv button.svelte-19ke1iv{width:32px;height:32px;display:flex;padding:0;align-items:center;justify-content:center;background:none;border:none;border-radius:50%;cursor:pointer}.rr-controller__btns.svelte-19ke1iv button.svelte-19ke1iv:active{background:#e0e1fe}.rr-controller__btns.svelte-19ke1iv button.active.svelte-19ke1iv{color:#fff;background:rgb(73,80,246)}.rr-controller__btns.svelte-19ke1iv button.svelte-19ke1iv:disabled{cursor:not-allowed}.switch.svelte-9brlez.svelte-9brlez.svelte-9brlez{height:1em;display:flex;align-items:center}.switch.disabled.svelte-9brlez.svelte-9brlez.svelte-9brlez{opacity:.5}.label.svelte-9brlez.svelte-9brlez.svelte-9brlez{margin:0 8px}.switch.svelte-9brlez input[type=checkbox].svelte-9brlez.svelte-9brlez{position:absolute;opacity:0}.switch.svelte-9brlez label.svelte-9brlez.svelte-9brlez{width:2em;height:1em;position:relative;cursor:pointer;display:block}.switch.disabled.svelte-9brlez label.svelte-9brlez.svelte-9brlez{cursor:not-allowed}.switch.svelte-9brlez label.svelte-9brlez.svelte-9brlez:before{content:"";position:absolute;width:2em;height:1em;left:.1em;transition:background .1s ease;background:rgba(73,80,246,.5);border-radius:50px}.switch.svelte-9brlez label.svelte-9brlez.svelte-9brlez:after{content:"";position:absolute;width:1em;height:1em;border-radius:50px;left:0;transition:all .2s ease;box-shadow:0 2px 5px #0000004d;background:#fcfff4;animation:switch-off .2s ease-out;z-index:2}.switch.svelte-9brlez input[type=checkbox].svelte-9brlez:checked+label.svelte-9brlez:before{background:rgb(73,80,246)}.switch.svelte-9brlez input[type=checkbox].svelte-9brlez:checked+label.svelte-9brlez:after{animation:switch-on .2s ease-out;left:1.1em}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
var zi = Object.defineProperty;
var Hi = (t, e, n) => e in t ? zi(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Qi = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var le = (t, e, n) => (Hi(t, typeof e != "symbol" ? e + "" : e, n), n);
var Xa = Qi((el, Ke) => {
  const Ji = "http://localhost:2222", ji = "https://staging.extension.crowdapp.io", Wn = "https://extension.crowdapp.io", On = "https://api.app.crowdapp.io/api/v1", xn = "https://api.stagingv2.crowdapp.io/api/v1", Ge = () => window.CrowdApp && window.CrowdApp.environment ? window.CrowdApp.environment : (window.CrowdApp, "production"), Xi = () => Ge() === "production" ? Wn : Ge() === "staging" ? ji : Ge() === "development" ? Ji : Wn, qi = () => Ge() === "production" ? On : Ge() === "staging" || Ge() === "development" ? xn : On, Ye = Xi(), eo = qi(), to = `${Ye}/extension/unmoderated-test`, qt = `${Ye}/extension/widget`, Ie = (t) => `${t}-${(/* @__PURE__ */ new Date()).getTime()}${Math.floor(Math.random() * 100)}`, en = () => {
    const t = window.location.href, e = new URL(t);
    return {
      hostname: encodeURIComponent(e.hostname),
      host: encodeURIComponent(e.host),
      protocol: encodeURIComponent(e.protocol),
      origin: encodeURIComponent(e.origin)
    };
  }, Ot = (t) => `?token=${encodeURIComponent(
    t
  )}&domain=${encodeURIComponent(
    en().hostname
  )}&host_origin=${encodeURIComponent(
    en().host
  )}&protocol=${encodeURIComponent(
    en().protocol
  )}&env=${Ge()}`, Vr = () => {
    const t = navigator.userAgent;
    return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t) ? "Mobile" : /Tablet|iPad/i.test(t) ? "Tablet" : "Desktop";
  }, _r = (t, e) => {
    let n = e;
    const r = e.endsWith("/") ? window.location.href : window.location.href.replace(/\/$/, ""), i = new URL(r);
    return e.includes(i.origin) && (n = e.replace(i.origin, "")), t === "start_with" ? i.pathname.startsWith(n) : t === "end_with" ? i.pathname.endsWith(n) : t === "contains" ? i.pathname.includes(n) : t === "exactly_matches" ? i.pathname === n : t === "is_not" ? i.pathname !== n : t === "matches_regex" ? new RegExp(n, "i").test(i.pathname) : !1;
  }, no = Symbol(), Pn = Object.getPrototypeOf, gn = /* @__PURE__ */ new WeakMap(), ro = (t) => t && (gn.has(t) ? gn.get(t) : Pn(t) === Object.prototype || Pn(t) === Array.prototype), io = (t) => ro(t) && t[no] || null, Bn = (t, e = !0) => {
    gn.set(t, e);
  }, tn = (t) => typeof t == "object" && t !== null, Ve = /* @__PURE__ */ new WeakMap(), kt = /* @__PURE__ */ new WeakSet(), oo = (t = Object.is, e = (c, d) => new Proxy(c, d), n = (c) => tn(c) && !kt.has(c) && (Array.isArray(c) || !(Symbol.iterator in c)) && !(c instanceof WeakMap) && !(c instanceof WeakSet) && !(c instanceof Error) && !(c instanceof Number) && !(c instanceof Date) && !(c instanceof String) && !(c instanceof RegExp) && !(c instanceof ArrayBuffer), r = (c) => {
    switch (c.status) {
      case "fulfilled":
        return c.value;
      case "rejected":
        throw c.reason;
      default:
        throw c;
    }
  }, i = /* @__PURE__ */ new WeakMap(), o = (c, d, u = r) => {
    const p = i.get(c);
    if ((p == null ? void 0 : p[0]) === d)
      return p[1];
    const m = Array.isArray(c) ? [] : Object.create(Object.getPrototypeOf(c));
    return Bn(m, !0), i.set(c, [d, m]), Reflect.ownKeys(c).forEach((h) => {
      if (Object.getOwnPropertyDescriptor(m, h))
        return;
      const g = Reflect.get(c, h), { enumerable: C } = Reflect.getOwnPropertyDescriptor(
        c,
        h
      ), f = {
        value: g,
        enumerable: C,
        // This is intentional to avoid copying with proxy-compare.
        // It's still non-writable, so it avoids assigning a value.
        configurable: !0
      };
      if (kt.has(g))
        Bn(g, !1);
      else if (g instanceof Promise)
        delete f.value, f.get = () => u(g);
      else if (Ve.has(g)) {
        const [y, v] = Ve.get(
          g
        );
        f.value = o(
          y,
          v(),
          u
        );
      }
      Object.defineProperty(m, h, f);
    }), Object.preventExtensions(m);
  }, s = /* @__PURE__ */ new WeakMap(), a = [1, 1], l = (c) => {
    if (!tn(c))
      throw new Error("object required");
    const d = s.get(c);
    if (d)
      return d;
    let u = a[0];
    const p = /* @__PURE__ */ new Set(), m = (w, T = ++a[0]) => {
      u !== T && (u = T, p.forEach((I) => I(w, T)));
    };
    let h = a[1];
    const g = (w = ++a[1]) => (h !== w && !p.size && (h = w, f.forEach(([T]) => {
      const I = T[1](w);
      I > u && (u = I);
    })), u), C = (w) => (T, I) => {
      const b = [...T];
      b[1] = [w, ...b[1]], m(b, I);
    }, f = /* @__PURE__ */ new Map(), y = (w, T) => {
      if (p.size) {
        const I = T[3](C(w));
        f.set(w, [T, I]);
      } else
        f.set(w, [T]);
    }, v = (w) => {
      var T;
      const I = f.get(w);
      I && (f.delete(w), (T = I[1]) == null || T.call(I));
    }, A = (w) => (p.add(w), p.size === 1 && f.forEach(([I, b], R) => {
      const N = I[3](C(R));
      f.set(R, [I, N]);
    }), () => {
      p.delete(w), p.size === 0 && f.forEach(([I, b], R) => {
        b && (b(), f.set(R, [I]));
      });
    }), L = Array.isArray(c) ? [] : Object.create(Object.getPrototypeOf(c)), P = e(L, {
      deleteProperty(w, T) {
        const I = Reflect.get(w, T);
        v(T);
        const b = Reflect.deleteProperty(w, T);
        return b && m(["delete", [T], I]), b;
      },
      set(w, T, I, b) {
        const R = Reflect.has(w, T), N = Reflect.get(w, T, b);
        if (R && (t(N, I) || s.has(I) && t(N, s.get(I))))
          return !0;
        v(T), tn(I) && (I = io(I) || I);
        let V = I;
        if (I instanceof Promise)
          I.then((O) => {
            I.status = "fulfilled", I.value = O, m(["resolve", [T], O]);
          }).catch((O) => {
            I.status = "rejected", I.reason = O, m(["reject", [T], O]);
          });
        else {
          !Ve.has(I) && n(I) && (V = l(I));
          const O = !kt.has(V) && Ve.get(V);
          O && y(T, O);
        }
        return Reflect.set(w, T, V, b), m(["set", [T], I, N]), !0;
      }
    });
    s.set(c, P);
    const D = [
      L,
      g,
      o,
      A
    ];
    return Ve.set(P, D), Reflect.ownKeys(c).forEach((w) => {
      const T = Object.getOwnPropertyDescriptor(
        c,
        w
      );
      "value" in T && (P[w] = c[w], delete T.value, delete T.writable), Object.defineProperty(L, w, T);
    }), P;
  }) => [
    // public functions
    l,
    // shared state
    Ve,
    kt,
    // internal things
    t,
    e,
    n,
    r,
    i,
    o,
    s,
    a
  ], [so] = oo();
  function Ur(t = {}) {
    return so(t);
  }
  function ao(t, e, n) {
    const r = Ve.get(t);
    let i;
    const o = [], s = r[3];
    let a = !1;
    const c = s((d) => {
      if (o.push(d), n) {
        e(o.splice(0));
        return;
      }
      i || (i = Promise.resolve().then(() => {
        i = void 0, a && e(o.splice(0));
      }));
    });
    return a = !0, () => {
      a = !1, c();
    };
  }
  const He = Ur({
    userTestPromptContainerState: {}
  }), lo = {
    createInitialPrompt(t) {
      He.userTestPromptContainerState[t] = {
        isElementsMounted: !1,
        promptParentContainerId: "",
        promptContainerId: "",
        panelFrameWrapperId: "",
        panelCloseButtonId: "",
        promptDisplayRule: null
      };
    },
    generateElementIds(t, e) {
      He.userTestPromptContainerState[t].promptParentContainerId = Ie(
        `${e}-parent-container`
      ), He.userTestPromptContainerState[t].promptContainerId = Ie(`${e}-body-container`), He.userTestPromptContainerState[t].panelFrameWrapperId = Ie(`${e}-body`), He.userTestPromptContainerState[t].panelCloseButtonId = Ie(`${e}-close-button`);
    }
  }, co = {
    state: He,
    action: lo
  }, ee = Ur({
    widgetContainerState: {}
  }), uo = {
    createWidgetInitialState(t) {
      ee.widgetContainerState[t] = {
        isElementsMounted: !1,
        isPanelVisible: !1,
        isLauncherVisible: !1,
        isControllerVisible: !1,
        isRecordPlayerVisible: !1,
        shouldShowLauncher: !1,
        isLauncherFrameLoaded: !1,
        isPanelFrameLoaded: !1,
        isControllerFrameLoaded: !1,
        /* Ids for the div container and the iframes */
        widgetContainerId: "",
        panelFrameWrapperId: "",
        panelFrameId: "",
        launcherFrameId: "",
        controllerFrameWrapperId: "",
        controllerFrameId: "",
        screenRecordPlayerFrameId: "",
        panelCloseButtonId: "",
        widgetDisplayRule: null
      };
    },
    /**
     * Generate element ids based on the elementIdPrefix.
     *
     * @param {string} elementIdPrefix - The prefix used for generating element ids.
     */
    generateElementIds(t, e) {
      ee.widgetContainerState[t].widgetContainerId = Ie(`${e}-container`), ee.widgetContainerState[t].panelFrameWrapperId = Ie(`${e}-container`), ee.widgetContainerState[t].panelFrameId = Ie(
        `${e}-body`
      ), ee.widgetContainerState[t].launcherFrameId = Ie(
        `${e}-launcher`
      ), ee.widgetContainerState[t].controllerFrameWrapperId = Ie(`${e}-controller-wrapper`), ee.widgetContainerState[t].controllerFrameId = Ie(`${e}-controller`), ee.widgetContainerState[t].screenRecordPlayerFrameId = Ie(`${e}-record-player-frame`), ee.widgetContainerState[t].panelCloseButtonId = Ie(`${e}-close-button`);
    },
    /**
     *   * @param {{isLauncherFrameLoaded?: boolean; isPanelFrameLoaded?: boolean; isControllerFrameLoaded?: boolean;}} payload -
     * @return {void}
     */
    updateIframeLoaded(t, e) {
      ee.widgetContainerState[t].isLauncherFrameLoaded = e.isLauncherFrameLoaded ?? ee.widgetContainerState[t].isLauncherFrameLoaded, ee.widgetContainerState[t].isPanelFrameLoaded = e.isPanelFrameLoaded ?? ee.widgetContainerState[t].isPanelFrameLoaded, ee.widgetContainerState[t].isControllerFrameLoaded = e.isControllerFrameLoaded ?? ee.widgetContainerState[t].isControllerFrameLoaded;
    },
    updateDisplayRules(t, e) {
      ee.widgetContainerState[t].widgetDisplayRule = e;
    },
    /**
     *  Update widget section visibility based on the provided payload.
     *
     * @param {object} payload - Object containing visibility settings for different sections of the widget.
     */
    updateWidgetSectionVisibility(t, e) {
      ee.widgetContainerState[t].isElementsMounted = e.isElementsMounted ?? ee.widgetContainerState[t].isElementsMounted, ee.widgetContainerState[t].isPanelVisible = e.isPanelVisible ?? ee.widgetContainerState[t].isPanelVisible, ee.widgetContainerState[t].isLauncherVisible = e.isLauncherVisible ?? ee.widgetContainerState[t].isLauncherVisible, ee.widgetContainerState[t].isControllerVisible = e.isControllerVisible ?? ee.widgetContainerState[t].isControllerVisible, ee.widgetContainerState[t].isRecordPlayerVisible = e.isRecordPlayerVisible ?? ee.widgetContainerState[t].isRecordPlayerVisible;
    },
    updateShouldShowLauncher(t, e) {
      ee.widgetContainerState[t].shouldShowLauncher = e;
    }
  }, ho = {
    state: ee,
    action: uo
  }, M = {
    modules: {
      widget: ho,
      userTestPrompt: co
    },
    strict: !1,
    state: () => ({})
  }, po = 30, En = "crowd-widget", Vn = "crowd-recording-frame", go = "crowd-prompt", Gr = "crowd-ignored-unmoderated-test", nn = "crowd-answered-unmoderated-test", Ne = (t, e) => {
    if (t === "id")
      return document.getElementById(e);
    if (t === "class") {
      const n = document.getElementsByClassName(e);
      if (n.length > 0)
        return n[0];
    } else
      return null;
  }, _n = [
    { label: "Do not reshow", value: "0_hours" },
    { label: "Reshow after 24 hours", value: "24_hours" },
    { label: "Reshow after 3 days", value: "72_hours" },
    { label: "Reshow after 1 week", value: "168_hours" }
  ], mo = (t, e, n) => {
    const r = /* @__PURE__ */ new Date();
    r.setTime(
      r.getTime() + n * 24 * 60 * 60 * 1e3
    );
    const i = `${t}=${encodeURIComponent(
      JSON.stringify(e)
    )}; expires=${r.toUTCString()}; path=/`;
    document.cookie = i;
  }, Un = (t) => {
    const n = document.cookie.split(";");
    let r = null;
    return n.forEach((i) => {
      const [o, s] = i.trim().split("=");
      o === t && (r = JSON.parse(decodeURIComponent(s)));
    }), r === null ? [] : r;
  }, fo = (t, e) => {
    const n = `${Gr}-${(/* @__PURE__ */ new Date()).getTime()}`, r = /* @__PURE__ */ new Date();
    r.setTime(
      r.getTime() + e * 24 * 60 * 60 * 1e3
    );
    const i = `${n}=${encodeURIComponent(
      t
    )}; expires=${r.toUTCString()}; path=/`;
    document.cookie = i;
  }, yo = () => {
    const t = new RegExp(`^${Gr}`), n = document.cookie.split(";"), r = [];
    for (let i of n) {
      const [o, s] = i.split("=").map((a) => a.trim());
      t.test(o) && r.push(s);
    }
    return r;
  }, Co = (t) => {
    const e = _n.findIndex(
      (n) => n.value === t
    );
    if (e !== 1) {
      const r = _n[e].value.split("_")[0];
      return Number(r) === 0 ? 180 : Number(r) / 24;
    } else
      return 180;
  }, ct = (t) => {
    const e = M.modules.userTestPrompt.state.userTestPromptContainerState[t].promptParentContainerId, n = M.modules.userTestPrompt.state.userTestPromptContainerState[t].promptContainerId, r = M.modules.userTestPrompt.state.userTestPromptContainerState[t].panelFrameWrapperId, i = Ne(
      "id",
      e
    );
    if (!i)
      throw new Error(`Element with ID "${e}" not found`);
    const o = Ne(
      "id",
      n
    );
    if (!o)
      throw new Error(`Element with ID "${n}" not found`);
    const s = Ne(
      "id",
      r
    );
    if (!s)
      throw new Error(`Element with ID "${r}" not found`);
    return {
      parentWrapper: i,
      panelContainerElement: o,
      panelIframe: s
    };
  }, Io = (t) => ({
    panelEndpoint: `${to}/${Ot(
      t
    )}`
  }), vo = (t) => {
    const e = Vr();
    return e === "Mobile" && t.mobile || e === "Desktop" && t.desktop || e === "Tablet" && t.tablet;
  }, wo = async (t) => {
    if (t.visibilityOption === "ALLPAGES")
      return {
        position: t.promptPosition
      };
    if (t.visibilityOption === "SPECIFICPAGES") {
      const e = t.targetPages.filter(
        (n) => _r(n.optionName, n.optionValue)
      );
      return vo(t.deviceSupported) && e.length > 0 ? {
        position: t.promptPosition
      } : !1;
    } else
      return !1;
  };
  var De = /* @__PURE__ */ ((t) => (t.PromptLoaded = "PROMPTLOADED", t.GetPromptSize = "GETPROMPTSIZE", t.PromptResize = "PROMPTRESIZE", t.LastPromptUnmoderatedId = "LASTPROMPTUNMODERATEDID", t.RemovePrompt = "REMOVEPROMPT", t.CheckDeviceCompatibility = "CHECKDEVICECOMPATIBILITY", t.PaginateUnmoderatedTest = "PAGINATEUNMODERATEDTEST", t.StoreUserTestId = "STOREMODERATEDTESTID", t))(De || {});
  const Rt = Ye;
  class bo {
    constructor(e) {
      le(this, "observer");
      le(this, "integrationToken", "");
      le(this, "deviceIncompatiblePrompt", []);
      //** This class variable holds the currently displayed unmoderated test  */
      le(this, "currentlyDisplayedUnmoderatedTest", null);
      // //** Generate IDs for the div container that will be used to enclose IFrames */
      // private promptPanelContainerFrameId = ''
      // //** Generate IDs for the div container that will be used for the IFrames */
      // private promptPanelFrameId = ''
      le(this, "promptParentContainer", null);
      this.integrationToken = e, M.modules.userTestPrompt.action.createInitialPrompt(
        this.integrationToken
      ), this.observer = new MutationObserver(
        this.handleMutationsObserver.bind(this)
      );
    }
    setupPromptPanelElement() {
      return `<div id="${M.modules.userTestPrompt.state.userTestPromptContainerState[this.integrationToken].promptContainerId}" class="prompt-body-frame" style="height: 0; visibility: hidden;"> <button type="button" id="${M.modules.userTestPrompt.state.userTestPromptContainerState[this.integrationToken].panelCloseButtonId}" class="close-prompt-panel-btn"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12L12 4M4 4L12 12" stroke="#F9FAFB" stroke-width="1.13" stroke-linecap="round" stroke-linejoin="round"/>
    </svg></button><iframe id="${M.modules.userTestPrompt.state.userTestPromptContainerState[this.integrationToken].panelFrameWrapperId}" frameborder="0" class="prompt-body-iframe" allowtransparency="true" style="height: 0;"></iframe></div>`;
    }
    addListenerForPanelCloseBtn() {
      var e;
      (e = document.getElementById(
        M.modules.userTestPrompt.state.userTestPromptContainerState[this.integrationToken].panelCloseButtonId
      )) == null || e.addEventListener("click", () => {
        this.onCloseOrIgnorePromptAction();
      });
    }
    onCloseOrIgnorePromptAction() {
      fo(
        this.currentlyDisplayedUnmoderatedTest.id,
        Co(
          this.currentlyDisplayedUnmoderatedTest.reshowPrompt
        )
      ), this.sendPaginationEventRequest(
        ct(this.integrationToken).panelIframe
      );
    }
    /**
     * @memberof SetUpUnModeratedTestPrompt
     * @method assignPromptPanelEndpoints
     *
     * @description Assigns the panel endpoint to the iframe element.
     * @param {string} integrationToken - The integration token used to generate the endpoints.
     * @return {void}
     */
    assignPromptPanelEndpoints() {
      const e = ct(this.integrationToken), { panelEndpoint: n } = Io(
        this.integrationToken
      );
      e.panelIframe && e.panelIframe.contentWindow && (e.panelIframe.contentWindow.location.href = n);
    }
    setupWidgetContainer() {
      M.modules.userTestPrompt.action.generateElementIds(
        this.integrationToken,
        go
      ), this.promptParentContainer = document.createElement("div"), this.promptParentContainer.classList.add("crowd-prompt"), this.promptParentContainer.setAttribute(
        "id",
        M.modules.userTestPrompt.state.userTestPromptContainerState[this.integrationToken].promptParentContainerId
      ), this.promptParentContainer.innerHTML += this.setupPromptPanelElement(), document.body.appendChild(this.promptParentContainer), this.assignPromptPanelEndpoints(), this.addListenerForPanelCloseBtn(), window.addEventListener("message", (e) => {
        e.origin === Rt && this.listenAndExecutePostMessageInteraction(e);
      }), window.addEventListener(
        "popstate",
        this.triggerPromptOnLinkHash.bind(this)
      );
    }
    handleMutationsObserver(e) {
      const n = document.querySelector("body");
      for (let r of e)
        ;
      this.observer.observe(n, {
        childList: !0,
        subtree: !0
      });
    }
    /**
     * @memberof SetUpUnModeratedTestPrompt
     * @method adjustPromptPanelPositionDimension
     *
     * @description Adjust the prompt panel iframe via position or resize to the size
     */
    adjustPromptPanelPositionDimension(e, n) {
      const r = ct(this.integrationToken);
      e === "Position" ? (r.panelIframe.classList.add(
        `prompt-panel-${n.position.toLowerCase().split("_").join("-")}`
      ), r.panelContainerElement.classList.add(
        `prompt-panel-container-${n.position.toLowerCase().split("_").join("-")}`
      )) : e === "Resize" && (r.panelIframe.style.height = `${n.height}px`, r.panelIframe.style.width = `${n.width}px`, r.panelContainerElement.style.height = `${n.height}px`, r.panelContainerElement.style.width = `${n.width}px`, r.panelContainerElement.style.visibility = "visible");
    }
    sendDisplayedUnmoderatedTestIds(e) {
      var r;
      const n = {
        eventType: De.LastPromptUnmoderatedId,
        payload: {
          ignoredTestIds: yo(),
          answeredTestIds: Un(
            nn
          ),
          incompatibleTestIds: this.deviceIncompatiblePrompt
        }
      };
      (r = e.contentWindow) == null || r.postMessage(n, Rt);
    }
    sendPaginationEventRequest(e) {
      var r;
      const n = {
        eventType: De.PaginateUnmoderatedTest,
        payload: {}
      };
      (r = e.contentWindow) == null || r.postMessage(n, Rt);
    }
    /**
     * @memberof SetUpUnModeratedTestPrompt
     * @method checkCompatibilityForPrompt
     * @description
     *
     */
    checkCompatibilityForPrompt() {
      const e = ct(this.integrationToken);
      this.currentlyDisplayedUnmoderatedTest !== null && wo(
        this.currentlyDisplayedUnmoderatedTest
      ).then((n) => {
        var r;
        if (n) {
          this.adjustPromptPanelPositionDimension("Position", n);
          const i = {
            eventType: De.GetPromptSize,
            payload: {}
          };
          (r = e.panelIframe.contentWindow) == null || r.postMessage(
            i,
            Rt
          );
        } else
          this.deviceIncompatiblePrompt.push(
            this.currentlyDisplayedUnmoderatedTest.id
          ), this.sendPaginationEventRequest(e.panelIframe);
      });
    }
    listenAndExecutePostMessageInteraction(e) {
      var r, i, o;
      const n = ct(this.integrationToken);
      switch (e.data.eventType) {
        case De.PromptLoaded: {
          e.data.payload.showPrompt ? this.sendDisplayedUnmoderatedTestIds(n.panelIframe) : this.clearPromptOnDeactivation();
          break;
        }
        case De.CheckDeviceCompatibility: {
          this.currentlyDisplayedUnmoderatedTest = e.data.payload, this.checkCompatibilityForPrompt();
          break;
        }
        case De.PromptResize: {
          this.adjustPromptPanelPositionDimension("Resize", e.data.payload);
          break;
        }
        case De.RemovePrompt: {
          this.clearPromptOnDeactivation();
          break;
        }
        case De.StoreUserTestId:
          if (e.data.payload.onCloseAction === "ANSWER") {
            const s = Un(
              nn
            );
            ((r = this.currentlyDisplayedUnmoderatedTest) == null ? void 0 : r.id) !== void 0 && (s.push((i = this.currentlyDisplayedUnmoderatedTest) == null ? void 0 : i.id), mo(
              nn,
              s,
              30
            ), this.sendPaginationEventRequest(n.panelIframe));
          } else
            e.data.payload.onCloseAction === "IGNORE" && ((o = this.currentlyDisplayedUnmoderatedTest) == null ? void 0 : o.id) !== void 0 && this.onCloseOrIgnorePromptAction();
      }
    }
    /**
     * @memberof SetUpUnModeratedTestPrompt
     * @method triggerPromptOnLinkHash
     * @description
     *
     */
    triggerPromptOnLinkHash() {
      try {
        this.checkCompatibilityForPrompt();
      } catch {
        window.removeEventListener(
          "popstate",
          this.triggerPromptOnLinkHash.bind(this)
        );
      }
    }
    /**
     * @memberof SetUpUnModeratedTestPrompt
     * @method clearPromptOnDeactivation
     *
     * @description This method clear the prompt parent container if there is a need to deactivate
     *  prompt for the host website
     */
    clearPromptOnDeactivation() {
      this.promptParentContainer && this.promptParentContainer.remove();
    }
  }
  const So = () => {
    try {
      if (document.getElementsByClassName("crowd-prompt").length)
        throw new Error("Crowd Prompt already exists on the page");
      if (window.CrowdApp) {
        const e = window.CrowdApp.crowd_extension_token;
        if (!e)
          throw new Error(
            "Crowd App installation failed. Please ensure that you are using the correct code snippet"
          );
        new bo(e).setupWidgetContainer();
      } else
        throw new Error();
    } catch (t) {
      console.warn(
        t.message ?? "Crowd App installation failed. Please ensure that you are using the correct code snippet"
      );
    }
  }, Ao = async (t) => {
    const e = await fetch(
      `${eo}/active-widgets/${t}`
    );
    if (!e.ok)
      throw new Error(`HTTP ${e.status}: ${e.statusText}`);
    return e.json();
  };
  var ve = /* @__PURE__ */ ((t) => (t.LauncherLoaded = "LAUNCHERLOADED", t.LauncherResize = "LAUNCHERRESIZE", t.PanelLoaded = "PANELLOADED", t.PanelResize = "PANELRESIZE", t.OpenPanel = "OPENPANEL", t.WidgetImpression = "WIDGETIMPRESSION", t.ImpressionRecorded = "IMPRESSIONRECORDED", t.StartScreenRecord = "STARTSCREENRECORD", t.StopScreenRecord = "STOPSCREENRECORD", t.ScreenRecordDone = "SCREENRECORDDONE", t.StartCountDown = "STARTCOUNTDOWN", t))(ve || {});
  const Se = (t) => {
    const e = M.modules.widget.state.widgetContainerState[t].widgetContainerId, n = M.modules.widget.state.widgetContainerState[t].panelFrameWrapperId, r = M.modules.widget.state.widgetContainerState[t].panelFrameId, i = M.modules.widget.state.widgetContainerState[t].launcherFrameId, o = M.modules.widget.state.widgetContainerState[t].controllerFrameId, s = M.modules.widget.state.widgetContainerState[t].controllerFrameWrapperId, a = M.modules.widget.state.widgetContainerState[t].screenRecordPlayerFrameId, l = Ne(
      "id",
      e
    );
    if (!l)
      throw new Error(`Element with ID "${e}" not found`);
    const c = Ne(
      "id",
      n
    );
    if (!c)
      throw new Error(`Element with ID "${n}" not found`);
    const d = Ne(
      "id",
      r
    );
    if (!d)
      throw new Error(`Element with ID "${r}" not found`);
    const u = Ne(
      "id",
      i
    );
    if (!u)
      throw new Error(`Element with ID "${i}" not found`);
    const p = Ne(
      "id",
      s
    );
    if (!p)
      throw new Error(`Element with ID "${s}" not found`);
    const m = Ne(
      "id",
      o
    );
    if (!m)
      throw new Error(`Element with ID "${o}" not found`);
    const h = Ne(
      "id",
      a
    );
    if (!h)
      throw new Error(`Element with ID "${a}" not found`);
    return {
      widgetWrapper: l,
      panelContainerElement: c,
      panelIframe: d,
      launcherIframe: u,
      controllerWrapper: p,
      controllerIframe: m,
      playerFrame: h
    };
  }, Gn = (t) => ({
    panelEndpoint: `${qt}/${Ot(t)}`,
    launcherEndpoint: `${qt}/launcher/${Ot(
      t
    )}`,
    controllerEndpoint: `${qt}/recorder-controller/${Ot(
      t
    )}`
  }), To = () => {
    const t = /* @__PURE__ */ new Date();
    t.setTime(
      t.getTime() + Number(po) * 60 * 1e3
      // minutes to milliseconds
    );
    const e = `${En}-user-session`, n = encodeURIComponent(
      Ie("crowd-widget-user-session")
    ), r = t.toUTCString(), o = `${e}=${n}; expires=${r}; path=/`;
    document.cookie = o;
  }, Eo = () => {
    const t = `${En}-user-session`, n = document.cookie.split(";");
    let r = null;
    return n.forEach((i) => {
      const [o, s] = i.trim().split("=");
      o === t && (r = decodeURIComponent(s));
    }), r !== null;
  };
  class No {
    constructor(e, n) {
      le(this, "integratedWidgetToken", "");
      le(this, "launcherInstance");
      this.integratedWidgetToken = e, this.launcherInstance = n;
    }
    checkCompatibilityForWidget() {
      if (!M.modules.widget.state.widgetContainerState[this.integratedWidgetToken])
        return;
      const e = Se(this.integratedWidgetToken), n = M.modules.widget.state.widgetContainerState[this.integratedWidgetToken].widgetDisplayRule;
      n !== null && this.checkDeviceAndPageCompatibilityForWidget(n).then(
        (r) => {
          const i = M.modules.widget.state.widgetContainerState[this.integratedWidgetToken];
          r && i.shouldShowLauncher ? (e.widgetWrapper.style.visibility = "visible", M.modules.widget.action.updateWidgetSectionVisibility(
            this.integratedWidgetToken,
            {
              isLauncherVisible: i.shouldShowLauncher
            }
          ), setTimeout(() => {
            var o;
            if (this.launcherInstance.adjustWidgetLauncherPositionDimension(
              "Position",
              r
            ), !Eo()) {
              const s = {
                eventType: ve.WidgetImpression,
                token: this.integratedWidgetToken,
                payload: {}
              };
              (o = e.launcherIframe.contentWindow) == null || o.postMessage(
                s,
                Ye
              );
            }
          }, r.showAfter)) : r && !i.shouldShowLauncher ? (e.widgetWrapper.style.visibility = "visible", M.modules.widget.action.updateWidgetSectionVisibility(
            this.integratedWidgetToken,
            {
              isLauncherVisible: !1
            }
          )) : e.widgetWrapper.style.visibility = "hidden";
        }
      );
    }
    async checkDeviceAndPageCompatibilityForWidget(e) {
      if (this.checkDeviceCompatibilityForWidget(e.devices) && e.visibilityOption === "ALLPAGES")
        return {
          position: e.position,
          showAfter: e.showWidgetAfter
        };
      if (this.checkDeviceCompatibilityForWidget(e.devices) && e.visibilityOption === "SPECIFICPAGES") {
        const r = JSON.parse(e.targetPages).filter(
          (i) => _r(i.optionName, i.optionValue)
        );
        return this.checkDeviceCompatibilityForWidget(e.devices) && r.length > 0 ? {
          position: e.position,
          showAfter: e.showWidgetAfter
        } : !1;
      } else
        return !1;
    }
    checkDeviceCompatibilityForWidget(e) {
      const n = Vr().toLowerCase();
      return e.includes(n);
    }
    /**
     * Enables dragging functionality for the widget controller element.
     *
     * @param - The token used to identify the widget elements.
     *
     * This function makes the controller element draggable by attaching mouse
     * event listeners to it. It updates the element's position based on the
     * mouse movements and ensures that the element follows the cursor until
     * the mouse button is released.
     */
    enableControllerDragging() {
      const e = Se(
        this.integratedWidgetToken
      ).controllerWrapper;
      let n = 0, r = 0, i = 0, o = 0;
      function s(c) {
        c = c || window.event, c.preventDefault(), i = c.clientX, o = c.clientY, document.onmouseup = l, document.onmousemove = a;
      }
      function a(c) {
        c = c || window.event, c.preventDefault(), n = i - c.clientX, r = o - c.clientY, i = c.clientX, o = c.clientY, e.style.top = e.offsetTop - r + "px", e.style.left = e.offsetLeft - n + "px";
      }
      function l() {
        document.onmouseup = null, document.onmousemove = null;
      }
      e.onmousedown = s;
    }
    triggerWidgetOnLinkHash() {
      const e = "#crowd-widget-" + this.integratedWidgetToken;
      try {
        this.checkCompatibilityForWidget();
        const n = window.location.hash;
        n !== e && M.modules.widget.state.widgetContainerState[this.integratedWidgetToken].isPanelVisible ? M.modules.widget.action.updateWidgetSectionVisibility(
          this.integratedWidgetToken,
          {
            isPanelVisible: !1,
            isLauncherVisible: M.modules.widget.state.widgetContainerState[this.integratedWidgetToken].shouldShowLauncher
          }
        ) : n === e && !M.modules.widget.state.widgetContainerState[this.integratedWidgetToken].isPanelVisible && M.modules.widget.action.updateWidgetSectionVisibility(
          this.integratedWidgetToken,
          {
            isPanelVisible: !0,
            isLauncherVisible: !1
          }
        );
      } catch {
        window.removeEventListener(
          "popstate",
          this.triggerWidgetOnLinkHash.bind(this)
        );
      }
    }
  }
  let dt;
  function _t(t, e) {
    let n = !0;
    const r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Map(), o = () => {
      n && (n = !1, r.forEach((a) => a()), r.clear(), i.forEach((a) => a()), i.clear());
    }, s = async () => {
      if (!n)
        return;
      r.forEach((c) => c()), r.clear();
      const a = /* @__PURE__ */ new Set(), l = dt;
      dt = r;
      try {
        const c = t((u) => {
          if (a.add(u), n && !i.has(u)) {
            const p = ao(u, s, e == null ? void 0 : e.sync);
            i.set(u, p);
          }
          return u;
        }), d = c && c instanceof Promise ? await c : c;
        d && (n ? r.add(d) : o());
      } finally {
        dt = l;
      }
      i.forEach((c, d) => {
        a.has(d) || (i.delete(d), c());
      });
    };
    return dt && dt.add(o), s(), o;
  }
  class ko {
    constructor(e) {
      le(this, "integratedWidgetToken", "");
      this.integratedWidgetToken = e;
    }
    setupWidgetLauncherElement() {
      if (M.modules.widget.state.widgetContainerState[this.integratedWidgetToken])
        return _t((e) => {
          const n = e(M.modules.widget.state).widgetContainerState[this.integratedWidgetToken].isLauncherVisible, r = e(M.modules.widget.state).widgetContainerState[this.integratedWidgetToken].shouldShowLauncher;
          if (!M.modules.widget.state.widgetContainerState[this.integratedWidgetToken].isElementsMounted)
            return;
          const i = Se(this.integratedWidgetToken);
          i.launcherIframe.style.visibility = !r || !n ? "hidden" : "visible";
        }), `<iframe id="${M.modules.widget.state.widgetContainerState[this.integratedWidgetToken].launcherFrameId}" frameborder="0" class="crowd-widget-launcher-frame" allowtransparency="true" style="height: 0;"></iframe>`;
    }
    adjustWidgetLauncherPositionDimension(e, n) {
      if (!M.modules.widget.state.widgetContainerState[this.integratedWidgetToken])
        return;
      const r = Se(this.integratedWidgetToken);
      if (e === "Position") {
        const i = n.position.toLowerCase().split("_").join("-");
        r.launcherIframe.classList.add(
          `widget-launcher-${i}`
        );
      } else
        e === "Resize" && (n.height !== void 0 && (r.launcherIframe.style.height = `${n.height}px`), n.width !== void 0 && (r.launcherIframe.style.width = `${n.width}px`));
    }
  }
  class Ro {
    constructor(e) {
      le(this, "integratedWidgetToken", "");
      this.integratedWidgetToken = e;
    }
    setupWidgetPanelElement() {
      if (!M.modules.widget.state.widgetContainerState[this.integratedWidgetToken])
        return;
      _t((i) => {
        const o = i(M.modules.widget.state).widgetContainerState[this.integratedWidgetToken].isPanelVisible;
        if (!M.modules.widget.state.widgetContainerState[this.integratedWidgetToken].isElementsMounted)
          return;
        const s = Se(this.integratedWidgetToken);
        s.panelContainerElement.style.visibility = o ? "visible" : "hidden";
      });
      const { panelFrameWrapperId: e, panelFrameId: n, panelCloseButtonId: r } = M.modules.widget.state.widgetContainerState[this.integratedWidgetToken];
      return `<div id="${e}" class="crowd-widget-body-frame" style="height: 0; visibility: hidden;"> 
                <button type="button" id="${r}" class="close-widget-panel-btn">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12L12 4M4 4L12 12" stroke="#F9FAFB" stroke-width="1.13" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button> 
                <iframe id="${n}" frameborder="0" class="crowd-widget-body-iframe" allowtransparency="true" style="height: 0;"></iframe>
            </div>`;
    }
    addListenerForPanelCloseBtn() {
      var e;
      M.modules.widget.state.widgetContainerState[this.integratedWidgetToken] && ((e = document.getElementById(
        M.modules.widget.state.widgetContainerState[this.integratedWidgetToken].panelCloseButtonId
      )) == null || e.addEventListener("click", () => {
        M.modules.widget.action.updateWidgetSectionVisibility(
          this.integratedWidgetToken,
          {
            isPanelVisible: !1,
            isLauncherVisible: M.modules.widget.state.widgetContainerState[this.integratedWidgetToken].shouldShowLauncher
          }
        ), window.location.hash && history.pushState(
          "",
          document.title,
          window.location.pathname + window.location.search
        );
      }));
    }
    adjustWidgetPanelPositionDimension(e, n) {
      if (!M.modules.widget.state.widgetContainerState[this.integratedWidgetToken])
        return;
      const r = Se(this.integratedWidgetToken);
      if (e === "Position") {
        const i = `widget-panel-${n.position.toLowerCase().split("_").join("-")}`, o = `widget-panel-container-${n.position.toLowerCase().split("_").join("-")}`;
        r.panelIframe.classList.add(i), r.panelContainerElement.classList.add(o);
      } else
        e === "Resize" && (r.panelIframe.style.height = `${n.height}px`, r.panelContainerElement.style.height = `${n.height}px`);
    }
  }
  var he;
  (function(t) {
    t[t.Document = 0] = "Document", t[t.DocumentType = 1] = "DocumentType", t[t.Element = 2] = "Element", t[t.Text = 3] = "Text", t[t.CDATA = 4] = "CDATA", t[t.Comment = 5] = "Comment";
  })(he || (he = {}));
  function Mo(t) {
    return t.nodeType === t.ELEMENT_NODE;
  }
  function mt(t) {
    var e = t == null ? void 0 : t.host;
    return (e == null ? void 0 : e.shadowRoot) === t;
  }
  function ft(t) {
    return Object.prototype.toString.call(t) === "[object ShadowRoot]";
  }
  function Do(t) {
    return t.includes(" background-clip: text;") && !t.includes(" -webkit-background-clip: text;") && (t = t.replace(" background-clip: text;", " -webkit-background-clip: text; background-clip: text;")), t;
  }
  function mn(t) {
    try {
      var e = t.rules || t.cssRules;
      return e ? Do(Array.from(e).map(Zr).join("")) : null;
    } catch {
      return null;
    }
  }
  function Zr(t) {
    var e = t.cssText;
    if (Fo(t))
      try {
        e = mn(t.styleSheet) || e;
      } catch {
      }
    return e;
  }
  function Fo(t) {
    return "styleSheet" in t;
  }
  var Kr = function() {
    function t() {
      this.idNodeMap = /* @__PURE__ */ new Map(), this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
    }
    return t.prototype.getId = function(e) {
      var n;
      if (!e)
        return -1;
      var r = (n = this.getMeta(e)) === null || n === void 0 ? void 0 : n.id;
      return r ?? -1;
    }, t.prototype.getNode = function(e) {
      return this.idNodeMap.get(e) || null;
    }, t.prototype.getIds = function() {
      return Array.from(this.idNodeMap.keys());
    }, t.prototype.getMeta = function(e) {
      return this.nodeMetaMap.get(e) || null;
    }, t.prototype.removeNodeFromMap = function(e) {
      var n = this, r = this.getId(e);
      this.idNodeMap.delete(r), e.childNodes && e.childNodes.forEach(function(i) {
        return n.removeNodeFromMap(i);
      });
    }, t.prototype.has = function(e) {
      return this.idNodeMap.has(e);
    }, t.prototype.hasNode = function(e) {
      return this.nodeMetaMap.has(e);
    }, t.prototype.add = function(e, n) {
      var r = n.id;
      this.idNodeMap.set(r, e), this.nodeMetaMap.set(e, n);
    }, t.prototype.replace = function(e, n) {
      var r = this.getNode(e);
      if (r) {
        var i = this.nodeMetaMap.get(r);
        i && this.nodeMetaMap.set(n, i);
      }
      this.idNodeMap.set(e, n);
    }, t.prototype.reset = function() {
      this.idNodeMap = /* @__PURE__ */ new Map(), this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
    }, t;
  }();
  function Lo() {
    return new Kr();
  }
  function Nn(t) {
    var e = t.maskInputOptions, n = t.tagName, r = t.type, i = t.value, o = t.maskInputFn, s = i || "";
    return (e[n.toLowerCase()] || e[r]) && (o ? s = o(s) : s = "*".repeat(s.length)), s;
  }
  var Zn = "__rrweb_original__";
  function Wo(t) {
    var e = t.getContext("2d");
    if (!e)
      return !0;
    for (var n = 50, r = 0; r < t.width; r += n)
      for (var i = 0; i < t.height; i += n) {
        var o = e.getImageData, s = Zn in o ? o[Zn] : o, a = new Uint32Array(s.call(e, r, i, Math.min(n, t.width - r), Math.min(n, t.height - i)).data.buffer);
        if (a.some(function(l) {
          return l !== 0;
        }))
          return !1;
      }
    return !0;
  }
  var Oo = 1, xo = new RegExp("[^a-z0-9-_:]"), wt = -2;
  function $r() {
    return Oo++;
  }
  function Po(t) {
    if (t instanceof HTMLFormElement)
      return "form";
    var e = t.tagName.toLowerCase().trim();
    return xo.test(e) ? "div" : e;
  }
  function Bo(t) {
    return t.cssRules ? Array.from(t.cssRules).map(function(e) {
      return e.cssText || "";
    }).join("") : "";
  }
  function Vo(t) {
    var e = "";
    return t.indexOf("//") > -1 ? e = t.split("/").slice(0, 3).join("/") : e = t.split("/")[0], e = e.split("?")[0], e;
  }
  var ze, Kn, _o = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm, Uo = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/, Go = /^(data:)([^,]*),(.*)/i;
  function Ut(t, e) {
    return (t || "").replace(_o, function(n, r, i, o, s, a) {
      var l = i || s || a, c = r || o || "";
      if (!l)
        return n;
      if (!Uo.test(l) || Go.test(l))
        return "url(".concat(c).concat(l).concat(c, ")");
      if (l[0] === "/")
        return "url(".concat(c).concat(Vo(e) + l).concat(c, ")");
      var d = e.split("/"), u = l.split("/");
      d.pop();
      for (var p = 0, m = u; p < m.length; p++) {
        var h = m[p];
        h !== "." && (h === ".." ? d.pop() : d.push(h));
      }
      return "url(".concat(c).concat(d.join("/")).concat(c, ")");
    });
  }
  var Zo = /^[^ \t\n\r\u000c]+/, Ko = /^[, \t\n\r\u000c]+/;
  function $o(t, e) {
    if (e.trim() === "")
      return e;
    var n = 0;
    function r(c) {
      var d, u = c.exec(e.substring(n));
      return u ? (d = u[0], n += d.length, d) : "";
    }
    for (var i = []; r(Ko), !(n >= e.length); ) {
      var o = r(Zo);
      if (o.slice(-1) === ",")
        o = Xe(t, o.substring(0, o.length - 1)), i.push(o);
      else {
        var s = "";
        o = Xe(t, o);
        for (var a = !1; ; ) {
          var l = e.charAt(n);
          if (l === "") {
            i.push((o + s).trim());
            break;
          } else if (a)
            l === ")" && (a = !1);
          else if (l === ",") {
            n += 1, i.push((o + s).trim());
            break;
          } else
            l === "(" && (a = !0);
          s += l, n += 1;
        }
      }
    }
    return i.join(", ");
  }
  function Xe(t, e) {
    if (!e || e.trim() === "")
      return e;
    var n = t.createElement("a");
    return n.href = e, n.href;
  }
  function Yo(t) {
    return !!(t.tagName === "svg" || t.ownerSVGElement);
  }
  function kn() {
    var t = document.createElement("a");
    return t.href = "", t.href;
  }
  function Yr(t, e, n, r) {
    return n === "src" || n === "href" && r && !(e === "use" && r[0] === "#") || n === "xlink:href" && r && r[0] !== "#" || n === "background" && r && (e === "table" || e === "td" || e === "th") ? Xe(t, r) : n === "srcset" && r ? $o(t, r) : n === "style" && r ? Ut(r, kn()) : e === "object" && n === "data" && r ? Xe(t, r) : r;
  }
  function zo(t, e, n) {
    if (typeof e == "string") {
      if (t.classList.contains(e))
        return !0;
    } else
      for (var r = t.classList.length; r--; ) {
        var i = t.classList[r];
        if (e.test(i))
          return !0;
      }
    return n ? t.matches(n) : !1;
  }
  function Gt(t, e, n) {
    if (!t)
      return !1;
    if (t.nodeType !== t.ELEMENT_NODE)
      return n ? Gt(t.parentNode, e, n) : !1;
    for (var r = t.classList.length; r--; ) {
      var i = t.classList[r];
      if (e.test(i))
        return !0;
    }
    return n ? Gt(t.parentNode, e, n) : !1;
  }
  function zr(t, e, n) {
    var r = t.nodeType === t.ELEMENT_NODE ? t : t.parentElement;
    if (r === null)
      return !1;
    if (typeof e == "string") {
      if (r.classList.contains(e) || r.closest(".".concat(e)))
        return !0;
    } else if (Gt(r, e, !0))
      return !0;
    return !!(n && (r.matches(n) || r.closest(n)));
  }
  function Ho(t, e, n) {
    var r = t.contentWindow;
    if (r) {
      var i = !1, o;
      try {
        o = r.document.readyState;
      } catch {
        return;
      }
      if (o !== "complete") {
        var s = setTimeout(function() {
          i || (e(), i = !0);
        }, n);
        t.addEventListener("load", function() {
          clearTimeout(s), i = !0, e();
        });
        return;
      }
      var a = "about:blank";
      if (r.location.href !== a || t.src === a || t.src === "")
        return setTimeout(e, 0), t.addEventListener("load", e);
      t.addEventListener("load", e);
    }
  }
  function Qo(t, e, n) {
    var r = !1, i;
    try {
      i = t.sheet;
    } catch {
      return;
    }
    if (!i) {
      var o = setTimeout(function() {
        r || (e(), r = !0);
      }, n);
      t.addEventListener("load", function() {
        clearTimeout(o), r = !0, e();
      });
    }
  }
  function Jo(t, e) {
    var n = e.doc, r = e.mirror, i = e.blockClass, o = e.blockSelector, s = e.maskTextClass, a = e.maskTextSelector, l = e.inlineStylesheet, c = e.maskInputOptions, d = c === void 0 ? {} : c, u = e.maskTextFn, p = e.maskInputFn, m = e.dataURLOptions, h = m === void 0 ? {} : m, g = e.inlineImages, C = e.recordCanvas, f = e.keepIframeSrcFn, y = e.newlyAddedElement, v = y === void 0 ? !1 : y, A = jo(n, r);
    switch (t.nodeType) {
      case t.DOCUMENT_NODE:
        return t.compatMode !== "CSS1Compat" ? {
          type: he.Document,
          childNodes: [],
          compatMode: t.compatMode
        } : {
          type: he.Document,
          childNodes: []
        };
      case t.DOCUMENT_TYPE_NODE:
        return {
          type: he.DocumentType,
          name: t.name,
          publicId: t.publicId,
          systemId: t.systemId,
          rootId: A
        };
      case t.ELEMENT_NODE:
        return qo(t, {
          doc: n,
          blockClass: i,
          blockSelector: o,
          inlineStylesheet: l,
          maskInputOptions: d,
          maskInputFn: p,
          dataURLOptions: h,
          inlineImages: g,
          recordCanvas: C,
          keepIframeSrcFn: f,
          newlyAddedElement: v,
          rootId: A
        });
      case t.TEXT_NODE:
        return Xo(t, {
          maskTextClass: s,
          maskTextSelector: a,
          maskTextFn: u,
          rootId: A
        });
      case t.CDATA_SECTION_NODE:
        return {
          type: he.CDATA,
          textContent: "",
          rootId: A
        };
      case t.COMMENT_NODE:
        return {
          type: he.Comment,
          textContent: t.textContent || "",
          rootId: A
        };
      default:
        return !1;
    }
  }
  function jo(t, e) {
    if (e.hasNode(t)) {
      var n = e.getId(t);
      return n === 1 ? void 0 : n;
    }
  }
  function Xo(t, e) {
    var n, r = e.maskTextClass, i = e.maskTextSelector, o = e.maskTextFn, s = e.rootId, a = t.parentNode && t.parentNode.tagName, l = t.textContent, c = a === "STYLE" ? !0 : void 0, d = a === "SCRIPT" ? !0 : void 0;
    if (c && l) {
      try {
        t.nextSibling || t.previousSibling || !((n = t.parentNode.sheet) === null || n === void 0) && n.cssRules && (l = Bo(t.parentNode.sheet));
      } catch (u) {
        console.warn("Cannot get CSS styles from text's parentNode. Error: ".concat(u), t);
      }
      l = Ut(l, kn());
    }
    return d && (l = "SCRIPT_PLACEHOLDER"), !c && !d && l && zr(t, r, i) && (l = o ? o(l) : l.replace(/[\S]/g, "*")), {
      type: he.Text,
      textContent: l || "",
      isStyle: c,
      rootId: s
    };
  }
  function qo(t, e) {
    for (var n = e.doc, r = e.blockClass, i = e.blockSelector, o = e.inlineStylesheet, s = e.maskInputOptions, a = s === void 0 ? {} : s, l = e.maskInputFn, c = e.dataURLOptions, d = c === void 0 ? {} : c, u = e.inlineImages, p = e.recordCanvas, m = e.keepIframeSrcFn, h = e.newlyAddedElement, g = h === void 0 ? !1 : h, C = e.rootId, f = zo(t, r, i), y = Po(t), v = {}, A = t.attributes.length, L = 0; L < A; L++) {
      var x = t.attributes[L];
      v[x.name] = Yr(n, y, x.name, x.value);
    }
    if (y === "link" && o) {
      var P = Array.from(n.styleSheets).find(function(G) {
        return G.href === t.href;
      }), D = null;
      P && (D = mn(P)), D && (delete v.rel, delete v.href, v._cssText = Ut(D, P.href));
    }
    if (y === "style" && t.sheet && !(t.innerText || t.textContent || "").trim().length) {
      var D = mn(t.sheet);
      D && (v._cssText = Ut(D, kn()));
    }
    if (y === "input" || y === "textarea" || y === "select") {
      var w = t.value, T = t.checked;
      v.type !== "radio" && v.type !== "checkbox" && v.type !== "submit" && v.type !== "button" && w ? v.value = Nn({
        type: v.type,
        tagName: y,
        value: w,
        maskInputOptions: a,
        maskInputFn: l
      }) : T && (v.checked = T);
    }
    if (y === "option" && (t.selected && !a.select ? v.selected = !0 : delete v.selected), y === "canvas" && p) {
      if (t.__context === "2d")
        Wo(t) || (v.rr_dataURL = t.toDataURL(d.type, d.quality));
      else if (!("__context" in t)) {
        var I = t.toDataURL(d.type, d.quality), b = document.createElement("canvas");
        b.width = t.width, b.height = t.height;
        var R = b.toDataURL(d.type, d.quality);
        I !== R && (v.rr_dataURL = I);
      }
    }
    if (y === "img" && u) {
      ze || (ze = n.createElement("canvas"), Kn = ze.getContext("2d"));
      var N = t, V = N.crossOrigin;
      N.crossOrigin = "anonymous";
      var O = function() {
        try {
          ze.width = N.naturalWidth, ze.height = N.naturalHeight, Kn.drawImage(N, 0, 0), v.rr_dataURL = ze.toDataURL(d.type, d.quality);
        } catch (G) {
          console.warn("Cannot inline img src=".concat(N.currentSrc, "! Error: ").concat(G));
        }
        V ? v.crossOrigin = V : N.removeAttribute("crossorigin");
      };
      N.complete && N.naturalWidth !== 0 ? O() : N.onload = O;
    }
    if ((y === "audio" || y === "video") && (v.rr_mediaState = t.paused ? "paused" : "played", v.rr_mediaCurrentTime = t.currentTime), g || (t.scrollLeft && (v.rr_scrollLeft = t.scrollLeft), t.scrollTop && (v.rr_scrollTop = t.scrollTop)), f) {
      var S = t.getBoundingClientRect(), _ = S.width, W = S.height;
      v = {
        class: v.class,
        rr_width: "".concat(_, "px"),
        rr_height: "".concat(W, "px")
      };
    }
    return y === "iframe" && !m(v.src) && (t.contentDocument || (v.rr_src = v.src), delete v.src), {
      type: he.Element,
      tagName: y,
      attributes: v,
      childNodes: [],
      isSVG: Yo(t) || void 0,
      needBlock: f,
      rootId: C
    };
  }
  function ne(t) {
    return t === void 0 ? "" : t.toLowerCase();
  }
  function es(t, e) {
    if (e.comment && t.type === he.Comment)
      return !0;
    if (t.type === he.Element) {
      if (e.script && (t.tagName === "script" || t.tagName === "link" && t.attributes.rel === "preload" && t.attributes.as === "script" || t.tagName === "link" && t.attributes.rel === "prefetch" && typeof t.attributes.href == "string" && t.attributes.href.endsWith(".js")))
        return !0;
      if (e.headFavicon && (t.tagName === "link" && t.attributes.rel === "shortcut icon" || t.tagName === "meta" && (ne(t.attributes.name).match(/^msapplication-tile(image|color)$/) || ne(t.attributes.name) === "application-name" || ne(t.attributes.rel) === "icon" || ne(t.attributes.rel) === "apple-touch-icon" || ne(t.attributes.rel) === "shortcut icon")))
        return !0;
      if (t.tagName === "meta") {
        if (e.headMetaDescKeywords && ne(t.attributes.name).match(/^description|keywords$/))
          return !0;
        if (e.headMetaSocial && (ne(t.attributes.property).match(/^(og|twitter|fb):/) || ne(t.attributes.name).match(/^(og|twitter):/) || ne(t.attributes.name) === "pinterest"))
          return !0;
        if (e.headMetaRobots && (ne(t.attributes.name) === "robots" || ne(t.attributes.name) === "googlebot" || ne(t.attributes.name) === "bingbot"))
          return !0;
        if (e.headMetaHttpEquiv && t.attributes["http-equiv"] !== void 0)
          return !0;
        if (e.headMetaAuthorship && (ne(t.attributes.name) === "author" || ne(t.attributes.name) === "generator" || ne(t.attributes.name) === "framework" || ne(t.attributes.name) === "publisher" || ne(t.attributes.name) === "progid" || ne(t.attributes.property).match(/^article:/) || ne(t.attributes.property).match(/^product:/)))
          return !0;
        if (e.headMetaVerification && (ne(t.attributes.name) === "google-site-verification" || ne(t.attributes.name) === "yandex-verification" || ne(t.attributes.name) === "csrf-token" || ne(t.attributes.name) === "p:domain_verify" || ne(t.attributes.name) === "verify-v1" || ne(t.attributes.name) === "verification" || ne(t.attributes.name) === "shopify-checkout-api-token"))
          return !0;
      }
    }
    return !1;
  }
  function qe(t, e) {
    var n = e.doc, r = e.mirror, i = e.blockClass, o = e.blockSelector, s = e.maskTextClass, a = e.maskTextSelector, l = e.skipChild, c = l === void 0 ? !1 : l, d = e.inlineStylesheet, u = d === void 0 ? !0 : d, p = e.maskInputOptions, m = p === void 0 ? {} : p, h = e.maskTextFn, g = e.maskInputFn, C = e.slimDOMOptions, f = e.dataURLOptions, y = f === void 0 ? {} : f, v = e.inlineImages, A = v === void 0 ? !1 : v, L = e.recordCanvas, x = L === void 0 ? !1 : L, P = e.onSerialize, D = e.onIframeLoad, w = e.iframeLoadTimeout, T = w === void 0 ? 5e3 : w, I = e.onStylesheetLoad, b = e.stylesheetLoadTimeout, R = b === void 0 ? 5e3 : b, N = e.keepIframeSrcFn, V = N === void 0 ? function() {
      return !1;
    } : N, O = e.newlyAddedElement, S = O === void 0 ? !1 : O, _ = e.preserveWhiteSpace, W = _ === void 0 ? !0 : _, G = Jo(t, {
      doc: n,
      mirror: r,
      blockClass: i,
      blockSelector: o,
      maskTextClass: s,
      maskTextSelector: a,
      inlineStylesheet: u,
      maskInputOptions: m,
      maskTextFn: h,
      maskInputFn: g,
      dataURLOptions: y,
      inlineImages: A,
      recordCanvas: x,
      keepIframeSrcFn: V,
      newlyAddedElement: S
    });
    if (!G)
      return console.warn(t, "not serialized"), null;
    var X;
    r.hasNode(t) ? X = r.getId(t) : es(G, C) || !W && G.type === he.Text && !G.isStyle && !G.textContent.replace(/^\s+|\s+$/gm, "").length ? X = wt : X = $r();
    var j = Object.assign(G, { id: X });
    if (r.add(t, j), X === wt)
      return null;
    P && P(t);
    var z = !c;
    if (j.type === he.Element) {
      z = z && !j.needBlock, delete j.needBlock;
      var E = t.shadowRoot;
      E && ft(E) && (j.isShadowHost = !0);
    }
    if ((j.type === he.Document || j.type === he.Element) && z) {
      C.headWhitespace && j.type === he.Element && j.tagName === "head" && (W = !1);
      for (var U = {
        doc: n,
        mirror: r,
        blockClass: i,
        blockSelector: o,
        maskTextClass: s,
        maskTextSelector: a,
        skipChild: c,
        inlineStylesheet: u,
        maskInputOptions: m,
        maskTextFn: h,
        maskInputFn: g,
        slimDOMOptions: C,
        dataURLOptions: y,
        inlineImages: A,
        recordCanvas: x,
        preserveWhiteSpace: W,
        onSerialize: P,
        onIframeLoad: D,
        iframeLoadTimeout: T,
        onStylesheetLoad: I,
        stylesheetLoadTimeout: R,
        keepIframeSrcFn: V
      }, k = 0, te = Array.from(t.childNodes); k < te.length; k++) {
        var F = te[k], K = qe(F, U);
        K && j.childNodes.push(K);
      }
      if (Mo(t) && t.shadowRoot)
        for (var pe = 0, Y = Array.from(t.shadowRoot.childNodes); pe < Y.length; pe++) {
          var F = Y[pe], K = qe(F, U);
          K && (ft(t.shadowRoot) && (K.isShadow = !0), j.childNodes.push(K));
        }
    }
    return t.parentNode && mt(t.parentNode) && ft(t.parentNode) && (j.isShadow = !0), j.type === he.Element && j.tagName === "iframe" && Ho(t, function() {
      var Ce = t.contentDocument;
      if (Ce && D) {
        var lt = qe(Ce, {
          doc: Ce,
          mirror: r,
          blockClass: i,
          blockSelector: o,
          maskTextClass: s,
          maskTextSelector: a,
          skipChild: !1,
          inlineStylesheet: u,
          maskInputOptions: m,
          maskTextFn: h,
          maskInputFn: g,
          slimDOMOptions: C,
          dataURLOptions: y,
          inlineImages: A,
          recordCanvas: x,
          preserveWhiteSpace: W,
          onSerialize: P,
          onIframeLoad: D,
          iframeLoadTimeout: T,
          onStylesheetLoad: I,
          stylesheetLoadTimeout: R,
          keepIframeSrcFn: V
        });
        lt && D(t, lt);
      }
    }, T), j.type === he.Element && j.tagName === "link" && j.attributes.rel === "stylesheet" && Qo(t, function() {
      if (I) {
        var Ce = qe(t, {
          doc: n,
          mirror: r,
          blockClass: i,
          blockSelector: o,
          maskTextClass: s,
          maskTextSelector: a,
          skipChild: !1,
          inlineStylesheet: u,
          maskInputOptions: m,
          maskTextFn: h,
          maskInputFn: g,
          slimDOMOptions: C,
          dataURLOptions: y,
          inlineImages: A,
          recordCanvas: x,
          preserveWhiteSpace: W,
          onSerialize: P,
          onIframeLoad: D,
          iframeLoadTimeout: T,
          onStylesheetLoad: I,
          stylesheetLoadTimeout: R,
          keepIframeSrcFn: V
        });
        Ce && I(t, Ce);
      }
    }, R), j;
  }
  function ts(t, e) {
    var n = e || {}, r = n.mirror, i = r === void 0 ? new Kr() : r, o = n.blockClass, s = o === void 0 ? "rr-block" : o, a = n.blockSelector, l = a === void 0 ? null : a, c = n.maskTextClass, d = c === void 0 ? "rr-mask" : c, u = n.maskTextSelector, p = u === void 0 ? null : u, m = n.inlineStylesheet, h = m === void 0 ? !0 : m, g = n.inlineImages, C = g === void 0 ? !1 : g, f = n.recordCanvas, y = f === void 0 ? !1 : f, v = n.maskAllInputs, A = v === void 0 ? !1 : v, L = n.maskTextFn, x = n.maskInputFn, P = n.slimDOM, D = P === void 0 ? !1 : P, w = n.dataURLOptions, T = n.preserveWhiteSpace, I = n.onSerialize, b = n.onIframeLoad, R = n.iframeLoadTimeout, N = n.onStylesheetLoad, V = n.stylesheetLoadTimeout, O = n.keepIframeSrcFn, S = O === void 0 ? function() {
      return !1;
    } : O, _ = A === !0 ? {
      color: !0,
      date: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
      textarea: !0,
      select: !0,
      password: !0
    } : A === !1 ? {
      password: !0
    } : A, W = D === !0 || D === "all" ? {
      script: !0,
      comment: !0,
      headFavicon: !0,
      headWhitespace: !0,
      headMetaDescKeywords: D === "all",
      headMetaSocial: !0,
      headMetaRobots: !0,
      headMetaHttpEquiv: !0,
      headMetaAuthorship: !0,
      headMetaVerification: !0
    } : D === !1 ? {} : D;
    return qe(t, {
      doc: t,
      mirror: i,
      blockClass: s,
      blockSelector: l,
      maskTextClass: d,
      maskTextSelector: p,
      skipChild: !1,
      inlineStylesheet: h,
      maskInputOptions: _,
      maskTextFn: L,
      maskInputFn: x,
      slimDOMOptions: W,
      dataURLOptions: w,
      inlineImages: C,
      recordCanvas: y,
      preserveWhiteSpace: T,
      onSerialize: I,
      onIframeLoad: b,
      iframeLoadTimeout: R,
      onStylesheetLoad: N,
      stylesheetLoadTimeout: V,
      keepIframeSrcFn: S,
      newlyAddedElement: !1
    });
  }
  function fe(t, e, n = document) {
    const r = { capture: !0, passive: !0 };
    return n.addEventListener(t, e, r), () => n.removeEventListener(t, e, r);
  }
  const Qe = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`;
  let $n = {
    map: {},
    getId() {
      return console.error(Qe), -1;
    },
    getNode() {
      return console.error(Qe), null;
    },
    removeNodeFromMap() {
      console.error(Qe);
    },
    has() {
      return console.error(Qe), !1;
    },
    reset() {
      console.error(Qe);
    }
  };
  typeof window < "u" && window.Proxy && window.Reflect && ($n = new Proxy($n, {
    get(t, e, n) {
      return e === "map" && console.error(Qe), Reflect.get(t, e, n);
    }
  }));
  function bt(t, e, n = {}) {
    let r = null, i = 0;
    return function(...o) {
      const s = Date.now();
      !i && n.leading === !1 && (i = s);
      const a = e - (s - i), l = this;
      a <= 0 || a > e ? (r && (clearTimeout(r), r = null), i = s, t.apply(l, o)) : !r && n.trailing !== !1 && (r = setTimeout(() => {
        i = n.leading === !1 ? 0 : Date.now(), r = null, t.apply(l, o);
      }, a));
    };
  }
  function Jt(t, e, n, r, i = window) {
    const o = i.Object.getOwnPropertyDescriptor(t, e);
    return i.Object.defineProperty(t, e, r ? n : {
      set(s) {
        setTimeout(() => {
          n.set.call(this, s);
        }, 0), o && o.set && o.set.call(this, s);
      }
    }), () => Jt(t, e, o || {}, !0);
  }
  function nt(t, e, n) {
    try {
      if (!(e in t))
        return () => {
        };
      const r = t[e], i = n(r);
      return typeof i == "function" && (i.prototype = i.prototype || {}, Object.defineProperties(i, {
        __rrweb_original__: {
          enumerable: !1,
          value: r
        }
      })), t[e] = i, () => {
        t[e] = r;
      };
    } catch {
      return () => {
      };
    }
  }
  function Hr() {
    return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight;
  }
  function Qr() {
    return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
  }
  function ye(t, e, n, r) {
    if (!t)
      return !1;
    const i = t.nodeType === t.ELEMENT_NODE ? t : t.parentElement;
    if (!i)
      return !1;
    if (typeof e == "string") {
      if (i.classList.contains(e) || r && i.closest("." + e) !== null)
        return !0;
    } else if (Gt(i, e, r))
      return !0;
    return !!(n && (t.matches(n) || r && i.closest(n) !== null));
  }
  function ns(t, e) {
    return e.getId(t) !== -1;
  }
  function rn(t, e) {
    return e.getId(t) === wt;
  }
  function Jr(t, e) {
    if (mt(t))
      return !1;
    const n = e.getId(t);
    return e.has(n) ? t.parentNode && t.parentNode.nodeType === t.DOCUMENT_NODE ? !1 : t.parentNode ? Jr(t.parentNode, e) : !0 : !0;
  }
  function jr(t) {
    return !!t.changedTouches;
  }
  function rs(t = window) {
    "NodeList" in t && !t.NodeList.prototype.forEach && (t.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in t && !t.DOMTokenList.prototype.forEach && (t.DOMTokenList.prototype.forEach = Array.prototype.forEach), Node.prototype.contains || (Node.prototype.contains = (...e) => {
      let n = e[0];
      if (!(0 in e))
        throw new TypeError("1 argument is required");
      do
        if (this === n)
          return !0;
      while (n = n && n.parentNode);
      return !1;
    });
  }
  function Xr(t, e) {
    return !!(t.nodeName === "IFRAME" && e.getMeta(t));
  }
  function qr(t, e) {
    return !!(t.nodeName === "LINK" && t.nodeType === t.ELEMENT_NODE && t.getAttribute && t.getAttribute("rel") === "stylesheet" && e.getMeta(t));
  }
  function ei(t) {
    return !!(t != null && t.shadowRoot);
  }
  class is {
    constructor() {
      this.id = 1, this.styleIDMap = /* @__PURE__ */ new WeakMap(), this.idStyleMap = /* @__PURE__ */ new Map();
    }
    getId(e) {
      var n;
      return (n = this.styleIDMap.get(e)) !== null && n !== void 0 ? n : -1;
    }
    has(e) {
      return this.styleIDMap.has(e);
    }
    add(e, n) {
      if (this.has(e))
        return this.getId(e);
      let r;
      return n === void 0 ? r = this.id++ : r = n, this.styleIDMap.set(e, r), this.idStyleMap.set(r, e), r;
    }
    getStyle(e) {
      return this.idStyleMap.get(e) || null;
    }
    reset() {
      this.styleIDMap = /* @__PURE__ */ new WeakMap(), this.idStyleMap = /* @__PURE__ */ new Map(), this.id = 1;
    }
    generateId() {
      return this.id++;
    }
  }
  var Q = /* @__PURE__ */ ((t) => (t[t.DomContentLoaded = 0] = "DomContentLoaded", t[t.Load = 1] = "Load", t[t.FullSnapshot = 2] = "FullSnapshot", t[t.IncrementalSnapshot = 3] = "IncrementalSnapshot", t[t.Meta = 4] = "Meta", t[t.Custom = 5] = "Custom", t[t.Plugin = 6] = "Plugin", t))(Q || {}), $ = /* @__PURE__ */ ((t) => (t[t.Mutation = 0] = "Mutation", t[t.MouseMove = 1] = "MouseMove", t[t.MouseInteraction = 2] = "MouseInteraction", t[t.Scroll = 3] = "Scroll", t[t.ViewportResize = 4] = "ViewportResize", t[t.Input = 5] = "Input", t[t.TouchMove = 6] = "TouchMove", t[t.MediaInteraction = 7] = "MediaInteraction", t[t.StyleSheetRule = 8] = "StyleSheetRule", t[t.CanvasMutation = 9] = "CanvasMutation", t[t.Font = 10] = "Font", t[t.Log = 11] = "Log", t[t.Drag = 12] = "Drag", t[t.StyleDeclaration = 13] = "StyleDeclaration", t[t.Selection = 14] = "Selection", t[t.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", t))($ || {}), fn = /* @__PURE__ */ ((t) => (t[t.MouseUp = 0] = "MouseUp", t[t.MouseDown = 1] = "MouseDown", t[t.Click = 2] = "Click", t[t.ContextMenu = 3] = "ContextMenu", t[t.DblClick = 4] = "DblClick", t[t.Focus = 5] = "Focus", t[t.Blur = 6] = "Blur", t[t.TouchStart = 7] = "TouchStart", t[t.TouchMove_Departed = 8] = "TouchMove_Departed", t[t.TouchEnd = 9] = "TouchEnd", t[t.TouchCancel = 10] = "TouchCancel", t))(fn || {}), rt = /* @__PURE__ */ ((t) => (t[t["2D"] = 0] = "2D", t[t.WebGL = 1] = "WebGL", t[t.WebGL2 = 2] = "WebGL2", t))(rt || {});
  function Yn(t) {
    return "__ln" in t;
  }
  class os {
    constructor() {
      this.length = 0, this.head = null;
    }
    get(e) {
      if (e >= this.length)
        throw new Error("Position outside of list range");
      let n = this.head;
      for (let r = 0; r < e; r++)
        n = (n == null ? void 0 : n.next) || null;
      return n;
    }
    addNode(e) {
      const n = {
        value: e,
        previous: null,
        next: null
      };
      if (e.__ln = n, e.previousSibling && Yn(e.previousSibling)) {
        const r = e.previousSibling.__ln.next;
        n.next = r, n.previous = e.previousSibling.__ln, e.previousSibling.__ln.next = n, r && (r.previous = n);
      } else if (e.nextSibling && Yn(e.nextSibling) && e.nextSibling.__ln.previous) {
        const r = e.nextSibling.__ln.previous;
        n.previous = r, n.next = e.nextSibling.__ln, e.nextSibling.__ln.previous = n, r && (r.next = n);
      } else
        this.head && (this.head.previous = n), n.next = this.head, this.head = n;
      this.length++;
    }
    removeNode(e) {
      const n = e.__ln;
      this.head && (n.previous ? (n.previous.next = n.next, n.next && (n.next.previous = n.previous)) : (this.head = n.next, this.head && (this.head.previous = null)), e.__ln && delete e.__ln, this.length--);
    }
  }
  const zn = (t, e) => `${t}@${e}`;
  class ss {
    constructor() {
      this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = /* @__PURE__ */ new Set(), this.movedSet = /* @__PURE__ */ new Set(), this.droppedSet = /* @__PURE__ */ new Set(), this.processMutations = (e) => {
        e.forEach(this.processMutation), this.emit();
      }, this.emit = () => {
        if (this.frozen || this.locked)
          return;
        const e = [], n = new os(), r = (a) => {
          let l = a, c = wt;
          for (; c === wt; )
            l = l && l.nextSibling, c = l && this.mirror.getId(l);
          return c;
        }, i = (a) => {
          var l, c, d, u;
          let p = null;
          ((c = (l = a.getRootNode) === null || l === void 0 ? void 0 : l.call(a)) === null || c === void 0 ? void 0 : c.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && a.getRootNode().host && (p = a.getRootNode().host);
          let m = p;
          for (; ((u = (d = m == null ? void 0 : m.getRootNode) === null || d === void 0 ? void 0 : d.call(m)) === null || u === void 0 ? void 0 : u.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && m.getRootNode().host; )
            m = m.getRootNode().host;
          const h = !this.doc.contains(a) && (!m || !this.doc.contains(m));
          if (!a.parentNode || h)
            return;
          const g = mt(a.parentNode) ? this.mirror.getId(p) : this.mirror.getId(a.parentNode), C = r(a);
          if (g === -1 || C === -1)
            return n.addNode(a);
          const f = qe(a, {
            doc: this.doc,
            mirror: this.mirror,
            blockClass: this.blockClass,
            blockSelector: this.blockSelector,
            maskTextClass: this.maskTextClass,
            maskTextSelector: this.maskTextSelector,
            skipChild: !0,
            newlyAddedElement: !0,
            inlineStylesheet: this.inlineStylesheet,
            maskInputOptions: this.maskInputOptions,
            maskTextFn: this.maskTextFn,
            maskInputFn: this.maskInputFn,
            slimDOMOptions: this.slimDOMOptions,
            dataURLOptions: this.dataURLOptions,
            recordCanvas: this.recordCanvas,
            inlineImages: this.inlineImages,
            onSerialize: (y) => {
              Xr(y, this.mirror) && this.iframeManager.addIframe(y), qr(y, this.mirror) && this.stylesheetManager.trackLinkElement(y), ei(a) && this.shadowDomManager.addShadowRoot(a.shadowRoot, this.doc);
            },
            onIframeLoad: (y, v) => {
              this.iframeManager.attachIframe(y, v), this.shadowDomManager.observeAttachShadow(y);
            },
            onStylesheetLoad: (y, v) => {
              this.stylesheetManager.attachLinkElement(y, v);
            }
          });
          f && e.push({
            parentId: g,
            nextId: C,
            node: f
          });
        };
        for (; this.mapRemoves.length; )
          this.mirror.removeNodeFromMap(this.mapRemoves.shift());
        for (const a of Array.from(this.movedSet.values()))
          Hn(this.removes, a, this.mirror) && !this.movedSet.has(a.parentNode) || i(a);
        for (const a of Array.from(this.addedSet.values()))
          !Qn(this.droppedSet, a) && !Hn(this.removes, a, this.mirror) || Qn(this.movedSet, a) ? i(a) : this.droppedSet.add(a);
        let o = null;
        for (; n.length; ) {
          let a = null;
          if (o) {
            const l = this.mirror.getId(o.value.parentNode), c = r(o.value);
            l !== -1 && c !== -1 && (a = o);
          }
          if (!a)
            for (let l = n.length - 1; l >= 0; l--) {
              const c = n.get(l);
              if (c) {
                const d = this.mirror.getId(c.value.parentNode);
                if (r(c.value) === -1)
                  continue;
                if (d !== -1) {
                  a = c;
                  break;
                } else {
                  const p = c.value;
                  if (p.parentNode && p.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                    const m = p.parentNode.host;
                    if (this.mirror.getId(m) !== -1) {
                      a = c;
                      break;
                    }
                  }
                }
              }
            }
          if (!a) {
            for (; n.head; )
              n.removeNode(n.head.value);
            break;
          }
          o = a.previous, n.removeNode(a.value), i(a.value);
        }
        const s = {
          texts: this.texts.map((a) => ({
            id: this.mirror.getId(a.node),
            value: a.value
          })).filter((a) => this.mirror.has(a.id)),
          attributes: this.attributes.map((a) => ({
            id: this.mirror.getId(a.node),
            attributes: a.attributes
          })).filter((a) => this.mirror.has(a.id)),
          removes: this.removes,
          adds: e
        };
        !s.texts.length && !s.attributes.length && !s.removes.length && !s.adds.length || (this.texts = [], this.attributes = [], this.removes = [], this.addedSet = /* @__PURE__ */ new Set(), this.movedSet = /* @__PURE__ */ new Set(), this.droppedSet = /* @__PURE__ */ new Set(), this.movedMap = {}, this.mutationCb(s));
      }, this.processMutation = (e) => {
        if (!rn(e.target, this.mirror))
          switch (e.type) {
            case "characterData": {
              const n = e.target.textContent;
              !ye(e.target, this.blockClass, this.blockSelector, !1) && n !== e.oldValue && this.texts.push({
                value: zr(e.target, this.maskTextClass, this.maskTextSelector) && n ? this.maskTextFn ? this.maskTextFn(n) : n.replace(/[\S]/g, "*") : n,
                node: e.target
              });
              break;
            }
            case "attributes": {
              const n = e.target;
              let r = e.target.getAttribute(e.attributeName);
              if (e.attributeName === "value" && (r = Nn({
                maskInputOptions: this.maskInputOptions,
                tagName: e.target.tagName,
                type: e.target.getAttribute("type"),
                value: r,
                maskInputFn: this.maskInputFn
              })), ye(e.target, this.blockClass, this.blockSelector, !1) || r === e.oldValue)
                return;
              let i = this.attributes.find((o) => o.node === e.target);
              if (n.tagName === "IFRAME" && e.attributeName === "src" && !this.keepIframeSrcFn(r))
                if (!n.contentDocument)
                  e.attributeName = "rr_src";
                else
                  return;
              if (i || (i = {
                node: e.target,
                attributes: {}
              }, this.attributes.push(i)), e.attributeName === "style") {
                const o = this.doc.createElement("span");
                e.oldValue && o.setAttribute("style", e.oldValue), (i.attributes.style === void 0 || i.attributes.style === null) && (i.attributes.style = {});
                const s = i.attributes.style;
                for (const a of Array.from(n.style)) {
                  const l = n.style.getPropertyValue(a), c = n.style.getPropertyPriority(a);
                  (l !== o.style.getPropertyValue(a) || c !== o.style.getPropertyPriority(a)) && (c === "" ? s[a] = l : s[a] = [l, c]);
                }
                for (const a of Array.from(o.style))
                  n.style.getPropertyValue(a) === "" && (s[a] = !1);
              } else
                i.attributes[e.attributeName] = Yr(this.doc, n.tagName, e.attributeName, r);
              break;
            }
            case "childList": {
              if (ye(e.target, this.blockClass, this.blockSelector, !0))
                return;
              e.addedNodes.forEach((n) => this.genAdds(n, e.target)), e.removedNodes.forEach((n) => {
                const r = this.mirror.getId(n), i = mt(e.target) ? this.mirror.getId(e.target.host) : this.mirror.getId(e.target);
                ye(e.target, this.blockClass, this.blockSelector, !1) || rn(n, this.mirror) || !ns(n, this.mirror) || (this.addedSet.has(n) ? (yn(this.addedSet, n), this.droppedSet.add(n)) : this.addedSet.has(e.target) && r === -1 || Jr(e.target, this.mirror) || (this.movedSet.has(n) && this.movedMap[zn(r, i)] ? yn(this.movedSet, n) : this.removes.push({
                  parentId: i,
                  id: r,
                  isShadow: mt(e.target) && ft(e.target) ? !0 : void 0
                })), this.mapRemoves.push(n));
              });
              break;
            }
          }
      }, this.genAdds = (e, n) => {
        if (this.mirror.hasNode(e)) {
          if (rn(e, this.mirror))
            return;
          this.movedSet.add(e);
          let r = null;
          n && this.mirror.hasNode(n) && (r = this.mirror.getId(n)), r && r !== -1 && (this.movedMap[zn(this.mirror.getId(e), r)] = !0);
        } else
          this.addedSet.add(e), this.droppedSet.delete(e);
        ye(e, this.blockClass, this.blockSelector, !1) || e.childNodes.forEach((r) => this.genAdds(r));
      };
    }
    init(e) {
      [
        "mutationCb",
        "blockClass",
        "blockSelector",
        "maskTextClass",
        "maskTextSelector",
        "inlineStylesheet",
        "maskInputOptions",
        "maskTextFn",
        "maskInputFn",
        "keepIframeSrcFn",
        "recordCanvas",
        "inlineImages",
        "slimDOMOptions",
        "dataURLOptions",
        "doc",
        "mirror",
        "iframeManager",
        "stylesheetManager",
        "shadowDomManager",
        "canvasManager"
      ].forEach((n) => {
        this[n] = e[n];
      });
    }
    freeze() {
      this.frozen = !0, this.canvasManager.freeze();
    }
    unfreeze() {
      this.frozen = !1, this.canvasManager.unfreeze(), this.emit();
    }
    isFrozen() {
      return this.frozen;
    }
    lock() {
      this.locked = !0, this.canvasManager.lock();
    }
    unlock() {
      this.locked = !1, this.canvasManager.unlock(), this.emit();
    }
    reset() {
      this.shadowDomManager.reset(), this.canvasManager.reset();
    }
  }
  function yn(t, e) {
    t.delete(e), e.childNodes.forEach((n) => yn(t, n));
  }
  function Hn(t, e, n) {
    return t.length === 0 ? !1 : ti(t, e, n);
  }
  function ti(t, e, n) {
    const { parentNode: r } = e;
    if (!r)
      return !1;
    const i = n.getId(r);
    return t.some((o) => o.id === i) ? !0 : ti(t, r, n);
  }
  function Qn(t, e) {
    return t.size === 0 ? !1 : ni(t, e);
  }
  function ni(t, e) {
    const { parentNode: n } = e;
    return n ? t.has(n) ? !0 : ni(t, n) : !1;
  }
  const _e = [], ri = typeof CSSGroupingRule < "u", ii = typeof CSSMediaRule < "u", oi = typeof CSSSupportsRule < "u", si = typeof CSSConditionRule < "u";
  function At(t) {
    try {
      if ("composedPath" in t) {
        const e = t.composedPath();
        if (e.length)
          return e[0];
      } else if ("path" in t && t.path.length)
        return t.path[0];
      return t.target;
    } catch {
      return t.target;
    }
  }
  function ai(t, e) {
    var n, r;
    const i = new ss();
    _e.push(i), i.init(t);
    let o = window.MutationObserver || window.__rrMutationObserver;
    const s = (r = (n = window == null ? void 0 : window.Zone) === null || n === void 0 ? void 0 : n.__symbol__) === null || r === void 0 ? void 0 : r.call(n, "MutationObserver");
    s && window[s] && (o = window[s]);
    const a = new o(i.processMutations.bind(i));
    return a.observe(e, {
      attributes: !0,
      attributeOldValue: !0,
      characterData: !0,
      characterDataOldValue: !0,
      childList: !0,
      subtree: !0
    }), a;
  }
  function as({ mousemoveCb: t, sampling: e, doc: n, mirror: r }) {
    if (e.mousemove === !1)
      return () => {
      };
    const i = typeof e.mousemove == "number" ? e.mousemove : 50, o = typeof e.mousemoveCallback == "number" ? e.mousemoveCallback : 500;
    let s = [], a;
    const l = bt((u) => {
      const p = Date.now() - a;
      t(s.map((m) => (m.timeOffset -= p, m)), u), s = [], a = null;
    }, o), c = bt((u) => {
      const p = At(u), { clientX: m, clientY: h } = jr(u) ? u.changedTouches[0] : u;
      a || (a = Date.now()), s.push({
        x: m,
        y: h,
        id: r.getId(p),
        timeOffset: Date.now() - a
      }), l(typeof DragEvent < "u" && u instanceof DragEvent ? $.Drag : u instanceof MouseEvent ? $.MouseMove : $.TouchMove);
    }, i, {
      trailing: !1
    }), d = [
      fe("mousemove", c, n),
      fe("touchmove", c, n),
      fe("drag", c, n)
    ];
    return () => {
      d.forEach((u) => u());
    };
  }
  function ls({ mouseInteractionCb: t, doc: e, mirror: n, blockClass: r, blockSelector: i, sampling: o }) {
    if (o.mouseInteraction === !1)
      return () => {
      };
    const s = o.mouseInteraction === !0 || o.mouseInteraction === void 0 ? {} : o.mouseInteraction, a = [], l = (c) => (d) => {
      const u = At(d);
      if (ye(u, r, i, !0))
        return;
      const p = jr(d) ? d.changedTouches[0] : d;
      if (!p)
        return;
      const m = n.getId(u), { clientX: h, clientY: g } = p;
      t({
        type: fn[c],
        id: m,
        x: h,
        y: g
      });
    };
    return Object.keys(fn).filter((c) => Number.isNaN(Number(c)) && !c.endsWith("_Departed") && s[c] !== !1).forEach((c) => {
      const d = c.toLowerCase(), u = l(c);
      a.push(fe(d, u, e));
    }), () => {
      a.forEach((c) => c());
    };
  }
  function li({ scrollCb: t, doc: e, mirror: n, blockClass: r, blockSelector: i, sampling: o }) {
    const s = bt((a) => {
      const l = At(a);
      if (!l || ye(l, r, i, !0))
        return;
      const c = n.getId(l);
      if (l === e) {
        const d = e.scrollingElement || e.documentElement;
        t({
          id: c,
          x: d.scrollLeft,
          y: d.scrollTop
        });
      } else
        t({
          id: c,
          x: l.scrollLeft,
          y: l.scrollTop
        });
    }, o.scroll || 100);
    return fe("scroll", s, e);
  }
  function cs({ viewportResizeCb: t }) {
    let e = -1, n = -1;
    const r = bt(() => {
      const i = Hr(), o = Qr();
      (e !== i || n !== o) && (t({
        width: Number(o),
        height: Number(i)
      }), e = i, n = o);
    }, 200);
    return fe("resize", r, window);
  }
  function Jn(t, e) {
    const n = Object.assign({}, t);
    return e || delete n.userTriggered, n;
  }
  const ds = ["INPUT", "TEXTAREA", "SELECT"], jn = /* @__PURE__ */ new WeakMap();
  function us({ inputCb: t, doc: e, mirror: n, blockClass: r, blockSelector: i, ignoreClass: o, maskInputOptions: s, maskInputFn: a, sampling: l, userTriggeredOnInput: c }) {
    function d(f) {
      let y = At(f);
      const v = f.isTrusted;
      if (y && y.tagName === "OPTION" && (y = y.parentElement), !y || !y.tagName || ds.indexOf(y.tagName) < 0 || ye(y, r, i, !0))
        return;
      const A = y.type;
      if (y.classList.contains(o))
        return;
      let L = y.value, x = !1;
      A === "radio" || A === "checkbox" ? x = y.checked : (s[y.tagName.toLowerCase()] || s[A]) && (L = Nn({
        maskInputOptions: s,
        tagName: y.tagName,
        type: A,
        value: L,
        maskInputFn: a
      })), u(y, Jn({ text: L, isChecked: x, userTriggered: v }, c));
      const P = y.name;
      A === "radio" && P && x && e.querySelectorAll(`input[type="radio"][name="${P}"]`).forEach((D) => {
        D !== y && u(D, Jn({
          text: D.value,
          isChecked: !x,
          userTriggered: !1
        }, c));
      });
    }
    function u(f, y) {
      const v = jn.get(f);
      if (!v || v.text !== y.text || v.isChecked !== y.isChecked) {
        jn.set(f, y);
        const A = n.getId(f);
        t(Object.assign(Object.assign({}, y), { id: A }));
      }
    }
    const m = (l.input === "last" ? ["change"] : ["input", "change"]).map((f) => fe(f, d, e)), h = e.defaultView;
    if (!h)
      return () => {
        m.forEach((f) => f());
      };
    const g = h.Object.getOwnPropertyDescriptor(h.HTMLInputElement.prototype, "value"), C = [
      [h.HTMLInputElement.prototype, "value"],
      [h.HTMLInputElement.prototype, "checked"],
      [h.HTMLSelectElement.prototype, "value"],
      [h.HTMLTextAreaElement.prototype, "value"],
      [h.HTMLSelectElement.prototype, "selectedIndex"],
      [h.HTMLOptionElement.prototype, "selected"]
    ];
    return g && g.set && m.push(...C.map((f) => Jt(f[0], f[1], {
      set() {
        d({ target: this });
      }
    }, !1, h))), () => {
      m.forEach((f) => f());
    };
  }
  function Zt(t) {
    const e = [];
    function n(r, i) {
      if (ri && r.parentRule instanceof CSSGroupingRule || ii && r.parentRule instanceof CSSMediaRule || oi && r.parentRule instanceof CSSSupportsRule || si && r.parentRule instanceof CSSConditionRule) {
        const s = Array.from(r.parentRule.cssRules).indexOf(r);
        i.unshift(s);
      } else if (r.parentStyleSheet) {
        const s = Array.from(r.parentStyleSheet.cssRules).indexOf(r);
        i.unshift(s);
      }
      return i;
    }
    return n(t, e);
  }
  function We(t, e, n) {
    let r, i;
    return t ? (t.ownerNode ? r = e.getId(t.ownerNode) : i = n.getId(t), {
      styleId: i,
      id: r
    }) : {};
  }
  function hs({ styleSheetRuleCb: t, mirror: e, stylesheetManager: n }, { win: r }) {
    const i = r.CSSStyleSheet.prototype.insertRule;
    r.CSSStyleSheet.prototype.insertRule = function(d, u) {
      const { id: p, styleId: m } = We(this, e, n.styleMirror);
      return (p && p !== -1 || m && m !== -1) && t({
        id: p,
        styleId: m,
        adds: [{ rule: d, index: u }]
      }), i.apply(this, [d, u]);
    };
    const o = r.CSSStyleSheet.prototype.deleteRule;
    r.CSSStyleSheet.prototype.deleteRule = function(d) {
      const { id: u, styleId: p } = We(this, e, n.styleMirror);
      return (u && u !== -1 || p && p !== -1) && t({
        id: u,
        styleId: p,
        removes: [{ index: d }]
      }), o.apply(this, [d]);
    };
    let s;
    r.CSSStyleSheet.prototype.replace && (s = r.CSSStyleSheet.prototype.replace, r.CSSStyleSheet.prototype.replace = function(d) {
      const { id: u, styleId: p } = We(this, e, n.styleMirror);
      return (u && u !== -1 || p && p !== -1) && t({
        id: u,
        styleId: p,
        replace: d
      }), s.apply(this, [d]);
    });
    let a;
    r.CSSStyleSheet.prototype.replaceSync && (a = r.CSSStyleSheet.prototype.replaceSync, r.CSSStyleSheet.prototype.replaceSync = function(d) {
      const { id: u, styleId: p } = We(this, e, n.styleMirror);
      return (u && u !== -1 || p && p !== -1) && t({
        id: u,
        styleId: p,
        replaceSync: d
      }), a.apply(this, [d]);
    });
    const l = {};
    ri ? l.CSSGroupingRule = r.CSSGroupingRule : (ii && (l.CSSMediaRule = r.CSSMediaRule), si && (l.CSSConditionRule = r.CSSConditionRule), oi && (l.CSSSupportsRule = r.CSSSupportsRule));
    const c = {};
    return Object.entries(l).forEach(([d, u]) => {
      c[d] = {
        insertRule: u.prototype.insertRule,
        deleteRule: u.prototype.deleteRule
      }, u.prototype.insertRule = function(p, m) {
        const { id: h, styleId: g } = We(this.parentStyleSheet, e, n.styleMirror);
        return (h && h !== -1 || g && g !== -1) && t({
          id: h,
          styleId: g,
          adds: [
            {
              rule: p,
              index: [
                ...Zt(this),
                m || 0
              ]
            }
          ]
        }), c[d].insertRule.apply(this, [p, m]);
      }, u.prototype.deleteRule = function(p) {
        const { id: m, styleId: h } = We(this.parentStyleSheet, e, n.styleMirror);
        return (m && m !== -1 || h && h !== -1) && t({
          id: m,
          styleId: h,
          removes: [
            { index: [...Zt(this), p] }
          ]
        }), c[d].deleteRule.apply(this, [p]);
      };
    }), () => {
      r.CSSStyleSheet.prototype.insertRule = i, r.CSSStyleSheet.prototype.deleteRule = o, s && (r.CSSStyleSheet.prototype.replace = s), a && (r.CSSStyleSheet.prototype.replaceSync = a), Object.entries(l).forEach(([d, u]) => {
        u.prototype.insertRule = c[d].insertRule, u.prototype.deleteRule = c[d].deleteRule;
      });
    };
  }
  function ci({ mirror: t, stylesheetManager: e }, n) {
    var r, i, o;
    let s = null;
    n.nodeName === "#document" ? s = t.getId(n) : s = t.getId(n.host);
    const a = n.nodeName === "#document" ? (r = n.defaultView) === null || r === void 0 ? void 0 : r.Document : (o = (i = n.ownerDocument) === null || i === void 0 ? void 0 : i.defaultView) === null || o === void 0 ? void 0 : o.ShadowRoot, l = Object.getOwnPropertyDescriptor(a == null ? void 0 : a.prototype, "adoptedStyleSheets");
    return s === null || s === -1 || !a || !l ? () => {
    } : (Object.defineProperty(n, "adoptedStyleSheets", {
      configurable: l.configurable,
      enumerable: l.enumerable,
      get() {
        var c;
        return (c = l.get) === null || c === void 0 ? void 0 : c.call(this);
      },
      set(c) {
        var d;
        const u = (d = l.set) === null || d === void 0 ? void 0 : d.call(this, c);
        if (s !== null && s !== -1)
          try {
            e.adoptStyleSheets(c, s);
          } catch {
          }
        return u;
      }
    }), () => {
      Object.defineProperty(n, "adoptedStyleSheets", {
        configurable: l.configurable,
        enumerable: l.enumerable,
        get: l.get,
        set: l.set
      });
    });
  }
  function ps({ styleDeclarationCb: t, mirror: e, ignoreCSSAttributes: n, stylesheetManager: r }, { win: i }) {
    const o = i.CSSStyleDeclaration.prototype.setProperty;
    i.CSSStyleDeclaration.prototype.setProperty = function(a, l, c) {
      var d;
      if (n.has(a))
        return o.apply(this, [a, l, c]);
      const { id: u, styleId: p } = We((d = this.parentRule) === null || d === void 0 ? void 0 : d.parentStyleSheet, e, r.styleMirror);
      return (u && u !== -1 || p && p !== -1) && t({
        id: u,
        styleId: p,
        set: {
          property: a,
          value: l,
          priority: c
        },
        index: Zt(this.parentRule)
      }), o.apply(this, [a, l, c]);
    };
    const s = i.CSSStyleDeclaration.prototype.removeProperty;
    return i.CSSStyleDeclaration.prototype.removeProperty = function(a) {
      var l;
      if (n.has(a))
        return s.apply(this, [a]);
      const { id: c, styleId: d } = We((l = this.parentRule) === null || l === void 0 ? void 0 : l.parentStyleSheet, e, r.styleMirror);
      return (c && c !== -1 || d && d !== -1) && t({
        id: c,
        styleId: d,
        remove: {
          property: a
        },
        index: Zt(this.parentRule)
      }), s.apply(this, [a]);
    }, () => {
      i.CSSStyleDeclaration.prototype.setProperty = o, i.CSSStyleDeclaration.prototype.removeProperty = s;
    };
  }
  function gs({ mediaInteractionCb: t, blockClass: e, blockSelector: n, mirror: r, sampling: i }) {
    const o = (a) => bt((l) => {
      const c = At(l);
      if (!c || ye(c, e, n, !0))
        return;
      const { currentTime: d, volume: u, muted: p, playbackRate: m } = c;
      t({
        type: a,
        id: r.getId(c),
        currentTime: d,
        volume: u,
        muted: p,
        playbackRate: m
      });
    }, i.media || 500), s = [
      fe("play", o(0)),
      fe("pause", o(1)),
      fe("seeked", o(2)),
      fe("volumechange", o(3)),
      fe("ratechange", o(4))
    ];
    return () => {
      s.forEach((a) => a());
    };
  }
  function ms({ fontCb: t, doc: e }) {
    const n = e.defaultView;
    if (!n)
      return () => {
      };
    const r = [], i = /* @__PURE__ */ new WeakMap(), o = n.FontFace;
    n.FontFace = function(l, c, d) {
      const u = new o(l, c, d);
      return i.set(u, {
        family: l,
        buffer: typeof c != "string",
        descriptors: d,
        fontSource: typeof c == "string" ? c : JSON.stringify(Array.from(new Uint8Array(c)))
      }), u;
    };
    const s = nt(e.fonts, "add", function(a) {
      return function(l) {
        return setTimeout(() => {
          const c = i.get(l);
          c && (t(c), i.delete(l));
        }, 0), a.apply(this, [l]);
      };
    });
    return r.push(() => {
      n.FontFace = o;
    }), r.push(s), () => {
      r.forEach((a) => a());
    };
  }
  function fs(t) {
    const { doc: e, mirror: n, blockClass: r, blockSelector: i, selectionCb: o } = t;
    let s = !0;
    const a = () => {
      const l = e.getSelection();
      if (!l || s && (l != null && l.isCollapsed))
        return;
      s = l.isCollapsed || !1;
      const c = [], d = l.rangeCount || 0;
      for (let u = 0; u < d; u++) {
        const p = l.getRangeAt(u), { startContainer: m, startOffset: h, endContainer: g, endOffset: C } = p;
        ye(m, r, i, !0) || ye(g, r, i, !0) || c.push({
          start: n.getId(m),
          startOffset: h,
          end: n.getId(g),
          endOffset: C
        });
      }
      o({ ranges: c });
    };
    return a(), fe("selectionchange", a);
  }
  function ys(t, e) {
    const { mutationCb: n, mousemoveCb: r, mouseInteractionCb: i, scrollCb: o, viewportResizeCb: s, inputCb: a, mediaInteractionCb: l, styleSheetRuleCb: c, styleDeclarationCb: d, canvasMutationCb: u, fontCb: p, selectionCb: m } = t;
    t.mutationCb = (...h) => {
      e.mutation && e.mutation(...h), n(...h);
    }, t.mousemoveCb = (...h) => {
      e.mousemove && e.mousemove(...h), r(...h);
    }, t.mouseInteractionCb = (...h) => {
      e.mouseInteraction && e.mouseInteraction(...h), i(...h);
    }, t.scrollCb = (...h) => {
      e.scroll && e.scroll(...h), o(...h);
    }, t.viewportResizeCb = (...h) => {
      e.viewportResize && e.viewportResize(...h), s(...h);
    }, t.inputCb = (...h) => {
      e.input && e.input(...h), a(...h);
    }, t.mediaInteractionCb = (...h) => {
      e.mediaInteaction && e.mediaInteaction(...h), l(...h);
    }, t.styleSheetRuleCb = (...h) => {
      e.styleSheetRule && e.styleSheetRule(...h), c(...h);
    }, t.styleDeclarationCb = (...h) => {
      e.styleDeclaration && e.styleDeclaration(...h), d(...h);
    }, t.canvasMutationCb = (...h) => {
      e.canvasMutation && e.canvasMutation(...h), u(...h);
    }, t.fontCb = (...h) => {
      e.font && e.font(...h), p(...h);
    }, t.selectionCb = (...h) => {
      e.selection && e.selection(...h), m(...h);
    };
  }
  function Cs(t, e = {}) {
    const n = t.doc.defaultView;
    if (!n)
      return () => {
      };
    ys(t, e);
    const r = ai(t, t.doc), i = as(t), o = ls(t), s = li(t), a = cs(t), l = us(t), c = gs(t), d = hs(t, { win: n }), u = ci(t, t.doc), p = ps(t, {
      win: n
    }), m = t.collectFonts ? ms(t) : () => {
    }, h = fs(t), g = [];
    for (const C of t.plugins)
      g.push(C.observer(C.callback, n, C.options));
    return () => {
      _e.forEach((C) => C.reset()), r.disconnect(), i(), o(), s(), a(), l(), c(), d(), u(), p(), m(), h(), g.forEach((C) => C());
    };
  }
  class Xn {
    constructor(e) {
      this.generateIdFn = e, this.iframeIdToRemoteIdMap = /* @__PURE__ */ new WeakMap(), this.iframeRemoteIdToIdMap = /* @__PURE__ */ new WeakMap();
    }
    getId(e, n, r, i) {
      const o = r || this.getIdToRemoteIdMap(e), s = i || this.getRemoteIdToIdMap(e);
      let a = o.get(n);
      return a || (a = this.generateIdFn(), o.set(n, a), s.set(a, n)), a;
    }
    getIds(e, n) {
      const r = this.getIdToRemoteIdMap(e), i = this.getRemoteIdToIdMap(e);
      return n.map((o) => this.getId(e, o, r, i));
    }
    getRemoteId(e, n, r) {
      const i = r || this.getRemoteIdToIdMap(e);
      if (typeof n != "number")
        return n;
      const o = i.get(n);
      return o || -1;
    }
    getRemoteIds(e, n) {
      const r = this.getRemoteIdToIdMap(e);
      return n.map((i) => this.getRemoteId(e, i, r));
    }
    reset(e) {
      if (!e) {
        this.iframeIdToRemoteIdMap = /* @__PURE__ */ new WeakMap(), this.iframeRemoteIdToIdMap = /* @__PURE__ */ new WeakMap();
        return;
      }
      this.iframeIdToRemoteIdMap.delete(e), this.iframeRemoteIdToIdMap.delete(e);
    }
    getIdToRemoteIdMap(e) {
      let n = this.iframeIdToRemoteIdMap.get(e);
      return n || (n = /* @__PURE__ */ new Map(), this.iframeIdToRemoteIdMap.set(e, n)), n;
    }
    getRemoteIdToIdMap(e) {
      let n = this.iframeRemoteIdToIdMap.get(e);
      return n || (n = /* @__PURE__ */ new Map(), this.iframeRemoteIdToIdMap.set(e, n)), n;
    }
  }
  class Is {
    constructor(e) {
      this.iframes = /* @__PURE__ */ new WeakMap(), this.crossOriginIframeMap = /* @__PURE__ */ new WeakMap(), this.crossOriginIframeMirror = new Xn($r), this.mutationCb = e.mutationCb, this.wrappedEmit = e.wrappedEmit, this.stylesheetManager = e.stylesheetManager, this.recordCrossOriginIframes = e.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new Xn(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = e.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this));
    }
    addIframe(e) {
      this.iframes.set(e, !0), e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e);
    }
    addLoadListener(e) {
      this.loadListener = e;
    }
    attachIframe(e, n) {
      var r;
      this.mutationCb({
        adds: [
          {
            parentId: this.mirror.getId(e),
            nextId: null,
            node: n
          }
        ],
        removes: [],
        texts: [],
        attributes: [],
        isAttachIframe: !0
      }), (r = this.loadListener) === null || r === void 0 || r.call(this, e), e.contentDocument && e.contentDocument.adoptedStyleSheets && e.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(e.contentDocument.adoptedStyleSheets, this.mirror.getId(e.contentDocument));
    }
    handleMessage(e) {
      if (e.data.type === "rrweb") {
        if (!e.source)
          return;
        const r = this.crossOriginIframeMap.get(e.source);
        if (!r)
          return;
        const i = this.transformCrossOriginEvent(r, e.data.event);
        i && this.wrappedEmit(i, e.data.isCheckout);
      }
    }
    transformCrossOriginEvent(e, n) {
      var r;
      switch (n.type) {
        case Q.FullSnapshot:
          return this.crossOriginIframeMirror.reset(e), this.crossOriginIframeStyleMirror.reset(e), this.replaceIdOnNode(n.data.node, e), {
            timestamp: n.timestamp,
            type: Q.IncrementalSnapshot,
            data: {
              source: $.Mutation,
              adds: [
                {
                  parentId: this.mirror.getId(e),
                  nextId: null,
                  node: n.data.node
                }
              ],
              removes: [],
              texts: [],
              attributes: [],
              isAttachIframe: !0
            }
          };
        case Q.Meta:
        case Q.Load:
        case Q.DomContentLoaded:
          return !1;
        case Q.Plugin:
          return n;
        case Q.Custom:
          return this.replaceIds(n.data.payload, e, ["id", "parentId", "previousId", "nextId"]), n;
        case Q.IncrementalSnapshot:
          switch (n.data.source) {
            case $.Mutation:
              return n.data.adds.forEach((i) => {
                this.replaceIds(i, e, [
                  "parentId",
                  "nextId",
                  "previousId"
                ]), this.replaceIdOnNode(i.node, e);
              }), n.data.removes.forEach((i) => {
                this.replaceIds(i, e, ["parentId", "id"]);
              }), n.data.attributes.forEach((i) => {
                this.replaceIds(i, e, ["id"]);
              }), n.data.texts.forEach((i) => {
                this.replaceIds(i, e, ["id"]);
              }), n;
            case $.Drag:
            case $.TouchMove:
            case $.MouseMove:
              return n.data.positions.forEach((i) => {
                this.replaceIds(i, e, ["id"]);
              }), n;
            case $.ViewportResize:
              return !1;
            case $.MediaInteraction:
            case $.MouseInteraction:
            case $.Scroll:
            case $.CanvasMutation:
            case $.Input:
              return this.replaceIds(n.data, e, ["id"]), n;
            case $.StyleSheetRule:
            case $.StyleDeclaration:
              return this.replaceIds(n.data, e, ["id"]), this.replaceStyleIds(n.data, e, ["styleId"]), n;
            case $.Font:
              return n;
            case $.Selection:
              return n.data.ranges.forEach((i) => {
                this.replaceIds(i, e, ["start", "end"]);
              }), n;
            case $.AdoptedStyleSheet:
              return this.replaceIds(n.data, e, ["id"]), this.replaceStyleIds(n.data, e, ["styleIds"]), (r = n.data.styles) === null || r === void 0 || r.forEach((i) => {
                this.replaceStyleIds(i, e, ["styleId"]);
              }), n;
          }
      }
    }
    replace(e, n, r, i) {
      for (const o of i)
        !Array.isArray(n[o]) && typeof n[o] != "number" || (Array.isArray(n[o]) ? n[o] = e.getIds(r, n[o]) : n[o] = e.getId(r, n[o]));
      return n;
    }
    replaceIds(e, n, r) {
      return this.replace(this.crossOriginIframeMirror, e, n, r);
    }
    replaceStyleIds(e, n, r) {
      return this.replace(this.crossOriginIframeStyleMirror, e, n, r);
    }
    replaceIdOnNode(e, n) {
      this.replaceIds(e, n, ["id"]), "childNodes" in e && e.childNodes.forEach((r) => {
        this.replaceIdOnNode(r, n);
      });
    }
  }
  class vs {
    constructor(e) {
      this.shadowDoms = /* @__PURE__ */ new WeakSet(), this.restorePatches = [], this.mutationCb = e.mutationCb, this.scrollCb = e.scrollCb, this.bypassOptions = e.bypassOptions, this.mirror = e.mirror;
      const n = this;
      this.restorePatches.push(nt(Element.prototype, "attachShadow", function(r) {
        return function(i) {
          const o = r.call(this, i);
          return this.shadowRoot && n.addShadowRoot(this.shadowRoot, this.ownerDocument), o;
        };
      }));
    }
    addShadowRoot(e, n) {
      ft(e) && (this.shadowDoms.has(e) || (this.shadowDoms.add(e), ai(Object.assign(Object.assign({}, this.bypassOptions), { doc: n, mutationCb: this.mutationCb, mirror: this.mirror, shadowDomManager: this }), e), li(Object.assign(Object.assign({}, this.bypassOptions), { scrollCb: this.scrollCb, doc: e, mirror: this.mirror })), setTimeout(() => {
        e.adoptedStyleSheets && e.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets, this.mirror.getId(e.host)), ci({
          mirror: this.mirror,
          stylesheetManager: this.bypassOptions.stylesheetManager
        }, e);
      }, 0)));
    }
    observeAttachShadow(e) {
      if (e.contentWindow) {
        const n = this;
        this.restorePatches.push(nt(e.contentWindow.HTMLElement.prototype, "attachShadow", function(r) {
          return function(i) {
            const o = r.call(this, i);
            return this.shadowRoot && n.addShadowRoot(this.shadowRoot, e.contentDocument), o;
          };
        }));
      }
    }
    reset() {
      this.restorePatches.forEach((e) => e()), this.shadowDoms = /* @__PURE__ */ new WeakSet();
    }
  }
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  function ws(t, e) {
    var n = {};
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
        e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
    return n;
  }
  function bs(t, e, n, r) {
    function i(o) {
      return o instanceof n ? o : new n(function(s) {
        s(o);
      });
    }
    return new (n || (n = Promise))(function(o, s) {
      function a(d) {
        try {
          c(r.next(d));
        } catch (u) {
          s(u);
        }
      }
      function l(d) {
        try {
          c(r.throw(d));
        } catch (u) {
          s(u);
        }
      }
      function c(d) {
        d.done ? o(d.value) : i(d.value).then(a, l);
      }
      c((r = r.apply(t, e || [])).next());
    });
  }
  var et = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ss = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Mt = 0; Mt < et.length; Mt++)
    Ss[et.charCodeAt(Mt)] = Mt;
  var As = function(t) {
    var e = new Uint8Array(t), n, r = e.length, i = "";
    for (n = 0; n < r; n += 3)
      i += et[e[n] >> 2], i += et[(e[n] & 3) << 4 | e[n + 1] >> 4], i += et[(e[n + 1] & 15) << 2 | e[n + 2] >> 6], i += et[e[n + 2] & 63];
    return r % 3 === 2 ? i = i.substring(0, i.length - 1) + "=" : r % 3 === 1 && (i = i.substring(0, i.length - 2) + "=="), i;
  };
  const qn = /* @__PURE__ */ new Map();
  function Ts(t, e) {
    let n = qn.get(t);
    return n || (n = /* @__PURE__ */ new Map(), qn.set(t, n)), n.has(e) || n.set(e, []), n.get(e);
  }
  const di = (t, e, n) => {
    if (!t || !(hi(t, e) || typeof t == "object"))
      return;
    const r = t.constructor.name, i = Ts(n, r);
    let o = i.indexOf(t);
    return o === -1 && (o = i.length, i.push(t)), o;
  };
  function xt(t, e, n) {
    if (t instanceof Array)
      return t.map((r) => xt(r, e, n));
    if (t === null)
      return t;
    if (t instanceof Float32Array || t instanceof Float64Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Uint8Array || t instanceof Uint16Array || t instanceof Int16Array || t instanceof Int8Array || t instanceof Uint8ClampedArray)
      return {
        rr_type: t.constructor.name,
        args: [Object.values(t)]
      };
    if (t instanceof ArrayBuffer) {
      const r = t.constructor.name, i = As(t);
      return {
        rr_type: r,
        base64: i
      };
    } else {
      if (t instanceof DataView)
        return {
          rr_type: t.constructor.name,
          args: [
            xt(t.buffer, e, n),
            t.byteOffset,
            t.byteLength
          ]
        };
      if (t instanceof HTMLImageElement) {
        const r = t.constructor.name, { src: i } = t;
        return {
          rr_type: r,
          src: i
        };
      } else if (t instanceof HTMLCanvasElement) {
        const r = "HTMLImageElement", i = t.toDataURL();
        return {
          rr_type: r,
          src: i
        };
      } else {
        if (t instanceof ImageData)
          return {
            rr_type: t.constructor.name,
            args: [xt(t.data, e, n), t.width, t.height]
          };
        if (hi(t, e) || typeof t == "object") {
          const r = t.constructor.name, i = di(t, e, n);
          return {
            rr_type: r,
            index: i
          };
        }
      }
    }
    return t;
  }
  const ui = (t, e, n) => [...t].map((r) => xt(r, e, n)), hi = (t, e) => !![
    "WebGLActiveInfo",
    "WebGLBuffer",
    "WebGLFramebuffer",
    "WebGLProgram",
    "WebGLRenderbuffer",
    "WebGLShader",
    "WebGLShaderPrecisionFormat",
    "WebGLTexture",
    "WebGLUniformLocation",
    "WebGLVertexArrayObject",
    "WebGLVertexArrayObjectOES"
  ].filter((i) => typeof e[i] == "function").find((i) => t instanceof e[i]);
  function Es(t, e, n, r) {
    const i = [], o = Object.getOwnPropertyNames(e.CanvasRenderingContext2D.prototype);
    for (const s of o)
      try {
        if (typeof e.CanvasRenderingContext2D.prototype[s] != "function")
          continue;
        const a = nt(e.CanvasRenderingContext2D.prototype, s, function(l) {
          return function(...c) {
            return ye(this.canvas, n, r, !0) || setTimeout(() => {
              const d = ui([...c], e, this);
              t(this.canvas, {
                type: rt["2D"],
                property: s,
                args: d
              });
            }, 0), l.apply(this, c);
          };
        });
        i.push(a);
      } catch {
        const l = Jt(e.CanvasRenderingContext2D.prototype, s, {
          set(c) {
            t(this.canvas, {
              type: rt["2D"],
              property: s,
              args: [c],
              setter: !0
            });
          }
        });
        i.push(l);
      }
    return () => {
      i.forEach((s) => s());
    };
  }
  function er(t, e, n) {
    const r = [];
    try {
      const i = nt(t.HTMLCanvasElement.prototype, "getContext", function(o) {
        return function(s, ...a) {
          return ye(this, e, n, !0) || "__context" in this || (this.__context = s), o.apply(this, [s, ...a]);
        };
      });
      r.push(i);
    } catch {
      console.error("failed to patch HTMLCanvasElement.prototype.getContext");
    }
    return () => {
      r.forEach((i) => i());
    };
  }
  function tr(t, e, n, r, i, o, s) {
    const a = [], l = Object.getOwnPropertyNames(t);
    for (const c of l)
      if (![
        "isContextLost",
        "canvas",
        "drawingBufferWidth",
        "drawingBufferHeight"
      ].includes(c))
        try {
          if (typeof t[c] != "function")
            continue;
          const d = nt(t, c, function(u) {
            return function(...p) {
              const m = u.apply(this, p);
              if (di(m, s, this), !ye(this.canvas, r, i, !0)) {
                const h = ui([...p], s, this), g = {
                  type: e,
                  property: c,
                  args: h
                };
                n(this.canvas, g);
              }
              return m;
            };
          });
          a.push(d);
        } catch {
          const u = Jt(t, c, {
            set(p) {
              n(this.canvas, {
                type: e,
                property: c,
                args: [p],
                setter: !0
              });
            }
          });
          a.push(u);
        }
    return a;
  }
  function Ns(t, e, n, r, i) {
    const o = [];
    return o.push(...tr(e.WebGLRenderingContext.prototype, rt.WebGL, t, n, r, i, e)), typeof e.WebGL2RenderingContext < "u" && o.push(...tr(e.WebGL2RenderingContext.prototype, rt.WebGL2, t, n, r, i, e)), () => {
      o.forEach((s) => s());
    };
  }
  var pi = null;
  try {
    var ks = typeof Ke < "u" && typeof Ke.require == "function" && Ke.require("worker_threads") || typeof __non_webpack_require__ == "function" && __non_webpack_require__("worker_threads") || typeof require == "function" && require("worker_threads");
    pi = ks.Worker;
  } catch {
  }
  function Rs(t, e) {
    return Buffer.from(t, "base64").toString(e ? "utf16" : "utf8");
  }
  function Ms(t, e, n) {
    var r = e === void 0 ? null : e, i = n === void 0 ? !1 : n, o = Rs(t, i), s = o.indexOf(`
`, 10) + 1, a = o.substring(s) + (r ? "//# sourceMappingURL=" + r : "");
    return function(c) {
      return new pi(a, Object.assign({}, c, { eval: !0 }));
    };
  }
  function Ds(t, e) {
    var n = atob(t);
    if (e) {
      for (var r = new Uint8Array(n.length), i = 0, o = n.length; i < o; ++i)
        r[i] = n.charCodeAt(i);
      return String.fromCharCode.apply(null, new Uint16Array(r.buffer));
    }
    return n;
  }
  function Fs(t, e, n) {
    var r = e === void 0 ? null : e, i = n === void 0 ? !1 : n, o = Ds(t, i), s = o.indexOf(`
`, 10) + 1, a = o.substring(s) + (r ? "//# sourceMappingURL=" + r : ""), l = new Blob([a], { type: "application/javascript" });
    return URL.createObjectURL(l);
  }
  function Ls(t, e, n) {
    var r;
    return function(o) {
      return r = r || Fs(t, e, n), new Worker(r, o);
    };
  }
  var Ws = Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]";
  function Os() {
    return Ws;
  }
  function xs(t, e, n) {
    return Os() ? Ms(t, e, n) : Ls(t, e, n);
  }
  var Ps = xs("Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICAgJ3VzZSBzdHJpY3QnOwoKICAgIC8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLg0KDQogICAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55DQogICAgcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLg0KDQogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEgNCiAgICBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkNCiAgICBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsDQogICAgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NDQogICAgTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1INCiAgICBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SDQogICAgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS4NCiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqLw0KDQogICAgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikgew0KICAgICAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH0NCiAgICAgICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7DQogICAgICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvclsidGhyb3ciXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfQ0KICAgICAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpOw0KICAgICAgICB9KTsNCiAgICB9CgogICAgLyoKICAgICAqIGJhc2U2NC1hcnJheWJ1ZmZlciAxLjAuMSA8aHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3ZoL2Jhc2U2NC1hcnJheWJ1ZmZlcj4KICAgICAqIENvcHlyaWdodCAoYykgMjAyMSBOaWtsYXMgdm9uIEhlcnR6ZW4gPGh0dHBzOi8vaGVydHplbi5jb20+CiAgICAgKiBSZWxlYXNlZCB1bmRlciBNSVQgTGljZW5zZQogICAgICovCiAgICB2YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7CiAgICAvLyBVc2UgYSBsb29rdXAgdGFibGUgdG8gZmluZCB0aGUgaW5kZXguCiAgICB2YXIgbG9va3VwID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gW10gOiBuZXcgVWludDhBcnJheSgyNTYpOwogICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFycy5sZW5ndGg7IGkrKykgewogICAgICAgIGxvb2t1cFtjaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7CiAgICB9CiAgICB2YXIgZW5jb2RlID0gZnVuY3Rpb24gKGFycmF5YnVmZmVyKSB7CiAgICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLCBpLCBsZW4gPSBieXRlcy5sZW5ndGgsIGJhc2U2NCA9ICcnOwogICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gMykgewogICAgICAgICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaV0gPj4gMl07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2ldICYgMykgPDwgNCkgfCAoYnl0ZXNbaSArIDFdID4+IDQpXTsKICAgICAgICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIpIHwgKGJ5dGVzW2kgKyAyXSA+PiA2KV07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpICsgMl0gJiA2M107CiAgICAgICAgfQogICAgICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgJz0nOwogICAgICAgIH0KICAgICAgICBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgJz09JzsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGJhc2U2NDsKICAgIH07CgogICAgY29uc3QgbGFzdEJsb2JNYXAgPSBuZXcgTWFwKCk7DQogICAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gbmV3IE1hcCgpOw0KICAgIGZ1bmN0aW9uIGdldFRyYW5zcGFyZW50QmxvYkZvcih3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucykgew0KICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgew0KICAgICAgICAgICAgY29uc3QgaWQgPSBgJHt3aWR0aH0tJHtoZWlnaHR9YDsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgaWYgKHRyYW5zcGFyZW50QmxvYk1hcC5oYXMoaWQpKQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNwYXJlbnRCbG9iTWFwLmdldChpZCk7DQogICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsNCiAgICAgICAgICAgICAgICBvZmZzY3JlZW4uZ2V0Q29udGV4dCgnMmQnKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0geWllbGQgYmxvYi5hcnJheUJ1ZmZlcigpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7DQogICAgICAgICAgICAgICAgdHJhbnNwYXJlbnRCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZTY0Ow0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgZWxzZSB7DQogICAgICAgICAgICAgICAgcmV0dXJuICcnOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9KTsNCiAgICB9DQogICAgY29uc3Qgd29ya2VyID0gc2VsZjsNCiAgICB3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHsNCiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgY29uc3QgeyBpZCwgYml0bWFwLCB3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucyB9ID0gZS5kYXRhOw0KICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zKTsNCiAgICAgICAgICAgICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IG9mZnNjcmVlbi5nZXRDb250ZXh0KCcyZCcpOw0KICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoYml0bWFwLCAwLCAwKTsNCiAgICAgICAgICAgICAgICBiaXRtYXAuY2xvc2UoKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBibG9iLnR5cGU7DQogICAgICAgICAgICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSB5aWVsZCBibG9iLmFycmF5QnVmZmVyKCk7DQogICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0ID0gZW5jb2RlKGFycmF5QnVmZmVyKTsNCiAgICAgICAgICAgICAgICBpZiAoIWxhc3RCbG9iTWFwLmhhcyhpZCkgJiYgKHlpZWxkIHRyYW5zcGFyZW50QmFzZTY0KSA9PT0gYmFzZTY0KSB7DQogICAgICAgICAgICAgICAgICAgIGxhc3RCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkIH0pOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7DQogICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHsNCiAgICAgICAgICAgICAgICAgICAgaWQsDQogICAgICAgICAgICAgICAgICAgIHR5cGUsDQogICAgICAgICAgICAgICAgICAgIGJhc2U2NCwNCiAgICAgICAgICAgICAgICAgICAgd2lkdGgsDQogICAgICAgICAgICAgICAgICAgIGhlaWdodCwNCiAgICAgICAgICAgICAgICB9KTsNCiAgICAgICAgICAgICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7DQogICAgICAgICAgICB9DQogICAgICAgICAgICBlbHNlIHsNCiAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgfSk7DQogICAgfTsKCn0pKCk7Cgo=", null, !1);
  class Bs {
    constructor(e) {
      this.pendingCanvasMutations = /* @__PURE__ */ new Map(), this.rafStamps = { latestId: 0, invokeId: null }, this.frozen = !1, this.locked = !1, this.processMutation = (l, c) => {
        (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(l) || this.pendingCanvasMutations.set(l, []), this.pendingCanvasMutations.get(l).push(c);
      };
      const { sampling: n = "all", win: r, blockClass: i, blockSelector: o, recordCanvas: s, dataURLOptions: a } = e;
      this.mutationCb = e.mutationCb, this.mirror = e.mirror, s && n === "all" && this.initCanvasMutationObserver(r, i, o), s && typeof n == "number" && this.initCanvasFPSObserver(n, r, i, o, {
        dataURLOptions: a
      });
    }
    reset() {
      this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers();
    }
    freeze() {
      this.frozen = !0;
    }
    unfreeze() {
      this.frozen = !1;
    }
    lock() {
      this.locked = !0;
    }
    unlock() {
      this.locked = !1;
    }
    initCanvasFPSObserver(e, n, r, i, o) {
      const s = er(n, r, i), a = /* @__PURE__ */ new Map(), l = new Ps();
      l.onmessage = (h) => {
        const { id: g } = h.data;
        if (a.set(g, !1), !("base64" in h.data))
          return;
        const { base64: C, type: f, width: y, height: v } = h.data;
        this.mutationCb({
          id: g,
          type: rt["2D"],
          commands: [
            {
              property: "clearRect",
              args: [0, 0, y, v]
            },
            {
              property: "drawImage",
              args: [
                {
                  rr_type: "ImageBitmap",
                  args: [
                    {
                      rr_type: "Blob",
                      data: [{ rr_type: "ArrayBuffer", base64: C }],
                      type: f
                    }
                  ]
                },
                0,
                0
              ]
            }
          ]
        });
      };
      const c = 1e3 / e;
      let d = 0, u;
      const p = () => {
        const h = [];
        return n.document.querySelectorAll("canvas").forEach((g) => {
          ye(g, r, i, !0) || h.push(g);
        }), h;
      }, m = (h) => {
        if (d && h - d < c) {
          u = requestAnimationFrame(m);
          return;
        }
        d = h, p().forEach((g) => bs(this, void 0, void 0, function* () {
          var C;
          const f = this.mirror.getId(g);
          if (a.get(f))
            return;
          if (a.set(f, !0), ["webgl", "webgl2"].includes(g.__context)) {
            const v = g.getContext(g.__context);
            ((C = v == null ? void 0 : v.getContextAttributes()) === null || C === void 0 ? void 0 : C.preserveDrawingBuffer) === !1 && (v == null || v.clear(v.COLOR_BUFFER_BIT));
          }
          const y = yield createImageBitmap(g);
          l.postMessage({
            id: f,
            bitmap: y,
            width: g.width,
            height: g.height,
            dataURLOptions: o.dataURLOptions
          }, [y]);
        })), u = requestAnimationFrame(m);
      };
      u = requestAnimationFrame(m), this.resetObservers = () => {
        s(), cancelAnimationFrame(u);
      };
    }
    initCanvasMutationObserver(e, n, r) {
      this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
      const i = er(e, n, r), o = Es(this.processMutation.bind(this), e, n, r), s = Ns(this.processMutation.bind(this), e, n, r, this.mirror);
      this.resetObservers = () => {
        i(), o(), s();
      };
    }
    startPendingCanvasMutationFlusher() {
      requestAnimationFrame(() => this.flushPendingCanvasMutations());
    }
    startRAFTimestamping() {
      const e = (n) => {
        this.rafStamps.latestId = n, requestAnimationFrame(e);
      };
      requestAnimationFrame(e);
    }
    flushPendingCanvasMutations() {
      this.pendingCanvasMutations.forEach((e, n) => {
        const r = this.mirror.getId(n);
        this.flushPendingCanvasMutationFor(n, r);
      }), requestAnimationFrame(() => this.flushPendingCanvasMutations());
    }
    flushPendingCanvasMutationFor(e, n) {
      if (this.frozen || this.locked)
        return;
      const r = this.pendingCanvasMutations.get(e);
      if (!r || n === -1)
        return;
      const i = r.map((s) => ws(s, ["type"])), { type: o } = r[0];
      this.mutationCb({ id: n, type: o, commands: i }), this.pendingCanvasMutations.delete(e);
    }
  }
  class Vs {
    constructor(e) {
      this.trackedLinkElements = /* @__PURE__ */ new WeakSet(), this.styleMirror = new is(), this.mutationCb = e.mutationCb, this.adoptedStyleSheetCb = e.adoptedStyleSheetCb;
    }
    attachLinkElement(e, n) {
      "_cssText" in n.attributes && this.mutationCb({
        adds: [],
        removes: [],
        texts: [],
        attributes: [
          {
            id: n.id,
            attributes: n.attributes
          }
        ]
      }), this.trackLinkElement(e);
    }
    trackLinkElement(e) {
      this.trackedLinkElements.has(e) || (this.trackedLinkElements.add(e), this.trackStylesheetInLinkElement(e));
    }
    adoptStyleSheets(e, n) {
      if (e.length === 0)
        return;
      const r = {
        id: n,
        styleIds: []
      }, i = [];
      for (const o of e) {
        let s;
        if (this.styleMirror.has(o))
          s = this.styleMirror.getId(o);
        else {
          s = this.styleMirror.add(o);
          const a = Array.from(o.rules || CSSRule);
          i.push({
            styleId: s,
            rules: a.map((l, c) => ({
              rule: Zr(l),
              index: c
            }))
          });
        }
        r.styleIds.push(s);
      }
      i.length > 0 && (r.styles = i), this.adoptedStyleSheetCb(r);
    }
    reset() {
      this.styleMirror.reset(), this.trackedLinkElements = /* @__PURE__ */ new WeakSet();
    }
    trackStylesheetInLinkElement(e) {
    }
  }
  function ce(t) {
    return Object.assign(Object.assign({}, t), { timestamp: Date.now() });
  }
  let se, Pt, on, Kt = !1;
  const Te = Lo();
  function Tt(t = {}) {
    const { emit: e, checkoutEveryNms: n, checkoutEveryNth: r, blockClass: i = "rr-block", blockSelector: o = null, ignoreClass: s = "rr-ignore", maskTextClass: a = "rr-mask", maskTextSelector: l = null, inlineStylesheet: c = !0, maskAllInputs: d, maskInputOptions: u, slimDOMOptions: p, maskInputFn: m, maskTextFn: h, hooks: g, packFn: C, sampling: f = {}, dataURLOptions: y = {}, mousemoveWait: v, recordCanvas: A = !1, recordCrossOriginIframes: L = !1, userTriggeredOnInput: x = !1, collectFonts: P = !1, inlineImages: D = !1, plugins: w, keepIframeSrcFn: T = () => !1, ignoreCSSAttributes: I = /* @__PURE__ */ new Set([]) } = t, b = L ? window.parent === window : !0;
    let R = !1;
    if (!b)
      try {
        window.parent.document, R = !1;
      } catch {
        R = !0;
      }
    if (b && !e)
      throw new Error("emit function is required");
    v !== void 0 && f.mousemove === void 0 && (f.mousemove = v), Te.reset();
    const N = d === !0 ? {
      color: !0,
      date: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
      textarea: !0,
      select: !0,
      password: !0
    } : u !== void 0 ? u : { password: !0 }, V = p === !0 || p === "all" ? {
      script: !0,
      comment: !0,
      headFavicon: !0,
      headWhitespace: !0,
      headMetaSocial: !0,
      headMetaRobots: !0,
      headMetaHttpEquiv: !0,
      headMetaVerification: !0,
      headMetaAuthorship: p === "all",
      headMetaDescKeywords: p === "all"
    } : p || {};
    rs();
    let O, S = 0;
    const _ = (k) => {
      for (const te of w || [])
        te.eventProcessor && (k = te.eventProcessor(k));
      return C && (k = C(k)), k;
    };
    se = (k, te) => {
      var F;
      if (!((F = _e[0]) === null || F === void 0) && F.isFrozen() && k.type !== Q.FullSnapshot && !(k.type === Q.IncrementalSnapshot && k.data.source === $.Mutation) && _e.forEach((K) => K.unfreeze()), b)
        e == null || e(_(k), te);
      else if (R) {
        const K = {
          type: "rrweb",
          event: _(k),
          isCheckout: te
        };
        window.parent.postMessage(K, "*");
      }
      if (k.type === Q.FullSnapshot)
        O = k, S = 0;
      else if (k.type === Q.IncrementalSnapshot) {
        if (k.data.source === $.Mutation && k.data.isAttachIframe)
          return;
        S++;
        const K = r && S >= r, pe = n && k.timestamp - O.timestamp > n;
        (K || pe) && Pt(!0);
      }
    };
    const W = (k) => {
      se(ce({
        type: Q.IncrementalSnapshot,
        data: Object.assign({ source: $.Mutation }, k)
      }));
    }, G = (k) => se(ce({
      type: Q.IncrementalSnapshot,
      data: Object.assign({ source: $.Scroll }, k)
    })), X = (k) => se(ce({
      type: Q.IncrementalSnapshot,
      data: Object.assign({ source: $.CanvasMutation }, k)
    })), j = (k) => se(ce({
      type: Q.IncrementalSnapshot,
      data: Object.assign({ source: $.AdoptedStyleSheet }, k)
    })), z = new Vs({
      mutationCb: W,
      adoptedStyleSheetCb: j
    }), E = new Is({
      mirror: Te,
      mutationCb: W,
      stylesheetManager: z,
      recordCrossOriginIframes: L,
      wrappedEmit: se
    });
    for (const k of w || [])
      k.getMirror && k.getMirror({
        nodeMirror: Te,
        crossOriginIframeMirror: E.crossOriginIframeMirror,
        crossOriginIframeStyleMirror: E.crossOriginIframeStyleMirror
      });
    on = new Bs({
      recordCanvas: A,
      mutationCb: X,
      win: window,
      blockClass: i,
      blockSelector: o,
      mirror: Te,
      sampling: f.canvas,
      dataURLOptions: y
    });
    const U = new vs({
      mutationCb: W,
      scrollCb: G,
      bypassOptions: {
        blockClass: i,
        blockSelector: o,
        maskTextClass: a,
        maskTextSelector: l,
        inlineStylesheet: c,
        maskInputOptions: N,
        dataURLOptions: y,
        maskTextFn: h,
        maskInputFn: m,
        recordCanvas: A,
        inlineImages: D,
        sampling: f,
        slimDOMOptions: V,
        iframeManager: E,
        stylesheetManager: z,
        canvasManager: on,
        keepIframeSrcFn: T
      },
      mirror: Te
    });
    Pt = (k = !1) => {
      var te, F, K, pe, Y, Ce;
      se(ce({
        type: Q.Meta,
        data: {
          href: window.location.href,
          width: Qr(),
          height: Hr()
        }
      }), k), z.reset(), _e.forEach((ge) => ge.lock());
      const lt = ts(document, {
        mirror: Te,
        blockClass: i,
        blockSelector: o,
        maskTextClass: a,
        maskTextSelector: l,
        inlineStylesheet: c,
        maskAllInputs: N,
        maskTextFn: h,
        slimDOM: V,
        dataURLOptions: y,
        recordCanvas: A,
        inlineImages: D,
        onSerialize: (ge) => {
          Xr(ge, Te) && E.addIframe(ge), qr(ge, Te) && z.trackLinkElement(ge), ei(ge) && U.addShadowRoot(ge.shadowRoot, document);
        },
        onIframeLoad: (ge, Xt) => {
          E.attachIframe(ge, Xt), U.observeAttachShadow(ge);
        },
        onStylesheetLoad: (ge, Xt) => {
          z.attachLinkElement(ge, Xt);
        },
        keepIframeSrcFn: T
      });
      if (!lt)
        return console.warn("Failed to snapshot the document");
      se(ce({
        type: Q.FullSnapshot,
        data: {
          node: lt,
          initialOffset: {
            left: window.pageXOffset !== void 0 ? window.pageXOffset : (document == null ? void 0 : document.documentElement.scrollLeft) || ((F = (te = document == null ? void 0 : document.body) === null || te === void 0 ? void 0 : te.parentElement) === null || F === void 0 ? void 0 : F.scrollLeft) || ((K = document == null ? void 0 : document.body) === null || K === void 0 ? void 0 : K.scrollLeft) || 0,
            top: window.pageYOffset !== void 0 ? window.pageYOffset : (document == null ? void 0 : document.documentElement.scrollTop) || ((Y = (pe = document == null ? void 0 : document.body) === null || pe === void 0 ? void 0 : pe.parentElement) === null || Y === void 0 ? void 0 : Y.scrollTop) || ((Ce = document == null ? void 0 : document.body) === null || Ce === void 0 ? void 0 : Ce.scrollTop) || 0
          }
        }
      })), _e.forEach((ge) => ge.unlock()), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && z.adoptStyleSheets(document.adoptedStyleSheets, Te.getId(document));
    };
    try {
      const k = [];
      k.push(fe("DOMContentLoaded", () => {
        se(ce({
          type: Q.DomContentLoaded,
          data: {}
        }));
      }));
      const te = (K) => {
        var pe;
        return Cs({
          mutationCb: W,
          mousemoveCb: (Y, Ce) => se(ce({
            type: Q.IncrementalSnapshot,
            data: {
              source: Ce,
              positions: Y
            }
          })),
          mouseInteractionCb: (Y) => se(ce({
            type: Q.IncrementalSnapshot,
            data: Object.assign({ source: $.MouseInteraction }, Y)
          })),
          scrollCb: G,
          viewportResizeCb: (Y) => se(ce({
            type: Q.IncrementalSnapshot,
            data: Object.assign({ source: $.ViewportResize }, Y)
          })),
          inputCb: (Y) => se(ce({
            type: Q.IncrementalSnapshot,
            data: Object.assign({ source: $.Input }, Y)
          })),
          mediaInteractionCb: (Y) => se(ce({
            type: Q.IncrementalSnapshot,
            data: Object.assign({ source: $.MediaInteraction }, Y)
          })),
          styleSheetRuleCb: (Y) => se(ce({
            type: Q.IncrementalSnapshot,
            data: Object.assign({ source: $.StyleSheetRule }, Y)
          })),
          styleDeclarationCb: (Y) => se(ce({
            type: Q.IncrementalSnapshot,
            data: Object.assign({ source: $.StyleDeclaration }, Y)
          })),
          canvasMutationCb: X,
          fontCb: (Y) => se(ce({
            type: Q.IncrementalSnapshot,
            data: Object.assign({ source: $.Font }, Y)
          })),
          selectionCb: (Y) => {
            se(ce({
              type: Q.IncrementalSnapshot,
              data: Object.assign({ source: $.Selection }, Y)
            }));
          },
          blockClass: i,
          ignoreClass: s,
          maskTextClass: a,
          maskTextSelector: l,
          maskInputOptions: N,
          inlineStylesheet: c,
          sampling: f,
          recordCanvas: A,
          inlineImages: D,
          userTriggeredOnInput: x,
          collectFonts: P,
          doc: K,
          maskInputFn: m,
          maskTextFn: h,
          keepIframeSrcFn: T,
          blockSelector: o,
          slimDOMOptions: V,
          dataURLOptions: y,
          mirror: Te,
          iframeManager: E,
          stylesheetManager: z,
          shadowDomManager: U,
          canvasManager: on,
          ignoreCSSAttributes: I,
          plugins: ((pe = w == null ? void 0 : w.filter((Y) => Y.observer)) === null || pe === void 0 ? void 0 : pe.map((Y) => ({
            observer: Y.observer,
            options: Y.options,
            callback: (Ce) => se(ce({
              type: Q.Plugin,
              data: {
                plugin: Y.name,
                payload: Ce
              }
            }))
          }))) || []
        }, g);
      };
      E.addLoadListener((K) => {
        k.push(te(K.contentDocument));
      });
      const F = () => {
        Pt(), k.push(te(document)), Kt = !0;
      };
      return document.readyState === "interactive" || document.readyState === "complete" ? F() : k.push(fe("load", () => {
        se(ce({
          type: Q.Load,
          data: {}
        })), F();
      }, window)), () => {
        k.forEach((K) => K()), Kt = !1;
      };
    } catch (k) {
      console.warn(k);
    }
  }
  Tt.addCustomEvent = (t, e) => {
    if (!Kt)
      throw new Error("please add custom event after start recording");
    se(ce({
      type: Q.Custom,
      data: {
        tag: t,
        payload: e
      }
    }));
  };
  Tt.freezePage = () => {
    _e.forEach((t) => t.freeze());
  };
  Tt.takeFullSnapshot = (t) => {
    if (!Kt)
      throw new Error("please take full snapshot after start recording");
    Pt(t);
  };
  Tt.mirror = Te;
  function $t() {
  }
  function nr(t, e) {
    for (const n in e)
      t[n] = e[n];
    return t;
  }
  function gi(t) {
    return t();
  }
  function rr() {
    return /* @__PURE__ */ Object.create(null);
  }
  function st(t) {
    t.forEach(gi);
  }
  function _s(t) {
    return typeof t == "function";
  }
  function Rn(t, e) {
    return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
  }
  function ir(t) {
    const e = {};
    for (const n in t)
      n[0] !== "$" && (e[n] = t[n]);
    return e;
  }
  function J(t, e) {
    t.appendChild(e);
  }
  function Le(t, e, n) {
    t.insertBefore(e, n || null);
  }
  function Re(t) {
    t.parentNode.removeChild(t);
  }
  function sn(t, e) {
    for (let n = 0; n < t.length; n += 1)
      t[n] && t[n].d(e);
  }
  function de(t) {
    return document.createElement(t);
  }
  function Yt(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t);
  }
  function $e(t) {
    return document.createTextNode(t);
  }
  function we() {
    return $e(" ");
  }
  function yt(t, e, n, r) {
    return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
  }
  function B(t, e, n) {
    n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
  }
  function zt(t, e) {
    e = "" + e, t.wholeText !== e && (t.data = e);
  }
  function ae(t, e, n, r) {
    n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, r ? "important" : "");
  }
  function it(t, e, n) {
    t.classList[n ? "add" : "remove"](e);
  }
  let St;
  function Ct(t) {
    St = t;
  }
  function jt() {
    if (!St)
      throw new Error("Function called outside component initialization");
    return St;
  }
  function mi(t) {
    jt().$$.on_mount.push(t);
  }
  function fi(t) {
    jt().$$.on_destroy.push(t);
  }
  function Us() {
    const t = jt();
    return (e, n, { cancelable: r = !1 } = {}) => {
      const i = t.$$.callbacks[e];
      if (i) {
        const o = function(s, a, { bubbles: l = !1, cancelable: c = !1 } = {}) {
          const d = document.createEvent("CustomEvent");
          return d.initCustomEvent(s, l, c, a), d;
        }(e, n, { cancelable: r });
        return i.slice().forEach((s) => {
          s.call(t, o);
        }), !o.defaultPrevented;
      }
      return !0;
    };
  }
  const ht = [], Pe = [], Bt = [], Cn = [], Gs = Promise.resolve();
  let In = !1;
  function vn(t) {
    Bt.push(t);
  }
  const an = /* @__PURE__ */ new Set();
  let Dt = 0;
  function yi() {
    const t = St;
    do {
      for (; Dt < ht.length; ) {
        const e = ht[Dt];
        Dt++, Ct(e), Zs(e.$$);
      }
      for (Ct(null), ht.length = 0, Dt = 0; Pe.length; )
        Pe.pop()();
      for (let e = 0; e < Bt.length; e += 1) {
        const n = Bt[e];
        an.has(n) || (an.add(n), n());
      }
      Bt.length = 0;
    } while (ht.length);
    for (; Cn.length; )
      Cn.pop()();
    In = !1, an.clear(), Ct(t);
  }
  function Zs(t) {
    if (t.fragment !== null) {
      t.update(), st(t.before_update);
      const e = t.dirty;
      t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(vn);
    }
  }
  const Vt = /* @__PURE__ */ new Set();
  let Ue;
  function Ci() {
    Ue = { r: 0, c: [], p: Ue };
  }
  function Ii() {
    Ue.r || st(Ue.c), Ue = Ue.p;
  }
  function Fe(t, e) {
    t && t.i && (Vt.delete(t), t.i(e));
  }
  function ot(t, e, n, r) {
    if (t && t.o) {
      if (Vt.has(t))
        return;
      Vt.add(t), Ue.c.push(() => {
        Vt.delete(t), r && (n && t.d(1), r());
      }), t.o(e);
    } else
      r && r();
  }
  function vi(t) {
    t && t.c();
  }
  function Mn(t, e, n, r) {
    const { fragment: i, on_mount: o, on_destroy: s, after_update: a } = t.$$;
    i && i.m(e, n), r || vn(() => {
      const l = o.map(gi).filter(_s);
      s ? s.push(...l) : st(l), t.$$.on_mount = [];
    }), a.forEach(vn);
  }
  function Dn(t, e) {
    const n = t.$$;
    n.fragment !== null && (st(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
  }
  function Ks(t, e) {
    t.$$.dirty[0] === -1 && (ht.push(t), In || (In = !0, Gs.then(yi)), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
  }
  function Fn(t, e, n, r, i, o, s, a = [-1]) {
    const l = St;
    Ct(t);
    const c = t.$$ = { fragment: null, ctx: null, props: o, update: $t, not_equal: i, bound: rr(), on_mount: [], on_destroy: [], on_disconnect: [], before_update: [], after_update: [], context: new Map(e.context || (l ? l.$$.context : [])), callbacks: rr(), dirty: a, skip_bound: !1, root: e.target || l.$$.root };
    s && s(c.root);
    let d = !1;
    if (c.ctx = n ? n(t, e.props || {}, (u, p, ...m) => {
      const h = m.length ? m[0] : p;
      return c.ctx && i(c.ctx[u], c.ctx[u] = h) && (!c.skip_bound && c.bound[u] && c.bound[u](h), d && Ks(t, u)), p;
    }) : [], c.update(), d = !0, st(c.before_update), c.fragment = !!r && r(c.ctx), e.target) {
      if (e.hydrate) {
        const u = function(p) {
          return Array.from(p.childNodes);
        }(e.target);
        c.fragment && c.fragment.l(u), u.forEach(Re);
      } else
        c.fragment && c.fragment.c();
      e.intro && Fe(t.$$.fragment), Mn(t, e.target, e.anchor, e.customElement), yi();
    }
    Ct(l);
  }
  class Ln {
    $destroy() {
      Dn(this, 1), this.$destroy = $t;
    }
    $on(e, n) {
      const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return r.push(n), () => {
        const i = r.indexOf(n);
        i !== -1 && r.splice(i, 1);
      };
    }
    $set(e) {
      var n;
      this.$$set && (n = e, Object.keys(n).length !== 0) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
    }
  }
  var ue;
  function $s(t) {
    return t.nodeType === t.ELEMENT_NODE;
  }
  (function(t) {
    t[t.Document = 0] = "Document", t[t.DocumentType = 1] = "DocumentType", t[t.Element = 2] = "Element", t[t.Text = 3] = "Text", t[t.CDATA = 4] = "CDATA", t[t.Comment = 5] = "Comment";
  })(ue || (ue = {}));
  var wi = function() {
    function t() {
      this.idNodeMap = /* @__PURE__ */ new Map(), this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
    }
    return t.prototype.getId = function(e) {
      var n;
      if (!e)
        return -1;
      var r = (n = this.getMeta(e)) === null || n === void 0 ? void 0 : n.id;
      return r ?? -1;
    }, t.prototype.getNode = function(e) {
      return this.idNodeMap.get(e) || null;
    }, t.prototype.getIds = function() {
      return Array.from(this.idNodeMap.keys());
    }, t.prototype.getMeta = function(e) {
      return this.nodeMetaMap.get(e) || null;
    }, t.prototype.removeNodeFromMap = function(e) {
      var n = this, r = this.getId(e);
      this.idNodeMap.delete(r), e.childNodes && e.childNodes.forEach(function(i) {
        return n.removeNodeFromMap(i);
      });
    }, t.prototype.has = function(e) {
      return this.idNodeMap.has(e);
    }, t.prototype.hasNode = function(e) {
      return this.nodeMetaMap.has(e);
    }, t.prototype.add = function(e, n) {
      var r = n.id;
      this.idNodeMap.set(r, e), this.nodeMetaMap.set(e, n);
    }, t.prototype.replace = function(e, n) {
      var r = this.getNode(e);
      if (r) {
        var i = this.nodeMetaMap.get(r);
        i && this.nodeMetaMap.set(n, i);
      }
      this.idNodeMap.set(e, n);
    }, t.prototype.reset = function() {
      this.idNodeMap = /* @__PURE__ */ new Map(), this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
    }, t;
  }();
  function Ys() {
    return new wi();
  }
  var or = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
  function zs(t, e) {
    e === void 0 && (e = {});
    var n = 1, r = 1;
    function i(I) {
      var b = I.match(/\n/g);
      b && (n += b.length);
      var R = I.lastIndexOf(`
`);
      r = R === -1 ? r + I.length : I.length - R;
    }
    function o() {
      var I = { line: n, column: r };
      return function(b) {
        return b.position = new s(I), m(), b;
      };
    }
    var s = function(I) {
      this.start = I, this.end = { line: n, column: r }, this.source = e.source;
    };
    s.prototype.content = t;
    var a = [];
    function l(I) {
      var b = new Error("".concat(e.source || "", ":").concat(n, ":").concat(r, ": ").concat(I));
      if (b.reason = I, b.filename = e.source, b.line = n, b.column = r, b.source = t, !e.silent)
        throw b;
      a.push(b);
    }
    function c() {
      return p(/^{\s*/);
    }
    function d() {
      return p(/^}/);
    }
    function u() {
      var I, b = [];
      for (m(), h(b); t.length && t.charAt(0) !== "}" && (I = w() || T()); )
        I !== !1 && (b.push(I), h(b));
      return b;
    }
    function p(I) {
      var b = I.exec(t);
      if (b) {
        var R = b[0];
        return i(R), t = t.slice(R.length), b;
      }
    }
    function m() {
      p(/^\s*/);
    }
    function h(I) {
      var b;
      for (I === void 0 && (I = []); b = g(); )
        b !== !1 && I.push(b), b = g();
      return I;
    }
    function g() {
      var I = o();
      if (t.charAt(0) === "/" && t.charAt(1) === "*") {
        for (var b = 2; t.charAt(b) !== "" && (t.charAt(b) !== "*" || t.charAt(b + 1) !== "/"); )
          ++b;
        if (b += 2, t.charAt(b - 1) === "")
          return l("End of comment missing");
        var R = t.slice(2, b - 2);
        return r += 2, i(R), t = t.slice(b), r += 2, I({ type: "comment", comment: R });
      }
    }
    function C() {
      var I = p(/^([^{]+)/);
      if (I)
        return Me(I[0]).replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, "").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function(b) {
          return b.replace(/,/g, "‌");
        }).split(/\s*(?![^(]*\)),\s*/).map(function(b) {
          return b.replace(/\u200C/g, ",");
        });
    }
    function f() {
      var I = o(), b = p(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
      if (b) {
        var R = Me(b[0]);
        if (!p(/^:\s*/))
          return l("property missing ':'");
        var N = p(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/), V = I({ type: "declaration", property: R.replace(or, ""), value: N ? Me(N[0]).replace(or, "") : "" });
        return p(/^[;\s]*/), V;
      }
    }
    function y() {
      var I, b = [];
      if (!c())
        return l("missing '{'");
      for (h(b); I = f(); )
        I !== !1 && (b.push(I), h(b)), I = f();
      return d() ? b : l("missing '}'");
    }
    function v() {
      for (var I, b = [], R = o(); I = p(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/); )
        b.push(I[1]), p(/^,\s*/);
      if (b.length)
        return R({ type: "keyframe", values: b, declarations: y() });
    }
    var A, L = D("import"), x = D("charset"), P = D("namespace");
    function D(I) {
      var b = new RegExp("^@" + I + "\\s*([^;]+);");
      return function() {
        var R = o(), N = p(b);
        if (N) {
          var V = { type: I };
          return V[I] = N[1].trim(), R(V);
        }
      };
    }
    function w() {
      if (t[0] === "@")
        return function() {
          var I = o(), b = p(/^@([-\w]+)?keyframes\s*/);
          if (b) {
            var R = b[1];
            if (!(b = p(/^([-\w]+)\s*/)))
              return l("@keyframes missing name");
            var N, V = b[1];
            if (!c())
              return l("@keyframes missing '{'");
            for (var O = h(); N = v(); )
              O.push(N), O = O.concat(h());
            return d() ? I({ type: "keyframes", name: V, vendor: R, keyframes: O }) : l("@keyframes missing '}'");
          }
        }() || function() {
          var I = o(), b = p(/^@media *([^{]+)/);
          if (b) {
            var R = Me(b[1]);
            if (!c())
              return l("@media missing '{'");
            var N = h().concat(u());
            return d() ? I({ type: "media", media: R, rules: N }) : l("@media missing '}'");
          }
        }() || function() {
          var I = o(), b = p(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
          if (b)
            return I({ type: "custom-media", name: Me(b[1]), media: Me(b[2]) });
        }() || function() {
          var I = o(), b = p(/^@supports *([^{]+)/);
          if (b) {
            var R = Me(b[1]);
            if (!c())
              return l("@supports missing '{'");
            var N = h().concat(u());
            return d() ? I({ type: "supports", supports: R, rules: N }) : l("@supports missing '}'");
          }
        }() || L() || x() || P() || function() {
          var I = o(), b = p(/^@([-\w]+)?document *([^{]+)/);
          if (b) {
            var R = Me(b[1]), N = Me(b[2]);
            if (!c())
              return l("@document missing '{'");
            var V = h().concat(u());
            return d() ? I({ type: "document", document: N, vendor: R, rules: V }) : l("@document missing '}'");
          }
        }() || function() {
          var I = o();
          if (p(/^@page */)) {
            var b = C() || [];
            if (!c())
              return l("@page missing '{'");
            for (var R, N = h(); R = f(); )
              N.push(R), N = N.concat(h());
            return d() ? I({ type: "page", selectors: b, declarations: N }) : l("@page missing '}'");
          }
        }() || function() {
          var I = o();
          if (p(/^@host\s*/)) {
            if (!c())
              return l("@host missing '{'");
            var b = h().concat(u());
            return d() ? I({ type: "host", rules: b }) : l("@host missing '}'");
          }
        }() || function() {
          var I = o();
          if (p(/^@font-face\s*/)) {
            if (!c())
              return l("@font-face missing '{'");
            for (var b, R = h(); b = f(); )
              R.push(b), R = R.concat(h());
            return d() ? I({ type: "font-face", declarations: R }) : l("@font-face missing '}'");
          }
        }();
    }
    function T() {
      var I = o(), b = C();
      return b ? (h(), I({ type: "rule", selectors: b, declarations: y() })) : l("selector missing");
    }
    return wn((A = u(), { type: "stylesheet", stylesheet: { source: e.source, rules: A, parsingErrors: a } }));
  }
  function Me(t) {
    return t ? t.replace(/^\s+|\s+$/g, "") : "";
  }
  function wn(t, e) {
    for (var n = t && typeof t.type == "string", r = n ? t : e, i = 0, o = Object.keys(t); i < o.length; i++) {
      var s = t[o[i]];
      Array.isArray(s) ? s.forEach(function(a) {
        wn(a, r);
      }) : s && typeof s == "object" && wn(s, r);
    }
    return n && Object.defineProperty(t, "parent", { configurable: !0, writable: !0, enumerable: !1, value: e || null }), t;
  }
  var sr = { script: "noscript", altglyph: "altGlyph", altglyphdef: "altGlyphDef", altglyphitem: "altGlyphItem", animatecolor: "animateColor", animatemotion: "animateMotion", animatetransform: "animateTransform", clippath: "clipPath", feblend: "feBlend", fecolormatrix: "feColorMatrix", fecomponenttransfer: "feComponentTransfer", fecomposite: "feComposite", feconvolvematrix: "feConvolveMatrix", fediffuselighting: "feDiffuseLighting", fedisplacementmap: "feDisplacementMap", fedistantlight: "feDistantLight", fedropshadow: "feDropShadow", feflood: "feFlood", fefunca: "feFuncA", fefuncb: "feFuncB", fefuncg: "feFuncG", fefuncr: "feFuncR", fegaussianblur: "feGaussianBlur", feimage: "feImage", femerge: "feMerge", femergenode: "feMergeNode", femorphology: "feMorphology", feoffset: "feOffset", fepointlight: "fePointLight", fespecularlighting: "feSpecularLighting", fespotlight: "feSpotLight", fetile: "feTile", feturbulence: "feTurbulence", foreignobject: "foreignObject", glyphref: "glyphRef", lineargradient: "linearGradient", radialgradient: "radialGradient" }, bi = /([^\\]):hover/, Hs = new RegExp(bi.source, "g");
  function ar(t, e) {
    var n = e == null ? void 0 : e.stylesWithHoverClass.get(t);
    if (n)
      return n;
    var r = zs(t, { silent: !0 });
    if (!r.stylesheet)
      return t;
    var i = [];
    if (r.stylesheet.rules.forEach(function(a) {
      "selectors" in a && (a.selectors || []).forEach(function(l) {
        bi.test(l) && i.push(l);
      });
    }), i.length === 0)
      return t;
    var o = new RegExp(i.filter(function(a, l) {
      return i.indexOf(a) === l;
    }).sort(function(a, l) {
      return l.length - a.length;
    }).map(function(a) {
      return a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }).join("|"), "g"), s = t.replace(o, function(a) {
      var l = a.replace(Hs, "$1.\\:hover");
      return "".concat(a, ", ").concat(l);
    });
    return e == null || e.stylesWithHoverClass.set(t, s), s;
  }
  function lr() {
    return { stylesWithHoverClass: /* @__PURE__ */ new Map() };
  }
  function Qs(t, e) {
    var n = e.doc, r = e.hackCss, i = e.cache;
    switch (t.type) {
      case ue.Document:
        return n.implementation.createDocument(null, "", null);
      case ue.DocumentType:
        return n.implementation.createDocumentType(t.name || "html", t.publicId, t.systemId);
      case ue.Element:
        var o, s = function(y) {
          var v = sr[y.tagName] ? sr[y.tagName] : y.tagName;
          return v === "link" && y.attributes._cssText && (v = "style"), v;
        }(t);
        o = t.isSVG ? n.createElementNS("http://www.w3.org/2000/svg", s) : n.createElement(s);
        var a = {};
        for (var l in t.attributes)
          if (Object.prototype.hasOwnProperty.call(t.attributes, l)) {
            var c = t.attributes[l];
            if (s !== "option" || l !== "selected" || c !== !1)
              if (c === !0 && (c = ""), l.startsWith("rr_"))
                a[l] = c;
              else {
                var d = s === "textarea" && l === "value", u = s === "style" && l === "_cssText";
                if (u && r && typeof c == "string" && (c = ar(c, i)), !d && !u || typeof c != "string")
                  try {
                    if (t.isSVG && l === "xlink:href")
                      o.setAttributeNS("http://www.w3.org/1999/xlink", l, c.toString());
                    else if (l === "onload" || l === "onclick" || l.substring(0, 7) === "onmouse")
                      o.setAttribute("_" + l, c.toString());
                    else {
                      if (s === "meta" && t.attributes["http-equiv"] === "Content-Security-Policy" && l === "content") {
                        o.setAttribute("csp-content", c.toString());
                        continue;
                      }
                      s === "link" && t.attributes.rel === "preload" && t.attributes.as === "script" || s === "link" && t.attributes.rel === "prefetch" && typeof t.attributes.href == "string" && t.attributes.href.endsWith(".js") || (s === "img" && t.attributes.srcset && t.attributes.rr_dataURL ? o.setAttribute("rrweb-original-srcset", t.attributes.srcset) : o.setAttribute(l, c.toString()));
                    }
                  } catch {
                  }
                else {
                  for (var p = n.createTextNode(c), m = 0, h = Array.from(o.childNodes); m < h.length; m++) {
                    var g = h[m];
                    g.nodeType === o.TEXT_NODE && o.removeChild(g);
                  }
                  o.appendChild(p);
                }
              }
          }
        var C = function(y) {
          var v = a[y];
          if (s === "canvas" && y === "rr_dataURL") {
            var A = document.createElement("img");
            A.onload = function() {
              var x = o.getContext("2d");
              x && x.drawImage(A, 0, 0, A.width, A.height);
            }, A.src = v.toString(), o.RRNodeType && (o.rr_dataURL = v.toString());
          } else if (s === "img" && y === "rr_dataURL") {
            var L = o;
            L.currentSrc.startsWith("data:") || (L.setAttribute("rrweb-original-src", t.attributes.src), L.src = v.toString());
          }
          if (y === "rr_width")
            o.style.width = v.toString();
          else if (y === "rr_height")
            o.style.height = v.toString();
          else if (y === "rr_mediaCurrentTime" && typeof v == "number")
            o.currentTime = v;
          else if (y === "rr_mediaState")
            switch (v) {
              case "played":
                o.play().catch(function(x) {
                  return console.warn("media playback error", x);
                });
                break;
              case "paused":
                o.pause();
            }
        };
        for (var f in a)
          C(f);
        if (t.isShadowHost)
          if (o.shadowRoot)
            for (; o.shadowRoot.firstChild; )
              o.shadowRoot.removeChild(o.shadowRoot.firstChild);
          else
            o.attachShadow({ mode: "open" });
        return o;
      case ue.Text:
        return n.createTextNode(t.isStyle && r ? ar(t.textContent, i) : t.textContent);
      case ue.CDATA:
        return n.createCDATASection(t.textContent);
      case ue.Comment:
        return n.createComment(t.textContent);
      default:
        return null;
    }
  }
  function It(t, e) {
    var n = e.doc, r = e.mirror, i = e.skipChild, o = i !== void 0 && i, s = e.hackCss, a = s === void 0 || s, l = e.afterAppend, c = e.cache, d = Qs(t, { doc: n, hackCss: a, cache: c });
    if (!d)
      return null;
    if (t.rootId && r.getNode(t.rootId) !== n && r.replace(t.rootId, n), t.type === ue.Document && (n.close(), n.open(), t.compatMode === "BackCompat" && t.childNodes && t.childNodes[0].type !== ue.DocumentType && (t.childNodes[0].type === ue.Element && "xmlns" in t.childNodes[0].attributes && t.childNodes[0].attributes.xmlns === "http://www.w3.org/1999/xhtml" ? n.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">') : n.write('<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">')), d = n), r.add(d, t), (t.type === ue.Document || t.type === ue.Element) && !o)
      for (var u = 0, p = t.childNodes; u < p.length; u++) {
        var m = p[u], h = It(m, { doc: n, mirror: r, skipChild: !1, hackCss: a, afterAppend: l, cache: c });
        h ? (m.isShadow && $s(d) && d.shadowRoot ? d.shadowRoot.appendChild(h) : d.appendChild(h), l && l(h, m.id)) : console.warn("Failed to rebuild", m);
      }
    return d;
  }
  function Js(t, e) {
    var n = e.doc, r = e.onVisit, i = e.hackCss, o = i === void 0 || i, s = e.afterAppend, a = e.cache, l = e.mirror, c = l === void 0 ? new wi() : l, d = It(t, { doc: n, mirror: c, skipChild: !1, hackCss: o, afterAppend: s, cache: a });
    return function(u, p) {
      for (var m = 0, h = u.getIds(); m < h.length; m++) {
        var g = h[m];
        u.has(g) && p(u.getNode(g));
      }
    }(c, function(u) {
      r && r(u), function(p, m) {
        var h = m.getMeta(p);
        if ((h == null ? void 0 : h.type) === ue.Element) {
          var g = p;
          for (var C in h.attributes)
            if (Object.prototype.hasOwnProperty.call(h.attributes, C) && C.startsWith("rr_")) {
              var f = h.attributes[C];
              C === "rr_scrollLeft" && (g.scrollLeft = f), C === "rr_scrollTop" && (g.scrollTop = f);
            }
        }
      }(u, c);
    }), d;
  }
  const Je = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`;
  let cr = { map: {}, getId: () => (console.error(Je), -1), getNode: () => (console.error(Je), null), removeNodeFromMap() {
    console.error(Je);
  }, has: () => (console.error(Je), !1), reset() {
    console.error(Je);
  } };
  function js(t) {
    const e = {}, n = (i, o) => {
      const s = { value: i, parent: o, children: [] };
      return e[i.node.id] = s, s;
    }, r = [];
    for (const i of t) {
      const { nextId: o, parentId: s } = i;
      if (o && o in e) {
        const a = e[o];
        if (a.parent) {
          const l = a.parent.children.indexOf(a);
          a.parent.children.splice(l, 0, n(i, a.parent));
        } else {
          const l = r.indexOf(a);
          r.splice(l, 0, n(i, null));
        }
      } else if (s in e) {
        const a = e[s];
        a.children.push(n(i, a));
      } else
        r.push(n(i, null));
    }
    return r;
  }
  function Si(t, e) {
    e(t.value);
    for (let n = t.children.length - 1; n >= 0; n--)
      Si(t.children[n], e);
  }
  function ln(t, e) {
    return !!(t.nodeName === "IFRAME" && e.getMeta(t));
  }
  function Ai(t, e) {
    var n, r;
    const i = (r = (n = t.ownerDocument) === null || n === void 0 ? void 0 : n.defaultView) === null || r === void 0 ? void 0 : r.frameElement;
    if (!i || i === e)
      return { x: 0, y: 0, relativeScale: 1, absoluteScale: 1 };
    const o = i.getBoundingClientRect(), s = Ai(i, e), a = o.height / i.clientHeight;
    return { x: o.x * s.relativeScale + s.x, y: o.y * s.relativeScale + s.y, relativeScale: a, absoluteScale: s.absoluteScale * a };
  }
  function Ft(t) {
    return !!(t != null && t.shadowRoot);
  }
  function pt(t, e) {
    const n = t[e[0]];
    return e.length === 1 ? n : pt(n.cssRules[e[1]].cssRules, e.slice(2));
  }
  function dr(t) {
    const e = [...t], n = e.pop();
    return { positions: e, index: n };
  }
  typeof window < "u" && window.Proxy && window.Reflect && (cr = new Proxy(cr, { get: (t, e, n) => (e === "map" && console.error(Je), Reflect.get(t, e, n)) }));
  class Xs {
    constructor() {
      this.id = 1, this.styleIDMap = /* @__PURE__ */ new WeakMap(), this.idStyleMap = /* @__PURE__ */ new Map();
    }
    getId(e) {
      var n;
      return (n = this.styleIDMap.get(e)) !== null && n !== void 0 ? n : -1;
    }
    has(e) {
      return this.styleIDMap.has(e);
    }
    add(e, n) {
      if (this.has(e))
        return this.getId(e);
      let r;
      return r = n === void 0 ? this.id++ : n, this.styleIDMap.set(e, r), this.idStyleMap.set(r, e), r;
    }
    getStyle(e) {
      return this.idStyleMap.get(e) || null;
    }
    reset() {
      this.styleIDMap = /* @__PURE__ */ new WeakMap(), this.idStyleMap = /* @__PURE__ */ new Map(), this.id = 1;
    }
    generateId() {
      return this.id++;
    }
  }
  var re = ((t) => (t[t.DomContentLoaded = 0] = "DomContentLoaded", t[t.Load = 1] = "Load", t[t.FullSnapshot = 2] = "FullSnapshot", t[t.IncrementalSnapshot = 3] = "IncrementalSnapshot", t[t.Meta = 4] = "Meta", t[t.Custom = 5] = "Custom", t[t.Plugin = 6] = "Plugin", t))(re || {}), H = ((t) => (t[t.Mutation = 0] = "Mutation", t[t.MouseMove = 1] = "MouseMove", t[t.MouseInteraction = 2] = "MouseInteraction", t[t.Scroll = 3] = "Scroll", t[t.ViewportResize = 4] = "ViewportResize", t[t.Input = 5] = "Input", t[t.TouchMove = 6] = "TouchMove", t[t.MediaInteraction = 7] = "MediaInteraction", t[t.StyleSheetRule = 8] = "StyleSheetRule", t[t.CanvasMutation = 9] = "CanvasMutation", t[t.Font = 10] = "Font", t[t.Log = 11] = "Log", t[t.Drag = 12] = "Drag", t[t.StyleDeclaration = 13] = "StyleDeclaration", t[t.Selection = 14] = "Selection", t[t.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", t))(H || {}), me = ((t) => (t[t.MouseUp = 0] = "MouseUp", t[t.MouseDown = 1] = "MouseDown", t[t.Click = 2] = "Click", t[t.ContextMenu = 3] = "ContextMenu", t[t.DblClick = 4] = "DblClick", t[t.Focus = 5] = "Focus", t[t.Blur = 6] = "Blur", t[t.TouchStart = 7] = "TouchStart", t[t.TouchMove_Departed = 8] = "TouchMove_Departed", t[t.TouchEnd = 9] = "TouchEnd", t[t.TouchCancel = 10] = "TouchCancel", t))(me || {}), Ht = ((t) => (t[t["2D"] = 0] = "2D", t[t.WebGL = 1] = "WebGL", t[t.WebGL2 = 2] = "WebGL2", t))(Ht || {}), q = ((t) => (t.Start = "start", t.Pause = "pause", t.Resume = "resume", t.Resize = "resize", t.Finish = "finish", t.FullsnapshotRebuilded = "fullsnapshot-rebuilded", t.LoadStylesheetStart = "load-stylesheet-start", t.LoadStylesheetEnd = "load-stylesheet-end", t.SkipStart = "skip-start", t.SkipEnd = "skip-end", t.MouseInteraction = "mouse-interaction", t.EventCast = "event-cast", t.CustomEvent = "custom-event", t.Flush = "flush", t.StateChange = "state-change", t.PlayBack = "play-back", t.Destroy = "destroy", t))(q || {});
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  function Ze(t, e, n, r) {
    return new (n || (n = Promise))(function(i, o) {
      function s(c) {
        try {
          l(r.next(c));
        } catch (d) {
          o(d);
        }
      }
      function a(c) {
        try {
          l(r.throw(c));
        } catch (d) {
          o(d);
        }
      }
      function l(c) {
        var d;
        c.done ? i(c.value) : (d = c.value, d instanceof n ? d : new n(function(u) {
          u(d);
        })).then(s, a);
      }
      l((r = r.apply(t, e || [])).next());
    });
  }
  for (var ur = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", gt = typeof Uint8Array > "u" ? [] : new Uint8Array(256), Lt = 0; Lt < ur.length; Lt++)
    gt[ur.charCodeAt(Lt)] = Lt;
  var Ti = null;
  try {
    var qs = typeof Ke < "u" && typeof Ke.require == "function" && Ke.require("worker_threads") || typeof __non_webpack_require__ == "function" && __non_webpack_require__("worker_threads") || typeof require == "function" && require("worker_threads");
    Ti = qs.Worker;
  } catch {
  }
  function ea(t, e, n) {
    var r = e === void 0 ? null : e, i = function(a, l) {
      return Buffer.from(a, "base64").toString(l ? "utf16" : "utf8");
    }(t, n !== void 0 && n), o = i.indexOf(`
`, 10) + 1, s = i.substring(o) + (r ? "//# sourceMappingURL=" + r : "");
    return function(a) {
      return new Ti(s, Object.assign({}, a, { eval: !0 }));
    };
  }
  var hr, pr, gr, Z, ta = Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]";
  hr = "Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICAgJ3VzZSBzdHJpY3QnOwoKICAgIC8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLg0KDQogICAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55DQogICAgcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLg0KDQogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEgNCiAgICBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkNCiAgICBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsDQogICAgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NDQogICAgTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1INCiAgICBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SDQogICAgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS4NCiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqLw0KDQogICAgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikgew0KICAgICAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH0NCiAgICAgICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7DQogICAgICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvclsidGhyb3ciXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfQ0KICAgICAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpOw0KICAgICAgICB9KTsNCiAgICB9CgogICAgLyoKICAgICAqIGJhc2U2NC1hcnJheWJ1ZmZlciAxLjAuMSA8aHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3ZoL2Jhc2U2NC1hcnJheWJ1ZmZlcj4KICAgICAqIENvcHlyaWdodCAoYykgMjAyMSBOaWtsYXMgdm9uIEhlcnR6ZW4gPGh0dHBzOi8vaGVydHplbi5jb20+CiAgICAgKiBSZWxlYXNlZCB1bmRlciBNSVQgTGljZW5zZQogICAgICovCiAgICB2YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7CiAgICAvLyBVc2UgYSBsb29rdXAgdGFibGUgdG8gZmluZCB0aGUgaW5kZXguCiAgICB2YXIgbG9va3VwID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gW10gOiBuZXcgVWludDhBcnJheSgyNTYpOwogICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFycy5sZW5ndGg7IGkrKykgewogICAgICAgIGxvb2t1cFtjaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7CiAgICB9CiAgICB2YXIgZW5jb2RlID0gZnVuY3Rpb24gKGFycmF5YnVmZmVyKSB7CiAgICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLCBpLCBsZW4gPSBieXRlcy5sZW5ndGgsIGJhc2U2NCA9ICcnOwogICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gMykgewogICAgICAgICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaV0gPj4gMl07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2ldICYgMykgPDwgNCkgfCAoYnl0ZXNbaSArIDFdID4+IDQpXTsKICAgICAgICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIpIHwgKGJ5dGVzW2kgKyAyXSA+PiA2KV07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpICsgMl0gJiA2M107CiAgICAgICAgfQogICAgICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgJz0nOwogICAgICAgIH0KICAgICAgICBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgJz09JzsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGJhc2U2NDsKICAgIH07CgogICAgY29uc3QgbGFzdEJsb2JNYXAgPSBuZXcgTWFwKCk7DQogICAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gbmV3IE1hcCgpOw0KICAgIGZ1bmN0aW9uIGdldFRyYW5zcGFyZW50QmxvYkZvcih3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucykgew0KICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgew0KICAgICAgICAgICAgY29uc3QgaWQgPSBgJHt3aWR0aH0tJHtoZWlnaHR9YDsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgaWYgKHRyYW5zcGFyZW50QmxvYk1hcC5oYXMoaWQpKQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNwYXJlbnRCbG9iTWFwLmdldChpZCk7DQogICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsNCiAgICAgICAgICAgICAgICBvZmZzY3JlZW4uZ2V0Q29udGV4dCgnMmQnKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0geWllbGQgYmxvYi5hcnJheUJ1ZmZlcigpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7DQogICAgICAgICAgICAgICAgdHJhbnNwYXJlbnRCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZTY0Ow0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgZWxzZSB7DQogICAgICAgICAgICAgICAgcmV0dXJuICcnOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9KTsNCiAgICB9DQogICAgY29uc3Qgd29ya2VyID0gc2VsZjsNCiAgICB3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHsNCiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgY29uc3QgeyBpZCwgYml0bWFwLCB3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucyB9ID0gZS5kYXRhOw0KICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zKTsNCiAgICAgICAgICAgICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IG9mZnNjcmVlbi5nZXRDb250ZXh0KCcyZCcpOw0KICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoYml0bWFwLCAwLCAwKTsNCiAgICAgICAgICAgICAgICBiaXRtYXAuY2xvc2UoKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBibG9iLnR5cGU7DQogICAgICAgICAgICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSB5aWVsZCBibG9iLmFycmF5QnVmZmVyKCk7DQogICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0ID0gZW5jb2RlKGFycmF5QnVmZmVyKTsNCiAgICAgICAgICAgICAgICBpZiAoIWxhc3RCbG9iTWFwLmhhcyhpZCkgJiYgKHlpZWxkIHRyYW5zcGFyZW50QmFzZTY0KSA9PT0gYmFzZTY0KSB7DQogICAgICAgICAgICAgICAgICAgIGxhc3RCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkIH0pOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7DQogICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHsNCiAgICAgICAgICAgICAgICAgICAgaWQsDQogICAgICAgICAgICAgICAgICAgIHR5cGUsDQogICAgICAgICAgICAgICAgICAgIGJhc2U2NCwNCiAgICAgICAgICAgICAgICAgICAgd2lkdGgsDQogICAgICAgICAgICAgICAgICAgIGhlaWdodCwNCiAgICAgICAgICAgICAgICB9KTsNCiAgICAgICAgICAgICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7DQogICAgICAgICAgICB9DQogICAgICAgICAgICBlbHNlIHsNCiAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgfSk7DQogICAgfTsKCn0pKCk7Cgo=", pr = null, gr = !1, ta && ea(hr, pr, gr), function(t) {
    t[t.Document = 0] = "Document", t[t.DocumentType = 1] = "DocumentType", t[t.Element = 2] = "Element", t[t.Text = 3] = "Text", t[t.CDATA = 4] = "CDATA", t[t.Comment = 5] = "Comment";
  }(Z || (Z = {}));
  var na = function() {
    function t() {
      this.idNodeMap = /* @__PURE__ */ new Map(), this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
    }
    return t.prototype.getId = function(e) {
      var n;
      if (!e)
        return -1;
      var r = (n = this.getMeta(e)) === null || n === void 0 ? void 0 : n.id;
      return r ?? -1;
    }, t.prototype.getNode = function(e) {
      return this.idNodeMap.get(e) || null;
    }, t.prototype.getIds = function() {
      return Array.from(this.idNodeMap.keys());
    }, t.prototype.getMeta = function(e) {
      return this.nodeMetaMap.get(e) || null;
    }, t.prototype.removeNodeFromMap = function(e) {
      var n = this, r = this.getId(e);
      this.idNodeMap.delete(r), e.childNodes && e.childNodes.forEach(function(i) {
        return n.removeNodeFromMap(i);
      });
    }, t.prototype.has = function(e) {
      return this.idNodeMap.has(e);
    }, t.prototype.hasNode = function(e) {
      return this.nodeMetaMap.has(e);
    }, t.prototype.add = function(e, n) {
      var r = n.id;
      this.idNodeMap.set(r, e), this.nodeMetaMap.set(e, n);
    }, t.prototype.replace = function(e, n) {
      var r = this.getNode(e);
      if (r) {
        var i = this.nodeMetaMap.get(r);
        i && this.nodeMetaMap.set(n, i);
      }
      this.idNodeMap.set(e, n);
    }, t.prototype.reset = function() {
      this.idNodeMap = /* @__PURE__ */ new Map(), this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
    }, t;
  }();
  function mr(t) {
    const e = [];
    for (const n in t) {
      const r = t[n];
      if (typeof r != "string")
        continue;
      const i = sa(n);
      e.push(`${i}: ${r};`);
    }
    return e.join(" ");
  }
  const ra = /-([a-z])/g, ia = /^--[a-zA-Z0-9-]+$/, cn = (t) => ia.test(t) ? t : t.replace(ra, (e, n) => n ? n.toUpperCase() : ""), oa = /\B([A-Z])/g, sa = (t) => t.replace(oa, "-$1").toLowerCase();
  class Ee {
    constructor(...e) {
      this.childNodes = [], this.parentElement = null, this.parentNode = null, this.ELEMENT_NODE = oe.ELEMENT_NODE, this.TEXT_NODE = oe.TEXT_NODE;
    }
    get firstChild() {
      return this.childNodes[0] || null;
    }
    get lastChild() {
      return this.childNodes[this.childNodes.length - 1] || null;
    }
    get nextSibling() {
      const e = this.parentNode;
      if (!e)
        return null;
      const n = e.childNodes, r = n.indexOf(this);
      return n[r + 1] || null;
    }
    contains(e) {
      if (e === this)
        return !0;
      for (const n of this.childNodes)
        if (n.contains(e))
          return !0;
      return !1;
    }
    appendChild(e) {
      throw new Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.");
    }
    insertBefore(e, n) {
      throw new Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.");
    }
    removeChild(e) {
      throw new Error("RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.");
    }
    toString() {
      return "RRNode";
    }
  }
  function Ei(t) {
    return class extends t {
      constructor(e, n, r) {
        super(), this.nodeType = oe.DOCUMENT_TYPE_NODE, this.RRNodeType = Z.DocumentType, this.textContent = null, this.name = e, this.publicId = n, this.systemId = r, this.nodeName = e;
      }
      toString() {
        return "RRDocumentType";
      }
    };
  }
  function Ni(t) {
    return class extends t {
      constructor(e) {
        super(), this.nodeType = oe.ELEMENT_NODE, this.RRNodeType = Z.Element, this.attributes = {}, this.shadowRoot = null, this.tagName = e.toUpperCase(), this.nodeName = e.toUpperCase();
      }
      get textContent() {
        let e = "";
        return this.childNodes.forEach((n) => e += n.textContent), e;
      }
      set textContent(e) {
        this.childNodes = [this.ownerDocument.createTextNode(e)];
      }
      get classList() {
        return new aa(this.attributes.class, (e) => {
          this.attributes.class = e;
        });
      }
      get id() {
        return this.attributes.id || "";
      }
      get className() {
        return this.attributes.class || "";
      }
      get style() {
        const e = this.attributes.style ? function(r) {
          const i = {}, o = /:(.+)/;
          return r.replace(/\/\*.*?\*\//g, "").split(/;(?![^(]*\))/g).forEach(function(s) {
            if (s) {
              const a = s.split(o);
              a.length > 1 && (i[cn(a[0].trim())] = a[1].trim());
            }
          }), i;
        }(this.attributes.style) : {}, n = /\B([A-Z])/g;
        return e.setProperty = (r, i, o) => {
          if (n.test(r))
            return;
          const s = cn(r);
          i ? e[s] = i : delete e[s], o === "important" && (e[s] += " !important"), this.attributes.style = mr(e);
        }, e.removeProperty = (r) => {
          if (n.test(r))
            return "";
          const i = cn(r), o = e[i] || "";
          return delete e[i], this.attributes.style = mr(e), o;
        }, e;
      }
      getAttribute(e) {
        return this.attributes[e] || null;
      }
      setAttribute(e, n) {
        this.attributes[e] = n;
      }
      setAttributeNS(e, n, r) {
        this.setAttribute(n, r);
      }
      removeAttribute(e) {
        delete this.attributes[e];
      }
      appendChild(e) {
        return this.childNodes.push(e), e.parentNode = this, e.parentElement = this, e;
      }
      insertBefore(e, n) {
        if (n === null)
          return this.appendChild(e);
        const r = this.childNodes.indexOf(n);
        if (r == -1)
          throw new Error("Failed to execute 'insertBefore' on 'RRNode': The RRNode before which the new node is to be inserted is not a child of this RRNode.");
        return this.childNodes.splice(r, 0, e), e.parentElement = this, e.parentNode = this, e;
      }
      removeChild(e) {
        const n = this.childNodes.indexOf(e);
        if (n === -1)
          throw new Error("Failed to execute 'removeChild' on 'RRElement': The RRNode to be removed is not a child of this RRNode.");
        return this.childNodes.splice(n, 1), e.parentElement = null, e.parentNode = null, e;
      }
      attachShadow(e) {
        const n = this.ownerDocument.createElement("SHADOWROOT");
        return this.shadowRoot = n, n;
      }
      dispatchEvent(e) {
        return !0;
      }
      toString() {
        let e = "";
        for (const n in this.attributes)
          e += `${n}="${this.attributes[n]}" `;
        return `${this.tagName} ${e}`;
      }
    };
  }
  function ki(t) {
    return class extends t {
      constructor(e) {
        super(), this.nodeType = oe.TEXT_NODE, this.nodeName = "#text", this.RRNodeType = Z.Text, this.data = e;
      }
      get textContent() {
        return this.data;
      }
      set textContent(e) {
        this.data = e;
      }
      toString() {
        return `RRText text=${JSON.stringify(this.data)}`;
      }
    };
  }
  function Ri(t) {
    return class extends t {
      constructor(e) {
        super(), this.nodeType = oe.COMMENT_NODE, this.nodeName = "#comment", this.RRNodeType = Z.Comment, this.data = e;
      }
      get textContent() {
        return this.data;
      }
      set textContent(e) {
        this.data = e;
      }
      toString() {
        return `RRComment text=${JSON.stringify(this.data)}`;
      }
    };
  }
  function Mi(t) {
    return class extends t {
      constructor(e) {
        super(), this.nodeName = "#cdata-section", this.nodeType = oe.CDATA_SECTION_NODE, this.RRNodeType = Z.CDATA, this.data = e;
      }
      get textContent() {
        return this.data;
      }
      set textContent(e) {
        this.data = e;
      }
      toString() {
        return `RRCDATASection data=${JSON.stringify(this.data)}`;
      }
    };
  }
  class aa {
    constructor(e, n) {
      if (this.classes = [], this.add = (...r) => {
        for (const i of r) {
          const o = String(i);
          this.classes.indexOf(o) >= 0 || this.classes.push(o);
        }
        this.onChange && this.onChange(this.classes.join(" "));
      }, this.remove = (...r) => {
        this.classes = this.classes.filter((i) => r.indexOf(i) === -1), this.onChange && this.onChange(this.classes.join(" "));
      }, e) {
        const r = e.trim().split(/\s+/);
        this.classes.push(...r);
      }
      this.onChange = n;
    }
  }
  var oe;
  (function(t) {
    t[t.PLACEHOLDER = 0] = "PLACEHOLDER", t[t.ELEMENT_NODE = 1] = "ELEMENT_NODE", t[t.ATTRIBUTE_NODE = 2] = "ATTRIBUTE_NODE", t[t.TEXT_NODE = 3] = "TEXT_NODE", t[t.CDATA_SECTION_NODE = 4] = "CDATA_SECTION_NODE", t[t.ENTITY_REFERENCE_NODE = 5] = "ENTITY_REFERENCE_NODE", t[t.ENTITY_NODE = 6] = "ENTITY_NODE", t[t.PROCESSING_INSTRUCTION_NODE = 7] = "PROCESSING_INSTRUCTION_NODE", t[t.COMMENT_NODE = 8] = "COMMENT_NODE", t[t.DOCUMENT_NODE = 9] = "DOCUMENT_NODE", t[t.DOCUMENT_TYPE_NODE = 10] = "DOCUMENT_TYPE_NODE", t[t.DOCUMENT_FRAGMENT_NODE = 11] = "DOCUMENT_FRAGMENT_NODE";
  })(oe || (oe = {}));
  const bn = { svg: "http://www.w3.org/2000/svg", "xlink:href": "http://www.w3.org/1999/xlink", xmlns: "http://www.w3.org/2000/xmlns/" }, la = { altglyph: "altGlyph", altglyphdef: "altGlyphDef", altglyphitem: "altGlyphItem", animatecolor: "animateColor", animatemotion: "animateMotion", animatetransform: "animateTransform", clippath: "clipPath", feblend: "feBlend", fecolormatrix: "feColorMatrix", fecomponenttransfer: "feComponentTransfer", fecomposite: "feComposite", feconvolvematrix: "feConvolveMatrix", fediffuselighting: "feDiffuseLighting", fedisplacementmap: "feDisplacementMap", fedistantlight: "feDistantLight", fedropshadow: "feDropShadow", feflood: "feFlood", fefunca: "feFuncA", fefuncb: "feFuncB", fefuncg: "feFuncG", fefuncr: "feFuncR", fegaussianblur: "feGaussianBlur", feimage: "feImage", femerge: "feMerge", femergenode: "feMergeNode", femorphology: "feMorphology", feoffset: "feOffset", fepointlight: "fePointLight", fespecularlighting: "feSpecularLighting", fespotlight: "feSpotLight", fetile: "feTile", feturbulence: "feTurbulence", foreignobject: "foreignObject", glyphref: "glyphRef", lineargradient: "linearGradient", radialgradient: "radialGradient" };
  function ke(t, e, n, r) {
    const i = t.childNodes, o = e.childNodes;
    r = r || e.mirror || e.ownerDocument.mirror, (i.length > 0 || o.length > 0) && fr(Array.from(i), o, t, n, r);
    let s = null, a = null;
    switch (e.RRNodeType) {
      case Z.Document:
        a = e.scrollData;
        break;
      case Z.Element: {
        const l = t, c = e;
        switch (function(d, u, p) {
          const m = d.attributes, h = u.attributes;
          for (const g in h) {
            const C = h[g], f = p.getMeta(u);
            if (f && "isSVG" in f && f.isSVG && bn[g])
              d.setAttributeNS(bn[g], g, C);
            else if (u.tagName === "CANVAS" && g === "rr_dataURL") {
              const y = document.createElement("img");
              y.src = C, y.onload = () => {
                const v = d.getContext("2d");
                v && v.drawImage(y, 0, 0, y.width, y.height);
              };
            } else
              d.setAttribute(g, C);
          }
          for (const { name: g } of Array.from(m))
            g in h || d.removeAttribute(g);
          u.scrollLeft && (d.scrollLeft = u.scrollLeft), u.scrollTop && (d.scrollTop = u.scrollTop);
        }(l, c, r), a = c.scrollData, s = c.inputData, c.tagName) {
          case "AUDIO":
          case "VIDEO": {
            const d = t, u = c;
            u.paused !== void 0 && (u.paused ? d.pause() : d.play()), u.muted !== void 0 && (d.muted = u.muted), u.volume !== void 0 && (d.volume = u.volume), u.currentTime !== void 0 && (d.currentTime = u.currentTime), u.playbackRate !== void 0 && (d.playbackRate = u.playbackRate);
            break;
          }
          case "CANVAS":
            {
              const d = e;
              if (d.rr_dataURL !== null) {
                const u = document.createElement("img");
                u.onload = () => {
                  const p = l.getContext("2d");
                  p && p.drawImage(u, 0, 0, u.width, u.height);
                }, u.src = d.rr_dataURL;
              }
              d.canvasMutations.forEach((u) => n.applyCanvas(u.event, u.mutation, t));
            }
            break;
          case "STYLE": {
            const d = l.sheet;
            d && e.rules.forEach((u) => n.applyStyleSheetMutation(u, d));
          }
        }
        if (c.shadowRoot) {
          l.shadowRoot || l.attachShadow({ mode: "open" });
          const d = l.shadowRoot.childNodes, u = c.shadowRoot.childNodes;
          (d.length > 0 || u.length > 0) && fr(Array.from(d), u, l.shadowRoot, n, r);
        }
        break;
      }
      case Z.Text:
      case Z.Comment:
      case Z.CDATA:
        t.textContent !== e.data && (t.textContent = e.data);
    }
    if (a && n.applyScroll(a, !0), s && n.applyInput(s), e.nodeName === "IFRAME") {
      const l = t.contentDocument, c = e;
      if (l) {
        const d = r.getMeta(c.contentDocument);
        d && n.mirror.add(l, Object.assign({}, d)), ke(l, c.contentDocument, n, r);
      }
    }
  }
  function fr(t, e, n, r, i) {
    var o;
    let s, a, l = 0, c = t.length - 1, d = 0, u = e.length - 1, p = t[l], m = t[c], h = e[d], g = e[u];
    for (; l <= c && d <= u; ) {
      const C = r.mirror.getId(p), f = r.mirror.getId(m), y = i.getId(h), v = i.getId(g);
      if (p === void 0)
        p = t[++l];
      else if (m === void 0)
        m = t[--c];
      else if (C !== -1 && C === y)
        ke(p, h, r, i), p = t[++l], h = e[++d];
      else if (f !== -1 && f === v)
        ke(m, g, r, i), m = t[--c], g = e[--u];
      else if (C !== -1 && C === v)
        n.insertBefore(p, m.nextSibling), ke(p, g, r, i), p = t[++l], g = e[--u];
      else if (f !== -1 && f === y)
        n.insertBefore(m, p), ke(m, h, r, i), m = t[--c], h = e[++d];
      else {
        if (!s) {
          s = {};
          for (let A = l; A <= c; A++) {
            const L = t[A];
            L && r.mirror.hasNode(L) && (s[r.mirror.getId(L)] = A);
          }
        }
        if (a = s[i.getId(h)], a) {
          const A = t[a];
          n.insertBefore(A, p), ke(A, h, r, i), t[a] = void 0;
        } else {
          const A = Sn(h, r.mirror, i);
          n.nodeName === "#document" && ((o = r.mirror.getMeta(A)) === null || o === void 0 ? void 0 : o.type) === Z.Element && n.documentElement && (n.removeChild(n.documentElement), t[l] = void 0, p = void 0), n.insertBefore(A, p || null), ke(A, h, r, i);
        }
        h = e[++d];
      }
    }
    if (l > c) {
      const C = e[u + 1];
      let f = null;
      for (C && n.childNodes.forEach((y) => {
        r.mirror.getId(y) === i.getId(C) && (f = y);
      }); d <= u; ++d) {
        const y = Sn(e[d], r.mirror, i);
        n.insertBefore(y, f), ke(y, e[d], r, i);
      }
    } else if (d > u)
      for (; l <= c; l++) {
        const C = t[l];
        C && (n.removeChild(C), r.mirror.removeNodeFromMap(C));
      }
  }
  function Sn(t, e, n) {
    const r = n.getId(t), i = n.getMeta(t);
    let o = null;
    if (r > -1 && (o = e.getNode(r)), o !== null)
      return o;
    switch (t.RRNodeType) {
      case Z.Document:
        o = new Document();
        break;
      case Z.DocumentType:
        o = document.implementation.createDocumentType(t.name, t.publicId, t.systemId);
        break;
      case Z.Element: {
        let s = t.tagName.toLowerCase();
        s = la[s] || s, o = i && "isSVG" in i && (i != null && i.isSVG) ? document.createElementNS(bn.svg, s) : document.createElement(t.tagName);
        break;
      }
      case Z.Text:
        o = document.createTextNode(t.data);
        break;
      case Z.Comment:
        o = document.createComment(t.data);
        break;
      case Z.CDATA:
        o = document.createCDATASection(t.data);
    }
    return i && e.add(o, Object.assign({}, i)), o;
  }
  class at extends function(e) {
    return class Di extends e {
      constructor() {
        super(...arguments), this.nodeType = oe.DOCUMENT_NODE, this.nodeName = "#document", this.compatMode = "CSS1Compat", this.RRNodeType = Z.Document, this.textContent = null;
      }
      get documentElement() {
        return this.childNodes.find((r) => r.RRNodeType === Z.Element && r.tagName === "HTML") || null;
      }
      get body() {
        var r;
        return ((r = this.documentElement) === null || r === void 0 ? void 0 : r.childNodes.find((i) => i.RRNodeType === Z.Element && i.tagName === "BODY")) || null;
      }
      get head() {
        var r;
        return ((r = this.documentElement) === null || r === void 0 ? void 0 : r.childNodes.find((i) => i.RRNodeType === Z.Element && i.tagName === "HEAD")) || null;
      }
      get implementation() {
        return this;
      }
      get firstElementChild() {
        return this.documentElement;
      }
      appendChild(r) {
        const i = r.RRNodeType;
        if ((i === Z.Element || i === Z.DocumentType) && this.childNodes.some((o) => o.RRNodeType === i))
          throw new Error(`RRDomException: Failed to execute 'appendChild' on 'RRNode': Only one ${i === Z.Element ? "RRElement" : "RRDoctype"} on RRDocument allowed.`);
        return r.parentElement = null, r.parentNode = this, this.childNodes.push(r), r;
      }
      insertBefore(r, i) {
        const o = r.RRNodeType;
        if ((o === Z.Element || o === Z.DocumentType) && this.childNodes.some((a) => a.RRNodeType === o))
          throw new Error(`RRDomException: Failed to execute 'insertBefore' on 'RRNode': Only one ${o === Z.Element ? "RRElement" : "RRDoctype"} on RRDocument allowed.`);
        if (i === null)
          return this.appendChild(r);
        const s = this.childNodes.indexOf(i);
        if (s == -1)
          throw new Error("Failed to execute 'insertBefore' on 'RRNode': The RRNode before which the new node is to be inserted is not a child of this RRNode.");
        return this.childNodes.splice(s, 0, r), r.parentElement = null, r.parentNode = this, r;
      }
      removeChild(r) {
        const i = this.childNodes.indexOf(r);
        if (i === -1)
          throw new Error("Failed to execute 'removeChild' on 'RRDocument': The RRNode to be removed is not a child of this RRNode.");
        return this.childNodes.splice(i, 1), r.parentElement = null, r.parentNode = null, r;
      }
      open() {
        this.childNodes = [];
      }
      close() {
      }
      write(r) {
        let i;
        if (r === '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">' ? i = "-//W3C//DTD XHTML 1.0 Transitional//EN" : r === '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">' && (i = "-//W3C//DTD HTML 4.0 Transitional//EN"), i) {
          const o = this.createDocumentType("html", i, "");
          this.open(), this.appendChild(o);
        }
      }
      createDocument(r, i, o) {
        return new Di();
      }
      createDocumentType(r, i, o) {
        const s = new (Ei(Ee))(r, i, o);
        return s.ownerDocument = this, s;
      }
      createElement(r) {
        const i = new (Ni(Ee))(r);
        return i.ownerDocument = this, i;
      }
      createElementNS(r, i) {
        return this.createElement(i);
      }
      createTextNode(r) {
        const i = new (ki(Ee))(r);
        return i.ownerDocument = this, i;
      }
      createComment(r) {
        const i = new (Ri(Ee))(r);
        return i.ownerDocument = this, i;
      }
      createCDATASection(r) {
        const i = new (Mi(Ee))(r);
        return i.ownerDocument = this, i;
      }
      toString() {
        return "RRDocument";
      }
    };
  }(Ee) {
    constructor(e) {
      super(), this.UNSERIALIZED_STARTING_ID = -2, this._unserializedId = this.UNSERIALIZED_STARTING_ID, this.mirror = new Ca(), this.scrollData = null, e && (this.mirror = e);
    }
    get unserializedId() {
      return this._unserializedId--;
    }
    createDocument(e, n, r) {
      return new at();
    }
    createDocumentType(e, n, r) {
      const i = new ca(e, n, r);
      return i.ownerDocument = this, i;
    }
    createElement(e) {
      const n = e.toUpperCase();
      let r;
      switch (n) {
        case "AUDIO":
        case "VIDEO":
          r = new da(n);
          break;
        case "IFRAME":
          r = new pa(n, this.mirror);
          break;
        case "CANVAS":
          r = new ua(n);
          break;
        case "STYLE":
          r = new ha(n);
          break;
        default:
          r = new Et(n);
      }
      return r.ownerDocument = this, r;
    }
    createComment(e) {
      const n = new ma(e);
      return n.ownerDocument = this, n;
    }
    createCDATASection(e) {
      const n = new fa(e);
      return n.ownerDocument = this, n;
    }
    createTextNode(e) {
      const n = new ga(e);
      return n.ownerDocument = this, n;
    }
    destroyTree() {
      this.childNodes = [], this.mirror.reset();
    }
    open() {
      super.open(), this._unserializedId = this.UNSERIALIZED_STARTING_ID;
    }
  }
  const ca = Ei(Ee);
  class Et extends Ni(Ee) {
    constructor() {
      super(...arguments), this.inputData = null, this.scrollData = null;
    }
  }
  class da extends function(e) {
    return class extends e {
      attachShadow(n) {
        throw new Error("RRDomException: Failed to execute 'attachShadow' on 'RRElement': This RRElement does not support attachShadow");
      }
      play() {
        this.paused = !1;
      }
      pause() {
        this.paused = !0;
      }
    };
  }(Et) {
  }
  class ua extends Et {
    constructor() {
      super(...arguments), this.rr_dataURL = null, this.canvasMutations = [];
    }
    getContext() {
      return null;
    }
  }
  class ha extends Et {
    constructor() {
      super(...arguments), this.rules = [];
    }
  }
  class pa extends Et {
    constructor(e, n) {
      super(e), this.contentDocument = new at(), this.contentDocument.mirror = n;
    }
  }
  const ga = ki(Ee), ma = Ri(Ee), fa = Mi(Ee);
  function Fi(t, e, n, r) {
    let i;
    switch (t.nodeType) {
      case oe.DOCUMENT_NODE:
        r && r.nodeName === "IFRAME" ? i = r.contentDocument : (i = e, i.compatMode = t.compatMode);
        break;
      case oe.DOCUMENT_TYPE_NODE: {
        const s = t;
        i = e.createDocumentType(s.name, s.publicId, s.systemId);
        break;
      }
      case oe.ELEMENT_NODE: {
        const s = t, a = function(c) {
          return c instanceof HTMLFormElement ? "FORM" : c.tagName.toUpperCase();
        }(s);
        i = e.createElement(a);
        const l = i;
        for (const { name: c, value: d } of Array.from(s.attributes))
          l.attributes[c] = d;
        s.scrollLeft && (l.scrollLeft = s.scrollLeft), s.scrollTop && (l.scrollTop = s.scrollTop);
        break;
      }
      case oe.TEXT_NODE:
        i = e.createTextNode(t.textContent || "");
        break;
      case oe.CDATA_SECTION_NODE:
        i = e.createCDATASection(t.data);
        break;
      case oe.COMMENT_NODE:
        i = e.createComment(t.textContent || "");
        break;
      case oe.DOCUMENT_FRAGMENT_NODE:
        i = r.attachShadow({ mode: "open" });
        break;
      default:
        return null;
    }
    let o = n.getMeta(t);
    return e instanceof at && (o || (o = Li(i, e.unserializedId), n.add(t, o)), e.mirror.add(i, Object.assign({}, o))), i;
  }
  function ya(t, e = function() {
    return new na();
  }(), n = new at()) {
    return function r(i, o) {
      const s = Fi(i, n, e, o);
      if (s !== null)
        if ((o == null ? void 0 : o.nodeName) !== "IFRAME" && i.nodeType !== oe.DOCUMENT_FRAGMENT_NODE && (o == null || o.appendChild(s), s.parentNode = o, s.parentElement = o), i.nodeName === "IFRAME") {
          const a = i.contentDocument;
          a && r(a, s);
        } else
          i.nodeType !== oe.DOCUMENT_NODE && i.nodeType !== oe.ELEMENT_NODE && i.nodeType !== oe.DOCUMENT_FRAGMENT_NODE || (i.nodeType === oe.ELEMENT_NODE && i.shadowRoot && r(i.shadowRoot, s), i.childNodes.forEach((a) => r(a, s)));
    }(t, null), n;
  }
  class Ca {
    constructor() {
      this.idNodeMap = /* @__PURE__ */ new Map(), this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
    }
    getId(e) {
      var n;
      if (!e)
        return -1;
      const r = (n = this.getMeta(e)) === null || n === void 0 ? void 0 : n.id;
      return r ?? -1;
    }
    getNode(e) {
      return this.idNodeMap.get(e) || null;
    }
    getIds() {
      return Array.from(this.idNodeMap.keys());
    }
    getMeta(e) {
      return this.nodeMetaMap.get(e) || null;
    }
    removeNodeFromMap(e) {
      const n = this.getId(e);
      this.idNodeMap.delete(n), e.childNodes && e.childNodes.forEach((r) => this.removeNodeFromMap(r));
    }
    has(e) {
      return this.idNodeMap.has(e);
    }
    hasNode(e) {
      return this.nodeMetaMap.has(e);
    }
    add(e, n) {
      const r = n.id;
      this.idNodeMap.set(r, e), this.nodeMetaMap.set(e, n);
    }
    replace(e, n) {
      const r = this.getNode(e);
      if (r) {
        const i = this.nodeMetaMap.get(r);
        i && this.nodeMetaMap.set(n, i);
      }
      this.idNodeMap.set(e, n);
    }
    reset() {
      this.idNodeMap = /* @__PURE__ */ new Map(), this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
    }
  }
  function Li(t, e) {
    switch (t.RRNodeType) {
      case Z.Document:
        return { id: e, type: t.RRNodeType, childNodes: [] };
      case Z.DocumentType: {
        const n = t;
        return { id: e, type: t.RRNodeType, name: n.name, publicId: n.publicId, systemId: n.systemId };
      }
      case Z.Element:
        return { id: e, type: t.RRNodeType, tagName: t.tagName.toLowerCase(), attributes: {}, childNodes: [] };
      case Z.Text:
      case Z.Comment:
        return { id: e, type: t.RRNodeType, textContent: t.textContent || "" };
      case Z.CDATA:
        return { id: e, type: t.RRNodeType, textContent: "" };
    }
  }
  var be = Uint8Array, Oe = Uint16Array, An = Uint32Array, Wi = new be([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), Oi = new be([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), Ia = new be([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), xi = function(t, e) {
    for (var n = new Oe(31), r = 0; r < 31; ++r)
      n[r] = e += 1 << t[r - 1];
    var i = new An(n[30]);
    for (r = 1; r < 30; ++r)
      for (var o = n[r]; o < n[r + 1]; ++o)
        i[o] = o - n[r] << 5 | r;
    return [n, i];
  }, Pi = xi(Wi, 2), Bi = Pi[0], va = Pi[1];
  Bi[28] = 258, va[258] = 28;
  for (var wa = xi(Oi, 0)[0], Tn = new Oe(32768), ie = 0; ie < 32768; ++ie) {
    var Be = (43690 & ie) >>> 1 | (21845 & ie) << 1;
    Be = (61680 & (Be = (52428 & Be) >>> 2 | (13107 & Be) << 2)) >>> 4 | (3855 & Be) << 4, Tn[ie] = ((65280 & Be) >>> 8 | (255 & Be) << 8) >>> 1;
  }
  var vt = function(t, e, n) {
    for (var r = t.length, i = 0, o = new Oe(e); i < r; ++i)
      ++o[t[i] - 1];
    var s, a = new Oe(e);
    for (i = 0; i < e; ++i)
      a[i] = a[i - 1] + o[i - 1] << 1;
    if (n) {
      s = new Oe(1 << e);
      var l = 15 - e;
      for (i = 0; i < r; ++i)
        if (t[i])
          for (var c = i << 4 | t[i], d = e - t[i], u = a[t[i] - 1]++ << d, p = u | (1 << d) - 1; u <= p; ++u)
            s[Tn[u] >>> l] = c;
    } else
      for (s = new Oe(r), i = 0; i < r; ++i)
        s[i] = Tn[a[t[i] - 1]++] >>> 15 - t[i];
    return s;
  }, Nt = new be(288);
  for (ie = 0; ie < 144; ++ie)
    Nt[ie] = 8;
  for (ie = 144; ie < 256; ++ie)
    Nt[ie] = 9;
  for (ie = 256; ie < 280; ++ie)
    Nt[ie] = 7;
  for (ie = 280; ie < 288; ++ie)
    Nt[ie] = 8;
  var Vi = new be(32);
  for (ie = 0; ie < 32; ++ie)
    Vi[ie] = 5;
  var ba = vt(Nt, 9, 1), Sa = vt(Vi, 5, 1), dn = function(t) {
    for (var e = t[0], n = 1; n < t.length; ++n)
      t[n] > e && (e = t[n]);
    return e;
  }, Ae = function(t, e, n) {
    var r = e / 8 >> 0;
    return (t[r] | t[r + 1] << 8) >>> (7 & e) & n;
  }, un = function(t, e) {
    var n = e / 8 >> 0;
    return (t[n] | t[n + 1] << 8 | t[n + 2] << 16) >>> (7 & e);
  }, _i = function(t, e, n) {
    (e == null || e < 0) && (e = 0), (n == null || n > t.length) && (n = t.length);
    var r = new (t instanceof Oe ? Oe : t instanceof An ? An : be)(n - e);
    return r.set(t.subarray(e, n)), r;
  };
  function Aa(t, e) {
    return function(n, r, i) {
      var o = n.length, s = !r || i, a = !i || i.i;
      i || (i = {}), r || (r = new be(3 * o));
      var l, c = function(K) {
        var pe = r.length;
        if (K > pe) {
          var Y = new be(Math.max(2 * pe, K));
          Y.set(r), r = Y;
        }
      }, d = i.f || 0, u = i.p || 0, p = i.b || 0, m = i.l, h = i.d, g = i.m, C = i.n, f = 8 * o;
      do {
        if (!m) {
          i.f = d = Ae(n, u, 1);
          var y = Ae(n, u + 1, 3);
          if (u += 3, !y) {
            var v = n[(N = ((l = u) / 8 >> 0) + (7 & l && 1) + 4) - 4] | n[N - 3] << 8, A = N + v;
            if (A > o) {
              if (a)
                throw "unexpected EOF";
              break;
            }
            s && c(p + v), r.set(n.subarray(N, A), p), i.b = p += v, i.p = u = 8 * A;
            continue;
          }
          if (y == 1)
            m = ba, h = Sa, g = 9, C = 5;
          else {
            if (y != 2)
              throw "invalid block type";
            var L = Ae(n, u, 31) + 257, x = Ae(n, u + 10, 15) + 4, P = L + Ae(n, u + 5, 31) + 1;
            u += 14;
            for (var D = new be(P), w = new be(19), T = 0; T < x; ++T)
              w[Ia[T]] = Ae(n, u + 3 * T, 7);
            u += 3 * x;
            var I = dn(w), b = (1 << I) - 1;
            if (!a && u + P * (I + 7) > f)
              break;
            var R = vt(w, I, 1);
            for (T = 0; T < P; ) {
              var N, V = R[Ae(n, u, b)];
              if (u += 15 & V, (N = V >>> 4) < 16)
                D[T++] = N;
              else {
                var O = 0, S = 0;
                for (N == 16 ? (S = 3 + Ae(n, u, 3), u += 2, O = D[T - 1]) : N == 17 ? (S = 3 + Ae(n, u, 7), u += 3) : N == 18 && (S = 11 + Ae(n, u, 127), u += 7); S--; )
                  D[T++] = O;
              }
            }
            var _ = D.subarray(0, L), W = D.subarray(L);
            g = dn(_), C = dn(W), m = vt(_, g, 1), h = vt(W, C, 1);
          }
          if (u > f)
            throw "unexpected EOF";
        }
        s && c(p + 131072);
        for (var G = (1 << g) - 1, X = (1 << C) - 1, j = g + C + 18; a || u + j < f; ) {
          var z = (O = m[un(n, u) & G]) >>> 4;
          if ((u += 15 & O) > f)
            throw "unexpected EOF";
          if (!O)
            throw "invalid length/literal";
          if (z < 256)
            r[p++] = z;
          else {
            if (z == 256) {
              m = null;
              break;
            }
            var E = z - 254;
            if (z > 264) {
              var U = Wi[T = z - 257];
              E = Ae(n, u, (1 << U) - 1) + Bi[T], u += U;
            }
            var k = h[un(n, u) & X], te = k >>> 4;
            if (!k)
              throw "invalid distance";
            if (u += 15 & k, W = wa[te], te > 3 && (U = Oi[te], W += un(n, u) & (1 << U) - 1, u += U), u > f)
              throw "unexpected EOF";
            s && c(p + 131072);
            for (var F = p + E; p < F; p += 4)
              r[p] = r[p - W], r[p + 1] = r[p + 1 - W], r[p + 2] = r[p + 2 - W], r[p + 3] = r[p + 3 - W];
            p = F;
          }
        }
        i.l = m, i.p = u, i.b = p, m && (d = 1, i.m = g, i.d = h, i.n = C);
      } while (!d);
      return p == r.length ? r : _i(r, 0, p);
    }((function(n) {
      if ((15 & n[0]) != 8 || n[0] >>> 4 > 7 || (n[0] << 8 | n[1]) % 31)
        throw "invalid zlib data";
      if (32 & n[1])
        throw "invalid zlib data: preset dictionaries not supported";
    }(t), t.subarray(2, -4)), e);
  }
  const Ta = (t) => {
    if (typeof t != "string")
      return t;
    try {
      const e = JSON.parse(t);
      if (e.timestamp)
        return e;
    } catch {
    }
    try {
      const e = JSON.parse(function(n, r) {
        var i = "";
        if (!r && typeof TextDecoder < "u")
          return new TextDecoder().decode(n);
        for (var o = 0; o < n.length; ) {
          var s = n[o++];
          s < 128 || r ? i += String.fromCharCode(s) : s < 224 ? i += String.fromCharCode((31 & s) << 6 | 63 & n[o++]) : s < 240 ? i += String.fromCharCode((15 & s) << 12 | (63 & n[o++]) << 6 | 63 & n[o++]) : (s = ((15 & s) << 18 | (63 & n[o++]) << 12 | (63 & n[o++]) << 6 | 63 & n[o++]) - 65536, i += String.fromCharCode(55296 | s >> 10, 56320 | 1023 & s));
        }
        return i;
      }(Aa(function(n, r) {
        var i = n.length;
        if (!r && typeof TextEncoder < "u")
          return new TextEncoder().encode(n);
        for (var o = new be(n.length + (n.length >>> 1)), s = 0, a = function(u) {
          o[s++] = u;
        }, l = 0; l < i; ++l) {
          if (s + 5 > o.length) {
            var c = new be(s + 8 + (i - l << 1));
            c.set(o), o = c;
          }
          var d = n.charCodeAt(l);
          d < 128 || r ? a(d) : d < 2048 ? (a(192 | d >>> 6), a(128 | 63 & d)) : d > 55295 && d < 57344 ? (a(240 | (d = 65536 + (1047552 & d) | 1023 & n.charCodeAt(++l)) >>> 18), a(128 | d >>> 12 & 63), a(128 | d >>> 6 & 63), a(128 | 63 & d)) : (a(224 | d >>> 12), a(128 | d >>> 6 & 63), a(128 | 63 & d));
        }
        return _i(o, 0, s);
      }(t, !0))));
      if (e.v === "v1")
        return e;
      throw new Error(`These events were packed with packer ${e.v} which is incompatible with current packer v1.`);
    } catch (e) {
      throw console.error(e), new Error("Unknown data format.");
    }
  };
  function Ui(t) {
    return { all: t = t || /* @__PURE__ */ new Map(), on: function(e, n) {
      var r = t.get(e);
      r ? r.push(n) : t.set(e, [n]);
    }, off: function(e, n) {
      var r = t.get(e);
      r && (n ? r.splice(r.indexOf(n) >>> 0, 1) : t.set(e, []));
    }, emit: function(e, n) {
      var r = t.get(e);
      r && r.slice().map(function(i) {
        i(n);
      }), (r = t.get("*")) && r.slice().map(function(i) {
        i(e, n);
      });
    } };
  }
  var tt, Ea = Object.freeze({ __proto__: null, default: Ui });
  function Na(t = window, e = document) {
    if ("scrollBehavior" in e.documentElement.style && t.__forceSmoothScrollPolyfill__ !== !0)
      return;
    const n = t.HTMLElement || t.Element, r = { scroll: t.scroll || t.scrollTo, scrollBy: t.scrollBy, elementScroll: n.prototype.scroll || a, scrollIntoView: n.prototype.scrollIntoView }, i = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now, o = (s = t.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(s) ? 1 : 0);
    var s;
    function a(g, C) {
      this.scrollLeft = g, this.scrollTop = C;
    }
    function l(g) {
      if (g === null || typeof g != "object" || g.behavior === void 0 || g.behavior === "auto" || g.behavior === "instant")
        return !0;
      if (typeof g == "object" && g.behavior === "smooth")
        return !1;
      throw new TypeError("behavior member of ScrollOptions " + g.behavior + " is not a valid value for enumeration ScrollBehavior.");
    }
    function c(g, C) {
      return C === "Y" ? g.clientHeight + o < g.scrollHeight : C === "X" ? g.clientWidth + o < g.scrollWidth : void 0;
    }
    function d(g, C) {
      const f = t.getComputedStyle(g, null)["overflow" + C];
      return f === "auto" || f === "scroll";
    }
    function u(g) {
      const C = c(g, "Y") && d(g, "Y"), f = c(g, "X") && d(g, "X");
      return C || f;
    }
    function p(g) {
      for (; g !== e.body && u(g) === !1; )
        g = g.parentNode || g.host;
      return g;
    }
    function m(g) {
      let C, f, y, v = (i() - g.startTime) / 468;
      var A;
      v = v > 1 ? 1 : v, A = v, C = 0.5 * (1 - Math.cos(Math.PI * A)), f = g.startX + (g.x - g.startX) * C, y = g.startY + (g.y - g.startY) * C, g.method.call(g.scrollable, f, y), f === g.x && y === g.y || t.requestAnimationFrame(m.bind(t, g));
    }
    function h(g, C, f) {
      let y, v, A, L;
      const x = i();
      g === e.body ? (y = t, v = t.scrollX || t.pageXOffset, A = t.scrollY || t.pageYOffset, L = r.scroll) : (y = g, v = g.scrollLeft, A = g.scrollTop, L = a), m({ scrollable: y, method: L, startTime: x, startX: v, startY: A, x: C, y: f });
    }
    t.scroll = t.scrollTo = function() {
      arguments[0] !== void 0 && (l(arguments[0]) !== !0 ? h.call(t, e.body, arguments[0].left !== void 0 ? ~~arguments[0].left : t.scrollX || t.pageXOffset, arguments[0].top !== void 0 ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : r.scroll.call(t, arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] != "object" ? arguments[0] : t.scrollX || t.pageXOffset, arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : t.scrollY || t.pageYOffset));
    }, t.scrollBy = function() {
      arguments[0] !== void 0 && (l(arguments[0]) ? r.scrollBy.call(t, arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] != "object" ? arguments[0] : 0, arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : 0) : h.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)));
    }, n.prototype.scroll = n.prototype.scrollTo = function() {
      if (arguments[0] === void 0)
        return;
      if (l(arguments[0]) === !0) {
        if (typeof arguments[0] == "number" && arguments[1] === void 0)
          throw new SyntaxError("Value could not be converted");
        return void r.elementScroll.call(this, arguments[0].left !== void 0 ? ~~arguments[0].left : typeof arguments[0] != "object" ? ~~arguments[0] : this.scrollLeft, arguments[0].top !== void 0 ? ~~arguments[0].top : arguments[1] !== void 0 ? ~~arguments[1] : this.scrollTop);
      }
      const g = arguments[0].left, C = arguments[0].top;
      h.call(this, this, g === void 0 ? this.scrollLeft : ~~g, C === void 0 ? this.scrollTop : ~~C);
    }, n.prototype.scrollBy = function() {
      arguments[0] !== void 0 && (l(arguments[0]) !== !0 ? this.scroll({ left: ~~arguments[0].left + this.scrollLeft, top: ~~arguments[0].top + this.scrollTop, behavior: arguments[0].behavior }) : r.elementScroll.call(this, arguments[0].left !== void 0 ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== void 0 ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop));
    }, n.prototype.scrollIntoView = function() {
      if (l(arguments[0]) === !0)
        return void r.scrollIntoView.call(this, arguments[0] === void 0 || arguments[0]);
      const g = p(this), C = g.getBoundingClientRect(), f = this.getBoundingClientRect();
      g !== e.body ? (h.call(this, g, g.scrollLeft + f.left - C.left, g.scrollTop + f.top - C.top), t.getComputedStyle(g).position !== "fixed" && t.scrollBy({ left: C.left, top: C.top, behavior: "smooth" })) : t.scrollBy({ left: f.left, top: f.top, behavior: "smooth" });
    };
  }
  class ka {
    constructor(e = [], n) {
      this.timeOffset = 0, this.raf = null, this.actions = e, this.speed = n.speed, this.liveMode = n.liveMode;
    }
    addAction(e) {
      if (!this.actions.length || this.actions[this.actions.length - 1].delay <= e.delay)
        return void this.actions.push(e);
      const n = this.findActionIndex(e);
      this.actions.splice(n, 0, e);
    }
    start() {
      this.timeOffset = 0;
      let e = performance.now();
      const n = () => {
        const r = performance.now();
        for (this.timeOffset += (r - e) * this.speed, e = r; this.actions.length; ) {
          const i = this.actions[0];
          if (!(this.timeOffset >= i.delay))
            break;
          this.actions.shift(), i.doAction();
        }
        (this.actions.length > 0 || this.liveMode) && (this.raf = requestAnimationFrame(n));
      };
      this.raf = requestAnimationFrame(n);
    }
    clear() {
      this.raf && (cancelAnimationFrame(this.raf), this.raf = null), this.actions.length = 0;
    }
    setSpeed(e) {
      this.speed = e;
    }
    toggleLiveMode(e) {
      this.liveMode = e;
    }
    isActive() {
      return this.raf !== null;
    }
    findActionIndex(e) {
      let n = 0, r = this.actions.length - 1;
      for (; n <= r; ) {
        const i = Math.floor((n + r) / 2);
        if (this.actions[i].delay < e.delay)
          n = i + 1;
        else {
          if (!(this.actions[i].delay > e.delay))
            return i + 1;
          r = i - 1;
        }
      }
      return n;
    }
  }
  function yr(t, e) {
    if (t.type === re.IncrementalSnapshot && t.data.source === H.MouseMove && t.data.positions && t.data.positions.length) {
      const n = t.data.positions[0].timeOffset, r = t.timestamp + n;
      return t.delay = r - e, r - e;
    }
    return t.delay = t.timestamp - e, t.delay;
  }
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  function Cr(t, e) {
    var n = typeof Symbol == "function" && t[Symbol.iterator];
    if (!n)
      return t;
    var r, i, o = n.call(t), s = [];
    try {
      for (; (e === void 0 || e-- > 0) && !(r = o.next()).done; )
        s.push(r.value);
    } catch (a) {
      i = { error: a };
    } finally {
      try {
        r && !r.done && (n = o.return) && n.call(o);
      } finally {
        if (i)
          throw i.error;
      }
    }
    return s;
  }
  (function(t) {
    t[t.NotStarted = 0] = "NotStarted", t[t.Running = 1] = "Running", t[t.Stopped = 2] = "Stopped";
  })(tt || (tt = {}));
  var Gi = { type: "xstate.init" };
  function hn(t) {
    return t === void 0 ? [] : [].concat(t);
  }
  function je(t) {
    return { type: "xstate.assign", assignment: t };
  }
  function Ir(t, e) {
    return typeof (t = typeof t == "string" && e && e[t] ? e[t] : t) == "string" ? { type: t } : typeof t == "function" ? { type: t.name, exec: t } : t;
  }
  function Qt(t) {
    return function(e) {
      return t === e;
    };
  }
  function Zi(t) {
    return typeof t == "string" ? { type: t } : t;
  }
  function vr(t, e) {
    return { value: t, context: e, actions: [], changed: !1, matches: Qt(t) };
  }
  function wr(t, e, n) {
    var r = e, i = !1;
    return [t.filter(function(o) {
      if (o.type === "xstate.assign") {
        i = !0;
        var s = Object.assign({}, r);
        return typeof o.assignment == "function" ? s = o.assignment(r, n) : Object.keys(o.assignment).forEach(function(a) {
          s[a] = typeof o.assignment[a] == "function" ? o.assignment[a](r, n) : o.assignment[a];
        }), r = s, !1;
      }
      return !0;
    }), r, i];
  }
  function Ki(t, e) {
    e === void 0 && (e = {});
    var n = Cr(wr(hn(t.states[t.initial].entry).map(function(s) {
      return Ir(s, e.actions);
    }), t.context, Gi), 2), r = n[0], i = n[1], o = { config: t, _options: e, initialState: { value: t.initial, actions: r, context: i, matches: Qt(t.initial) }, transition: function(s, a) {
      var l, c, d = typeof s == "string" ? { value: s, context: t.context } : s, u = d.value, p = d.context, m = Zi(a), h = t.states[u];
      if (h.on) {
        var g = hn(h.on[m.type]);
        try {
          for (var C = function(S) {
            var _ = typeof Symbol == "function" && Symbol.iterator, W = _ && S[_], G = 0;
            if (W)
              return W.call(S);
            if (S && typeof S.length == "number")
              return { next: function() {
                return S && G >= S.length && (S = void 0), { value: S && S[G++], done: !S };
              } };
            throw new TypeError(_ ? "Object is not iterable." : "Symbol.iterator is not defined.");
          }(g), f = C.next(); !f.done; f = C.next()) {
            var y = f.value;
            if (y === void 0)
              return vr(u, p);
            var v = typeof y == "string" ? { target: y } : y, A = v.target, L = v.actions, x = L === void 0 ? [] : L, P = v.cond, D = P === void 0 ? function() {
              return !0;
            } : P, w = A === void 0, T = A ?? u, I = t.states[T];
            if (D(p, m)) {
              var b = Cr(wr((w ? hn(x) : [].concat(h.exit, x, I.entry).filter(function(S) {
                return S;
              })).map(function(S) {
                return Ir(S, o._options.actions);
              }), p, m), 3), R = b[0], N = b[1], V = b[2], O = A ?? u;
              return { value: O, context: N, actions: R, changed: A !== u || R.length > 0 || V, matches: Qt(O) };
            }
          }
        } catch (S) {
          l = { error: S };
        } finally {
          try {
            f && !f.done && (c = C.return) && c.call(C);
          } finally {
            if (l)
              throw l.error;
          }
        }
      }
      return vr(u, p);
    } };
    return o;
  }
  var br = function(t, e) {
    return t.actions.forEach(function(n) {
      var r = n.exec;
      return r && r(t.context, e);
    });
  };
  function $i(t) {
    var e = t.initialState, n = tt.NotStarted, r = /* @__PURE__ */ new Set(), i = { _machine: t, send: function(o) {
      n === tt.Running && (e = t.transition(e, o), br(e, Zi(o)), r.forEach(function(s) {
        return s(e);
      }));
    }, subscribe: function(o) {
      return r.add(o), o(e), { unsubscribe: function() {
        return r.delete(o);
      } };
    }, start: function(o) {
      if (o) {
        var s = typeof o == "object" ? o : { context: t.config.context, value: o };
        e = { value: s.value, actions: [], context: s.context, matches: Qt(s.value) };
      }
      return n = tt.Running, br(e, Gi), i;
    }, stop: function() {
      return n = tt.Stopped, r.clear(), i;
    }, get state() {
      return e;
    }, get status() {
      return n;
    } };
    return i;
  }
  function Ra(t, { getCastFn: e, applyEventsSynchronously: n, emitter: r }) {
    const i = Ki({ id: "player", context: t, initial: "paused", states: { playing: { on: { PAUSE: { target: "paused", actions: ["pause"] }, CAST_EVENT: { target: "playing", actions: "castEvent" }, END: { target: "paused", actions: ["resetLastPlayedEvent", "pause"] }, ADD_EVENT: { target: "playing", actions: ["addEvent"] } } }, paused: { on: { PLAY: { target: "playing", actions: ["recordTimeOffset", "play"] }, CAST_EVENT: { target: "paused", actions: "castEvent" }, TO_LIVE: { target: "live", actions: ["startLive"] }, ADD_EVENT: { target: "paused", actions: ["addEvent"] } } }, live: { on: { ADD_EVENT: { target: "live", actions: ["addEvent"] }, CAST_EVENT: { target: "live", actions: ["castEvent"] } } } } }, { actions: { castEvent: je({ lastPlayedEvent: (o, s) => s.type === "CAST_EVENT" ? s.payload.event : o.lastPlayedEvent }), recordTimeOffset: je((o, s) => {
      let a = o.timeOffset;
      return "payload" in s && "timeOffset" in s.payload && (a = s.payload.timeOffset), Object.assign(Object.assign({}, o), { timeOffset: a, baselineTime: o.events[0].timestamp + a });
    }), play(o) {
      var s;
      const { timer: a, events: l, baselineTime: c, lastPlayedEvent: d } = o;
      a.clear();
      for (const h of l)
        yr(h, c);
      const u = function(h, g) {
        for (let C = h.length - 1; C >= 0; C--) {
          const f = h[C];
          if (f.type === re.Meta && f.timestamp <= g)
            return h.slice(C);
        }
        return h;
      }(l, c);
      let p = d == null ? void 0 : d.timestamp;
      (d == null ? void 0 : d.type) === re.IncrementalSnapshot && d.data.source === H.MouseMove && (p = d.timestamp + ((s = d.data.positions[0]) === null || s === void 0 ? void 0 : s.timeOffset)), c < (p || 0) && r.emit(q.PlayBack);
      const m = new Array();
      for (const h of u)
        if (!(p && p < c && (h.timestamp <= p || h === d)))
          if (h.timestamp < c)
            m.push(h);
          else {
            const g = e(h, !1);
            a.addAction({ doAction: () => {
              g();
            }, delay: h.delay });
          }
      n(m), r.emit(q.Flush), a.start();
    }, pause(o) {
      o.timer.clear();
    }, resetLastPlayedEvent: je((o) => Object.assign(Object.assign({}, o), { lastPlayedEvent: null })), startLive: je({ baselineTime: (o, s) => (o.timer.toggleLiveMode(!0), o.timer.start(), s.type === "TO_LIVE" && s.payload.baselineTime ? s.payload.baselineTime : Date.now()) }), addEvent: je((o, s) => {
      const { baselineTime: a, timer: l, events: c } = o;
      if (s.type === "ADD_EVENT") {
        const { event: d } = s.payload;
        yr(d, a);
        let u = c.length - 1;
        if (!c[u] || c[u].timestamp <= d.timestamp)
          c.push(d);
        else {
          let h = -1, g = 0;
          for (; g <= u; ) {
            const C = Math.floor((g + u) / 2);
            c[C].timestamp <= d.timestamp ? g = C + 1 : u = C - 1;
          }
          h === -1 && (h = g), c.splice(h, 0, d);
        }
        const p = d.timestamp < a, m = e(d, p);
        p ? m() : l.isActive() && l.addAction({ doAction: () => {
          m();
        }, delay: d.delay });
      }
      return Object.assign(Object.assign({}, o), { events: c });
    }) } });
    return $i(i);
  }
  const Sr = /* @__PURE__ */ new Map();
  function Yi(t, e) {
    let n = Sr.get(t);
    return n || (n = /* @__PURE__ */ new Map(), Sr.set(t, n)), n.has(e) || n.set(e, []), n.get(e);
  }
  function xe(t, e, n) {
    return (r) => Ze(this, void 0, void 0, function* () {
      if (r && typeof r == "object" && "rr_type" in r) {
        if (n && (n.isUnchanged = !1), r.rr_type === "ImageBitmap" && "args" in r) {
          const i = yield xe(t, e, n)(r.args);
          return yield createImageBitmap.apply(null, i);
        }
        if ("index" in r) {
          if (n || e === null)
            return r;
          const { rr_type: i, index: o } = r;
          return Yi(e, i)[o];
        }
        if ("args" in r) {
          const { rr_type: i, args: o } = r;
          return new window[i](...yield Promise.all(o.map(xe(t, e, n))));
        }
        if ("base64" in r)
          return function(i) {
            var o, s, a, l, c, d = 0.75 * i.length, u = i.length, p = 0;
            i[i.length - 1] === "=" && (d--, i[i.length - 2] === "=" && d--);
            var m = new ArrayBuffer(d), h = new Uint8Array(m);
            for (o = 0; o < u; o += 4)
              s = gt[i.charCodeAt(o)], a = gt[i.charCodeAt(o + 1)], l = gt[i.charCodeAt(o + 2)], c = gt[i.charCodeAt(o + 3)], h[p++] = s << 2 | a >> 4, h[p++] = (15 & a) << 4 | l >> 2, h[p++] = (3 & l) << 6 | 63 & c;
            return m;
          }(r.base64);
        if ("src" in r) {
          const i = t.get(r.src);
          if (i)
            return i;
          {
            const o = new Image();
            return o.src = r.src, t.set(r.src, o), o;
          }
        }
        if ("data" in r && r.rr_type === "Blob") {
          const i = yield Promise.all(r.data.map(xe(t, e, n)));
          return new Blob(i, { type: r.type });
        }
      } else if (Array.isArray(r))
        return yield Promise.all(r.map(xe(t, e, n)));
      return r;
    });
  }
  const Ma = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject"];
  function Da({ mutation: t, target: e, type: n, imageMap: r, errorHandler: i }) {
    return Ze(this, void 0, void 0, function* () {
      try {
        const o = function(l, c) {
          try {
            return c === Ht.WebGL ? l.getContext("webgl") || l.getContext("experimental-webgl") : l.getContext("webgl2");
          } catch {
            return null;
          }
        }(e, n);
        if (!o)
          return;
        if (t.setter)
          return void (o[t.property] = t.args[0]);
        const s = o[t.property], a = yield Promise.all(t.args.map(xe(r, o)));
        (function(l, c) {
          if (!(c != null && c.constructor))
            return;
          const { name: d } = c.constructor;
          if (!Ma.includes(d))
            return;
          const u = Yi(l, d);
          u.includes(c) || u.push(c);
        })(o, s.apply(o, a));
      } catch (o) {
        i(t, o);
      }
    });
  }
  function Fa({ event: t, mutation: e, target: n, imageMap: r, errorHandler: i }) {
    return Ze(this, void 0, void 0, function* () {
      try {
        const o = n.getContext("2d");
        if (e.setter)
          return void (o[e.property] = e.args[0]);
        const s = o[e.property];
        if (e.property === "drawImage" && typeof e.args[0] == "string")
          r.get(t), s.apply(o, e.args);
        else {
          const a = yield Promise.all(e.args.map(xe(r, o)));
          s.apply(o, a);
        }
      } catch (o) {
        i(e, o);
      }
    });
  }
  function Ar({ event: t, mutation: e, target: n, imageMap: r, canvasEventMap: i, errorHandler: o }) {
    return Ze(this, void 0, void 0, function* () {
      try {
        const s = i.get(t) || e, a = "commands" in s ? s.commands : [s];
        if ([Ht.WebGL, Ht.WebGL2].includes(e.type)) {
          for (let l = 0; l < a.length; l++) {
            const c = a[l];
            yield Da({ mutation: c, type: e.type, target: n, imageMap: r, errorHandler: o });
          }
          return;
        }
        for (let l = 0; l < a.length; l++) {
          const c = a[l];
          yield Fa({ event: t, mutation: c, target: n, imageMap: r, errorHandler: o });
        }
      } catch (s) {
        o(e, s);
      }
    });
  }
  const La = Ui || Ea, pn = { duration: 500, lineCap: "round", lineWidth: 3, strokeStyle: "red" };
  function Tr(t) {
    return t.type == re.IncrementalSnapshot && (t.data.source == H.TouchMove || t.data.source == H.MouseInteraction && t.data.type == me.TouchStart);
  }
  class Wa {
    constructor(e, n) {
      if (this.usingVirtualDom = !1, this.virtualDom = new at(), this.mouseTail = null, this.tailPositions = [], this.emitter = La(), this.legacy_missingNodeRetryMap = {}, this.cache = lr(), this.imageMap = /* @__PURE__ */ new Map(), this.canvasEventMap = /* @__PURE__ */ new Map(), this.mirror = Ys(), this.styleMirror = new Xs(), this.firstFullSnapshot = null, this.newDocumentQueue = [], this.mousePos = null, this.touchActive = null, this.lastSelectionData = null, this.constructedStyleMutations = [], this.adoptedStyleSheets = [], this.handleResize = (a) => {
        this.iframe.style.display = "inherit";
        for (const l of [this.mouseTail, this.iframe])
          l && (l.setAttribute("width", String(a.width)), l.setAttribute("height", String(a.height)));
      }, this.applyEventsSynchronously = (a) => {
        for (const l of a) {
          switch (l.type) {
            case re.DomContentLoaded:
            case re.Load:
            case re.Custom:
              continue;
            case re.FullSnapshot:
            case re.Meta:
            case re.Plugin:
            case re.IncrementalSnapshot:
          }
          this.getCastFn(l, !0)();
        }
        this.touchActive === !0 ? this.mouse.classList.add("touch-active") : this.touchActive === !1 && this.mouse.classList.remove("touch-active"), this.touchActive = null;
      }, this.getCastFn = (a, l = !1) => {
        let c;
        switch (a.type) {
          case re.DomContentLoaded:
          case re.Load:
            break;
          case re.Custom:
            c = () => {
              this.emitter.emit(q.CustomEvent, a);
            };
            break;
          case re.Meta:
            c = () => this.emitter.emit(q.Resize, { width: a.data.width, height: a.data.height });
            break;
          case re.FullSnapshot:
            c = () => {
              var d;
              if (this.firstFullSnapshot) {
                if (this.firstFullSnapshot === a)
                  return void (this.firstFullSnapshot = !0);
              } else
                this.firstFullSnapshot = !0;
              this.rebuildFullSnapshot(a, l), (d = this.iframe.contentWindow) === null || d === void 0 || d.scrollTo(a.data.initialOffset), this.styleMirror.reset();
            };
            break;
          case re.IncrementalSnapshot:
            c = () => {
              if (this.applyIncremental(a, l), !l && (a === this.nextUserInteractionEvent && (this.nextUserInteractionEvent = null, this.backToNormal()), this.config.skipInactive && !this.nextUserInteractionEvent)) {
                for (const d of this.service.state.context.events)
                  if (!(d.timestamp <= a.timestamp) && this.isUserInteraction(d)) {
                    d.delay - a.delay > 1e4 * this.speedService.state.context.timer.speed && (this.nextUserInteractionEvent = d);
                    break;
                  }
                if (this.nextUserInteractionEvent) {
                  const d = this.nextUserInteractionEvent.delay - a.delay, u = { speed: Math.min(Math.round(d / 5e3), this.config.maxSpeed) };
                  this.speedService.send({ type: "FAST_FORWARD", payload: u }), this.emitter.emit(q.SkipStart, u);
                }
              }
            };
        }
        return () => {
          c && c();
          for (const u of this.config.plugins || [])
            u.handler && u.handler(a, l, { replayer: this });
          this.service.send({ type: "CAST_EVENT", payload: { event: a } });
          const d = this.service.state.context.events.length - 1;
          if (a === this.service.state.context.events[d]) {
            const u = () => {
              d < this.service.state.context.events.length - 1 || (this.backToNormal(), this.service.send("END"), this.emitter.emit(q.Finish));
            };
            a.type === re.IncrementalSnapshot && a.data.source === H.MouseMove && a.data.positions.length ? setTimeout(() => {
              u();
            }, Math.max(0, 50 - a.data.positions[0].timeOffset)) : u();
          }
          this.emitter.emit(q.EventCast, a);
        };
      }, !(n != null && n.liveMode) && e.length < 2)
        throw new Error("Replayer need at least 2 events.");
      const r = { speed: 1, maxSpeed: 360, root: document.body, loadTimeout: 0, skipInactive: !1, showWarning: !0, showDebug: !1, blockClass: "rr-block", liveMode: !1, insertStyleRules: [], triggerFocus: !0, UNSAFE_replayCanvas: !1, pauseAnimation: !0, mouseTail: pn, useVirtualDom: !0 };
      this.config = Object.assign({}, r, n), this.handleResize = this.handleResize.bind(this), this.getCastFn = this.getCastFn.bind(this), this.applyEventsSynchronously = this.applyEventsSynchronously.bind(this), this.emitter.on(q.Resize, this.handleResize), this.setupDom();
      for (const a of this.config.plugins || [])
        a.getMirror && a.getMirror({ nodeMirror: this.mirror });
      this.emitter.on(q.Flush, () => {
        if (this.usingVirtualDom) {
          const a = { mirror: this.mirror, applyCanvas: (l, c, d) => {
            Ar({ event: l, mutation: c, target: d, imageMap: this.imageMap, canvasEventMap: this.canvasEventMap, errorHandler: this.warnCanvasMutationFailed.bind(this) });
          }, applyInput: this.applyInput.bind(this), applyScroll: this.applyScroll.bind(this), applyStyleSheetMutation: (l, c) => {
            l.source === H.StyleSheetRule ? this.applyStyleSheetRule(l, c) : l.source === H.StyleDeclaration && this.applyStyleDeclaration(l, c);
          } };
          if (this.iframe.contentDocument && ke(this.iframe.contentDocument, this.virtualDom, a, this.virtualDom.mirror), this.virtualDom.destroyTree(), this.usingVirtualDom = !1, Object.keys(this.legacy_missingNodeRetryMap).length)
            for (const l in this.legacy_missingNodeRetryMap)
              try {
                const c = this.legacy_missingNodeRetryMap[l], d = Sn(c.node, this.mirror, this.virtualDom.mirror);
                ke(d, c.node, a, this.virtualDom.mirror), c.node = d;
              } catch (c) {
                this.config.showWarning && console.warn(c);
              }
          this.constructedStyleMutations.forEach((l) => {
            this.applyStyleSheetMutation(l);
          }), this.constructedStyleMutations = [], this.adoptedStyleSheets.forEach((l) => {
            this.applyAdoptedStyleSheet(l);
          }), this.adoptedStyleSheets = [];
        }
        this.mousePos && (this.moveAndHover(this.mousePos.x, this.mousePos.y, this.mousePos.id, !0, this.mousePos.debugData), this.mousePos = null), this.lastSelectionData && (this.applySelection(this.lastSelectionData), this.lastSelectionData = null);
      }), this.emitter.on(q.PlayBack, () => {
        this.firstFullSnapshot = null, this.mirror.reset(), this.styleMirror.reset();
      });
      const i = new ka([], { speed: this.config.speed, liveMode: this.config.liveMode });
      this.service = Ra({ events: e.map((a) => n && n.unpackFn ? n.unpackFn(a) : a).sort((a, l) => a.timestamp - l.timestamp), timer: i, timeOffset: 0, baselineTime: 0, lastPlayedEvent: null }, { getCastFn: this.getCastFn, applyEventsSynchronously: this.applyEventsSynchronously, emitter: this.emitter }), this.service.start(), this.service.subscribe((a) => {
        this.emitter.emit(q.StateChange, { player: a });
      }), this.speedService = $i(Ki({ id: "speed", context: { normalSpeed: -1, timer: i }, initial: "normal", states: { normal: { on: { FAST_FORWARD: { target: "skipping", actions: ["recordSpeed", "setSpeed"] }, SET_SPEED: { target: "normal", actions: ["setSpeed"] } } }, skipping: { on: { BACK_TO_NORMAL: { target: "normal", actions: ["restoreSpeed"] }, SET_SPEED: { target: "normal", actions: ["setSpeed"] } } } } }, { actions: { setSpeed: (a, l) => {
        "payload" in l && a.timer.setSpeed(l.payload.speed);
      }, recordSpeed: je({ normalSpeed: (a) => a.timer.speed }), restoreSpeed: (a) => {
        a.timer.setSpeed(a.normalSpeed);
      } } })), this.speedService.start(), this.speedService.subscribe((a) => {
        this.emitter.emit(q.StateChange, { speed: a });
      });
      const o = this.service.state.context.events.find((a) => a.type === re.Meta), s = this.service.state.context.events.find((a) => a.type === re.FullSnapshot);
      if (o) {
        const { width: a, height: l } = o.data;
        setTimeout(() => {
          this.emitter.emit(q.Resize, { width: a, height: l });
        }, 0);
      }
      s && setTimeout(() => {
        var a;
        this.firstFullSnapshot || (this.firstFullSnapshot = s, this.rebuildFullSnapshot(s), (a = this.iframe.contentWindow) === null || a === void 0 || a.scrollTo(s.data.initialOffset));
      }, 1), this.service.state.context.events.find(Tr) && this.mouse.classList.add("touch-device");
    }
    get timer() {
      return this.service.state.context.timer;
    }
    on(e, n) {
      return this.emitter.on(e, n), this;
    }
    off(e, n) {
      return this.emitter.off(e, n), this;
    }
    setConfig(e) {
      Object.keys(e).forEach((n) => {
        e[n], this.config[n] = e[n];
      }), this.config.skipInactive || this.backToNormal(), e.speed !== void 0 && this.speedService.send({ type: "SET_SPEED", payload: { speed: e.speed } }), e.mouseTail !== void 0 && (e.mouseTail === !1 ? this.mouseTail && (this.mouseTail.style.display = "none") : (this.mouseTail || (this.mouseTail = document.createElement("canvas"), this.mouseTail.width = Number.parseFloat(this.iframe.width), this.mouseTail.height = Number.parseFloat(this.iframe.height), this.mouseTail.classList.add("replayer-mouse-tail"), this.wrapper.insertBefore(this.mouseTail, this.iframe)), this.mouseTail.style.display = "inherit"));
    }
    getMetaData() {
      const e = this.service.state.context.events[0], n = this.service.state.context.events[this.service.state.context.events.length - 1];
      return { startTime: e.timestamp, endTime: n.timestamp, totalTime: n.timestamp - e.timestamp };
    }
    getCurrentTime() {
      return this.timer.timeOffset + this.getTimeOffset();
    }
    getTimeOffset() {
      const { baselineTime: e, events: n } = this.service.state.context;
      return e - n[0].timestamp;
    }
    getMirror() {
      return this.mirror;
    }
    play(e = 0) {
      var n, r;
      this.service.state.matches("paused") || this.service.send({ type: "PAUSE" }), this.service.send({ type: "PLAY", payload: { timeOffset: e } }), (r = (n = this.iframe.contentDocument) === null || n === void 0 ? void 0 : n.getElementsByTagName("html")[0]) === null || r === void 0 || r.classList.remove("rrweb-paused"), this.emitter.emit(q.Start);
    }
    pause(e) {
      var n, r;
      e === void 0 && this.service.state.matches("playing") && this.service.send({ type: "PAUSE" }), typeof e == "number" && (this.play(e), this.service.send({ type: "PAUSE" })), (r = (n = this.iframe.contentDocument) === null || n === void 0 ? void 0 : n.getElementsByTagName("html")[0]) === null || r === void 0 || r.classList.add("rrweb-paused"), this.emitter.emit(q.Pause);
    }
    resume(e = 0) {
      console.warn("The 'resume' was deprecated in 1.0. Please use 'play' method which has the same interface."), this.play(e), this.emitter.emit(q.Resume);
    }
    destroy() {
      this.pause(), this.config.root.removeChild(this.wrapper), this.emitter.emit(q.Destroy);
    }
    startLive(e) {
      this.service.send({ type: "TO_LIVE", payload: { baselineTime: e } });
    }
    addEvent(e) {
      const n = this.config.unpackFn ? this.config.unpackFn(e) : e;
      Tr(n) && this.mouse.classList.add("touch-device"), Promise.resolve().then(() => this.service.send({ type: "ADD_EVENT", payload: { event: n } }));
    }
    enableInteract() {
      this.iframe.setAttribute("scrolling", "auto"), this.iframe.style.pointerEvents = "auto";
    }
    disableInteract() {
      this.iframe.setAttribute("scrolling", "no"), this.iframe.style.pointerEvents = "none";
    }
    resetCache() {
      this.cache = lr();
    }
    setupDom() {
      this.wrapper = document.createElement("div"), this.wrapper.classList.add("replayer-wrapper"), this.config.root.appendChild(this.wrapper), this.mouse = document.createElement("div"), this.mouse.classList.add("replayer-mouse"), this.wrapper.appendChild(this.mouse), this.config.mouseTail !== !1 && (this.mouseTail = document.createElement("canvas"), this.mouseTail.classList.add("replayer-mouse-tail"), this.mouseTail.style.display = "inherit", this.wrapper.appendChild(this.mouseTail)), this.iframe = document.createElement("iframe");
      const e = ["allow-same-origin"];
      this.config.UNSAFE_replayCanvas && e.push("allow-scripts"), this.iframe.style.display = "none", this.iframe.setAttribute("sandbox", e.join(" ")), this.disableInteract(), this.wrapper.appendChild(this.iframe), this.iframe.contentWindow && this.iframe.contentDocument && (Na(this.iframe.contentWindow, this.iframe.contentDocument), function(n = window) {
        "NodeList" in n && !n.NodeList.prototype.forEach && (n.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in n && !n.DOMTokenList.prototype.forEach && (n.DOMTokenList.prototype.forEach = Array.prototype.forEach), Node.prototype.contains || (Node.prototype.contains = (...r) => {
          let i = r[0];
          if (!(0 in r))
            throw new TypeError("1 argument is required");
          do
            if (this === i)
              return !0;
          while (i = i && i.parentNode);
          return !1;
        });
      }(this.iframe.contentWindow));
    }
    rebuildFullSnapshot(e, n = !1) {
      if (!this.iframe.contentDocument)
        return console.warn("Looks like your replayer has been destroyed.");
      Object.keys(this.legacy_missingNodeRetryMap).length && console.warn("Found unresolved missing node map", this.legacy_missingNodeRetryMap), this.legacy_missingNodeRetryMap = {};
      const r = [], i = (a, l) => {
        this.collectIframeAndAttachDocument(r, a);
        for (const c of this.config.plugins || [])
          c.onBuild && c.onBuild(a, { id: l, replayer: this });
      };
      Js(e.data.node, { doc: this.iframe.contentDocument, afterAppend: i, cache: this.cache, mirror: this.mirror }), i(this.iframe.contentDocument, e.data.node.id);
      for (const { mutationInQueue: a, builtNode: l } of r)
        this.attachDocumentToIframe(a, l), this.newDocumentQueue = this.newDocumentQueue.filter((c) => c !== a);
      const { documentElement: o, head: s } = this.iframe.contentDocument;
      this.insertStyleRules(o, s), this.service.state.matches("playing") || this.iframe.contentDocument.getElementsByTagName("html")[0].classList.add("rrweb-paused"), this.emitter.emit(q.FullsnapshotRebuilded, e), n || this.waitForStylesheetLoad(), this.config.UNSAFE_replayCanvas && this.preloadAllImages();
    }
    insertStyleRules(e, n) {
      var r;
      const i = (o = this.config.blockClass, [`.${o} { background: currentColor }`, "noscript { display: none !important; }"]).concat(this.config.insertStyleRules);
      var o;
      if (this.config.pauseAnimation && i.push("html.rrweb-paused *, html.rrweb-paused *:before, html.rrweb-paused *:after { animation-play-state: paused !important; }"), this.usingVirtualDom) {
        const s = this.virtualDom.createElement("style");
        this.virtualDom.mirror.add(s, Li(s, this.virtualDom.unserializedId)), e.insertBefore(s, n), s.rules.push({ source: H.StyleSheetRule, adds: i.map((a, l) => ({ rule: a, index: l })) });
      } else {
        const s = document.createElement("style");
        e.insertBefore(s, n);
        for (let a = 0; a < i.length; a++)
          (r = s.sheet) === null || r === void 0 || r.insertRule(i[a], a);
      }
    }
    attachDocumentToIframe(e, n) {
      const r = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror, i = [], o = (s, a) => {
        this.collectIframeAndAttachDocument(i, s);
        const l = r.getMeta(s);
        if ((l == null ? void 0 : l.type) === ue.Element && (l == null ? void 0 : l.tagName.toUpperCase()) === "HTML") {
          const { documentElement: c, head: d } = n.contentDocument;
          this.insertStyleRules(c, d);
        }
        for (const c of this.config.plugins || [])
          c.onBuild && c.onBuild(s, { id: a, replayer: this });
      };
      It(e.node, { doc: n.contentDocument, mirror: r, hackCss: !0, skipChild: !1, afterAppend: o, cache: this.cache }), o(n.contentDocument, e.node.id);
      for (const { mutationInQueue: s, builtNode: a } of i)
        this.attachDocumentToIframe(s, a), this.newDocumentQueue = this.newDocumentQueue.filter((l) => l !== s);
    }
    collectIframeAndAttachDocument(e, n) {
      if (ln(n, this.mirror)) {
        const r = this.newDocumentQueue.find((i) => i.parentId === this.mirror.getId(n));
        r && e.push({ mutationInQueue: r, builtNode: n });
      }
    }
    waitForStylesheetLoad() {
      var e;
      const n = (e = this.iframe.contentDocument) === null || e === void 0 ? void 0 : e.head;
      if (n) {
        const r = /* @__PURE__ */ new Set();
        let i, o = this.service.state;
        const s = () => {
          o = this.service.state;
        };
        this.emitter.on(q.Start, s), this.emitter.on(q.Pause, s);
        const a = () => {
          this.emitter.off(q.Start, s), this.emitter.off(q.Pause, s);
        };
        n.querySelectorAll('link[rel="stylesheet"]').forEach((l) => {
          l.sheet || (r.add(l), l.addEventListener("load", () => {
            r.delete(l), r.size === 0 && i !== -1 && (o.matches("playing") && this.play(this.getCurrentTime()), this.emitter.emit(q.LoadStylesheetEnd), i && clearTimeout(i), a());
          }));
        }), r.size > 0 && (this.service.send({ type: "PAUSE" }), this.emitter.emit(q.LoadStylesheetStart), i = setTimeout(() => {
          o.matches("playing") && this.play(this.getCurrentTime()), i = -1, a();
        }, this.config.loadTimeout));
      }
    }
    preloadAllImages() {
      return Ze(this, void 0, void 0, function* () {
        this.service.state;
        const e = () => {
          this.service.state;
        };
        this.emitter.on(q.Start, e), this.emitter.on(q.Pause, e);
        const n = [];
        for (const r of this.service.state.context.events)
          r.type === re.IncrementalSnapshot && r.data.source === H.CanvasMutation && (n.push(this.deserializeAndPreloadCanvasEvents(r.data, r)), ("commands" in r.data ? r.data.commands : [r.data]).forEach((i) => {
            this.preloadImages(i, r);
          }));
        return Promise.all(n);
      });
    }
    preloadImages(e, n) {
      if (e.property === "drawImage" && typeof e.args[0] == "string" && !this.imageMap.has(n)) {
        const r = document.createElement("canvas"), i = r.getContext("2d"), o = i == null ? void 0 : i.createImageData(r.width, r.height);
        o == null || o.data, JSON.parse(e.args[0]), i == null || i.putImageData(o, 0, 0);
      }
    }
    deserializeAndPreloadCanvasEvents(e, n) {
      return Ze(this, void 0, void 0, function* () {
        if (!this.canvasEventMap.has(n)) {
          const r = { isUnchanged: !0 };
          if ("commands" in e) {
            const i = yield Promise.all(e.commands.map((o) => Ze(this, void 0, void 0, function* () {
              const s = yield Promise.all(o.args.map(xe(this.imageMap, null, r)));
              return Object.assign(Object.assign({}, o), { args: s });
            })));
            r.isUnchanged === !1 && this.canvasEventMap.set(n, Object.assign(Object.assign({}, e), { commands: i }));
          } else {
            const i = yield Promise.all(e.args.map(xe(this.imageMap, null, r)));
            r.isUnchanged === !1 && this.canvasEventMap.set(n, Object.assign(Object.assign({}, e), { args: i }));
          }
        }
      });
    }
    applyIncremental(e, n) {
      var r, i, o;
      const { data: s } = e;
      switch (s.source) {
        case H.Mutation:
          try {
            this.applyMutation(s, n);
          } catch (a) {
            this.warn(`Exception in mutation ${a.message || a}`, s);
          }
          break;
        case H.Drag:
        case H.TouchMove:
        case H.MouseMove:
          if (n) {
            const a = s.positions[s.positions.length - 1];
            this.mousePos = { x: a.x, y: a.y, id: a.id, debugData: s };
          } else
            s.positions.forEach((a) => {
              const l = { doAction: () => {
                this.moveAndHover(a.x, a.y, a.id, n, s);
              }, delay: a.timeOffset + e.timestamp - this.service.state.context.baselineTime };
              this.timer.addAction(l);
            }), this.timer.addAction({ doAction() {
            }, delay: e.delay - ((r = s.positions[0]) === null || r === void 0 ? void 0 : r.timeOffset) });
          break;
        case H.MouseInteraction: {
          if (s.id === -1 || n)
            break;
          const a = new Event(me[s.type].toLowerCase()), l = this.mirror.getNode(s.id);
          if (!l)
            return this.debugNodeNotFound(s, s.id);
          this.emitter.emit(q.MouseInteraction, { type: s.type, target: l });
          const { triggerFocus: c } = this.config;
          switch (s.type) {
            case me.Blur:
              "blur" in l && l.blur();
              break;
            case me.Focus:
              c && l.focus && l.focus({ preventScroll: !0 });
              break;
            case me.Click:
            case me.TouchStart:
            case me.TouchEnd:
              n ? (s.type === me.TouchStart ? this.touchActive = !0 : s.type === me.TouchEnd && (this.touchActive = !1), this.mousePos = { x: s.x, y: s.y, id: s.id, debugData: s }) : (s.type === me.TouchStart && (this.tailPositions.length = 0), this.moveAndHover(s.x, s.y, s.id, n, s), s.type === me.Click ? (this.mouse.classList.remove("active"), this.mouse.offsetWidth, this.mouse.classList.add("active")) : s.type === me.TouchStart ? (this.mouse.offsetWidth, this.mouse.classList.add("touch-active")) : s.type === me.TouchEnd && this.mouse.classList.remove("touch-active"));
              break;
            case me.TouchCancel:
              n ? this.touchActive = !1 : this.mouse.classList.remove("touch-active");
              break;
            default:
              l.dispatchEvent(a);
          }
          break;
        }
        case H.Scroll:
          if (s.id === -1)
            break;
          if (this.usingVirtualDom) {
            const a = this.virtualDom.mirror.getNode(s.id);
            if (!a)
              return this.debugNodeNotFound(s, s.id);
            a.scrollData = s;
            break;
          }
          this.applyScroll(s, n);
          break;
        case H.ViewportResize:
          this.emitter.emit(q.Resize, { width: s.width, height: s.height });
          break;
        case H.Input:
          if (s.id === -1)
            break;
          if (this.usingVirtualDom) {
            const a = this.virtualDom.mirror.getNode(s.id);
            if (!a)
              return this.debugNodeNotFound(s, s.id);
            a.inputData = s;
            break;
          }
          this.applyInput(s);
          break;
        case H.MediaInteraction: {
          const a = this.usingVirtualDom ? this.virtualDom.mirror.getNode(s.id) : this.mirror.getNode(s.id);
          if (!a)
            return this.debugNodeNotFound(s, s.id);
          const l = a;
          try {
            s.currentTime && (l.currentTime = s.currentTime), s.volume && (l.volume = s.volume), s.muted && (l.muted = s.muted), s.type === 1 && l.pause(), s.type === 0 && l.play(), s.type === 4 && (l.playbackRate = s.playbackRate);
          } catch (c) {
            this.config.showWarning && console.warn(`Failed to replay media interactions: ${c.message || c}`);
          }
          break;
        }
        case H.StyleSheetRule:
        case H.StyleDeclaration:
          this.usingVirtualDom ? s.styleId ? this.constructedStyleMutations.push(s) : s.id && ((i = this.virtualDom.mirror.getNode(s.id)) === null || i === void 0 || i.rules.push(s)) : this.applyStyleSheetMutation(s);
          break;
        case H.CanvasMutation:
          if (!this.config.UNSAFE_replayCanvas)
            return;
          if (this.usingVirtualDom) {
            const a = this.virtualDom.mirror.getNode(s.id);
            if (!a)
              return this.debugNodeNotFound(s, s.id);
            a.canvasMutations.push({ event: e, mutation: s });
          } else {
            const a = this.mirror.getNode(s.id);
            if (!a)
              return this.debugNodeNotFound(s, s.id);
            Ar({ event: e, mutation: s, target: a, imageMap: this.imageMap, canvasEventMap: this.canvasEventMap, errorHandler: this.warnCanvasMutationFailed.bind(this) });
          }
          break;
        case H.Font:
          try {
            const a = new FontFace(s.family, s.buffer ? new Uint8Array(JSON.parse(s.fontSource)) : s.fontSource, s.descriptors);
            (o = this.iframe.contentDocument) === null || o === void 0 || o.fonts.add(a);
          } catch (a) {
            this.config.showWarning && console.warn(a);
          }
          break;
        case H.Selection:
          if (n) {
            this.lastSelectionData = s;
            break;
          }
          this.applySelection(s);
          break;
        case H.AdoptedStyleSheet:
          this.usingVirtualDom ? this.adoptedStyleSheets.push(s) : this.applyAdoptedStyleSheet(s);
      }
    }
    applyMutation(e, n) {
      if (this.config.useVirtualDom && !this.usingVirtualDom && n && (this.usingVirtualDom = !0, ya(this.iframe.contentDocument, this.mirror, this.virtualDom), Object.keys(this.legacy_missingNodeRetryMap).length))
        for (const l in this.legacy_missingNodeRetryMap)
          try {
            const c = this.legacy_missingNodeRetryMap[l], d = Fi(c.node, this.virtualDom, this.mirror);
            d && (c.node = d);
          } catch (c) {
            this.config.showWarning && console.warn(c);
          }
      const r = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror;
      e.removes.forEach((l) => {
        var c;
        const d = r.getNode(l.id);
        if (!d)
          return e.removes.find((p) => p.id === l.parentId) ? void 0 : this.warnNodeNotFound(e, l.id);
        let u = r.getNode(l.parentId);
        if (!u)
          return this.warnNodeNotFound(e, l.parentId);
        if (l.isShadow && Ft(u) && (u = u.shadowRoot), r.removeNodeFromMap(d), u)
          try {
            u.removeChild(d), this.usingVirtualDom && d.nodeName === "#text" && u.nodeName === "STYLE" && ((c = u.rules) === null || c === void 0 ? void 0 : c.length) > 0 && (u.rules = []);
          } catch (p) {
            if (!(p instanceof DOMException))
              throw p;
            this.warn("parent could not remove child in mutation", u, d, e);
          }
      });
      const i = Object.assign({}, this.legacy_missingNodeRetryMap), o = [], s = (l) => {
        var c;
        if (!this.iframe.contentDocument)
          return console.warn("Looks like your replayer has been destroyed.");
        let d = r.getNode(l.parentId);
        if (!d)
          return l.node.type === ue.Document ? this.newDocumentQueue.push(l) : o.push(l);
        l.node.isShadow && (Ft(d) || d.attachShadow({ mode: "open" }), d = d.shadowRoot);
        let u = null, p = null;
        if (l.previousId && (u = r.getNode(l.previousId)), l.nextId && (p = r.getNode(l.nextId)), ((f) => {
          let y = null;
          return f.nextId && (y = r.getNode(f.nextId)), f.nextId !== null && f.nextId !== void 0 && f.nextId !== -1 && !y;
        })(l))
          return o.push(l);
        if (l.node.rootId && !r.getNode(l.node.rootId))
          return;
        const m = l.node.rootId ? r.getNode(l.node.rootId) : this.usingVirtualDom ? this.virtualDom : this.iframe.contentDocument;
        if (ln(d, r))
          return void this.attachDocumentToIframe(l, d);
        const h = (f, y) => {
          for (const v of this.config.plugins || [])
            v.onBuild && v.onBuild(f, { id: y, replayer: this });
        }, g = It(l.node, { doc: m, mirror: r, skipChild: !0, hackCss: !0, cache: this.cache, afterAppend: h });
        if (l.previousId === -1 || l.nextId === -1)
          return void (i[l.node.id] = { node: g, mutation: l });
        const C = r.getMeta(d);
        if (C && C.type === ue.Element && C.tagName === "textarea" && l.node.type === ue.Text) {
          const f = Array.isArray(d.childNodes) ? d.childNodes : Array.from(d.childNodes);
          for (const y of f)
            y.nodeType === d.TEXT_NODE && d.removeChild(y);
        }
        if (u && u.nextSibling && u.nextSibling.parentNode)
          d.insertBefore(g, u.nextSibling);
        else if (p && p.parentNode)
          d.contains(p) ? d.insertBefore(g, p) : d.insertBefore(g, null);
        else {
          if (d === m)
            for (; m.firstChild; )
              m.removeChild(m.firstChild);
          d.appendChild(g);
        }
        if (h(g, l.node.id), this.usingVirtualDom && g.nodeName === "#text" && d.nodeName === "STYLE" && ((c = d.rules) === null || c === void 0 ? void 0 : c.length) > 0 && (d.rules = []), ln(g, this.mirror)) {
          const f = this.mirror.getId(g), y = this.newDocumentQueue.find((v) => v.parentId === f);
          y && (this.attachDocumentToIframe(y, g), this.newDocumentQueue = this.newDocumentQueue.filter((v) => v !== y));
        }
        (l.previousId || l.nextId) && this.legacy_resolveMissingNode(i, d, g, l);
      };
      e.adds.forEach((l) => {
        s(l);
      });
      const a = Date.now();
      for (; o.length; ) {
        const l = js(o);
        if (o.length = 0, Date.now() - a > 500) {
          this.warn("Timeout in the loop, please check the resolve tree data:", l);
          break;
        }
        for (const c of l)
          r.getNode(c.value.parentId) ? Si(c, (d) => {
            s(d);
          }) : this.debug("Drop resolve tree since there is no parent for the root node.", c);
      }
      Object.keys(i).length && Object.assign(this.legacy_missingNodeRetryMap, i), function(l) {
        const c = /* @__PURE__ */ new Set(), d = [];
        for (let u = l.length; u--; ) {
          const p = l[u];
          c.has(p.id) || (d.push(p), c.add(p.id));
        }
        return d;
      }(e.texts).forEach((l) => {
        var c;
        const d = r.getNode(l.id);
        if (!d)
          return e.removes.find((u) => u.id === l.id) ? void 0 : this.warnNodeNotFound(e, l.id);
        if (d.textContent = l.value, this.usingVirtualDom) {
          const u = d.parentNode;
          ((c = u == null ? void 0 : u.rules) === null || c === void 0 ? void 0 : c.length) > 0 && (u.rules = []);
        }
      }), e.attributes.forEach((l) => {
        const c = r.getNode(l.id);
        if (!c)
          return e.removes.find((d) => d.id === l.id) ? void 0 : this.warnNodeNotFound(e, l.id);
        for (const d in l.attributes)
          if (typeof d == "string") {
            const u = l.attributes[d];
            if (u === null)
              c.removeAttribute(d);
            else if (typeof u == "string")
              try {
                if (d === "_cssText" && (c.nodeName === "LINK" || c.nodeName === "STYLE"))
                  try {
                    const p = r.getMeta(c);
                    Object.assign(p.attributes, l.attributes);
                    const m = It(p, { doc: c.ownerDocument, mirror: r, skipChild: !0, hackCss: !0, cache: this.cache }), h = c.nextSibling, g = c.parentNode;
                    if (m && g) {
                      g.removeChild(c), g.insertBefore(m, h), r.replace(l.id, m);
                      break;
                    }
                  } catch {
                  }
                c.setAttribute(d, u);
              } catch (p) {
                this.config.showWarning && console.warn("An error occurred may due to the checkout feature.", p);
              }
            else if (d === "style") {
              const p = u, m = c;
              for (const h in p)
                if (p[h] === !1)
                  m.style.removeProperty(h);
                else if (p[h] instanceof Array) {
                  const g = p[h];
                  m.style.setProperty(h, g[0], g[1]);
                } else {
                  const g = p[h];
                  m.style.setProperty(h, g);
                }
            }
          }
      });
    }
    applyScroll(e, n) {
      var r, i;
      const o = this.mirror.getNode(e.id);
      if (!o)
        return this.debugNodeNotFound(e, e.id);
      const s = this.mirror.getMeta(o);
      if (o === this.iframe.contentDocument)
        (r = this.iframe.contentWindow) === null || r === void 0 || r.scrollTo({ top: e.y, left: e.x, behavior: n ? "auto" : "smooth" });
      else if ((s == null ? void 0 : s.type) === ue.Document)
        (i = o.defaultView) === null || i === void 0 || i.scrollTo({ top: e.y, left: e.x, behavior: n ? "auto" : "smooth" });
      else
        try {
          o.scrollTo({ top: e.y, left: e.x, behavior: n ? "auto" : "smooth" });
        } catch {
        }
    }
    applyInput(e) {
      const n = this.mirror.getNode(e.id);
      if (!n)
        return this.debugNodeNotFound(e, e.id);
      try {
        n.checked = e.isChecked, n.value = e.text;
      } catch {
      }
    }
    applySelection(e) {
      try {
        const n = /* @__PURE__ */ new Set(), r = e.ranges.map(({ start: i, startOffset: o, end: s, endOffset: a }) => {
          const l = this.mirror.getNode(i), c = this.mirror.getNode(s);
          if (!l || !c)
            return;
          const d = new Range();
          d.setStart(l, o), d.setEnd(c, a);
          const u = l.ownerDocument, p = u == null ? void 0 : u.getSelection();
          return p && n.add(p), { range: d, selection: p };
        });
        n.forEach((i) => i.removeAllRanges()), r.forEach((i) => {
          var o;
          return i && ((o = i.selection) === null || o === void 0 ? void 0 : o.addRange(i.range));
        });
      } catch {
      }
    }
    applyStyleSheetMutation(e) {
      var n;
      let r = null;
      e.styleId ? r = this.styleMirror.getStyle(e.styleId) : e.id && (r = ((n = this.mirror.getNode(e.id)) === null || n === void 0 ? void 0 : n.sheet) || null), r && (e.source === H.StyleSheetRule ? this.applyStyleSheetRule(e, r) : e.source === H.StyleDeclaration && this.applyStyleDeclaration(e, r));
    }
    applyStyleSheetRule(e, n) {
      var r, i, o, s;
      if ((r = e.adds) === null || r === void 0 || r.forEach(({ rule: a, index: l }) => {
        try {
          if (Array.isArray(l)) {
            const { positions: c, index: d } = dr(l);
            pt(n.cssRules, c).insertRule(a, d);
          } else {
            const c = l === void 0 ? void 0 : Math.min(l, n.cssRules.length);
            n == null || n.insertRule(a, c);
          }
        } catch {
        }
      }), (i = e.removes) === null || i === void 0 || i.forEach(({ index: a }) => {
        try {
          if (Array.isArray(a)) {
            const { positions: l, index: c } = dr(a);
            pt(n.cssRules, l).deleteRule(c || 0);
          } else
            n == null || n.deleteRule(a);
        } catch {
        }
      }), e.replace)
        try {
          (o = n.replace) === null || o === void 0 || o.call(n, e.replace);
        } catch {
        }
      if (e.replaceSync)
        try {
          (s = n.replaceSync) === null || s === void 0 || s.call(n, e.replaceSync);
        } catch {
        }
    }
    applyStyleDeclaration(e, n) {
      e.set && pt(n.rules, e.index).style.setProperty(e.set.property, e.set.value, e.set.priority), e.remove && pt(n.rules, e.index).style.removeProperty(e.remove.property);
    }
    applyAdoptedStyleSheet(e) {
      var n;
      const r = this.mirror.getNode(e.id);
      if (!r)
        return;
      (n = e.styles) === null || n === void 0 || n.forEach((s) => {
        var a;
        let l = null, c = null;
        if (Ft(r) ? c = ((a = r.ownerDocument) === null || a === void 0 ? void 0 : a.defaultView) || null : r.nodeName === "#document" && (c = r.defaultView), c)
          try {
            l = new c.CSSStyleSheet(), this.styleMirror.add(l, s.styleId), this.applyStyleSheetRule({ source: H.StyleSheetRule, adds: s.rules }, l);
          } catch {
          }
      });
      let i = 0;
      const o = (s, a) => {
        const l = a.map((c) => this.styleMirror.getStyle(c)).filter((c) => c !== null);
        Ft(s) ? s.shadowRoot.adoptedStyleSheets = l : s.nodeName === "#document" && (s.adoptedStyleSheets = l), l.length !== a.length && i < 10 && (setTimeout(() => o(s, a), 0 + 100 * i), i++);
      };
      o(r, e.styleIds);
    }
    legacy_resolveMissingNode(e, n, r, i) {
      const { previousId: o, nextId: s } = i, a = o && e[o], l = s && e[s];
      if (a) {
        const { node: c, mutation: d } = a;
        n.insertBefore(c, r), delete e[d.node.id], delete this.legacy_missingNodeRetryMap[d.node.id], (d.previousId || d.nextId) && this.legacy_resolveMissingNode(e, n, c, d);
      }
      if (l) {
        const { node: c, mutation: d } = l;
        n.insertBefore(c, r.nextSibling), delete e[d.node.id], delete this.legacy_missingNodeRetryMap[d.node.id], (d.previousId || d.nextId) && this.legacy_resolveMissingNode(e, n, c, d);
      }
    }
    moveAndHover(e, n, r, i, o) {
      const s = this.mirror.getNode(r);
      if (!s)
        return this.debugNodeNotFound(o, r);
      const a = Ai(s, this.iframe), l = e * a.absoluteScale + a.x, c = n * a.absoluteScale + a.y;
      this.mouse.style.left = `${l}px`, this.mouse.style.top = `${c}px`, i || this.drawMouseTail({ x: l, y: c }), this.hoverElements(s);
    }
    drawMouseTail(e) {
      if (!this.mouseTail)
        return;
      const { lineCap: n, lineWidth: r, strokeStyle: i, duration: o } = this.config.mouseTail === !0 ? pn : Object.assign({}, pn, this.config.mouseTail), s = () => {
        if (!this.mouseTail)
          return;
        const a = this.mouseTail.getContext("2d");
        a && this.tailPositions.length && (a.clearRect(0, 0, this.mouseTail.width, this.mouseTail.height), a.beginPath(), a.lineWidth = r, a.lineCap = n, a.strokeStyle = i, a.moveTo(this.tailPositions[0].x, this.tailPositions[0].y), this.tailPositions.forEach((l) => a.lineTo(l.x, l.y)), a.stroke());
      };
      this.tailPositions.push(e), s(), setTimeout(() => {
        this.tailPositions = this.tailPositions.filter((a) => a !== e), s();
      }, o / this.speedService.state.context.timer.speed);
    }
    hoverElements(e) {
      var n;
      (n = this.iframe.contentDocument) === null || n === void 0 || n.querySelectorAll(".\\:hover").forEach((i) => {
        i.classList.remove(":hover");
      });
      let r = e;
      for (; r; )
        r.classList && r.classList.add(":hover"), r = r.parentElement;
    }
    isUserInteraction(e) {
      return e.type === re.IncrementalSnapshot && e.data.source > H.Mutation && e.data.source <= H.Input;
    }
    backToNormal() {
      this.nextUserInteractionEvent = null, this.speedService.state.matches("normal") || (this.speedService.send({ type: "BACK_TO_NORMAL" }), this.emitter.emit(q.SkipEnd, { speed: this.speedService.state.context.normalSpeed }));
    }
    warnNodeNotFound(e, n) {
      this.warn(`Node with id '${n}' not found. `, e);
    }
    warnCanvasMutationFailed(e, n) {
      this.warn("Has error on canvas update", n, "canvas mutation:", e);
    }
    debugNodeNotFound(e, n) {
      this.debug("[replayer]", `Node with id '${n}' not found. `, e);
    }
    warn(...e) {
      this.config.showWarning && console.warn("[replayer]", ...e);
    }
    debug(...e) {
      this.config.showDebug && console.log("[replayer]", ...e);
    }
  }
  function Er(t) {
    let e = "";
    return Object.keys(t).forEach((n) => {
      e += `${n}: ${t[n]};`;
    }), e;
  }
  function ut(t, e = 2) {
    let n = String(t);
    const r = Math.pow(10, e - 1);
    if (t < r)
      for (; String(r).length > n.length; )
        n = `0${t}`;
    return n;
  }
  function Wt(t) {
    if (t <= 0)
      return "00:00";
    const e = Math.floor(t / 36e5);
    t %= 36e5;
    const n = Math.floor(t / 6e4);
    t %= 6e4;
    const r = Math.floor(t / 1e3);
    return e ? `${ut(e)}:${ut(n)}:${ut(r)}` : `${ut(n)}:${ut(r)}`;
  }
  function Nr() {
    let t = !1;
    return ["fullscreen", "webkitIsFullScreen", "mozFullScreen", "msFullscreenElement"].forEach((e) => {
      e in document && (t = t || !!document[e]);
    }), t;
  }
  function kr(t) {
    return { "[object Boolean]": "boolean", "[object Number]": "number", "[object String]": "string", "[object Function]": "function", "[object Array]": "array", "[object Date]": "date", "[object RegExp]": "regExp", "[object Undefined]": "undefined", "[object Null]": "null", "[object Object]": "object" }[Object.prototype.toString.call(t)];
  }
  function Oa(t) {
    return t.type === re.IncrementalSnapshot && t.data.source > H.Mutation && t.data.source <= H.Input;
  }
  function xa(t) {
    let e, n, r, i, o, s, a, l, c;
    return { c() {
      e = de("div"), n = de("input"), r = we(), i = de("label"), o = we(), s = de("span"), a = $e(t[3]), B(n, "type", "checkbox"), B(n, "id", t[2]), n.disabled = t[1], B(n, "class", "svelte-9brlez"), B(i, "for", t[2]), B(i, "class", "svelte-9brlez"), B(s, "class", "label svelte-9brlez"), B(e, "class", "switch svelte-9brlez"), it(e, "disabled", t[1]);
    }, m(d, u) {
      Le(d, e, u), J(e, n), n.checked = t[0], J(e, r), J(e, i), J(e, o), J(e, s), J(s, a), l || (c = yt(n, "change", t[4]), l = !0);
    }, p(d, [u]) {
      4 & u && B(n, "id", d[2]), 2 & u && (n.disabled = d[1]), 1 & u && (n.checked = d[0]), 4 & u && B(i, "for", d[2]), 8 & u && zt(a, d[3]), 2 & u && it(e, "disabled", d[1]);
    }, i: $t, o: $t, d(d) {
      d && Re(e), l = !1, c();
    } };
  }
  function Pa(t, e, n) {
    let { disabled: r } = e, { checked: i } = e, { id: o } = e, { label: s } = e;
    return t.$$set = (a) => {
      "disabled" in a && n(1, r = a.disabled), "checked" in a && n(0, i = a.checked), "id" in a && n(2, o = a.id), "label" in a && n(3, s = a.label);
    }, [i, r, o, s, function() {
      i = this.checked, n(0, i);
    }];
  }
  class Ba extends Ln {
    constructor(e) {
      super(), Fn(this, e, Pa, xa, Rn, { disabled: 1, checked: 0, id: 2, label: 3 });
    }
  }
  function Rr(t, e, n) {
    const r = t.slice();
    return r[39] = e[n], r;
  }
  function Mr(t, e, n) {
    const r = t.slice();
    return r[42] = e[n], r;
  }
  function Dr(t, e, n) {
    const r = t.slice();
    return r[45] = e[n], r;
  }
  function Fr(t) {
    let e, n, r, i, o, s, a, l, c, d, u, p, m, h, g, C, f, y, v, A, L, x, P, D, w, T, I = Wt(t[6]) + "", b = Wt(t[8].totalTime) + "", R = t[14], N = [];
    for (let E = 0; E < R.length; E += 1)
      N[E] = Lr(Dr(t, R, E));
    let V = t[9], O = [];
    for (let E = 0; E < V.length; E += 1)
      O[E] = Wr(Mr(t, V, E));
    function S(E, U) {
      return E[7] === "playing" ? _a : Va;
    }
    let _ = S(t), W = _(t), G = t[3], X = [];
    for (let E = 0; E < G.length; E += 1)
      X[E] = Or(Rr(t, G, E));
    function j(E) {
      t[30](E);
    }
    let z = { id: "skip", disabled: t[10] === "skipping", label: "skip inactive" };
    return t[0] !== void 0 && (z.checked = t[0]), A = new Ba({ props: z }), Pe.push(() => function(E, U, k) {
      const te = E.$$.props[U];
      te !== void 0 && (E.$$.bound[te] = k, k(E.$$.ctx[te]));
    }(A, "checked", j)), { c() {
      e = de("div"), n = de("div"), r = de("span"), i = $e(I), o = we(), s = de("div"), a = de("div"), l = we();
      for (let E = 0; E < N.length; E += 1)
        N[E].c();
      c = we();
      for (let E = 0; E < O.length; E += 1)
        O[E].c();
      d = we(), u = de("div"), p = we(), m = de("span"), h = $e(b), g = we(), C = de("div"), f = de("button"), W.c(), y = we();
      for (let E = 0; E < X.length; E += 1)
        X[E].c();
      v = we(), vi(A.$$.fragment), x = we(), P = de("button"), P.innerHTML = `<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><style type="text/css"></style></defs><path d="M916 380c-26.4 0-48-21.6-48-48L868 223.2 613.6 477.6c-18.4
            18.4-48.8 18.4-68 0-18.4-18.4-18.4-48.8 0-68L800 156 692 156c-26.4
            0-48-21.6-48-48 0-26.4 21.6-48 48-48l224 0c26.4 0 48 21.6 48 48l0
            224C964 358.4 942.4 380 916 380zM231.2 860l108.8 0c26.4 0 48 21.6 48
            48s-21.6 48-48 48l-224 0c-26.4 0-48-21.6-48-48l0-224c0-26.4 21.6-48
            48-48 26.4 0 48 21.6 48 48L164 792l253.6-253.6c18.4-18.4 48.8-18.4
            68 0 18.4 18.4 18.4 48.8 0 68L231.2 860z" p-id="1286"></path></svg>`, B(r, "class", "rr-timeline__time svelte-19ke1iv"), B(a, "class", "rr-progress__step svelte-19ke1iv"), ae(a, "width", t[13]), B(u, "class", "rr-progress__handler svelte-19ke1iv"), ae(u, "left", t[13]), B(s, "class", "rr-progress svelte-19ke1iv"), it(s, "disabled", t[10] === "skipping"), B(m, "class", "rr-timeline__time svelte-19ke1iv"), B(n, "class", "rr-timeline svelte-19ke1iv"), B(f, "class", "svelte-19ke1iv"), B(P, "class", "svelte-19ke1iv"), B(C, "class", "rr-controller__btns svelte-19ke1iv"), B(e, "class", "rr-controller svelte-19ke1iv");
    }, m(E, U) {
      Le(E, e, U), J(e, n), J(n, r), J(r, i), J(n, o), J(n, s), J(s, a), t[27](a), J(s, l);
      for (let k = 0; k < N.length; k += 1)
        N[k].m(s, null);
      J(s, c);
      for (let k = 0; k < O.length; k += 1)
        O[k].m(s, null);
      J(s, d), J(s, u), t[28](s), J(n, p), J(n, m), J(m, h), J(e, g), J(e, C), J(C, f), W.m(f, null), J(C, y);
      for (let k = 0; k < X.length; k += 1)
        X[k].m(C, null);
      J(C, v), Mn(A, C, null), J(C, x), J(C, P), D = !0, w || (T = [yt(s, "click", t[16]), yt(f, "click", t[4]), yt(P, "click", t[31])], w = !0);
    }, p(E, U) {
      if ((!D || 64 & U[0]) && I !== (I = Wt(E[6]) + "") && zt(i, I), (!D || 8192 & U[0]) && ae(a, "width", E[13]), 16384 & U[0]) {
        let F;
        for (R = E[14], F = 0; F < R.length; F += 1) {
          const K = Dr(E, R, F);
          N[F] ? N[F].p(K, U) : (N[F] = Lr(K), N[F].c(), N[F].m(s, c));
        }
        for (; F < N.length; F += 1)
          N[F].d(1);
        N.length = R.length;
      }
      if (512 & U[0]) {
        let F;
        for (V = E[9], F = 0; F < V.length; F += 1) {
          const K = Mr(E, V, F);
          O[F] ? O[F].p(K, U) : (O[F] = Wr(K), O[F].c(), O[F].m(s, d));
        }
        for (; F < O.length; F += 1)
          O[F].d(1);
        O.length = V.length;
      }
      if ((!D || 8192 & U[0]) && ae(u, "left", E[13]), 1024 & U[0] && it(s, "disabled", E[10] === "skipping"), (!D || 256 & U[0]) && b !== (b = Wt(E[8].totalTime) + "") && zt(h, b), _ !== (_ = S(E)) && (W.d(1), W = _(E), W && (W.c(), W.m(f, null))), 1066 & U[0]) {
        let F;
        for (G = E[3], F = 0; F < G.length; F += 1) {
          const K = Rr(E, G, F);
          X[F] ? X[F].p(K, U) : (X[F] = Or(K), X[F].c(), X[F].m(C, v));
        }
        for (; F < X.length; F += 1)
          X[F].d(1);
        X.length = G.length;
      }
      const k = {};
      var te;
      1024 & U[0] && (k.disabled = E[10] === "skipping"), !L && 1 & U[0] && (L = !0, k.checked = E[0], te = () => L = !1, Cn.push(te)), A.$set(k);
    }, i(E) {
      D || (Fe(A.$$.fragment, E), D = !0);
    }, o(E) {
      ot(A.$$.fragment, E), D = !1;
    }, d(E) {
      E && Re(e), t[27](null), sn(N, E), sn(O, E), t[28](null), W.d(), sn(X, E), Dn(A), w = !1, st(T);
    } };
  }
  function Lr(t) {
    let e, n;
    return { c() {
      e = de("div"), B(e, "title", n = t[45].name), ae(e, "width", t[45].width), ae(e, "height", "4px"), ae(e, "position", "absolute"), ae(e, "background", t[45].background), ae(e, "left", t[45].position);
    }, m(r, i) {
      Le(r, e, i);
    }, p(r, i) {
      16384 & i[0] && n !== (n = r[45].name) && B(e, "title", n), 16384 & i[0] && ae(e, "width", r[45].width), 16384 & i[0] && ae(e, "background", r[45].background), 16384 & i[0] && ae(e, "left", r[45].position);
    }, d(r) {
      r && Re(e);
    } };
  }
  function Wr(t) {
    let e, n;
    return { c() {
      e = de("div"), B(e, "title", n = t[42].name), ae(e, "width", "10px"), ae(e, "height", "5px"), ae(e, "position", "absolute"), ae(e, "top", "2px"), ae(e, "transform", "translate(-50%, -50%)"), ae(e, "background", t[42].background), ae(e, "left", t[42].position);
    }, m(r, i) {
      Le(r, e, i);
    }, p(r, i) {
      512 & i[0] && n !== (n = r[42].name) && B(e, "title", n), 512 & i[0] && ae(e, "background", r[42].background), 512 & i[0] && ae(e, "left", r[42].position);
    }, d(r) {
      r && Re(e);
    } };
  }
  function Va(t) {
    let e, n;
    return { c() {
      e = Yt("svg"), n = Yt("path"), B(n, "d", `M170.65984 896l0-768 640 384zM644.66944
              512l-388.66944-233.32864 0 466.65728z`), B(e, "class", "icon"), B(e, "viewBox", "0 0 1024 1024"), B(e, "version", "1.1"), B(e, "xmlns", "http://www.w3.org/2000/svg"), B(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), B(e, "width", "16"), B(e, "height", "16");
    }, m(r, i) {
      Le(r, e, i), J(e, n);
    }, d(r) {
      r && Re(e);
    } };
  }
  function _a(t) {
    let e, n;
    return { c() {
      e = Yt("svg"), n = Yt("path"), B(n, "d", `M682.65984 128q53.00224 0 90.50112 37.49888t37.49888 90.50112l0
              512q0 53.00224-37.49888 90.50112t-90.50112
              37.49888-90.50112-37.49888-37.49888-90.50112l0-512q0-53.00224
              37.49888-90.50112t90.50112-37.49888zM341.34016 128q53.00224 0
              90.50112 37.49888t37.49888 90.50112l0 512q0 53.00224-37.49888
              90.50112t-90.50112
              37.49888-90.50112-37.49888-37.49888-90.50112l0-512q0-53.00224
              37.49888-90.50112t90.50112-37.49888zM341.34016 213.34016q-17.67424
              0-30.16704 12.4928t-12.4928 30.16704l0 512q0 17.67424 12.4928
              30.16704t30.16704 12.4928 30.16704-12.4928
              12.4928-30.16704l0-512q0-17.67424-12.4928-30.16704t-30.16704-12.4928zM682.65984
              213.34016q-17.67424 0-30.16704 12.4928t-12.4928 30.16704l0 512q0
              17.67424 12.4928 30.16704t30.16704 12.4928 30.16704-12.4928
              12.4928-30.16704l0-512q0-17.67424-12.4928-30.16704t-30.16704-12.4928z`), B(e, "class", "icon"), B(e, "viewBox", "0 0 1024 1024"), B(e, "version", "1.1"), B(e, "xmlns", "http://www.w3.org/2000/svg"), B(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), B(e, "width", "16"), B(e, "height", "16");
    }, m(r, i) {
      Le(r, e, i), J(e, n);
    }, d(r) {
      r && Re(e);
    } };
  }
  function Or(t) {
    let e, n, r, i, o, s, a = t[39] + "";
    function l() {
      return t[29](t[39]);
    }
    return { c() {
      e = de("button"), n = $e(a), r = $e("x"), e.disabled = i = t[10] === "skipping", B(e, "class", "svelte-19ke1iv"), it(e, "active", t[39] === t[1] && t[10] !== "skipping");
    }, m(c, d) {
      Le(c, e, d), J(e, n), J(e, r), o || (s = yt(e, "click", l), o = !0);
    }, p(c, d) {
      t = c, 8 & d[0] && a !== (a = t[39] + "") && zt(n, a), 1024 & d[0] && i !== (i = t[10] === "skipping") && (e.disabled = i), 1034 & d[0] && it(e, "active", t[39] === t[1] && t[10] !== "skipping");
    }, d(c) {
      c && Re(e), o = !1, s();
    } };
  }
  function Ua(t) {
    let e, n, r = t[2] && Fr(t);
    return { c() {
      r && r.c(), e = $e("");
    }, m(i, o) {
      r && r.m(i, o), Le(i, e, o), n = !0;
    }, p(i, o) {
      i[2] ? r ? (r.p(i, o), 4 & o[0] && Fe(r, 1)) : (r = Fr(i), r.c(), Fe(r, 1), r.m(e.parentNode, e)) : r && (Ci(), ot(r, 1, 1, () => {
        r = null;
      }), Ii());
    }, i(i) {
      n || (Fe(r), n = !0);
    }, o(i) {
      ot(r), n = !1;
    }, d(i) {
      r && r.d(i), i && Re(e);
    } };
  }
  function xr(t, e, n) {
    return (100 - (e - n) / (e - t) * 100).toFixed(2);
  }
  function Ga(t, e, n) {
    const r = Us();
    let i, o, s, a, l, c, d, u, p, m, { replayer: h } = e, { showController: g } = e, { autoPlay: C } = e, { skipInactive: f } = e, { speedOption: y } = e, { speed: v = y.length ? y[0] : 1 } = e, { tags: A = {} } = e, { inactiveColor: L } = e, x = 0, P = null, D = !1, w = null;
    const T = () => {
      P && (cancelAnimationFrame(P), P = null);
    }, I = () => {
      i === "paused" && (l ? (h.play(), l = !1) : h.play(x));
    }, b = () => {
      i === "playing" && (h.pause(), D = !1);
    }, R = (S, _) => {
      n(6, x = S), D = !1, (typeof _ == "boolean" ? _ : i === "playing") ? h.play(S) : h.pause(S);
    }, N = (S, _, W = !1, G) => {
      w = W ? { start: S, end: _ } : null, n(6, x = S), D = _, c = G, h.play(S);
    }, V = (S) => {
      let _ = i === "playing";
      n(1, v = S), _ && h.pause(), h.setConfig({ speed: v }), _ && h.play(x);
    };
    var O;
    return mi(() => {
      n(7, i = h.service.state.value), n(10, o = h.speedService.state.value), h.on("state-change", (S) => {
        const { player: _, speed: W } = S;
        if (_ != null && _.value && i !== _.value)
          switch (n(7, i = _.value), i) {
            case "playing":
              T(), P = requestAnimationFrame(function G() {
                n(6, x = h.getCurrentTime()), D && x >= D && (w ? N(w.start, w.end, !0, void 0) : (h.pause(), c && (c(), c = null))), x < d.totalTime && (P = requestAnimationFrame(G));
              });
              break;
            case "paused":
              T();
          }
        W != null && W.value && o !== W.value && n(10, o = W.value);
      }), h.on("finish", () => {
        l = !0, c && (c(), c = null);
      }), C && h.play();
    }), O = () => {
      f !== h.config.skipInactive && h.setConfig({ skipInactive: f });
    }, jt().$$.after_update.push(O), fi(() => {
      h.pause(), T();
    }), t.$$set = (S) => {
      "replayer" in S && n(17, h = S.replayer), "showController" in S && n(2, g = S.showController), "autoPlay" in S && n(18, C = S.autoPlay), "skipInactive" in S && n(0, f = S.skipInactive), "speedOption" in S && n(3, y = S.speedOption), "speed" in S && n(1, v = S.speed), "tags" in S && n(19, A = S.tags), "inactiveColor" in S && n(20, L = S.inactiveColor);
    }, t.$$.update = () => {
      if (64 & t.$$.dirty[0] && r("ui-update-current-time", { payload: x }), 128 & t.$$.dirty[0] && r("ui-update-player-state", { payload: i }), 131072 & t.$$.dirty[0] && n(8, d = h.getMetaData()), 320 & t.$$.dirty[0]) {
        const S = Math.min(1, x / d.totalTime);
        n(13, u = 100 * S + "%"), r("ui-update-progress", { payload: S });
      }
      655360 & t.$$.dirty[0] && n(9, p = (() => {
        const { context: S } = h.service.state, _ = S.events.length, W = S.events[0].timestamp, G = S.events[_ - 1].timestamp, X = [];
        return S.events.forEach((j) => {
          if (j.type === re.Custom) {
            const z = { name: j.data.tag, background: A[j.data.tag] || "rgb(73, 80, 246)", position: `${xr(W, G, j.timestamp)}%` };
            X.push(z);
          }
        }), X;
      })()), 1179648 & t.$$.dirty[0] && n(14, m = (() => {
        try {
          const { context: S } = h.service.state, _ = S.events.length, W = S.events[0].timestamp, G = S.events[_ - 1].timestamp, X = function(z) {
            const E = [];
            let U = z[0].timestamp;
            for (const k of z)
              Oa(k) && (k.timestamp - U > 1e4 && E.push([U, k.timestamp]), U = k.timestamp);
            return E;
          }(S.events), j = (z, E, U, k) => ((k - U) / (E - z) * 100).toFixed(2);
          return X.map((z) => ({ name: "inactive period", background: L, position: `${xr(W, G, z[0])}%`, width: `${j(W, G, z[0], z[1])}%` }));
        } catch {
          return [];
        }
      })());
    }, [f, v, g, y, () => {
      switch (i) {
        case "playing":
          b();
          break;
        case "paused":
          I();
      }
    }, V, x, i, d, p, o, s, a, u, m, r, (S) => {
      if (o === "skipping")
        return;
      const _ = s.getBoundingClientRect();
      let W = (S.clientX - _.left) / _.width;
      W < 0 ? W = 0 : W > 1 && (W = 1);
      const G = d.totalTime * W;
      l = !1, R(G);
    }, h, C, A, L, I, b, R, N, () => {
      n(0, f = !f);
    }, () => Promise.resolve().then(() => {
      n(8, d = h.getMetaData());
    }), function(S) {
      Pe[S ? "unshift" : "push"](() => {
        a = S, n(12, a);
      });
    }, function(S) {
      Pe[S ? "unshift" : "push"](() => {
        s = S, n(11, s);
      });
    }, (S) => V(S), function(S) {
      f = S, n(0, f);
    }, () => r("fullscreen")];
  }
  class Za extends Ln {
    constructor(e) {
      super(), Fn(this, e, Ga, Ua, Rn, { replayer: 17, showController: 2, autoPlay: 18, skipInactive: 0, speedOption: 3, speed: 1, tags: 19, inactiveColor: 20, toggle: 4, play: 21, pause: 22, goto: 23, playRange: 24, setSpeed: 5, toggleSkipInactive: 25, triggerUpdateMeta: 26 }, null, [-1, -1]);
    }
    get toggle() {
      return this.$$.ctx[4];
    }
    get play() {
      return this.$$.ctx[21];
    }
    get pause() {
      return this.$$.ctx[22];
    }
    get goto() {
      return this.$$.ctx[23];
    }
    get playRange() {
      return this.$$.ctx[24];
    }
    get setSpeed() {
      return this.$$.ctx[5];
    }
    get toggleSkipInactive() {
      return this.$$.ctx[25];
    }
    get triggerUpdateMeta() {
      return this.$$.ctx[26];
    }
  }
  function Pr(t) {
    let e, n, r = { replayer: t[7], showController: t[3], autoPlay: t[1], speedOption: t[2], skipInactive: t[0], tags: t[4], inactiveColor: t[5] };
    return e = new Za({ props: r }), t[32](e), e.$on("fullscreen", t[33]), { c() {
      vi(e.$$.fragment);
    }, m(i, o) {
      Mn(e, i, o), n = !0;
    }, p(i, o) {
      const s = {};
      128 & o[0] && (s.replayer = i[7]), 8 & o[0] && (s.showController = i[3]), 2 & o[0] && (s.autoPlay = i[1]), 4 & o[0] && (s.speedOption = i[2]), 1 & o[0] && (s.skipInactive = i[0]), 16 & o[0] && (s.tags = i[4]), 32 & o[0] && (s.inactiveColor = i[5]), e.$set(s);
    }, i(i) {
      n || (Fe(e.$$.fragment, i), n = !0);
    }, o(i) {
      ot(e.$$.fragment, i), n = !1;
    }, d(i) {
      t[32](null), Dn(e, i);
    } };
  }
  function Ka(t) {
    let e, n, r, i, o = t[7] && Pr(t);
    return { c() {
      e = de("div"), n = de("div"), r = we(), o && o.c(), B(n, "class", "rr-player__frame"), B(n, "style", t[11]), B(e, "class", "rr-player"), B(e, "style", t[12]);
    }, m(s, a) {
      Le(s, e, a), J(e, n), t[31](n), J(e, r), o && o.m(e, null), t[34](e), i = !0;
    }, p(s, a) {
      (!i || 2048 & a[0]) && B(n, "style", s[11]), s[7] ? o ? (o.p(s, a), 128 & a[0] && Fe(o, 1)) : (o = Pr(s), o.c(), Fe(o, 1), o.m(e, null)) : o && (Ci(), ot(o, 1, 1, () => {
        o = null;
      }), Ii()), (!i || 4096 & a[0]) && B(e, "style", s[12]);
    }, i(s) {
      i || (Fe(o), i = !0);
    }, o(s) {
      ot(o), i = !1;
    }, d(s) {
      s && Re(e), t[31](null), o && o.d(), t[34](null);
    } };
  }
  function $a(t, e, n) {
    let r, { width: i = 1024 } = e, { height: o = 576 } = e, { maxScale: s = 1 } = e, { events: a = [] } = e, { skipInactive: l = !0 } = e, { autoPlay: c = !0 } = e, { speedOption: d = [1, 2, 4, 8] } = e, { speed: u = 1 } = e, { showController: p = !0 } = e, { tags: m = {} } = e, { inactiveColor: h = "#D4D4D4" } = e, g, C, f, y, v, A, L = i, x = o;
    const P = (w, T) => {
      const I = [i / T.width, o / T.height];
      s && I.push(s), w.style.transform = `scale(${Math.min(...I)})translate(-50%, -50%)`;
    }, D = () => {
      var w;
      g && (Nr() ? document.exitFullscreen ? document.exitFullscreen() : document.mozExitFullscreen ? document.mozExitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen() : (w = g).requestFullscreen ? w.requestFullscreen() : w.mozRequestFullScreen ? w.mozRequestFullScreen() : w.webkitRequestFullscreen ? w.webkitRequestFullscreen() : w.msRequestFullscreen && w.msRequestFullscreen());
    };
    return mi(() => {
      if (d !== void 0 && kr(d) !== "array")
        throw new Error("speedOption must be array");
      if (d.forEach((T) => {
        if (kr(T) !== "number")
          throw new Error("item of speedOption must be number");
      }), d.indexOf(u) < 0)
        throw new Error(`speed must be one of speedOption,
        current config:
        {
          ...
          speed: ${u},
          speedOption: [${d.toString()}]
          ...
        }
        `);
      var w;
      n(7, r = new Wa(a, Object.assign({ speed: u, root: C, unpackFn: Ta }, e))), r.on("resize", (T) => {
        P(r.wrapper, T);
      }), w = () => {
        Nr() ? setTimeout(() => {
          L = i, x = o, n(13, i = g.offsetWidth), n(14, o = g.offsetHeight - (p ? 80 : 0)), P(r.wrapper, { width: r.iframe.offsetWidth, height: r.iframe.offsetHeight });
        }, 0) : (n(13, i = L), n(14, o = x), P(r.wrapper, { width: r.iframe.offsetWidth, height: r.iframe.offsetHeight }));
      }, document.addEventListener("fullscreenchange", w), document.addEventListener("webkitfullscreenchange", w), document.addEventListener("mozfullscreenchange", w), document.addEventListener("MSFullscreenChange", w), f = () => {
        document.removeEventListener("fullscreenchange", w), document.removeEventListener("webkitfullscreenchange", w), document.removeEventListener("mozfullscreenchange", w), document.removeEventListener("MSFullscreenChange", w);
      };
    }), fi(() => {
      f && f();
    }), t.$$set = (w) => {
      n(39, e = nr(nr({}, e), ir(w))), "width" in w && n(13, i = w.width), "height" in w && n(14, o = w.height), "maxScale" in w && n(15, s = w.maxScale), "events" in w && n(16, a = w.events), "skipInactive" in w && n(0, l = w.skipInactive), "autoPlay" in w && n(1, c = w.autoPlay), "speedOption" in w && n(2, d = w.speedOption), "speed" in w && n(17, u = w.speed), "showController" in w && n(3, p = w.showController), "tags" in w && n(4, m = w.tags), "inactiveColor" in w && n(5, h = w.inactiveColor);
    }, t.$$.update = () => {
      24576 & t.$$.dirty[0] && n(11, v = Er({ width: `${i}px`, height: `${o}px` })), 24584 & t.$$.dirty[0] && n(12, A = Er({ width: `${i}px`, height: `${o + (p ? 80 : 0)}px` }));
    }, e = ir(e), [l, c, d, p, m, h, D, r, g, C, y, v, A, i, o, s, a, u, () => r.getMirror(), () => {
      P(r.wrapper, { width: r.iframe.offsetWidth, height: r.iframe.offsetHeight });
    }, (w, T) => {
      switch (r.on(w, T), w) {
        case "ui-update-current-time":
        case "ui-update-progress":
        case "ui-update-player-state":
          y.$on(w, ({ detail: I }) => T(I));
      }
    }, (w) => {
      r.addEvent(w), y.triggerUpdateMeta();
    }, () => r.getMetaData(), () => r, () => {
      y.toggle();
    }, (w) => {
      y.setSpeed(w);
    }, () => {
      y.toggleSkipInactive();
    }, () => {
      y.play();
    }, () => {
      y.pause();
    }, (w, T) => {
      y.goto(w, T);
    }, (w, T, I = !1, b) => {
      y.playRange(w, T, I, b);
    }, function(w) {
      Pe[w ? "unshift" : "push"](() => {
        C = w, n(9, C);
      });
    }, function(w) {
      Pe[w ? "unshift" : "push"](() => {
        y = w, n(10, y);
      });
    }, () => D(), function(w) {
      Pe[w ? "unshift" : "push"](() => {
        g = w, n(8, g);
      });
    }];
  }
  class Ya extends Ln {
    constructor(e) {
      super(), Fn(this, e, $a, Ka, Rn, { width: 13, height: 14, maxScale: 15, events: 16, skipInactive: 0, autoPlay: 1, speedOption: 2, speed: 17, showController: 3, tags: 4, inactiveColor: 5, getMirror: 18, triggerResize: 19, toggleFullscreen: 6, addEventListener: 20, addEvent: 21, getMetaData: 22, getReplayer: 23, toggle: 24, setSpeed: 25, toggleSkipInactive: 26, play: 27, pause: 28, goto: 29, playRange: 30 }, null, [-1, -1]);
    }
    get getMirror() {
      return this.$$.ctx[18];
    }
    get triggerResize() {
      return this.$$.ctx[19];
    }
    get toggleFullscreen() {
      return this.$$.ctx[6];
    }
    get addEventListener() {
      return this.$$.ctx[20];
    }
    get addEvent() {
      return this.$$.ctx[21];
    }
    get getMetaData() {
      return this.$$.ctx[22];
    }
    get getReplayer() {
      return this.$$.ctx[23];
    }
    get toggle() {
      return this.$$.ctx[24];
    }
    get setSpeed() {
      return this.$$.ctx[25];
    }
    get toggleSkipInactive() {
      return this.$$.ctx[26];
    }
    get play() {
      return this.$$.ctx[27];
    }
    get pause() {
      return this.$$.ctx[28];
    }
    get goto() {
      return this.$$.ctx[29];
    }
    get playRange() {
      return this.$$.ctx[30];
    }
  }
  class za extends Ya {
    constructor(e) {
      super({ target: e.target, props: e.data || e.props });
    }
  }
  class Ha {
    constructor(e) {
      le(this, "integratedWidgetToken", "");
      le(this, "screenRecordEvent", []);
      le(this, "recorderObj", null);
      this.integratedWidgetToken = e;
    }
    setupWidgetScreenRecorderElement() {
      if (!M.modules.widget.state.widgetContainerState[this.integratedWidgetToken])
        return;
      _t((r) => {
        const i = r(M.modules.widget.state).widgetContainerState[this.integratedWidgetToken].isControllerVisible;
        if (!M.modules.widget.state.widgetContainerState[this.integratedWidgetToken].isElementsMounted)
          return;
        const o = Se(this.integratedWidgetToken);
        i ? o.controllerWrapper.style.visibility = "visible" : o.controllerWrapper.style.visibility = "hidden";
      });
      const { controllerFrameWrapperId: e, controllerFrameId: n } = M.modules.widget.state.widgetContainerState[this.integratedWidgetToken];
      return `<div id="${e}" class="controller-frame crowd-block rr-block " style="visibility: hidden;">
                <div class="controller-wrapper" style="background-color: white !important;">
                  <div class="controller-drag">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                      </svg>
                  </div>
                  <iframe id="${n}" frameborder="0" allowtransparency="true"></iframe>
                </div>
            </div>`;
    }
    setupWidgetScreenRecorderPreviewElement() {
      if (!M.modules.widget.state.widgetContainerState[this.integratedWidgetToken])
        return;
      _t((n) => {
        const r = n(M.modules.widget.state).widgetContainerState[this.integratedWidgetToken].isRecordPlayerVisible;
        if (!M.modules.widget.state.widgetContainerState[this.integratedWidgetToken].isElementsMounted)
          return;
        const i = Se(this.integratedWidgetToken);
        r ? i.playerFrame.style.visibility = "visible" : i.playerFrame.style.visibility = "hidden";
      });
      const { screenRecordPlayerFrameId: e } = M.modules.widget.state.widgetContainerState[this.integratedWidgetToken];
      return `<div id="${e}" class="record-player-frame" style="visibility: hidden;">
                    <div class="player-action">
                        <button type="button" id="delete-screen-record-${this.integratedWidgetToken}">Cancel</button>
                        <button type="button" id="save-screen-record-${this.integratedWidgetToken}">Save video</button>
                    </div>
                    <div class="crowd-player-container" id="record-player-${this.integratedWidgetToken}"></div>
                </div>`;
    }
    assignListenerToControlButton() {
      var e, n;
      (e = document.getElementById(`delete-screen-record-${this.integratedWidgetToken}`)) == null || e.addEventListener("click", () => {
        this.clearRecording(), document.body.classList.remove("show-crowd-player"), M.modules.widget.action.updateWidgetSectionVisibility(
          this.integratedWidgetToken,
          {
            isRecordPlayerVisible: !1,
            isPanelVisible: !0
          }
        );
      }), (n = document.getElementById(`save-screen-record-${this.integratedWidgetToken}`)) == null || n.addEventListener("click", () => {
        this.saveScreenRecording(this.integratedWidgetToken), document.body.classList.remove("show-crowd-player"), M.modules.widget.action.updateWidgetSectionVisibility(
          this.integratedWidgetToken,
          {
            isRecordPlayerVisible: !1,
            isPanelVisible: !0
          }
        );
      });
    }
    startBugTrackingScreenRecording() {
      this.appendWidgetFrameToBody(), this.clearRecording(), this.recorderObj = Tt({
        emit: (e) => {
          this.screenRecordEvent.push(e);
        },
        recordCanvas: !0
        //  blockClass: "controller-frame" // rr-block,
      });
    }
    stopBugTrackingScreenRecording() {
      this.generateHeightForPlayer(), this.recorderObj();
      const e = document.getElementById(
        `record-player-${this.integratedWidgetToken}`
      );
      this.emptyElement(e), setTimeout(() => {
        new za({
          target: e,
          props: {
            events: this.screenRecordEvent,
            height: this.generateHeightForPlayer(),
            skipInactive: !0
          }
        });
      }, 200), this.removeWidgetFrameToBody();
    }
    clearRecording() {
      this.screenRecordEvent = [];
    }
    saveScreenRecording(e) {
      var i;
      const n = Se(e), r = {
        eventType: ve.ScreenRecordDone,
        token: e,
        payload: {
          recordedEvent: this.screenRecordEvent
        }
      };
      (i = n.panelIframe.contentWindow) == null || i.postMessage(
        r,
        Ye
      );
    }
    emptyElement(e) {
      for (; e.firstChild; )
        e.removeChild(e.firstChild);
    }
    appendWidgetFrameToBody() {
      const e = document.createElement("div");
      e.classList.add("recording-frame"), document.body.classList.add(Vn), document.body.appendChild(e);
    }
    generateHeightForPlayer() {
      const { screenRecordPlayerFrameId: e } = M.modules.widget.state.widgetContainerState[this.integratedWidgetToken], n = window.innerHeight, r = document.getElementById(
        e
      );
      if (r) {
        const i = window.getComputedStyle(r), o = parseInt(
          i.getPropertyValue("padding-top"),
          10
        );
        return n - (o * 2 + 60 + 20);
      }
      return 0;
    }
    removeWidgetFrameToBody() {
      document.body.classList.remove(Vn);
    }
  }
  const Br = Ye;
  class Qa {
    constructor(e) {
      le(this, "integratedWidgetToken", "");
      le(this, "widgetParentContainer", null);
      le(this, "crowdWidgetPanel");
      le(this, "crowdWidgetLauncher");
      le(this, "crowdScreenRecorder");
      le(this, "crowdWidgetHelper");
      this.integratedWidgetToken = e, M.modules.widget.action.createWidgetInitialState(
        this.integratedWidgetToken
      ), this.crowdWidgetPanel = new Ro(e), this.crowdWidgetLauncher = new ko(e), this.crowdScreenRecorder = new Ha(
        e
      ), this.crowdWidgetHelper = new No(
        e,
        this.crowdWidgetLauncher
      );
    }
    setupWidgetContainer() {
      M.modules.widget.action.generateElementIds(
        this.integratedWidgetToken,
        En
      ), this.widgetParentContainer = document.createElement("div"), this.widgetParentContainer.classList.add("crowd-widget"), this.widgetParentContainer.setAttribute(
        "id",
        M.modules.widget.state.widgetContainerState[this.integratedWidgetToken].widgetContainerId
      ), this.widgetParentContainer.innerHTML += this.crowdWidgetLauncher.setupWidgetLauncherElement(), this.widgetParentContainer.innerHTML += this.crowdWidgetPanel.setupWidgetPanelElement(), this.widgetParentContainer.innerHTML += this.crowdScreenRecorder.setupWidgetScreenRecorderElement(), this.widgetParentContainer.innerHTML += this.crowdScreenRecorder.setupWidgetScreenRecorderPreviewElement(), document.body.appendChild(this.widgetParentContainer), setTimeout(() => {
        M.modules.widget.action.updateWidgetSectionVisibility(
          this.integratedWidgetToken,
          {
            isElementsMounted: !0
          }
        );
      }, 100), this.crowdWidgetPanel.addListenerForPanelCloseBtn(), window.addEventListener("message", (e) => {
        e.origin === Br && this.listenAndExecutePostMessageInteraction(e);
      }), this.assignWidgetPanelAndLauncherEndpoints(), this.crowdWidgetHelper.enableControllerDragging(), this.crowdScreenRecorder.assignListenerToControlButton(), window.addEventListener(
        "popstate",
        this.crowdWidgetHelper.triggerWidgetOnLinkHash.bind(this)
      );
    }
    /**
     * Assigns widget panel and launcher endpoints if launcherIframe and panelIframe elements are present.
     */
    assignWidgetPanelAndLauncherEndpoints() {
      const e = Se(this.integratedWidgetToken), n = Gn(this.integratedWidgetToken);
      if (e.launcherIframe && e.panelIframe && e.launcherIframe.contentWindow && e.panelIframe.contentWindow) {
        const { launcherEndpoint: r, panelEndpoint: i } = n;
        e.launcherIframe.contentWindow.location.href = r, e.panelIframe.contentWindow.location.href = i;
      }
    }
    /**
     * Assigns widget controller endpoints based on element references and integration token.
     */
    assignWidgetControllerEndpoints() {
      var r;
      const e = Se(this.integratedWidgetToken), n = Gn(this.integratedWidgetToken);
      (r = e.controllerIframe) != null && r.contentWindow && (e.controllerIframe.contentWindow.location.href = n.controllerEndpoint);
    }
    listenAndExecutePostMessageInteraction(e) {
      var n;
      if (e.origin === Br && e.data.token === this.integratedWidgetToken)
        switch (e.data.eventType) {
          case ve.LauncherLoaded: {
            if (M.modules.widget.action.updateIframeLoaded(
              this.integratedWidgetToken,
              {
                isLauncherFrameLoaded: !0
              }
            ), !e.data.payload.showFeedbackWidget) {
              this.clearWidgetOnDeactivation();
              return;
            }
            M.modules.widget.action.updateShouldShowLauncher(
              this.integratedWidgetToken,
              !e.data.payload.hideLauncherButton
            ), M.modules.widget.action.updateDisplayRules(
              this.integratedWidgetToken,
              e.data.payload.displayRules
            ), this.crowdWidgetHelper.checkCompatibilityForWidget();
            break;
          }
          case ve.LauncherResize: {
            this.crowdWidgetLauncher.adjustWidgetLauncherPositionDimension(
              "Resize",
              e.data.payload
            );
            break;
          }
          case ve.ImpressionRecorded: {
            To();
            break;
          }
          case ve.PanelLoaded: {
            M.modules.widget.action.updateIframeLoaded(
              this.integratedWidgetToken,
              {
                isPanelFrameLoaded: !0
              }
            ), this.crowdWidgetPanel.adjustWidgetPanelPositionDimension(
              "Position",
              e.data.payload
            ), this.crowdWidgetHelper.triggerWidgetOnLinkHash(), this.assignWidgetControllerEndpoints(), M.modules.widget.action.updateIframeLoaded(
              this.integratedWidgetToken,
              {
                isControllerFrameLoaded: !0
              }
            );
            break;
          }
          case ve.PanelResize: {
            this.crowdWidgetPanel.adjustWidgetPanelPositionDimension(
              "Resize",
              e.data.payload
            );
            break;
          }
          case ve.OpenPanel: {
            M.modules.widget.action.updateWidgetSectionVisibility(
              this.integratedWidgetToken,
              {
                isPanelVisible: !0,
                isLauncherVisible: !1
              }
            );
            const r = Se(
              this.integratedWidgetToken
            ), i = {
              eventType: ve.StartCountDown,
              token: this.integratedWidgetToken,
              payload: {}
            };
            (n = r.panelIframe.contentWindow) == null || n.postMessage(
              i,
              Ye
            );
            break;
          }
          case ve.StartScreenRecord: {
            this.crowdScreenRecorder.startBugTrackingScreenRecording(), M.modules.widget.action.updateWidgetSectionVisibility(
              this.integratedWidgetToken,
              {
                isControllerVisible: !0,
                isPanelVisible: !1
              }
            );
            break;
          }
          case ve.StopScreenRecord:
            this.crowdScreenRecorder.stopBugTrackingScreenRecording(), document.body.classList.add("show-crowd-player"), M.modules.widget.action.updateWidgetSectionVisibility(
              this.integratedWidgetToken,
              {
                isControllerVisible: !1,
                isRecordPlayerVisible: !0
              }
            );
        }
    }
    clearWidgetOnDeactivation() {
      try {
        this.widgetParentContainer.remove();
      } catch {
      }
    }
  }
  const Ja = async () => {
    try {
      if (window.CrowdApp) {
        const t = window.CrowdApp.crowd_extension_token;
        if (!t)
          throw new Error(
            "Crowd App installation failed. Please ensure that you are using the correct code snippet"
          );
        const e = await Ao(t);
        if (e.data.length === 0)
          throw new Error(
            "No widget is active for this extension. Please ensure that you are using the correct code snippet"
          );
        e.data.forEach((n) => {
          new Qa(n).setupWidgetContainer();
        });
      }
    } catch (t) {
      console.warn(
        t.message ?? "Crowd App installation failed. Please ensure that you are using the correct code snippet"
      );
    }
  }, ja = function() {
    const t = "Script loaded", e = "Click event did not change the URL";
    let n = [], r, i = "";
    try {
      i = document.referrer ? new URL(document.referrer).origin : "*";
    } catch {
      i = "*";
    }
    const o = [
      "http://localhost:2222/",
      "https://app.crowdapp.io/",
      "https://version2.crowdapp.io/"
    ];
    function s(f, y = 2) {
      (() => {
        try {
          i && i !== "*" && parent.postMessage(f, i), parent.postMessage(f, "*"), o.forEach(function(A) {
            try {
              parent.postMessage(f, A);
            } catch (L) {
              console.log(L);
            }
          });
        } catch {
          y > 0 && setTimeout(function() {
            s(f, y - 1);
          }, 500);
        }
      })();
    }
    function a() {
      const f = {
        type: "script_confirmation",
        message: "Script loaded and ready",
        timestamp: Date.now(),
        url: window.location.href,
        ready: !0
      };
      s(f), setTimeout(function() {
        s(f);
      }, 1e3);
      let y = 0;
      const v = setInterval(function() {
        if (y >= 5) {
          clearInterval(v);
          return;
        }
        s({
          type: "script_heartbeat",
          message: "Script heartbeat",
          heartbeat: ++y,
          timestamp: Date.now(),
          url: window.location.href
        });
      }, 2e3);
    }
    function l() {
      const f = document.location.href;
      s({ type: "navigation", url: f });
    }
    function c(f) {
      if (typeof window.rrweb < "u") {
        f();
        return;
      }
      const y = document.createElement("script");
      y.src = "https://cdn.jsdelivr.net/npm/rrweb@latest/dist/rrweb.min.js", y.onload = f, y.onerror = function() {
        s({
          type: "script_error",
          error: "Failed to load rrweb library"
        });
      }, document.head.appendChild(y);
    }
    const d = new MutationObserver(
      function() {
        l();
      }
    ), u = {
      childList: !0,
      subtree: !0
    };
    d.observe(document, u);
    function p() {
      const f = document.location.href;
      setTimeout(function() {
        f === document.location.href ? s({ type: "click_no_nav", message: e }) : l();
      }, 100);
    }
    document.addEventListener("click", p, !0), window.addEventListener("message", function(f) {
      f.data && f.data.type === "detection_ping" && s({
        type: "script_confirmation",
        message: "Script responding to ping",
        timestamp: Date.now(),
        pingResponse: !0
      });
    });
    function m() {
      const f = o.some(function(v) {
        return document.referrer.startsWith(v);
      }), y = window.self !== window.top;
      (f || y) && c(function() {
        try {
          r && r(), n = [], r = window.rrweb.record({
            emit: function(v) {
              n.push(v), n.length % 50 === 0 && h();
            },
            recordCanvas: !0,
            recordCrossOriginIframes: !0
          }), s({ type: "recording_started" });
        } catch (v) {
          s({ type: "recording_error", error: v.message });
        }
      });
    }
    function h() {
      if (n.length === 0)
        return;
      const f = n.slice();
      s({
        type: "rrweb_events",
        events: f,
        timestamp: Date.now(),
        url: document.location.href
      });
    }
    setInterval(h, 5e3);
    function g() {
      r && (r(), r = void 0), d.disconnect(), document.removeEventListener("click", p, !0), h(), s({ type: "cleanup_complete" });
    }
    window.addEventListener("beforeunload", g);
    function C() {
      try {
        s({ type: "script_loaded", message: t }), a(), m();
      } catch (f) {
        s({
          type: "script_error",
          error: f.message,
          timestamp: Date.now()
        });
      }
    }
    document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", C) : C(), setTimeout(C, 100);
  };
  So();
  Ja();
  ja();
});
export default Xa();
