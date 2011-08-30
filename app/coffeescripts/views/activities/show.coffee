App.Views.Activities ||= {}

class App.Views.Activities.ShowView extends Backbone.View
  template: ->
    return JST["activities/show"]
      
  initialize: ->
    $('#point').hide()
    $('.button').live 'touchstart', (e)->
      $(e.target).addClass('depressed')
    $('.button').live 'touchend', (e)->
      $(e.target).removeClass('depressed')
    @render()

  render: ->
    td = @options.activity.toJSON()
    $(@el).html(@template()(td)).show()
    return this

