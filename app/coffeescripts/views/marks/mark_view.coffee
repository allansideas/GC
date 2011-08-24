App.Views.Marks ||= {}

class App.Views.Marks.MarkView extends Backbone.View
  template: ->
    return JST["marks/mark"]
  
  events:
    "click .destroy" : "destroy"
      
  tagName: "div"
  
  destroy: () ->
    @options.model.destroy()
    this.remove()
    
    return false
    
  render: ->
    $(@el).css display: 'none'
    $(@el).html(@template()(@options.model.toJSON())).fadeIn(300)
    return this
