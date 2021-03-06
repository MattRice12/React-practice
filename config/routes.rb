Rails.application.routes.draw do
  resources :game_collections
  resources :friendships
  devise_for :users
  devise_for :installs
  resources :categories, param: :name
  resources :games, param: :name
  resources :users, param: :username, as: 'users'

  root 'users#index', as: 'root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
