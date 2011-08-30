class CreateActivityInstances < ActiveRecord::Migration
  def self.up
    create_table :activity_instances do |t|
      t.integer :activity_id
      t.integer :user_id
      t.integer :total_milliseconds

      t.timestamps
    end
  end

  def self.down
    drop_table :activity_instances
  end
end
