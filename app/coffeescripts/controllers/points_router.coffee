class App.Routers.PointsRouter extends Backbone.Router
  initialize: (options) ->
    @activities = new App.Collections.ActivitiesCollection()
    @activities.reset options.activities
    @point = new App.Models.Point options.point
    #@users = new App.Collections.UsersCollection()
    @user = new App.Models.User options.user
    @page = {}
    @page.activity = new App.Models.Activity options.activity
    @page.activity_instance = new App.Models.ActivityInstance options.activity_instance
    @page.marks = new App.Collections.MarksCollection()
    @page.marks.reset options.marks
    @page.all_activity_instances = new App.Collections.ActivityInstancesCollection()
    @page.all_activity_instances.reset options.all_activity_instances
    @page.all_activity_instances.min (ai)->
      if ai.attributes.total_milliseconds != null
        return ai.attributes.total_milliseconds
    @page.pages = new App.Collections.PagesCollection()
    @page.pages.reset options.pages
    @running_instance = {}
    @instance_view = {}

  routes:
    "" : "showPoint"
    "/activities/:activity": "showActivity"
    "/list_activities/": "showActivities"
    "/start/:activity_id" : "startActivity"
    "/page/:page_id" : "showPage"
    "/page/:page_id/:sub_page_id" : "showSubPage"
    
    
  showPoint: ()->
    if !@user.attributes.current_activity_instance
      if @page.pages
        console.log _.first(@page.pages.models)
        window.location = '/points/'+@point.id+"#/page/"+_.first(@page.pages.models).id
    else
      @view = new App.Views.ActivityInstances.ShowView
        el: $('#activity_instance')
        point: @point
        user: @user
        activity: @page.activity
        activity_instance: @page.activity_instance
        route: @page.activity.attributes.route
        marks: @page.marks
    
  showActivity: (activity)->
    @view = new App.Views.Activities.ShowView
      activity: @activities.get(activity)
      el: $('#activity')

  #to complete
  #
  showActivities: ->
    $("#point_nav a").removeClass('depressed')
    $("#point_nav #active").addClass('depressed')
    if !@user.attributes.current_activity_instance?
      @list_view = new App.Views.Activities.ActivityListView
        point: @point
        activities: @activities
        el: $('#activities')
        pages: @page.pages
    else if @point.id == @running_instance.id
      @view = new App.Views.ActivityInstances.ShowView
        el: $('#activity_instance')
        point: @point
        user: @user
        activity: @page.activity
        activity_instance: @page.activity_instance
        route: @page.activity.attributes.route
        marks: @page.marks
    else
      @instance_view.render()

  startActivity:(activity_id)->
    @activity_instances = new App.Collections.ActivityInstancesCollection()
    @activity_instances.bind('add', (m)=>
      @instance_view = new App.Views.ActivityInstances.ShowView
        el: $('#activity_instance')
        point: @point
        user: @user
        activity: @activities.get(activity_id)
        activity_instance: m
        route: @route = @activities.get(activity_id).attributes.route
    )
    @activity_instance = @activity_instances.create
      user_id: @user.id
      activity_id : activity_id
    @running_instance.end_point_id = @activities.get(activity_id).attributes.route

  showPage: (page_id) ->
    $("#point_nav a").removeClass('depressed')
    @show_page = @page.pages.get(page_id)
    if @show_page.attributes.p_type == "history"
      $("#point_nav #history").addClass('depressed')
    else if @show_page.attributes.p_type == "info"
      $("#point_nav #info").addClass('depressed')
    else if @show_page.attributes.p_type == "gallery"
      $("#point_nav #gallery").addClass('depressed')
    @view = new App.Views.Pages.PageView
      page: @show_page
      el: $('#info_page')





