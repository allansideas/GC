class CreateMarkTimes < ActiveRecord::Migration
  def self.up
    create_table :mark_times do |t|
      t.integer :user_id
      t.integer :point_id
      t.string :type
      t.datetime :time
      t.string :mark_type
      t.float :lat
      t.float :lng

      t.timestamps
    end
  end

  def self.down
    drop_table :mark_times
  end
end
