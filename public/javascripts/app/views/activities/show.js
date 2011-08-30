/* DO NOT MODIFY. This file was compiled Tue, 30 Aug 2011 00:51:10 GMT from
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
      $('#point').hide();
      $('.button').live('touchstart', function(e) {
        return $(e.target).addClass('depressed');
      });
      $('.button').live('touchend', function(e) {
        return $(e.target).removeClass('depressed');
      });
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
