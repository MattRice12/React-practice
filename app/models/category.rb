class Category < ApplicationRecord
  has_many :games

  validates :name, presence: true, length: { maximum: 128}
end
