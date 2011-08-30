class UsersController < InheritedResources::Base
  layout 'application'
  respond_to :html, :json
end
