class UserMailer < ApplicationMailer
    default from: 'Fit.check.app@gmail.com'

  def welcome_email(user)
    @url= "https://fitcheckapp.herokuapp.com/Landing"
   @user= user 
    mail(to: @user.email, subject: 'Welcome to My Awesome Site')
  end

  def forgot_password(user)
    @token= user.reset_password_token
    
    @user= user 
    mail(to: @user.email, subject: 'Forgot Password')
end


end
