/* DO NOT MODIFY. This file was compiled Thu, 25 Aug 2011 00:25:53 GMT from
 * /home/test/code/rails/_personal/gchamp/app/coffeescripts/views/marks/new_view.coffee
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
  App.Views.Projects.NewView = (function() {
    __extends(NewView, Backbone.View);
    function NewView() {
      NewView.__super__.constructor.apply(this, arguments);
    }
    NewView.prototype.template = function() {
      return JST["new"];
    };
    NewView.prototype.events = {
      "submit #project-form": "save"
    };
    NewView.prototype.save = function() {
      this.options.model.save();
      return false;
    };
    NewView.prototype.render = function() {
      $(this.el).html(this.template()(this.options.model.toJSON()));
      return this;
    };
    return NewView;
  })();
}).call(this);
