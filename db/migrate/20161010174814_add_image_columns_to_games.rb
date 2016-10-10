class AddImageColumnsToGames < ActiveRecord::Migration[5.0]
  def up
    add_attachment :games, :gamepic
  end

  def down
    remove_attachment :games, :gamepic
  end
end
