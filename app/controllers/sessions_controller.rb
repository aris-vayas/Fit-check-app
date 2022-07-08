class SessionsController < ApplicationController
      # Group Activity => Add Action (sessions#login) To Handle Login
    # before_action :authorize_user, except: [:login, :signup]
    def login
       
        
       
        # Show, Destroy, Update => Finding Resource by ID
            # user = User.find(params[:id])
        # Find User via "username" params
        
        # Triggers a RecordNotFound Exception
        user = User.find_by!(username: params[:username])
        
        # If User exists / authenticates, render "user" as JSON with "status: :ok"
        if user&.authenticate(params[:password])
            session[:current_user] = user.id 
            render json: user, status: :ok
        else
            # If User does not authenticate, render "Invalid Password or Username" with "status: :unprocessable_entity"
            render json: { errors: "Invalid Password or Username" }, status: :unauthorized
        end
    end
    

    def logout
        session.delete :current_user
    
    end
   


end
