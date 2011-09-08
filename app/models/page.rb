class Page < ActiveRecord::Base
  belongs_to :point
  has_many :sub_pages
end
