/* DO NOT MODIFY. This file was compiled Tue, 30 Aug 2011 02:25:18 GMT from
 * /home/test/code/rails/_personal/gchamp/app/coffeescripts/models/activity.coffee
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
  App.Models.Activity = (function() {
    __extends(Activity, Backbone.Model);
    function Activity() {
      Activity.__super__.constructor.apply(this, arguments);
    }
    Activity.prototype.url = "/activities";
    return Activity;
  })();
  App.Collections.ActivitiesCollection = (function() {
    __extends(ActivitiesCollection, Backbone.Collection);
    function ActivitiesCollection() {
      ActivitiesCollection.__super__.constructor.apply(this, arguments);
    }
    ActivitiesCollection.prototype.model = App.Models.Activity;
    ActivitiesCollection.prototype.url = '/activities';
    return ActivitiesCollection;
  })();
}).call(this);
