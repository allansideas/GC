class App.Models.ActivityInstance extends Backbone.Model
  url: "/activity_instances"

  
class App.Collections.ActivityInstancesCollection extends Backbone.Collection
  model: App.Models.ActivityInstance
  url: '/activity_instances'
  
