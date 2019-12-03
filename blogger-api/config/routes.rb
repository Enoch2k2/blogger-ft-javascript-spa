Rails.application.routes.draw do
  scope :api do
    resources :users, except: [:edit, :new]
    resources :blogs, except: [:edit, :new]
  end
end

# /api/blogs