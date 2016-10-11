class User < ApplicationRecord
  has_many :games, dependent: :destroy

  validates :username, presence: true, length: { maximum: 128}

  has_attached_file :avatar, styles: { medium: "100x100>", thumb: "50x50>" }, default_url: "http://headphonespares.sennheiser.co.uk/gfx/default-missing-category-placeholder.png"

  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  def avatar_url_thumb
    avatar.url(:thumb)
  end

  def as_json(_= nil)
    super(include: :games, methods: :avatar_url_thumb)
  end

end
