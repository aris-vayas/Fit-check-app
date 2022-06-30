class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :voter, :belongs_to
  has_one :photo
end
