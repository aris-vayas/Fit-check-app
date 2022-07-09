class UserMailer < ApplicationMailer
    default from: 'Fit.check.app@gmail.com'

  def welcome_email(user)
   @user= user 
    mail(to: @user.email, subject: 'Welcome to My Awesome Site')
  end
end

