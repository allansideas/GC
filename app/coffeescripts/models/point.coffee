class App.Models.Point extends Backbone.Model
  name: "point"
  url: "/points"

  
class App.Collections.PointsCollection extends Backbone.Collection
  model: App.Models.Point
  url: '/points'
  
