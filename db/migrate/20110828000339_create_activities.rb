class CreateActivities < ActiveRecord::Migration
  def self.up
    create_table :activities do |t|
      t.integer :point_id
      t.string :a_type
      t.string :name
      t.text :description

      t.timestamps
    end
  end

  def self.down
    drop_table :activities
  end
end
