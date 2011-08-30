class App.Routers.PointsRouter extends Backbone.Router
  initialize: (options) ->
    @activities = new App.Collections.ActivitiesCollection()
    @activities.reset options.activities
    @point = new App.Models.Point options.point
    @users = new App.Collections.UsersCollection()
    @user = new App.Models.User options.user
    @users.reset @user
    
  routes:
    "" : "showPoint"
    "/activities/:activity": "showActivity"
    "/start/:activity_id" : "startActivity"
    
  showPoint: ()->
    @view = new App.Views.Points.ShowView
      point: @point
      activities: @activities
      el: $('#point')
    
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






