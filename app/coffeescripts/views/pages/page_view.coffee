App.Views.Pages ||= {}

class App.Views.Pages.PageView extends Backbone.View
  template: ->
    return JST["pages/page"]

  events: ->
    "click #gallery img" : "transform"
      
  initialize:(options) ->
    @options = options
    $('.screen').hide()
    @render()
    @resizeImages()
    #$('#gallery').wipetouch
      #wipeLeft: ()->
        #$('#gallery img').hide()
        #$('#gallery img').first().fadeIn(200)

  render: ->
    #td = @options.page.toJSON()
    td=' <div id="mini_nav"> <a href="#" class="button small black">back</a> </div>'
    td += @options.page.attributes.content
    $(@el).html(td).show()
    $("#gallery img").animate(
      translateX: '-=800'
      ,0)

    for img, i in $("#gallery img")
      $(img).delay(i * 90).animate(
        rotateY: '+='+(2*Math.PI),
        translateX: '+=800',
        rotateZ: '+='+(2*Math.PI)
        ,600
      )
    return this

  resizeImages: () ->
    $('#gallery img').width(280)

  transform: (e) ->
    $(e.target).animate(
      translateY:'+=150'
      ,1500
    )
