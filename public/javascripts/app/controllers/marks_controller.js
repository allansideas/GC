/* DO NOT MODIFY. This file was compiled Thu, 25 Aug 2011 00:25:53 GMT from
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
  App.Controllers.MarksController = (function() {
    __extends(MarksController, Backbone.Controller);
    function MarksController() {
      MarksController.__super__.constructor.apply(this, arguments);
    }
    MarksController.prototype.initialize = function(options) {
      this.marks = new App.Collections.MarksCollection();
      return this.marks.refresh(options.marks);
    };
    MarksController.prototype.routes = {
      "/index": "index",
      "/:id": "show",
      ".*": "index"
    };
    MarksController.prototype.newMark = function() {
      this.view = new App.Views.Marks.NewView({
        model: new this.marks.model()
      });
      return $("#marks").html(this.view.render().el);
    };
    MarksController.prototype.index = function() {
      console.log("index");
      return this.view = new App.Views.Marks.IndexView({
        marks: this.marks,
        el: $('#main')
      });
    };
    MarksController.prototype.show = function(id) {
      var marks;
      marks = this.marks.get(id);
      this.view = new App.Views.Marks.ShowView({
        model: mark
      });
      return $("#marks").html(this.view.render().el);
    };
    return MarksController;
  })();
}).call(this);
