/* DO NOT MODIFY. This file was compiled Thu, 25 Aug 2011 22:46:45 GMT from
 * /home/test/code/rails/_personal/gchamp/app/coffeescripts/pages-controller.coffee
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
  gc.Controllers.PagesController = (function() {
    __extends(PagesController, Backbone.Controller);
    function PagesController() {
      PagesController.__super__.constructor.apply(this, arguments);
    }
    PagesController.prototype.routes = {
      "pages/:page": "load_page"
    };
    PagesController.prototype.load_page = function(page) {
      return gc.App.Main.views.push(new gc.Views.PagesView({
        el: $('#marks'),
        page: page
      }));
    };
    PagesController.prototype.index = function() {
      return gc.App.Main.views.push(new gc.Views.PagesView({
        el: $('#main')
      }));
    };
    return PagesController;
  })();
}).call(this);
