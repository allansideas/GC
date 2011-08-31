class RegistrationsController < Devise::RegistrationsController
  def update
    # Override Devise to use update_attributes instead of update_with_password.
    # This is the only change we make.
    if resource.update_attributes(params[resource_name])
      puts "MAMAMAMAMA"
      puts params[:current_activity_instance]
      resource.update_attributes pick(params, :current_activity, :current_activity_instance)
      resource.save
      #set_flash_message :notice, :updated
      # Line below required if using Devise >= 1.2.0
      sign_in resource_name, resource, :bypass => true
      render :json => resource.to_json
    else
      clean_up_passwords(resource)
      render_with_scope :edit
    end
  end

  def pick(hash, *keys)
    filtered = {}
    hash.each do |key, value| 
      filtered[key.to_sym] = value if keys.include?(key.to_sym) 
    end
    filtered
  end

end
