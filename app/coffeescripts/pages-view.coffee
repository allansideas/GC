gc = window.Gc ||= {}
gc.Views ||= {}

class gc.Views.PagesView extends Backbone.View
    initialize: (options)->
      #@$(".page").hide()
      @display_page(options.page)

    display_page: (page)->
      $('#main_nav li a').removeClass('current')
      targetOffset = @$("#" + page + "_page").offset().top + -100
      console.log targetOffset
      console.log page
      #$(window).scrollTop(targetOffset)
      $('#container').animate({scrollTop: targetOffset}, 800)

      
      $('li.' + page + " a").addClass('current')
