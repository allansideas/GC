class AddPTypeToPages < ActiveRecord::Migration
  def self.up
    add_column :pages, :p_type, :string
  end

  def self.down
    remove_column :pages, :p_type
  end
end
