class MarksController < InheritedResources::Base
  layout 'application'
  respond_to :html, :json
  #def index
    #@marks = Mark.all
    #respond_to do |format|
      #format.html # index.html.erb
      #format.json  { render :json => @marks }
    #end
  #end
  def new
    @mark = Mark.new
  end

  def create
    @mark = Mark.create! params
    respond_with @mark
  end
end
