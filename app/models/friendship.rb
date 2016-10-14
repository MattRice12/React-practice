class Friendship < ApplicationRecord
  belongs_to :user
  belongs_to :friend, class_name: "User"

  validates_uniqueness_of :user_id, :scope => :friend_id

  has_attached_file :avatar, styles: { medium: "250x250>", thumb: "50x50>" }, default_url: "http://headphonespares.sennheiser.co.uk/gfx/default-missing-category-placeholder.png"

  def avatar_url_med
    friend.avatar.url(:medium)
  end

  def avatar_url_thumb
    friend.avatar.url(:thumb)
  end

  def as_json(_= nil)
    super(include: {friend: {methods: [:avatar_url_thumb, :avatar_url_med]}})
  end
end
