class CategoriesController < ApplicationController
  def index
    categories = Category.all
    render locals: { categories: categories }
  end

  def show
    category = Category.find_by(id: params[:id])
    render locals: { category: category }
  end

end
