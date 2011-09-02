# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Daley', :city => cities.first)
points = Point.create([
           {:lat => -41.28377881096541, :lng => 173.28678220510483, :name => "Zig Zag Start"},
           {:lat => -41.29046605832014, :lng => 173.28262478113174, :name => "Blue Seat With View"},
           { :lat => -41.295465930149184, :lng => 173.27815622091293, :name => "The Lookout"}
           ])

activity = Activity.create([{:name => "Walk to blue seat", :point_id => 1, :description => "Walk to a bit past the middle for a good, but not too life threatening workout", :a_type => "walk"}, 
                           {:point_id => points.first.id, :name => "Walk to the lookout", :description => "Take a hefty walk to the lookout for spectacular views, see some fantails, get massively puffed", :a_type => "walk"}])

routes = Route.create([
          {:activity_id => activity.first.id, :start_point_id => points.first.id, :end_point_id => 2},
          {:activity_id => 2, :start_point_id => points.first.id, :end_point_id => 3}
          ])

routes_points = RoutesPoints.create([
                      {:route_id => 1, :point_id=>points.first.id},
                      {:route_id => 1, :point_id => 2},
                      {:route_id => 2, :point_id=>points.first.id},
                      {:route_id => 2, :point_id => 2},
                      {:route_id => 2, :point_id => 3}
                      ])

pages = Page.create([
        {:point_id => 1, :nav_name => "Page 1", :content => "Some Content"},
        {:point_id => 1, :nav_name => "Page 2", :content => "Some Content for page 2"},
        {:point_id => 2, :nav_name => "Page 3", :content => "Some Content for page 1"}
        ])

subpages = SubPage.create([
        {:page_id => 1, :nav_name => "Sub Page 1", :content => "Sub page Some Content"},
        {:page_id => 1, :nav_name => "Sub Page 2", :content => "<strong> sub Some Content for page 2</strong>"},
        {:page_id => 2, :nav_name => "Sub Page 3", :content => "Some Content for page 1"},
        {:page_id => 2, :nav_name => "Sub Page 4", :content => "Some Content for page 1"}
        ])
