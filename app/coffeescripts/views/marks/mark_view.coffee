App.Views.Marks ||= {}

class App.Views.Marks.MarkView extends Backbone.View
  template: ->
    return JST["marks/mark"]
  
  initialize: ()->
    @getTime()
    @render()

  getTime:()->
    if @options.ended_at != undefined
      ago = _.date(@options.model.attributes.time).from(_.date(@options.ended_at), true, true) * -1
    else
      ago = _.date(@options.model.attributes.time).fromNow(false, true) * -1
    @mins = Math.floor((ago / 1000) / 60)
    @seconds = Math.floor((ago / 1000) % 60)

  render: ->
    td= @options.model.toJSON()
    td.mins = @mins
    td.seconds = @seconds
    td.point_name = "point name"
    $(@el).prepend(@template()(td))
    return this
