class RemoveUserIdFromGames < ActiveRecord::Migration[5.0]
  def change
    remove_column :games, :user_id
  end
end
