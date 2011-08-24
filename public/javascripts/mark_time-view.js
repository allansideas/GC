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
  gc.Views || (gc.Views = {});
  gc.Views.MarkTimeView = (function() {
    __extends(MarkTimeView, Backbone.View);
    function MarkTimeView() {
      MarkTimeView.__super__.constructor.apply(this, arguments);
    }
    MarkTimeView.prototype.initialize = function(options) {
      return alert("marktime");
    };
    return MarkTimeView;
  })();
}).call(this);
