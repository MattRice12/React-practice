Rails.application.routes.draw do
  devise_for :users
  devise_for :installs
  resources :categories
  resources :games 
  resources :users

  root 'users#index', as: 'root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
