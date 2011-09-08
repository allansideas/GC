App.Views.Activities ||= {}

class App.Views.Activities.ActivityListView extends Backbone.View
  template: ->
    return JST["activities/activity_list"]
   
  initialize: ()->
    $('.screen').hide()
    $('#activities').show()
    @render()

  render: ->
    console.log @options
    td = {}
    td.activities = @options.activities.toJSON()
    $(@el).html(@template()(td)).fadeIn(300)
    return this
