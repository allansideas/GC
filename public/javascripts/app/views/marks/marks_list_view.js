/* DO NOT MODIFY. This file was compiled Wed, 31 Aug 2011 01:29:29 GMT from
 * /home/test/code/rails/_personal/gchamp/app/coffeescripts/views/marks/marks_list_view.coffee
 */

(function() {
  var _base;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  (_base = App.Views).Marks || (_base.Marks = {});
  App.Views.Marks.MarksListView = (function() {
    __extends(MarksListView, Backbone.View);
    function MarksListView() {
      MarksListView.__super__.constructor.apply(this, arguments);
    }
    MarksListView.prototype.template = function() {
      return JST["marks/marks_list"];
    };
    MarksListView.prototype.render = function() {
      var td;
      td = {};
      td.context = this.options.state;
      td.marks = this.options.collection.toJSON();
      $(this.el).html(this.template()(td)).fadeIn(300);
      return this;
    };
    return MarksListView;
  })();
}).call(this);
