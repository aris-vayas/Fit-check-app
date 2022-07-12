class UsersController < ApplicationController
    def index
        render json: User.all 
    end

    def show
        user = User.find_by(id: session[:current_user])

    
        render json: user
    end

    def user_photos
        user = User.find_by(id: session[:current_user])

        photos= user.photos

        render json: photos



    end

# def best_pic
#     user = User.find_by(id: session[:current_user])
#     userPhotos= user.photos.sort { |a, b|  b.score <=> a.score }
#     render json: userPhotos
# end

    # def email
        
    #     user= find_by(id: session[:current_user])
    #     UserMailer.welcome_email(user).deliver_now
    # end

    
    def create
            user = User.create!(user_params)
            UserMailer.welcome_email(user).deliver_now
            session[:current_user] = user.id
            render json: user , status: :created
    end



def update
    user = User.find(params[:id])
    
      user.update!(update_params )
      render json: user, status: :created
end
    private

    def user_params
        params.permit(:full_name, :email, :password, :username)
    end
    def update_params
        params.permit( :username, :password)
    end
end
