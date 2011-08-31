/* DO NOT MODIFY. This file was compiled Wed, 31 Aug 2011 20:57:59 GMT from
 * /home/test/code/rails/_personal/gchamp/app/coffeescripts/views/activity_instances/show.coffee
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
  }, __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  (_base = App.Views).ActivityInstances || (_base.ActivityInstances = {});
  App.Views.ActivityInstances.ShowView = (function() {
    __extends(ShowView, Backbone.View);
    function ShowView() {
      ShowView.__super__.constructor.apply(this, arguments);
    }
    ShowView.prototype.template = function() {
      return JST["activity_instances/show"];
    };
    ShowView.prototype.events = {
      "click #split": "split"
    };
    ShowView.prototype.initialize = function(options) {
      var now;
      $('.screen').hide();
      this.options = options;
      if (options.marks === void 0) {
        options.marks = new App.Collections.MarksCollection();
      }
      this.marks = options.marks;
      this.marks.bind('add', __bind(function(m) {
        return this.addMarks();
      }, this));
      if (options.point.id === options.route.start_point_id) {
        options.user.set({
          current_activity: options.activity.id,
          current_activity_instance: options.activity_instance.id
        });
        options.user.save();
        now = new Date().getTime();
        this.mark = this.marks.create({
          activity_instance_id: options.activity_instance.id,
          m_type: "start",
          point_id: options.point.id,
          time: now
        });
        setInterval((__bind(function() {
          return this.updateTimes();
        }, this)), 1000);
      } else if (options.point.id === options.route.end_point_id) {
        console.log("end");
        now = new Date().getTime();
        this.mark = this.marks.create({
          activity_instance_id: options.activity_instance.id,
          m_type: "end",
          point_id: options.point.id,
          time: now
        });
        this.activity_instances = new App.Collections.ActivityInstancesCollection();
        this.options.activity_instance.set({
          total_milliseconds: new Date().getTime() - this.marks.find(function(m) {
            return m.attributes.m_type === "start";
          }).attributes.time
        });
        this.options.activity_instance.save();
      }
      return this.render();
    };
    ShowView.prototype.play = function() {
      var now;
      now = new Date().getTime();
      return this.mark = this.marks.create({
        activity_instance_id: this.options.activity_instance.id,
        m_type: "split",
        point_id: this.options.point.id,
        time: now
      });
    };
    ShowView.prototype.split = function() {
      var now;
      now = new Date().getTime();
      return this.mark = this.marks.create({
        activity_instance_id: this.options.activity_instance.id,
        m_type: "split",
        point_id: this.options.point.id,
        time: now
      });
    };
    ShowView.prototype.addMark = function(mark) {
      var m, _i, _len, _ref;
      _ref = this.marks.models;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        m = _ref[_i];
        if (m.attributes.m_type === "end") {
          this.ended_at = m.attributes.time;
        }
      }
      if (this.ended_at !== void 0) {
        this.options.user.set({
          current_activity: null,
          current_activity_instance: null
        });
        this.options.user.save();
      }
      return this.view = new App.Views.Marks.MarkView({
        el: $("#marks"),
        model: mark,
        ended_at: this.ended_at
      });
    };
    ShowView.prototype.addMarks = function() {
      var mark, _i, _len, _ref, _results;
      $("#marks").html("");
      _ref = this.marks.models;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        mark = _ref[_i];
        _results.push(this.addMark(mark));
      }
      return _results;
    };
    ShowView.prototype.updateTimes = function() {
      return this.addMarks();
    };
    ShowView.prototype.render = function() {
      var td;
      td = this.options.activity.toJSON();
      td.point_name = this.options.point.attributes.name;
      $(this.el).html(this.template()(td)).show();
      return this;
    };
    return ShowView;
  })();
}).call(this);
