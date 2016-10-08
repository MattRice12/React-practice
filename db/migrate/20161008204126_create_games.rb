class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :category, foreign_key: true
      t.string :name, null: false, limit: 128
      t.string :category, null: false, limit: 128

      t.timestamps
    end
  end
end
