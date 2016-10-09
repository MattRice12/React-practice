class Category < ApplicationRecord
  has_many :games, dependent: :destroy

  validates :name, presence: true, length: { maximum: 128}
end
