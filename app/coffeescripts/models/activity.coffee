class App.Models.Activity extends Backbone.Model
  url: "/activities"

  
class App.Collections.ActivitiesCollection extends Backbone.Collection
  model: App.Models.Activity
  url: '/activities'
  
