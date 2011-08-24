gc = window.Gc ||= {}
gc.Controllers ||= {}

class gc.Controllers.MarkTimesController extends Backbone.Controller
  initialize: ->
    console.log "marktimes"
  routes : {
    "" : "index",
    "mark_times/:id" : "load_page"
  },
  load_page : (id)->
    gc.App.Main.views.push new gc.Views.MarkTimeView
      el: $('#mark_times')
  index : ->
    gc.App.Main.views.push new gc.Views.MarkTimeView
      el: $('#mark_times')
