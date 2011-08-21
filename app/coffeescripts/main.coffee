gc = window.Gc ||= {}
gc.App ||= {}

gc.App.Main =
  views: []
  controllers: []

  init: ()->
    console.log 'init Main'

    #Ensure  jQuery doesn't cache any ajax requests
    $.ajaxSetup cache: false
    
    #Initialize models
    #@appModel = new Backbone.Model()

    #Initialize complex views
    #views.push new gc.Views.PagesView
      #el: $('#main')

    @controllers.push  new gc.Controllers.PagesController
     
    Backbone.history.start()

$(document).ready ->
  $(window).bind "scroll", -> 
    pos = $(window).scrollTop()
    console.log pos
    bg = pos * 1.6
    $('body').css("backgroundPosition", "0 -" + bg + "px" )
