! function(e) {
  var i = /iPhone/i,
    a = /iPod/i,
    t = /iPad/i,
    n = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,
    o = /Android/i,
    r = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
    d = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
    s = /Windows Phone/i,
    c = /(?=.*\bWindows\b)(?=.*\bARM\b)/i,
    l = /BlackBerry/i,
    h = /BB10/i,
    u = /Opera Mini/i,
    v = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
    p = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
    f = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"),
    y = function(e, i) {
      return e.test(i)
    },
    x = function(e) {
      var x = e || navigator.userAgent,
        w = x.split("[FBAN");
      if (void 0 !== w[1] && (x = w[0]), void 0 !== (w = x.split("Twitter"))[1] && (x = w[0]), this.apple = {
        phone: y(i, x),
        ipod: y(a, x),
        tablet: !y(i, x) && y(t, x),
        device: y(i, x) || y(a, x) || y(t, x)
      }, this.amazon = {
        phone: y(r, x),
        tablet: !y(r, x) && y(d, x),
        device: y(r, x) || y(d, x)
      }, this.android = {
        phone: y(r, x) || y(n, x),
        tablet: !y(r, x) && !y(n, x) && (y(d, x) || y(o, x)),
        device: y(r, x) || y(d, x) || y(n, x) || y(o, x)
      }, this.windows = {
        phone: y(s, x),
        tablet: y(c, x),
        device: y(s, x) || y(c, x)
      }, this.other = {
        blackberry: y(l, x),
        blackberry10: y(h, x),
        opera: y(u, x),
        firefox: y(p, x),
        chrome: y(v, x),
        device: y(l, x) || y(h, x) || y(u, x) || y(p, x) || y(v, x)
      }, this.seven_inch = y(f, x), this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch, this.phone = this.apple.phone || this.android.phone || this.windows.phone, this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet, "undefined" == typeof window) return this
    },
    w = function() {
      var e = new x;
      return e.Class = x, e
    };
  "undefined" != typeof module && module.exports && "undefined" == typeof window ? module.exports = x : "undefined" != typeof module && module.exports && "undefined" != typeof window ? module.exports = w() : "function" == typeof define && define.amd ? define("isMobile", [], e.isMobile = w()) : e.isMobile = w()
}(this), $(function() {
  function e(e) {
    var i = r.width(),
      a = r.height();
    a == c && i == d || (s = (d = i) / 2, l = (c = a) / 2, canvas.width = ~~d, canvas.height = ~~c + A, L = d / 2, Y = c / 2, h = s * _, u = l * _, v = y.outerHeight() - c, stage.update())
  }

  function i(e, i, a, t) {
    var n = e * F,
      o = new createjs.Shape;
    t || o.graphics.beginRadialGradientFill(["rgba(0,0,0,.07)", "rgba(0,0,0,0)"], [0, 1], 0, 0, n, 0, 0, e).drawCircle(0, 0, e);
    var r = new createjs.Shape;
    if (r.graphics.beginFill("#ff0000").drawCircle(j, j, n), a) {
      var d = new createjs.BlurFilter(a, a, 10);
      r.filters = [d]
    }
    return r.cache(0, 0, 2 * j, 2 * j), o.graphics.beginLinearGradientFill(i, R, 0, e - n, 0, e + n).drawRect(0, 0, 2 * j, 2 * j), o.filters = [new createjs.AlphaMaskFilter(r.cacheCanvas)], o.cache(0, 0, 2 * j, 2 * j), o
  }

  function a(e, i, a) {
    var t = new createjs.Container;
    e = new createjs.Bitmap(e);
    t.addChild(e);
    var n = e.getBounds();
    e.x = -n.width / 2, e.y = -n.height / 2, W[i].addChild(t);
    var o = .4 * Math.random() + .8;
    return t.radius = a * F * o, t.scaleX = t.scaleY = o, J.push(t), t
  }

  function t(e, i, a) {
    if (Q) {
      var t = Q.graphics;
      t.beginFill(a || "red"), t.drawCircle(e, i, 20), t.endFill()
    }
  }

  function n(e, i) {
    return ~~(Math.random() * (i - e + 1) + e)
  }
  var o = this,
    r = $(".bg-animation");
  console.log(o)
  if (r.length) {
    Math.min(function() {
      var e = 1;
      return void 0 !== window.screen.systemXDPI && void 0 !== window.screen.logicalXDPI && window.screen.systemXDPI > window.screen.logicalXDPI ? e = window.screen.systemXDPI / window.screen.logicalXDPI : void 0 !== window.devicePixelRatio && (e = window.devicePixelRatio), e
    }(), 2);
    var d, s, c, l, h, u, v, p, f = $(window),
      y = $("body"),
      x = 180 / Math.PI,
      w = r.data("particles"),
      b = (w.sprite, w.gradient || ["#100", "#5f0"]),
      g = w.layers,
      _ = (w.count, w.mouse_radius, w.center_collider_proportion || .7),
      m = g.length,
      M = -400,
      F = .73;
    o.is_hided = !1;
    var C, I = [],
      A = isMobile ? 100 : 0,
      P = canvas = document.createElement("canvas");
    r.append(canvas), ctx = canvas.getContext("2d"), stage = new createjs.Stage(canvas);
    var T = function() {
        requestAnimationFrame(T, P),
          function() {
            for (var e = 0; e < z.length; e++) {
              var i = z[e][0].getBoundingClientRect(),
                a = i.height / 2,
                t = i.y || i.top,
                n = 1 - Math.min(Math.abs(l - (t + a)) / i.height, 1);
              n = Math.min(1, 1.5 * n), I[e] = n
            }
            for (e = 0; e < K.length; e++) {
              for (var o = K[e].mixed_sprite, r = o.images, d = 0; d < r.length; d++) {
                var s = r[d];
                s.alpha = I[d], s.visible = s.alpha > .01
              }
              o._cache()
            }
          }(), updateParticles(), stage.update()
      },
      R = [.2, .8];
    b = [];
    var z = [];
    $("[data-bg-color]").each(function(e, i) {
      var a = $(i);
      z.push(a);
      var t = a.data("bg-color");
      t && (t = t.split(";"), b.push(t))
    });
    for (var K = [], W = [], G = 0; G < m; G++) {
      var S = new createjs.Container;
      stage.addChild(S), W.push(S);
      var B = g[G].split(":"),
        j = parseFloat(B[1]),
        D = {};
      D._count = parseFloat(B[0]), D._size = j, D._blur = parseFloat(B[2]), D._use_center_collider = "true" == B[4];
      var O = D.mixed_sprite = new createjs.Container,
        X = i(j - 1 * D._blur - .01 * j, ["#ffffff", "#ffffff"], D._blur, !0);
      O.addChild(X), X.alpha = .4, O.images = [];
      for (var k = 0; k < b.length; k++) {
        var q = i(j, b[k], D._blur, !0);
        q.visible = 0 == k, q.alpha = 0 == k ? 1 : 0, O.images.push(q), O.addChild(q)
      }
      O.current_image_index = 0, O.current_image = O.images[O.current_image_index], O._cache = function(e, i) {
        e.cache(0, 0, 2 * i, 2 * i)
      }.bind(this, O, j), O._cache(), K.push(D)
    }
    var E, H, N, L = -d,
      Y = -c,
      J = (Math.PI, []);
    r.on("bg:hide", function(e, i) {
      var a = void 0 !== (i = i || {}).duration ? i.duration : .7;
      o.is_hided = !0;
      for (var t = 0, n = J.length; n--;) {
        var r = J[n];
        r._x_before_hide = r.x, r._y_before_hide = r.y;
        var d = r.x - s,
          c = r.y - l,
          h = Math.sqrt(d * d + c * c),
          u = s * (.2 * Math.random() + 1.3);
        d = s + d / h * u, c = l + c / h * u, t++, TweenMax.killTweensOf(r), TweenMax.to(r, a, {
          x: d,
          y: c,
          ease: Quad.easeIn,
          onComplete: function(e) {
            e.visible = !1, --t <= 0 && i.onComplete && i.onComplete()
          }.bind(this, r)
        })
      }
    }).on("bg:show", function(e, i) {
      for (var a = void 0 !== (i = i || {}).duration ? i.duration : 1, t = 0, n = J.length; n--;) {
        var r = J[n];
        r.visible = !0, t++, TweenMax.killTweensOf(r), TweenMax.to(r, a, {
          x: r._x_before_hide,
          y: r._y_before_hide,
          ease: Quad.easeOut,
          onComplete: function(e) {
            --t <= 0 && (o.is_hided = !1, i.onComplete && i.onComplete())
          }
        })
      }
    });
    f.on("resize", function() {
      clearTimeout(C), C = setTimeout(e, 5), e()
    }), e(), isMobile.any ? (p = new function(e) {
      function i() {
        90 == window.orientation || -90 == window.orientation ? a.orientation = n : a.orientation = t
      }
      var a = this,
        t = a.PORTRAIT = 1,
        n = a.LANDSCAPE = 2;
      a.orientation = 0;
      var o = a.accelerationIncludingGravity = {
          x: 0,
          y: 0,
          z: 0
        },
        r = a.accelerationIncludingGravity_i = {
          x: 0,
          y: 0,
          z: 0
        },
        d = a.rotationRate = {
          alpha: 0,
          beta: 0,
          gamma: 0
        },
        s = a.rotationRate_i = {
          alpha: 0,
          beta: 0,
          gamma: 0
        };
      a.has_rotation_rate = !1, a.inertion = .125;
      var c;
      return void 0 != window.DeviceMotionEvent && (window.ondevicemotion = function(e) {
        null != e.accelerationIncludingGravity.x && function(e, i) {
          e.x = i.x, e.y = i.y, e.z = i.z
        }(o, e.accelerationIncludingGravity), e.rotationRate && null != e.rotationRate.alpha && (a.has_rotation_rate = !0, c = e.rotationRate, d.alpha = e.rotationRate.alpha, d.beta = e.rotationRate.beta, d.gamma = e.rotationRate.gamma)
      }), a.update = function() {
        r.x += (o.x - r.x) * a.inertion, r.y += (o.y - r.y) * a.inertion, r.z += (o.z - r.z) * a.inertion, s.alpha = (d.alpha - s.alpha) * a.inertion, s.beta = (d.beta - s.beta) * a.inertion, s.gamma = (d.gamma - s.gamma) * a.inertion
      }, window.addEventListener("orientationchange", function(a) {
        i(), e && e()
      }, !1), i(), a
    }
    (function() {
      setTimeout(function() {
        e()
      }, 100)
    }),
      function() {
        function e() {
          return Math.random() * o._size + 5.5 * o._size
        }
        for (var i = y.outerHeight(), t = W.length, n = 0; n < W.length; n++)
          for (var o = K[n], r = (e(), 0); r < i + o._size; r += e()) {
            var d = a(o.mixed_sprite.cacheCanvas, n, o._size);
            d.px = function(e, i) {
              return Math.random() * (i - e) + e
            }(-.2, 1.2), d.py = r / i, d.scaleX *= .6, d.scaleY *= .6, d.depth = .1 * (n + Math.random() - t)
          }
      }(), updateParticles = function() {
      p.update(), p.orientation == p.PORTRAIT ? (N = 0 == window.orientation ? 1 : -1, E = -40 * p.accelerationIncludingGravity_i.x * N, H = 40 * p.accelerationIncludingGravity_i.y * N) : (N = 90 == window.orientation ? 1 : -1, E = 40 * p.accelerationIncludingGravity_i.y * N, H = 40 * p.accelerationIncludingGravity_i.x * N);
      for (var e = ~~y.width(), i = ~~y.outerHeight(), a = f.scrollTop(), t = a + l, n = J.length; n--;) {
        var o = J[n];
        o.x = o.px * e, o.y = o.py * i - a;
        var r = (o.y - t) * o.depth;
        o.y += r, o.x += E * o.depth, o.y += H * o.depth
      }
    }) : (f.on("mousemove", function(e) {
      L = e.clientX, Y = e.clientY
    }).on("mouseleave", function() {
      L = -1e4, Y = -1e4
    }), function() {
      for (var e = 0; e < W.length; e++)
        for (var i = K[e], t = 0; t < i._count; t++) {
          var o = a(i.mixed_sprite.cacheCanvas, e, i._size);
          if (o._use_center_collider = i._use_center_collider, o.vx = 0, o.vy = 0, o._use_center_collider) {
            var r = 30 * Math.random(),
              v = {
                x: Math.cos(r) * h,
                y: Math.sin(r) * u
              },
              p = .4 * Math.random() + 1;
            v.x = v.x * p + s, v.x <= 30 ? v.x = 30 : v.x >= d - 30 && (v.x = d - 30), v.y = v.y * p + l, v.y <= 30 ? v.y = 30 : v.y >= c - 30 && (v.y = c - 30), o.x = o.px = v.x, o.y = o.py = v.y
          } else o.x = o.px = n(0, d), o.y = o.py = n(0, c);
          o.t = 10 * Math.random(), o.t_speed = .003 * Math.random() + .001, o.chaos_speed = .003 * Math.random() + .001
        }
    }(), updateParticles = function() {
      if (!o.is_hided)
        for (var e = J.length; e--;) {
          var i = J[e],
            a = i.x - L,
            n = i.y - Y,
            r = Math.sqrt(a * a + n * n),
            v = -Math.min(r - i.radius, 0) / i.radius;
          v *= 1.5;
          var p = .1 * i.radius;
          i.x < p ? i.vx -= .005 * (i.x - p) : i.x > d - p && (i.vx -= .005 * (i.x - (d - p))), i.y < p ? i.vy -= .005 * (i.y - p) : i.y > c - p && (i.vy -= .005 * (i.y - (c - p))), i.vx += a / r * v, i.vy += n / r * v, i.t += i.t_speed, i.vx += Math.sin(i.t) * i.chaos_speed, i.vy += Math.cos(i.t) * i.chaos_speed, i.x += i.vx, i.y += i.vy, i.vx = i.vy = 0;
          var f = i.x + .99 * (i.x - i.px),
            y = i.y + .99 * (i.y - i.py);
          if (i.px = i.x, i.py = i.y, i.x = f, i.y = y, i._use_center_collider) {
            var w = {
                x: s - i.x,
                y: l - i.y
              },
              b = Math.sqrt(w.x * w.x + w.y * w.y);
            t(i.x, i.y, "red");
            var g = function(e, i) {
              var a = Math.atan2(i, e),
                n = {
                  x: Math.cos(a) * h,
                  y: Math.sin(a) * u
                },
                o = Math.sqrt(n.x * n.x + n.y * n.y);
              return t(s - n.x, l - n.y, "green"), o
            }(w.x, w.y);
            if (b < g) {
              var _ = 1 - b / g;
              ! function(e) {
                var i = Math.sqrt(e.x * e.x + e.y * e.y);
                i = 1 / i, e.x *= i, e.y *= i
              }(w),
                function(e) {
                  e.x = -e.x, e.y = -e.y
                }(w),
                function(e, i) {
                  e.x *= i, e.y *= i
                }(w, _), i.vx += w.x, i.vy += w.y
            }
          }
          i.rotation = Math.atan2(M - i.y, s - i.x) * x + 90
        }
    }), T();
    var Q
  }
});

setTimeout(function() {
  // $(".bg-animation").trigger("bg:hide");
});
