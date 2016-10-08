class Game < ApplicationRecord
  belongs_to :user
  belongs_to :category

  validates :name, presence: true, length: { maximum: 128}
end
