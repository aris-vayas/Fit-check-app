class UsersController < ApplicationController
    def index
        render json: User.all 
    end

    def show
        user = User. User.find_by(id: session[:current_user])
        render json: user
    end
    def email
        UserMailer.welcome_email.deliver_now
    end
    def create
            user = User.create!(user_params)

          
            render json: user , status: :created
    end
# def notify_user
#     respond_to do |format|
#         if @user.save
#           # Tell the UserMailer to send a welcome email after save
#           UserMailer.with(user: @user).welcome_email.deliver_later
  
#           format.html { redirect_to(@user, notice: 'User was successfully created.') }
#           format.json { render json: @user, status: :created, location: @user }
#         else
#           format.html { render action: 'new' }
#           format.json { render json: @user.errors, status: :unprocessable_entity }
#         end
#     end
# end
    private

    def user_params
        params.permit(:full_name, :email, :password, :username)
    end
end
