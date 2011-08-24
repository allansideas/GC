gc = window.Gc ||= {}
gc.Models ||= {}
gc.Collections ||= {}

class gc.Models.MarkTime extends Backbone.Model
  urlRoot: "/mark_times"

class gc.Collections.MarkTimesCollection extends Backbone.Collection
  model: gc.Models.MarkTime
  url: "/mark_times"
