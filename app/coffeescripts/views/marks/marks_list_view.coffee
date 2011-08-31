App.Views.Marks ||= {}

class App.Views.Marks.MarksListView extends Backbone.View
  template: ->
    return JST["marks/marks_list"]
   
  render: ->
    td = {}
    td.context = @options.state
    td.marks = @options.collection.toJSON()
    $(@el).html(@template()(td)).fadeIn(300)
    return this
