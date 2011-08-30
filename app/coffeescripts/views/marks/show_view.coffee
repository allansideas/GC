App.Views.Projects ||= {}

class App.Views.Projects.ShowView extends Backbone.View
  template: ->
    return JST["marks/show"]
   
  render: ->
    $(this.el).html(this.template()(this.options.model.toBackboneJSON() ))
    return this
