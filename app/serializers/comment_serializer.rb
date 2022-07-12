class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :voter, :belongs_to
 
end
