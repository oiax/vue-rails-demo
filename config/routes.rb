Rails.application.routes.draw do
  root "top#index"
  get "colors/demo1", as: :colors_demo1

  get "survey0" => "survey0#show", as: :survey0
  post "survey0" => "survey0#create"
end
