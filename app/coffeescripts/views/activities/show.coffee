App.Views.Activities ||= {}

class App.Views.Activities.ShowView extends Backbone.View
  template: ->
    return JST["activities/show"]
      
  initialize: ->
    $('.screen').hide()
    @render()

  render: ->
    td = @options.activity.toJSON()
    $(@el).html(@template()(td)).show()
    return this

