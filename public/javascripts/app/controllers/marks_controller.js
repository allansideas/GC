/* DO NOT MODIFY. This file was compiled Fri, 26 Aug 2011 02:46:39 GMT from
 * /home/test/code/rails/_personal/gchamp/app/coffeescripts/controllers/marks_controller.coffee
 */

(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  App.Routers.MarksRouter = (function() {
    __extends(MarksRouter, Backbone.Router);
    function MarksRouter() {
      MarksRouter.__super__.constructor.apply(this, arguments);
    }
    MarksRouter.prototype.initialize = function(options) {
      this.marks = new App.Collections.MarksCollection();
      return this.marks.reset(options.marks);
    };
    MarksRouter.prototype.routes = {
      ".*": "index",
      "/qr/:code": "namedMark",
      "/custom_split": "customSplit"
    };
    MarksRouter.prototype.index = function(options) {
      var mark, _i, _len, _ref;
      console.log("index");
      this.view = new App.Views.Marks.IndexView({
        marks: this.marks,
        el: $('#main')
      });
      this.end_model = {};
      _ref = this.marks.models;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        mark = _ref[_i];
        if (mark.attributes.m_type === "end") {
          this.end_model = mark;
        }
      }
      return this.view.setupMarks(this.end_model);
    };
    MarksRouter.prototype.namedMark = function(code) {
      return this.view = new App.Views.Marks.IndexView({
        marks: this.marks,
        el: $('#main'),
        code: code
      });
    };
    return MarksRouter;
  })();
}).call(this);
