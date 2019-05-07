Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :tracks
    resources :tags, only: [:index]
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end
