/* DO NOT MODIFY. This file was compiled Mon, 29 Aug 2011 10:22:58 GMT from
 * /home/test/code/rails/_personal/gchamp/app/coffeescripts/models/point.coffee
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
  App.Models.Point = (function() {
    __extends(Point, Backbone.Model);
    function Point() {
      Point.__super__.constructor.apply(this, arguments);
    }
    Point.prototype.name = "point";
    Point.prototype.url = "/points";
    return Point;
  })();
  App.Collections.PointsCollection = (function() {
    __extends(PointsCollection, Backbone.Collection);
    function PointsCollection() {
      PointsCollection.__super__.constructor.apply(this, arguments);
    }
    PointsCollection.prototype.model = App.Models.Point;
    PointsCollection.prototype.url = '/points';
    return PointsCollection;
  })();
}).call(this);
