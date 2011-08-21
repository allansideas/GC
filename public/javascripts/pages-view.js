/* DO NOT MODIFY. This file was compiled Sun, 21 Aug 2011 11:44:17 GMT from
 * /home/test/code/rails/_personal/gchamp/app/coffeescripts/pages-view.coffee
 */

(function() {
  var gc;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  gc = window.Gc || (window.Gc = {});
  gc.Views || (gc.Views = {});
  gc.Views.PagesView = (function() {
    __extends(PagesView, Backbone.View);
    function PagesView() {
      PagesView.__super__.constructor.apply(this, arguments);
    }
    PagesView.prototype.initialize = function(options) {
      return this.display_page(options.page);
    };
    PagesView.prototype.display_page = function(page) {
      var targetOffset;
      $('#main_nav li a').removeClass('current');
      targetOffset = this.$("#" + page + "_page").offset().top + -100;
      console.log(targetOffset);
      console.log(page);
      $('html').animate({
        scrollTop: targetOffset
      }, 800);
      return $('li.' + page + " a").addClass('current');
    };
    return PagesView;
  })();
}).call(this);
