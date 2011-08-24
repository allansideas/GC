class CreateMarks < ActiveRecord::Migration
  def self.up
    create_table :marks do |t|
      t.datetime :time
      t.string :m_type

      t.timestamps
    end
  end

  def self.down
    drop_table :marks
  end
end
