/* DO NOT MODIFY. This file was compiled Tue, 30 Aug 2011 10:28:04 GMT from
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
    ShowView.prototype.initialize = function(options) {
      this.marks = new App.Collections.MarksCollection();
      this.marks.bind('add', __bind(function(m) {
        return this.render();
      }, this));
      $('.screen').hide();
      if (options.point.id === options.route.start_point_id) {
        options.user.current_activity = options.activity_instance.id;
        return this.mark = this.marks.create({
          activity_instance_id: options.activity_instance.id,
          m_type: "start",
          point_id: options.point.id,
          time: new Date().getTime()
        });
      }
    };
    ShowView.prototype.render = function() {
      var td;
      td = this.options.activity_instance.toJSON();
      td.marks = this.marks.toJSON();
      $(this.el).html(this.template()(td)).show();
      return this;
    };
    return ShowView;
  })();
}).call(this);
