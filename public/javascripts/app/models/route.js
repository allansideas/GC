/* DO NOT MODIFY. This file was compiled Mon, 29 Aug 2011 10:22:58 GMT from
 * /home/test/code/rails/_personal/gchamp/app/coffeescripts/models/route.coffee
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
  App.Models.Route = (function() {
    __extends(Route, Backbone.Model);
    function Route() {
      Route.__super__.constructor.apply(this, arguments);
    }
    Route.prototype.name = "route";
    Route.prototype.url = "/routes";
    return Route;
  })();
  App.Collections.RoutesCollection = (function() {
    __extends(RoutesCollection, Backbone.Collection);
    function RoutesCollection() {
      RoutesCollection.__super__.constructor.apply(this, arguments);
    }
    RoutesCollection.prototype.model = App.Models.Activity;
    RoutesCollection.prototype.url = '/routes';
    return RoutesCollection;
  })();
}).call(this);
