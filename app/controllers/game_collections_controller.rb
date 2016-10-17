class GameCollectionsController < ApplicationController
  before_action :authenticate_user!

  def create
    game_collection = GameCollection.new(game_collection_params)
    game = Game.find_by(id: game_collection.game_id)
    if game_collection.save
      flash[:notice] = "Game added."
      redirect_to game_path(game.name)
    else
      flash[:error] = "Unable to add game."
      redirect_to game_path(game.name)
    end
  end

  def destroy
    game_collection = GameCollection.find(params[:id])
    game = Game.find_by(id: game_collection.game_id)
    game_collection.destroy
    flash[:notice] = "Game removed."
    redirect_to game_path(game.name)
  end

  private
  def game_collection_params
    params.require(:game_collection).permit(:user_id, :game_id)
  end
end
