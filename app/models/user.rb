class User < ApplicationRecord
    has_many :photos 


    has_secure_password
    validates :password, presence: true

    def generate_password_token!
        self.reset_password_token = generate_token
        self.reset_password_sent_at = Time.now.utc
        save!(validate: false)
       end
       
       def password_token_valid?
        (self.reset_password_sent_at + 4.hours) > Time.now.utc
       end
       
       def reset_password!(password)
        
        self.update!(password: password)
    
       end
       
       private
       def password_params
        params.permit(:password)
       end
       def generate_token
        SecureRandom.hex(10)
       end
    
end
