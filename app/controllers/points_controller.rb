class PointsController < InheritedResources::Base
  before_filter :authenticate_user!
  layout 'application'
  respond_to :html, :json

  def show
    @point = Point.find(params[:id])
    @activities = @point.activities
#    if current_user.current_activity_instance?
    @activity_instance = current_user.activity_instance
    @activity = current_user.partaking_in
    @marks = Mark.where("activity_instance_id = ?", current_user.current_activity_instance)
#    end
  end
end
