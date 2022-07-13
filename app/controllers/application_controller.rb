class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    include ActionController::Cookies

    def count
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
      end 


      def hello_world
        render json: {count: session[:count]}
      end

      def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid}, status: :unprocessable_entity
    end
end
