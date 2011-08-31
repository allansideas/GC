App.Views.ActivityInstances ||= {}

class App.Views.ActivityInstances.ShowView extends Backbone.View
  template: ->
    return JST["activity_instances/show"]

  initialize: (options)->
    if options.marks == undefined
      options.marks = new App.Collections.MarksCollection()
    @marks = options.marks
    @marks.bind('add', (m)=>
      @addMarks()
    )
    $('.screen').hide()
    if options.point.id == options.route.start_point_id
      options.user.set
        current_activity : options.activity.id
        current_activity_instance : options.activity_instance.id
      options.user.save()
      now = new Date().getTime()
      @mark = @marks.create
        activity_instance_id: options.activity_instance.id
        m_type: "start"
        point_id: options.point.id
        time: now
      setInterval((=> @updateTimes()), 1000)
    else if options.point.id == options.route.end_point_id
      console.log "end"
      now = new Date().getTime()
      @mark = @marks.create
        activity_instance_id: options.activity_instance.id
        m_type: "end"
        point_id: options.point.id
        time: now
    @render()

  addMark: (mark)->
    for m in @marks.models
      if m.attributes.m_type == "end"
        @ended_at = m.attributes.time
    @view = new App.Views.Marks.MarkView
      el: $("#marks")
      model: mark
      ended_at: @ended_at

  addMarks: ()->
    for mark in @marks.models
      @addMark(mark)

  updateTimes: ()->
    $("#marks").html("")
    @addMarks()

  render: ->
    td = @options.activity.toJSON()
    $(@el).html(@template()(td)).show()
    return this



