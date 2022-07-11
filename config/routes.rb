Rails.application.routes.draw do
  resources :comments
  resources :votes
  resources :voters
  resources :photos
  resources :users
  get '/hello', to: 'application#hello_world'
  get '/count', to: 'application#count'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
get '/authorized_user', to: 'users#show'
get '/reset', to: 'users#email'
get '/best_fits', to: 'photos#best_fits'
get '/best_pic', to: 'users#best_pic'
get '/user_photos', to: 'users#user_photos'


      # Login / Logout Routes
      post '/Login', to: 'sessions#login'
      delete '/logout', to: 'sessions#logout'
end
