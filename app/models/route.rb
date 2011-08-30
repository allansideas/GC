class Route < ActiveRecord::Base
  has_many :routes_points
  has_many :points, :through => :routes_points
  belongs_to :activity
end
