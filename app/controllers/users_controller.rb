class UsersController < ApplicationController
  def index
    users = User.all
    render locals: { users: users }
  end

  def show
    user = User.find_by(id: params[:id])
    categories = Category.all
    render locals: { user: user, categories: categories }
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
    return redirect_to users_path if user.destroy
    flash[:alert] = "User does not exist!"
    redirect_to users_path
  end

  private
  def user_params
    params.require(:user).permit(:username)
  end
end
