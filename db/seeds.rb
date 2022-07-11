User.destroy_all
Photo.destroy_all
Vote.destroy_all
Comment.destroy_all
Voter.destroy_all

puts "seeding users..."

User.create(full_name: 'Aris Vayas', email: 'aris.vayas@gmail.com', password: 'secret', username: 'aris')

puts "seeing photos"

Photo.create!(image:'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60', score: 0, user: User.first )
Photo.create!(image:'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60', score: 0, user: User.first )
Photo.create!(image:'https://www.highsnobiety.com/static-assets/thumbor/XUC86dg_LJXGVLADNpGmxUsZmng=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2019/05/30145103/main11.jpg', score: 0, user: User.first )
Photo.create!(image: 
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_1o7xeqsb9PFGoabp7SimaE7KabmVSCjP6W8JlgW8&s', score: 0, user: User.first )
