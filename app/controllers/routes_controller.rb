class RoutesController < InheritedResources::Base
  respond_to :html, :json
  def route_by_activity_id
    render :json => Route.where("activity_id = ?", params[:activity_id])
  end
end
