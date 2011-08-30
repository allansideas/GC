class App.Models.Mark extends Backbone.Model
  name: "mark"
  initialize: ()->
    @.prettyTime()
  url: "/marks"
  prettyTime: ()->
    @.set(prettyTime : _.date(@.attributes.time).format('ddd, hh:mm'))

  
class App.Collections.MarksCollection extends Backbone.Collection
  model: App.Models.Mark
  url: '/marks'
  
