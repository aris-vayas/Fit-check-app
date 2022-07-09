class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :image, :score
  belongs_to :user
end
