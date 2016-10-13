class UsersController < ApplicationController
  before_action :authenticate_user!

  def index
    users = User.all.order(:created_at).includes(:games).order('games.created_at').as_json
    render locals: { users: users }
  end

  def show
    user = User.find_by(id: params[:id])
    categories = Category.all.includes(:games).as_json
    games = current_user.games
    render locals: { user: user, categories: categories, games: games }
  end

  def new
    user = User.new
    render locals: { user: user }
  end

  def create
    user = User.new(user_params)
    return redirect_to users_path if user.save
    flash[:alert] = user.errors
    render template: 'users/new.html.erb', locals: { user: user }
  end

  def edit
    user = User.find_by(id: params[:id])
    render locals: { user: user }
  end

  def update
    user = User.find_by(id: params[:id])
    return redirect_to user if user.update(user_params)
    flash[:alert] = user.errors
    render template: 'users/edit.html.erb', locals: { user: user }
  end

  def destroy
    user = User.find_by(id: params[:id])
    if user.destroy && request.xhr?
      flash[:alert] = "User has been deleted"
    else
      flash[:alert] = "User does not exist!"
    end
    redirect_to users_path
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :avatar)
  end
end
