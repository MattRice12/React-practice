class Game < ApplicationRecord
  belongs_to :user
  belongs_to :category

  has_many :game_collections, dependent: :destroy
  has_many :users, through: :game_collections


  validates :name, presence: true, length: { maximum: 128}

  has_attached_file :gamepic, styles: { medium: "250x250>", thumb: "50x50>" }, default_url: "http://headphonespares.sennheiser.co.uk/gfx/default-missing-category-placeholder.png"

  validates_attachment_content_type :gamepic, content_type: /\Aimage\/.*\z/

  def gamepic_url_med
    gamepic.url(:medium)
  end

  def gamepic_url_thumb
    gamepic.url(:thumb)
  end

  def as_json(_= nil)
    super(include: :users, methods: [:gamepic_url_med, :gamepic_url_thumb])
  end

end
