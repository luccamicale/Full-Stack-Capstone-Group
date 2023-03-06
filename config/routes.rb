Rails.application.routes.draw do
  resources :products
  resources :reservations
  resources :users
  get 'root/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    namespace :v1 do
      get 'reservations', to: 'reservations#index'
      get 'users', to: 'users#index'
      get 'products', to: 'products#index'
    end
  end
end
