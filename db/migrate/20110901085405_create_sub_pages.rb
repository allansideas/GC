class CreateSubPages < ActiveRecord::Migration
  def self.up
    create_table :sub_pages do |t|
      t.integer :page_id
      t.string :nav_name
      t.text :content

      t.timestamps
    end
  end

  def self.down
    drop_table :sub_pages
  end
end
