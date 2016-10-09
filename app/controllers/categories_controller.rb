class CategoriesController < ApplicationController
  def index
    categories = Category.all
    category = Category.find_by(id: params[:id])
    render locals: { categories: categories, category: category }
  end

  def show
    category = Category.find_by(id: params[:id])
    render locals: { category: category }
  end

  def new
    category = Category.new
    render locals: { category: category }
  end

  def create
    category = Category.new(category_params)
    return redirect_to categories_path if category.save
    flash[:alert] = category.errors
    render template: 'categories/new.html.erb', locals: { category: category }
  end

  def destroy
    category = Category.find_by(id: params[:id])
    return redirect_to categories_path if category.destroy
    flash[:alert] = "Category could not be deleted."
    redirect_to categories_path
  end

  private
  def category_params
    params.require(:category).permit(:name)
  end

end
