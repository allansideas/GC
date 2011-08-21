gc = window.Gc ||= {}
gc.Controllers ||= {}

class gc.Controllers.PagesController extends Backbone.Controller
  routes : {
    "" : "index",
    "pages/:page" : "load_page"
  },
  load_page : (page)->
    gc.App.Main.views.push new gc.Views.PagesView
      el: $('#main')
      page: page
  index : ->
    gc.App.Main.views.push new gc.Views.PagesView
      el: $('#main')
