gc = window.Gc ||= {}
gc.Views ||= {}

class gc.Views.MarkTimeView extends Backbone.View
    initialize: (options)->
      alert "marktime"

