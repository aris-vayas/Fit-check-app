










puts "seeding users..."

User.create!(full_name: 'Aris Vayas', email: 'arisv428@gmail.com', password: 'secret', username: 'arisv428@gmail.com')
User.create!(full_name: 'Bob Villa', email: 'aris.vayas@gmail.com', password: 'secret', username: 'aris.vayas@gmail.com')

puts "seeing photos"


 25.times do

    Photo.create!(image:Unsplash::Photo.random(query:"shoes")[:urls][:regular], score: 0, user: User.first )
    Photo.create!(image:Unsplash::Photo.random(query:"shoes")[:urls][:regular], score: 0, user: User.last )



 end 

