class FriendshipsController < ApplicationController
  before_action :authenticate_user!

  def index
      friendships = current_user.friendships
      render locals: { friendships: friendships }
  end

  def create
    friendship = Friendship.new(friendship_params)
    friendship.save
    flash[:notice] = "Added friend."
  end

  def destroy
    friendship = current_user.friendships.find_by(id: params[:id])
    friendship.destroy
    flash[:notice] = "Removed friendship."
    redirect_to friendships_path
  end

  private
  def friendship_params
    params.require(:friendship).permit(:user_id, :friend_id)
  end
end
