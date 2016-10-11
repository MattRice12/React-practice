class Category < ApplicationRecord
  has_many :games, dependent: :destroy

  validates :name, presence: true, length: { maximum: 128}

  has_attached_file :gamepic, styles: { medium: "100x100>" }, default_url: "http://headphonespares.sennheiser.co.uk/gfx/default-missing-category-placeholder.png"

  def gamepic_url_thumb
    gamepic.url(:thumb)
  end

  def as_json(_= nil)
    super(include: [games:  { methods: [:gamepic_url_thumb] }])
  end
end
