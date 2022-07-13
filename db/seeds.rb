










puts "seeding users..."

User.create(full_name: 'Aris Vayas', email: 'arisv428@gmail.com', password: 'secret', username: 'arisv428@gmail.com')

puts "seeing photos"


 50.times do

    Photo.create!(image:Unsplash::Photo.random(query:"shoes")[:urls][:regular], score: 0, user: User.last )



 end 

