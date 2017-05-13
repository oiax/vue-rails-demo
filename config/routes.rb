Rails.application.routes.draw do
  root "top#index"
  get "colors/demo1", as: :colors_demo1
  get "colors/demo2", as: :colors_demo2
end
