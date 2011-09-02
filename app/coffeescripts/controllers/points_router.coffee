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

  routes:
    "" : "showPoint"
    "/activities/:activity": "showActivity"
    "/start/:activity_id" : "startActivity"
    "/page/:page_id" : "showPage"
    "/page/:page_id/:sub_page_id" : "showSubPage"
    
    
  showPoint: ()->
    if !@user.attributes.current_activity_instance
      @view = new App.Views.Points.ShowView
        point: @point
        activities: @activities
        el: $('#point')
        pages: @page.pages
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

  startActivity:(activity_id)->
    @activity_instances = new App.Collections.ActivityInstancesCollection()
    @activity_instances.bind('add', (m)=>
      @view = new App.Views.ActivityInstances.ShowView
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

  showPage: (page_id) ->
    console.log @page.pages.get(page_id)
    @view = new App.Views.Pages.PageView
      page: @page.pages.get(page_id)
      el: $('#info_page')





