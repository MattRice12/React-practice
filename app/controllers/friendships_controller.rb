class FriendshipsController < ApplicationController
  def create
    friendship = Friendship.new(friendship_params)
    if friendship.save
      flash[:notice] = "Added friend."
      redirect_to root_url
    else
      flash[:error] = "Unable to add friend."
      redirect_to root_url
    end
  end

  def destroy
    friendship = current_user.friendships.find(params[:id])
    friendship.destroy
    flash[:notice] = "Removed friendship."
    redirect_to current_user
  end

  private
  def friendship_params
    params.require(:friendship).permit(:user_id, :friend_id)
  end
end
