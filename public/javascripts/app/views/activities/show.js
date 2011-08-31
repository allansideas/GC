/* DO NOT MODIFY. This file was compiled Wed, 31 Aug 2011 09:47:28 GMT from
 * /home/test/code/rails/_personal/gchamp/app/coffeescripts/views/activities/show.coffee
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
  (_base = App.Views).Activities || (_base.Activities = {});
  App.Views.Activities.ShowView = (function() {
    __extends(ShowView, Backbone.View);
    function ShowView() {
      ShowView.__super__.constructor.apply(this, arguments);
    }
    ShowView.prototype.template = function() {
      return JST["activities/show"];
    };
    ShowView.prototype.initialize = function() {
      $('.screen').hide();
      return this.render();
    };
    ShowView.prototype.render = function() {
      var td;
      td = this.options.activity.toJSON();
      $(this.el).html(this.template()(td)).show();
      return this;
    };
    return ShowView;
  })();
}).call(this);
