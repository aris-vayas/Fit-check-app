User.destroy_all
Photo.destroy_all
Vote.destroy_all
Comment.destroy_all
Voter.destroy_all

puts "seeding users..."

User.create(full_name: 'Aris Vayas', email: 'aris.vayas@gmail.com', password: 'secret', username: 'aris')

puts "seeing photos"

Photo.create!(image:'test', score: 0, user: User.first )