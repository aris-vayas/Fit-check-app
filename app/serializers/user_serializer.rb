class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email, :username, :password_digest

  has_many :photos
end
