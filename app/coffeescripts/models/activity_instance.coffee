class App.Models.ActivityInstance extends Backbone.Model
  url : ()->
    base = '/activity_instances'
    if (this.isNew()) 
      return base
    else 
      return base + '/' + this.id

  
class App.Collections.ActivityInstancesCollection extends Backbone.Collection
  model: App.Models.ActivityInstance
  url: '/activity_instances'
  
