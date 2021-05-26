/*!

   Flowplayer v7.2.1 (Thursday, 19. October 2017 01:23PM) | flowplayer.com/license

*/
!(function (e) {
  function t(e, t, n, i) {
    for (
      var o, a = n.slice(), s = r(t, e), l = 0, u = a.length;
      u > l &&
      ((handler = a[l]),
      "object" == typeof handler && "function" == typeof handler.handleEvent
        ? handler.handleEvent(s)
        : handler.call(e, s),
      !s.stoppedImmediatePropagation);
      l++
    );
    return (
      (o = !s.stoppedPropagation),
      i && o && e.parentNode
        ? e.parentNode.dispatchEvent(s)
        : !s.defaultPrevented
    );
  }
  function n(e, t) {
    return { configurable: !0, get: e, set: t };
  }
  function i(e, t, i) {
    var r = y(t || e, i);
    m(
      e,
      "textContent",
      n(
        function () {
          return r.get.call(this);
        },
        function (e) {
          r.set.call(this, e);
        }
      )
    );
  }
  function r(e, t) {
    return (
      (e.currentTarget = t),
      (e.eventPhase = e.target === e.currentTarget ? 2 : 3),
      e
    );
  }
  function o(e, t) {
    for (var n = e.length; n-- && e[n] !== t; );
    return n;
  }
  function a() {
    if ("BR" === this.tagName) return "\n";
    for (var e = this.firstChild, t = []; e; )
      8 !== e.nodeType && 7 !== e.nodeType && t.push(e.textContent),
        (e = e.nextSibling);
    return t.join("");
  }
  function s(e) {
    !f &&
      C.test(document.readyState) &&
      ((f = !f),
      document.detachEvent(d, s),
      (e = document.createEvent("Event")),
      e.initEvent(p, !0, !0),
      document.dispatchEvent(e));
  }
  function l(e) {
    for (var t; (t = this.lastChild); ) this.removeChild(t);
    null != e && this.appendChild(document.createTextNode(e));
  }
  function u(t, n) {
    return (
      n || (n = e.event),
      n.target || (n.target = n.srcElement || n.fromElement || document),
      n.timeStamp || (n.timeStamp = new Date().getTime()),
      n
    );
  }
  if (!document.createEvent) {
    var c = !0,
      f = !1,
      d = "onreadystatechange",
      p = "DOMContentLoaded",
      h = "__IE8__" + Math.random(),
      g = e.Object,
      m =
        g.defineProperty ||
        function (e, t, n) {
          e[t] = n.value;
        },
      v =
        g.defineProperties ||
        function (t, n) {
          for (var i in n)
            if (w.call(n, i))
              try {
                m(t, i, n[i]);
              } catch (r) {
                e.console &&
                  console.log(i + " failed on object:", t, r.message);
              }
        },
      y = g.getOwnPropertyDescriptor,
      w = g.prototype.hasOwnProperty,
      b = e.Element.prototype,
      I = e.Text.prototype,
      M = /^[a-z]+$/,
      C = /loaded|complete/,
      A = {},
      S = document.createElement("div");
    i(e.HTMLCommentElement.prototype, b, "nodeValue"),
      i(e.HTMLScriptElement.prototype, null, "text"),
      i(I, null, "nodeValue"),
      i(e.HTMLTitleElement.prototype, null, "text"),
      m(
        e.HTMLStyleElement.prototype,
        "textContent",
        (function (e) {
          return n(
            function () {
              return e.get.call(this.styleSheet);
            },
            function (t) {
              e.set.call(this.styleSheet, t);
            }
          );
        })(y(e.CSSStyleSheet.prototype, "cssText"))
      ),
      v(b, {
        textContent: { get: a, set: l },
        firstElementChild: {
          get: function () {
            for (var e = this.childNodes || [], t = 0, n = e.length; n > t; t++)
              if (1 == e[t].nodeType) return e[t];
          },
        },
        lastElementChild: {
          get: function () {
            for (var e = this.childNodes || [], t = e.length; t--; )
              if (1 == e[t].nodeType) return e[t];
          },
        },
        previousElementSibling: {
          get: function () {
            for (var e = this.previousSibling; e && 1 != e.nodeType; )
              e = e.previousSibling;
            return e;
          },
        },
        nextElementSibling: {
          get: function () {
            for (var e = this.nextSibling; e && 1 != e.nodeType; )
              e = e.nextSibling;
            return e;
          },
        },
        childElementCount: {
          get: function () {
            for (
              var e = 0, t = this.childNodes || [], n = t.length;
              n--;
              e += 1 == t[n].nodeType
            );
            return e;
          },
        },
        addEventListener: {
          value: function (e, n, i) {
            var r,
              a = this,
              s = "on" + e,
              l = a[h] || m(a, h, { value: {} })[h],
              c = l[s] || (l[s] = {}),
              f = c.h || (c.h = []);
            if (!w.call(c, "w")) {
              if (
                ((c.w = function (e) {
                  return e[h] || t(a, u(a, e), f, !1);
                }),
                !w.call(A, s))
              )
                if (M.test(e))
                  try {
                    (r = document.createEventObject()),
                      (r[h] = !0),
                      9 != a.nodeType &&
                        null == a.parentNode &&
                        S.appendChild(a),
                      a.fireEvent(s, r),
                      (A[s] = !0);
                  } catch (r) {
                    for (A[s] = !1; S.hasChildNodes(); )
                      S.removeChild(S.firstChild);
                  }
                else A[s] = !1;
              (c.n = A[s]) && a.attachEvent(s, c.w);
            }
            o(f, n) < 0 && f[i ? "unshift" : "push"](n);
          },
        },
        dispatchEvent: {
          value: function (e) {
            var n,
              i = this,
              r = "on" + e.type,
              o = i[h],
              a = o && o[r],
              s = !!a;
            return (
              e.target || (e.target = i),
              s
                ? a.n
                  ? i.fireEvent(r, e)
                  : t(i, e, a.h, !0)
                : (n = i.parentNode)
                ? n.dispatchEvent(e)
                : !0,
              !e.defaultPrevented
            );
          },
        },
        removeEventListener: {
          value: function (e, t, n) {
            var i = this,
              r = "on" + e,
              a = i[h],
              s = a && a[r],
              l = s && s.h,
              u = l ? o(l, t) : -1;
            u > -1 && l.splice(u, 1);
          },
        },
      }),
      v(I, {
        addEventListener: { value: b.addEventListener },
        dispatchEvent: { value: b.dispatchEvent },
        removeEventListener: { value: b.removeEventListener },
      }),
      v(e.XMLHttpRequest.prototype, {
        addEventListener: {
          value: function (e, t, n) {
            var i = this,
              r = "on" + e,
              a = i[h] || m(i, h, { value: {} })[h],
              s = a[r] || (a[r] = {}),
              l = s.h || (s.h = []);
            o(l, t) < 0 &&
              (i[r] ||
                (i[r] = function () {
                  var t = document.createEvent("Event");
                  t.initEvent(e, !0, !0), i.dispatchEvent(t);
                }),
              l[n ? "unshift" : "push"](t));
          },
        },
        dispatchEvent: {
          value: function (e) {
            var n = this,
              i = "on" + e.type,
              r = n[h],
              o = r && r[i],
              a = !!o;
            return a && (o.n ? n.fireEvent(i, e) : t(n, e, o.h, !0));
          },
        },
        removeEventListener: { value: b.removeEventListener },
      }),
      v(e.Event.prototype, {
        bubbles: { value: !0, writable: !0 },
        cancelable: { value: !0, writable: !0 },
        preventDefault: {
          value: function () {
            this.cancelable &&
              ((this.defaultPrevented = !0), (this.returnValue = !1));
          },
        },
        stopPropagation: {
          value: function () {
            (this.stoppedPropagation = !0), (this.cancelBubble = !0);
          },
        },
        stopImmediatePropagation: {
          value: function () {
            (this.stoppedImmediatePropagation = !0), this.stopPropagation();
          },
        },
        initEvent: {
          value: function (e, t, n) {
            (this.type = e),
              (this.bubbles = !!t),
              (this.cancelable = !!n),
              this.bubbles || this.stopPropagation();
          },
        },
      }),
      v(e.HTMLDocument.prototype, {
        textContent: {
          get: function () {
            return 11 === this.nodeType ? a.call(this) : null;
          },
          set: function (e) {
            11 === this.nodeType && l.call(this, e);
          },
        },
        addEventListener: {
          value: function (t, n, i) {
            var r = this;
            b.addEventListener.call(r, t, n, i),
              c &&
                t === p &&
                !C.test(r.readyState) &&
                ((c = !1),
                r.attachEvent(d, s),
                e == top &&
                  (function o(e) {
                    try {
                      r.documentElement.doScroll("left"), s();
                    } catch (t) {
                      setTimeout(o, 50);
                    }
                  })());
          },
        },
        dispatchEvent: { value: b.dispatchEvent },
        removeEventListener: { value: b.removeEventListener },
        createEvent: {
          value: function (e) {
            var t;
            if ("Event" !== e) throw new Error("unsupported " + e);
            return (
              (t = document.createEventObject()),
              (t.timeStamp = new Date().getTime()),
              t
            );
          },
        },
      }),
      v(e.Window.prototype, {
        getComputedStyle: {
          value: (function () {
            function e(e) {
              this._ = e;
            }
            function t() {}
            var n = /^(?:[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/,
              i = /^(top|right|bottom|left)$/,
              r = /\-([a-z])/g,
              o = function (e, t) {
                return t.toUpperCase();
              };
            return (
              (e.prototype.getPropertyValue = function (e) {
                var t,
                  a,
                  s,
                  l = this._,
                  u = l.style,
                  c = l.currentStyle,
                  f = l.runtimeStyle;
                return (
                  (e = ("float" === e ? "style-float" : e).replace(r, o)),
                  (t = c ? c[e] : u[e]),
                  n.test(t) &&
                    !i.test(e) &&
                    ((a = u.left),
                    (s = f && f.left),
                    s && (f.left = c.left),
                    (u.left = "fontSize" === e ? "1em" : t),
                    (t = u.pixelLeft + "px"),
                    (u.left = a),
                    s && (f.left = s)),
                  null == t ? t : t + "" || "auto"
                );
              }),
              (t.prototype.getPropertyValue = function () {
                return null;
              }),
              function (n, i) {
                return i ? new t(n) : new e(n);
              }
            );
          })(),
        },
        addEventListener: {
          value: function (n, i, r) {
            var a,
              s = e,
              l = "on" + n;
            s[l] ||
              (s[l] = function (e) {
                return t(s, u(s, e), a, !1);
              }),
              (a = s[l][h] || (s[l][h] = [])),
              o(a, i) < 0 && a[r ? "unshift" : "push"](i);
          },
        },
        dispatchEvent: {
          value: function (t) {
            var n = e["on" + t.type];
            return n ? n.call(e, t) !== !1 && !t.defaultPrevented : !0;
          },
        },
        removeEventListener: {
          value: function (t, n, i) {
            var r = "on" + t,
              a = (e[r] || g)[h],
              s = a ? o(a, n) : -1;
            s > -1 && a.splice(s, 1);
          },
        },
      });
  }
})(this),
  (function (e) {
    if ("object" == typeof exports && "undefined" != typeof module)
      module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
      var t;
      (t =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : this),
        (t.flowplayer = e());
    }
  })(function () {
    var e;
    return (function t(e, n, i) {
      function r(a, s) {
        if (!n[a]) {
          if (!e[a]) {
            var l = "function" == typeof require && require;
            if (!s && l) return l(a, !0);
            if (o) return o(a, !0);
            var u = new Error("Cannot find module '" + a + "'");
            throw ((u.code = "MODULE_NOT_FOUND"), u);
          }
          var c = (n[a] = { exports: {} });
          e[a][0].call(
            c.exports,
            function (t) {
              var n = e[a][1][t];
              return r(n ? n : t);
            },
            c,
            c.exports,
            t,
            e,
            n,
            i
          );
        }
        return n[a].exports;
      }
      for (
        var o = "function" == typeof require && require, a = 0;
        a < i.length;
        a++
      )
        r(i[a]);
      return r;
    })(
      {
        1: [
          function (e, t, n) {
            "use strict";
            var i = (t.exports = {}),
              r = e("class-list"),
              o = window.jQuery,
              a = e("punycode"),
              s = e("computed-style");
            (i.noop = function () {}),
              (i.identity = function (e) {
                return e;
              }),
              (i.removeNode = function (e) {
                e && e.parentNode && e.parentNode.removeChild(e);
              }),
              (i.find = function (e, t) {
                return o
                  ? o(e, t).toArray()
                  : ((t = t || document),
                    Array.prototype.map.call(t.querySelectorAll(e), function (
                      e
                    ) {
                      return e;
                    }));
              }),
              (i.text = function (e, t) {
                e["innerText" in e ? "innerText" : "textContent"] = t;
              }),
              (i.findDirect = function (e, t) {
                return i.find(e, t).filter(function (e) {
                  return e.parentNode === t;
                });
              }),
              (i.hasClass = function (e, t) {
                return "string" != typeof e.className ? !1 : r(e).contains(t);
              }),
              (i.isSameDomain = function (e) {
                var t = window.location,
                  n = i.createElement("a", { href: e });
                return (
                  t.hostname === n.hostname &&
                  t.protocol === n.protocol &&
                  t.port === n.port
                );
              }),
              (i.css = function (e, t, n) {
                return "object" == typeof t
                  ? Object.keys(t).forEach(function (n) {
                      i.css(e, n, t[n]);
                    })
                  : "undefined" != typeof n
                  ? "" === n
                    ? e
                      ? e.style.removeProperty(t)
                      : void 0
                    : e
                    ? e.style.setProperty(t, n)
                    : void 0
                  : e
                  ? s(e, t)
                  : void 0;
              }),
              (i.createElement = function (e, t, n) {
                try {
                  var r = document.createElement(e);
                  for (var a in t)
                    t.hasOwnProperty(a) &&
                      ("css" === a ? i.css(r, t[a]) : i.attr(r, a, t[a]));
                  return n && (r.innerHTML = n), r;
                } catch (s) {
                  if (!o) throw s;
                  return o("<" + e + ">" + n + "</" + e + ">").attr(t)[0];
                }
              }),
              (i.toggleClass = function (e, t, n) {
                if (e) {
                  var i = r(e);
                  "undefined" == typeof n
                    ? i.toggle(t)
                    : n
                    ? i.add(t)
                    : n || i.remove(t);
                }
              }),
              (i.addClass = function (e, t) {
                return i.toggleClass(e, t, !0);
              }),
              (i.removeClass = function (e, t) {
                return i.toggleClass(e, t, !1);
              }),
              (i.append = function (e, t) {
                return e.appendChild(t), e;
              }),
              (i.appendTo = function (e, t) {
                return i.append(t, e), e;
              }),
              (i.prepend = function (e, t) {
                e.insertBefore(t, e.firstChild);
              }),
              (i.insertAfter = function (e, t, n) {
                t == i.lastChild(e) && e.appendChild(n);
                var r = Array.prototype.indexOf.call(e.children, t);
                e.insertBefore(n, e.children[r + 1]);
              }),
              (i.html = function (e, t) {
                (e = e.length ? e : [e]),
                  e.forEach(function (e) {
                    e.innerHTML = t;
                  });
              }),
              (i.attr = function (e, t, n) {
                if (
                  ("class" === t && (t = "className"),
                  i.hasOwnOrPrototypeProperty(e, t))
                )
                  try {
                    e[t] = n;
                  } catch (r) {
                    if (!o) throw r;
                    o(e).attr(t, n);
                  }
                else n === !1 ? e.removeAttribute(t) : e.setAttribute(t, n);
                return e;
              }),
              (i.prop = function (e, t, n) {
                return "undefined" == typeof n ? e && e[t] : void (e[t] = n);
              }),
              (i.offset = function (e) {
                var t = e.getBoundingClientRect();
                return (
                  e.offsetWidth / e.offsetHeight >
                    e.clientWidth / e.clientHeight &&
                    (t = {
                      left: 100 * t.left,
                      right: 100 * t.right,
                      top: 100 * t.top,
                      bottom: 100 * t.bottom,
                      width: 100 * t.width,
                      height: 100 * t.height,
                    }),
                  t
                );
              }),
              (i.width = function (e, t) {
                if (t)
                  return (e.style.width = ("" + t).replace(/px$/, "") + "px");
                var n = i.offset(e).width;
                return "undefined" == typeof n ? e.offsetWidth : n;
              }),
              (i.height = function (e, t) {
                if (t)
                  return (e.style.height = ("" + t).replace(/px$/, "") + "px");
                var n = i.offset(e).height;
                return "undefined" == typeof n ? e.offsetHeight : n;
              }),
              (i.lastChild = function (e) {
                return e.children[e.children.length - 1];
              }),
              (i.hasParent = function (e, t) {
                for (var n = e.parentElement; n; ) {
                  if (i.matches(n, t)) return !0;
                  n = n.parentElement;
                }
                return !1;
              }),
              (i.createAbsoluteUrl = function (e) {
                return i.createElement("a", { href: e }).href;
              }),
              (i.xhrGet = function (e, t, n) {
                var i = new XMLHttpRequest();
                (i.onreadystatechange = function () {
                  return 4 === this.readyState
                    ? this.status >= 400
                      ? n()
                      : void t(this.responseText)
                    : void 0;
                }),
                  i.open("get", e, !0),
                  i.send();
              }),
              (i.pick = function (e, t) {
                var n = {};
                return (
                  t.forEach(function (t) {
                    e.hasOwnProperty(t) && (n[t] = e[t]);
                  }),
                  n
                );
              }),
              (i.hostname = function (e) {
                return a.toUnicode(e || window.location.hostname);
              }),
              (i.browser = {
                webkit: "WebkitAppearance" in document.documentElement.style,
              }),
              (i.getPrototype = function (e) {
                return Object.getPrototypeOf
                  ? Object.getPrototypeOf(e)
                  : e.__proto__;
              }),
              (i.hasOwnOrPrototypeProperty = function (e, t) {
                for (var n = e; n; ) {
                  if (Object.prototype.hasOwnProperty.call(n, t)) return !0;
                  n = i.getPrototype(n);
                }
                return !1;
              }),
              (i.matches = function (e, t) {
                var n = Element.prototype,
                  i =
                    n.matches ||
                    n.matchesSelector ||
                    n.mozMatchesSelector ||
                    n.msMatchesSelector ||
                    n.oMatchesSelector ||
                    n.webkitMatchesSelector ||
                    function (e) {
                      for (
                        var t = this,
                          n = (t.document || t.ownerDocument).querySelectorAll(
                            e
                          ),
                          i = 0;
                        n[i] && n[i] !== t;

                      )
                        i++;
                      return n[i] ? !0 : !1;
                    };
                return i.call(e, t);
              }),
              (function (e) {
                function t(e) {
                  return e.replace(/-[a-z]/g, function (e) {
                    return e[1].toUpperCase();
                  });
                }
                "undefined" != typeof e.setAttribute &&
                  ((e.setProperty = function (e, n) {
                    return this.setAttribute(t(e), String(n));
                  }),
                  (e.getPropertyValue = function (e) {
                    return this.getAttribute(t(e)) || null;
                  }),
                  (e.removeProperty = function (e) {
                    var n = this.getPropertyValue(e);
                    return this.removeAttribute(t(e)), n;
                  }));
              })(window.CSSStyleDeclaration.prototype);
          },
          { "class-list": 36, "computed-style": 37, punycode: 44 },
        ],
        2: [
          function (e, t, n) {
            "use strict";
            var i = e("../common");
            (t.exports = function (e, t, n, r) {
              n = n || "opaque";
              var o = "obj" + ("" + Math.random()).slice(2, 15),
                a =
                  '<object class="fp-engine" id="' + o + '" name="' + o + '" ',
                s = navigator.userAgent.indexOf("MSIE") > -1;
              a += s
                ? 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">'
                : ' data="' + e + '" type="application/x-shockwave-flash">';
              var l = {
                width: "100%",
                height: "100%",
                allowscriptaccess: "always",
                wmode: n,
                quality: "high",
                flashvars: "",
                movie: e + (s ? "?" + o : ""),
                name: o,
              };
              "transparent" !== n && (l.bgcolor = r || "#333333"),
                Object.keys(t).forEach(function (e) {
                  l.flashvars += e + "=" + t[e] + "&";
                }),
                Object.keys(l).forEach(function (e) {
                  a += '<param name="' + e + '" value="' + l[e] + '"/>';
                }),
                (a += "</object>");
              var u = i.createElement("div", {}, a);
              return i.find("object", u);
            }),
              window.attachEvent &&
                window.attachEvent("onbeforeunload", function () {
                  window.__flash_savedUnloadHandler = window.__flash_unloadHandler = function () {};
                });
          },
          { "../common": 1 },
        ],
        3: [
          function (e, t, n) {
            "use strict";
            function i(e) {
              return /^https?:/.test(e);
            }
            var r,
              o = e("../flowplayer"),
              a = e("../common"),
              s = e("./embed"),
              l = e("extend-object"),
              u = e("bean");
            (r = function (e, t) {
              function n(e) {
                function t(e) {
                  return ("0" + parseInt(e).toString(16)).slice(-2);
                }
                return (e = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/))
                  ? "#" + t(e[1]) + t(e[2]) + t(e[3])
                  : void 0;
              }
              function c(e) {
                if (7 === e.length) return e;
                var t = e.split("").slice(1);
                return (
                  "#" +
                  t
                    .map(function (e) {
                      return e + e;
                    })
                    .join("")
                );
              }
              function f(e) {
                return /application\/x-mpegurl/i.test(e.type);
              }
              var d,
                p,
                h,
                g,
                m = e.conf,
                v = [],
                y = {
                  engineName: r.engineName,
                  pick: function (t) {
                    var n = l(
                      {},
                      (function () {
                        if (o.support.flashVideo) {
                          for (var n, i, r = 0; r < t.length; r++)
                            if (
                              ((i = t[r]),
                              /mp4|flv|flash/i.test(i.type) && (n = i),
                              e.conf.swfHls &&
                                /mpegurl/i.test(i.type) &&
                                (n = i),
                              n && !/mp4/i.test(n.type))
                            )
                              return n;
                          return n;
                        }
                      })()
                    );
                    if (n)
                      return (
                        !n.src ||
                          i(n.src) ||
                          e.conf.rtmp ||
                          n.rtmp ||
                          (n.src = a.createAbsoluteUrl(n.src)),
                        n
                      );
                  },
                  suspendEngine: function () {
                    g = !0;
                  },
                  resumeEngine: function () {
                    g = !1;
                  },
                  load: function (r) {
                    function w(e) {
                      return e
                        .replace(/&amp;/g, "%26")
                        .replace(/&/g, "%26")
                        .replace(/=/g, "%3D");
                    }
                    (d = r),
                      v.forEach(function (e) {
                        clearTimeout(e);
                      });
                    var b =
                        a.findDirect("video", t)[0] ||
                        a.find(".fp-player > video", t)[0],
                      I = r.src,
                      M = i(I),
                      C = function () {
                        a.removeNode(b);
                      },
                      A = function (e) {
                        return e.some(function (e) {
                          return !!b.canPlayType(e.type);
                        });
                      };
                    o.support.video && a.prop(b, "autoplay") && A(r.sources)
                      ? u.one(b, "timeupdate", C)
                      : C();
                    var S = r.rtmp || m.rtmp;
                    if (
                      (M || S || (I = a.createAbsoluteUrl(I)),
                      h &&
                        f(r) &&
                        h.data !== a.createAbsoluteUrl(m.swfHls) &&
                        y.unload(),
                      h)
                    ) {
                      ["live", "preload", "loop"].forEach(function (e) {
                        r.hasOwnProperty(e) && h.__set(e, r[e]);
                      }),
                        Object.keys(r.flashls || {}).forEach(function (e) {
                          h.__set("hls_" + e, r.flashls[e]);
                        });
                      var E = !1;
                      if (!M && S) h.__set("rtmp", S.url || S);
                      else {
                        var D = h.__get("rtmp");
                        (E = !!D), h.__set("rtmp", null);
                      }
                      h.__play(I, E || (r.rtmp && r.rtmp !== m.rtmp));
                    } else {
                      (p = "fpCallback" + ("" + Math.random()).slice(3, 15)),
                        (I = w(I));
                      var N = {
                        hostname: m.embedded
                          ? a.hostname(m.hostname)
                          : a.hostname(location.hostname),
                        url: I,
                        callback: p,
                      };
                      t.getAttribute("data-origin") &&
                        (N.origin = t.getAttribute("data-origin")),
                        [
                          "proxy",
                          "key",
                          "autoplay",
                          "preload",
                          "subscribe",
                          "live",
                          "loop",
                          "debug",
                          "splash",
                          "poster",
                          "rtmpt",
                        ].forEach(function (e) {
                          m.hasOwnProperty(e) && (N[e] = m[e]),
                            r.hasOwnProperty(e) && (N[e] = r[e]),
                            (m.rtmp || {}).hasOwnProperty(e) &&
                              (N[e] = (m.rtmp || {})[e]),
                            (r.rtmp || {}).hasOwnProperty(e) &&
                              (N[e] = (r.rtmp || {})[e]);
                        }),
                        m.rtmp && (N.rtmp = m.rtmp.url || m.rtmp),
                        r.rtmp && (N.rtmp = r.rtmp.url || r.rtmp),
                        Object.keys(r.flashls || {}).forEach(function (e) {
                          var t = r.flashls[e];
                          N["hls_" + e] = t;
                        });
                      var j =
                        "undefined" != typeof r.hlsQualities
                          ? r.hlsQualities
                          : m.hlsQualities;
                      "undefined" != typeof j &&
                        (N.hlsQualities = j
                          ? encodeURIComponent(JSON.stringify(j))
                          : j),
                        void 0 !== m.bufferTime &&
                          (N.bufferTime = m.bufferTime),
                        M && delete N.rtmp,
                        N.rtmp && (N.rtmp = w(N.rtmp));
                      var L,
                        x = m.bgcolor || a.css(t, "background-color") || "";
                      0 === x.indexOf("rgb")
                        ? (L = n(x))
                        : 0 === x.indexOf("#") && (L = c(x)),
                        (N.initialVolume = e.volumeLevel);
                      var T = f(r) ? m.swfHls : m.swf;
                      h = s(T, N, m.wmode, L)[0];
                      var Z = a.find(".fp-player", t)[0];
                      a.prepend(Z, h),
                        e
                          .off("quality.flashengine")
                          .on("quality.flashengine", function (t, n, i) {
                            var r =
                              "undefined" != typeof e.video.hlsQualities
                                ? e.video.hlsQualities
                                : e.conf.hlsQualities;
                            r && h.__quality(i);
                          }),
                        setTimeout(function () {
                          try {
                            if (!h.PercentLoaded())
                              return e.trigger("error", [
                                e,
                                { code: 7, url: m.swf },
                              ]);
                          } catch (t) {}
                        }, 5e3),
                        v.push(
                          setTimeout(function () {
                            "undefined" == typeof h.PercentLoaded &&
                              e.trigger("flashdisabled", [e]);
                          }, 15e3)
                        ),
                        v.push(
                          setTimeout(function () {
                            "undefined" == typeof h.PercentLoaded &&
                              e.trigger("flashdisabled", [e, !1]);
                          }, 500)
                        ),
                        e
                          .off("resume.flashhack")
                          .on("resume.flashhack", function () {
                            var t = setTimeout(function () {
                              var t = h.__status().time,
                                n = setTimeout(function () {
                                  e.playing &&
                                    !e.loading &&
                                    h.__status().time === t &&
                                    e.trigger("flashdisabled", [e]);
                                }, 400);
                              v.push(n),
                                e.one(
                                  "seek.flashhack pause.flashhack load.flashack",
                                  function () {
                                    clearTimeout(n);
                                  }
                                );
                            }, 800);
                            v.push(t),
                              e.one("progress", function () {
                                clearTimeout(t);
                              });
                          }),
                        (h.pollInterval = setInterval(function () {
                          if (h && !g) {
                            var t = h.__status ? h.__status() : null;
                            t &&
                              ((e.conf.live || e.live || r.live) &&
                                ((r.seekOffset = t.seekOffset),
                                (r.duration = t.duration + t.seekOffset)),
                              e.playing &&
                                t.time &&
                                t.time !== e.video.time &&
                                e.trigger("progress", [e, t.time]),
                              (r.buffer = (t.buffer / r.bytes) * r.duration),
                              e.trigger("buffer", [e, r.buffer]),
                              !r.buffered &&
                                t.time > 0 &&
                                ((r.buffered = !0),
                                e.trigger("buffered", [e])));
                          }
                        }, 250)),
                        (window[p] = function (n, i) {
                          var r = d;
                          m.debug &&
                            (0 === n.indexOf("debug") && i && i.length
                              ? console.log.apply(
                                  console,
                                  ["-- " + n].concat(i)
                                )
                              : console.log("--", n, i));
                          var o = { type: n };
                          switch (n) {
                            case "ready":
                              i = l(r, i);
                              break;
                            case "click":
                              o.flash = !0;
                              break;
                            case "keydown":
                              o.which = i;
                              break;
                            case "seek":
                              r.time = i;
                              break;
                            case "status":
                              e.trigger("progress", [e, i.time]),
                                i.buffer < r.bytes && !r.buffered
                                  ? ((r.buffer =
                                      (i.buffer / r.bytes) * r.duration),
                                    e.trigger("buffer", r.buffer))
                                  : r.buffered ||
                                    ((r.buffered = !0), e.trigger("buffered"));
                              break;
                            case "metadata":
                              var a = atob(i);
                              i = { key: a.substr(10, 4), data: a.substr(21) };
                          }
                          "click" === n || "keydown" === n
                            ? ((o.target = t), u.fire(t, n, [o]))
                            : "buffered" != n && "unload" !== n
                            ? setTimeout(function () {
                                e.trigger(o, [e, i]);
                              }, 1)
                            : "unload" === n && e.trigger(o, [e, i]);
                        });
                    }
                  },
                  speed: a.noop,
                  unload: function () {
                    h && h.__unload && h.__unload();
                    try {
                      p && window[p] && delete window[p];
                    } catch (n) {}
                    a.find("object", t).forEach(a.removeNode),
                      (h = 0),
                      e.off(".flashengine"),
                      e.off(".flashhack"),
                      clearInterval(h.pollInterval),
                      v.forEach(function (e) {
                        clearTimeout(e);
                      });
                  },
                };
              return (
                ["pause", "resume", "seek", "volume"].forEach(function (t) {
                  y[t] = function (n) {
                    try {
                      e.ready &&
                        (void 0 === n ? h["__" + t]() : h["__" + t](n));
                    } catch (i) {
                      if ("undefined" == typeof h["__" + t])
                        return e.trigger("flashdisabled", [e]);
                      throw i;
                    }
                  };
                }),
                y
              );
            }),
              (r.engineName = "flash"),
              (r.canPlay = function (e, t) {
                return (
                  (o.support.flashVideo && /video\/(mp4|flash|flv)/i.test(e)) ||
                  (o.support.flashVideo && t.swfHls && /mpegurl/i.test(e))
                );
              }),
              o.engines.push(r);
          },
          {
            "../common": 1,
            "../flowplayer": 31,
            "./embed": 2,
            bean: 34,
            "extend-object": 39,
          },
        ],
        4: [
          function (e, t, n) {
            "use strict";
            function i(e) {
              return "undefined" == typeof window.Hls
                ? !1
                : /mpegurl/.test(e) && window.Hls.isSupported();
            }
            var r,
              o = e("../flowplayer"),
              a = o.support,
              s = o.common,
              l = e("./html5-factory");
            (r = function (e, t) {
              var n,
                a,
                u,
                c = window.Hls;
              return l("hlsjs-lite", e, t, i, function (i, l, f) {
                (n = r.hls = new c(o.extend({}, e.conf.hlsjs, i.hlsjs))),
                  r.extensions.forEach(function (i) {
                    i(n, e, t);
                  }),
                  n.loadSource(i.src),
                  (f.resume = function () {
                    e.live && !e.dvr && (l.currentTime = n.liveSyncPosition),
                      l.play();
                  }),
                  (f.seek = function (t) {
                    try {
                      e.live && !e.dvr
                        ? (l.currentTime = Math.min(t, n.liveSyncPosition))
                        : (l.currentTime = t);
                    } catch (i) {
                      e.debug("Failed to seek to ", t, i);
                    }
                  }),
                  e.on("quality", function (e, t, i) {
                    n.nextLevel = a = i;
                  }),
                  n.on(c.Events.MANIFEST_PARSED, function (t, r) {
                    var o,
                      c = i.hlsQualities || e.conf.hlsQualities,
                      f = {},
                      d = r.levels;
                    if (c === !1) return n.attachMedia(l);
                    if ("drive" === c)
                      switch (d.length) {
                        case 4:
                          o = [1, 2, 3];
                          break;
                        case 5:
                          o = [1, 2, 3, 4];
                          break;
                        case 6:
                          o = [1, 3, 4, 5];
                          break;
                        case 7:
                          o = [1, 3, 5, 6];
                          break;
                        case 8:
                          o = [1, 3, 6, 7];
                          break;
                        default:
                          o =
                            d.length < 3 ||
                            (d[0].height &&
                              d[2].height &&
                              d[0].height === d[2].height)
                              ? []
                              : [1, 2];
                      }
                    (i.qualities = [{ value: -1, label: "Auto" }]),
                      Array.isArray(c) &&
                        ((i.qualities = []),
                        (o = c.map(function (e) {
                          return (
                            "undefined" != typeof e.level &&
                              (f[e.level] = e.label),
                            "undefined" != typeof e.level ? e.level : e
                          );
                        })));
                    var p = -2;
                    i.qualities = i.qualities
                      .concat(
                        d.map(function (e, t) {
                          if (o && -1 === o.indexOf(t)) return !1;
                          var n = f[t] || Math.min(e.width, e.height) + "p";
                          return (
                            f[t] ||
                              "drive" === c ||
                              (n += " (" + Math.round(e.bitrate / 1e3) + "k)"),
                            t === a && (p = t),
                            { value: t, label: n }
                          );
                        })
                      )
                      .filter(s.identity);
                    var h = (i.quality =
                      -2 === p ? i.qualities[0].value || -1 : p);
                    h !== n.currentLevel && (n.currentLevel = h),
                      n.attachMedia(l),
                      u && i.src !== u && l.play(),
                      (u = i.src);
                  });
              });
            }),
              (r.canPlay = function (e, t) {
                return a.browser.safari &&
                  !((t.clip && t.clip.hlsjs) || t.hlsjs || {}).safari
                  ? !1
                  : o.support.video && i(e);
              }),
              (r.engineName = "hlsjs-lite"),
              (r.plugin = function (e) {
                r.extensions.push(e);
              }),
              (r.extensions = []),
              o.engines.push(r);
          },
          { "../flowplayer": 31, "./html5-factory": 5 },
        ],
        5: [
          function (e, t, n) {
            function i(e, t, n, i, a) {
              function f(e, o, a) {
                var f = n.getAttribute("data-flowplayer-instance-id");
                if (e.listeners && e.listeners.hasOwnProperty(f))
                  return void (e.listeners[f] = a);
                ((e.listeners || (e.listeners = {}))[f] = a),
                  u.on(o, "error", function (n) {
                    try {
                      i(n.target.getAttribute("type")) &&
                        t.trigger("error", [
                          t,
                          { code: 4, video: c(a, { src: e.src, url: e.src }) },
                        ]);
                    } catch (r) {}
                  }),
                  t.on("shutdown", function () {
                    u.off(o), u.off(e, ".dvrhack"), t.off(".loophack");
                  });
                var p = {},
                  h = function (e) {
                    "metadata" === e.kind &&
                      ((e.mode = "hidden"),
                      e.addEventListener(
                        "cuechange",
                        function () {
                          t.trigger("metadata", [t, e.activeCues[0].value]);
                        },
                        !1
                      ));
                  };
                return (
                  e &&
                    e.textTracks &&
                    e.textTracks.length &&
                    Array.prototype.forEach.call(e.textTracks, h),
                  e &&
                    e.textTracks &&
                    "function" == typeof e.textTracks.addEventListener &&
                    e.textTracks.addEventListener(
                      "addtrack",
                      function (e) {
                        h(e.track);
                      },
                      !1
                    ),
                  (t.conf.dvr || t.dvr || a.dvr) &&
                    u.on(e, "progress.dvrhack", function () {
                      e.seekable.length &&
                        ((t.video.duration = e.seekable.end(null)),
                        (t.video.seekOffset = e.seekable.start(null)),
                        t.trigger("dvrwindow", [
                          t,
                          {
                            start: e.seekable.start(null),
                            end: e.seekable.end(null),
                          },
                        ]),
                        e.currentTime >= e.seekable.start(null) ||
                          (e.currentTime = e.seekable.start(null)));
                    }),
                  Object.keys(d).forEach(function (i) {
                    var o = d[i];
                    if (
                      ("webkitendfullscreen" === i &&
                        t.conf.disableInline &&
                        (o = "unload"),
                      o)
                    ) {
                      var u = function (u) {
                        if (
                          ((a = e.listeners[f]),
                          u.target && s.hasClass(u.target, "fp-engine"))
                        ) {
                          v.debug &&
                            !/progress/.test(o) &&
                            console.log(i, "->", o, u);
                          var d = function (e) {
                            t.trigger(e || o, [t, p]);
                          };
                          if (
                            (!t.ready && !/ready|error/.test(o)) ||
                            !o ||
                            !s.find("video", n).length
                          )
                            return void (
                              "resume" === o &&
                              t.one("ready", function () {
                                setTimeout(function () {
                                  d();
                                });
                              })
                            );
                          var p;
                          if ("unload" === o) return void t.unload();
                          switch (o) {
                            case "ready":
                              if (t.ready) return;
                              if (!e.duration && !t.live) return;
                              p = c(a, {
                                duration:
                                  e.duration < Number.MAX_VALUE
                                    ? e.duration
                                    : 0,
                                width: e.videoWidth,
                                height: e.videoHeight,
                                url: e.currentSrc,
                                src: e.currentSrc,
                              });
                              try {
                                p.seekable =
                                  (/mpegurl/i.test(a ? a.type || "" : "") &&
                                    e.duration) ||
                                  (e.seekable && e.seekable.end(null)) ||
                                  t.live;
                              } catch (h) {}
                              if (
                                !t.live &&
                                !p.duration &&
                                !l.hlsDuration &&
                                "loadeddata" === i
                              ) {
                                var g = function () {
                                  p.duration = e.duration;
                                  try {
                                    p.seekable =
                                      e.seekable && e.seekable.end(null);
                                  } catch (t) {}
                                  d(),
                                    e.removeEventListener("durationchange", g),
                                    s.toggleClass(n, "is-live", !1);
                                };
                                e.addEventListener("durationchange", g);
                                var m = function () {
                                  t.ready ||
                                    e.duration ||
                                    ((p.duration = 0),
                                    s.addClass(n, "is-live"),
                                    d()),
                                    e.removeEventListener("timeupdate", m);
                                };
                                return void e.addEventListener("timeupdate", m);
                              }
                              break;
                            case "progress":
                            case "seek":
                              if (e.currentTime > 0 || t.live)
                                p = Math.max(e.currentTime, 0);
                              else if ("seek" === o && 0 === e.currentTime)
                                p = 0;
                              else if ("progress" == o) return;
                              break;
                            case "buffer":
                              p = [];
                              for (var y = 0; y < e.buffered.length; y++)
                                p.push({
                                  start: e.buffered.start(y),
                                  end: e.buffered.end(y),
                                });
                              e.buffered.end(null) === e.duration &&
                                d("buffered");
                              break;
                            case "speed":
                              p = r(e.playbackRate);
                              break;
                            case "volume":
                              p = r(e.muted ? 0 : e.volume);
                              break;
                            case "error":
                              try {
                                (p = (u.srcElement || u.originalTarget).error),
                                  (p.video = c(a, { src: e.src, url: e.src }));
                              } catch (w) {
                                return;
                              }
                          }
                          d();
                        }
                      };
                      n.addEventListener(i, u, !0),
                        p[i] || (p[i] = []),
                        p[i].push(u);
                    }
                  }),
                  p
                );
              }
              var p,
                h,
                g,
                m =
                  s.findDirect("video", n)[0] ||
                  s.find(".fp-player > video", n)[0],
                v = t.conf;
              return (g = {
                engineName: e,
                pick: function (e) {
                  var t =
                    l.video &&
                    e.filter(function (e) {
                      return i(e.type);
                    })[0];
                  if (t)
                    return (
                      "string" == typeof t.src &&
                        (t.src = s.createAbsoluteUrl(t.src)),
                      t
                    );
                },
                load: function (e) {
                  var i = s.find(".fp-player", n)[0];
                  if (
                    (m ||
                      ((m = document.createElement("video")),
                      s.prepend(i, m),
                      (m.autoplay = !!v.splash)),
                    s.addClass(m, "fp-engine"),
                    s.find("track", m).forEach(s.removeNode),
                    (m.preload = "none"),
                    v.nativesubtitles || s.attr(m, "crossorigin", !1),
                    v.disableInline ||
                      (m.setAttribute("webkit-playsinline", "true"),
                      m.setAttribute("playsinline", "true")),
                    l.inlineVideo ||
                      s.css(m, { position: "absolute", top: "-9999em" }),
                    l.subtitles &&
                      v.nativesubtitles &&
                      e.subtitles &&
                      e.subtitles.length)
                  ) {
                    s.addClass(m, "native-subtitles");
                    var r = e.subtitles,
                      c = function (e) {
                        var t = m.textTracks;
                        t.length && (t[0].mode = e);
                      };
                    r.some(function (e) {
                      return !s.isSameDomain(e.src);
                    }) && s.attr(m, "crossorigin", "anonymous"),
                      "function" == typeof m.textTracks.addEventListener &&
                        m.textTracks.addEventListener("addtrack", function () {
                          c("disabled"), c("showing");
                        }),
                      r.forEach(function (e) {
                        m.appendChild(
                          s.createElement("track", {
                            kind: "subtitles",
                            srclang: e.srclang || "en",
                            label: e.label || "en",
                            src: e.src,
                            default: e["default"],
                          })
                        );
                      });
                  }
                  if (
                    (u.off(m, "timeupdate", s.noop),
                    u.on(m, "timeupdate", s.noop),
                    s.prop(m, "loop", !1),
                    t.off(".loophack"),
                    (e.loop || v.loop) &&
                      t.on("finish.loophack", function () {
                        t.resume();
                      }),
                    "undefined" != typeof h && (m.volume = h),
                    a(e, m, g),
                    v.autoplay || v.splash || e.autoplay)
                  ) {
                    t.debug("Autoplay / Splash setup, try to start video");
                    try {
                      var d = m.play();
                      d &&
                        d["catch"] &&
                        d["catch"](function (e) {
                          ("AbortError" !== e.name || 20 !== e.code) &&
                            (t.debug("Play errored, trying muted", e),
                            t.mute(!0),
                            m.play());
                        });
                    } catch (p) {
                      t.debug("play() error thrown", p);
                    }
                  }
                  g._listeners =
                    f(m, s.find("source", m).concat(m), e) || g._listeners;
                  var y = function () {
                    o(n) &&
                      (l.preloadMetadata ? (m.preload = "metadata") : m.load(),
                      u.off(document, "scroll.preloadviewport"));
                  };
                  y(),
                    u.off(document, "scroll.preloadviewport"),
                    u.on(document, "scroll.preloadviewport", function () {
                      window.requestAnimationFrame(y);
                    });
                },
                mute: function (e) {
                  (m.muted = !!e),
                    t.trigger("mute", [t, e]),
                    t.trigger("volume", [t, e ? 0 : m.volume]);
                },
                pause: function () {
                  m.pause();
                },
                resume: function () {
                  m.play();
                },
                speed: function (e) {
                  m.playbackRate = e;
                },
                seek: function (e) {
                  try {
                    m.currentTime = e;
                  } catch (t) {}
                },
                volume: function (e) {
                  (h = e), m && ((m.volume = e), e && g.mute(!1));
                },
                unload: function () {
                  u.off(document, "scroll.preloadviewport"),
                    s.find("video.fp-engine", n).forEach(function (e) {
                      s.attr(e, "src", ""), s.removeNode(e);
                    }),
                    (p = clearInterval(p));
                  var e = n.getAttribute("data-flowplayer-instance-id");
                  delete m.listeners[e],
                    (m = 0),
                    g._listeners &&
                      Object.keys(g._listeners).forEach(function (e) {
                        g._listeners[e].forEach(function (t) {
                          n.removeEventListener(e, t, !0);
                        });
                      });
                },
              });
            }
            function r(e, t) {
              return (t = t || 100), Math.round(e * t) / t;
            }
            function o(e) {
              var t = e.getBoundingClientRect();
              return (
                t.top >= 0 &&
                t.left >= 0 &&
                t.bottom <=
                  (window.innerHeight ||
                    document.documentElement.clientHeight) +
                    t.height &&
                t.right <=
                  (window.innerWidth || document.documentElement.clientWidth) +
                    t.width
              );
            }
            var a = e("../flowplayer"),
              s = a.common,
              l = a.support,
              u = a.bean,
              c = a.extend,
              f = l.browser.safari && !l.iOS,
              d = {
                ended: "finish",
                pause: "pause",
                play: "resume",
                timeupdate: "progress",
                volumechange: "volume",
                ratechange: "speed",
                seeked: "seek",
                loadedmetadata: f ? 0 : "ready",
                canplaythrough: f ? "ready" : 0,
                durationchange: "ready",
                error: "error",
                dataunavailable: "error",
                webkitendfullscreen: !a.support.inlineVideo && "unload",
                progress: "buffer",
              };
            t.exports = i;
          },
          { "../flowplayer": 31 },
        ],
        6: [
          function (e, t, n) {
            "use strict";
            function i(e) {
              return /mpegurl/i.test(e) ? "application/x-mpegurl" : e;
            }
            function r(e) {
              return (
                /^(video|application)/i.test(e) || (e = i(e)),
                !!u.canPlayType(e).replace("no", "")
              );
            }
            var o,
              a = e("../flowplayer"),
              s = a.common,
              l = e("./html5-factory"),
              u = document.createElement("video");
            (o = function (e, t) {
              return l("html5", e, t, r, function (e, t) {
                t.currentSrc !== e.src &&
                  (s.find("source", t).forEach(s.removeNode),
                  (t.src = e.src),
                  (t.type = e.type));
              });
            }),
              (o.canPlay = function (e) {
                return a.support.video && r(e);
              }),
              (o.engineName = "html5"),
              a.engines.push(o);
          },
          { "../flowplayer": 31, "./html5-factory": 5 },
        ],
        7: [
          function (e, t, n) {
            "use strict";
            var i = e("../flowplayer"),
              r = e("../common"),
              o = e("bean");
            i(function (e, t) {
              e.on("ready", function () {
                var e = r.find("video.fp-engine", t)[0];
                e &&
                  (e.setAttribute("x-webkit-airplay", "allow"),
                  window.WebKitPlaybackTargetAvailabilityEvent &&
                    (e.addEventListener(
                      "webkitplaybacktargetavailabilitychanged",
                      function (e) {
                        if ("available" === e.availability) {
                          var n = r.find(".fp-header", t)[0];
                          r.find(".fp-airplay", n).forEach(r.removeNode);
                          var i = r.createElement("a", {
                            class: "fp-airplay fp-icon",
                            title: "Play on AirPlay device",
                          });
                          n.insertBefore(i, r.find(".fp-fullscreen", n)[0]);
                        }
                      }
                    ),
                    e.addEventListener(
                      "webkitcurrentplaybacktargetiswirelesschanged",
                      function () {
                        var n = r.find(".fp-airplay", t)[0];
                        n &&
                          r.toggleClass(
                            n,
                            "fp-active",
                            e.webkitCurrentPlaybackTargetIsWireless
                          );
                      }
                    )));
              }),
                o.on(t, "click", ".fp-airplay", function (e) {
                  e.preventDefault();
                  var n = r.find("video.fp-engine", t)[0];
                  n.webkitShowPlaybackTargetPicker();
                });
            });
          },
          { "../common": 1, "../flowplayer": 31, bean: 34 },
        ],
        8: [
          function (e, t, n) {
            "use strict";
            var i = e("../flowplayer"),
              r = e("./resolve").TYPE_RE,
              o = e("scriptjs"),
              a = e("bean");
            i(function (e, t) {
              var n,
                i = e.conf.analytics,
                s = 0,
                l = 0;
              if (i) {
                "undefined" == typeof _gat && o("//google-analytics.com/ga.js");
                var u = function () {
                    var e = _gat._getTracker(i);
                    return e._setAllowLinker(!0), e;
                  },
                  c = function (i, o, a) {
                    if (((a = a || e.video), s && "undefined" != typeof _gat)) {
                      var l = u();
                      l._trackEvent(
                        "Video / Seconds played",
                        e.engine.engineName + "/" + a.type,
                        a.title ||
                          t.getAttribute("title") ||
                          a.src.split("/").slice(-1)[0].replace(r, ""),
                        Math.round(s / 1e3)
                      ),
                        (s = 0),
                        n && (clearTimeout(n), (n = null));
                    }
                  };
                e
                  .bind("load unload", c)
                  .bind("progress", function () {
                    e.seeking ||
                      ((s += l ? +new Date() - l : 0), (l = +new Date())),
                      n ||
                        (n = setTimeout(function () {
                          n = null;
                          var e = u();
                          e._trackEvent(
                            "Flowplayer heartbeat",
                            "Heartbeat",
                            "",
                            0,
                            !0
                          );
                        }, 6e5));
                  })
                  .bind("pause", function () {
                    l = 0;
                  }),
                  e.bind("shutdown", function () {
                    a.off(window, "unload", c);
                  }),
                  a.on(window, "unload", c);
              }
            });
          },
          { "../flowplayer": 31, "./resolve": 21, bean: 34, scriptjs: 45 },
        ],
        9: [
          function (e, t, n) {
            "use strict";
            var i = e("../flowplayer"),
              r = e("../common"),
              o = e("bean"),
              a = e("scriptjs");
            i(function (e, t) {
              function n() {
                var e, t, n;
                (e =
                  g.applicationId ||
                  chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID),
                  (t = new chrome.cast.SessionRequest(e)),
                  (n = new chrome.cast.ApiConfig(t, i, s)),
                  chrome.cast.initialize(n, l, u);
              }
              function i() {
                console.log("sessionListener");
              }
              function s(e) {
                e === chrome.cast.ReceiverAvailability.AVAILABLE && c();
              }
              function l() {}
              function u() {
                console.log("onError");
              }
              function c() {
                var e = r.find(".fp-header", t)[0];
                r.find(".fp-chromecast", e).forEach(r.removeNode),
                  r.find(".fp-chromecast-engine", t).forEach(r.removeNode),
                  (h = r.createElement("a", {
                    class: "fp-chromecast fp-icon",
                    title: "Play on Cast device",
                  })),
                  e.insertBefore(h, r.find(".fp-fullscreen", e)[0]);
                var n = r.createElement("div", {
                    class: "fp-chromecast-engine",
                  }),
                  i = r.createElement("p", {
                    class: "fp-chromecast-engine-status",
                  }),
                  o = r.createElement("p", {
                    class: "fp-chromecast-engine-icon",
                  });
                n.appendChild(o), n.appendChild(i);
                var a = r.find(".fp-engine", t)[0];
                a
                  ? a.parentNode.insertBefore(n, a)
                  : r.prepend(r.find(".fp-player", t)[0] || t, n);
              }
              function f() {
                clearInterval(p),
                  (p = null),
                  e.release(),
                  r.toggleClass(t, "is-chromecast", !1),
                  r.toggleClass(h, "fp-active", !1);
              }
              if (e.conf.chromecast !== !1) {
                a("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"),
                  (window.__onGCastApiAvailable = function (e) {
                    e && n();
                  });
                var d,
                  p,
                  h,
                  g = e.conf.chromecast || {};
                o.on(t, "click", ".fp-chromecast", function (n) {
                  return (
                    n.preventDefault(),
                    d
                      ? (e.trigger("pause", [e]),
                        d.stop(),
                        (d = null),
                        void f())
                      : (e.playing && e.pause(),
                        void chrome.cast.requestSession(
                          function (n) {
                            function i(n) {
                              n.addUpdateListener(function (i) {
                                if (d) {
                                  (p =
                                    p ||
                                    setInterval(function () {
                                      e.trigger("progress", [
                                        e,
                                        n.getEstimatedTime(),
                                      ]);
                                    }, 500)),
                                    i
                                      ? (r.toggleClass(t, "is-chromecast", !0),
                                        r.toggleClass(h, "fp-active", !0),
                                        e.hijack({
                                          pause: function () {
                                            n.pause();
                                          },
                                          resume: function () {
                                            n.play();
                                          },
                                          seek: function (e) {
                                            var t = new chrome.cast.media.SeekRequest();
                                            (t.currentTime = e), n.seek(t);
                                          },
                                        }))
                                      : (f(), e.trigger("finish", [e]));
                                  var o = n.playerState;
                                  e.paused &&
                                    o ===
                                      chrome.cast.media.PlayerState.PLAYING &&
                                    e.trigger("resume", [e]),
                                    e.playing &&
                                      o ===
                                        chrome.cast.media.PlayerState.PAUSED &&
                                      e.trigger("pause", [e]),
                                    r.toggleClass(
                                      t,
                                      "is-loading",
                                      o ===
                                        chrome.cast.media.PlayerState.BUFFERING
                                    );
                                }
                              });
                            }
                            d = n;
                            var o = d.receiver.friendlyName;
                            r.html(
                              r.find(".fp-chromecast-engine-status")[0],
                              "Playing on device " + o
                            );
                            var a = new chrome.cast.media.MediaInfo(
                                e.video.src
                              ),
                              s = new chrome.cast.media.LoadRequest(a);
                            d.loadMedia(s, i, function () {});
                          },
                          function (e) {
                            console.error("requestSession error", e);
                          }
                        ))
                  );
                });
              }
            });
          },
          { "../common": 1, "../flowplayer": 31, bean: 34, scriptjs: 45 },
        ],
        10: [
          function (e, t, n) {
            "use strict";
            var i = e("../flowplayer"),
              r = e("../common"),
              o = e("bean");
            i(function (e, t) {
              function n(e) {
                (t.className = t.className.replace(a, " ")),
                  e >= 0 && r.addClass(t, "cue" + e);
              }
              function i(t) {
                var n = t && !isNaN(t.time) ? t.time : t;
                return (
                  0 > n && (n = e.video.duration + n),
                  0.125 * Math.round(n / 0.125)
                );
              }
              var a = / ?cue\d+ ?/,
                s = !1,
                l = {},
                u = -0.125,
                c = function (t) {
                  var i = e.cuepoints.indexOf(t);
                  isNaN(t) || (t = { time: t }),
                    (t.index = i),
                    n(i),
                    e.trigger("cuepoint", [e, t]);
                };
              e
                .on("progress", function (e, t, n) {
                  if (!s)
                    for (var r = i(n); r > u; )
                      (u += 0.125), l[u] && l[u].forEach(c);
                })
                .on("unload", n)
                .on("beforeseek", function (e) {
                  setTimeout(function () {
                    e.defaultPrevented || (s = !0);
                  });
                })
                .on("seek", function (e, t, r) {
                  n(),
                    (u = i(r || 0) - 0.125),
                    (s = !1),
                    !r && l[0] && l[0].forEach(c);
                })
                .on("ready", function (t, n, i) {
                  u = -0.125;
                  var r = i.cuepoints || e.conf.cuepoints || [];
                  e.setCuepoints(r);
                })
                .on("finish", function () {
                  u = -0.125;
                }),
                e.conf.generate_cuepoints &&
                  e.bind("load", function () {
                    r.find(".fp-cuepoint", t).forEach(r.removeNode);
                  }),
                (e.setCuepoints = function (t) {
                  return (
                    (e.cuepoints = []), (l = {}), t.forEach(e.addCuepoint), e
                  );
                }),
                (e.addCuepoint = function (n) {
                  e.cuepoints || (e.cuepoints = []);
                  var a = i(n);
                  if (
                    (l[a] || (l[a] = []),
                    l[a].push(n),
                    e.cuepoints.push(n),
                    e.conf.generate_cuepoints && n.visible !== !1)
                  ) {
                    var s = e.video.duration,
                      u = r.find(".fp-timeline", t)[0];
                    r.css(u, "overflow", "visible");
                    var c = n.time || n;
                    0 > c && (c = s + c);
                    var f = r.createElement("a", {
                      className:
                        "fp-cuepoint fp-cuepoint" + (e.cuepoints.length - 1),
                    });
                    r.css(f, "left", (c / s) * 100 + "%"),
                      u.appendChild(f),
                      o.on(f, "mousedown", function (t) {
                        t.preventDefault(), t.stopPropagation(), e.seek(c);
                      });
                  }
                  return e;
                }),
                (e.removeCuepoint = function (t) {
                  var n = e.cuepoints.indexOf(t),
                    r = i(t);
                  if (-1 !== n) {
                    e.cuepoints = e.cuepoints
                      .slice(0, n)
                      .concat(e.cuepoints.slice(n + 1));
                    var o = l[r].indexOf(t);
                    if (-1 !== o)
                      return (
                        (l[r] = l[r].slice(0, o).concat(l[r].slice(o + 1))), e
                      );
                  }
                });
            });
          },
          { "../common": 1, "../flowplayer": 31, bean: 34 },
        ],
        11: [
          function (e, t, n) {
            "use strict";
            var i = e("../flowplayer"),
              r = e("bean"),
              o = e("../common"),
              a = e("./util/clipboard");
            i(function (e, t) {
              if (e.conf.embed !== !1 && e.conf.share !== !1) {
                var n = o.find(".fp-share-menu", t)[0],
                  i = o.createElement(
                    "a",
                    { class: "fp-icon fp-embed", title: "Copy to your site" },
                    "Embed"
                  );
                o.append(n, i),
                  (e.embedCode = function () {
                    var n = e.conf.embed || {},
                      i = e.video,
                      r = n.width || i.width || o.width(t),
                      a = n.height || i.height || o.height(t),
                      s = e.conf.ratio,
                      l =
                        '<iframe src="' +
                        e.shareUrl(!0) +
                        '" allowfullscreen style="border:none;';
                    return n.width || n.height
                      ? (isNaN(r) || (r += "px"),
                        isNaN(a) || (a += "px"),
                        l + "width:" + r + ";height:" + a + ';"></iframe>')
                      : ((!s || e.conf.adaptiveRatio) && (s = a / r),
                        '<div style="position:relative;width:100%;display:inline-block;">' +
                          l +
                          'position:absolute;top:0;left:0;width:100%;height:100%;"></iframe><div style="padding-top:' +
                          100 * s +
                          '%;"></div></div>');
                  }),
                  r.on(t, "click", ".fp-embed", function () {
                    a(
                      e.embedCode(),
                      function () {
                        e.message(
                          "The embed code is now on your clipboard",
                          2e3
                        );
                      },
                      function () {
                        e.textarea(
                          e.embedCode(),
                          "Copy the code below to embed your video"
                        );
                      }
                    );
                  });
              }
            });
          },
          {
            "../common": 1,
            "../flowplayer": 31,
            "./util/clipboard": 30,
            bean: 34,
          },
        ],
        12: [
          function (e, t, n) {
            "use strict";
            (t.exports = function (e, t) {
              t || (t = document.createElement("div"));
              var n = {},
                i = {},
                r = function (e, r, o) {
                  var a = e.split(".")[0],
                    s = function (l) {
                      o &&
                        (t.removeEventListener(a, s),
                        n[e].splice(n[e].indexOf(s), 1));
                      var u = [l].concat(i[l.timeStamp + l.type] || []);
                      r && r.apply(void 0, u);
                    };
                  t.addEventListener(a, s), n[e] || (n[e] = []), n[e].push(s);
                };
              (e.on = e.bind = function (t, n) {
                var i = t.split(" ");
                return (
                  i.forEach(function (e) {
                    r(e, n);
                  }),
                  e
                );
              }),
                (e.one = function (t, n) {
                  var i = t.split(" ");
                  return (
                    i.forEach(function (e) {
                      r(e, n, !0);
                    }),
                    e
                  );
                });
              var o = function (e, t) {
                return (
                  0 ===
                  t.filter(function (t) {
                    return -1 === e.indexOf(t);
                  }).length
                );
              };
              (e.off = e.unbind = function (i) {
                var r = i.split(" ");
                return (
                  r.forEach(function (e) {
                    var i = e.split(".").slice(1),
                      r = e.split(".")[0];
                    Object.keys(n)
                      .filter(function (e) {
                        var t = e.split(".").slice(1);
                        return (!r || 0 === e.indexOf(r)) && o(t, i);
                      })
                      .forEach(function (e) {
                        var i = n[e],
                          r = e.split(".")[0];
                        n[e] = i.filter(function (e) {
                          return t.removeEventListener(r, e), !1;
                        });
                      });
                  }),
                  e
                );
              }),
                (e.trigger = function (n, r, o) {
                  if (n) {
                    r = (r || []).length ? r || [] : [r];
                    var a,
                      s = document.createEvent("Event");
                    return (
                      (a = n.type || n),
                      s.initEvent(a, !1, !0),
                      Object.defineProperty &&
                        (s.preventDefault = function () {
                          Object.defineProperty(this, "defaultPrevented", {
                            get: function () {
                              return !0;
                            },
                          });
                        }),
                      (i[s.timeStamp + s.type] = r),
                      t.dispatchEvent(s),
                      o ? s : e
                    );
                  }
                });
            }),
              (t.exports.EVENTS = [
                "beforeseek",
                "disable",
                "error",
                "finish",
                "fullscreen",
                "fullscreen-exit",
                "load",
                "mute",
                "pause",
                "progress",
                "ready",
                "resume",
                "seek",
                "speed",
                "stop",
                "unload",
                "volume",
                "boot",
                "shutdown",
              ]);
          },
          {},
        ],
        13: [
          function (e, t, n) {
            "use strict";
            var i = e("../flowplayer"),
              r = e("../common"),
              o = e("bean");
            i(function (e, t) {
              var n = e.conf;
              if (n.share !== !1 && n.facebook) {
                e.facebook = function () {
                  var e,
                    t,
                    i = 550,
                    r = 420,
                    o = screen.height,
                    a = screen.width,
                    s = "scrollbars=yes,resizable=yes,toolbar=no,location=yes",
                    l =
                      "string" == typeof n.facebook
                        ? n.facebook
                        : window.location.toString();
                  (e = Math.round(a / 2 - i / 2)),
                    (t = 0),
                    o > r && (t = Math.round(o / 2 - r / 2)),
                    window.open(
                      "https://www.facebook.com/sharer.php?s=100&p[url]=" +
                        encodeURIComponent(l),
                      "sharer",
                      s +
                        ",width=" +
                        i +
                        ",height=" +
                        r +
                        ",left=" +
                        e +
                        ",top=" +
                        t
                    );
                };
                var i = r.find(".fp-share-menu", t)[0],
                  a = r.createElement(
                    "a",
                    { class: "fp-icon fp-facebook" },
                    "Facebook"
                  );
                r.append(i, a),
                  o.on(t, "click", ".fp-facebook", function () {
                    e.facebook();
                  });
              }
            });
          },
          { "../common": 1, "../flowplayer": 31, bean: 34 },
        ],
        14: [
          function (e, t, n) {
            "use strict";
            var i,
              r = e("../flowplayer"),
              o = e("bean"),
              a = e("../common"),
              s = "fullscreen",
              l = "fullscreen-exit",
              u = r.support.fullscreen,
              c = navigator.userAgent.toLowerCase();
            /(safari)[ \/]([\w.]+)/.exec(c) && !/(chrome)[ \/]([\w.]+)/.exec(c);
            o.on(
              document,
              "fullscreenchange.ffscr webkitfullscreenchange.ffscr mozfullscreenchange.ffscr MSFullscreenChange.ffscr",
              function (e) {
                var t =
                  document.webkitCurrentFullScreenElement ||
                  document.mozFullScreenElement ||
                  document.fullscreenElement ||
                  document.msFullscreenElement ||
                  e.target;
                if (
                  i ||
                  (t.parentNode &&
                    t.parentNode.getAttribute("data-flowplayer-instance-id"))
                ) {
                  var n = i || r(t.parentNode);
                  t && !i
                    ? (i = n.trigger(s, [n]))
                    : (i.trigger(l, [i]), (i = null));
                }
              }
            ),
              r(function (e, t) {
                var n = a.createElement("div", { className: "fp-player" });
                if (
                  (Array.prototype.map
                    .call(t.children, a.identity)
                    .forEach(function (e) {
                      a.matches(e, ".fp-ratio,script") || n.appendChild(e);
                    }),
                  t.appendChild(n),
                  e.conf.fullscreen)
                ) {
                  var r,
                    o,
                    c = window;
                  (e.isFullscreen = !1),
                    (e.fullscreen = function (t) {
                      return e.disabled
                        ? void 0
                        : (void 0 === t && (t = !e.isFullscreen),
                          t && ((r = c.scrollY), (o = c.scrollX)),
                          u
                            ? t
                              ? [
                                  "requestFullScreen",
                                  "webkitRequestFullScreen",
                                  "mozRequestFullScreen",
                                  "msRequestFullscreen",
                                ].forEach(function (e) {
                                  "function" == typeof n[e] &&
                                    n[e](Element.ALLOW_KEYBOARD_INPUT);
                                })
                              : [
                                  "exitFullscreen",
                                  "webkitCancelFullScreen",
                                  "mozCancelFullScreen",
                                  "msExitFullscreen",
                                ].forEach(function (e) {
                                  "function" == typeof document[e] &&
                                    document[e]();
                                })
                            : e.trigger(t ? s : l, [e]),
                          e);
                    });
                  var f;
                  e.on("mousedown.fs", function () {
                    +new Date() - f < 150 && e.ready && e.fullscreen(),
                      (f = +new Date());
                  }),
                    e
                      .on(s, function () {
                        a.addClass(t, "is-fullscreen"),
                          a.toggleClass(
                            t,
                            "fp-minimal-fullscreen",
                            a.hasClass(t, "fp-minimal")
                          ),
                          a.removeClass(t, "fp-minimal"),
                          u || a.css(t, "position", "fixed"),
                          (e.isFullscreen = !0);
                      })
                      .on(l, function () {
                        var n;
                        a.toggleClass(
                          t,
                          "fp-minimal",
                          a.hasClass(t, "fp-minimal-fullscreen")
                        ),
                          a.removeClass(t, "fp-minimal-fullscreen"),
                          u ||
                            "html5" !== e.engine ||
                            ((n = t.css("opacity") || ""),
                            a.css(t, "opacity", 0)),
                          u || a.css(t, "position", ""),
                          a.removeClass(t, "is-fullscreen"),
                          u ||
                            "html5" !== e.engine ||
                            setTimeout(function () {
                              t.css("opacity", n);
                            }),
                          (e.isFullscreen = !1),
                          c.scrollTo(o, r);
                      })
                      .on("unload", function () {
                        e.isFullscreen && e.fullscreen();
                      }),
                    e.on("shutdown", function () {
                      i = null;
                    });
                }
              });
          },
          { "../common": 1, "../flowplayer": 31, bean: 34 },
        ],
        15: [
          function (e, t, n) {
            "use strict";
            var i,
              r,
              o = e("../flowplayer"),
              a = e("bean"),
              s = "is-help",
              l = e("../common");
            a.on(document, "keydown.fp", function (e) {
              var t = i,
                n = e.ctrlKey || e.metaKey || e.altKey,
                o = e.which,
                a = t && t.conf;
              if (t && a.keyboard && !t.disabled) {
                if (-1 != [63, 187, 191].indexOf(o))
                  return l.toggleClass(r, s), !1;
                if (27 == o && l.hasClass(r, s)) return l.toggleClass(r, s), !1;
                if (!n && t.ready) {
                  if ((e.preventDefault(), e.shiftKey))
                    return void (39 == o
                      ? t.speed(!0)
                      : 37 == o && t.speed(!1));
                  if (58 > o && o > 47) return t.seekTo(o - 48);
                  switch (o) {
                    case 38:
                    case 75:
                      t.volume(t.volumeLevel + 0.15);
                      break;
                    case 40:
                    case 74:
                      t.volume(t.volumeLevel - 0.15);
                      break;
                    case 39:
                    case 76:
                      (t.seeking = !0), t.seek(!0);
                      break;
                    case 37:
                    case 72:
                      (t.seeking = !0), t.seek(!1);
                      break;
                    case 190:
                      t.seekTo();
                      break;
                    case 32:
                      t.toggle();
                      break;
                    case 70:
                      a.fullscreen && t.fullscreen();
                      break;
                    case 77:
                      t.mute();
                      break;
                    case 81:
                      t.unload();
                  }
                }
              }
            }),
              o(function (e, t) {
                e.conf.keyboard &&
                  (a.on(t, "mouseenter mouseleave", function (n) {
                    (i = e.disabled || "mouseover" != n.type ? 0 : e),
                      i && (r = t);
                  }),
                  e.bind("shutdown", function () {
                    r == t && (r = null);
                  }));
              });
          },
          { "../common": 1, "../flowplayer": 31, bean: 34 },
        ],
        16: [
          function (e, t, n) {
            var i = e("../flowplayer"),
              r = e("../common"),
              o = e("bean");
            i(function (e, t) {
              (e.showMenu = function (n, i) {
                var a = r.find(".fp-ui", t)[0];
                r.toggleClass(n, "fp-active", !0),
                  setTimeout(function () {
                    o.one(document, "click", function () {
                      e.hideMenu(n);
                    });
                  });
                var s = i;
                if (
                  (i &&
                    i.tagName &&
                    (s = {
                      left: r.offset(i).left,
                      rightFallbackOffset: r.width(i),
                      top: r.offset(i).top + r.height(i),
                    }),
                  !s)
                )
                  return r.css(n, "top", "auto");
                s.rightFallbackOffset = s.rightFallbackOffset || 0;
                var l = s.top - r.offset(a).top,
                  u = s.left - r.offset(a).left;
                r.width(n) + u > r.width(a) &&
                  (u = u - r.width(n) + s.rightFallbackOffset),
                  r.height(n) + l > r.height(a) && (l -= r.height(n)),
                  r.css(n, { top: l + "px", left: u + "px" });
              }),
                (e.hideMenu = function (e) {
                  r.toggleClass(e, "fp-active", !1),
                    r.css(e, { top: "-9999em" });
                });
            });
          },
          { "../common": 1, "../flowplayer": 31, bean: 34 },
        ],
        17: [
          function (e, t, n) {
            var i = e("../flowplayer"),
              r = e("../common"),
              o = e("bean");
            i(function (e, t) {
              function n(e) {
                var t = r.createElement("div", { className: "fp-message" }, e);
                return (
                  s.insertBefore(t, a),
                  setTimeout(function () {
                    r.toggleClass(t, "fp-shown");
                  }),
                  t
                );
              }
              function i(e) {
                r.removeNode(e);
              }
              var a = r.find(".fp-header", t)[0],
                s = r.find(".fp-ui", t)[0];
              (e.message = function (e, t) {
                var o = n(e),
                  a = function () {
                    r.toggleClass(o, "fp-shown"),
                      setTimeout(function () {
                        i(o);
                      }, 500);
                  };
                return t && setTimeout(a, t), a;
              }),
                (e.textarea = function (e) {
                  var t = document.createElement("textarea");
                  (t.value = e),
                    (t.className = "fp-textarea"),
                    s.appendChild(t),
                    o.on(document, "click.fptextarea", function (e) {
                      return e.target === t
                        ? t.select()
                        : (e.stopPropagation(),
                          e.preventDefault(),
                          r.removeNode(t),
                          void o.off(document, "click.fptextarea"));
                    });
                });
            });
          },
          { "../common": 1, "../flowplayer": 31, bean: 34 },
        ],
        18: [
          function (e, t, n) {
            "use strict";
            var i = e("../flowplayer"),
              r = /IEMobile/.test(window.navigator.userAgent),
              o = e("../common"),
              a = e("bean"),
              s = e("./ui").format,
              l = i.support,
              u = window.navigator.userAgent;
            (l.touch || r) &&
              i(function (e, t) {
                var n = l.android,
                  i = n && !n.firefox,
                  c = /Silk/.test(u),
                  f = n.version || 0;
                if (i && !r) {
                  if ((!/Chrome/.test(u) && 4 > f) || (n.samsung && 5 > f)) {
                    var d = e.load;
                    e.load = function () {
                      var n = d.apply(e, arguments);
                      return (
                        o.find("video.fp-engine", t)[0].load(),
                        e.trigger("ready", [e, e.video]),
                        n
                      );
                    };
                  }
                  var p,
                    h = 0,
                    g = function (e) {
                      p = setInterval(function () {
                        (e.video.time = ++h), e.trigger("progress", [e, h]);
                      }, 1e3);
                    };
                  e.on("ready pause unload", function () {
                    p && (clearInterval(p), (p = null));
                  }),
                    e.on("ready", function () {
                      h = 0;
                    }),
                    e.on("resume", function (t, n) {
                      return n.live
                        ? h
                          ? g(n)
                          : void e.one("progress", function (e, t, n) {
                              0 === n && g(t);
                            })
                        : void 0;
                    });
                }
                l.volume ||
                  (o.removeClass(t, "fp-mute"), o.addClass(t, "no-volume")),
                  l.iOS && o.addClass(t, "fp-mute"),
                  o.addClass(t, "is-touch"),
                  e.sliders &&
                    e.sliders.timeline &&
                    e.sliders.timeline.disableAnimation();
                var m = !1;
                if (
                  (a.on(t, "touchmove", function () {
                    m = !0;
                  }),
                  a.on(t, "touchend click", function (n) {
                    if (m) return void (m = !1);
                    var i = o.find("video.fp-engine", t)[0];
                    return (
                      i && i.muted && e.conf.autoplay && (i.muted = !1),
                      e.playing && !o.hasClass(t, "is-mouseover")
                        ? (o.addClass(t, "is-mouseover"),
                          o.removeClass(t, "is-mouseout"),
                          n.preventDefault(),
                          void n.stopPropagation())
                        : void (
                            e.playing ||
                            e.splash ||
                            !o.hasClass(t, "is-mouseout") ||
                            o.hasClass(t, "is-mouseover") ||
                            setTimeout(function () {
                              e.disabled ||
                                e.playing ||
                                e.splash ||
                                o.find("video.fp-engine", t)[0].play();
                            }, 400)
                          )
                    );
                  }),
                  !l.fullscreen &&
                    e.conf.native_fullscreen &&
                    "function" ==
                      typeof o.createElement("video").webkitEnterFullScreen)
                ) {
                  var v = e.fullscreen;
                  e.fullscreen = function () {
                    var n = o.find("video.fp-engine", t)[0];
                    return n
                      ? (e.trigger("fullscreen", [e]),
                        a.on(
                          document,
                          "webkitfullscreenchange.nativefullscreen",
                          function () {
                            document.webkitFullscreenElement === n &&
                              (a.off(document, ".nativefullscreen"),
                              a.on(
                                document,
                                "webkitfullscreenchange.nativefullscreen",
                                function () {
                                  document.webkitFullscreenElement ||
                                    (a.off(document, ".nativefullscreen"),
                                    e.trigger("fullscreen-exit", [e]));
                                }
                              ));
                          }
                        ),
                        n.webkitEnterFullScreen(),
                        void a.one(n, "webkitendfullscreen", function () {
                          a.off(document, "fullscreenchange.nativefullscreen"),
                            e.trigger("fullscreen-exit", [e]),
                            o.prop(n, "controls", !0),
                            o.prop(n, "controls", !1);
                        }))
                      : v.apply(e);
                  };
                }
                (i || c) &&
                  e.bind("ready", function () {
                    var n = o.find("video.fp-engine", t)[0];
                    e.conf.splash &&
                      n.paused &&
                      (a.one(n, "canplay", function () {
                        n.play();
                      }),
                      n.load()),
                      e.bind("progress.dur", function () {
                        if (!e.live && !e.conf.live) {
                          var i = n.duration;
                          1 !== i &&
                            ((e.video.duration = i),
                            (o.find(".fp-duration", t)[0].innerHTML = s(i)),
                            e.unbind("progress.dur"));
                        }
                      });
                  });
              });
          },
          { "../common": 1, "../flowplayer": 31, "./ui": 27, bean: 34 },
        ],
        19: [
          function (e, t, n) {
            "use strict";
            var i = e("../flowplayer"),
              r = e("extend-object"),
              o = e("bean"),
              a = e("../common"),
              s = e("./resolve"),
              l = new s(),
              u = window.jQuery,
              c = /^#/;
            i(function (e, t) {
              function n() {
                return a.find(h.query, i());
              }
              function i() {
                return c.test(h.query) ? void 0 : t;
              }
              function f() {
                return a.find(h.query + "." + g, i());
              }
              function d() {
                var n = a.find(".fp-playlist", t)[0];
                if (!n) {
                  n = a.createElement("div", { className: "fp-playlist" });
                  var i = a.find(".fp-next,.fp-prev", t);
                  i.length
                    ? i[0].parentElement.insertBefore(n, i[0])
                    : a.insertAfter(t, a.find("video", t)[0], n);
                }
                (n.innerHTML = ""),
                  e.conf.playlist[0].length &&
                    (e.conf.playlist = e.conf.playlist.map(function (e) {
                      if ("string" == typeof e) {
                        var t = e.split(s.TYPE_RE)[1];
                        return {
                          sources: [
                            {
                              type:
                                "m3u8" === t.toLowerCase()
                                  ? "application/x-mpegurl"
                                  : "video/" + t,
                              src: e,
                            },
                          ],
                        };
                      }
                      return {
                        sources: e.map(function (e) {
                          var t = {};
                          return (
                            Object.keys(e).forEach(function (n) {
                              (t.type = /mpegurl/i.test(n)
                                ? "application/x-mpegurl"
                                : "video/" + n),
                                (t.src = e[n]);
                            }),
                            t
                          );
                        }),
                      };
                    })),
                  e.conf.playlist.forEach(function (t, i) {
                    var r = t.sources[0].src;
                    n.appendChild(
                      a.createElement("a", {
                        href: r,
                        className: e.video.index === i ? g : void 0,
                        "data-index": i,
                      })
                    );
                  });
              }
              function p(t) {
                return "undefined" != typeof t.index
                  ? t.index
                  : "undefined" != typeof e.video.index
                  ? e.video.index
                  : e.conf.startIndex || 0;
              }
              var h = r(
                  { active: "is-active", advance: !0, query: ".fp-playlist a" },
                  e.conf
                ),
                g = h.active,
                m = a.find(".fp-ui", t)[0],
                v = a.hasClass(t, "fp-custom-playlist") || !!h.customPlaylist;
              a.toggleClass(t, "fp-custom-playlist", v),
                a.toggleClass(t, "fp-default-playlist", !v),
                (e.play = function (t) {
                  if (void 0 === t) return e.resume();
                  if ("number" == typeof t && !e.conf.playlist[t]) return e;
                  if ("number" != typeof t)
                    return e.load.apply(null, arguments);
                  var n = r({ index: t }, e.conf.playlist[t]);
                  return (
                    e.off("beforeresume.fromfirst"),
                    "number" == typeof t && t === e.video.index
                      ? e.seek(0, function () {
                          e.resume();
                        })
                      : (e.load(n, function () {
                          e.video.index = t;
                        }),
                        e)
                  );
                }),
                (e.next = function (t) {
                  t && t.preventDefault();
                  var n = e.video.index;
                  return (
                    -1 != n &&
                      ((n = n === e.conf.playlist.length - 1 ? 0 : n + 1),
                      e.play(n)),
                    e
                  );
                }),
                (e.prev = function (t) {
                  t && t.preventDefault();
                  var n = e.video.index;
                  return (
                    -1 != n &&
                      ((n = 0 === n ? e.conf.playlist.length - 1 : n - 1),
                      e.play(n)),
                    e
                  );
                }),
                (e.setPlaylist = function (t, n) {
                  return (
                    (e.conf.playlist = t), n || delete e.video.index, d(), e
                  );
                }),
                (e.addPlaylistItem = function (t) {
                  return (
                    delete e.video.is_last,
                    e.setPlaylist(e.conf.playlist.concat([t]), !0)
                  );
                }),
                (e.removePlaylistItem = function (t) {
                  var n = e.conf.playlist;
                  return e.setPlaylist(n.slice(0, t).concat(n.slice(t + 1)));
                }),
                o.on(t, "click", ".fp-next", e.next),
                o.on(t, "click", ".fp-prev", e.prev),
                e.off("finish.pl").on("finish.pl", function (e, n) {
                  var i =
                    "undefined" == typeof n.conf.advance ? !0 : n.conf.advance;
                  if (i) {
                    if (n.video.loop)
                      return n.seek(0, function () {
                        n.resume();
                      });
                    var r = n.video.index >= 0 ? n.video.index + 1 : void 0;
                    r < n.conf.playlist.length || h.loop
                      ? ((r = r === n.conf.playlist.length ? 0 : r),
                        a.removeClass(t, "is-finished"),
                        setTimeout(function () {
                          n.play(r);
                        }))
                      : n.conf.playlist.length > 1 &&
                        (n.one("beforeresume.fromfirst", function (e) {
                          e.preventDefault(), n.play(0);
                        }),
                        n.one("seek", function () {
                          n.off("beforeresume.fromfirst");
                        }));
                  }
                });
              var y = !1;
              e.conf.playlist.length &&
                ((y = !0),
                d(),
                (e.conf.clip && e.conf.clip.sources.length) ||
                  (e.conf.clip = e.conf.playlist[e.conf.startIndex || 0])),
                n().length &&
                  !y &&
                  ((e.conf.playlist = []),
                  delete e.conf.startIndex,
                  n().forEach(function (t) {
                    var n = t.href;
                    t.setAttribute("data-index", e.conf.playlist.length);
                    var i = l.resolve(n, e.conf.clip.sources);
                    u && r(i, u(t).data()), e.conf.playlist.push(i);
                  })),
                a
                  .find(".fp-prev,.fp-next,.fp-playlist", t)
                  .forEach(function (e) {
                    m.appendChild(e);
                  }),
                o.on(
                  c.test(h.query) ? document : t,
                  "click",
                  h.query,
                  function (t) {
                    t.preventDefault();
                    var n = t.currentTarget,
                      i = Number(n.getAttribute("data-index"));
                    -1 != i && e.play(i);
                  }
                ),
                e
                  .on("load", function (n, r, o) {
                    if (e.conf.playlist.length) {
                      var s = f()[0],
                        l = s && s.getAttribute("data-index"),
                        u = (o.index = p(o)),
                        c = a.find(
                          h.query + '[data-index="' + u + '"]',
                          i()
                        )[0],
                        d = u == e.conf.playlist.length - 1;
                      s && a.removeClass(s, g),
                        c && a.addClass(c, g),
                        a.removeClass(t, "video" + l),
                        a.addClass(t, "video" + u),
                        a.toggleClass(t, "last-video", d),
                        (o.index = r.video.index = u),
                        (o.is_last = r.video.is_last = d);
                    }
                  })
                  .on("unload.pl", function () {
                    e.conf.playlist.length &&
                      (f().forEach(function (e) {
                        a.toggleClass(e, g);
                      }),
                      e.conf.playlist.forEach(function (e, n) {
                        a.removeClass(t, "video" + n);
                      }));
                  }),
                e.conf.playlist.length && (e.conf.loop = !1);
            });
          },
          {
            "../common": 1,
            "../flowplayer": 31,
            "./resolve": 21,
            bean: 34,
            "extend-object": 39,
          },
        ],
        20: [
          function (e, t, n) {
            var i = e("../flowplayer"),
              r = e("../common"),
              o = e("bean");
            i(function (e, t) {
              function n() {
                r.find(".fp-qsel-menu", t).forEach(r.removeNode),
                  r.find(".fp-qsel", t).forEach(r.removeNode);
              }
              function i(e) {
                l.appendChild(
                  r.createElement("strong", { className: "fp-qsel" }, "HD")
                );
                var t = r.createElement(
                  "div",
                  { className: "fp-menu fp-qsel-menu" },
                  "<strong>Quality</strong>"
                );
                e.forEach(function (e) {
                  var n = document.createElement("a"),
                    i = "undefined" != typeof e.value ? e.value : e;
                  n.setAttribute("data-quality", i),
                    (n.innerHTML = e.label || e),
                    t.appendChild(n);
                }),
                  s.appendChild(t);
              }
              function a(e) {
                r.find(".fp-qsel-menu a", t).forEach(function (t) {
                  r.toggleClass(
                    t,
                    "fp-selected",
                    t.getAttribute("data-quality") == e
                  ),
                    r.toggleClass(
                      t,
                      "fp-color",
                      t.getAttribute("data-quality") == e
                    );
                });
              }
              var s = r.find(".fp-ui", t)[0],
                l = r.find(".fp-controls", s)[0];
              o.on(t, "click", ".fp-qsel", function () {
                var n = r.find(".fp-qsel-menu", t)[0];
                r.hasClass(n, "fp-active") ? e.hideMenu() : e.showMenu(n);
              }),
                o.on(t, "click", ".fp-qsel-menu a", function (t) {
                  var n = t.target.getAttribute("data-quality");
                  e.quality(n);
                }),
                (e.quality = function (t) {
                  (t = isNaN(Number(t)) ? t : Number(t)),
                    e.trigger("quality", [e, t]);
                }),
                e.on("quality", function (e, t, n) {
                  a(n, t.video.qualities);
                }),
                e.on("ready", function (e, t, r) {
                  n(),
                    !r.qualities ||
                      r.qualities.filter(function (e) {
                        return "undefined" != typeof e.value
                          ? e.value > -1
                          : !0;
                      }).length < 2 ||
                      (i(r.qualities, r.quality), a(r.quality, r.qualities));
                });
            });
          },
          { "../common": 1, "../flowplayer": 31, bean: 34 },
        ],
        21: [
          function (e, t, n) {
            "use strict";
            function i(e) {
              var t = e.attr("src"),
                n = e.attr("type") || "",
                i = t.split(o)[1];
              return (
                (n = n.toLowerCase()),
                a(e.data(), { src: t, suffix: i || n, type: n || i })
              );
            }
            function r(e) {
              return /mpegurl/i.test(e)
                ? "application/x-mpegurl"
                : "video/" + e;
            }
            var o = /\.(\w{3,4})(\?.*)?$/i,
              a = e("extend-object");
            (t.exports = function () {
              var e = this;
              (e.sourcesFromVideoTag = function (e, t) {
                var n = [];
                return (
                  t("source", e).each(function () {
                    n.push(i(t(this)));
                  }),
                  !n.length && e.length && n.push(i(e)),
                  n
                );
              }),
                (e.resolve = function (e, t) {
                  return e
                    ? ("string" == typeof e &&
                        ((e = { src: e, sources: [] }),
                        (e.sources = (t || []).map(function (t) {
                          var n = t.src.split(o)[1];
                          return {
                            type: t.type,
                            src: e.src.replace(o, "." + n + "$2"),
                          };
                        }))),
                      e instanceof Array &&
                        (e = {
                          sources: e.map(function (e) {
                            return e.type && e.src
                              ? e
                              : Object.keys(e).reduce(function (t, n) {
                                  return a(t, { type: r(n), src: e[n] });
                                }, {});
                          }),
                        }),
                      e)
                    : { sources: t };
                });
            }),
              (t.exports.TYPE_RE = o);
          },
          { "extend-object": 39 },
        ],
        22: [
          function (e, t, n) {
            "use strict";
            var i = e("../flowplayer"),
              r = e("../common"),
              o = e("extend-object"),
              a = e("bean");
            i(function (e, t) {
              var n = e.conf;
              if (n.share === !1)
                return void r.find(".fp-share", t).forEach(r.removeNode);
              e.shareUrl = function (t) {
                if (t && n.embed && n.embed.iframe) return n.embed.iframe;
                if ("string" == typeof e.conf.share) return e.conf.share;
                var i = encodeURIComponent(
                    e.video.title ||
                      (r.find("title")[0] || {}).innerHTML ||
                      "Flowplayer video"
                  ),
                  a = encodeURIComponent(
                    btoa(
                      JSON.stringify(o({}, e.conf, e.extensions)).replace(
                        /[\u007F-\uFFFF]/g,
                        function (e) {
                          return (
                            "\\u" +
                            ("0000" + e.charCodeAt(0).toString(16)).substr(-4)
                          );
                        }
                      )
                    )
                  ),
                  s = encodeURIComponent(window.location.toString()),
                  l = t
                    ? "https://flowplayer.com/e/"
                    : "https://flowplayer.com/s/";
                return l + "?t=" + i + "&c=" + a + "&r=" + s;
              };
              var i = r.createElement(
                  "div",
                  { className: "fp-menu fp-share-menu" },
                  "<strong>Share</strong>"
                ),
                s = r.find(".fp-ui", t)[0];
              s.appendChild(i);
              var l = r.find(".fp-share", t)[0];
              a.on(t, "click", ".fp-share", function (t) {
                t.preventDefault(),
                  r.hasClass(i, "fp-active") ? e.hideMenu() : e.showMenu(i, l);
              });
            });
          },
          {
            "../common": 1,
            "../flowplayer": 31,
            bean: 34,
            "extend-object": 39,
          },
        ],
        23: [
          function (e, t, n) {
            "use strict";
            var i = e("../flowplayer"),
              r = e("../common"),
              o = e("bean"),
              a = e("./subtitles/parser");
            (i.defaults.subtitleParser = a),
              i(function (e, t) {
                var n, a, s, l;
                (!i.support.inlineVideo ||
                  (!i.support.fullscreen && e.conf.native_fullscreen)) &&
                  (e.conf.nativesubtitles = !0);
                var u = function () {
                  return (
                    (s =
                      s ||
                      r.createElement("strong", { className: "fp-cc" }, "CC")),
                    (l =
                      l ||
                      r.createElement(
                        "div",
                        { className: "fp-menu fp-subtitle-menu" },
                        "<strong>Closed Captions</strong>"
                      )),
                    r.find("a", l).forEach(r.removeNode),
                    l.appendChild(
                      r.createElement(
                        "a",
                        { "data-subtitle-index": -1 },
                        "No subtitles"
                      )
                    ),
                    (e.video.subtitles || []).forEach(function (e, t) {
                      var n = e.srclang || "en",
                        i = e.label || "Default (" + n + ")",
                        o = r.createElement(
                          "a",
                          { "data-subtitle-index": t },
                          i
                        );
                      l.appendChild(o);
                    }),
                    r.find(".fp-ui", t)[0].appendChild(l),
                    r.find(".fp-controls", t)[0].appendChild(s),
                    s
                  );
                };
                o.on(t, "click", ".fp-cc", function () {
                  r.hasClass(l, "fp-active") ? e.hideMenu() : e.showMenu(l);
                }),
                  o.on(
                    t,
                    "click",
                    ".fp-subtitle-menu [data-subtitle-index]",
                    function (t) {
                      t.preventDefault();
                      var n = t.target.getAttribute("data-subtitle-index");
                      return "-1" === n
                        ? e.disableSubtitles()
                        : void e.loadSubtitles(n);
                    }
                  );
                var c = function () {
                  (a = r.find(".fp-captions", t)[0]),
                    (a =
                      a ||
                      r.appendTo(
                        r.createElement("div", { class: "fp-captions" }),
                        r.find(".fp-player", t)[0]
                      )),
                    Array.prototype.forEach.call(a.children, r.removeNode),
                    u();
                };
                e.on("ready", function (n, i, o) {
                  if (
                    ((i.subtitles = []),
                    c(),
                    r.removeClass(t, "has-menu"),
                    e.disableSubtitles(),
                    r.toggleClass(
                      s,
                      "fp-hidden",
                      !o.subtitles || !o.subtitles.length
                    ),
                    o.subtitles && o.subtitles.length)
                  ) {
                    var a = o.subtitles.filter(function (e) {
                      return e["default"];
                    })[0];
                    a && i.loadSubtitles(o.subtitles.indexOf(a));
                  }
                }),
                  e.bind("cuepoint", function (e, t, i) {
                    i.subtitle
                      ? ((n = i.index),
                        r.html(a, i.subtitle.text),
                        r.addClass(a, "fp-shown"))
                      : i.subtitleEnd &&
                        (r.removeClass(a, "fp-shown"), (n = i.index));
                  }),
                  e.bind("seek", function (t, i, o) {
                    n &&
                      e.cuepoints[n] &&
                      e.cuepoints[n].time > o &&
                      (r.removeClass(a, "fp-shown"), (n = null)),
                      (e.cuepoints || []).forEach(function (t, i) {
                        var r = t.subtitle;
                        r && n != i
                          ? o >= t.time &&
                            (!r.endTime || o <= r.endTime) &&
                            e.trigger("cuepoint", [e, t])
                          : t.subtitleEnd &&
                            o >= t.time &&
                            i == n + 1 &&
                            e.trigger("cuepoint", [e, t]);
                      });
                  }),
                  e.on("unload", function () {
                    r.find(".fp-captions", t).forEach(r.removeNode);
                  });
                var f = function (e) {
                    r.toggleClass(r.find("a.fp-selected", l)[0], "fp-selected"),
                      r.toggleClass(
                        r.find('a[data-subtitle-index="' + e + '"]', l)[0],
                        "fp-selected"
                      );
                  },
                  d = function (e, n) {
                    var i = r.find("video.fp-engine", t)[0].textTracks;
                    i.length &&
                      (null === e
                        ? [].forEach.call(i, function (e) {
                            e.mode = n;
                          })
                        : (i[e].mode = n));
                  };
                (e.disableSubtitles = function () {
                  return (
                    (e.subtitles = []),
                    (e.cuepoints || []).forEach(function (t) {
                      (t.subtitle || t.subtitleEnd) && e.removeCuepoint(t);
                    }),
                    a && Array.prototype.forEach.call(a.children, r.removeNode),
                    f(-1),
                    i.support.subtitles &&
                      e.conf.nativesubtitles &&
                      "html5" == e.engine.engineName &&
                      d(null, "disabled"),
                    e
                  );
                }),
                  (e.loadSubtitles = function (t) {
                    e.disableSubtitles();
                    var n = e.video.subtitles[t],
                      o = n.src;
                    return o
                      ? (f(t),
                        i.support.subtitles &&
                        e.conf.nativesubtitles &&
                        "html5" == e.engine.engineName
                          ? void d(t, "showing")
                          : (r.xhrGet(
                              o,
                              function (t) {
                                var n = e.conf.subtitleParser(t);
                                n.forEach(function (t) {
                                  var n = {
                                    time: t.startTime,
                                    subtitle: t,
                                    visible: !1,
                                  };
                                  e.subtitles.push(t),
                                    e.addCuepoint(n),
                                    e.addCuepoint({
                                      time: t.endTime,
                                      subtitleEnd: t.title,
                                      visible: !1,
                                    }),
                                    0 !== t.startTime ||
                                      e.video.time ||
                                      e.splash ||
                                      e.trigger("cuepoint", [
                                        e,
                                        i.extend({}, n, { index: 0 }),
                                      ]),
                                    e.splash &&
                                      e.one("ready", function () {
                                        e.trigger("cuepoint", [e, n]);
                                      });
                                });
                              },
                              function () {
                                return (
                                  e.trigger("error", { code: 8, url: o }), !1
                                );
                              }
                            ),
                            e))
                      : void 0;
                  });
              });
          },
          {
            "../common": 1,
            "../flowplayer": 31,
            "./subtitles/parser": 24,
            bean: 34,
          },
        ],
        24: [
          function (e, t, n) {
            t.exports = function (e) {
              function t(e) {
                var t = e.split(":");
                return (
                  2 == t.length && t.unshift(0),
                  60 * t[0] * 60 +
                    60 * t[1] +
                    parseFloat(t[2].replace(",", "."))
                );
              }
              for (
                var n,
                  i,
                  r,
                  o = /^(([0-9]+:){1,2}[0-9]{2}[,.][0-9]{3}) --\> (([0-9]+:){1,2}[0-9]{2}[,.][0-9]{3})(.*)/,
                  a = [],
                  s = 0,
                  l = e.split("\n"),
                  u = l.length,
                  c = {};
                u > s;
                s++
              )
                if ((i = o.exec(l[s]))) {
                  for (
                    n = l[s - 1], r = "<p>" + l[++s] + "</p><br/>";
                    "string" == typeof l[++s] && l[s].trim() && s < l.length;

                  )
                    r += "<p>" + l[s] + "</p><br/>";
                  (c = {
                    title: n,
                    startTime: t(i[1]),
                    endTime: t(i[3]),
                    text: r,
                  }),
                    a.push(c);
                }
              return a;
            };
          },
          {},
        ],
        25: [
          function (e, t, n) {
            "use strict";
            var i = e("../flowplayer"),
              r = e("extend-object");
            !(function () {
              var e = function (e) {
                  var t = /iP(ad|hone)(; CPU)? OS (\d+_\d)/.exec(e);
                  return t && t.length > 1
                    ? parseFloat(t[t.length - 1].replace("_", "."), 10)
                    : 0;
                },
                t = function () {
                  var e = document.createElement("video");
                  return (e.loop = !0), (e.autoplay = !0), (e.preload = !0), e;
                },
                n = {},
                o = document.documentElement.style,
                a = navigator.userAgent.toLowerCase(),
                s =
                  /(chrome)[ \/]([\w.]+)/.exec(a) ||
                  /(safari)[ \/]([\w.]+)/.exec(a) ||
                  /(webkit)[ \/]([\w.]+)/.exec(a) ||
                  /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) ||
                  /(msie) ([\w.]+)/.exec(a) ||
                  (a.indexOf("compatible") < 0 &&
                    /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)) ||
                  [];
              s[1] && ((n[s[1]] = !0), (n.version = s[2] || "0")),
                n.safari &&
                  (n.version = (/version\/([\w.]+)/.exec(a) || [])[1]);
              var l = t(),
                u = navigator.userAgent,
                c = n.msie || /Trident\/7/.test(u),
                f = /iPad|MeeGo/.test(u) && !/CriOS/.test(u),
                d = /iPad/.test(u) && /CriOS/.test(u),
                p =
                  /iP(hone|od)/i.test(u) &&
                  !/iPad/.test(u) &&
                  !/IEMobile/i.test(u),
                h = /Android/.test(u),
                g = h && /Firefox/.test(u),
                m = h && /SAMSUNG/.test(u),
                v = /Silk/.test(u),
                y = /IEMobile/.test(u),
                w = y
                  ? parseFloat(/Windows\ Phone\ (\d+\.\d+)/.exec(u)[1], 10)
                  : 0,
                b = y ? parseFloat(/IEMobile\/(\d+\.\d+)/.exec(u)[1], 10) : 0,
                I = f || p ? e(u) : 0,
                M = h ? parseFloat(/Android\ (\d\.\d)/.exec(u)[1], 10) : 0,
                C = (p || f || d) && {
                  iPhone: p,
                  iPad: f || d,
                  version: I,
                  chrome: d,
                },
                A = r(i.support, {
                  browser: n,
                  iOS: C,
                  android: h
                    ? {
                        firefox: g,
                        opera: /Opera/.test(u),
                        samsung: m,
                        version: M,
                      }
                    : !1,
                  subtitles: !!l.addTextTrack,
                  fullscreen:
                    "boolean" == typeof document.webkitFullscreenEnabled
                      ? document.webkitFullscreenEnabled
                      : ("function" == typeof document.webkitCancelFullScreen &&
                          !/Mac OS X 10_5.+Version\/5\.0\.\d Safari/.test(u)) ||
                        document.mozFullScreenEnabled ||
                        "function" == typeof document.exitFullscreen ||
                        "function" == typeof document.msExitFullscreen,
                  inlineBlock: !(c && n.version < 8),
                  touch: "ontouchstart" in window,
                  dataload: !f && !p && !y,
                  flex:
                    "flexWrap" in o ||
                    "WebkitFlexWrap" in o ||
                    "msFlexWrap" in o,
                  svg:
                    !!document.createElementNS &&
                    !!document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "svg"
                    ).createSVGRect,
                  zeropreload: !c && !h,
                  volume: !(f || p || v || d),
                  cachedVideoTag: !(f || p || d || y),
                  firstframe: !(
                    v ||
                    y ||
                    g ||
                    m ||
                    (I && 10 > I) ||
                    (h && 4.4 > M)
                  ),
                  mutedAutoplay:
                    ((p || f || d) && I >= 10) || (h && M > 4.3 && !m),
                  inlineVideo:
                    (!p || I >= 10) &&
                    (!y || (w >= 8.1 && b >= 11)) &&
                    (!h || M >= 3),
                  hlsDuration: !h && (!n.safari || f || p || d),
                  seekable: !f && !d,
                  preloadMetadata:
                    !C && (!n.safari || parseFloat(n.version) > 9.1),
                });
              (A.autoplay = A.firstframe), y && (A.browser.safari = !1);
              try {
                var S = navigator.plugins["Shockwave Flash"],
                  E = c
                    ? new ActiveXObject(
                        "ShockwaveFlash.ShockwaveFlash"
                      ).GetVariable("$version")
                    : S.description;
                c || S[0].enabledPlugin
                  ? ((E = E.split(/\D+/)),
                    E.length && !E[0] && (E = E.slice(1)),
                    (A.flashVideo = E[0] > 9 || (9 == E[0] && E[3] >= 115)))
                  : (A.flashVideo = !1);
              } catch (D) {}
              try {
                (A.video = !!l.canPlayType),
                  A.video && l.canPlayType("video/mp4");
              } catch (N) {
                A.video = !1;
              }
              A.animation = (function () {
                for (
                  var e = ["", "Webkit", "Moz", "O", "ms", "Khtml"],
                    t = document.createElement("p"),
                    n = 0;
                  n < e.length;
                  n++
                )
                  if ("undefined" != typeof t.style[e[n] + "AnimationName"])
                    return !0;
              })();
            })();
          },
          { "../flowplayer": 31, "extend-object": 39 },
        ],
        26: [
          function (e, t, n) {
            "use strict";
            var i = e("../flowplayer"),
              r = e("../common"),
              o = e("bean");
            i(function (e, t) {
              var n = e.conf;
              if (n.share !== !1 && n.twitter !== !1) {
                e.tweet = function () {
                  var t,
                    i,
                    r = 550,
                    o = 420,
                    a = screen.height,
                    s = screen.width,
                    l = "scrollbars=yes,resizable=yes,toolbar=no,location=yes",
                    u = "string" == typeof n.twitter ? n.twitter : e.shareUrl();
                  (t = Math.round(s / 2 - r / 2)),
                    (i = 0),
                    a > o && (i = Math.round(a / 2 - o / 2)),
                    window.open(
                      "https://twitter.com/intent/tweet?url=" +
                        encodeURIComponent(u),
                      "intent",
                      l +
                        ",width=" +
                        r +
                        ",height=" +
                        o +
                        ",left=" +
                        t +
                        ",top=" +
                        i
                    );
                };
                var i = r.find(".fp-share-menu", t)[0],
                  a = r.createElement(
                    "a",
                    { class: "fp-icon fp-twitter" },
                    "Twitter"
                  );
                r.append(i, a),
                  o.on(t, "click", ".fp-twitter", function () {
                    e.tweet();
                  });
              }
            });
          },
          { "../common": 1, "../flowplayer": 31, bean: 34 },
        ],
        27: [
          function (e, t, n) {
            (function (n) {
              "use strict";
              function i(e) {
                return (e = parseInt(e, 10)), e >= 10 ? e : "0" + e;
              }
              function r(e, t) {
                (e = Math.max(e || 0, 0)),
                  (e = t ? Math.ceil(e) : Math.floor(e));
                var n = Math.floor(e / 3600),
                  r = Math.floor(e / 60);
                return (
                  (e -= 60 * r),
                  n >= 1
                    ? ((r -= 60 * n), n + ":" + i(r) + ":" + i(e))
                    : i(r) + ":" + i(e)
                );
              }
              var o = e("../flowplayer"),
                a = e("../common"),
                s = e("bean"),
                l = e("./ui/slider"),
                u = e("./ui/bar-slider"),
                c = n(
                  "PHN2ZyBjbGFzcz0iZnAtcGxheS1yb3VuZGVkLW91dGxpbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDk5Ljg0NCA5OS44NDM0Ij48ZGVmcz48c3R5bGU+LmZwLWNvbG9yLXBsYXl7b3BhY2l0eTowLjY1O30uY29udHJvbGJ1dHRvbntmaWxsOiNmZmY7fTwvc3R5bGU+CjwvZGVmcz4KPHRpdGxlPnBsYXktcm91bmRlZC1vdXRsaW5lPC90aXRsZT48cGF0aCBjbGFzcz0iZnAtY29sb3ItcGxheSIgZD0iTTQ5LjkyMTctLjA3OGE1MCw1MCwwLDEsMCw1MCw1MEE1MC4wNTY0LDUwLjA1NjQsMCwwLDAsNDkuOTIxNy0uMDc4WiIvPjxwYXRoIGNsYXNzPSJjb250cm9sYnV0dG9uIiBkPSJNNDEuMDM1OSw3MS4xOWE1LjA0OTIsNS4wNDkyLDAsMCwxLTIuNTU3NS0uNjY3M2MtMS44MDMxLTEuMDQxLTIuNzk1OC0zLjEyNDgtMi43OTU4LTUuODY2NFYzNS4xODg3YzAtMi43NDI5Ljk5MzMtNC44MjcyLDIuNzk3LTUuODY3NiwxLjgwMjUtMS4wNDIyLDQuMTAzNC0uODYsNi40OC41MTQzTDcwLjQ3ODIsNDQuNTY3MmMyLjM3NTEsMS4zNzExLDMuNjgyNiwzLjI3MjUsMy42ODMyLDUuMzU0NXMtMS4zMDc2LDMuOTg0NS0zLjY4MzIsNS4zNTYyTDQ0Ljk1OTIsNzAuMDExNEE3LjkzODQsNy45Mzg0LDAsMCwxLDQxLjAzNTksNzEuMTlabS4wMDY1LTQwLjEyM2EyLjY3OTQsMi42Nzk0LDAsMCwwLTEuMzU4Mi4zNDEzYy0xLjAyNjMuNTkyNi0xLjU5MTIsMS45MzQ5LTEuNTkxMiwzLjc4VjY0LjY1NjNjMCwxLjg0NDkuNTY0OSwzLjE4NjYsMS41OTA2LDMuNzc5MSwxLjAyODEuNTkzMiwyLjQ3MzMuNDEwOCw0LjA3LS41MTJMNjkuMjczLDUzLjE5MDZjMS41OTgzLS45MjI3LDIuNDc4LTIuMDgzOCwyLjQ3OC0zLjI2ODlzLS44OC0yLjM0NDUtMi40NzgtMy4yNjY2TDQzLjc1NCwzMS45MjI3QTUuNTY4NSw1LjU2ODUsMCwwLDAsNDEuMDQyMywzMS4wNjcxWiIgZmlsdGVyPSJ1cmwoI2YxKSIvPjwvc3ZnPgo=",
                  "base64"
                ),
                f = n(
                  "PHN2ZyBjbGFzcz0iZnAtcGxheS1yb3VuZGVkLWZpbGwiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiPgogIDxkZWZzPjxzdHlsZT4uYXtmaWxsOiMwMDA7b3BhY2l0eTowLjY1O30uYntmaWxsOiNmZmY7b3BhY2l0eToxLjA7fTwvc3R5bGU+CiAgPC9kZWZzPjx0aXRsZT5wbGF5LXJvdW5kZWQtZmlsbDwvdGl0bGU+CiAgPHBhdGggY2xhc3M9ImZwLWNvbG9yLXBsYXkiIGQ9Ik00OS45MjE3LS4wNzhhNTAsNTAsMCwxLDAsNTAsNTBBNTAuMDU2NCw1MC4wNTY0LDAsMCwwLDQ5LjkyMTctLjA3OFoiLz4KICA8cGF0aCBjbGFzcz0iYiIgZD0iTTM1Ljk0MiwzNS4yMzIzYzAtNC43Mjg5LDMuMzUwNi02LjY2MzcsNy40NDYtNC4yOTcxTDY4LjgzLDQ1LjYyMzVjNC4wOTU2LDIuMzY0LDQuMDk1Niw2LjIzMTksMCw4LjU5NzdMNDMuMzg4LDY4LjkxYy00LjA5NTQsMi4zNjQtNy40NDYuNDMtNy40NDYtNC4yOTc5WiIgZmlsdGVyPSJ1cmwoI2YxKSIvPgogIDwvc3ZnPgogIAo=",
                  "base64"
                ),
                d = n(
                  "PHN2ZyBjbGFzcz0iZnAtcGxheS1zaGFycC1maWxsIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4uZnAtY29sb3ItcGxheXtvcGFjaXR5OjAuNjU7fS5jb250cm9sYnV0dG9ue2ZpbGw6I2ZmZjt9PC9zdHlsZT4KICA8L2RlZnM+CiAgPHRpdGxlPnBsYXktc2hhcnAtZmlsbDwvdGl0bGU+CiAgPHBhdGggY2xhc3M9ImZwLWNvbG9yLXBsYXkiIGQ9Ik00OS45MjE3LS4wNzhhNTAsNTAsMCwxLDAsNTAsNTBBNTAuMDU2NCw1MC4wNTY0LDAsMCwwLDQ5LjkyMTctLjA3OFoiLz4KICA8cG9seWdvbiBjbGFzcz0iY29udHJvbGJ1dHRvbiIgcG9pbnRzPSI3My42MDEgNTAgMzcuOTY4IDcwLjU3MyAzNy45NjggMjkuNDI3IDczLjYwMSA1MCIgZmlsdGVyPSJ1cmwoI2YxKSIvPgo8L3N2Zz4K",
                  "base64"
                ),
                p = n(
                  "PHN2ZyBjbGFzcz0iZnAtcGxheS1zaGFycC1vdXRsaW5lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5OS44NDQgOTkuODQzNCI+PGRlZnM+PHN0eWxlPi5jb250cm9sYnV0dG9uYmd7b3BhY2l0eTowLjY1O30uY29udHJvbGJ1dHRvbntmaWxsOiNmZmY7fTwvc3R5bGU+CjwvZGVmcz48dGl0bGU+cGxheS1zaGFycC1vdXRsaW5lPC90aXRsZT48cGF0aCBjbGFzcz0iZnAtY29sb3ItcGxheSIgZD0iTTQ5LjkyMTctLjA3OGE1MCw1MCwwLDEsMCw1MCw1MEE1MC4wNTY0LDUwLjA1NjQsMCwwLDAsNDkuOTIxNy0uMDc4WiIvPjxwYXRoIGNsYXNzPSJjb250cm9sYnV0dG9uIiBkPSJNMzYuOTQ0Myw3Mi4yNDczVjI3LjI5MTZMNzUuODc3Niw0OS43N1ptMi4yLTQxLjE0NTVWNjguNDM3MUw3MS40Nzc2LDQ5Ljc3WiIgZmlsdGVyPSJ1cmwoI2YxKSIvPjwvc3ZnPgo=",
                  "base64"
                ),
                h = n(
                  "PHN2ZyBjbGFzcz0iZnAtcGF1c2Utcm91bmRlZC1vdXRsaW5lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5OS44NDM0IDk5Ljg0MzQiPjxkZWZzPjxzdHlsZT4uZnAtY29sb3ItcGxheXtvcGFjaXR5OjAuNjU7fS5yZWN0e2ZpbGw6I2ZmZjt9PC9zdHlsZT4KPC9kZWZzPjx0aXRsZT5wYXVzZS1yb3VuZGVkLW91dGxpbmU8L3RpdGxlPjxwYXRoIGNsYXNzPSJmcC1jb2xvci1wbGF5IiBkPSJNNDkuOTIxMi0uMDc4M2E1MCw1MCwwLDEsMCw1MC4wMDA2LDUwQTUwLjA1NjIsNTAuMDU2MiwwLDAsMCw0OS45MjEyLS4wNzgzWiIvPjxnIGNsYXNzPSJjb250cm9sYnV0dG9uIj48cGF0aCBjbGFzcz0icmVjdCIgZD0iTTM5LjAwMzYsNzEuOTcyNmE3LjU2NSw3LjU2NSwwLDAsMS03LjU1Ny03LjU1NnYtMjguOTlhNy41NTY1LDcuNTU2NSwwLDAsMSwxNS4xMTMsMHYyOC45OUE3LjU2NDgsNy41NjQ4LDAsMCwxLDM5LjAwMzYsNzEuOTcyNlptMC00MS45MDRhNS4zNjQ3LDUuMzY0NywwLDAsMC01LjM1OTMsNS4zNTgydjI4Ljk5YTUuMzU4Nyw1LjM1ODcsMCwwLDAsMTAuNzE3NCwwdi0yOC45OUE1LjM2NDUsNS4zNjQ1LDAsMCwwLDM5LjAwMzYsMzAuMDY4NloiIGZpbHRlcj0idXJsKCNmMSkiLz48cGF0aCBjbGFzcz0icmVjdCIgZD0iTTYwLjg0LDcxLjk3MjZhNy41NjQ4LDcuNTY0OCwwLDAsMS03LjU1Ni03LjU1NnYtMjguOTlhNy41NTY1LDcuNTU2NSwwLDAsMSwxNS4xMTMsMHYyOC45OUE3LjU2NSw3LjU2NSwwLDAsMSw2MC44NCw3MS45NzI2Wm0wLTQxLjkwNGE1LjM2NDUsNS4zNjQ1LDAsMCwwLTUuMzU4Miw1LjM1ODJ2MjguOTlhNS4zNTg3LDUuMzU4NywwLDAsMCwxMC43MTc0LDB2LTI4Ljk5QTUuMzY0Nyw1LjM2NDcsMCwwLDAsNjAuODQsMzAuMDY4NloiIGZpbHRlcj0idXJsKCNmMSkiLz48L2c+PC9zdmc+Cg==",
                  "base64"
                ),
                g = n(
                  "PHN2ZyBjbGFzcz0iZnAtcGF1c2Utcm91bmRlZC1maWxsIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48c3R5bGU+LmZwLWNvbG9yLXBsYXl7b3BhY2l0eTowLjY1O30ucmVjdHtmaWxsOiNmZmY7fTwvc3R5bGU+CjwvZGVmcz48dGl0bGU+cGF1c2Utcm91bmRlZC1maWxsPC90aXRsZT48cGF0aCBjbGFzcz0iZnAtY29sb3ItcGxheSIgZD0iTTQ5LjkyMTctLjA3OGE1MCw1MCwwLDEsMCw1MCw1MEE1MC4wNTY0LDUwLjA1NjQsMCwwLDAsNDkuOTIxNy0uMDc4WiIvPjxnIGNsYXNzPSJjb250cm9sYnV0dG9uIiBmaWx0ZXI9InVybCgjZjEpIj48cmVjdCBjbGFzcz0icmVjdCIgeD0iMzEuODQ0IiB5PSIyOC4xMjMxIiB3aWR0aD0iMTMuNDM2MiIgaGVpZ2h0PSI0My41OTczIiByeD0iNi43MTgxIiByeT0iNi43MTgxIi8+PHJlY3QgY2xhc3M9InJlY3QiIHg9IjU0LjU2MzgiIHk9IjI4LjEyMzEiIHdpZHRoPSIxMy40MzYyIiBoZWlnaHQ9IjQzLjU5NzMiIHJ4PSI2LjcxODEiIHJ5PSI2LjcxODEiLz48L2c+PC9zdmc+Cg==",
                  "base64"
                ),
                m = n(
                  "PHN2ZyBjbGFzcz0iZnAtcGF1c2Utc2hhcnAtZmlsbCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PGRlZnM+PHN0eWxlPi5mcC1jb2xvci1wbGF5e29wYWNpdHk6MC42NTt9LnJlY3R7ZmlsbDojZmZmO308L3N0eWxlPgo8L2RlZnM+PHRpdGxlPnBhdXNlLXNoYXJwLWZpbGw8L3RpdGxlPjxwYXRoIGNsYXNzPSJmcC1jb2xvci1wbGF5IiBkPSJNNDkuOTIxNy0uMDc4YTUwLDUwLDAsMSwwLDUwLDUwQTUwLjA1NjQsNTAuMDU2NCwwLDAsMCw0OS45MjE3LS4wNzhaIi8+PGcgY2xhc3M9ImNvbnRyb2xidXR0b24iIGZpbHRlcj0idXJsKCNmMSkiPjxyZWN0IGNsYXNzPSJyZWN0IiB4PSIzMy41IiB5PSIzMC4xMDQyIiB3aWR0aD0iMTIuMjYzNCIgaGVpZ2h0PSIzOS43OTE3Ii8+PHJlY3QgY2xhc3M9InJlY3QiIHg9IjU0LjIzNjYiIHk9IjMwLjEwNDIiIHdpZHRoPSIxMi4yNjM0IiBoZWlnaHQ9IjM5Ljc5MTciLz48L2c+PC9zdmc+Cg==",
                  "base64"
                ),
                v = n(
                  "PHN2ZyBjbGFzcz0iZnAtcGF1c2Utc2hhcnAtb3V0bGluZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgOTkuODQzNCA5OS44NDM0Ij48ZGVmcz48c3R5bGU+LmZwLWNvbG9yLXBsYXl7b3BhY2l0eTowLjY1O30ucmVjdHtmaWxsOiNmZmY7fTwvc3R5bGU+CjwvZGVmcz48dGl0bGU+cGF1c2Utc2hhcnAtb3V0bGluZTwvdGl0bGU+PHBhdGggY2xhc3M9ImZwLWNvbG9yLXBsYXkiIGQ9Ik00OS45MjEyLS4wNzgzYTUwLDUwLDAsMSwwLDUwLjAwMDYsNTBBNTAuMDU2Miw1MC4wNTYyLDAsMCwwLDQ5LjkyMTItLjA3ODNaIi8+PGcgY2xhc3M9ImNvbnRyb2xidXR0b24iIGZpbHRlcj0idXJsKCNmMSkiPjxwYXRoIGNsYXNzPSJyZWN0IiBkPSJNNDYuODcwOSw2OS45NTMxSDMzLjEzODVWMjkuODlINDYuODcwOVpNMzUuMTQxNiw2Ny45NWg5LjcyNjJWMzEuODkzNUgzNS4xNDE2WiIvPjxwYXRoIGNsYXNzPSJyZWN0IiBkPSJNNjYuNzA0Nyw2OS45NTMxSDUyLjk3MjJWMjkuODlINjYuNzA0N1pNNTQuOTc1NCw2Ny45NWg5LjcyNjJWMzEuODkzNUg1NC45NzU0WiIvPjwvZz48L3N2Zz4K",
                  "base64"
                ),
                y = n(
                  "PHN2ZyBjbGFzcz0iZnAtbG9hZGluZy1yb3VuZGVkLW91dGxpbmUiIHdpZHRoPScxMTJweCcgaGVpZ2h0PScxMTJweCcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgogICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijc2IiBoZWlnaHQ9Ijc2IiBmaWxsPSJyZ2JhKDAsMCwwLDApIiBjbGFzcz0iYmsiPjwvcmVjdD4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUgMjUpIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMCwwLDAsLjUpIiBzdHJva2Utd2lkdGg9IjMlIiBjbGFzcz0ic3EiPgogICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2UiIGZyb209InJnYmEoMCwwLDAsMCkiIHRvPSJyZ2JhKDAsMCwwLC41KSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS42cyIgYmVnaW49IjAuMHMiIHZhbHVlcz0icmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsLjUpIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGU+CiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGFkZGl0aXZlPSJzdW0iIGZyb209IjAuOCIgdG89IjEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC4wcyIgZHVyPSIxLjZzIiB2YWx1ZXM9IjE7MC44OzAuODsxOzEiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KICAgIDwvY2lyY2xlPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCAyNSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwuNSkiIHN0cm9rZS13aWR0aD0iMyUiIGNsYXNzPSJzcSI+CiAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZSIgZnJvbT0icmdiYSgwLDAsMCwwKSIgdG89InJnYmEoMCwwLDAsLjUpIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjZzIiBiZWdpbj0iMC40cyIgdmFsdWVzPSJyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwuNSkiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZT4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgYWRkaXRpdmU9InN1bSIgZnJvbT0iMC44IiB0bz0iMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjRzIiBkdXI9IjEuNnMiIHZhbHVlcz0iMTswLjg7MC44OzE7MSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgogICAgPC9jaXJjbGU+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDUwKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsMCwwLC41KSIgc3Ryb2tlLXdpZHRoPSIzJSIgY2xhc3M9InNxIj4KICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ic3Ryb2tlIiBmcm9tPSJyZ2JhKDAsMCwwLDApIiB0bz0icmdiYSgwLDAsMCwuNSkiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuNnMiIGJlZ2luPSIwLjhzIiB2YWx1ZXM9InJnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLC41KSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlPgogICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBhZGRpdGl2ZT0ic3VtIiBmcm9tPSIwLjgiIHRvPSIxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuOHMiIGR1cj0iMS42cyIgdmFsdWVzPSIxOzAuODswLjg7MTsxIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGVUcmFuc2Zvcm0+CiAgICA8L2NpcmNsZT4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUgNTApIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMCwwLDAsLjUpIiBzdHJva2Utd2lkdGg9IjMlIiBjbGFzcz0ic3EiPgogICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2UiIGZyb209InJnYmEoMCwwLDAsMCkiIHRvPSJyZ2JhKDAsMCwwLC41KSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS42cyIgYmVnaW49IjEuMnMiIHZhbHVlcz0icmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsLjUpIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGU+CiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGFkZGl0aXZlPSJzdW0iIGZyb209IjAuOCIgdG89IjEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMS4ycyIgZHVyPSIxLjZzIiB2YWx1ZXM9IjE7MC44OzAuODsxOzEiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KICAgIDwvY2lyY2xlPgo8L3N2Zz4K",
                  "base64"
                ),
                w = n(
                  "PHN2ZyBjbGFzcz0iZnAtbG9hZGluZy1yb3VuZGVkLWZpbGwiIHdpZHRoPScxMTJweCcgaGVpZ2h0PScxMTJweCcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgogICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijc2IiBoZWlnaHQ9Ijc2IiBmaWxsPSJyZ2JhKDAsMCwwLDApIiBjbGFzcz0iYmsiPjwvcmVjdD4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUgMjUpIiBmaWxsPSJyZ2JhKDAsMCwwLC41KSIgY2xhc3M9InNxIj4KICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZmlsbCIgZnJvbT0icmdiYSgwLDAsMCwwKSIgdG89InJnYmEoMCwwLDAsLjUpIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjZzIiBiZWdpbj0iMC4wcyIgdmFsdWVzPSJyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwuNSkiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZT4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgYWRkaXRpdmU9InN1bSIgZnJvbT0iMC44IiB0bz0iMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjBzIiBkdXI9IjEuNnMiIHZhbHVlcz0iMTswLjg7MC44OzE7MSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgogICAgPC9jaXJjbGU+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDI1KSIgZmlsbD0icmdiYSgwLDAsMCwuNSkiIGNsYXNzPSJzcSI+CiAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImZpbGwiIGZyb209InJnYmEoMCwwLDAsMCkiIHRvPSJyZ2JhKDAsMCwwLC41KSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS42cyIgYmVnaW49IjAuNHMiIHZhbHVlcz0icmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsLjUpIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGU+CiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGFkZGl0aXZlPSJzdW0iIGZyb209IjAuOCIgdG89IjEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC40cyIgZHVyPSIxLjZzIiB2YWx1ZXM9IjE7MC44OzAuODsxOzEiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KICAgIDwvY2lyY2xlPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCA1MCkiIGZpbGw9InJnYmEoMCwwLDAsLjUpIiBjbGFzcz0ic3EiPgogICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJmaWxsIiBmcm9tPSJyZ2JhKDAsMCwwLDApIiB0bz0icmdiYSgwLDAsMCwuNSkiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuNnMiIGJlZ2luPSIwLjhzIiB2YWx1ZXM9InJnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLC41KSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlPgogICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBhZGRpdGl2ZT0ic3VtIiBmcm9tPSIwLjgiIHRvPSIxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuOHMiIGR1cj0iMS42cyIgdmFsdWVzPSIxOzAuODswLjg7MTsxIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGVUcmFuc2Zvcm0+CiAgICA8L2NpcmNsZT4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUgNTApIiBmaWxsPSJyZ2JhKDAsMCwwLC41KSIgY2xhc3M9InNxIj4KICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZmlsbCIgZnJvbT0icmdiYSgwLDAsMCwwKSIgdG89InJnYmEoMCwwLDAsLjUpIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjZzIiBiZWdpbj0iMS4ycyIgdmFsdWVzPSJyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwuNSkiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZT4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgYWRkaXRpdmU9InN1bSIgZnJvbT0iMC44IiB0bz0iMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIxLjJzIiBkdXI9IjEuNnMiIHZhbHVlcz0iMTswLjg7MC44OzE7MSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgogICAgPC9jaXJjbGU+Cjwvc3ZnPgo=",
                  "base64"
                ),
                b = n(
                  "PHN2ZyBjbGFzcz0iZnAtbG9hZGluZy1zaGFycC1maWxsIiB3aWR0aD0nMTEycHgnIGhlaWdodD0nMTEycHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNzYiIGhlaWdodD0iNzYiIGZpbGw9InJnYmEoMCwwLDAsMCkiIGNsYXNzPSJiayI+PC9yZWN0PgogIDxyZWN0IHg9Ii0xMCIgeT0iLTEwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1IDI1KSIgZmlsbD0icmdiYSgwLDAsMCwuNSkiIGNsYXNzPSJzcSI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJmaWxsIiBmcm9tPSJyZ2JhKDAsMCwwLDApIiB0bz0icmdiYSgwLDAsMCwuNSkiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuNnMiIGJlZ2luPSIwLjBzIiB2YWx1ZXM9InJnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLC41KSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlPgogICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgYWRkaXRpdmU9InN1bSIgZnJvbT0iMC44IiB0bz0iMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjBzIiBkdXI9IjEuNnMiIHZhbHVlcz0iMTswLjg7MC44OzE7MSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgogIDwvcmVjdD4KICA8cmVjdCB4PSItMTAiIHk9Ii0xMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCAyNSkiIGZpbGw9InJnYmEoMCwwLDAsLjUpIiBjbGFzcz0ic3EiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZmlsbCIgZnJvbT0icmdiYSgwLDAsMCwwKSIgdG89InJnYmEoMCwwLDAsLjUpIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjZzIiBiZWdpbj0iMC40cyIgdmFsdWVzPSJyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwuNSkiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZT4KICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGFkZGl0aXZlPSJzdW0iIGZyb209IjAuOCIgdG89IjEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC40cyIgZHVyPSIxLjZzIiB2YWx1ZXM9IjE7MC44OzAuODsxOzEiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KICA8L3JlY3Q+CiAgPHJlY3QgeD0iLTEwIiB5PSItMTAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAgNTApIiBmaWxsPSJyZ2JhKDAsMCwwLC41KSIgY2xhc3M9InNxIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImZpbGwiIGZyb209InJnYmEoMCwwLDAsMCkiIHRvPSJyZ2JhKDAsMCwwLC41KSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS42cyIgYmVnaW49IjAuOHMiIHZhbHVlcz0icmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsLjUpIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGU+CiAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBhZGRpdGl2ZT0ic3VtIiBmcm9tPSIwLjgiIHRvPSIxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuOHMiIGR1cj0iMS42cyIgdmFsdWVzPSIxOzAuODswLjg7MTsxIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGVUcmFuc2Zvcm0+CiAgPC9yZWN0PgogIDxyZWN0IHg9Ii0xMCIgeT0iLTEwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1IDUwKSIgZmlsbD0icmdiYSgwLDAsMCwuNSkiIGNsYXNzPSJzcSI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJmaWxsIiBmcm9tPSJyZ2JhKDAsMCwwLDApIiB0bz0icmdiYSgwLDAsMCwuNSkiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuNnMiIGJlZ2luPSIxLjJzIiB2YWx1ZXM9InJnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLC41KSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlPgogICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgYWRkaXRpdmU9InN1bSIgZnJvbT0iMC44IiB0bz0iMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIxLjJzIiBkdXI9IjEuNnMiIHZhbHVlcz0iMTswLjg7MC44OzE7MSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgogIDwvcmVjdD4KPC9zdmc+Cg==",
                  "base64"
                ),
                I = n(
                  "PHN2ZyBjbGFzcz0iZnAtbG9hZGluZy1zaGFycC1vdXRsaW5lIiB3aWR0aD0nMTEycHgnIGhlaWdodD0nMTEycHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNzYiIGhlaWdodD0iNzYiIGZpbGw9InJnYmEoMCwwLDAsMCkiIGNsYXNzPSJiayI+PC9yZWN0PgogIDxyZWN0IHg9Ii05IiB5PSItOSIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNSAyNSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwuNSkiIHN0cm9rZS13aWR0aD0iMyUiIGNsYXNzPSJzcSI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2UiIGZyb209InJnYmEoMCwwLDAsMCkiIHRvPSJyZ2JhKDAsMCwwLC41KSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS42cyIgYmVnaW49IjAuMHMiIHZhbHVlcz0icmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsLjUpIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGU+CiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGFkZGl0aXZlPSJzdW0iIGZyb209IjAuOCIgdG89IjEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC4wcyIgZHVyPSIxLjZzIiB2YWx1ZXM9IjE7MC44OzAuODsxOzEiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KICA8L3JlY3Q+CiAgPHJlY3QgeD0iLTkiIHk9Ii05IiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDI1KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsMCwwLC41KSIgc3Ryb2tlLXdpZHRoPSIzJSIgY2xhc3M9InNxIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZSIgZnJvbT0icmdiYSgwLDAsMCwwKSIgdG89InJnYmEoMCwwLDAsLjUpIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjZzIiBiZWdpbj0iMC40cyIgdmFsdWVzPSJyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwuNSkiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZT4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgYWRkaXRpdmU9InN1bSIgZnJvbT0iMC44IiB0bz0iMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjRzIiBkdXI9IjEuNnMiIHZhbHVlcz0iMTswLjg7MC44OzE7MSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgogIDwvcmVjdD4KICA8cmVjdCB4PSItOSIgeT0iLTkiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAgNTApIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMCwwLDAsLjUpIiBzdHJva2Utd2lkdGg9IjMlIiBjbGFzcz0ic3EiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ic3Ryb2tlIiBmcm9tPSJyZ2JhKDAsMCwwLDApIiB0bz0icmdiYSgwLDAsMCwuNSkiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuNnMiIGJlZ2luPSIwLjhzIiB2YWx1ZXM9InJnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLC41KSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlPgogICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBhZGRpdGl2ZT0ic3VtIiBmcm9tPSIwLjgiIHRvPSIxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuOHMiIGR1cj0iMS42cyIgdmFsdWVzPSIxOzAuODswLjg7MTsxIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGVUcmFuc2Zvcm0+CiAgPC9yZWN0PgogIDxyZWN0IHg9Ii05IiB5PSItOSIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNSA1MCkiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwuNSkiIHN0cm9rZS13aWR0aD0iMyUiIGNsYXNzPSJzcSI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2UiIGZyb209InJnYmEoMCwwLDAsMCkiIHRvPSJyZ2JhKDAsMCwwLC41KSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS42cyIgYmVnaW49IjEuMnMiIHZhbHVlcz0icmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsLjUpIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGU+CiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGFkZGl0aXZlPSJzdW0iIGZyb209IjAuOCIgdG89IjEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMS4ycyIgZHVyPSIxLjZzIiB2YWx1ZXM9IjE7MC44OzAuODsxOzEiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KICA8L3JlY3Q+Cjwvc3ZnPgo=",
                  "base64"
                );
              o(function (e, t) {
                function i(e) {
                  return a.find(".fp-" + e, t)[0];
                }
                function M(e) {
                  a.css(T, "padding-top", 100 * e + "%"),
                    N.inlineBlock ||
                      a.height(a.find("object", t)[0], a.height(t));
                }
                function C(e) {
                  e
                    ? (a.addClass(t, "is-mouseover"),
                      a.removeClass(t, "is-mouseout"))
                    : (a.addClass(t, "is-mouseout"),
                      a.removeClass(t, "is-mouseover"));
                }
                a.find(".fp-filters").forEach(a.removeNode);
                try {
                  var A;
                  document.body.appendChild(
                    (A = a.createElement(
                      "div",
                      {},
                      n(
                        "PHN2ZyBjbGFzcz0iZnAtZmlsdGVycyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMCAwIj4KICA8ZGVmcz4KICAgIDxmaWx0ZXIgaWQ9ImYxIiB4PSItMjAlIiB5PSItMjAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAlIj4KICAgICAgPGZlT2Zmc2V0IHJlc3VsdD0ib2ZmT3V0IiBpbj0iU291cmNlQWxwaGEiIGR4PSIwIiBkeT0iMCIgLz4KICAgICAgPGZlQ29sb3JNYXRyaXggcmVzdWx0PSJtYXRyaXhPdXQiIGluPSJvZmZPdXQiIHR5cGU9Im1hdHJpeCIKICAgICAgdmFsdWVzPSIwLjMgMCAwIDAgMCAwIDAuMyAwIDAgMCAwIDAgMC4zIDAgMCAwIDAgMCAwLjQgMCIgLz4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHJlc3VsdD0iYmx1ck91dCIgaW49Im1hdHJpeE91dCIgc3RkRGV2aWF0aW9uPSI0IiAvPgogICAgICA8ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJibHVyT3V0IiBtb2RlPSJub3JtYWwiIC8+CiAgICA8L2ZpbHRlcj4KICA8L2RlZnM+Cjwvc3ZnPgo=",
                        "base64"
                      )
                    ))
                  ),
                    a.css(A, {
                      width: 0,
                      height: 0,
                      overflow: "hidden",
                      position: "absolute",
                      margin: 0,
                      padding: 0,
                    });
                } catch (S) {}
                var E,
                  D = e.conf,
                  N = o.support;
                a.find(".fp-ratio,.fp-ui", t).forEach(a.removeNode),
                  a.addClass(t, "flowplayer"),
                  t.appendChild(
                    a.createElement("div", { className: "fp-ratio" })
                  );
                var j = a.createElement(
                  "div",
                  { className: "fp-ui" },
                  '         <div class="fp-waiting">           {{ LOADING_SHARP_OUTLINE }}           {{ LOADING_SHARP_FILL }}           {{ LOADING_ROUNDED_FILL }}           {{ LOADING_ROUNDED_OUTLINE }}         </div>         <div class="fp-header">           <a class="fp-share fp-icon"></a>           <a class="fp-fullscreen fp-icon"></a>           <a class="fp-unload fp-icon"></a>         </div>         <p class="fp-speed-flash"></p>         <div class="fp-play fp-visible">           <a class="fp-icon fp-playbtn"></a>           {{ PLAY_ROUNDED_FILL }}           {{ PLAY_ROUNDED_OUTLINE }}           {{ PLAY_SHARP_FILL }}           {{ PLAY_SHARP_OUTLINE }}         </div>         <div class="fp-pause">           <a class="fp-icon fp-playbtn"></a>           {{ PAUSE_SHARP_OUTLINE }}           {{ PAUSE_SHARP_FILL }}           {{ PAUSE_ROUNDED_OUTLINE }}           {{ PAUSE_ROUNDED_FILL }}         </div>         <div class="fp-controls">            <a class="fp-icon fp-playbtn"></a>            <span class="fp-elapsed">00:00</span>            <div class="fp-timeline fp-bar">               <span class="fp-timestamp"></span>               <div class="fp-progress fp-color"></div>            </div>            <span class="fp-duration"></span>            <span class="fp-remaining"></span>            <div class="fp-volume">               <a class="fp-icon fp-volumebtn"></a>               <div class="fp-volumebar fp-bar-slider">                 <em></em><em></em><em></em><em></em><em></em><em></em><em></em>               </div>            </div>            <strong class="fp-speed fp-hidden"></strong>         </div>'
                    .replace("{{ PAUSE_ROUNDED_FILL }}", g)
                    .replace("{{ PAUSE_ROUNDED_OUTLINE }}", h)
                    .replace("{{ PAUSE_SHARP_FILL }}", m)
                    .replace("{{ PAUSE_SHARP_OUTLINE }}", v)
                    .replace("{{ PLAY_SHARP_OUTLINE }}", p)
                    .replace("{{ PLAY_SHARP_FILL }}", d)
                    .replace("{{ PLAY_ROUNDED_OUTLINE }}", c)
                    .replace("{{ PLAY_ROUNDED_FILL }}", f)
                    .replace("{{ LOADING_ROUNDED_OUTLINE }}", y)
                    .replace("{{ LOADING_ROUNDED_FILL }}", w)
                    .replace("{{ LOADING_SHARP_FILL }}", b)
                    .replace("{{ LOADING_SHARP_OUTLINE }}", I)
                    .replace(
                      /url\(#/g,
                      "url(" +
                        window.location.href
                          .replace(window.location.hash, "")
                          .replace(/\#$/g, "") +
                        "#"
                    )
                );
                t.appendChild(j);
                var L = i("waiting"),
                  x = i("elapsed"),
                  T = i("ratio"),
                  Z = i("speed-flash"),
                  P = i("duration"),
                  k = i("remaining"),
                  Y = i("timestamp"),
                  z = a.css(T, "padding-top"),
                  G = i("play"),
                  O = i("pause"),
                  R = i("timeline"),
                  W = l(R, e.rtl),
                  U = i("fullscreen"),
                  J = i("volumebar"),
                  B = u(J, { rtl: e.rtl }),
                  F = a.hasClass(t, "no-toggle");
                W.disableAnimation(a.hasClass(t, "is-touch")),
                  (e.sliders = e.sliders || {}),
                  (e.sliders.timeline = W),
                  (e.sliders.volume = B);
                var H = [];
                N.svg || a.html(L, "<p>loading &hellip;</p>"),
                  D.ratio && M(D.ratio);
                try {
                  D.fullscreen || a.removeNode(U);
                } catch (S) {
                  a.removeNode(U);
                }
                e.on("dvrwindow", function () {
                  W.disable(!1);
                }),
                  e
                    .on("ready", function (e, n, i) {
                      var o = n.video.duration;
                      W.disable(n.disabled || !o),
                        D.adaptiveRatio &&
                          !isNaN(i.height / i.width) &&
                          M(i.height / i.width, !0),
                        a.html([P, k], n.live ? "Live" : r(o)),
                        a.toggleClass(t, "is-long", o >= 3600),
                        B.slide(n.volumeLevel),
                        "flash" === n.engine.engineName
                          ? W.disableAnimation(!0, !0)
                          : W.disableAnimation(!1),
                        a.find(".fp-title", j).forEach(a.removeNode),
                        i.title &&
                          a.prepend(
                            j,
                            a.createElement(
                              "div",
                              { className: "fp-message fp-title" },
                              i.title
                            )
                          ),
                        a.toggleClass(t, "has-title", !!i.title);
                    })
                    .on("unload", function () {
                      z || D.splash || a.css(T, "paddingTop", ""),
                        W.slide(0),
                        a.addClass(G, "fp-visible");
                    })
                    .on("buffer", function (e, t, n) {
                      var i = t.video,
                        r = i.buffer / i.duration;
                      !i.seekable &&
                        N.seekable &&
                        W.max(t.conf.live ? 1 / 0 : r),
                        (n && "number" != typeof n) ||
                          (n = [{ start: 0, end: i.buffer }]);
                      var o = a.find(".fp-buffer", R);
                      o.length !== n.length &&
                        (o.forEach(a.removeNode), (o = [])),
                        n.forEach(function (e, t) {
                          var n =
                            o[t] ||
                            a.createElement("div", { className: "fp-buffer" });
                          a.css(n, {
                            left: (100 * e.start) / i.duration + "%",
                            width: (100 * (e.end - e.start)) / i.duration + "%",
                          }),
                            a.prepend(R, n);
                        });
                    })
                    .on("speed", function (e, t, n) {
                      t.video.time &&
                        (a.text(Z, n + "x"),
                        a.addClass(Z, "fp-shown"),
                        (H = H.filter(function (e) {
                          return clearTimeout(e), !1;
                        })),
                        H.push(
                          setTimeout(function () {
                            a.addClass(Z, "fp-hilite"),
                              H.push(
                                setTimeout(function () {
                                  a.removeClass(Z, "fp-hilite"),
                                    H.push(
                                      setTimeout(function () {
                                        a.removeClass(Z, "fp-shown");
                                      }, 300)
                                    );
                                }, 1e3)
                              );
                          })
                        ));
                    })
                    .on("buffered", function () {
                      W.max(1);
                    })
                    .on("progress seek", function (n, i, o) {
                      var s = e.video.duration,
                        l = e.video.seekOffset || 0;
                      o = o || e.video.time;
                      var u = (o - l) / (s - l);
                      W.dragging || W.slide(u, e.seeking ? 0 : 250),
                        a.toggleClass(
                          t,
                          "is-live-position",
                          s - o < D.livePositionOffset
                        ),
                        a.html(x, r(o)),
                        a.html(k, r(s - o, !0));
                    })
                    .on("finish resume seek", function (e) {
                      a.toggleClass(t, "is-finished", "finish" == e.type);
                    })
                    .on("resume", function () {
                      a.addClass(G, "fp-visible"),
                        setTimeout(function () {
                          a.removeClass(G, "fp-visible");
                        }, 300);
                    })
                    .on("pause", function () {
                      a.addClass(O, "fp-visible"),
                        setTimeout(function () {
                          a.removeClass(O, "fp-visible");
                        }, 300);
                    })
                    .on("stop", function () {
                      a.html(x, r(0)), W.slide(0, 100);
                    })
                    .on("finish", function () {
                      a.html(x, r(e.video.duration)),
                        W.slide(1, 100),
                        a.removeClass(t, "is-seeking");
                    })
                    .on("beforeseek", function () {})
                    .on("volume", function () {
                      B.slide(e.volumeLevel);
                    })
                    .on("disable", function () {
                      var n = e.disabled;
                      W.disable(n),
                        B.disable(n),
                        a.toggleClass(t, "is-disabled", e.disabled);
                    })
                    .on("mute", function (e, n, i) {
                      a.toggleClass(t, "is-muted", i);
                    })
                    .on("error", function (e, n, i) {
                      if (
                        (a.removeClass(t, "is-loading"),
                        a.removeClass(t, "is-seeking"),
                        a.addClass(t, "is-error"),
                        i)
                      ) {
                        n.error = !0;
                        var r = i.code;
                        (i.message || "").match(
                          /DECODER_ERROR_NOT_SUPPORTED/
                        ) && (r = 3);
                        var o = n.message(
                          ((n.engine && n.engine.engineName) || "html5") +
                            ": " +
                            D.errors[r]
                        );
                        a.removeClass(t, "is-mouseover"),
                          n.one("load progress", function () {
                            o();
                          });
                      }
                    })
                    .one("resume ready", function () {
                      var e = a.find("video.fp-engine", t)[0];
                      if (e && (!a.width(e) || !a.height(e))) {
                        var n = t.style.overflow;
                        (t.style.overflow = "visible"),
                          setTimeout(function () {
                            n
                              ? (t.style.overflow = n)
                              : t.style.removeProperty("overflow");
                          });
                      }
                    }),
                  s.on(t, "mouseenter mouseleave", function (n) {
                    if (!F) {
                      var i,
                        r = "mouseover" == n.type;
                      if ((C(r), r)) {
                        var o = function () {
                          C(!0), (i = new Date());
                        };
                        e.on("pause.x volume.x", o),
                          s.on(t, "mousemove.x", o),
                          (E = setInterval(function () {
                            new Date() - i > D.mouseoutTimeout &&
                              (C(!1), (i = new Date()));
                          }, 100));
                      } else
                        s.off(t, "mousemove.x"),
                          e.off("pause.x volume.x"),
                          clearInterval(E);
                    }
                  }),
                  s.on(t, "mouseleave", function () {
                    (W.dragging || B.dragging) &&
                      (a.addClass(t, "is-mouseover"),
                      a.removeClass(t, "is-mouseout"));
                  }),
                  s.on(t, "click.player", function (t) {
                    return e.disabled
                      ? void 0
                      : a.hasClass(t.target, "fp-ui") ||
                        a.hasClass(t.target, "fp-engine") ||
                        t.flash ||
                        a.hasParent(t.target, ".fp-play,.fp-pause")
                      ? (t.preventDefault && t.preventDefault(), e.toggle())
                      : void 0;
                  }),
                  s.on(t, "mousemove", ".fp-timeline", function (t) {
                    var n = t.pageX || t.clientX,
                      i = n - a.offset(R).left,
                      o = i / a.width(R),
                      s = e.video,
                      l =
                        s.duration -
                        (void 0 === s.seekOffset ? 0 : s.seekOffset),
                      u = (e.rtl ? 1 - o : o) * l;
                    if (!(0 > o)) {
                      a.html(Y, r(u));
                      var c = i - a.width(Y) / 2;
                      0 > c && (c = 0),
                        c > a.width(R) - a.width(Y) && (c = !1),
                        c !== !1
                          ? a.css(Y, { left: c + "px", right: "auto" })
                          : a.css(Y, { left: "auto", right: "0px" });
                    }
                  }),
                  s.on(t, "contextmenu", function (n) {
                    var i = window;
                    if (!a.hasClass(t, "is-flash-disabled")) {
                      var r = a.find(".fp-context-menu", t)[0];
                      r &&
                        (n.preventDefault(),
                        e.showMenu(r, {
                          left: n.clientX - i.scrollX,
                          top: n.clientY - i.scrollY,
                        }),
                        s.on(t, "click", ".fp-context-menu", function (e) {
                          e.stopPropagation();
                        }));
                    }
                  }),
                  e.on("flashdisabled", function (n, i, r) {
                    a.addClass(t, "is-flash-disabled");
                    var o;
                    r !== !1 &&
                      (o = e.message(
                        "Seems something is blocking Adobe Flash from running"
                      )),
                      e.one("ready progress", function () {
                        a.removeClass(t, "is-flash-disabled"), o && o();
                      });
                  }),
                  D.poster &&
                    a.css(t, "background-image", "url(" + D.poster + ")");
                var V = a.css(t, "background-color"),
                  X =
                    "none" != a.css(t, "background-image") ||
                    (V && "rgba(0, 0, 0, 0)" != V && "transparent" != V);
                if (X && !D.splash) {
                  D.poster || (D.poster = !0);
                  var _ = function () {
                    a.addClass(t, "is-poster"),
                      a.addClass(G, "fp-visible"),
                      (e.poster = !0),
                      e.one(
                        D.autoplay
                          ? "progress beforeseek"
                          : "resume beforeseek",
                        function () {
                          a.removeClass(t, "is-poster"),
                            a.removeClass(G, "fp-visible"),
                            (e.poster = !1);
                        }
                      );
                  };
                  e.on("stop", function () {
                    _();
                  }),
                    e.on("ready", function (e, t, n) {
                      n.index || n.autoplay || _();
                    });
                }
                "string" == typeof D.splash &&
                  a.css(t, "background-image", "url('" + D.splash + "')"),
                  !X && e.forcedSplash && a.css(t, "background-color", "#555"),
                  s.on(
                    t,
                    "click",
                    ".fp-toggle, .fp-play, .fp-playbtn",
                    function () {
                      e.disabled || e.toggle();
                    }
                  ),
                  s.on(t, "click", ".fp-volumebtn", function () {
                    e.mute();
                  }),
                  s.on(t, "click", ".fp-fullscreen", function () {
                    e.fullscreen();
                  }),
                  s.on(t, "click", ".fp-unload", function () {
                    e.unload();
                  }),
                  s.on(R, "slide", function (t) {
                    (e.seeking = !0), e.seekTo(10 * t);
                  }),
                  s.on(J, "slide", function (t) {
                    e.volume(t);
                  }),
                  s.on(t, "click", ".fp-duration,.fp-remaining", function () {
                    return e.dvr
                      ? e.seekTo(10)
                      : void a.toggleClass(t, "is-inverted");
                  }),
                  C(F);
                var K;
                if (
                  (e.on("shutdown", function () {
                    s.off(R), s.off(J), K && window.cancelAnimationFrame(K);
                  }),
                  "function" == typeof window.requestAnimationFrame)
                ) {
                  var Q = function () {
                    var e = a.find(".fp-player", t)[0] || t;
                    a.toggleClass(t, "is-tiny", e.clientWidth < 400),
                      a.toggleClass(
                        t,
                        "is-small",
                        e.clientWidth < 600 && e.clientWidth >= 400
                      ),
                      (K = window.requestAnimationFrame(Q));
                  };
                  K = window.requestAnimationFrame(Q);
                }
              }),
                (t.exports.format = r);
            }.call(this, e("buffer").Buffer));
          },
          {
            "../common": 1,
            "../flowplayer": 31,
            "./ui/bar-slider": 28,
            "./ui/slider": 29,
            bean: 34,
            buffer: 35,
          },
        ],
        28: [
          function (e, t, n) {
            function i(e, t) {
              function n(t) {
                var n = t.pageX || t.clientX,
                  i = o.offset(e),
                  r = o.width(e);
                !n &&
                  t.originalEvent &&
                  t.originalEvent.touches &&
                  t.originalEvent.touches.length &&
                  (n = t.originalEvent.touches[0].pageX);
                var a = n - i.left;
                a = Math.max(0, Math.min(r, a));
                var s = a / r;
                return l && (s = 1 - s), s;
              }
              t = t || {};
              var i = t.activeClass || "fp-color",
                a = t.inactiveClass || "fp-grey",
                s = t.childSelector || "em",
                l = !!t.rtl,
                u = !1,
                c = o.find(s, e).length,
                f = {
                  unload: function () {
                    r.off(e, ".barslider");
                  },
                  slide: function (t, n) {
                    o.find(s, e).forEach(function (e, n) {
                      var r = t > n / c;
                      o.toggleClass(e, i, r), o.toggleClass(e, a, !r);
                    }),
                      n && r.fire(e, "slide", [t]);
                  },
                  disable: function (e) {
                    u = e;
                  },
                };
              return (
                r.on(e, "mousedown.sld touchstart.sld", function (t) {
                  t.preventDefault(),
                    u ||
                      (f.slide(n(t), !0),
                      r.on(e, "mousemove.sld touchmove.sld", function (e) {
                        e.preventDefault(), f.slide(n(e), !0);
                      }),
                      r.one(document, "mouseup.sld touchup.sld", function () {
                        r.off(e, "mousemove.sld touchmove.sld");
                      }));
                }),
                f
              );
            }
            var r = e("bean"),
              o = e("../../common");
            t.exports = i;
          },
          { "../../common": 1, bean: 34 },
        ],
        29: [
          function (e, t, n) {
            "use strict";
            var i = e("bean"),
              r = e("../../common"),
              o = function (e, t) {
                var n;
                return function () {
                  n ||
                    (e.apply(this, arguments),
                    (n = 1),
                    setTimeout(function () {
                      n = 0;
                    }, t));
                };
              },
              a = function (e, t) {
                var n,
                  a,
                  s,
                  l,
                  u,
                  c,
                  f,
                  d,
                  p = r.lastChild(e),
                  h = !1,
                  g = function () {
                    (a = r.offset(e)),
                      (s = r.width(e)),
                      (l = r.height(e)),
                      (c = u ? l : s),
                      (d = w(f));
                  },
                  m = function (t) {
                    n ||
                      t == b.value ||
                      (f && !(f > t)) ||
                      (i.fire(e, "slide", [t]), (b.value = t));
                  },
                  v = function (e) {
                    var n = e.pageX || e.clientX;
                    !n &&
                      e.originalEvent &&
                      e.originalEvent.touches &&
                      e.originalEvent.touches.length &&
                      (n = e.originalEvent.touches[0].pageX);
                    var i = u ? e.pageY - a.top : n - a.left;
                    i = Math.max(0, Math.min(d || c, i));
                    var r = i / c;
                    return u && (r = 1 - r), t && (r = 1 - r), y(r, 0, !0);
                  },
                  y = function (e, t) {
                    void 0 === t && (t = 0), e > 1 && (e = 1);
                    var n = Math.round(1e3 * e) / 10 + "%";
                    return (
                      (!f || f >= e) &&
                        (h
                          ? r.removeClass(p, "animated")
                          : (r.addClass(p, "animated"),
                            r.css(p, "transition-duration", (t || 0) + "ms")),
                        r.css(p, "width", n)),
                      e
                    );
                  },
                  w = function (e) {
                    return Math.max(0, Math.min(c, u ? (1 - e) * l : e * s));
                  },
                  b = {
                    max: function (e) {
                      f = e;
                    },
                    disable: function (e) {
                      n = e;
                    },
                    slide: function (e, t, n) {
                      g(), n && m(e), y(e, t);
                    },
                    disableAnimation: function (t, n) {
                      (h = t !== !1), r.toggleClass(e, "no-animation", !!n);
                    },
                  };
                return (
                  g(),
                  i.on(e, "mousedown.sld touchstart", function (t) {
                    if ((t.preventDefault(), !n)) {
                      var a = o(m, 100);
                      g(),
                        (b.dragging = !0),
                        r.addClass(e, "is-dragging"),
                        m(v(t)),
                        i.on(document, "mousemove.sld touchmove.sld", function (
                          e
                        ) {
                          e.preventDefault(), a(v(e));
                        }),
                        i.one(document, "mouseup touchend", function () {
                          (b.dragging = !1),
                            r.removeClass(e, "is-dragging"),
                            i.off(document, "mousemove.sld touchmove.sld");
                        });
                    }
                  }),
                  b
                );
              };
            t.exports = a;
          },
          { "../../common": 1, bean: 34 },
        ],
        30: [
          function (e, t, n) {
            function i(e) {
              var t = document.createElement("textarea");
              (t.value = e),
                (t.style.opacity = 0),
                (t.style.position = "absolute"),
                document.body.appendChild(t),
                t.select();
              var n = document.execCommand("copy");
              if ((document.body.removeChild(t), !n))
                throw new Error("Unsuccessfull");
            }
            t.exports = function (e, t, n) {
              try {
                i(e), t();
              } catch (r) {
                n(r);
              }
            };
          },
          {},
        ],
        31: [
          function (e, t, n) {
            "use strict";
            function i(e, t, n) {
              t && t.embed && (t.embed = r({}, w.defaults.embed, t.embed));
              var i,
                s,
                l = e,
                p = r({}, w.defaults, w.conf, t),
                g = {},
                m = new I();
              u.addClass(l, "is-loading"),
                u.toggleClass(l, "no-flex", !w.support.flex),
                u.toggleClass(l, "no-svg", !w.support.svg);
              try {
                g = h ? window.localStorage : g;
              } catch (v) {}
              if (p.aspectRatio && "string" == typeof p.aspectRatio) {
                var y = p.aspectRatio.split(/[:\/]/);
                p.ratio = y[1] / y[0];
              }
              var M =
                (l.currentStyle && "rtl" === l.currentStyle.direction) ||
                (window.getComputedStyle &&
                  null !== window.getComputedStyle(l, null) &&
                  "rtl" ===
                    window
                      .getComputedStyle(l, null)
                      .getPropertyValue("direction"));
              M && u.addClass(l, "is-rtl");
              var C = {
                conf: p,
                currentSpeed: 1,
                volumeLevel: p.muted
                  ? 0
                  : "undefined" == typeof p.volume
                  ? 1 * g.volume
                  : p.volume,
                video: {},
                disabled: !1,
                finished: !1,
                loading: !1,
                muted: "true" == g.muted || p.muted,
                paused: !1,
                playing: !1,
                ready: !1,
                splash: !1,
                rtl: M,
                hijack: function (e) {
                  try {
                    C.engine.suspendEngine();
                  } catch (t) {}
                  C.hijacked = e;
                },
                release: function () {
                  try {
                    C.engine.resumeEngine();
                  } catch (e) {}
                  C.hijacked = !1;
                },
                debug: function () {
                  p.debug &&
                    console.log.apply(
                      console,
                      ["DEBUG"].concat([].slice.call(arguments))
                    );
                },
                load: function (e, t) {
                  if (!C.error && !C.loading) {
                    (C.video = {}),
                      (C.finished = !1),
                      (e = e || p.clip),
                      (e = r({}, m.resolve(e, p.clip.sources))),
                      (C.playing || C.engine) && (e.autoplay = !0);
                    var n = A(e);
                    if (!n)
                      return (
                        setTimeout(function () {
                          C.trigger("error", [
                            C,
                            { code: w.support.flashVideo ? 5 : 10 },
                          ]);
                        }) && C
                      );
                    if (!n.engineName)
                      throw new Error(
                        "engineName property of factory should be exposed"
                      );
                    if (
                      ((C.engine && n.engineName === C.engine.engineName) ||
                        ((C.ready = !1),
                        C.engine && (C.engine.unload(), (C.conf.autoplay = !0)),
                        (s = C.engine = n(C, l)),
                        C.one("ready", function () {
                          setTimeout(function () {
                            C.muted ? C.mute(!0, !0) : s.volume(C.volumeLevel);
                          });
                        })),
                      r(
                        e,
                        s.pick(
                          e.sources.filter(function (e) {
                            return e.engine ? e.engine === s.engineName : !0;
                          })
                        )
                      ),
                      e.src)
                    ) {
                      var i = C.trigger("load", [C, e, s], !0);
                      i.defaultPrevented
                        ? (C.loading = !1)
                        : ((C.ready = !1),
                          s.load(e),
                          o(e) && (t = e),
                          t && C.one("ready", t));
                    }
                    return C;
                  }
                },
                pause: function (e) {
                  return C.hijacked
                    ? C.hijacked.pause(e) | C
                    : (!C.ready ||
                        C.seeking ||
                        C.loading ||
                        (s.pause(), C.one("pause", e)),
                      C);
                },
                resume: function () {
                  var e = C.trigger("beforeresume", [C], !0);
                  if (!e.defaultPrevented)
                    return C.hijacked
                      ? C.hijacked.resume() | C
                      : (C.ready &&
                          C.paused &&
                          (s.resume(),
                          C.finished &&
                            (C.trigger("resume", [C]), (C.finished = !1))),
                        C);
                },
                toggle: function () {
                  return C.ready
                    ? C.paused
                      ? C.resume()
                      : C.pause()
                    : C.load();
                },
                seek: function (e, t) {
                  if ("boolean" == typeof e) {
                    var n = 0.1 * C.video.duration;
                    (e = C.video.time + (e ? n : -n)),
                      (e = Math.min(Math.max(e, 0), C.video.duration - 0.1));
                  }
                  if ("undefined" == typeof e) return C;
                  if (C.hijacked) return C.hijacked.seek(e, t) | C;
                  if (C.ready) {
                    i = e;
                    var r = C.trigger("beforeseek", [C, e], !0);
                    r.defaultPrevented
                      ? ((C.seeking = !1),
                        u.toggleClass(l, "is-seeking", C.seeking))
                      : (s.seek(e), o(t) && C.one("seek", t));
                  }
                  return C;
                },
                seekTo: function (e, t) {
                  return void 0 === e
                    ? C.seek(i, t)
                    : void 0 !== C.video.seekOffset
                    ? C.seek(
                        C.video.seekOffset +
                          0.1 * (C.video.duration - C.video.seekOffset) * e,
                        t
                      )
                    : C.seek(0.1 * C.video.duration * e, t);
                },
                mute: function (e, t) {
                  return (
                    void 0 === e && (e = !C.muted),
                    t ||
                      ((g.muted = C.muted = e),
                      (g.volume = isNaN(g.volume) ? p.volume : g.volume)),
                    "undefined" != typeof s.mute
                      ? s.mute(e)
                      : (C.volume(e ? 0 : g.volume, !0),
                        C.trigger("mute", [C, e])),
                    C
                  );
                },
                volume: function (e, t) {
                  return (
                    C.ready &&
                      ((e = Math.min(Math.max(e, 0), 1)),
                      t || (g.volume = e),
                      s.volume(e)),
                    C
                  );
                },
                speed: function (e, t) {
                  return (
                    C.ready &&
                      ("boolean" == typeof e &&
                        (e =
                          p.speeds[
                            p.speeds.indexOf(C.currentSpeed) + (e ? 1 : -1)
                          ] || C.currentSpeed),
                      s.speed(e),
                      t && l.one("speed", t)),
                    C
                  );
                },
                stop: function () {
                  return (
                    C.ready &&
                      (C.pause(),
                      !C.live || C.dvr
                        ? C.seek(0, function () {
                            C.trigger("stop", [C]);
                          })
                        : C.trigger("stop", [C])),
                    C
                  );
                },
                unload: function () {
                  return (
                    p.splash
                      ? (C.trigger("unload", [C]),
                        s && (s.unload(), (C.engine = s = 0)))
                      : C.stop(),
                    C
                  );
                },
                shutdown: function () {
                  C.unload(),
                    C.trigger("shutdown", [C]),
                    a.off(l),
                    delete f[l.getAttribute("data-flowplayer-instance-id")],
                    l.removeAttribute("data-flowplayer-instance-id");
                },
                disable: function (e) {
                  return (
                    void 0 === e && (e = !C.disabled),
                    e != C.disabled &&
                      ((C.disabled = e), C.trigger("disable", e)),
                    C
                  );
                },
                registerExtension: function (e, t) {
                  (e = e || []),
                    (t = t || []),
                    "string" == typeof e && (e = [e]),
                    "string" == typeof t && (t = [t]),
                    e.forEach(function (e) {
                      C.extensions.js.push(e);
                    }),
                    t.forEach(function (e) {
                      C.extensions.css.push(e);
                    });
                },
              };
              (C.conf = r(C.conf, p)),
                (C.extensions = { js: [], css: [] }),
                w.extensions.forEach(function (e) {
                  C.registerExtension(e[0], e[1]);
                }),
                c(C);
              var A = function (e) {
                var t,
                  n = w.engines;
                if (p.engine) {
                  var i = n.filter(function (e) {
                    return e.engineName === p.engine;
                  })[0];
                  if (
                    i &&
                    e.sources.some(function (e) {
                      return e.engine && e.engine !== i.engineName
                        ? !1
                        : i.canPlay(e.type, C.conf);
                    })
                  )
                    return i;
                }
                return (
                  p.enginePreference &&
                    (n = w.engines
                      .filter(function (e) {
                        return p.enginePreference.indexOf(e.engineName) > -1;
                      })
                      .sort(function (e, t) {
                        return (
                          p.enginePreference.indexOf(e.engineName) -
                          p.enginePreference.indexOf(t.engineName)
                        );
                      })),
                  e.sources.some(function (e) {
                    var i = n
                      .filter(function (t) {
                        return e.engine && e.engine !== t.engineName
                          ? !1
                          : t.canPlay(e.type, C.conf);
                      })
                      .shift();
                    return i && (t = i), !!i;
                  }),
                  t
                );
              };
              return (
                l.getAttribute("data-flowplayer-instance-id") ||
                  (l.setAttribute("data-flowplayer-instance-id", b++),
                  C.on("boot", function () {
                    var e = w.support;
                    (p.splash || u.hasClass(l, "is-splash") || !e.firstframe) &&
                      ((C.forcedSplash =
                        !p.splash && !u.hasClass(l, "is-splash")),
                      (C.splash = !0),
                      p.splash || (p.splash = !0),
                      u.addClass(l, "is-splash")),
                      p.splash && u.find("video", l).forEach(u.removeNode),
                      (p.dvr || p.live || u.hasClass(l, "is-live")) &&
                        ((C.live = p.live = !0),
                        (C.dvr = p.dvr = !!p.dvr || u.hasClass(l, "is-dvr")),
                        u.addClass(l, "is-live"),
                        u.toggleClass(l, "is-dvr", C.dvr)),
                      d.forEach(function (e) {
                        e(C, l);
                      }),
                      f.push(C),
                      p.splash ? C.unload() : C.load(),
                      p.disabled && C.disable(),
                      C.one("ready", n);
                  })
                    .on("load", function (e, t, n) {
                      p.splash &&
                        u
                          .find(".flowplayer.is-ready,.flowplayer.is-loading")
                          .forEach(function (e) {
                            var t = e.getAttribute(
                              "data-flowplayer-instance-id"
                            );
                            if (
                              t !==
                              l.getAttribute("data-flowplayer-instance-id")
                            ) {
                              var n = f[Number(t)];
                              n && n.conf.splash && n.unload();
                            }
                          }),
                        u.addClass(l, "is-loading"),
                        (t.loading = !0),
                        ("undefined" != typeof n.live ||
                          "undefined" != typeof n.dvr) &&
                          (u.toggleClass(l, "is-live", n.dvr || n.live),
                          u.toggleClass(l, "is-dvr", !!n.dvr),
                          (t.live = n.dvr || n.live),
                          (t.dvr = !!n.dvr));
                    })
                    .on("ready", function (e, t, n) {
                      (n.time = 0),
                        (t.video = n),
                        u.removeClass(l, "is-loading"),
                        (t.loading = !1),
                        t.muted ? t.mute(!0, !0) : t.volume(t.volumeLevel);
                      var i = t.conf.hlsFix && /mpegurl/i.exec(n.type);
                      u.toggleClass(l, "hls-fix", !!i);
                    })
                    .on("unload", function () {
                      u.removeClass(l, "is-loading"), (C.loading = !1);
                    })
                    .on("ready unload", function (e) {
                      var t = "ready" == e.type;
                      u.toggleClass(l, "is-splash", !t),
                        u.toggleClass(l, "is-ready", t),
                        (C.ready = t),
                        (C.splash = !t);
                    })
                    .on("progress", function (e, t, n) {
                      t.video.time = n;
                    })
                    .on("buffer", function (e, t, n) {
                      t.video.buffer =
                        "number" == typeof n ? n : n[n.length - 1].end;
                    })
                    .on("speed", function (e, t, n) {
                      t.currentSpeed = n;
                    })
                    .on("volume", function (e, t, n) {
                      (t.volumeLevel = Math.round(100 * n) / 100),
                        t.muted ? n && t.mute(!1) : (g.volume = n);
                    })
                    .on("beforeseek seek", function (e) {
                      (C.seeking = "beforeseek" == e.type),
                        u.toggleClass(l, "is-seeking", C.seeking);
                    })
                    .on("ready pause resume unload finish stop", function (e) {
                      (C.paused = /pause|finish|unload|stop/.test(e.type)),
                        (C.paused =
                          C.paused ||
                          ("ready" === e.type && !p.autoplay && !C.playing)),
                        (C.playing = !C.paused),
                        u.toggleClass(l, "is-paused", C.paused),
                        u.toggleClass(l, "is-playing", C.playing),
                        C.load.ed || C.pause();
                    })
                    .on("finish", function () {
                      C.finished = !0;
                    })
                    .on("error", function () {})),
                C.trigger("boot", [C, l]),
                C
              );
            }
            var r = e("extend-object"),
              o = e("is-function"),
              a = e("bean"),
              s = e("./ext/ui/slider"),
              l = e("./ext/ui/bar-slider"),
              u = e("./common"),
              c = e("./ext/events"),
              f = [],
              d = [],
              p = window.onbeforeunload;
            window.onbeforeunload = function (e) {
              return (
                f.forEach(function (e) {
                  e.conf.splash
                    ? e.unload()
                    : e.bind("error", function () {
                        u.find(".flowplayer.is-error .fp-message").forEach(
                          u.removeNode
                        );
                      });
                }),
                p ? p(e) : void 0
              );
            };
            var h = !1;
            try {
              "object" == typeof window.localStorage &&
                ((window.localStorage.flowplayerTestStorage = "test"),
                (h = !0));
            } catch (g) {}
            var m =
                /Safari/.exec(navigator.userAgent) &&
                !/Chrome/.exec(navigator.userAgent),
              v = /(\d+\.\d+) Safari/.exec(navigator.userAgent),
              y = v ? Number(v[1]) : 100,
              w = (t.exports = function (e, t, n) {
                if (o(e)) return d.push(e);
                if ("number" == typeof e || "undefined" == typeof e)
                  return f[e || 0];
                if (e.nodeType) {
                  if (null !== e.getAttribute("data-flowplayer-instance-id"))
                    return f[e.getAttribute("data-flowplayer-instance-id")];
                  if (!t) return;
                  return i(e, t, n);
                }
                if (e.jquery) return w(e[0], t, n);
                if ("string" == typeof e) {
                  var r = u.find(e)[0];
                  return r && w(r, t, n);
                }
              });
            r(w, {
              version: "7.2.1",
              engines: [],
              engine: function (e) {
                return w.engines.filter(function (t) {
                  return t.engineName === e;
                })[0];
              },
              extensions: [],
              conf: {},
              set: function (e, t) {
                "string" == typeof e ? (w.conf[e] = t) : r(w.conf, e);
              },
              registerExtension: function (e, t) {
                w.extensions.push([e, t]);
              },
              support: {},
              defaults: {
                debug: h ? !!localStorage.flowplayerDebug : !1,
                disabled: !1,
                fullscreen: window == window.top,
                keyboard: !0,
                ratio: 9 / 16,
                adaptiveRatio: !1,
                rtmp: 0,
                proxy: "best",
                hlsQualities: !0,
                splash: !1,
                live: !1,
                livePositionOffset: 120,
                swf: "//releases.flowplayer.org/7.2.1/flowplayer.swf",
                swfHls: "//releases.flowplayer.org/7.2.1/flowplayerhls.swf",
                speeds: [0.25, 0.5, 1, 1.5, 2],
                tooltip: !0,
                mouseoutTimeout: 5e3,
                volume: h
                  ? "true" == localStorage.muted
                    ? 0
                    : isNaN(localStorage.volume)
                    ? 1
                    : localStorage.volume || 1
                  : 1,
                errors: [
                  "",
                  "Video loading aborted",
                  "Network error",
                  "Video not properly encoded",
                  "Video file not found",
                  "Unsupported video",
                  "Skin not found",
                  "SWF file not found",
                  "Subtitles not found",
                  "Invalid RTMP URL",
                  "Unsupported video format. Try installing Adobe Flash.",
                ],
                errorUrls: [
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "http://get.adobe.com/flashplayer/",
                ],
                playlist: [],
                hlsFix: m && 8 > y,
                disableInline: !1,
              },
              bean: a,
              common: u,
              slider: s,
              barSlider: l,
              extend: r,
            });
            var b = 0,
              I = e("./ext/resolve");
            if ("undefined" != typeof window.jQuery) {
              var M = window.jQuery;
              M(function () {
                "function" == typeof M.fn.flowplayer &&
                  M(
                    '.flowplayer:has(video,script[type="application/json"])'
                  ).flowplayer();
              });
              var C = function (e) {
                if (!e.length) return {};
                var t = e.data() || {},
                  n = {};
                return (
                  M.each(["autoplay", "loop", "preload", "poster"], function (
                    i,
                    r
                  ) {
                    var o = e.attr(r);
                    void 0 !== o && -1 !== ["autoplay", "poster"].indexOf(r)
                      ? (n[r] = o ? o : !0)
                      : void 0 !== o && (t[r] = o ? o : !0);
                  }),
                  (e[0].autoplay = e[0].preload = !1),
                  (t.subtitles = e
                    .find("track")
                    .map(function () {
                      var e = M(this);
                      return {
                        src: e.attr("src"),
                        kind: e.attr("kind"),
                        label: e.attr("label"),
                        srclang: e.attr("srclang"),
                        default: e.prop("default"),
                      };
                    })
                    .get()),
                  (t.sources = new I().sourcesFromVideoTag(e, M)),
                  r(n, { clip: t })
                );
              };
              M.fn.flowplayer = function (e, t) {
                return this.each(function () {
                  "string" == typeof e && (e = { swf: e }),
                    o(e) && ((t = e), (e = {}));
                  var n = M(this),
                    r = n.find('script[type="application/json"]'),
                    a = r.length ? JSON.parse(r.text()) : C(n.find("video")),
                    s = M.extend({}, e || {}, a, n.data()),
                    l = i(this, s, t);
                  c.EVENTS.forEach(function (e) {
                    l.on(e + ".jquery", function (e) {
                      n.trigger.call(n, e.type, e.detail && e.detail.args);
                    });
                  }),
                    n.data("flowplayer", l);
                });
              };
            }
          },
          {
            "./common": 1,
            "./ext/events": 12,
            "./ext/resolve": 21,
            "./ext/ui/bar-slider": 28,
            "./ext/ui/slider": 29,
            bean: 34,
            "extend-object": 39,
            "is-function": 42,
          },
        ],
        32: [
          function (e, t, n) {
            e("es5-shim");
            var i = (t.exports = e("./flowplayer"));
            e("./ext/support"),
              e("./engine/embed"),
              e("./engine/hlsjs"),
              e("./engine/html5"),
              e("./engine/flash"),
              e("./ext/ui"),
              e("./ext/message"),
              e("./ext/keyboard"),
              e("./ext/playlist"),
              e("./ext/cuepoint"),
              e("./ext/subtitle"),
              e("./ext/analytics"),
              e("./ext/share"),
              e("./ext/facebook"),
              e("./ext/twitter"),
              e("./ext/embed"),
              e("./ext/airplay"),
              e("./ext/chromecast"),
              e("./ext/qsel"),
              e("./ext/menu"),
              e("./ext/fullscreen"),
              e("./ext/mobile"),
              i(function (e, t) {
                function n(e) {
                  var t = document.createElement("a");
                  return (t.href = e), s.hostname(t.hostname);
                }
                var r = function (e, t) {
                    var n = e.className.split(" ");
                    -1 === n.indexOf(t) && (e.className += " " + t);
                  },
                  o = function (e) {
                    return "none" !== window.getComputedStyle(e).display;
                  },
                  a = e.conf,
                  s = i.common,
                  l = s.createElement,
                  u =
                    a.swf.indexOf("flowplayer.org") &&
                    a.e &&
                    t.getAttribute("data-origin"),
                  c = u ? n(u) : s.hostname(),
                  f = (document, a.key);
                if (
                  ("file:" == location.protocol && (c = "localhost"),
                  (e.load.ed = 1),
                  (a.hostname = c),
                  (a.origin = u || location.href),
                  u && r(t, "is-embedded"),
                  "string" == typeof f && (f = f.split(/,\s*/)),
                  f && "function" == typeof key_check && key_check(f, c))
                ) {
                  if (a.logo) {
                    var d = s.find(".fp-player", t)[0],
                      p = a.logo.href || "",
                      h = a.logo.src || a.logo,
                      g = l("a", { className: "fp-logo", href: p });
                    u && (g.href = g.href || u),
                      a.embed && a.embed.popup && (g.target = "_blank");
                    var m = l("img", { src: h });
                    g.appendChild(m), (d || t).appendChild(g);
                  }
                } else {
                  var g = l("a", {
                    href: "https://flowplayer.com/hello/?from=player",
                  });
                  t.appendChild(g);
                  var v = l(
                      "div",
                      { className: "fp-context-menu fp-menu" },
                      '<strong>&copy; 2017 Flowplayer</strong><a href="https://flowplayer.com/hello/?from=player">About Flowplayer</a><a href="https://flowplayer.com/license">GPL based license</a>'
                    ),
                    y = window.location.href.indexOf("localhost"),
                    d = s.find(".fp-player", t)[0];
                  7 !== y && (d || t).appendChild(v),
                    e.on("pause resume finish unload ready", function (e, n) {
                      var i = -1;
                      if (n.video.src)
                        for (
                          var r = [
                              ["org", "flowplayer", "drive"],
                              ["org", "flowplayer", "my"],
                              ["org", "flowplayer", "cdn"],
                              ["com", "flowplayer", "cdn"],
                            ],
                            a = 0;
                          a < r.length &&
                          ((i = n.video.src.indexOf(
                            "://" + r[a].reverse().join(".")
                          )),
                          -1 === i);
                          a++
                        );
                      if (
                        /pause|resume/.test(e.type) &&
                        "flash" != n.engine.engineName &&
                        4 != i &&
                        5 != i
                      ) {
                        var s = {
                          display: "block",
                          position: "absolute",
                          left: "16px",
                          bottom: "70px",
                          zIndex: 99999,
                          width: "100px",
                          height: "20px",
                          backgroundImage:
                            "url(" +
                            [
                              ".png",
                              "logo",
                              "/",
                              ".net",
                              ".cloudfront",
                              "d32wqyuo10o653",
                              "//",
                            ]
                              .reverse()
                              .join("") +
                            ")",
                        };
                        for (var l in s)
                          s.hasOwnProperty(l) && (g.style[l] = s[l]);
                        (n.load.ed =
                          o(g) &&
                          (7 === y || v.parentNode == t || v.parentNode == d)),
                          n.load.ed || n.pause();
                      } else g.style.display = "none";
                    });
                }
              });
          },
          {
            "./engine/embed": 2,
            "./engine/flash": 3,
            "./engine/hlsjs": 4,
            "./engine/html5": 6,
            "./ext/airplay": 7,
            "./ext/analytics": 8,
            "./ext/chromecast": 9,
            "./ext/cuepoint": 10,
            "./ext/embed": 11,
            "./ext/facebook": 13,
            "./ext/fullscreen": 14,
            "./ext/keyboard": 15,
            "./ext/menu": 16,
            "./ext/message": 17,
            "./ext/mobile": 18,
            "./ext/playlist": 19,
            "./ext/qsel": 20,
            "./ext/share": 22,
            "./ext/subtitle": 23,
            "./ext/support": 25,
            "./ext/twitter": 26,
            "./ext/ui": 27,
            "./flowplayer": 31,
            "es5-shim": 38,
          },
        ],
        33: [
          function (e, t, n) {
            "use strict";
            function i(e) {
              var t = e.length;
              if (t % 4 > 0)
                throw new Error(
                  "Invalid string. Length must be a multiple of 4"
                );
              return "=" === e[t - 2] ? 2 : "=" === e[t - 1] ? 1 : 0;
            }
            function r(e) {
              return (3 * e.length) / 4 - i(e);
            }
            function o(e) {
              var t,
                n,
                r,
                o,
                a,
                s = e.length;
              (o = i(e)), (a = new f((3 * s) / 4 - o)), (n = o > 0 ? s - 4 : s);
              var l = 0;
              for (t = 0; n > t; t += 4)
                (r =
                  (c[e.charCodeAt(t)] << 18) |
                  (c[e.charCodeAt(t + 1)] << 12) |
                  (c[e.charCodeAt(t + 2)] << 6) |
                  c[e.charCodeAt(t + 3)]),
                  (a[l++] = (r >> 16) & 255),
                  (a[l++] = (r >> 8) & 255),
                  (a[l++] = 255 & r);
              return (
                2 === o
                  ? ((r =
                      (c[e.charCodeAt(t)] << 2) |
                      (c[e.charCodeAt(t + 1)] >> 4)),
                    (a[l++] = 255 & r))
                  : 1 === o &&
                    ((r =
                      (c[e.charCodeAt(t)] << 10) |
                      (c[e.charCodeAt(t + 1)] << 4) |
                      (c[e.charCodeAt(t + 2)] >> 2)),
                    (a[l++] = (r >> 8) & 255),
                    (a[l++] = 255 & r)),
                a
              );
            }
            function a(e) {
              return (
                u[(e >> 18) & 63] +
                u[(e >> 12) & 63] +
                u[(e >> 6) & 63] +
                u[63 & e]
              );
            }
            function s(e, t, n) {
              for (var i, r = [], o = t; n > o; o += 3)
                (i = (e[o] << 16) + (e[o + 1] << 8) + e[o + 2]), r.push(a(i));
              return r.join("");
            }
            function l(e) {
              for (
                var t,
                  n = e.length,
                  i = n % 3,
                  r = "",
                  o = [],
                  a = 16383,
                  l = 0,
                  c = n - i;
                c > l;
                l += a
              )
                o.push(s(e, l, l + a > c ? c : l + a));
              return (
                1 === i
                  ? ((t = e[n - 1]),
                    (r += u[t >> 2]),
                    (r += u[(t << 4) & 63]),
                    (r += "=="))
                  : 2 === i &&
                    ((t = (e[n - 2] << 8) + e[n - 1]),
                    (r += u[t >> 10]),
                    (r += u[(t >> 4) & 63]),
                    (r += u[(t << 2) & 63]),
                    (r += "=")),
                o.push(r),
                o.join("")
              );
            }
            (n.byteLength = r), (n.toByteArray = o), (n.fromByteArray = l);
            for (
              var u = [],
                c = [],
                f = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                d =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                p = 0,
                h = d.length;
              h > p;
              ++p
            )
              (u[p] = d[p]), (c[d.charCodeAt(p)] = p);
            (c["-".charCodeAt(0)] = 62), (c["_".charCodeAt(0)] = 63);
          },
          {},
        ],
        34: [
          function (t, n, i) {
            !(function (t, i, r) {
              "undefined" != typeof n && n.exports
                ? (n.exports = r())
                : "function" == typeof e && e.amd
                ? e(r)
                : (i[t] = r());
            })("bean", this, function (e, t) {
              (e = e || "bean"), (t = t || this);
              var n,
                i = window,
                r = t[e],
                o = /[^\.]*(?=\..*)\.|.*/,
                a = /\..*/,
                s = "addEventListener",
                l = "removeEventListener",
                u = document || {},
                c = u.documentElement || {},
                f = c[s],
                d = f ? s : "attachEvent",
                p = {},
                h = Array.prototype.slice,
                g = function (e, t) {
                  return e.split(t || " ");
                },
                m = function (e) {
                  return "string" == typeof e;
                },
                v = function (e) {
                  return "function" == typeof e;
                },
                y =
                  "click dblclick mouseup mousedown contextmenu mousewheel mousemultiwheel DOMMouseScroll mouseover mouseout mousemove selectstart selectend keydown keypress keyup orientationchange focus blur change reset select submit load unload beforeunload resize move DOMContentLoaded readystatechange message error abort scroll ",
                w =
                  "show input invalid touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend textinput readystatechange pageshow pagehide popstate hashchange offline online afterprint beforeprint dragstart dragenter dragover dragleave drag drop dragend loadstart progress suspend emptied stalled loadmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate play pause ratechange volumechange cuechange checking noupdate downloading cached updateready obsolete ",
                b = (function (e, t, n) {
                  for (n = 0; n < t.length; n++) t[n] && (e[t[n]] = 1);
                  return e;
                })({}, g(y + (f ? w : ""))),
                I = (function () {
                  var e =
                      "compareDocumentPosition" in c
                        ? function (e, t) {
                            return (
                              t.compareDocumentPosition &&
                              16 === (16 & t.compareDocumentPosition(e))
                            );
                          }
                        : "contains" in c
                        ? function (e, t) {
                            return (
                              (t = 9 === t.nodeType || t === window ? c : t),
                              t !== e && t.contains(e)
                            );
                          }
                        : function (e, t) {
                            for (; (e = e.parentNode); ) if (e === t) return 1;
                            return 0;
                          },
                    t = function (t) {
                      var n = t.relatedTarget;
                      return n
                        ? n !== this &&
                            "xul" !== n.prefix &&
                            !/document/.test(this.toString()) &&
                            !e(n, this)
                        : null == n;
                    };
                  return {
                    mouseenter: { base: "mouseover", condition: t },
                    mouseleave: { base: "mouseout", condition: t },
                    mousewheel: {
                      base: /Firefox/.test(navigator.userAgent)
                        ? "DOMMouseScroll"
                        : "mousewheel",
                    },
                  };
                })(),
                M = (function () {
                  var e = g(
                      "altKey attrChange attrName bubbles cancelable ctrlKey currentTarget detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey srcElement target timeStamp type view which propertyName"
                    ),
                    t = e.concat(
                      g(
                        "button buttons clientX clientY dataTransfer fromElement offsetX offsetY pageX pageY screenX screenY toElement"
                      )
                    ),
                    n = t.concat(
                      g("wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ axis")
                    ),
                    r = e.concat(
                      g(
                        "char charCode key keyCode keyIdentifier keyLocation location"
                      )
                    ),
                    o = e.concat(g("data")),
                    a = e.concat(
                      g("touches targetTouches changedTouches scale rotation")
                    ),
                    s = e.concat(g("data origin source")),
                    l = e.concat(g("state")),
                    f = /over|out/,
                    d = [
                      {
                        reg: /key/i,
                        fix: function (e, t) {
                          return (t.keyCode = e.keyCode || e.which), r;
                        },
                      },
                      {
                        reg: /click|mouse(?!(.*wheel|scroll))|menu|drag|drop/i,
                        fix: function (e, n, i) {
                          return (
                            (n.rightClick = 3 === e.which || 2 === e.button),
                            (n.pos = { x: 0, y: 0 }),
                            e.pageX || e.pageY
                              ? ((n.clientX = e.pageX), (n.clientY = e.pageY))
                              : (e.clientX || e.clientY) &&
                                ((n.clientX =
                                  e.clientX + u.body.scrollLeft + c.scrollLeft),
                                (n.clientY =
                                  e.clientY + u.body.scrollTop + c.scrollTop)),
                            f.test(i) &&
                              (n.relatedTarget =
                                e.relatedTarget ||
                                e[
                                  ("mouseover" == i ? "from" : "to") + "Element"
                                ]),
                            t
                          );
                        },
                      },
                      {
                        reg: /mouse.*(wheel|scroll)/i,
                        fix: function () {
                          return n;
                        },
                      },
                      {
                        reg: /^text/i,
                        fix: function () {
                          return o;
                        },
                      },
                      {
                        reg: /^touch|^gesture/i,
                        fix: function () {
                          return a;
                        },
                      },
                      {
                        reg: /^message$/i,
                        fix: function () {
                          return s;
                        },
                      },
                      {
                        reg: /^popstate$/i,
                        fix: function () {
                          return l;
                        },
                      },
                      {
                        reg: /.*/,
                        fix: function () {
                          return e;
                        },
                      },
                    ],
                    p = {},
                    h = function (e, t, n) {
                      if (
                        arguments.length &&
                        ((e =
                          e ||
                          (
                            (t.ownerDocument || t.document || t).parentWindow ||
                            i
                          ).event),
                        (this.originalEvent = e),
                        (this.isNative = n),
                        (this.isBean = !0),
                        e)
                      ) {
                        var r,
                          o,
                          a,
                          s,
                          l,
                          u = e.type,
                          c = e.target || e.srcElement;
                        if (
                          ((this.target =
                            c && 3 === c.nodeType ? c.parentNode : c),
                          n)
                        ) {
                          if (((l = p[u]), !l))
                            for (r = 0, o = d.length; o > r; r++)
                              if (d[r].reg.test(u)) {
                                p[u] = l = d[r].fix;
                                break;
                              }
                          for (s = l(e, this, u), r = s.length; r--; )
                            !((a = s[r]) in this) && a in e && (this[a] = e[a]);
                        }
                      }
                    };
                  return (
                    (h.prototype.preventDefault = function () {
                      this.originalEvent.preventDefault
                        ? this.originalEvent.preventDefault()
                        : (this.originalEvent.returnValue = !1);
                    }),
                    (h.prototype.stopPropagation = function () {
                      this.originalEvent.stopPropagation
                        ? this.originalEvent.stopPropagation()
                        : (this.originalEvent.cancelBubble = !0);
                    }),
                    (h.prototype.stop = function () {
                      this.preventDefault(),
                        this.stopPropagation(),
                        (this.stopped = !0);
                    }),
                    (h.prototype.stopImmediatePropagation = function () {
                      this.originalEvent.stopImmediatePropagation &&
                        this.originalEvent.stopImmediatePropagation(),
                        (this.isImmediatePropagationStopped = function () {
                          return !0;
                        });
                    }),
                    (h.prototype.isImmediatePropagationStopped = function () {
                      return (
                        this.originalEvent.isImmediatePropagationStopped &&
                        this.originalEvent.isImmediatePropagationStopped()
                      );
                    }),
                    (h.prototype.clone = function (e) {
                      var t = new h(this, this.element, this.isNative);
                      return (t.currentTarget = e), t;
                    }),
                    h
                  );
                })(),
                C = function (e, t) {
                  return f || t || (e !== u && e !== i) ? e : c;
                },
                A = (function () {
                  var e = function (e, t, n, i) {
                      var r = function (n, r) {
                          return t.apply(
                            e,
                            i ? h.call(r, n ? 0 : 1).concat(i) : r
                          );
                        },
                        o = function (n, i) {
                          return t.__beanDel ? t.__beanDel.ft(n.target, e) : i;
                        },
                        a = n
                          ? function (e) {
                              var t = o(e, this);
                              return n.apply(t, arguments)
                                ? (e && (e.currentTarget = t), r(e, arguments))
                                : void 0;
                            }
                          : function (e) {
                              return (
                                t.__beanDel && (e = e.clone(o(e))),
                                r(e, arguments)
                              );
                            };
                      return (a.__beanDel = t.__beanDel), a;
                    },
                    t = function (t, n, i, r, o, a, s) {
                      var l,
                        u = I[n];
                      "unload" == n && (i = j(L, t, n, i, r)),
                        u &&
                          (u.condition && (i = e(t, i, u.condition, a)),
                          (n = u.base || n)),
                        (this.isNative = l = b[n] && !!t[d]),
                        (this.customType = !f && !l && n),
                        (this.element = t),
                        (this.type = n),
                        (this.original = r),
                        (this.namespaces = o),
                        (this.eventType = f || l ? n : "propertychange"),
                        (this.target = C(t, l)),
                        (this[d] = !!this.target[d]),
                        (this.root = s),
                        (this.handler = e(t, i, null, a));
                    };
                  return (
                    (t.prototype.inNamespaces = function (e) {
                      var t,
                        n,
                        i = 0;
                      if (!e) return !0;
                      if (!this.namespaces) return !1;
                      for (t = e.length; t--; )
                        for (n = this.namespaces.length; n--; )
                          e[t] == this.namespaces[n] && i++;
                      return e.length === i;
                    }),
                    (t.prototype.matches = function (e, t, n) {
                      return !(
                        this.element !== e ||
                        (t && this.original !== t) ||
                        (n && this.handler !== n)
                      );
                    }),
                    t
                  );
                })(),
                S = (function () {
                  var e = {},
                    t = function (n, i, r, o, a, s) {
                      var l = a ? "r" : "$";
                      if (i && "*" != i) {
                        var u,
                          c = 0,
                          f = e[l + i],
                          d = "*" == n;
                        if (!f) return;
                        for (u = f.length; u > c; c++)
                          if ((d || f[c].matches(n, r, o)) && !s(f[c], f, c, i))
                            return;
                      } else
                        for (var p in e)
                          p.charAt(0) == l && t(n, p.substr(1), r, o, a, s);
                    },
                    n = function (t, n, i, r) {
                      var o,
                        a = e[(r ? "r" : "$") + n];
                      if (a)
                        for (o = a.length; o--; )
                          if (!a[o].root && a[o].matches(t, i, null)) return !0;
                      return !1;
                    },
                    i = function (e, n, i, r) {
                      var o = [];
                      return (
                        t(e, n, i, null, r, function (e) {
                          return o.push(e);
                        }),
                        o
                      );
                    },
                    r = function (t) {
                      var n = !t.root && !this.has(t.element, t.type, null, !1),
                        i = (t.root ? "r" : "$") + t.type;
                      return (e[i] || (e[i] = [])).push(t), n;
                    },
                    o = function (n) {
                      t(n.element, n.type, null, n.handler, n.root, function (
                        t,
                        n,
                        i
                      ) {
                        return (
                          n.splice(i, 1),
                          (t.removed = !0),
                          0 === n.length &&
                            delete e[(t.root ? "r" : "$") + t.type],
                          !1
                        );
                      });
                    },
                    a = function () {
                      var t,
                        n = [];
                      for (t in e) "$" == t.charAt(0) && (n = n.concat(e[t]));
                      return n;
                    };
                  return { has: n, get: i, put: r, del: o, entries: a };
                })(),
                E = function (e) {
                  n = arguments.length
                    ? e
                    : u.querySelectorAll
                    ? function (e, t) {
                        return t.querySelectorAll(e);
                      }
                    : function () {
                        throw new Error("Bean: No selector engine installed");
                      };
                },
                D = function (e, t) {
                  if (f || !t || !e || e.propertyName == "_on" + t) {
                    var n = S.get(this, t || e.type, null, !1),
                      i = n.length,
                      r = 0;
                    for (
                      e = new M(e, this, !0), t && (e.type = t);
                      i > r && !e.isImmediatePropagationStopped();
                      r++
                    )
                      n[r].removed || n[r].handler.call(this, e);
                  }
                },
                N = f
                  ? function (e, t, n) {
                      e[n ? s : l](t, D, !1);
                    }
                  : function (e, t, n, i) {
                      var r;
                      n
                        ? (S.put(
                            (r = new A(
                              e,
                              i || t,
                              function (t) {
                                D.call(e, t, i);
                              },
                              D,
                              null,
                              null,
                              !0
                            ))
                          ),
                          i && null == e["_on" + i] && (e["_on" + i] = 0),
                          r.target.attachEvent("on" + r.eventType, r.handler))
                        : ((r = S.get(e, i || t, D, !0)[0]),
                          r &&
                            (r.target.detachEvent(
                              "on" + r.eventType,
                              r.handler
                            ),
                            S.del(r)));
                    },
                j = function (e, t, n, i, r) {
                  return function () {
                    i.apply(this, arguments), e(t, n, r);
                  };
                },
                L = function (e, t, n, i) {
                  var r,
                    o,
                    s = t && t.replace(a, ""),
                    l = S.get(e, s, null, !1),
                    u = {};
                  for (r = 0, o = l.length; o > r; r++)
                    (n && l[r].original !== n) ||
                      !l[r].inNamespaces(i) ||
                      (S.del(l[r]),
                      !u[l[r].eventType] &&
                        l[r][d] &&
                        (u[l[r].eventType] = {
                          t: l[r].eventType,
                          c: l[r].type,
                        }));
                  for (r in u)
                    S.has(e, u[r].t, null, !1) || N(e, u[r].t, !1, u[r].c);
                },
                x = function (e, t) {
                  var i = function (t, i) {
                      for (
                        var r, o = m(e) ? n(e, i) : e;
                        t && t !== i;
                        t = t.parentNode
                      )
                        for (r = o.length; r--; ) if (o[r] === t) return t;
                    },
                    r = function (e) {
                      var n = i(e.target, this);
                      n && t.apply(n, arguments);
                    };
                  return (r.__beanDel = { ft: i, selector: e }), r;
                },
                T = f
                  ? function (e, t, n) {
                      var r = u.createEvent(e ? "HTMLEvents" : "UIEvents");
                      r[e ? "initEvent" : "initUIEvent"](t, !0, !0, i, 1),
                        n.dispatchEvent(r);
                    }
                  : function (e, t, n) {
                      (n = C(n, e)),
                        e
                          ? n.fireEvent("on" + t, u.createEventObject())
                          : n["_on" + t]++;
                    },
                Z = function (e, t, n) {
                  var i,
                    r,
                    s,
                    l,
                    u = m(t);
                  if (u && t.indexOf(" ") > 0) {
                    for (t = g(t), l = t.length; l--; ) Z(e, t[l], n);
                    return e;
                  }
                  if (
                    ((r = u && t.replace(a, "")),
                    r && I[r] && (r = I[r].base),
                    !t || u)
                  )
                    (s = u && t.replace(o, "")) && (s = g(s, ".")),
                      L(e, r, n, s);
                  else if (v(t)) L(e, null, t);
                  else for (i in t) t.hasOwnProperty(i) && Z(e, i, t[i]);
                  return e;
                },
                P = function (e, t, i, r) {
                  var s, l, u, c, f, m, y;
                  {
                    if (void 0 !== i || "object" != typeof t) {
                      for (
                        v(i)
                          ? ((f = h.call(arguments, 3)), (r = s = i))
                          : ((s = r),
                            (f = h.call(arguments, 4)),
                            (r = x(i, s, n))),
                          u = g(t),
                          this === p && (r = j(Z, e, t, r, s)),
                          c = u.length;
                        c--;

                      )
                        (y = S.put(
                          (m = new A(
                            e,
                            u[c].replace(a, ""),
                            r,
                            s,
                            g(u[c].replace(o, ""), "."),
                            f,
                            !1
                          ))
                        )),
                          m[d] && y && N(e, m.eventType, !0, m.customType);
                      return e;
                    }
                    for (l in t)
                      t.hasOwnProperty(l) && P.call(this, e, l, t[l]);
                  }
                },
                k = function (e, t, n, i) {
                  return P.apply(
                    null,
                    m(n)
                      ? [e, n, t, i].concat(
                          arguments.length > 3 ? h.call(arguments, 5) : []
                        )
                      : h.call(arguments)
                  );
                },
                Y = function () {
                  return P.apply(p, arguments);
                },
                z = function (e, t, n) {
                  var i,
                    r,
                    s,
                    l,
                    u,
                    c = g(t);
                  for (i = c.length; i--; )
                    if (
                      ((t = c[i].replace(a, "")),
                      (l = c[i].replace(o, "")) && (l = g(l, ".")),
                      l || n || !e[d])
                    )
                      for (
                        u = S.get(e, t, null, !1),
                          n = [!1].concat(n),
                          r = 0,
                          s = u.length;
                        s > r;
                        r++
                      )
                        u[r].inNamespaces(l) && u[r].handler.apply(e, n);
                    else T(b[t], t, e);
                  return e;
                },
                G = function (e, t, n) {
                  for (
                    var i, r, o = S.get(t, n, null, !1), a = o.length, s = 0;
                    a > s;
                    s++
                  )
                    o[s].original &&
                      ((i = [e, o[s].type]),
                      (r = o[s].handler.__beanDel) && i.push(r.selector),
                      i.push(o[s].original),
                      P.apply(null, i));
                  return e;
                },
                O = {
                  on: P,
                  add: k,
                  one: Y,
                  off: Z,
                  remove: Z,
                  clone: G,
                  fire: z,
                  Event: M,
                  setSelectorEngine: E,
                  noConflict: function () {
                    return (t[e] = r), this;
                  },
                };
              if (i.attachEvent) {
                var R = function () {
                  var e,
                    t = S.entries();
                  for (e in t)
                    t[e].type &&
                      "unload" !== t[e].type &&
                      Z(t[e].element, t[e].type);
                  i.detachEvent("onunload", R),
                    i.CollectGarbage && i.CollectGarbage();
                };
                i.attachEvent("onunload", R);
              }
              return E(), O;
            });
          },
          {},
        ],
        35: [
          function (e, t, n) {
            (function (t) {
              "use strict";
              function i() {
                try {
                  var e = new Uint8Array(1);
                  return (
                    (e.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function () {
                        return 42;
                      },
                    }),
                    42 === e.foo() &&
                      "function" == typeof e.subarray &&
                      0 === e.subarray(1, 1).byteLength
                  );
                } catch (t) {
                  return !1;
                }
              }
              function r() {
                return a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
              }
              function o(e, t) {
                if (r() < t) throw new RangeError("Invalid typed array length");
                return (
                  a.TYPED_ARRAY_SUPPORT
                    ? ((e = new Uint8Array(t)), (e.__proto__ = a.prototype))
                    : (null === e && (e = new a(t)), (e.length = t)),
                  e
                );
              }
              function a(e, t, n) {
                if (!(a.TYPED_ARRAY_SUPPORT || this instanceof a))
                  return new a(e, t, n);
                if ("number" == typeof e) {
                  if ("string" == typeof t)
                    throw new Error(
                      "If encoding is specified then the first argument must be a string"
                    );
                  return c(this, e);
                }
                return s(this, e, t, n);
              }
              function s(e, t, n, i) {
                if ("number" == typeof t)
                  throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer &&
                  t instanceof ArrayBuffer
                  ? p(e, t, n, i)
                  : "string" == typeof t
                  ? f(e, t, n)
                  : h(e, t);
              }
              function l(e) {
                if ("number" != typeof e)
                  throw new TypeError('"size" argument must be a number');
                if (0 > e)
                  throw new RangeError('"size" argument must not be negative');
              }
              function u(e, t, n, i) {
                return (
                  l(t),
                  0 >= t
                    ? o(e, t)
                    : void 0 !== n
                    ? "string" == typeof i
                      ? o(e, t).fill(n, i)
                      : o(e, t).fill(n)
                    : o(e, t)
                );
              }
              function c(e, t) {
                if (
                  (l(t),
                  (e = o(e, 0 > t ? 0 : 0 | g(t))),
                  !a.TYPED_ARRAY_SUPPORT)
                )
                  for (var n = 0; t > n; ++n) e[n] = 0;
                return e;
              }
              function f(e, t, n) {
                if (
                  (("string" != typeof n || "" === n) && (n = "utf8"),
                  !a.isEncoding(n))
                )
                  throw new TypeError(
                    '"encoding" must be a valid string encoding'
                  );
                var i = 0 | v(t, n);
                e = o(e, i);
                var r = e.write(t, n);
                return r !== i && (e = e.slice(0, r)), e;
              }
              function d(e, t) {
                var n = t.length < 0 ? 0 : 0 | g(t.length);
                e = o(e, n);
                for (var i = 0; n > i; i += 1) e[i] = 255 & t[i];
                return e;
              }
              function p(e, t, n, i) {
                if ((t.byteLength, 0 > n || t.byteLength < n))
                  throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < n + (i || 0))
                  throw new RangeError("'length' is out of bounds");
                return (
                  (t =
                    void 0 === n && void 0 === i
                      ? new Uint8Array(t)
                      : void 0 === i
                      ? new Uint8Array(t, n)
                      : new Uint8Array(t, n, i)),
                  a.TYPED_ARRAY_SUPPORT
                    ? ((e = t), (e.__proto__ = a.prototype))
                    : (e = d(e, t)),
                  e
                );
              }
              function h(e, t) {
                if (a.isBuffer(t)) {
                  var n = 0 | g(t.length);
                  return (
                    (e = o(e, n)), 0 === e.length ? e : (t.copy(e, 0, 0, n), e)
                  );
                }
                if (t) {
                  if (
                    ("undefined" != typeof ArrayBuffer &&
                      t.buffer instanceof ArrayBuffer) ||
                    "length" in t
                  )
                    return "number" != typeof t.length || K(t.length)
                      ? o(e, 0)
                      : d(e, t);
                  if ("Buffer" === t.type && $(t.data)) return d(e, t.data);
                }
                throw new TypeError(
                  "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                );
              }
              function g(e) {
                if (e >= r())
                  throw new RangeError(
                    "Attempt to allocate Buffer larger than maximum size: 0x" +
                      r().toString(16) +
                      " bytes"
                  );
                return 0 | e;
              }
              function m(e) {
                return +e != e && (e = 0), a.alloc(+e);
              }
              function v(e, t) {
                if (a.isBuffer(e)) return e.length;
                if (
                  "undefined" != typeof ArrayBuffer &&
                  "function" == typeof ArrayBuffer.isView &&
                  (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
                )
                  return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var n = e.length;
                if (0 === n) return 0;
                for (var i = !1; ; )
                  switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                      return n;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                      return F(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return 2 * n;
                    case "hex":
                      return n >>> 1;
                    case "base64":
                      return X(e).length;
                    default:
                      if (i) return F(e).length;
                      (t = ("" + t).toLowerCase()), (i = !0);
                  }
              }
              function y(e, t, n) {
                var i = !1;
                if (((void 0 === t || 0 > t) && (t = 0), t > this.length))
                  return "";
                if (
                  ((void 0 === n || n > this.length) && (n = this.length),
                  0 >= n)
                )
                  return "";
                if (((n >>>= 0), (t >>>= 0), t >= n)) return "";
                for (e || (e = "utf8"); ; )
                  switch (e) {
                    case "hex":
                      return Z(this, t, n);
                    case "utf8":
                    case "utf-8":
                      return j(this, t, n);
                    case "ascii":
                      return x(this, t, n);
                    case "latin1":
                    case "binary":
                      return T(this, t, n);
                    case "base64":
                      return N(this, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return P(this, t, n);
                    default:
                      if (i) throw new TypeError("Unknown encoding: " + e);
                      (e = (e + "").toLowerCase()), (i = !0);
                  }
              }
              function w(e, t, n) {
                var i = e[t];
                (e[t] = e[n]), (e[n] = i);
              }
              function b(e, t, n, i, r) {
                if (0 === e.length) return -1;
                if (
                  ("string" == typeof n
                    ? ((i = n), (n = 0))
                    : n > 2147483647
                    ? (n = 2147483647)
                    : -2147483648 > n && (n = -2147483648),
                  (n = +n),
                  isNaN(n) && (n = r ? 0 : e.length - 1),
                  0 > n && (n = e.length + n),
                  n >= e.length)
                ) {
                  if (r) return -1;
                  n = e.length - 1;
                } else if (0 > n) {
                  if (!r) return -1;
                  n = 0;
                }
                if (("string" == typeof t && (t = a.from(t, i)), a.isBuffer(t)))
                  return 0 === t.length ? -1 : I(e, t, n, i, r);
                if ("number" == typeof t)
                  return (
                    (t = 255 & t),
                    a.TYPED_ARRAY_SUPPORT &&
                    "function" == typeof Uint8Array.prototype.indexOf
                      ? r
                        ? Uint8Array.prototype.indexOf.call(e, t, n)
                        : Uint8Array.prototype.lastIndexOf.call(e, t, n)
                      : I(e, [t], n, i, r)
                  );
                throw new TypeError("val must be string, number or Buffer");
              }
              function I(e, t, n, i, r) {
                function o(e, t) {
                  return 1 === a ? e[t] : e.readUInt16BE(t * a);
                }
                var a = 1,
                  s = e.length,
                  l = t.length;
                if (
                  void 0 !== i &&
                  ((i = String(i).toLowerCase()),
                  "ucs2" === i ||
                    "ucs-2" === i ||
                    "utf16le" === i ||
                    "utf-16le" === i)
                ) {
                  if (e.length < 2 || t.length < 2) return -1;
                  (a = 2), (s /= 2), (l /= 2), (n /= 2);
                }
                var u;
                if (r) {
                  var c = -1;
                  for (u = n; s > u; u++)
                    if (o(e, u) === o(t, -1 === c ? 0 : u - c)) {
                      if ((-1 === c && (c = u), u - c + 1 === l)) return c * a;
                    } else -1 !== c && (u -= u - c), (c = -1);
                } else
                  for (n + l > s && (n = s - l), u = n; u >= 0; u--) {
                    for (var f = !0, d = 0; l > d; d++)
                      if (o(e, u + d) !== o(t, d)) {
                        f = !1;
                        break;
                      }
                    if (f) return u;
                  }
                return -1;
              }
              function M(e, t, n, i) {
                n = Number(n) || 0;
                var r = e.length - n;
                i ? ((i = Number(i)), i > r && (i = r)) : (i = r);
                var o = t.length;
                if (o % 2 !== 0) throw new TypeError("Invalid hex string");
                i > o / 2 && (i = o / 2);
                for (var a = 0; i > a; ++a) {
                  var s = parseInt(t.substr(2 * a, 2), 16);
                  if (isNaN(s)) return a;
                  e[n + a] = s;
                }
                return a;
              }
              function C(e, t, n, i) {
                return _(F(t, e.length - n), e, n, i);
              }
              function A(e, t, n, i) {
                return _(H(t), e, n, i);
              }
              function S(e, t, n, i) {
                return A(e, t, n, i);
              }
              function E(e, t, n, i) {
                return _(X(t), e, n, i);
              }
              function D(e, t, n, i) {
                return _(V(t, e.length - n), e, n, i);
              }
              function N(e, t, n) {
                return 0 === t && n === e.length
                  ? Q.fromByteArray(e)
                  : Q.fromByteArray(e.slice(t, n));
              }
              function j(e, t, n) {
                n = Math.min(e.length, n);
                for (var i = [], r = t; n > r; ) {
                  var o = e[r],
                    a = null,
                    s = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
                  if (n >= r + s) {
                    var l, u, c, f;
                    switch (s) {
                      case 1:
                        128 > o && (a = o);
                        break;
                      case 2:
                        (l = e[r + 1]),
                          128 === (192 & l) &&
                            ((f = ((31 & o) << 6) | (63 & l)),
                            f > 127 && (a = f));
                        break;
                      case 3:
                        (l = e[r + 1]),
                          (u = e[r + 2]),
                          128 === (192 & l) &&
                            128 === (192 & u) &&
                            ((f =
                              ((15 & o) << 12) | ((63 & l) << 6) | (63 & u)),
                            f > 2047 && (55296 > f || f > 57343) && (a = f));
                        break;
                      case 4:
                        (l = e[r + 1]),
                          (u = e[r + 2]),
                          (c = e[r + 3]),
                          128 === (192 & l) &&
                            128 === (192 & u) &&
                            128 === (192 & c) &&
                            ((f =
                              ((15 & o) << 18) |
                              ((63 & l) << 12) |
                              ((63 & u) << 6) |
                              (63 & c)),
                            f > 65535 && 1114112 > f && (a = f));
                    }
                  }
                  null === a
                    ? ((a = 65533), (s = 1))
                    : a > 65535 &&
                      ((a -= 65536),
                      i.push(((a >>> 10) & 1023) | 55296),
                      (a = 56320 | (1023 & a))),
                    i.push(a),
                    (r += s);
                }
                return L(i);
              }
              function L(e) {
                var t = e.length;
                if (ee >= t) return String.fromCharCode.apply(String, e);
                for (var n = "", i = 0; t > i; )
                  n += String.fromCharCode.apply(String, e.slice(i, (i += ee)));
                return n;
              }
              function x(e, t, n) {
                var i = "";
                n = Math.min(e.length, n);
                for (var r = t; n > r; ++r)
                  i += String.fromCharCode(127 & e[r]);
                return i;
              }
              function T(e, t, n) {
                var i = "";
                n = Math.min(e.length, n);
                for (var r = t; n > r; ++r) i += String.fromCharCode(e[r]);
                return i;
              }
              function Z(e, t, n) {
                var i = e.length;
                (!t || 0 > t) && (t = 0), (!n || 0 > n || n > i) && (n = i);
                for (var r = "", o = t; n > o; ++o) r += B(e[o]);
                return r;
              }
              function P(e, t, n) {
                for (var i = e.slice(t, n), r = "", o = 0; o < i.length; o += 2)
                  r += String.fromCharCode(i[o] + 256 * i[o + 1]);
                return r;
              }
              function k(e, t, n) {
                if (e % 1 !== 0 || 0 > e)
                  throw new RangeError("offset is not uint");
                if (e + t > n)
                  throw new RangeError("Trying to access beyond buffer length");
              }
              function Y(e, t, n, i, r, o) {
                if (!a.isBuffer(e))
                  throw new TypeError(
                    '"buffer" argument must be a Buffer instance'
                  );
                if (t > r || o > t)
                  throw new RangeError('"value" argument is out of bounds');
                if (n + i > e.length)
                  throw new RangeError("Index out of range");
              }
              function z(e, t, n, i) {
                0 > t && (t = 65535 + t + 1);
                for (var r = 0, o = Math.min(e.length - n, 2); o > r; ++r)
                  e[n + r] =
                    (t & (255 << (8 * (i ? r : 1 - r)))) >>>
                    (8 * (i ? r : 1 - r));
              }
              function G(e, t, n, i) {
                0 > t && (t = 4294967295 + t + 1);
                for (var r = 0, o = Math.min(e.length - n, 4); o > r; ++r)
                  e[n + r] = (t >>> (8 * (i ? r : 3 - r))) & 255;
              }
              function O(e, t, n, i, r, o) {
                if (n + i > e.length)
                  throw new RangeError("Index out of range");
                if (0 > n) throw new RangeError("Index out of range");
              }
              function R(e, t, n, i, r) {
                return (
                  r ||
                    O(
                      e,
                      t,
                      n,
                      4,
                      3.4028234663852886e38,
                      -3.4028234663852886e38
                    ),
                  q.write(e, t, n, i, 23, 4),
                  n + 4
                );
              }
              function W(e, t, n, i, r) {
                return (
                  r ||
                    O(
                      e,
                      t,
                      n,
                      8,
                      1.7976931348623157e308,
                      -1.7976931348623157e308
                    ),
                  q.write(e, t, n, i, 52, 8),
                  n + 8
                );
              }
              function U(e) {
                if (((e = J(e).replace(te, "")), e.length < 2)) return "";
                for (; e.length % 4 !== 0; ) e += "=";
                return e;
              }
              function J(e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
              }
              function B(e) {
                return 16 > e ? "0" + e.toString(16) : e.toString(16);
              }
              function F(e, t) {
                t = t || 1 / 0;
                for (var n, i = e.length, r = null, o = [], a = 0; i > a; ++a) {
                  if (((n = e.charCodeAt(a)), n > 55295 && 57344 > n)) {
                    if (!r) {
                      if (n > 56319) {
                        (t -= 3) > -1 && o.push(239, 191, 189);
                        continue;
                      }
                      if (a + 1 === i) {
                        (t -= 3) > -1 && o.push(239, 191, 189);
                        continue;
                      }
                      r = n;
                      continue;
                    }
                    if (56320 > n) {
                      (t -= 3) > -1 && o.push(239, 191, 189), (r = n);
                      continue;
                    }
                    n = (((r - 55296) << 10) | (n - 56320)) + 65536;
                  } else r && (t -= 3) > -1 && o.push(239, 191, 189);
                  if (((r = null), 128 > n)) {
                    if ((t -= 1) < 0) break;
                    o.push(n);
                  } else if (2048 > n) {
                    if ((t -= 2) < 0) break;
                    o.push((n >> 6) | 192, (63 & n) | 128);
                  } else if (65536 > n) {
                    if ((t -= 3) < 0) break;
                    o.push(
                      (n >> 12) | 224,
                      ((n >> 6) & 63) | 128,
                      (63 & n) | 128
                    );
                  } else {
                    if (!(1114112 > n)) throw new Error("Invalid code point");
                    if ((t -= 4) < 0) break;
                    o.push(
                      (n >> 18) | 240,
                      ((n >> 12) & 63) | 128,
                      ((n >> 6) & 63) | 128,
                      (63 & n) | 128
                    );
                  }
                }
                return o;
              }
              function H(e) {
                for (var t = [], n = 0; n < e.length; ++n)
                  t.push(255 & e.charCodeAt(n));
                return t;
              }
              function V(e, t) {
                for (
                  var n, i, r, o = [], a = 0;
                  a < e.length && !((t -= 2) < 0);
                  ++a
                )
                  (n = e.charCodeAt(a)),
                    (i = n >> 8),
                    (r = n % 256),
                    o.push(r),
                    o.push(i);
                return o;
              }
              function X(e) {
                return Q.toByteArray(U(e));
              }
              function _(e, t, n, i) {
                for (
                  var r = 0;
                  i > r && !(r + n >= t.length || r >= e.length);
                  ++r
                )
                  t[r + n] = e[r];
                return r;
              }
              function K(e) {
                return e !== e;
              }
              var Q = e("base64-js"),
                q = e("ieee754"),
                $ = e("isarray");
              (n.Buffer = a),
                (n.SlowBuffer = m),
                (n.INSPECT_MAX_BYTES = 50),
                (a.TYPED_ARRAY_SUPPORT =
                  void 0 !== t.TYPED_ARRAY_SUPPORT
                    ? t.TYPED_ARRAY_SUPPORT
                    : i()),
                (n.kMaxLength = r()),
                (a.poolSize = 8192),
                (a._augment = function (e) {
                  return (e.__proto__ = a.prototype), e;
                }),
                (a.from = function (e, t, n) {
                  return s(null, e, t, n);
                }),
                a.TYPED_ARRAY_SUPPORT &&
                  ((a.prototype.__proto__ = Uint8Array.prototype),
                  (a.__proto__ = Uint8Array),
                  "undefined" != typeof Symbol &&
                    Symbol.species &&
                    a[Symbol.species] === a &&
                    Object.defineProperty(a, Symbol.species, {
                      value: null,
                      configurable: !0,
                    })),
                (a.alloc = function (e, t, n) {
                  return u(null, e, t, n);
                }),
                (a.allocUnsafe = function (e) {
                  return c(null, e);
                }),
                (a.allocUnsafeSlow = function (e) {
                  return c(null, e);
                }),
                (a.isBuffer = function (e) {
                  return !(null == e || !e._isBuffer);
                }),
                (a.compare = function (e, t) {
                  if (!a.isBuffer(e) || !a.isBuffer(t))
                    throw new TypeError("Arguments must be Buffers");
                  if (e === t) return 0;
                  for (
                    var n = e.length, i = t.length, r = 0, o = Math.min(n, i);
                    o > r;
                    ++r
                  )
                    if (e[r] !== t[r]) {
                      (n = e[r]), (i = t[r]);
                      break;
                    }
                  return i > n ? -1 : n > i ? 1 : 0;
                }),
                (a.isEncoding = function (e) {
                  switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return !0;
                    default:
                      return !1;
                  }
                }),
                (a.concat = function (e, t) {
                  if (!$(e))
                    throw new TypeError(
                      '"list" argument must be an Array of Buffers'
                    );
                  if (0 === e.length) return a.alloc(0);
                  var n;
                  if (void 0 === t)
                    for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                  var i = a.allocUnsafe(t),
                    r = 0;
                  for (n = 0; n < e.length; ++n) {
                    var o = e[n];
                    if (!a.isBuffer(o))
                      throw new TypeError(
                        '"list" argument must be an Array of Buffers'
                      );
                    o.copy(i, r), (r += o.length);
                  }
                  return i;
                }),
                (a.byteLength = v),
                (a.prototype._isBuffer = !0),
                (a.prototype.swap16 = function () {
                  var e = this.length;
                  if (e % 2 !== 0)
                    throw new RangeError(
                      "Buffer size must be a multiple of 16-bits"
                    );
                  for (var t = 0; e > t; t += 2) w(this, t, t + 1);
                  return this;
                }),
                (a.prototype.swap32 = function () {
                  var e = this.length;
                  if (e % 4 !== 0)
                    throw new RangeError(
                      "Buffer size must be a multiple of 32-bits"
                    );
                  for (var t = 0; e > t; t += 4)
                    w(this, t, t + 3), w(this, t + 1, t + 2);
                  return this;
                }),
                (a.prototype.swap64 = function () {
                  var e = this.length;
                  if (e % 8 !== 0)
                    throw new RangeError(
                      "Buffer size must be a multiple of 64-bits"
                    );
                  for (var t = 0; e > t; t += 8)
                    w(this, t, t + 7),
                      w(this, t + 1, t + 6),
                      w(this, t + 2, t + 5),
                      w(this, t + 3, t + 4);
                  return this;
                }),
                (a.prototype.toString = function () {
                  var e = 0 | this.length;
                  return 0 === e
                    ? ""
                    : 0 === arguments.length
                    ? j(this, 0, e)
                    : y.apply(this, arguments);
                }),
                (a.prototype.equals = function (e) {
                  if (!a.isBuffer(e))
                    throw new TypeError("Argument must be a Buffer");
                  return this === e ? !0 : 0 === a.compare(this, e);
                }),
                (a.prototype.inspect = function () {
                  var e = "",
                    t = n.INSPECT_MAX_BYTES;
                  return (
                    this.length > 0 &&
                      ((e = this.toString("hex", 0, t)
                        .match(/.{2}/g)
                        .join(" ")),
                      this.length > t && (e += " ... ")),
                    "<Buffer " + e + ">"
                  );
                }),
                (a.prototype.compare = function (e, t, n, i, r) {
                  if (!a.isBuffer(e))
                    throw new TypeError("Argument must be a Buffer");
                  if (
                    (void 0 === t && (t = 0),
                    void 0 === n && (n = e ? e.length : 0),
                    void 0 === i && (i = 0),
                    void 0 === r && (r = this.length),
                    0 > t || n > e.length || 0 > i || r > this.length)
                  )
                    throw new RangeError("out of range index");
                  if (i >= r && t >= n) return 0;
                  if (i >= r) return -1;
                  if (t >= n) return 1;
                  if (
                    ((t >>>= 0), (n >>>= 0), (i >>>= 0), (r >>>= 0), this === e)
                  )
                    return 0;
                  for (
                    var o = r - i,
                      s = n - t,
                      l = Math.min(o, s),
                      u = this.slice(i, r),
                      c = e.slice(t, n),
                      f = 0;
                    l > f;
                    ++f
                  )
                    if (u[f] !== c[f]) {
                      (o = u[f]), (s = c[f]);
                      break;
                    }
                  return s > o ? -1 : o > s ? 1 : 0;
                }),
                (a.prototype.includes = function (e, t, n) {
                  return -1 !== this.indexOf(e, t, n);
                }),
                (a.prototype.indexOf = function (e, t, n) {
                  return b(this, e, t, n, !0);
                }),
                (a.prototype.lastIndexOf = function (e, t, n) {
                  return b(this, e, t, n, !1);
                }),
                (a.prototype.write = function (e, t, n, i) {
                  if (void 0 === t) (i = "utf8"), (n = this.length), (t = 0);
                  else if (void 0 === n && "string" == typeof t)
                    (i = t), (n = this.length), (t = 0);
                  else {
                    if (!isFinite(t))
                      throw new Error(
                        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                      );
                    (t = 0 | t),
                      isFinite(n)
                        ? ((n = 0 | n), void 0 === i && (i = "utf8"))
                        : ((i = n), (n = void 0));
                  }
                  var r = this.length - t;
                  if (
                    ((void 0 === n || n > r) && (n = r),
                    (e.length > 0 && (0 > n || 0 > t)) || t > this.length)
                  )
                    throw new RangeError(
                      "Attempt to write outside buffer bounds"
                    );
                  i || (i = "utf8");
                  for (var o = !1; ; )
                    switch (i) {
                      case "hex":
                        return M(this, e, t, n);
                      case "utf8":
                      case "utf-8":
                        return C(this, e, t, n);
                      case "ascii":
                        return A(this, e, t, n);
                      case "latin1":
                      case "binary":
                        return S(this, e, t, n);
                      case "base64":
                        return E(this, e, t, n);
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return D(this, e, t, n);
                      default:
                        if (o) throw new TypeError("Unknown encoding: " + i);
                        (i = ("" + i).toLowerCase()), (o = !0);
                    }
                }),
                (a.prototype.toJSON = function () {
                  return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0),
                  };
                });
              var ee = 4096;
              (a.prototype.slice = function (e, t) {
                var n = this.length;
                (e = ~~e),
                  (t = void 0 === t ? n : ~~t),
                  0 > e ? ((e += n), 0 > e && (e = 0)) : e > n && (e = n),
                  0 > t ? ((t += n), 0 > t && (t = 0)) : t > n && (t = n),
                  e > t && (t = e);
                var i;
                if (a.TYPED_ARRAY_SUPPORT)
                  (i = this.subarray(e, t)), (i.__proto__ = a.prototype);
                else {
                  var r = t - e;
                  i = new a(r, void 0);
                  for (var o = 0; r > o; ++o) i[o] = this[o + e];
                }
                return i;
              }),
                (a.prototype.readUIntLE = function (e, t, n) {
                  (e = 0 | e), (t = 0 | t), n || k(e, t, this.length);
                  for (var i = this[e], r = 1, o = 0; ++o < t && (r *= 256); )
                    i += this[e + o] * r;
                  return i;
                }),
                (a.prototype.readUIntBE = function (e, t, n) {
                  (e = 0 | e), (t = 0 | t), n || k(e, t, this.length);
                  for (var i = this[e + --t], r = 1; t > 0 && (r *= 256); )
                    i += this[e + --t] * r;
                  return i;
                }),
                (a.prototype.readUInt8 = function (e, t) {
                  return t || k(e, 1, this.length), this[e];
                }),
                (a.prototype.readUInt16LE = function (e, t) {
                  return (
                    t || k(e, 2, this.length), this[e] | (this[e + 1] << 8)
                  );
                }),
                (a.prototype.readUInt16BE = function (e, t) {
                  return (
                    t || k(e, 2, this.length), (this[e] << 8) | this[e + 1]
                  );
                }),
                (a.prototype.readUInt32LE = function (e, t) {
                  return (
                    t || k(e, 4, this.length),
                    (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                      16777216 * this[e + 3]
                  );
                }),
                (a.prototype.readUInt32BE = function (e, t) {
                  return (
                    t || k(e, 4, this.length),
                    16777216 * this[e] +
                      ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
                  );
                }),
                (a.prototype.readIntLE = function (e, t, n) {
                  (e = 0 | e), (t = 0 | t), n || k(e, t, this.length);
                  for (var i = this[e], r = 1, o = 0; ++o < t && (r *= 256); )
                    i += this[e + o] * r;
                  return (r *= 128), i >= r && (i -= Math.pow(2, 8 * t)), i;
                }),
                (a.prototype.readIntBE = function (e, t, n) {
                  (e = 0 | e), (t = 0 | t), n || k(e, t, this.length);
                  for (
                    var i = t, r = 1, o = this[e + --i];
                    i > 0 && (r *= 256);

                  )
                    o += this[e + --i] * r;
                  return (r *= 128), o >= r && (o -= Math.pow(2, 8 * t)), o;
                }),
                (a.prototype.readInt8 = function (e, t) {
                  return (
                    t || k(e, 1, this.length),
                    128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                  );
                }),
                (a.prototype.readInt16LE = function (e, t) {
                  t || k(e, 2, this.length);
                  var n = this[e] | (this[e + 1] << 8);
                  return 32768 & n ? 4294901760 | n : n;
                }),
                (a.prototype.readInt16BE = function (e, t) {
                  t || k(e, 2, this.length);
                  var n = this[e + 1] | (this[e] << 8);
                  return 32768 & n ? 4294901760 | n : n;
                }),
                (a.prototype.readInt32LE = function (e, t) {
                  return (
                    t || k(e, 4, this.length),
                    this[e] |
                      (this[e + 1] << 8) |
                      (this[e + 2] << 16) |
                      (this[e + 3] << 24)
                  );
                }),
                (a.prototype.readInt32BE = function (e, t) {
                  return (
                    t || k(e, 4, this.length),
                    (this[e] << 24) |
                      (this[e + 1] << 16) |
                      (this[e + 2] << 8) |
                      this[e + 3]
                  );
                }),
                (a.prototype.readFloatLE = function (e, t) {
                  return t || k(e, 4, this.length), q.read(this, e, !0, 23, 4);
                }),
                (a.prototype.readFloatBE = function (e, t) {
                  return t || k(e, 4, this.length), q.read(this, e, !1, 23, 4);
                }),
                (a.prototype.readDoubleLE = function (e, t) {
                  return t || k(e, 8, this.length), q.read(this, e, !0, 52, 8);
                }),
                (a.prototype.readDoubleBE = function (e, t) {
                  return t || k(e, 8, this.length), q.read(this, e, !1, 52, 8);
                }),
                (a.prototype.writeUIntLE = function (e, t, n, i) {
                  if (((e = +e), (t = 0 | t), (n = 0 | n), !i)) {
                    var r = Math.pow(2, 8 * n) - 1;
                    Y(this, e, t, n, r, 0);
                  }
                  var o = 1,
                    a = 0;
                  for (this[t] = 255 & e; ++a < n && (o *= 256); )
                    this[t + a] = (e / o) & 255;
                  return t + n;
                }),
                (a.prototype.writeUIntBE = function (e, t, n, i) {
                  if (((e = +e), (t = 0 | t), (n = 0 | n), !i)) {
                    var r = Math.pow(2, 8 * n) - 1;
                    Y(this, e, t, n, r, 0);
                  }
                  var o = n - 1,
                    a = 1;
                  for (this[t + o] = 255 & e; --o >= 0 && (a *= 256); )
                    this[t + o] = (e / a) & 255;
                  return t + n;
                }),
                (a.prototype.writeUInt8 = function (e, t, n) {
                  return (
                    (e = +e),
                    (t = 0 | t),
                    n || Y(this, e, t, 1, 255, 0),
                    a.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                    (this[t] = 255 & e),
                    t + 1
                  );
                }),
                (a.prototype.writeUInt16LE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t = 0 | t),
                    n || Y(this, e, t, 2, 65535, 0),
                    a.TYPED_ARRAY_SUPPORT
                      ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                      : z(this, e, t, !0),
                    t + 2
                  );
                }),
                (a.prototype.writeUInt16BE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t = 0 | t),
                    n || Y(this, e, t, 2, 65535, 0),
                    a.TYPED_ARRAY_SUPPORT
                      ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                      : z(this, e, t, !1),
                    t + 2
                  );
                }),
                (a.prototype.writeUInt32LE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t = 0 | t),
                    n || Y(this, e, t, 4, 4294967295, 0),
                    a.TYPED_ARRAY_SUPPORT
                      ? ((this[t + 3] = e >>> 24),
                        (this[t + 2] = e >>> 16),
                        (this[t + 1] = e >>> 8),
                        (this[t] = 255 & e))
                      : G(this, e, t, !0),
                    t + 4
                  );
                }),
                (a.prototype.writeUInt32BE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t = 0 | t),
                    n || Y(this, e, t, 4, 4294967295, 0),
                    a.TYPED_ARRAY_SUPPORT
                      ? ((this[t] = e >>> 24),
                        (this[t + 1] = e >>> 16),
                        (this[t + 2] = e >>> 8),
                        (this[t + 3] = 255 & e))
                      : G(this, e, t, !1),
                    t + 4
                  );
                }),
                (a.prototype.writeIntLE = function (e, t, n, i) {
                  if (((e = +e), (t = 0 | t), !i)) {
                    var r = Math.pow(2, 8 * n - 1);
                    Y(this, e, t, n, r - 1, -r);
                  }
                  var o = 0,
                    a = 1,
                    s = 0;
                  for (this[t] = 255 & e; ++o < n && (a *= 256); )
                    0 > e && 0 === s && 0 !== this[t + o - 1] && (s = 1),
                      (this[t + o] = (((e / a) >> 0) - s) & 255);
                  return t + n;
                }),
                (a.prototype.writeIntBE = function (e, t, n, i) {
                  if (((e = +e), (t = 0 | t), !i)) {
                    var r = Math.pow(2, 8 * n - 1);
                    Y(this, e, t, n, r - 1, -r);
                  }
                  var o = n - 1,
                    a = 1,
                    s = 0;
                  for (this[t + o] = 255 & e; --o >= 0 && (a *= 256); )
                    0 > e && 0 === s && 0 !== this[t + o + 1] && (s = 1),
                      (this[t + o] = (((e / a) >> 0) - s) & 255);
                  return t + n;
                }),
                (a.prototype.writeInt8 = function (e, t, n) {
                  return (
                    (e = +e),
                    (t = 0 | t),
                    n || Y(this, e, t, 1, 127, -128),
                    a.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                    0 > e && (e = 255 + e + 1),
                    (this[t] = 255 & e),
                    t + 1
                  );
                }),
                (a.prototype.writeInt16LE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t = 0 | t),
                    n || Y(this, e, t, 2, 32767, -32768),
                    a.TYPED_ARRAY_SUPPORT
                      ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                      : z(this, e, t, !0),
                    t + 2
                  );
                }),
                (a.prototype.writeInt16BE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t = 0 | t),
                    n || Y(this, e, t, 2, 32767, -32768),
                    a.TYPED_ARRAY_SUPPORT
                      ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                      : z(this, e, t, !1),
                    t + 2
                  );
                }),
                (a.prototype.writeInt32LE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t = 0 | t),
                    n || Y(this, e, t, 4, 2147483647, -2147483648),
                    a.TYPED_ARRAY_SUPPORT
                      ? ((this[t] = 255 & e),
                        (this[t + 1] = e >>> 8),
                        (this[t + 2] = e >>> 16),
                        (this[t + 3] = e >>> 24))
                      : G(this, e, t, !0),
                    t + 4
                  );
                }),
                (a.prototype.writeInt32BE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t = 0 | t),
                    n || Y(this, e, t, 4, 2147483647, -2147483648),
                    0 > e && (e = 4294967295 + e + 1),
                    a.TYPED_ARRAY_SUPPORT
                      ? ((this[t] = e >>> 24),
                        (this[t + 1] = e >>> 16),
                        (this[t + 2] = e >>> 8),
                        (this[t + 3] = 255 & e))
                      : G(this, e, t, !1),
                    t + 4
                  );
                }),
                (a.prototype.writeFloatLE = function (e, t, n) {
                  return R(this, e, t, !0, n);
                }),
                (a.prototype.writeFloatBE = function (e, t, n) {
                  return R(this, e, t, !1, n);
                }),
                (a.prototype.writeDoubleLE = function (e, t, n) {
                  return W(this, e, t, !0, n);
                }),
                (a.prototype.writeDoubleBE = function (e, t, n) {
                  return W(this, e, t, !1, n);
                }),
                (a.prototype.copy = function (e, t, n, i) {
                  if (
                    (n || (n = 0),
                    i || 0 === i || (i = this.length),
                    t >= e.length && (t = e.length),
                    t || (t = 0),
                    i > 0 && n > i && (i = n),
                    i === n)
                  )
                    return 0;
                  if (0 === e.length || 0 === this.length) return 0;
                  if (0 > t) throw new RangeError("targetStart out of bounds");
                  if (0 > n || n >= this.length)
                    throw new RangeError("sourceStart out of bounds");
                  if (0 > i) throw new RangeError("sourceEnd out of bounds");
                  i > this.length && (i = this.length),
                    e.length - t < i - n && (i = e.length - t + n);
                  var r,
                    o = i - n;
                  if (this === e && t > n && i > t)
                    for (r = o - 1; r >= 0; --r) e[r + t] = this[r + n];
                  else if (1e3 > o || !a.TYPED_ARRAY_SUPPORT)
                    for (r = 0; o > r; ++r) e[r + t] = this[r + n];
                  else
                    Uint8Array.prototype.set.call(
                      e,
                      this.subarray(n, n + o),
                      t
                    );
                  return o;
                }),
                (a.prototype.fill = function (e, t, n, i) {
                  if ("string" == typeof e) {
                    if (
                      ("string" == typeof t
                        ? ((i = t), (t = 0), (n = this.length))
                        : "string" == typeof n && ((i = n), (n = this.length)),
                      1 === e.length)
                    ) {
                      var r = e.charCodeAt(0);
                      256 > r && (e = r);
                    }
                    if (void 0 !== i && "string" != typeof i)
                      throw new TypeError("encoding must be a string");
                    if ("string" == typeof i && !a.isEncoding(i))
                      throw new TypeError("Unknown encoding: " + i);
                  } else "number" == typeof e && (e = 255 & e);
                  if (0 > t || this.length < t || this.length < n)
                    throw new RangeError("Out of range index");
                  if (t >= n) return this;
                  (t >>>= 0),
                    (n = void 0 === n ? this.length : n >>> 0),
                    e || (e = 0);
                  var o;
                  if ("number" == typeof e) for (o = t; n > o; ++o) this[o] = e;
                  else {
                    var s = a.isBuffer(e) ? e : F(new a(e, i).toString()),
                      l = s.length;
                    for (o = 0; n - t > o; ++o) this[o + t] = s[o % l];
                  }
                  return this;
                });
              var te = /[^+\/0-9A-Za-z-_]/g;
            }.call(
              this,
              "undefined" != typeof global
                ? global
                : "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                ? window
                : {}
            ));
          },
          { "base64-js": 33, ieee754: 40, isarray: 43 },
        ],
        36: [
          function (e, t, n) {
            function i(e) {
              function t(e) {
                var t = c();
                a(t, e) > -1 || (t.push(e), f(t));
              }
              function n(e) {
                var t = c(),
                  n = a(t, e);
                -1 !== n && (t.splice(n, 1), f(t));
              }
              function i(e) {
                return a(c(), e) > -1;
              }
              function s(e) {
                return i(e) ? (n(e), !1) : (t(e), !0);
              }
              function l() {
                return e.className;
              }
              function u(e) {
                var t = c();
                return t[e] || null;
              }
              function c() {
                var t = e.className;
                return r(t.split(" "), o);
              }
              function f(t) {
                var n = t.length;
                (e.className = t.join(" ")), (p.length = n);
                for (var i = 0; i < t.length; i++) p[i] = t[i];
                delete t[n];
              }
              var d = e.classList;
              if (d) return d;
              var p = {
                add: t,
                remove: n,
                contains: i,
                toggle: s,
                toString: l,
                length: 0,
                item: u,
              };
              return p;
            }
            function r(e, t) {
              for (var n = [], i = 0; i < e.length; i++)
                t(e[i]) && n.push(e[i]);
              return n;
            }
            function o(e) {
              return !!e;
            }
            var a = e("indexof");
            t.exports = i;
          },
          { indexof: 41 },
        ],
        37: [
          function (e, t, n) {
            function i(e, t, n, i) {
              return (
                (n = window.getComputedStyle),
                (i = n ? n(e) : e.currentStyle),
                i
                  ? i[
                      t.replace(/-(\w)/gi, function (e, t) {
                        return t.toUpperCase();
                      })
                    ]
                  : void 0
              );
            }
            t.exports = i;
          },
          {},
        ],
        38: [
          function (t, n, i) {
            !(function (t, r) {
              "use strict";
              "function" == typeof e && e.amd
                ? e(r)
                : "object" == typeof i
                ? (n.exports = r())
                : (t.returnExports = r());
            })(this, function () {
              var e,
                t,
                n = Array,
                i = n.prototype,
                r = Object,
                o = r.prototype,
                a = Function,
                s = a.prototype,
                l = String,
                u = l.prototype,
                c = Number,
                f = c.prototype,
                d = i.slice,
                p = i.splice,
                h = i.push,
                g = i.unshift,
                m = i.concat,
                v = i.join,
                y = s.call,
                w = s.apply,
                b = Math.max,
                I = Math.min,
                M = o.toString,
                C =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.toStringTag,
                A = Function.prototype.toString,
                S = /^\s*class /,
                E = function (e) {
                  try {
                    var t = A.call(e),
                      n = t.replace(/\/\/.*\n/g, ""),
                      i = n.replace(/\/\*[.\s\S]*\*\//g, ""),
                      r = i.replace(/\n/gm, " ").replace(/ {2}/g, " ");
                    return S.test(r);
                  } catch (o) {
                    return !1;
                  }
                },
                D = function (e) {
                  try {
                    return E(e) ? !1 : (A.call(e), !0);
                  } catch (t) {
                    return !1;
                  }
                },
                N = "[object Function]",
                j = "[object GeneratorFunction]",
                e = function (e) {
                  if (!e) return !1;
                  if ("function" != typeof e && "object" != typeof e) return !1;
                  if (C) return D(e);
                  if (E(e)) return !1;
                  var t = M.call(e);
                  return t === N || t === j;
                },
                L = RegExp.prototype.exec,
                x = function (e) {
                  try {
                    return L.call(e), !0;
                  } catch (t) {
                    return !1;
                  }
                },
                T = "[object RegExp]";
              t = function (e) {
                return "object" != typeof e ? !1 : C ? x(e) : M.call(e) === T;
              };
              var Z,
                P = String.prototype.valueOf,
                k = function (e) {
                  try {
                    return P.call(e), !0;
                  } catch (t) {
                    return !1;
                  }
                },
                Y = "[object String]";
              Z = function (e) {
                return "string" == typeof e
                  ? !0
                  : "object" != typeof e
                  ? !1
                  : C
                  ? k(e)
                  : M.call(e) === Y;
              };
              var z =
                  r.defineProperty &&
                  (function () {
                    try {
                      var e = {};
                      r.defineProperty(e, "x", { enumerable: !1, value: e });
                      for (var t in e) return !1;
                      return e.x === e;
                    } catch (n) {
                      return !1;
                    }
                  })(),
                G = (function (e) {
                  var t;
                  return (
                    (t = z
                      ? function (e, t, n, i) {
                          (!i && t in e) ||
                            r.defineProperty(e, t, {
                              configurable: !0,
                              enumerable: !1,
                              writable: !0,
                              value: n,
                            });
                        }
                      : function (e, t, n, i) {
                          (!i && t in e) || (e[t] = n);
                        }),
                    function (n, i, r) {
                      for (var o in i) e.call(i, o) && t(n, o, i[o], r);
                    }
                  );
                })(o.hasOwnProperty),
                O = function (e) {
                  var t = typeof e;
                  return null === e || ("object" !== t && "function" !== t);
                },
                R =
                  c.isNaN ||
                  function (e) {
                    return e !== e;
                  },
                W = {
                  ToInteger: function (e) {
                    var t = +e;
                    return (
                      R(t)
                        ? (t = 0)
                        : 0 !== t &&
                          t !== 1 / 0 &&
                          t !== -(1 / 0) &&
                          (t = (t > 0 || -1) * Math.floor(Math.abs(t))),
                      t
                    );
                  },
                  ToPrimitive: function (t) {
                    var n, i, r;
                    if (O(t)) return t;
                    if (((i = t.valueOf), e(i) && ((n = i.call(t)), O(n))))
                      return n;
                    if (((r = t.toString), e(r) && ((n = r.call(t)), O(n))))
                      return n;
                    throw new TypeError();
                  },
                  ToObject: function (e) {
                    if (null == e)
                      throw new TypeError("can't convert " + e + " to object");
                    return r(e);
                  },
                  ToUint32: function (e) {
                    return e >>> 0;
                  },
                },
                U = function () {};
              G(s, {
                bind: function (t) {
                  var n = this;
                  if (!e(n))
                    throw new TypeError(
                      "Function.prototype.bind called on incompatible " + n
                    );
                  for (
                    var i,
                      o = d.call(arguments, 1),
                      s = function () {
                        if (this instanceof i) {
                          var e = w.call(n, this, m.call(o, d.call(arguments)));
                          return r(e) === e ? e : this;
                        }
                        return w.call(n, t, m.call(o, d.call(arguments)));
                      },
                      l = b(0, n.length - o.length),
                      u = [],
                      c = 0;
                    l > c;
                    c++
                  )
                    h.call(u, "$" + c);
                  return (
                    (i = a(
                      "binder",
                      "return function (" +
                        v.call(u, ",") +
                        "){ return binder.apply(this, arguments); }"
                    )(s)),
                    n.prototype &&
                      ((U.prototype = n.prototype),
                      (i.prototype = new U()),
                      (U.prototype = null)),
                    i
                  );
                },
              });
              var J = y.bind(o.hasOwnProperty),
                B = y.bind(o.toString),
                F = y.bind(d),
                H = w.bind(d),
                V = y.bind(u.slice),
                X = y.bind(u.split),
                _ = y.bind(u.indexOf),
                K = y.bind(h),
                Q = y.bind(o.propertyIsEnumerable),
                q = y.bind(i.sort),
                $ =
                  n.isArray ||
                  function (e) {
                    return "[object Array]" === B(e);
                  },
                ee = 1 !== [].unshift(0);
              G(
                i,
                {
                  unshift: function () {
                    return g.apply(this, arguments), this.length;
                  },
                },
                ee
              ),
                G(n, { isArray: $ });
              var te = r("a"),
                ne = "a" !== te[0] || !(0 in te),
                ie = function (e) {
                  var t = !0,
                    n = !0,
                    i = !1;
                  if (e)
                    try {
                      e.call("foo", function (e, n, i) {
                        "object" != typeof i && (t = !1);
                      }),
                        e.call(
                          [1],
                          function () {
                            "use strict";
                            n = "string" == typeof this;
                          },
                          "x"
                        );
                    } catch (r) {
                      i = !0;
                    }
                  return !!e && !i && t && n;
                };
              G(
                i,
                {
                  forEach: function (t) {
                    var n,
                      i = W.ToObject(this),
                      r = ne && Z(this) ? X(this, "") : i,
                      o = -1,
                      a = W.ToUint32(r.length);
                    if ((arguments.length > 1 && (n = arguments[1]), !e(t)))
                      throw new TypeError(
                        "Array.prototype.forEach callback must be a function"
                      );
                    for (; ++o < a; )
                      o in r &&
                        ("undefined" == typeof n
                          ? t(r[o], o, i)
                          : t.call(n, r[o], o, i));
                  },
                },
                !ie(i.forEach)
              ),
                G(
                  i,
                  {
                    map: function (t) {
                      var i,
                        r = W.ToObject(this),
                        o = ne && Z(this) ? X(this, "") : r,
                        a = W.ToUint32(o.length),
                        s = n(a);
                      if ((arguments.length > 1 && (i = arguments[1]), !e(t)))
                        throw new TypeError(
                          "Array.prototype.map callback must be a function"
                        );
                      for (var l = 0; a > l; l++)
                        l in o &&
                          ("undefined" == typeof i
                            ? (s[l] = t(o[l], l, r))
                            : (s[l] = t.call(i, o[l], l, r)));
                      return s;
                    },
                  },
                  !ie(i.map)
                ),
                G(
                  i,
                  {
                    filter: function (t) {
                      var n,
                        i,
                        r = W.ToObject(this),
                        o = ne && Z(this) ? X(this, "") : r,
                        a = W.ToUint32(o.length),
                        s = [];
                      if ((arguments.length > 1 && (i = arguments[1]), !e(t)))
                        throw new TypeError(
                          "Array.prototype.filter callback must be a function"
                        );
                      for (var l = 0; a > l; l++)
                        l in o &&
                          ((n = o[l]),
                          ("undefined" == typeof i
                            ? t(n, l, r)
                            : t.call(i, n, l, r)) && K(s, n));
                      return s;
                    },
                  },
                  !ie(i.filter)
                ),
                G(
                  i,
                  {
                    every: function (t) {
                      var n,
                        i = W.ToObject(this),
                        r = ne && Z(this) ? X(this, "") : i,
                        o = W.ToUint32(r.length);
                      if ((arguments.length > 1 && (n = arguments[1]), !e(t)))
                        throw new TypeError(
                          "Array.prototype.every callback must be a function"
                        );
                      for (var a = 0; o > a; a++)
                        if (
                          a in r &&
                          !("undefined" == typeof n
                            ? t(r[a], a, i)
                            : t.call(n, r[a], a, i))
                        )
                          return !1;
                      return !0;
                    },
                  },
                  !ie(i.every)
                ),
                G(
                  i,
                  {
                    some: function (t) {
                      var n,
                        i = W.ToObject(this),
                        r = ne && Z(this) ? X(this, "") : i,
                        o = W.ToUint32(r.length);
                      if ((arguments.length > 1 && (n = arguments[1]), !e(t)))
                        throw new TypeError(
                          "Array.prototype.some callback must be a function"
                        );
                      for (var a = 0; o > a; a++)
                        if (
                          a in r &&
                          ("undefined" == typeof n
                            ? t(r[a], a, i)
                            : t.call(n, r[a], a, i))
                        )
                          return !0;
                      return !1;
                    },
                  },
                  !ie(i.some)
                );
              var re = !1;
              i.reduce &&
                (re =
                  "object" ==
                  typeof i.reduce.call("es5", function (e, t, n, i) {
                    return i;
                  })),
                G(
                  i,
                  {
                    reduce: function (t) {
                      var n = W.ToObject(this),
                        i = ne && Z(this) ? X(this, "") : n,
                        r = W.ToUint32(i.length);
                      if (!e(t))
                        throw new TypeError(
                          "Array.prototype.reduce callback must be a function"
                        );
                      if (0 === r && 1 === arguments.length)
                        throw new TypeError(
                          "reduce of empty array with no initial value"
                        );
                      var o,
                        a = 0;
                      if (arguments.length >= 2) o = arguments[1];
                      else
                        for (;;) {
                          if (a in i) {
                            o = i[a++];
                            break;
                          }
                          if (++a >= r)
                            throw new TypeError(
                              "reduce of empty array with no initial value"
                            );
                        }
                      for (; r > a; a++) a in i && (o = t(o, i[a], a, n));
                      return o;
                    },
                  },
                  !re
                );
              var oe = !1;
              i.reduceRight &&
                (oe =
                  "object" ==
                  typeof i.reduceRight.call("es5", function (e, t, n, i) {
                    return i;
                  })),
                G(
                  i,
                  {
                    reduceRight: function (t) {
                      var n = W.ToObject(this),
                        i = ne && Z(this) ? X(this, "") : n,
                        r = W.ToUint32(i.length);
                      if (!e(t))
                        throw new TypeError(
                          "Array.prototype.reduceRight callback must be a function"
                        );
                      if (0 === r && 1 === arguments.length)
                        throw new TypeError(
                          "reduceRight of empty array with no initial value"
                        );
                      var o,
                        a = r - 1;
                      if (arguments.length >= 2) o = arguments[1];
                      else
                        for (;;) {
                          if (a in i) {
                            o = i[a--];
                            break;
                          }
                          if (--a < 0)
                            throw new TypeError(
                              "reduceRight of empty array with no initial value"
                            );
                        }
                      if (0 > a) return o;
                      do a in i && (o = t(o, i[a], a, n));
                      while (a--);
                      return o;
                    },
                  },
                  !oe
                );
              var ae = i.indexOf && -1 !== [0, 1].indexOf(1, 2);
              G(
                i,
                {
                  indexOf: function (e) {
                    var t = ne && Z(this) ? X(this, "") : W.ToObject(this),
                      n = W.ToUint32(t.length);
                    if (0 === n) return -1;
                    var i = 0;
                    for (
                      arguments.length > 1 && (i = W.ToInteger(arguments[1])),
                        i = i >= 0 ? i : b(0, n + i);
                      n > i;
                      i++
                    )
                      if (i in t && t[i] === e) return i;
                    return -1;
                  },
                },
                ae
              );
              var se = i.lastIndexOf && -1 !== [0, 1].lastIndexOf(0, -3);
              G(
                i,
                {
                  lastIndexOf: function (e) {
                    var t = ne && Z(this) ? X(this, "") : W.ToObject(this),
                      n = W.ToUint32(t.length);
                    if (0 === n) return -1;
                    var i = n - 1;
                    for (
                      arguments.length > 1 &&
                        (i = I(i, W.ToInteger(arguments[1]))),
                        i = i >= 0 ? i : n - Math.abs(i);
                      i >= 0;
                      i--
                    )
                      if (i in t && e === t[i]) return i;
                    return -1;
                  },
                },
                se
              );
              var le = (function () {
                var e = [1, 2],
                  t = e.splice();
                return 2 === e.length && $(t) && 0 === t.length;
              })();
              G(
                i,
                {
                  splice: function (e, t) {
                    return 0 === arguments.length
                      ? []
                      : p.apply(this, arguments);
                  },
                },
                !le
              );
              var ue = (function () {
                var e = {};
                return i.splice.call(e, 0, 0, 1), 1 === e.length;
              })();
              G(
                i,
                {
                  splice: function (e, t) {
                    if (0 === arguments.length) return [];
                    var n = arguments;
                    return (
                      (this.length = b(W.ToInteger(this.length), 0)),
                      arguments.length > 0 &&
                        "number" != typeof t &&
                        ((n = F(arguments)),
                        n.length < 2
                          ? K(n, this.length - e)
                          : (n[1] = W.ToInteger(t))),
                      p.apply(this, n)
                    );
                  },
                },
                !ue
              );
              var ce = (function () {
                  var e = new n(1e5);
                  return (e[8] = "x"), e.splice(1, 1), 7 === e.indexOf("x");
                })(),
                fe = (function () {
                  var e = 256,
                    t = [];
                  return (t[e] = "a"), t.splice(e + 1, 0, "b"), "a" === t[e];
                })();
              G(
                i,
                {
                  splice: function (e, t) {
                    for (
                      var n,
                        i = W.ToObject(this),
                        r = [],
                        o = W.ToUint32(i.length),
                        a = W.ToInteger(e),
                        s = 0 > a ? b(o + a, 0) : I(a, o),
                        u = I(b(W.ToInteger(t), 0), o - s),
                        c = 0;
                      u > c;

                    )
                      (n = l(s + c)), J(i, n) && (r[c] = i[n]), (c += 1);
                    var f,
                      d = F(arguments, 2),
                      p = d.length;
                    if (u > p) {
                      c = s;
                      for (var h = o - u; h > c; )
                        (n = l(c + u)),
                          (f = l(c + p)),
                          J(i, n) ? (i[f] = i[n]) : delete i[f],
                          (c += 1);
                      c = o;
                      for (var g = o - u + p; c > g; )
                        delete i[c - 1], (c -= 1);
                    } else if (p > u)
                      for (c = o - u; c > s; )
                        (n = l(c + u - 1)),
                          (f = l(c + p - 1)),
                          J(i, n) ? (i[f] = i[n]) : delete i[f],
                          (c -= 1);
                    c = s;
                    for (var m = 0; m < d.length; ++m) (i[c] = d[m]), (c += 1);
                    return (i.length = o - u + p), r;
                  },
                },
                !ce || !fe
              );
              var de,
                pe = i.join;
              try {
                de = "1,2,3" !== Array.prototype.join.call("123", ",");
              } catch (he) {
                de = !0;
              }
              de &&
                G(
                  i,
                  {
                    join: function (e) {
                      var t = "undefined" == typeof e ? "," : e;
                      return pe.call(Z(this) ? X(this, "") : this, t);
                    },
                  },
                  de
                );
              var ge = "1,2" !== [1, 2].join(void 0);
              ge &&
                G(
                  i,
                  {
                    join: function (e) {
                      var t = "undefined" == typeof e ? "," : e;
                      return pe.call(this, t);
                    },
                  },
                  ge
                );
              var me = function (e) {
                  for (
                    var t = W.ToObject(this), n = W.ToUint32(t.length), i = 0;
                    i < arguments.length;

                  )
                    (t[n + i] = arguments[i]), (i += 1);
                  return (t.length = n + i), n + i;
                },
                ve = (function () {
                  var e = {},
                    t = Array.prototype.push.call(e, void 0);
                  return (
                    1 !== t ||
                    1 !== e.length ||
                    "undefined" != typeof e[0] ||
                    !J(e, 0)
                  );
                })();
              G(
                i,
                {
                  push: function (e) {
                    return $(this)
                      ? h.apply(this, arguments)
                      : me.apply(this, arguments);
                  },
                },
                ve
              );
              var ye = (function () {
                var e = [],
                  t = e.push(void 0);
                return (
                  1 !== t ||
                  1 !== e.length ||
                  "undefined" != typeof e[0] ||
                  !J(e, 0)
                );
              })();
              G(i, { push: me }, ye),
                G(
                  i,
                  {
                    slice: function (e, t) {
                      var n = Z(this) ? X(this, "") : this;
                      return H(n, arguments);
                    },
                  },
                  ne
                );
              var we = (function () {
                  try {
                    return [1, 2].sort(null), [1, 2].sort({}), !0;
                  } catch (e) {}
                  return !1;
                })(),
                be = (function () {
                  try {
                    return [1, 2].sort(/a/), !1;
                  } catch (e) {}
                  return !0;
                })(),
                Ie = (function () {
                  try {
                    return [1, 2].sort(void 0), !0;
                  } catch (e) {}
                  return !1;
                })();
              G(
                i,
                {
                  sort: function (t) {
                    if ("undefined" == typeof t) return q(this);
                    if (!e(t))
                      throw new TypeError(
                        "Array.prototype.sort callback must be a function"
                      );
                    return q(this, t);
                  },
                },
                we || !Ie || !be
              );
              var Me = !Q({ toString: null }, "toString"),
                Ce = Q(function () {}, "prototype"),
                Ae = !J("x", "0"),
                Se = function (e) {
                  var t = e.constructor;
                  return t && t.prototype === e;
                },
                Ee = {
                  $window: !0,
                  $console: !0,
                  $parent: !0,
                  $self: !0,
                  $frame: !0,
                  $frames: !0,
                  $frameElement: !0,
                  $webkitIndexedDB: !0,
                  $webkitStorageInfo: !0,
                  $external: !0,
                },
                De = (function () {
                  if ("undefined" == typeof window) return !1;
                  for (var e in window)
                    try {
                      !Ee["$" + e] &&
                        J(window, e) &&
                        null !== window[e] &&
                        "object" == typeof window[e] &&
                        Se(window[e]);
                    } catch (t) {
                      return !0;
                    }
                  return !1;
                })(),
                Ne = function (e) {
                  if ("undefined" == typeof window || !De) return Se(e);
                  try {
                    return Se(e);
                  } catch (t) {
                    return !1;
                  }
                },
                je = [
                  "toString",
                  "toLocaleString",
                  "valueOf",
                  "hasOwnProperty",
                  "isPrototypeOf",
                  "propertyIsEnumerable",
                  "constructor",
                ],
                Le = je.length,
                xe = function (e) {
                  return "[object Arguments]" === B(e);
                },
                Te = function (t) {
                  return (
                    null !== t &&
                    "object" == typeof t &&
                    "number" == typeof t.length &&
                    t.length >= 0 &&
                    !$(t) &&
                    e(t.callee)
                  );
                },
                Ze = xe(arguments) ? xe : Te;
              G(r, {
                keys: function (t) {
                  var n = e(t),
                    i = Ze(t),
                    r = null !== t && "object" == typeof t,
                    o = r && Z(t);
                  if (!r && !n && !i)
                    throw new TypeError("Object.keys called on a non-object");
                  var a = [],
                    s = Ce && n;
                  if ((o && Ae) || i)
                    for (var u = 0; u < t.length; ++u) K(a, l(u));
                  if (!i)
                    for (var c in t)
                      (s && "prototype" === c) || !J(t, c) || K(a, l(c));
                  if (Me)
                    for (var f = Ne(t), d = 0; Le > d; d++) {
                      var p = je[d];
                      (f && "constructor" === p) || !J(t, p) || K(a, p);
                    }
                  return a;
                },
              });
              var Pe =
                  r.keys &&
                  (function () {
                    return 2 === r.keys(arguments).length;
                  })(1, 2),
                ke =
                  r.keys &&
                  (function () {
                    var e = r.keys(arguments);
                    return (
                      1 !== arguments.length || 1 !== e.length || 1 !== e[0]
                    );
                  })(1),
                Ye = r.keys;
              G(
                r,
                {
                  keys: function (e) {
                    return Ye(Ze(e) ? F(e) : e);
                  },
                },
                !Pe || ke
              );
              var ze,
                Ge,
                Oe = 0 !== new Date(-0xc782b5b342b24).getUTCMonth(),
                Re = new Date(-0x55d318d56a724),
                We = new Date(14496624e5),
                Ue = "Mon, 01 Jan -45875 11:59:59 GMT" !== Re.toUTCString(),
                Je = Re.getTimezoneOffset();
              -720 > Je
                ? ((ze = "Tue Jan 02 -45875" !== Re.toDateString()),
                  (Ge = !/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(
                    We.toString()
                  )))
                : ((ze = "Mon Jan 01 -45875" !== Re.toDateString()),
                  (Ge = !/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(
                    We.toString()
                  )));
              var Be = y.bind(Date.prototype.getFullYear),
                Fe = y.bind(Date.prototype.getMonth),
                He = y.bind(Date.prototype.getDate),
                Ve = y.bind(Date.prototype.getUTCFullYear),
                Xe = y.bind(Date.prototype.getUTCMonth),
                _e = y.bind(Date.prototype.getUTCDate),
                Ke = y.bind(Date.prototype.getUTCDay),
                Qe = y.bind(Date.prototype.getUTCHours),
                qe = y.bind(Date.prototype.getUTCMinutes),
                $e = y.bind(Date.prototype.getUTCSeconds),
                et = y.bind(Date.prototype.getUTCMilliseconds),
                tt = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                nt = [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                it = function (e, t) {
                  return He(new Date(t, e, 0));
                };
              G(
                Date.prototype,
                {
                  getFullYear: function () {
                    if (!(this && this instanceof Date))
                      throw new TypeError("this is not a Date object.");
                    var e = Be(this);
                    return 0 > e && Fe(this) > 11 ? e + 1 : e;
                  },
                  getMonth: function () {
                    if (!(this && this instanceof Date))
                      throw new TypeError("this is not a Date object.");
                    var e = Be(this),
                      t = Fe(this);
                    return 0 > e && t > 11 ? 0 : t;
                  },
                  getDate: function () {
                    if (!(this && this instanceof Date))
                      throw new TypeError("this is not a Date object.");
                    var e = Be(this),
                      t = Fe(this),
                      n = He(this);
                    if (0 > e && t > 11) {
                      if (12 === t) return n;
                      var i = it(0, e + 1);
                      return i - n + 1;
                    }
                    return n;
                  },
                  getUTCFullYear: function () {
                    if (!(this && this instanceof Date))
                      throw new TypeError("this is not a Date object.");
                    var e = Ve(this);
                    return 0 > e && Xe(this) > 11 ? e + 1 : e;
                  },
                  getUTCMonth: function () {
                    if (!(this && this instanceof Date))
                      throw new TypeError("this is not a Date object.");
                    var e = Ve(this),
                      t = Xe(this);
                    return 0 > e && t > 11 ? 0 : t;
                  },
                  getUTCDate: function () {
                    if (!(this && this instanceof Date))
                      throw new TypeError("this is not a Date object.");
                    var e = Ve(this),
                      t = Xe(this),
                      n = _e(this);
                    if (0 > e && t > 11) {
                      if (12 === t) return n;
                      var i = it(0, e + 1);
                      return i - n + 1;
                    }
                    return n;
                  },
                },
                Oe
              ),
                G(
                  Date.prototype,
                  {
                    toUTCString: function () {
                      if (!(this && this instanceof Date))
                        throw new TypeError("this is not a Date object.");
                      var e = Ke(this),
                        t = _e(this),
                        n = Xe(this),
                        i = Ve(this),
                        r = Qe(this),
                        o = qe(this),
                        a = $e(this);
                      return (
                        tt[e] +
                        ", " +
                        (10 > t ? "0" + t : t) +
                        " " +
                        nt[n] +
                        " " +
                        i +
                        " " +
                        (10 > r ? "0" + r : r) +
                        ":" +
                        (10 > o ? "0" + o : o) +
                        ":" +
                        (10 > a ? "0" + a : a) +
                        " GMT"
                      );
                    },
                  },
                  Oe || Ue
                ),
                G(
                  Date.prototype,
                  {
                    toDateString: function () {
                      if (!(this && this instanceof Date))
                        throw new TypeError("this is not a Date object.");
                      var e = this.getDay(),
                        t = this.getDate(),
                        n = this.getMonth(),
                        i = this.getFullYear();
                      return (
                        tt[e] +
                        " " +
                        nt[n] +
                        " " +
                        (10 > t ? "0" + t : t) +
                        " " +
                        i
                      );
                    },
                  },
                  Oe || ze
                ),
                (Oe || Ge) &&
                  ((Date.prototype.toString = function () {
                    if (!(this && this instanceof Date))
                      throw new TypeError("this is not a Date object.");
                    var e = this.getDay(),
                      t = this.getDate(),
                      n = this.getMonth(),
                      i = this.getFullYear(),
                      r = this.getHours(),
                      o = this.getMinutes(),
                      a = this.getSeconds(),
                      s = this.getTimezoneOffset(),
                      l = Math.floor(Math.abs(s) / 60),
                      u = Math.floor(Math.abs(s) % 60);
                    return (
                      tt[e] +
                      " " +
                      nt[n] +
                      " " +
                      (10 > t ? "0" + t : t) +
                      " " +
                      i +
                      " " +
                      (10 > r ? "0" + r : r) +
                      ":" +
                      (10 > o ? "0" + o : o) +
                      ":" +
                      (10 > a ? "0" + a : a) +
                      " GMT" +
                      (s > 0 ? "-" : "+") +
                      (10 > l ? "0" + l : l) +
                      (10 > u ? "0" + u : u)
                    );
                  }),
                  z &&
                    r.defineProperty(Date.prototype, "toString", {
                      configurable: !0,
                      enumerable: !1,
                      writable: !0,
                    }));
              var rt = -621987552e5,
                ot = "-000001",
                at =
                  Date.prototype.toISOString &&
                  -1 === new Date(rt).toISOString().indexOf(ot),
                st =
                  Date.prototype.toISOString &&
                  "1969-12-31T23:59:59.999Z" !== new Date(-1).toISOString(),
                lt = y.bind(Date.prototype.getTime);
              G(
                Date.prototype,
                {
                  toISOString: function () {
                    if (!isFinite(this) || !isFinite(lt(this)))
                      throw new RangeError(
                        "Date.prototype.toISOString called on non-finite value."
                      );
                    var e = Ve(this),
                      t = Xe(this);
                    (e += Math.floor(t / 12)), (t = ((t % 12) + 12) % 12);
                    var n = [t + 1, _e(this), Qe(this), qe(this), $e(this)];
                    e =
                      (0 > e ? "-" : e > 9999 ? "+" : "") +
                      V("00000" + Math.abs(e), e >= 0 && 9999 >= e ? -4 : -6);
                    for (var i = 0; i < n.length; ++i)
                      n[i] = V("00" + n[i], -2);
                    return (
                      e +
                      "-" +
                      F(n, 0, 2).join("-") +
                      "T" +
                      F(n, 2).join(":") +
                      "." +
                      V("000" + et(this), -3) +
                      "Z"
                    );
                  },
                },
                at || st
              );
              var ut = (function () {
                try {
                  return (
                    Date.prototype.toJSON &&
                    null === new Date(NaN).toJSON() &&
                    -1 !== new Date(rt).toJSON().indexOf(ot) &&
                    Date.prototype.toJSON.call({
                      toISOString: function () {
                        return !0;
                      },
                    })
                  );
                } catch (e) {
                  return !1;
                }
              })();
              ut ||
                (Date.prototype.toJSON = function (t) {
                  var n = r(this),
                    i = W.ToPrimitive(n);
                  if ("number" == typeof i && !isFinite(i)) return null;
                  var o = n.toISOString;
                  if (!e(o))
                    throw new TypeError("toISOString property is not callable");
                  return o.call(n);
                });
              var ct = 1e15 === Date.parse("+033658-09-27T01:46:40.000Z"),
                ft =
                  !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) ||
                  !isNaN(Date.parse("2012-11-31T23:59:59.000Z")) ||
                  !isNaN(Date.parse("2012-12-31T23:59:60.000Z")),
                dt = isNaN(Date.parse("2000-01-01T00:00:00.000Z"));
              if (dt || ft || !ct) {
                var pt = Math.pow(2, 31) - 1,
                  ht = R(new Date(1970, 0, 1, 0, 0, 0, pt + 1).getTime());
                Date = (function (e) {
                  var t = function (n, i, r, o, a, s, u) {
                      var c,
                        f = arguments.length;
                      if (this instanceof e) {
                        var d = s,
                          p = u;
                        if (ht && f >= 7 && u > pt) {
                          var h = Math.floor(u / pt) * pt,
                            g = Math.floor(h / 1e3);
                          (d += g), (p -= 1e3 * g);
                        }
                        c =
                          1 === f && l(n) === n
                            ? new e(t.parse(n))
                            : f >= 7
                            ? new e(n, i, r, o, a, d, p)
                            : f >= 6
                            ? new e(n, i, r, o, a, d)
                            : f >= 5
                            ? new e(n, i, r, o, a)
                            : f >= 4
                            ? new e(n, i, r, o)
                            : f >= 3
                            ? new e(n, i, r)
                            : f >= 2
                            ? new e(n, i)
                            : f >= 1
                            ? new e(n instanceof e ? +n : n)
                            : new e();
                      } else c = e.apply(this, arguments);
                      return O(c) || G(c, { constructor: t }, !0), c;
                    },
                    n = new RegExp(
                      "^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"
                    ),
                    i = [
                      0,
                      31,
                      59,
                      90,
                      120,
                      151,
                      181,
                      212,
                      243,
                      273,
                      304,
                      334,
                      365,
                    ],
                    r = function (e, t) {
                      var n = t > 1 ? 1 : 0;
                      return (
                        i[t] +
                        Math.floor((e - 1969 + n) / 4) -
                        Math.floor((e - 1901 + n) / 100) +
                        Math.floor((e - 1601 + n) / 400) +
                        365 * (e - 1970)
                      );
                    },
                    o = function (t) {
                      var n = 0,
                        i = t;
                      if (ht && i > pt) {
                        var r = Math.floor(i / pt) * pt,
                          o = Math.floor(r / 1e3);
                        (n += o), (i -= 1e3 * o);
                      }
                      return c(new e(1970, 0, 1, 0, 0, n, i));
                    };
                  for (var a in e) J(e, a) && (t[a] = e[a]);
                  G(t, { now: e.now, UTC: e.UTC }, !0),
                    (t.prototype = e.prototype),
                    G(t.prototype, { constructor: t }, !0);
                  var s = function (t) {
                    var i = n.exec(t);
                    if (i) {
                      var a,
                        s = c(i[1]),
                        l = c(i[2] || 1) - 1,
                        u = c(i[3] || 1) - 1,
                        f = c(i[4] || 0),
                        d = c(i[5] || 0),
                        p = c(i[6] || 0),
                        h = Math.floor(1e3 * c(i[7] || 0)),
                        g = Boolean(i[4] && !i[8]),
                        m = "-" === i[9] ? 1 : -1,
                        v = c(i[10] || 0),
                        y = c(i[11] || 0),
                        w = d > 0 || p > 0 || h > 0;
                      return (w ? 24 : 25) > f &&
                        60 > d &&
                        60 > p &&
                        1e3 > h &&
                        l > -1 &&
                        12 > l &&
                        24 > v &&
                        60 > y &&
                        u > -1 &&
                        u < r(s, l + 1) - r(s, l) &&
                        ((a = 60 * (24 * (r(s, l) + u) + f + v * m)),
                        (a = 1e3 * (60 * (a + d + y * m) + p) + h),
                        g && (a = o(a)),
                        a >= -864e13 && 864e13 >= a)
                        ? a
                        : NaN;
                    }
                    return e.parse.apply(this, arguments);
                  };
                  return G(t, { parse: s }), t;
                })(Date);
              }
              Date.now ||
                (Date.now = function () {
                  return new Date().getTime();
                });
              var gt =
                  f.toFixed &&
                  ("0.000" !== (8e-5).toFixed(3) ||
                    "1" !== (0.9).toFixed(0) ||
                    "1.25" !== (1.255).toFixed(2) ||
                    "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)),
                mt = {
                  base: 1e7,
                  size: 6,
                  data: [0, 0, 0, 0, 0, 0],
                  multiply: function (e, t) {
                    for (var n = -1, i = t; ++n < mt.size; )
                      (i += e * mt.data[n]),
                        (mt.data[n] = i % mt.base),
                        (i = Math.floor(i / mt.base));
                  },
                  divide: function (e) {
                    for (var t = mt.size, n = 0; --t >= 0; )
                      (n += mt.data[t]),
                        (mt.data[t] = Math.floor(n / e)),
                        (n = (n % e) * mt.base);
                  },
                  numToString: function () {
                    for (var e = mt.size, t = ""; --e >= 0; )
                      if ("" !== t || 0 === e || 0 !== mt.data[e]) {
                        var n = l(mt.data[e]);
                        "" === t
                          ? (t = n)
                          : (t += V("0000000", 0, 7 - n.length) + n);
                      }
                    return t;
                  },
                  pow: function Yt(e, t, n) {
                    return 0 === t
                      ? n
                      : t % 2 === 1
                      ? Yt(e, t - 1, n * e)
                      : Yt(e * e, t / 2, n);
                  },
                  log: function (e) {
                    for (var t = 0, n = e; n >= 4096; ) (t += 12), (n /= 4096);
                    for (; n >= 2; ) (t += 1), (n /= 2);
                    return t;
                  },
                },
                vt = function (e) {
                  var t, n, i, r, o, a, s, u;
                  if (
                    ((t = c(e)),
                    (t = R(t) ? 0 : Math.floor(t)),
                    0 > t || t > 20)
                  )
                    throw new RangeError(
                      "Number.toFixed called with invalid number of decimals"
                    );
                  if (((n = c(this)), R(n))) return "NaN";
                  if (-1e21 >= n || n >= 1e21) return l(n);
                  if (
                    ((i = ""),
                    0 > n && ((i = "-"), (n = -n)),
                    (r = "0"),
                    n > 1e-21)
                  )
                    if (
                      ((o = mt.log(n * mt.pow(2, 69, 1)) - 69),
                      (a = 0 > o ? n * mt.pow(2, -o, 1) : n / mt.pow(2, o, 1)),
                      (a *= 4503599627370496),
                      (o = 52 - o),
                      o > 0)
                    ) {
                      for (mt.multiply(0, a), s = t; s >= 7; )
                        mt.multiply(1e7, 0), (s -= 7);
                      for (
                        mt.multiply(mt.pow(10, s, 1), 0), s = o - 1;
                        s >= 23;

                      )
                        mt.divide(1 << 23), (s -= 23);
                      mt.divide(1 << s),
                        mt.multiply(1, 1),
                        mt.divide(2),
                        (r = mt.numToString());
                    } else
                      mt.multiply(0, a),
                        mt.multiply(1 << -o, 0),
                        (r =
                          mt.numToString() +
                          V("0.00000000000000000000", 2, 2 + t));
                  return (
                    t > 0
                      ? ((u = r.length),
                        (r =
                          t >= u
                            ? i + V("0.0000000000000000000", 0, t - u + 2) + r
                            : i + V(r, 0, u - t) + "." + V(r, u - t)))
                      : (r = i + r),
                    r
                  );
                };
              G(f, { toFixed: vt }, gt);
              var yt = (function () {
                  try {
                    return "1" === (1).toPrecision(void 0);
                  } catch (e) {
                    return !0;
                  }
                })(),
                wt = f.toPrecision;
              G(
                f,
                {
                  toPrecision: function (e) {
                    return "undefined" == typeof e
                      ? wt.call(this)
                      : wt.call(this, e);
                  },
                },
                yt
              ),
                2 !== "ab".split(/(?:ab)*/).length ||
                4 !== ".".split(/(.?)(.?)/).length ||
                "t" === "tesst".split(/(s)*/)[1] ||
                4 !== "test".split(/(?:)/, -1).length ||
                "".split(/.?/).length ||
                ".".split(/()()/).length > 1
                  ? !(function () {
                      var e = "undefined" == typeof /()??/.exec("")[1],
                        n = Math.pow(2, 32) - 1;
                      u.split = function (i, r) {
                        var o = String(this);
                        if ("undefined" == typeof i && 0 === r) return [];
                        if (!t(i)) return X(this, i, r);
                        var a,
                          s,
                          l,
                          u,
                          c = [],
                          f =
                            (i.ignoreCase ? "i" : "") +
                            (i.multiline ? "m" : "") +
                            (i.unicode ? "u" : "") +
                            (i.sticky ? "y" : ""),
                          d = 0,
                          p = new RegExp(i.source, f + "g");
                        e || (a = new RegExp("^" + p.source + "$(?!\\s)", f));
                        var g = "undefined" == typeof r ? n : W.ToUint32(r);
                        for (
                          s = p.exec(o);
                          s &&
                          ((l = s.index + s[0].length),
                          !(
                            l > d &&
                            (K(c, V(o, d, s.index)),
                            !e &&
                              s.length > 1 &&
                              s[0].replace(a, function () {
                                for (var e = 1; e < arguments.length - 2; e++)
                                  "undefined" == typeof arguments[e] &&
                                    (s[e] = void 0);
                              }),
                            s.length > 1 &&
                              s.index < o.length &&
                              h.apply(c, F(s, 1)),
                            (u = s[0].length),
                            (d = l),
                            c.length >= g)
                          ));

                        )
                          p.lastIndex === s.index && p.lastIndex++,
                            (s = p.exec(o));
                        return (
                          d === o.length
                            ? (u || !p.test("")) && K(c, "")
                            : K(c, V(o, d)),
                          c.length > g ? F(c, 0, g) : c
                        );
                      };
                    })()
                  : "0".split(void 0, 0).length &&
                    (u.split = function (e, t) {
                      return "undefined" == typeof e && 0 === t
                        ? []
                        : X(this, e, t);
                    });
              var bt = u.replace,
                It = (function () {
                  var e = [];
                  return (
                    "x".replace(/x(.)?/g, function (t, n) {
                      K(e, n);
                    }),
                    1 === e.length && "undefined" == typeof e[0]
                  );
                })();
              It ||
                (u.replace = function (n, i) {
                  var r = e(i),
                    o = t(n) && /\)[*?]/.test(n.source);
                  if (r && o) {
                    var a = function (e) {
                      var t = arguments.length,
                        r = n.lastIndex;
                      n.lastIndex = 0;
                      var o = n.exec(e) || [];
                      return (
                        (n.lastIndex = r),
                        K(o, arguments[t - 2], arguments[t - 1]),
                        i.apply(this, o)
                      );
                    };
                    return bt.call(this, n, a);
                  }
                  return bt.call(this, n, i);
                });
              var Mt = u.substr,
                Ct = "".substr && "b" !== "0b".substr(-1);
              G(
                u,
                {
                  substr: function (e, t) {
                    var n = e;
                    return (
                      0 > e && (n = b(this.length + e, 0)), Mt.call(this, n, t)
                    );
                  },
                },
                Ct
              );
              var At =
                  "	\n\f\r Â áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff",
                St = "â€‹",
                Et = "[" + At + "]",
                Dt = new RegExp("^" + Et + Et + "*"),
                Nt = new RegExp(Et + Et + "*$"),
                jt = u.trim && (At.trim() || !St.trim());
              G(
                u,
                {
                  trim: function () {
                    if ("undefined" == typeof this || null === this)
                      throw new TypeError(
                        "can't convert " + this + " to object"
                      );
                    return l(this).replace(Dt, "").replace(Nt, "");
                  },
                },
                jt
              );
              var Lt = y.bind(String.prototype.trim),
                xt = u.lastIndexOf && -1 !== "abcã‚ã„".lastIndexOf("ã‚ã„", 2);
              G(
                u,
                {
                  lastIndexOf: function (e) {
                    if ("undefined" == typeof this || null === this)
                      throw new TypeError(
                        "can't convert " + this + " to object"
                      );
                    for (
                      var t = l(this),
                        n = l(e),
                        i = arguments.length > 1 ? c(arguments[1]) : NaN,
                        r = R(i) ? 1 / 0 : W.ToInteger(i),
                        o = I(b(r, 0), t.length),
                        a = n.length,
                        s = o + a;
                      s > 0;

                    ) {
                      s = b(0, s - a);
                      var u = _(V(t, s, o + a), n);
                      if (-1 !== u) return s + u;
                    }
                    return -1;
                  },
                },
                xt
              );
              var Tt = u.lastIndexOf;
              if (
                (G(
                  u,
                  {
                    lastIndexOf: function (e) {
                      return Tt.apply(this, arguments);
                    },
                  },
                  1 !== u.lastIndexOf.length
                ),
                (8 !== parseInt(At + "08") || 22 !== parseInt(At + "0x16")) &&
                  (parseInt = (function (e) {
                    var t = /^[\-+]?0[xX]/;
                    return function (n, i) {
                      var r = Lt(String(n)),
                        o = c(i) || (t.test(r) ? 16 : 10);
                      return e(r, o);
                    };
                  })(parseInt)),
                1 / parseFloat("-0") !== -(1 / 0) &&
                  (parseFloat = (function (e) {
                    return function (t) {
                      var n = Lt(String(t)),
                        i = e(n);
                      return 0 === i && "-" === V(n, 0, 1) ? -0 : i;
                    };
                  })(parseFloat)),
                "RangeError: test" !== String(new RangeError("test")))
              ) {
                var Zt = function () {
                  if ("undefined" == typeof this || null === this)
                    throw new TypeError("can't convert " + this + " to object");
                  var e = this.name;
                  "undefined" == typeof e
                    ? (e = "Error")
                    : "string" != typeof e && (e = l(e));
                  var t = this.message;
                  return (
                    "undefined" == typeof t
                      ? (t = "")
                      : "string" != typeof t && (t = l(t)),
                    e ? (t ? e + ": " + t : e) : t
                  );
                };
                Error.prototype.toString = Zt;
              }
              if (z) {
                var Pt = function (e, t) {
                  if (Q(e, t)) {
                    var n = Object.getOwnPropertyDescriptor(e, t);
                    n.configurable &&
                      ((n.enumerable = !1), Object.defineProperty(e, t, n));
                  }
                };
                Pt(Error.prototype, "message"),
                  "" !== Error.prototype.message &&
                    (Error.prototype.message = ""),
                  Pt(Error.prototype, "name");
              }
              if ("/a/gim" !== String(/a/gim)) {
                var kt = function () {
                  var e = "/" + this.source + "/";
                  return (
                    this.global && (e += "g"),
                    this.ignoreCase && (e += "i"),
                    this.multiline && (e += "m"),
                    e
                  );
                };
                RegExp.prototype.toString = kt;
              }
            });
          },
          {},
        ],
        39: [
          function (e, t, n) {
            var i = [],
              r = i.forEach,
              o = i.slice;
            t.exports = function (e) {
              return (
                r.call(o.call(arguments, 1), function (t) {
                  if (t) for (var n in t) e[n] = t[n];
                }),
                e
              );
            };
          },
          {},
        ],
        40: [
          function (e, t, n) {
            (n.read = function (e, t, n, i, r) {
              var o,
                a,
                s = 8 * r - i - 1,
                l = (1 << s) - 1,
                u = l >> 1,
                c = -7,
                f = n ? r - 1 : 0,
                d = n ? -1 : 1,
                p = e[t + f];
              for (
                f += d, o = p & ((1 << -c) - 1), p >>= -c, c += s;
                c > 0;
                o = 256 * o + e[t + f], f += d, c -= 8
              );
              for (
                a = o & ((1 << -c) - 1), o >>= -c, c += i;
                c > 0;
                a = 256 * a + e[t + f], f += d, c -= 8
              );
              if (0 === o) o = 1 - u;
              else {
                if (o === l) return a ? NaN : (p ? -1 : 1) * (1 / 0);
                (a += Math.pow(2, i)), (o -= u);
              }
              return (p ? -1 : 1) * a * Math.pow(2, o - i);
            }),
              (n.write = function (e, t, n, i, r, o) {
                var a,
                  s,
                  l,
                  u = 8 * o - r - 1,
                  c = (1 << u) - 1,
                  f = c >> 1,
                  d = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                  p = i ? 0 : o - 1,
                  h = i ? 1 : -1,
                  g = 0 > t || (0 === t && 0 > 1 / t) ? 1 : 0;
                for (
                  t = Math.abs(t),
                    isNaN(t) || t === 1 / 0
                      ? ((s = isNaN(t) ? 1 : 0), (a = c))
                      : ((a = Math.floor(Math.log(t) / Math.LN2)),
                        t * (l = Math.pow(2, -a)) < 1 && (a--, (l *= 2)),
                        (t += a + f >= 1 ? d / l : d * Math.pow(2, 1 - f)),
                        t * l >= 2 && (a++, (l /= 2)),
                        a + f >= c
                          ? ((s = 0), (a = c))
                          : a + f >= 1
                          ? ((s = (t * l - 1) * Math.pow(2, r)), (a += f))
                          : ((s = t * Math.pow(2, f - 1) * Math.pow(2, r)),
                            (a = 0)));
                  r >= 8;
                  e[n + p] = 255 & s, p += h, s /= 256, r -= 8
                );
                for (
                  a = (a << r) | s, u += r;
                  u > 0;
                  e[n + p] = 255 & a, p += h, a /= 256, u -= 8
                );
                e[n + p - h] |= 128 * g;
              });
          },
          {},
        ],
        41: [
          function (e, t, n) {
            var i = [].indexOf;
            t.exports = function (e, t) {
              if (i) return e.indexOf(t);
              for (var n = 0; n < e.length; ++n) if (e[n] === t) return n;
              return -1;
            };
          },
          {},
        ],
        42: [
          function (e, t, n) {
            function i(e) {
              var t = r.call(e);
              return (
                "[object Function]" === t ||
                ("function" == typeof e && "[object RegExp]" !== t) ||
                ("undefined" != typeof window &&
                  (e === window.setTimeout ||
                    e === window.alert ||
                    e === window.confirm ||
                    e === window.prompt))
              );
            }
            t.exports = i;
            var r = Object.prototype.toString;
          },
          {},
        ],
        43: [
          function (e, t, n) {
            var i = {}.toString;
            t.exports =
              Array.isArray ||
              function (e) {
                return "[object Array]" == i.call(e);
              };
          },
          {},
        ],
        44: [
          function (t, n, i) {
            (function (t) {
              !(function (r) {
                function o(e) {
                  throw new RangeError(P[e]);
                }
                function a(e, t) {
                  for (var n = e.length, i = []; n--; ) i[n] = t(e[n]);
                  return i;
                }
                function s(e, t) {
                  var n = e.split("@"),
                    i = "";
                  n.length > 1 && ((i = n[0] + "@"), (e = n[1])),
                    (e = e.replace(Z, "."));
                  var r = e.split("."),
                    o = a(r, t).join(".");
                  return i + o;
                }
                function l(e) {
                  for (var t, n, i = [], r = 0, o = e.length; o > r; )
                    (t = e.charCodeAt(r++)),
                      t >= 55296 && 56319 >= t && o > r
                        ? ((n = e.charCodeAt(r++)),
                          56320 == (64512 & n)
                            ? i.push(((1023 & t) << 10) + (1023 & n) + 65536)
                            : (i.push(t), r--))
                        : i.push(t);
                  return i;
                }
                function u(e) {
                  return a(e, function (e) {
                    var t = "";
                    return (
                      e > 65535 &&
                        ((e -= 65536),
                        (t += z(((e >>> 10) & 1023) | 55296)),
                        (e = 56320 | (1023 & e))),
                      (t += z(e))
                    );
                  }).join("");
                }
                function c(e) {
                  return 10 > e - 48
                    ? e - 22
                    : 26 > e - 65
                    ? e - 65
                    : 26 > e - 97
                    ? e - 97
                    : C;
                }
                function f(e, t) {
                  return e + 22 + 75 * (26 > e) - ((0 != t) << 5);
                }
                function d(e, t, n) {
                  var i = 0;
                  for (
                    e = n ? Y(e / D) : e >> 1, e += Y(e / t);
                    e > (k * S) >> 1;
                    i += C
                  )
                    e = Y(e / k);
                  return Y(i + ((k + 1) * e) / (e + E));
                }
                function p(e) {
                  var t,
                    n,
                    i,
                    r,
                    a,
                    s,
                    l,
                    f,
                    p,
                    h,
                    g = [],
                    m = e.length,
                    v = 0,
                    y = j,
                    w = N;
                  for (
                    n = e.lastIndexOf(L), 0 > n && (n = 0), i = 0;
                    n > i;
                    ++i
                  )
                    e.charCodeAt(i) >= 128 && o("not-basic"),
                      g.push(e.charCodeAt(i));
                  for (r = n > 0 ? n + 1 : 0; m > r; ) {
                    for (
                      a = v, s = 1, l = C;
                      r >= m && o("invalid-input"),
                        (f = c(e.charCodeAt(r++))),
                        (f >= C || f > Y((M - v) / s)) && o("overflow"),
                        (v += f * s),
                        (p = w >= l ? A : l >= w + S ? S : l - w),
                        !(p > f);
                      l += C
                    )
                      (h = C - p), s > Y(M / h) && o("overflow"), (s *= h);
                    (t = g.length + 1),
                      (w = d(v - a, t, 0 == a)),
                      Y(v / t) > M - y && o("overflow"),
                      (y += Y(v / t)),
                      (v %= t),
                      g.splice(v++, 0, y);
                  }
                  return u(g);
                }
                function h(e) {
                  var t,
                    n,
                    i,
                    r,
                    a,
                    s,
                    u,
                    c,
                    p,
                    h,
                    g,
                    m,
                    v,
                    y,
                    w,
                    b = [];
                  for (
                    e = l(e), m = e.length, t = j, n = 0, a = N, s = 0;
                    m > s;
                    ++s
                  )
                    (g = e[s]), 128 > g && b.push(z(g));
                  for (i = r = b.length, r && b.push(L); m > i; ) {
                    for (u = M, s = 0; m > s; ++s)
                      (g = e[s]), g >= t && u > g && (u = g);
                    for (
                      v = i + 1,
                        u - t > Y((M - n) / v) && o("overflow"),
                        n += (u - t) * v,
                        t = u,
                        s = 0;
                      m > s;
                      ++s
                    )
                      if (
                        ((g = e[s]), t > g && ++n > M && o("overflow"), g == t)
                      ) {
                        for (
                          c = n, p = C;
                          (h = a >= p ? A : p >= a + S ? S : p - a), !(h > c);
                          p += C
                        )
                          (w = c - h),
                            (y = C - h),
                            b.push(z(f(h + (w % y), 0))),
                            (c = Y(w / y));
                        b.push(z(f(c, 0))), (a = d(n, v, i == r)), (n = 0), ++i;
                      }
                    ++n, ++t;
                  }
                  return b.join("");
                }
                function g(e) {
                  return s(e, function (e) {
                    return x.test(e) ? p(e.slice(4).toLowerCase()) : e;
                  });
                }
                function m(e) {
                  return s(e, function (e) {
                    return T.test(e) ? "xn--" + h(e) : e;
                  });
                }
                var v = "object" == typeof i && i && !i.nodeType && i,
                  y = "object" == typeof n && n && !n.nodeType && n,
                  w = "object" == typeof t && t;
                (w.global === w || w.window === w || w.self === w) && (r = w);
                var b,
                  I,
                  M = 2147483647,
                  C = 36,
                  A = 1,
                  S = 26,
                  E = 38,
                  D = 700,
                  N = 72,
                  j = 128,
                  L = "-",
                  x = /^xn--/,
                  T = /[^\x20-\x7E]/,
                  Z = /[\x2E\u3002\uFF0E\uFF61]/g,
                  P = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic":
                      "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input",
                  },
                  k = C - A,
                  Y = Math.floor,
                  z = String.fromCharCode;
                if (
                  ((b = {
                    version: "1.4.1",
                    ucs2: { decode: l, encode: u },
                    decode: p,
                    encode: h,
                    toASCII: m,
                    toUnicode: g,
                  }),
                  "function" == typeof e && "object" == typeof e.amd && e.amd)
                )
                  e("punycode", function () {
                    return b;
                  });
                else if (v && y)
                  if (n.exports == v) y.exports = b;
                  else for (I in b) b.hasOwnProperty(I) && (v[I] = b[I]);
                else r.punycode = b;
              })(this);
            }.call(
              this,
              "undefined" != typeof global
                ? global
                : "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                ? window
                : {}
            ));
          },
          {},
        ],
        45: [
          function (t, n, i) {
            !(function (t, i) {
              "undefined" != typeof n && n.exports
                ? (n.exports = i())
                : "function" == typeof e && e.amd
                ? e(i)
                : (this[t] = i());
            })("$script", function () {
              function e(e, t) {
                for (var n = 0, i = e.length; i > n; ++n)
                  if (!t(e[n])) return l;
                return 1;
              }
              function t(t, n) {
                e(t, function (e) {
                  return !n(e);
                });
              }
              function n(o, a, s) {
                function l(e) {
                  return e.call ? e() : d[e];
                }
                function c() {
                  if (!--y) {
                    (d[v] = 1), m && m();
                    for (var n in h)
                      e(n.split("|"), l) && !t(h[n], l) && (h[n] = []);
                  }
                }
                o = o[u] ? o : [o];
                var f = a && a.call,
                  m = f ? a : s,
                  v = f ? o.join("") : a,
                  y = o.length;
                return (
                  setTimeout(function () {
                    t(o, function e(t, n) {
                      return null === t
                        ? c()
                        : (n ||
                            /^https?:\/\//.test(t) ||
                            !r ||
                            (t =
                              -1 === t.indexOf(".js") ? r + t + ".js" : r + t),
                          g[t]
                            ? (v && (p[v] = 1),
                              2 == g[t]
                                ? c()
                                : setTimeout(function () {
                                    e(t, !0);
                                  }, 0))
                            : ((g[t] = 1), v && (p[v] = 1), void i(t, c)));
                    });
                  }, 0),
                  n
                );
              }
              function i(e, t) {
                var n,
                  i = a.createElement("script");
                (i.onload = i.onerror = i[f] = function () {
                  (i[c] && !/^c|loade/.test(i[c])) ||
                    n ||
                    ((i.onload = i[f] = null), (n = 1), (g[e] = 2), t());
                }),
                  (i.async = 1),
                  (i.src = o ? e + (-1 === e.indexOf("?") ? "?" : "&") + o : e),
                  s.insertBefore(i, s.lastChild);
              }
              var r,
                o,
                a = document,
                s = a.getElementsByTagName("head")[0],
                l = !1,
                u = "push",
                c = "readyState",
                f = "onreadystatechange",
                d = {},
                p = {},
                h = {},
                g = {};
              return (
                (n.get = i),
                (n.order = function (e, t, i) {
                  !(function r(o) {
                    (o = e.shift()), e.length ? n(o, r) : n(o, t, i);
                  })();
                }),
                (n.path = function (e) {
                  r = e;
                }),
                (n.urlArgs = function (e) {
                  o = e;
                }),
                (n.ready = function (i, r, o) {
                  i = i[u] ? i : [i];
                  var a = [];
                  return (
                    !t(i, function (e) {
                      d[e] || a[u](e);
                    }) &&
                    e(i, function (e) {
                      return d[e];
                    })
                      ? r()
                      : !(function (e) {
                          (h[e] = h[e] || []), h[e][u](r), o && o(a);
                        })(i.join("|")),
                    n
                  );
                }),
                (n.done = function (e) {
                  n([null], e);
                }),
                n
              );
            });
          },
          {},
        ],
      },
      {},
      [32]
    )(32);
  });
