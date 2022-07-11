class PhotosController < ApplicationController
    def index
        render json: Photo.all
    end
    
        def best_fits
           photo = Photo.all.sort { |a, b|  b.score <=> a.score }
           
       

            render json: photo
    end
   
    def create
        photo = Photo.create!(photo_params)
      
        render json: photo, status: :created
    end
   
    def update
        @photo= Photo.find_by!(id: params[:id])
        score = @photo.score

    
            if (params[:score] == true)
                score +=1 
            
        else
            score -=1
        end
        @photo.update(score: score)

        # @photo.increment_counter(:score)
        
        render json: @photo
    end



    private
    def photo_params
params.permit(:image, :user_id, :score)
    end
end
