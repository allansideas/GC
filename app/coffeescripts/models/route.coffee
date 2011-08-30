class App.Models.Route extends Backbone.Model
  name: "route"
  url: "/routes"

  
class App.Collections.RoutesCollection extends Backbone.Collection
  model: App.Models.Activity
  url: '/routes'
  
