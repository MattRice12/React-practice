class GamesController < ApplicationController
  before_action :authenticate_user!

  def index
    categories = Category.all.includes(:games).order('games.created_at').as_json
    render locals: { categories: categories }
  end

  def show
    game = Game.find_by(name: params[:name])
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
    game = Game.find_or_create_by(name: params[:name])
    render locals: { game: game }
  end

  def update
    game = Game.find_or_create_by(name: params[:name])
    return redirect_to game if game.update(game_params)
    flash[:alert] = game.errors
    render template: 'games/edit.html.erb', locals: { game: game }
  end

  def destroy
    game = Game.find_by(id: params[:id])
    return redirect_to games_path if game.destroy
    flash[:alert] = "Game could not be deleted."
    redirect_to games_path
  end

  private

  def game_params
    params.require(:game).permit(:name, :category_id, :gamepic, :description)
  end
end
