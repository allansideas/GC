/* DO NOT MODIFY. This file was compiled Wed, 24 Aug 2011 12:26:16 GMT from
 * /home/test/code/rails/_personal/gchamp/app/coffeescripts/views/marks/index_view.coffee
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
  App.Views.Marks.IndexView = (function() {
    __extends(IndexView, Backbone.View);
    function IndexView() {
      IndexView.__super__.constructor.apply(this, arguments);
    }
    IndexView.prototype.events = {
      'click #start': 'start',
      'click #show_time': 'showTime',
      'click #split': 'split'
    };
    IndexView.prototype.initialize = function() {
      _.bindAll(this, 'addOne', 'addAll');
      this.options.marks.bind('add', this.addOne, this);
      this.addAll();
      return this.splits = [];
    };
    IndexView.prototype.start = function() {
      var now;
      now = new Date().getTime();
      this.start_time = this.options.marks.create({
        time: now,
        m_type: "begin"
      });
      return this.switchButton(['split', 'end']);
    };
    IndexView.prototype.split = function() {
      var now;
      now = new Date().getTime();
      this.split_time = this.options.marks.create({
        time: now,
        m_type: "split"
      });
      this.splits.push(this.split_time);
      return this.showTime();
    };
    IndexView.prototype.end = function() {
      var now;
      now = new Date().getTime();
      this.end_time = this.options.marks.create({
        time: now,
        m_type: "end"
      });
      return this.switchButton("start");
    };
    IndexView.prototype.showTime = function() {
      var split, split_tv, start_tv, _i, _len, _ref, _results;
      $('#timers').children().remove();
      start_tv = new App.Views.Timers.TimerView({
        from: this.start_time
      });
      this.$("#timers").append(start_tv.render().el);
      _ref = this.splits;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        split = _ref[_i];
        split_tv = new App.Views.Timers.TimerView({
          from: split
        });
        _results.push(this.$("#timers").append(split_tv.render().el));
      }
      return _results;
    };
    IndexView.prototype.createTimerEl = function(from, mins, seconds) {
      return $("#timers").append("<div class='timer_time'>" + from + " " + mins + "m " + seconds + "s</div>");
    };
    IndexView.prototype.switchButton = function(to_show) {
      var show, _i, _len, _results;
      $('#timer_buttons .button').hide();
      _results = [];
      for (_i = 0, _len = to_show.length; _i < _len; _i++) {
        show = to_show[_i];
        console.log(show);
        _results.push($('#' + show).show());
      }
      return _results;
    };
    IndexView.prototype.addAll = function() {
      var mark, _i, _len, _ref;
      _ref = this.options.marks.models;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        mark = _ref[_i];
        this.addOne(mark);
      }
      return this.fadeIn();
    };
    IndexView.prototype.addOne = function(mark) {
      var mv;
      mv = new App.Views.Marks.MarkView({
        model: mark
      });
      return this.$("#marks_list").append(mv.render().el);
    };
    IndexView.prototype.fadeIn = function() {
      var $mark, i, mark, _len, _ref, _results;
      _ref = $('.mark');
      _results = [];
      for (i = 0, _len = _ref.length; i < _len; i++) {
        mark = _ref[i];
        $mark = $(mark);
        _results.push($mark.fadeTo(0, 0).delay(i * 40).fadeTo(100, 1));
      }
      return _results;
    };
    return IndexView;
  })();
}).call(this);