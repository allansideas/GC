class Point < ActiveRecord::Base
  acts_as_gmappable :process_geocoding => false, :lat => "lat", :lng => "lng"

  has_many :activities
  has_many :routes_points
  has_many :routes, :through => :routes_points
  has_many :pages

end
