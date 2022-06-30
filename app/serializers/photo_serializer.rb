class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :image, :score
  has_one :user
end
