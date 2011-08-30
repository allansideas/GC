/* DO NOT MODIFY. This file was compiled Mon, 29 Aug 2011 06:57:32 GMT from
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
      return JST["marks/show"];
    };
    ShowView.prototype.render = function() {
      $(this.el).html(this.template()(this.options.model.toBackboneJSON()));
      return this;
    };
    return ShowView;
  })();
}).call(this);
