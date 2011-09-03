App.Views.Images ||= {}

class App.Views.Images.ImageView extends Backbone.View
  template: ->
    return JST["images/image"]

  initialize:(options) ->
    @options = options
    $('.screen').hide()
    $('#viewport').attr("content", "width=device-width, initial-scale=1.0")
    @render()

  render: ->
    td = {}
    td.src = @options.src
    td.from = @options.from
    console.log td
    $(@el).html(@template()(td)).show()
    wad = new Wadda('thumb', 
      lensSize: 120,
      xOff: 0,
      yOff: -50,
      fadeLens: false,
      zoom: 2
    )

    return this
    #$("#gallery img").animate(
      #translateX: '-=800'
      #,0)
    #for img, i in $("#gallery img")
      #$(img).delay(i * 90).animate(
        #rotateY: '+='+(2*Math.PI),
        #translateX: '+=800',
        #rotateZ: '+='+(2*Math.PI)
        #,600
      #)

  #transform: (e) ->
    #$(e.target).animate(
      #translateY:'+=150'
      #,1500
    #)
