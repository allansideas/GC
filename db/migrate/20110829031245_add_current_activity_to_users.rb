class AddCurrentActivityToUsers < ActiveRecord::Migration
  def self.up
    add_column :users, :current_activity, :integer
  end

  def self.down
    remove_column :users, :current_activity
  end
end
