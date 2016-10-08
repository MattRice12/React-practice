# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


users = %w(MattR MattG Corey Tommy Eric)
categories = %w(videogames boardgames)

users.each do |user|
  User.create!(username: user)
end

categories.each do |cat|
  Category.create!(name: cat)
end

# MattR
Game.create!(name: "Don't Starve", user_id: 1, category_id: 1)
Game.create!(name: "Witcher 3", user_id: 1, category_id: 1)
Game.create!(name: "Civilization V", user_id: 1, category_id: 1)
Game.create!(name: 'Binding of Isaac', user_id: 1, category_id: 1)

# MattG
Game.create!(name: "Settlers of Catan", user_id: 2, category_id: 2)
Game.create!(name: "Bohnanza", user_id: 2, category_id: 2)
Game.create!(name: "Forbidden Desert", user_id: 2, category_id: 2)

Game.create!(name: '#IDARB', user_id: 2, category_id: 1)
Game.create!(name: 'Mortal Kombat', user_id: 2, category_id: 1)


# Corey
Game.create!(name: "Talisman", user_id: 3, category_id: 2)
Game.create!(name: "Imperial Assault", user_id: 3, category_id: 2)

Game.create!(name: 'Mortal Kombat', user_id: 3, category_id: 1)


# Tommy
Game.create!(name: 'Binding of Isaac', user_id: 4, category_id: 1)
Game.create!(name: 'Super Meatboy', user_id: 4, category_id: 1)


# Eric
Game.create!(name: "Settlers of Catan", user_id: 5, category_id: 2)
Game.create!(name: "Ticket to Ride", user_id: 5, category_id: 2)
Game.create!(name: "Munchkin", user_id: 5, category_id: 2)
Game.create!(name: "Tokyo", user_id: 5, category_id: 2)
Game.create!(name: 'Rocket League', user_id: 5, category_id: 1)
