class App.Models.Page extends Backbone.Model
  url: "/pages"

  
class App.Collections.PagesCollection extends Backbone.Collection
  model: App.Models.Page
  url: '/pages'
