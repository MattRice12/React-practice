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
    game_collection = GameCollection.find(params[:id])
    game = game_collection.game_id
    game_collection.destroy
    flash[:notice] = "Game removed."
    redirect_to game_path(game)
  end

  private
  def game_collection_params
    params.require(:game_collection).permit(:user_id, :game_id)
  end
end
