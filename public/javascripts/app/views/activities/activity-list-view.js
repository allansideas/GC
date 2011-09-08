/* DO NOT MODIFY. This file was compiled Wed, 07 Sep 2011 20:57:48 GMT from
 * /home/test/code/rails/_personal/gchamp/app/coffeescripts/views/activities/activity-list-view.coffee
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
  App.Views.Activities.ActivityListView = (function() {
    __extends(ActivityListView, Backbone.View);
    function ActivityListView() {
      ActivityListView.__super__.constructor.apply(this, arguments);
    }
    ActivityListView.prototype.template = function() {
      return JST["activities/activity_list"];
    };
    ActivityListView.prototype.initialize = function() {
      $('.screen').hide();
      $('#activities').show();
      return this.render();
    };
    ActivityListView.prototype.render = function() {
      var td;
      console.log(this.options);
      td = {};
      td.activities = this.options.activities.toJSON();
      $(this.el).html(this.template()(td)).fadeIn(300);
      return this;
    };
    return ActivityListView;
  })();
}).call(this);
