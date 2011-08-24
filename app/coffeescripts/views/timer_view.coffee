App.Views.Timers ||= {}

class App.Views.Timers.TimerView extends Backbone.View
  template: ->
    return JST["timers/timer"]

  initialize: ()->
    @getTime()

  getTime:()->
    ago = _.date(@options.from.attributes.time).fromNow(false, true) * -1
    @mins = Math.floor((ago / 1000) / 60)
    @seconds = Math.floor((ago / 1000) % 60)
    
  render: ->
    params = {m_type : @options.from.attributes.m_type, mins : @mins, seconds : @seconds}
    $(@el).html(@template()(params))
    return this
