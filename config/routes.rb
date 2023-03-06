Rails.application.routes.draw do
  resources :products
  resources :reservations
  resources :users
  root 'root#index'
  
  namespace :api do
    namespace :v1 do
      get 'reservations', to: 'reservations#index'
      get 'users', to: 'users#index'
      get 'products', to: 'products#index'
    end
  end
end
