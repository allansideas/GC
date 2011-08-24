/* DO NOT MODIFY. This file was compiled Wed, 24 Aug 2011 11:17:50 GMT from
 * /home/test/code/rails/_personal/gchamp/app/coffeescripts/views/marks/mark_view.coffee
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
  (_base = App.Views).Marks || (_base.Marks = {});
  App.Views.Marks.MarkView = (function() {
    __extends(MarkView, Backbone.View);
    function MarkView() {
      MarkView.__super__.constructor.apply(this, arguments);
    }
    MarkView.prototype.template = function() {
      return JST["marks/mark"];
    };
    MarkView.prototype.events = {
      "click .destroy": "destroy"
    };
    MarkView.prototype.tagName = "div";
    MarkView.prototype.destroy = function() {
      this.options.model.destroy();
      this.remove();
      return false;
    };
    MarkView.prototype.render = function() {
      $(this.el).css({
        display: 'none'
      });
      $(this.el).html(this.template()(this.options.model.toJSON())).fadeIn(300);
      return this;
    };
    return MarkView;
  })();
}).call(this);
