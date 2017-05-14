Rails.application.routes.draw do
  root "top#index"
  get "colors/demo1", as: :colors_demo1

  get "survey0" => "survey0#show", as: :survey0

  get "survey1" => "survey1#show", as: :survey1
  post "survey1" => "survey1#create"
  get "survey1/done"
end
