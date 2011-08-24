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
  gc.Models || (gc.Models = {});
  gc.Collections || (gc.Collections = {});
  gc.Models.MarkTime = (function() {
    __extends(MarkTime, Backbone.Model);
    function MarkTime() {
      MarkTime.__super__.constructor.apply(this, arguments);
    }
    MarkTime.prototype.urlRoot = "/mark_times";
    return MarkTime;
  })();
  gc.Collections.MarkTimesCollection = (function() {
    __extends(MarkTimesCollection, Backbone.Collection);
    function MarkTimesCollection() {
      MarkTimesCollection.__super__.constructor.apply(this, arguments);
    }
    MarkTimesCollection.prototype.model = gc.Models.MarkTime;
    MarkTimesCollection.prototype.url = "/mark_times";
    return MarkTimesCollection;
  })();
}).call(this);
