class App.Routers.MarksRouter extends Backbone.Router
  initialize: (options) ->
    @marks = new App.Collections.MarksCollection()
    @marks.reset options.marks
    
  routes:
    ".*": "index"
    "/qr/:code": "namedMark"
    "/custom_split": "customSplit" 
    
  index: (options)->
    console.log "index"
    @view = new App.Views.Marks.IndexView
      marks: @marks
      el: $('#main')
    @end_model = {}
    for mark in @marks.models
      if mark.attributes.m_type == "end"
        @end_model = mark
    @view.setupMarks(@end_model)
    
  namedMark: (code)->
    @view = new App.Views.Marks.IndexView
      marks: @marks
      el: $('#main')
      code: code

