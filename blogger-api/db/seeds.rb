# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

bob = User.create(name:  "Bob")

Blog.create(
  [{title: "Title 1", content: "Content 1", user: bob},
  {title: "Title 2", content: "Not so generic content", user: bob},
  {title: "Not so generic with this title", content: "Amazing Content", user: bob}]
)