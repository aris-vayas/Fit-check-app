class VoteSerializer < ActiveModel::Serializer
  attributes :id, :voter, :belongs_to
  has_one :photo
end
