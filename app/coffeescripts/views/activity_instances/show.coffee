App.Views.ActivityInstances ||= {}

class App.Views.ActivityInstances.ShowView extends Backbone.View
  template: ->
    return JST["activity_instances/show"]

  events:
    "click #split_button" : "markSplit"

  initialize: (options)->
    @options = options
    if options.marks == undefined
      options.marks = new App.Collections.MarksCollection()
    @marks = options.marks
    @marks.bind('add', (m)=>
      @addMarks()
    )
    if !options.user.attributes.current_activity?
      if options.point.id == options.route.start_point_id
        options.user.set
          current_activity : options.activity.id
          current_activity_instance : options.activity_instance.id
          current_activity_end_point : options.route.end_point_id
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
      @activity_instances = new App.Collections.ActivityInstancesCollection()
      @options.activity_instance.set( total_milliseconds : new Date().getTime() - @marks.find((m)-> return m.attributes.m_type == "start").attributes.time)
      @options.activity_instance.save()
    else
      setInterval((=> @updateTimes()), 1000)
    @render()

  play: ()->
    now = new Date().getTime()
    @mark = @marks.create
      activity_instance_id: @options.activity_instance.id
      m_type: "split"
      point_id: @options.point.id
      time: now

  markSplit: (e)->
    console.log "mama"
    e.stopPropagation()
    e.preventDefault()
    now = new Date().getTime()
    @split_mark = @marks.create
      activity_instance_id: @options.activity_instance.id
      m_type: "split"
      point_id: @options.point.id
      time: now

  addMark: (mark)->
    for m in @marks.models
      if m.attributes.m_type == "end"
        @ended_at = m.attributes.time
    if @ended_at != undefined
      @options.user.set
        current_activity : null
        current_activity_instance : null
      @options.user.save()
    @view = new App.Views.Marks.MarkView
      el: $("#marks")
      model: mark
      ended_at: @ended_at

  addMarks: ()->
    $("#marks").html("")
    for mark in @marks.models
      @addMark(mark)

  updateTimes: ()->
    @addMarks()

  render: ->
    $('.screen').hide()
    td = @options.activity.toJSON()
    td.point_name = @options.point.attributes.name
    $(@el).html(@template()(td)).show()
    return this



