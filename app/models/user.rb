class User < ApplicationRecord
  has_many :games, dependent: :destroy

  validates :username, presence: true, length: { maximum: 128}

  def as_json(_= nil)
    super(include: :games)
  end
end
