/* DO NOT MODIFY. This file was compiled Tue, 23 Aug 2011 04:51:48 GMT from
 * /home/test/code/rails/_personal/gchamp/app/coffeescripts/views/marks/show_view.coffee
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
  (_base = App.Views).Projects || (_base.Projects = {});
  App.Views.Projects.ShowView = (function() {
    __extends(ShowView, Backbone.View);
    function ShowView() {
      ShowView.__super__.constructor.apply(this, arguments);
    }
    ShowView.prototype.template = function() {
      return JST["show"];
    };
    ShowView.prototype.render = function() {
      $(this.el).html(this.template()(this.options.model.toJSON()));
      return this;
    };
    return ShowView;
  })();
}).call(this);
