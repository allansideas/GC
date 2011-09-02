/* DO NOT MODIFY. This file was compiled Fri, 02 Sep 2011 03:06:27 GMT from
 * /home/test/code/rails/_personal/gchamp/app/coffeescripts/views/pages/page_view.coffee
 */

(function() {
  var _base;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  (_base = App.Views).Pages || (_base.Pages = {});
  App.Views.Pages.PageView = (function() {
    __extends(PageView, Backbone.View);
    function PageView() {
      PageView.__super__.constructor.apply(this, arguments);
    }
    PageView.prototype.template = function() {
      return JST["pages/page"];
    };
    PageView.prototype.events = function() {
      return {
        "click #gallery img": "transform"
      };
    };
    PageView.prototype.initialize = function(options) {
      this.options = options;
      $('.screen').hide();
      this.render();
      return this.resizeImages();
    };
    PageView.prototype.render = function() {
      var i, img, td, _len, _ref;
      td = ' <div id="mini_nav"> <a href="#" class="button small black">back</a> </div>';
      td += this.options.page.attributes.content;
      $(this.el).html(td).show();
      $("#gallery img").animate({
        translateX: '-=800'
      }, 0);
      _ref = $("#gallery img");
      for (i = 0, _len = _ref.length; i < _len; i++) {
        img = _ref[i];
        $(img).delay(i * 90).animate({
          rotateY: '+=' + (2 * Math.PI),
          translateX: '+=800',
          rotateZ: '+=' + (2 * Math.PI)
        }, 600);
      }
      return this;
    };
    PageView.prototype.resizeImages = function() {
      return $('#gallery img').width(280);
    };
    PageView.prototype.transform = function(e) {
      return $(e.target).animate({
        translateY: '+=150'
      }, 1500);
    };
    return PageView;
  })();
}).call(this);
