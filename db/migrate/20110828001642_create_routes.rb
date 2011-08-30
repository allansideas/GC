class CreateRoutes < ActiveRecord::Migration
  def self.up
    create_table :routes do |t|
      t.integer :activity_id
      t.integer :start_point_id
      t.integer :end_point_id
      t.string :r_type

      t.timestamps
    end
  end

  def self.down
    drop_table :routes
  end
end
