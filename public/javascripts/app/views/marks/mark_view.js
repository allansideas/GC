/* DO NOT MODIFY. This file was compiled Wed, 31 Aug 2011 09:20:18 GMT from
 * /home/test/code/rails/_personal/gchamp/app/coffeescripts/views/marks/mark_view.coffee
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
  (_base = App.Views).Marks || (_base.Marks = {});
  App.Views.Marks.MarkView = (function() {
    __extends(MarkView, Backbone.View);
    function MarkView() {
      MarkView.__super__.constructor.apply(this, arguments);
    }
    MarkView.prototype.template = function() {
      return JST["marks/mark"];
    };
    MarkView.prototype.initialize = function() {
      this.getTime();
      return this.render();
    };
    MarkView.prototype.getTime = function() {
      var ago;
      if (this.options.ended_at !== void 0) {
        ago = _.date(this.options.model.attributes.time).from(_.date(this.options.ended_at), true, true) * -1;
      } else {
        ago = _.date(this.options.model.attributes.time).fromNow(false, true) * -1;
      }
      this.mins = Math.floor((ago / 1000) / 60);
      return this.seconds = Math.floor((ago / 1000) % 60);
    };
    MarkView.prototype.render = function() {
      var td;
      td = this.options.model.toJSON();
      td.mins = this.mins;
      td.seconds = this.seconds;
      td.point_name = "point name";
      $(this.el).prepend(this.template()(td));
      return this;
    };
    return MarkView;
  })();
}).call(this);
