# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Daley', :city => cities.first)
points = Point.create([{:lat => -41.283502680231855, :lng => 173.28676879405975, :name => "BaseCamp"},{ :lat => -41.29010531110963, :lng => 173.2826542854309, :name => "The very top"}])

activity = Activity.create([{:name => "Tippity Top", :point_id => points.last.id, :description => "Make it to the top champ, and win the biggest massivest prize ever", :a_type => "run"}, 
                           {:point_id => points.first.id, :name => "Middle with a view", :description => "Walk up to the middle and get a nice view", :a_type => "walk"}])

route = Route.create({:activity_id => activity.first.id, :start_point_id => points.last.id, :end_point_id => points.first.id})

routes_points = RoutesPoints.create([{:route_id => route.id, :point_id=>points.first.id},{:route_id => route.id, :point_id => points.last.id}])

