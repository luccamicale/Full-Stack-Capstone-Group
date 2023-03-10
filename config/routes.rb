Rails.application.routes.draw do
  resources :products
  resources :reservations
  resources :users
  root 'root#index'

  namespace :api do
    namespace :v1 do
      get 'reservations', to: 'reservations#index'
      post 'reservations', to: 'reservations#create'
      delete 'reservations/:id', to: 'reservations#destroy'
      post 'signup', to: 'users#create'
      get 'users', to: 'users#index'
      get 'products', to: 'products#index'
      get 'products/:id', to: 'products#show'
      post 'products', to: 'products#create'
    end
  end
end
