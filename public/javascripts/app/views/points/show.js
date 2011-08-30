/* DO NOT MODIFY. This file was compiled Tue, 30 Aug 2011 00:15:48 GMT from
 * /home/test/code/rails/_personal/gchamp/app/coffeescripts/views/points/show.coffee
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
  (_base = App.Views).Points || (_base.Points = {});
  App.Views.Points.ShowView = (function() {
    __extends(ShowView, Backbone.View);
    function ShowView() {
      ShowView.__super__.constructor.apply(this, arguments);
    }
    ShowView.prototype.template = function() {
      return JST["points/show"];
    };
    ShowView.prototype.initialize = function() {
      $('#point').show();
      $('#activity').hide();
      return this.render();
    };
    ShowView.prototype.render = function() {
      var td;
      td = this.options.point.toJSON();
      td.activities = this.options.activities.toJSON();
      $(this.el).html(this.template()(td)).fadeIn(300);
      return this;
    };
    return ShowView;
  })();
}).call(this);
