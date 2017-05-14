Rails.application.routes.draw do
  root "top#index"

  get "survey0" => "survey0#show", as: :survey0

  get "survey1" => "survey1#show", as: :survey1
  post "survey1" => "survey1#create"
  get "survey1/done"

  get "survey2" => "survey2#show", as: :survey2
  post "survey2" => "survey2#create"
  get "survey2/done"
end
