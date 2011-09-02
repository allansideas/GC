/* DO NOT MODIFY. This file was compiled Fri, 02 Sep 2011 02:06:35 GMT from
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
      this.page.all_activity_instances.min(function(ai) {
        if (ai.attributes.total_milliseconds !== null) {
          return ai.attributes.total_milliseconds;
        }
      });
      this.page.pages = new App.Collections.PagesCollection();
      return this.page.pages.reset(options.pages);
    };
    PointsRouter.prototype.routes = {
      "": "showPoint",
      "/activities/:activity": "showActivity",
      "/start/:activity_id": "startActivity",
      "/page/:page_id": "showPage",
      "/page/:page_id/:sub_page_id": "showSubPage"
    };
    PointsRouter.prototype.showPoint = function() {
      if (!this.user.attributes.current_activity_instance) {
        return this.view = new App.Views.Points.ShowView({
          point: this.point,
          activities: this.activities,
          el: $('#point'),
          pages: this.page.pages
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
    PointsRouter.prototype.showPage = function(page_id) {
      console.log(this.page.pages.get(page_id));
      return this.view = new App.Views.Pages.PageView({
        page: this.page.pages.get(page_id),
        el: $('#info_page')
      });
    };
    return PointsRouter;
  })();
}).call(this);
