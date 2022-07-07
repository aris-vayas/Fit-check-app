User.destroy_all
Photo.destroy_all
Vote.destroy_all
Comment.destroy_all
Voter.destroy_all

puts "seeding users..."

User.create(full_name: 'Aris Vayas', email: 'aris.vayas@gmail.com', password: 'secret', username: 'aris')

puts "seeing photos"

Photo.create!(image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_1o7xeqsb9PFGoabp7SimaE7KabmVSCjP6W8JlgW8&s', score: 0, user: User.first )
Photo.create!(image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_1o7xeqsb9PFGoabp7SimaE7KabmVSCjP6W8JlgW8&s', score: 0, user: User.first )
Photo.create!(image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_1o7xeqsb9PFGoabp7SimaE7KabmVSCjP6W8JlgW8&s', score: 0, user: User.first )
Photo.create!(image: 
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_1o7xeqsb9PFGoabp7SimaE7KabmVSCjP6W8JlgW8&s', score: 0, user: User.first )
