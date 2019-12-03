class Blog < ApplicationRecord
  belongs_to :user
  validates_presence_of :title, :content
  validates_uniqueness_of :title
end
