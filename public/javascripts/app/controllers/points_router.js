/* DO NOT MODIFY. This file was compiled Wed, 31 Aug 2011 07:54:24 GMT from
 * /home/test/code/rails/_personal/gchamp/app/coffeescripts/controllers/points_router.coffee
 */

(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  }, __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  App.Routers.PointsRouter = (function() {
    __extends(PointsRouter, Backbone.Router);
    function PointsRouter() {
      PointsRouter.__super__.constructor.apply(this, arguments);
    }
    PointsRouter.prototype.initialize = function(options) {
      this.activities = new App.Collections.ActivitiesCollection();
      this.activities.reset(options.activities);
      this.point = new App.Models.Point(options.point);
      this.user = new App.Models.User(options.user);
      this.page = {};
      this.page.activity = new App.Models.Activity(options.activity);
      this.page.activity_instance = new App.Models.ActivityInstance(options.activity_instance);
      this.page.marks = new App.Collections.MarksCollection();
      this.page.marks.reset(options.marks);
      this.page.all_activity_instances = new App.Collections.ActivityInstancesCollection();
      this.page.all_activity_instances.reset(options.all_activity_instances);
      return this.page.all_activity_instances.min(function(ai) {
        if (ai.attributes.total_milliseconds !== null) {
          return ai.attributes.total_milliseconds;
        }
      });
    };
    PointsRouter.prototype.routes = {
      "": "showPoint",
      "/activities/:activity": "showActivity",
      "/start/:activity_id": "startActivity"
    };
    PointsRouter.prototype.showPoint = function() {
      if (!this.user.attributes.current_activity_instance) {
        return this.view = new App.Views.Points.ShowView({
          point: this.point,
          activities: this.activities,
          el: $('#point')
        });
      } else {
        return this.view = new App.Views.ActivityInstances.ShowView({
          el: $('#activity_instance'),
          point: this.point,
          user: this.user,
          activity: this.page.activity,
          activity_instance: this.page.activity_instance,
          route: this.page.activity.attributes.route,
          marks: this.page.marks
        });
      }
    };
    PointsRouter.prototype.showActivity = function(activity) {
      return this.view = new App.Views.Activities.ShowView({
        activity: this.activities.get(activity),
        el: $('#activity')
      });
    };
    PointsRouter.prototype.startActivity = function(activity_id) {
      this.activity_instances = new App.Collections.ActivityInstancesCollection();
      this.activity_instances.bind('add', __bind(function(m) {
        return this.view = new App.Views.ActivityInstances.ShowView({
          el: $('#activity_instance'),
          point: this.point,
          user: this.user,
          activity: this.activities.get(activity_id),
          activity_instance: m,
          route: this.route = this.activities.get(activity_id).attributes.route
        });
      }, this));
      return this.activity_instance = this.activity_instances.create({
        user_id: this.user.id,
        activity_id: activity_id
      });
    };
    return PointsRouter;
  })();
}).call(this);
