/*!
 * Active Scroll v1.0.0
 * jQuery Plugin for Smooth scrolling with anchor highlighting
 * MIT License
 * Author: Gareth Cozens (Cuzzy)
 */
!function (t) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery);
}(function (t) {
  "use strict";
  var a, e, i = {data: "scroll", active: "active", offset: 20, animate: 1e3, callback: function() {}}, o = [], n = "", r = {
    closest: function (t) {
      var a = o[n], e = Math.abs(t - a);
      for (var i in o) {
        var r = Math.abs(t - o[i]);
        e > r && (e = r, a = o[i]);
      }
      return a;
    }, attach: function () {
      t(window).scroll(function () {
        var a = t(window).scrollTop(), n = r.closest(a);
        e.removeClass(i.active);
        var s = i.firstKey;
        for (var c in o) if (o[c] === n) {
          s = c;
          break;
        }
        t("[data-" + i.data + "=\"" + s + "\"]").addClass(i.active);
      }), t("[data-" + i.data + "]").click(function (n) {
        i.callback();
        var r = t(this).data(i.data);
        t("html, body").animate({scrollTop: t("#" + r).offset().top - i.offset}, i.animate, function () {
          var n = t(window).scrollTop() + i.offset;
          n !== o[r] && (e.removeClass(i.active), t(a).find("[data-" + i.data + "=\"" + r + "\"]").addClass(i.active));
        }), n.stopImmediatePropagation();
      });
    }, init: function (s, c) {
      a = s, e = t(a).find("[data-" + i.data + "]"), i = t.extend(i, c);
      var f = 0;
      e.each(function () {
        var a = t(this).data(i.data);
        o[a] = t("#" + a).offset().top, n = 0 === f ? a : n, f++;
      }), r.attach();
    }
  };
  t.fn.activescroll = function (t) {
    return r.init(this, t);
  };
});