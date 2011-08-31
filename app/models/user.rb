class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :encryptable, :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :current_activity, :current_activity_instance, :email, :password, :password_confirmation, :remember_me

  def update_with_password(params={}) 
    if params[:password].blank? 
      params.delete(:password) 
      params.delete(:password_confirmation) if params[:password_confirmation].blank? 
    end 
    update_attributes(params) 
  end

  def activity_instance
    if current_activity_instance
      ActivityInstance.find(current_activity_instance)
    else
      return {}
    end
  end

  def partaking_in
    if current_activity
      Activity.find(current_activity)
    else
      return {}
    end
  end
end
