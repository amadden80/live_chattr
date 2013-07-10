LiveChattr::Application.routes.draw do
  get 'browser' => 'browser#index'
  resources :users
end
