App.Views.Marks ||= {}

class App.Views.Marks.IndexView extends Backbone.View
  events:
    'click #show_time' : 'setupMarks'
    'click #end' : 'end'

  initialize: () ->
    _.bindAll(this, 'addOne', 'addAll')
    @options.marks.bind('add', @setupMarks, @)
    @addAll()
    @splits = []
    @started = false
    if @options.code
      @split()

  start: () ->
    now = new Date().getTime()
    if @options.code
      @start_time = @options.marks.create {time : now, m_type : "start", name: @options.code}
      @switchButton(['split', 'end'])

  split: () ->
    now = new Date().getTime()
    @started = false
    if @options.code
      for m in @options.marks.models
        if m.attributes.m_type == "start"
          @started = true
      if @started != false
        console.log "split"
        @split_time = @options.marks.create {time : now, m_type : "split", name: @options.code}
        @splits.push @split_time
        @switchButton(['split', 'end'])
      else
        @start()

  end: () ->
    now = new Date().getTime()
    @end_time = @options.marks.create {time : now, m_type : "end"}
    $('#timer_buttons').hide()
    $('#show_time').hide()

  setupMarks: ()->
    $('#timers').children().remove()
    for mark in @options.marks.models
      if mark.attributes.m_type == "start"
        @start_time = mark
        start_tv = new App.Views.Timers.TimerView({from : mark})
        @$("#timers").append(start_tv.render().el)
      if mark.attributes.m_type == "split"
        @splits.push mark
        split_tv = new App.Views.Timers.TimerView({from : mark})
        @$("#timers").append(split_tv.render().el)
      if mark.attributes.m_type == "end"
        @end_model = mark
        end_tv = new App.Views.Timers.TimerView({from : mark, end_time : @end_model if @end_model})
        @$("#timers").append(end_tv.render().el)

  switchButton: (to_show) ->
    $('#timer_buttons .button').hide()
    if _.isArray(to_show)
      for show in to_show
        $('#'+show).show()
    else
      $('#'+to_show).show()

  addAll: () ->
    for mark in @options.marks.models
      @addOne(mark)
    @fadeIn()
  
  addOne: (mark) ->
    mv = new App.Views.Marks.MarkView({model : mark})
    @$("#marks_list").append(mv.render().el)

  fadeIn: () ->
    for mark, i in $('.mark')
      $mark = $(mark)
      $mark.fadeTo(0, 0).delay(i * 40).fadeTo(100, 1)

       
