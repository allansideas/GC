class Activity < ActiveRecord::Base
  attr_accessible :point_id, :a_type, :name, :description
  has_one :route
  belongs_to :point
end
