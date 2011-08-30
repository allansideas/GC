class Mark < ActiveRecord::Base
  belongs_to :activity_instance
  attr_accessible :activity_instance_id, :time, :m_type, :point_id
end
