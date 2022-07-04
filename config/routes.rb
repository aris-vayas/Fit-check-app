Rails.application.routes.draw do
  resources :comments
  resources :votes
  resources :voters
  resources :photos
  resources :users
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
get '/authorized_user', to: 'users#show'

      # Login / Logout Routes
      post '/login', to: 'sessions#login'
      delete '/logout', to: 'sessions#logout'
end
