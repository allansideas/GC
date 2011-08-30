class RoutesPoints < ActiveRecord::Base
  has_many :routes
  has_many :points
end
