App.Views.Timers ||= {}

class App.Views.Timers.TimerView extends Backbone.View
  template: ->
    return JST["timers/timer"]

  initialize: ()->
    @getTime()

  getTime:()->
    if @options.end_time != undefined
      ago = _.date(@options.from.attributes.time).from(_.date(@options.end_time.attributes.time), true, true) * -1
    else
      ago = _.date(@options.from.attributes.time).fromNow(false, true) * -1
    @mins = Math.floor((ago / 1000) / 60)
    @seconds = Math.floor((ago / 1000) % 60)
    
  render: ->
    params = {m_type : @options.from.attributes.m_type, mins : @mins, seconds : @seconds, name: @options.from.attributes.name}
    $(@el).html(@template()(params))
    return this
