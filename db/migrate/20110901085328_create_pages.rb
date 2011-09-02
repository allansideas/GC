class CreatePages < ActiveRecord::Migration
  def self.up
    create_table :pages do |t|
      t.integer :point_id
      t.string :nav_name
      t.text :content

      t.timestamps
    end
  end

  def self.down
    drop_table :pages
  end
end
