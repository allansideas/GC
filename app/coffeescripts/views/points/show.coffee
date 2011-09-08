App.Views.Points ||= {}

class App.Views.Points.ShowView extends Backbone.View
  template: ->
    return JST["points/show"]
      
  events: 
    "click #show_map" : "showMap"

  initialize: ->
    $('.screen').hide()
    $('#point').show()
    @render()

  render: ->
    #$(@el).html(@template()(point : @options.point.toJSON, activities : @options.activities.toJSON)).fadeIn(300)
    td = @options.point.toJSON()
    td.activities = @options.activities.toJSON()
    td.pages = @options.pages.toJSON()
    $(@el).html(@template()(td)).fadeIn(300)
    return this


  #showMap: ->
    #$('#point_map').show()
    #Gmaps4Rails.callback()
