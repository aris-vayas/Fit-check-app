class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.string :comment
      t.belongs_to :photo, null: false, foreign_key: true
      t.string :voter
      t.string :belongs_to

      t.timestamps
    end
  end
end
