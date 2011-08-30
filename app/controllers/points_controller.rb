class PointsController < InheritedResources::Base
  layout 'application'
  respond_to :html, :json

  def show
    @point = Point.find(params[:id])
    @activities = @point.activities
    @activity_instances = ActivityInstance.all
  end
end
