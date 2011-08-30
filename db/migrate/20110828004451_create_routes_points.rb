class CreateRoutesPoints < ActiveRecord::Migration
  def self.up
    create_table :routes_points do |t|
      t.integer :route_id
      t.integer :point_id

      t.timestamps
    end
  end

  def self.down
    drop_table :routes_points
  end
end
