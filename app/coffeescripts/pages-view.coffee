gc = window.Gc ||= {}
gc.Views ||= {}

class gc.Views.PagesView extends Backbone.View
    initialize: (options)->
      #@$(".page").hide()
      @display_page(options.page)

    display_page: (page)->
      $('#main_nav li a').removeClass('current')
      targetOffset = @$("#" + page + "_page").offset().top + -100
      $("body").animate({scrollTop: targetOffset}, 800)
      
      $('li.' + page + " a").addClass('current')
