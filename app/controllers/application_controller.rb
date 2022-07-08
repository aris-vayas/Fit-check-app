class ApplicationController < ActionController::API
    include ActionController::Cookies

    def count
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
      end 


      def hello_world
        render json: {count: session[:current_user]}
      end
end
