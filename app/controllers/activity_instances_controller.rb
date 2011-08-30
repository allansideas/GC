class ActivityInstancesController < InheritedResources::Base
  respond_to :html, :json
  #def new
    #@mark = Mark.new
  #end

  def show
    @activity_instance = ActivityInstance.find params[:id]
  end

  def update
    @activity_instance = ActivityInstance.find params[:id]
    @activity_instance.update_attributes pick(params, :user_id, :activity_id, :total_milliseconds)
    @activity_instance.save
    render :json => @activity_instance
  end
  
  def new
    @activity_instance = ActivityInstance.new
  end
  
  def create
    @activity_instance = ActivityInstance.new
    @activity_instance.update_attributes pick(params, :user_id, :activity_id, :total_milliseconds)
    render :json => @activity_instance
  end

  def pick(hash, *keys)
    filtered = {}
    hash.each do |key, value| 
      filtered[key.to_sym] = value if keys.include?(key.to_sym) 
    end
    filtered
  end
end
