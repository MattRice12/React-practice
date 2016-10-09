class GamesController < ApplicationController
  def index
    games = Game.all
    categories = Category.all
    render locals: { games: games, categories: categories }
  end

  def show
    game = Game.find_by(id: params[:id])
    render locals: { game: game }
  end

  def new
    game = Game.new
    render locals: { game: game}
  end

  def create
    game = Game.new(game_params)
    return redirect_to games_path if game.save
    flash[:alert] = game.errors
    render template: 'games/new.html.erb', locals: { game: game }
  end

  def edit
    game = Game.find_by(id: params[:id])
    render locals: { game: game }
  end

  def update
    game = Game.find_by(id: params[:id])
    return redirect_to games_path if game.update(game_params)
    flash[:alert] = game.errors
    render template: 'games/edit.html.erb'
  end

  def destroy
    game = Game.find_by(id: params[:id])
    return redirect_to games_path if game.destroy
    flash[:alert] = "Game could not be deleted."
    redirect_to games_path
  end

  private

  def game_params
    params.require(:game).permit(:name, :user_id, :category_id)
  end
end
