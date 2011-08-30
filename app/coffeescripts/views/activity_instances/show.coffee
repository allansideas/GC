App.Views.ActivityInstances ||= {}

class App.Views.ActivityInstances.ShowView extends Backbone.View
  template: ->
    return JST["activity_instances/show"]
      
  initialize: (options)->
    @marks = new App.Collections.MarksCollection()
    @marks.bind('add', (m)=>
      @render()
    )
    $('.screen').hide()
    if options.point.id == options.route.start_point_id
      options.user.current_activity = options.activity_instance.id
      #@user.save @user
      @mark = @marks.create
        activity_instance_id: options.activity_instance.id
        m_type: "start"
        point_id: options.point.id
        time: new Date().getTime()

  render: ->
    td = @options.activity_instance.toJSON()
    td.marks = @marks.toJSON()
    $(@el).html(@template()(td)).show()
    return this



