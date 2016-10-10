class Game < ApplicationRecord
  belongs_to :user
  belongs_to :category

  validates :name, presence: true, length: { maximum: 128}

  has_attached_file :gamepic, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"

  validates_attachment_content_type :gamepic, content_type: /\Aimage\/.*\z/

  def as_json(_= nil)
    super(include: :user)
  end
end
