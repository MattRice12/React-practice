class Game < ApplicationRecord
  belongs_to :user
  belongs_to :category

  validates :name, presence: true, length: { maximum: 128}

  def as_json(_= nil)
    super(include: :user)
  end
end
