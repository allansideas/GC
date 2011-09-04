class PointsController < InheritedResources::Base
  before_filter :authenticate_user!
  layout 'application'
  respond_to :html, :json

  def show
    @point = Point.find(params[:id])
    @map_json = @point.to_gmaps4rails
    @activities = @point.activities
    @activity_instance = current_user.activity_instance
    @activity = current_user.partaking_in
    @marks = Mark.where("activity_instance_id = ?", current_user.current_activity_instance)
    @all_activity_instances = ActivityInstance.where('user_id = ? AND activity_id = ?', current_user.id, current_user.partaking_in)
    if !@all_activity_instances
      @all_activity_instances = ""
    end
    if !@point.pages
      @pages = ""
    else
      @pages = @point.pages
    end
  end
end
