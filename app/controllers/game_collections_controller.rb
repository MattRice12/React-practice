class GameCollectionsController < ApplicationController
  before_action :authenticate_user!

  def create
    game_collection = GameCollection.new(game_collection_params)
    if game_collection.save
      flash[:notice] = "Game added."
      redirect_to root_url
    else
      flash[:error] = "Unable to add game."
      redirect_to root_url
    end
  end

  def destroy
    game_collection = current_user.game_collection.find(params[:id])
    game_collection.destroy
    flash[:notice] = "Game removed."
    redirect_to root_path
  end

  private
  def game_collection_params
    params.require(:game_collection).permit(:user_id, :game_id)
  end
end
