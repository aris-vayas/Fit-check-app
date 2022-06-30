class CreatePhotos < ActiveRecord::Migration[7.0]
  def change
    create_table :photos do |t|
      t.string :image
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :score
    

      t.timestamps
    end
  end
end
