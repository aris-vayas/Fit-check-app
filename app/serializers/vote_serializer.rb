class VoteSerializer < ActiveModel::Serializer
  attributes :id, :voter, :belongs_to
  
end
