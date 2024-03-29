/* DO NOT MODIFY. This file was compiled Sat, 27 Aug 2011 10:59:55 GMT from
 * /home/test/code/rails/_personal/gchamp/app/coffeescripts/views/timer_view.coffee
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
  (_base = App.Views).Timers || (_base.Timers = {});
  App.Views.Timers.TimerView = (function() {
    __extends(TimerView, Backbone.View);
    function TimerView() {
      TimerView.__super__.constructor.apply(this, arguments);
    }
    TimerView.prototype.template = function() {
      return JST["timers/timer"];
    };
    TimerView.prototype.initialize = function() {
      return this.getTime();
    };
    TimerView.prototype.getTime = function() {
      var ago;
      if (this.options.end_time !== void 0) {
        ago = _.date(this.options.from.attributes.time).from(_.date(this.options.end_time.attributes.time), true, true) * -1;
      } else {
        ago = _.date(this.options.from.attributes.time).fromNow(false, true) * -1;
      }
      this.mins = Math.floor((ago / 1000) / 60);
      return this.seconds = Math.floor((ago / 1000) % 60);
    };
    TimerView.prototype.render = function() {
      var params;
      params = {
        m_type: this.options.from.attributes.m_type,
        mins: this.mins,
        seconds: this.seconds,
        name: this.options.from.attributes.name
      };
      $(this.el).html(this.template()(params));
      return this;
    };
    return TimerView;
  })();
}).call(this);
