/* DO NOT MODIFY. This file was compiled Sun, 04 Sep 2011 01:32:00 GMT from
 * /home/test/code/rails/_personal/gchamp/app/coffeescripts/views/images/image.coffee
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
  (_base = App.Views).Images || (_base.Images = {});
  App.Views.Images.ImageView = (function() {
    __extends(ImageView, Backbone.View);
    function ImageView() {
      ImageView.__super__.constructor.apply(this, arguments);
    }
    ImageView.prototype.template = function() {
      return JST["images/image"];
    };
    ImageView.prototype.events = {
      "click #zoom_buttons .button": "setZoom"
    };
    ImageView.prototype.initialize = function(options) {
      this.options = options;
      $('.screen').hide();
      $('#viewport').attr("content", "width=device-width, initial-scale=1.0");
      return this.render();
    };
    ImageView.prototype.render = function() {
      var td;
      td = {};
      td.src = this.options.src;
      td.from = this.options.from;
      console.log(td);
      $(this.el).html(this.template()(td)).show();
      this.wad = new Wadda('thumb', {
        lensSize: 120,
        xOff: 0,
        yOff: -50,
        fadeLens: false,
        zoom: 2
      });
      return this;
    };
    ImageView.prototype.setZoom = function(e) {
      var zoom;
      zoom = parseInt($(e.target).text().replace("x", ""));
      return this.wad.setZoom(zoom);
    };
    return ImageView;
  })();
}).call(this);
