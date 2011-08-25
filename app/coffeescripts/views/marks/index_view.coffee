App.Views.Marks ||= {}

class App.Views.Marks.IndexView extends Backbone.View
  events:
    'click #start' : 'start'
    'click #show_time' : 'showTime'
    'click #split' : 'split'
    'click #end' : 'end'

  initialize: () ->
    _.bindAll(this, 'addOne', 'addAll')
    @options.marks.bind('add', @addOne, @)
    @addAll()
    @splits = []
    #@options.marks.bind('refresh', @addAll())
   
  start: () ->
    now = new Date().getTime()
    @start_time = @options.marks.create {time : now, m_type : "start"}
    @switchButton(['split', 'end'])
    #@addOne(@start_time)

  split: () ->
    now = new Date().getTime()
    @split_time = @options.marks.create {time : now, m_type : "split"}
    @splits.push @split_time
    @showTime()
    
  end: () ->
    now = new Date().getTime()
    @end_time = @options.marks.create {time : now, m_type : "end"}
    $('#timer_buttons').hide()
    $('#show_time').hide()
    @showTime("end")
    #@addOne(@start_time)

  showTime: (flag)->
    $('#timers').children().remove()
    if flag == "end"
      start_tv = new App.Views.Timers.TimerView({from : @start_time, end_time : @end_time})
      @$("#timers").append(start_tv.render().el)
      for split in @splits
        split_tv = new App.Views.Timers.TimerView({from : split, end_time : @end_time})
        @$("#timers").append(split_tv.render().el)
      end_tv = new App.Views.Timers.TimerView({from : @end_time, end_time : @end_time})
      @$("#timers").append(end_tv.render().el)
    else
      start_tv = new App.Views.Timers.TimerView({from : @start_time})
      @$("#timers").append(start_tv.render().el)
      for split in @splits
        split_tv = new App.Views.Timers.TimerView({from : split})
        @$("#timers").append(split_tv.render().el)
      end_tv = new App.Views.Timers.TimerView({from : @end_time})
      @$("#timers").append(end_tv.render().el)

  createTimerEl: (from, mins, seconds)->
    $("#timers").append("<div class='timer_time'>"+from+" "+ mins+"m "+seconds+"s</div>")
    #.delay(1500).fadeOut(1500).css('opacity', '1').show()

  switchButton: (to_show) ->
    $('#timer_buttons .button').hide()
    if _.isArray(to_show)
      for show in to_show
        console.log show
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

       
