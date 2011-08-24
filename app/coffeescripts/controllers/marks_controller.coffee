class App.Controllers.MarksController extends Backbone.Controller
  initialize: (options) ->
    @marks = new App.Collections.MarksCollection()
    @marks.refresh options.marks
    
  routes:
    "/index": "index"
    "/:id": "show"
    ".*": "index"
    
  newMark: ->
    @view = new App.Views.Marks.NewView(model: new @marks.model())
    $("#marks").html(@view.render().el)
    
  index: ->
    console.log "index"
    @view = new App.Views.Marks.IndexView
      marks: @marks
      el: $('#main')
    
  show:(id) ->
    marks = @marks.get(id)
    @view = new App.Views.Marks.ShowView(model : mark)
    $("#marks").html(@view.render().el)
