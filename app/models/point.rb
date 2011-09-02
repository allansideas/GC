class Point < ActiveRecord::Base
  has_many :activities
  has_many :routes_points
  has_many :routes, :through => :routes_points
  has_many :pages
end
