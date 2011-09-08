/* DO NOT MODIFY. This file was compiled Sun, 04 Sep 2011 06:59:21 GMT from
 * /home/test/code/rails/_personal/gchamp/app/coffeescripts/views/galleries/gallery.coffee
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
  (_base = App.Views).Galleries || (_base.Galleries = {});
  App.Views.Galleries.GalleryView = (function() {
    __extends(GalleryView, Backbone.View);
    function GalleryView() {
      GalleryView.__super__.constructor.apply(this, arguments);
    }
    GalleryView.prototype.template = function() {
      return JST["gallery/gallery"];
    };
    GalleryView.prototype.events = function() {
      return {
        "click #gallery img": "zoomImage"
      };
    };
    GalleryView.prototype.initialize = function(options) {
      this.options = options;
      $('.screen').hide();
      this.render();
      return this.resizeImages();
    };
    GalleryView.prototype.render = function() {
      var i, img, td, _len, _ref;
      td = this.options.page.attributes.content;
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
    GalleryView.prototype.resizeImages = function() {
      return $('#gallery img').width(280);
    };
    GalleryView.prototype.zoomImage = function(e) {
      this.view = new App.Views.Images.ImageView({
        el: $("#image_zoom"),
        from: window.location.pathname + window.location.hash,
        src: _.last($(e.target).attr("src").split('/')).replace(".jpg", "")
      });
      return this.view.render;
    };
    GalleryView.prototype.transform = function(e) {
      return $(e.target).animate({
        translateY: '+=150'
      }, 1500);
    };
    return GalleryView;
  })();
}).call(this);
