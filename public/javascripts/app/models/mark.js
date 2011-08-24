/* DO NOT MODIFY. This file was compiled Wed, 24 Aug 2011 04:54:41 GMT from
 * /home/test/code/rails/_personal/gchamp/app/coffeescripts/models/mark.coffee
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
  App.Models.Mark = (function() {
    __extends(Mark, Backbone.Model);
    function Mark() {
      Mark.__super__.constructor.apply(this, arguments);
    }
    Mark.prototype.initialize = function() {
      return this.prettyTime();
    };
    Mark.prototype.url = "/marks";
    Mark.prototype.prettyTime = function() {
      return this.set({
        prettyTime: _.date(this.attributes.time).format('ddd, hh:mm')
      });
    };
    return Mark;
  })();
  App.Collections.MarksCollection = (function() {
    __extends(MarksCollection, Backbone.Collection);
    function MarksCollection() {
      MarksCollection.__super__.constructor.apply(this, arguments);
    }
    MarksCollection.prototype.model = App.Models.Mark;
    MarksCollection.prototype.url = '/marks';
    return MarksCollection;
  })();
}).call(this);
