class User < ApplicationRecord
  has_many :games

  validates :username, presence: true, length: { maximum: 128}
end
