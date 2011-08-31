/* DO NOT MODIFY. This file was compiled Wed, 31 Aug 2011 05:39:30 GMT from
 * /home/test/code/rails/_personal/gchamp/app/coffeescripts/models/activity_instance.coffee
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
  App.Models.ActivityInstance = (function() {
    __extends(ActivityInstance, Backbone.Model);
    function ActivityInstance() {
      ActivityInstance.__super__.constructor.apply(this, arguments);
    }
    ActivityInstance.prototype.url = function() {
      var base;
      base = '/activity_instances';
      if (this.isNew()) {
        return base;
      } else {
        return base + '/' + this.id;
      }
    };
    return ActivityInstance;
  })();
  App.Collections.ActivityInstancesCollection = (function() {
    __extends(ActivityInstancesCollection, Backbone.Collection);
    function ActivityInstancesCollection() {
      ActivityInstancesCollection.__super__.constructor.apply(this, arguments);
    }
    ActivityInstancesCollection.prototype.model = App.Models.ActivityInstance;
    ActivityInstancesCollection.prototype.url = '/activity_instances';
    return ActivityInstancesCollection;
  })();
}).call(this);
