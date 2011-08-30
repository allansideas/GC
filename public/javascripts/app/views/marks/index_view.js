/* DO NOT MODIFY. This file was compiled Sat, 27 Aug 2011 11:52:27 GMT from
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
      'click #show_time': 'setupMarks',
      'click #end': 'end'
    };
    IndexView.prototype.initialize = function() {
      _.bindAll(this, 'addOne', 'addAll');
      this.options.marks.bind('add', this.setupMarks, this);
      this.addAll();
      this.splits = [];
      this.started = false;
      if (this.options.code) {
        return this.split();
      }
    };
    IndexView.prototype.start = function() {
      var now;
      now = new Date().getTime();
      if (this.options.code) {
        this.start_time = this.options.marks.create({
          time: now,
          m_type: "start",
          name: this.options.code
        });
        return this.switchButton(['split', 'end']);
      }
    };
    IndexView.prototype.split = function() {
      var m, now, _i, _len, _ref;
      now = new Date().getTime();
      this.started = false;
      if (this.options.code) {
        _ref = this.options.marks.models;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          m = _ref[_i];
          if (m.attributes.m_type === "start") {
            this.started = true;
          }
        }
        if (this.started !== false) {
          console.log("split");
          this.split_time = this.options.marks.create({
            time: now,
            m_type: "split",
            name: this.options.code
          });
          this.splits.push(this.split_time);
          return this.switchButton(['split', 'end']);
        } else {
          return this.start();
        }
      }
    };
    IndexView.prototype.end = function() {
      var now;
      now = new Date().getTime();
      this.end_time = this.options.marks.create({
        time: now,
        m_type: "end"
      });
      $('#timer_buttons').hide();
      return $('#show_time').hide();
    };
    IndexView.prototype.setupMarks = function() {
      var end_tv, mark, split_tv, start_tv, _i, _len, _ref, _results;
      $('#timers').children().remove();
      _ref = this.options.marks.models;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        mark = _ref[_i];
        if (mark.attributes.m_type === "start") {
          this.start_time = mark;
          start_tv = new App.Views.Timers.TimerView({
            from: mark
          });
          this.$("#timers").append(start_tv.render().el);
        }
        if (mark.attributes.m_type === "split") {
          this.splits.push(mark);
          split_tv = new App.Views.Timers.TimerView({
            from: mark
          });
          this.$("#timers").append(split_tv.render().el);
        }
        _results.push(mark.attributes.m_type === "end" ? (this.end_model = mark, end_tv = new App.Views.Timers.TimerView({
          from: mark,
          end_time: this.end_model ? this.end_model : void 0
        }), this.$("#timers").append(end_tv.render().el)) : void 0);
      }
      return _results;
    };
    IndexView.prototype.switchButton = function(to_show) {
      var show, _i, _len, _results;
      $('#timer_buttons .button').hide();
      if (_.isArray(to_show)) {
        _results = [];
        for (_i = 0, _len = to_show.length; _i < _len; _i++) {
          show = to_show[_i];
          _results.push($('#' + show).show());
        }
        return _results;
      } else {
        return $('#' + to_show).show();
      }
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
