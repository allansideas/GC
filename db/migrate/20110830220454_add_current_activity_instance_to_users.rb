class AddCurrentActivityInstanceToUsers < ActiveRecord::Migration
  def self.up
    add_column :users, :current_activity_instance, :integer
  end

  def self.down
    remove_column :users, :current_activity_instance
  end
end
