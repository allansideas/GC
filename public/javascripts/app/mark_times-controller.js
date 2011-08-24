/* DO NOT MODIFY. This file was compiled Tue, 23 Aug 2011 04:51:48 GMT from
 * /home/test/code/rails/_personal/gchamp/app/coffeescripts/mark_times-controller.coffee
 */

(function() {
  var gc;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  gc = window.Gc || (window.Gc = {});
  gc.Controllers || (gc.Controllers = {});
  gc.Controllers.MarkTimesController = (function() {
    __extends(MarkTimesController, Backbone.Controller);
    function MarkTimesController() {
      MarkTimesController.__super__.constructor.apply(this, arguments);
    }
    MarkTimesController.prototype.initialize = function() {
      return console.log("marktimes");
    };
    MarkTimesController.prototype.routes = {
      "": "index",
      "mark_times/:id": "load_page"
    };
    MarkTimesController.prototype.load_page = function(id) {
      return gc.App.Main.views.push(new gc.Views.MarkTimeView({
        el: $('#mark_times')
      }));
    };
    MarkTimesController.prototype.index = function() {
      return gc.App.Main.views.push(new gc.Views.MarkTimeView({
        el: $('#mark_times')
      }));
    };
    return MarkTimesController;
  })();
}).call(this);
