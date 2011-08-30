class ActivityInstance < ActiveRecord::Base
  attr_accessible :activity_id, :user_id, :total_milliseconds
  belongs_to :activity
  has_many :marks
end
