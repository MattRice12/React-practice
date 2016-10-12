class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :games, dependent: :destroy

  has_many :friendships
  has_many :friends, through: :friendships
  has_many :inverse_friendships, class_name: "Friendship", foreign_key: "friend_id"
  has_many :inverse_friends, through: :inverse_friendships, source: :user


  validates :username, presence: true, length: { maximum: 128}

  has_attached_file :avatar, styles: { medium: "250x250>", thumb: "50x50>" }, default_url: "http://headphonespares.sennheiser.co.uk/gfx/default-missing-category-placeholder.png"

  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  def avatar_url_med
    avatar.url(:medium)
  end

  def avatar_url_thumb
    avatar.url(:thumb)
  end

  def as_json(_= nil)
    super(include: :games, methods: [:avatar_url_thumb, :avatar_url_med])
  end

end
