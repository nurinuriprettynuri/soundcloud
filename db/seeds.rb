# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

# ActiveRecord::Base.transaction do


User.destroy_all
Track.destroy_all
Tag.destroy_all

Tag.create!({title: "pop music"})
Tag.create!({title: "rock"})
Tag.create!({title: "jazz"})
Tag.create!({title: "folk music"})
Tag.create!({title: "hip hop"})
Tag.create!({title: "trendy"})
Tag.create!({title: "classical"})
Tag.create!({title: "funk"})
Tag.create!({title: "grunge"})
Tag.create!({title: "indie"})
Tag.create!({title: "acoustic"})
Tag.create!({title: "country"})
Tag.create!({title: "house"})
Tag.create!({title: "techno"})
Tag.create!({title: "dance"})


user1 = User.create!({email: "aliglaser@gmail.com", username:"Alison Glaser", password: "123456789", location: "Seattle, WA"})
user2 = User.create!({email: "nooti77@gmail.com", username:"Nuri Jeon", password: "123456789", location: "Puyallup, WA"})
user3 = User.create!({email: "briceyokoyama@gmail.com", username:"Brice Yokoyama", password: "123456789", location: "San Jose, CA"})
user4 = User.create!({email: "sebajun@gmail.com", username:"Seba Jun", password: "123456789", location: "Tokyo, JP"})
user5 = User.create!({email: "the-strokes@gmail.com", username:"The Strokes", password: "123456789", location: "New York, NY"})
user6 = User.create!({email: "toroymoi@gmail.com", username:"Toro T Moi", password: "123456789", location: "Columbia, SC"})
user7 = User.create!({email: "wildnothing@gmail.com", username:"wild Nothing", password: "123456789", location: "Blacksburg, VA"})
user8 = User.create!({email: "hotchip@gmail.com", username:"Hot Chip", password: "123456789", location: "London, UK"})
user9 = User.create!({email: "thesmiths@gmail.com", username:"The Smiths", password: "123456789", location: "Manchester, UK"})
user10 = User.create!({email: "caribou@gmail.com", username:"Caribou", password: "123456789", location: "Paris, FR"})
user11 = User.create!({email: "gonzales@gmail.com", username:"Gonzales", password: "123456789", location: "Montreal, CD"})
user12 = User.create!({email: "gorillaz@gmail.com", username:"Gorillaz", password: "123456789", location: "London, UK"})
user13 = User.create!({email: "Kanye@gmail.com", username:"Kanye West", password: "123456789", location: "Atlanta, GA"})
user14 = User.create!({email: "lupefiasco@gmail.com", username:"Lupe Fiasco", password: "123456789", location:"Chicago, IL"})
user15 = User.create!({email: "passionpit@gmail.com", username:"Passion Pit", password: "123456789", location:"Cambridge, MA"})
user16 = User.create!({email: "phoenix@gmail.com", username:"Phoenix", password: "123456789", location: "Versailles, FR"})
user17 = User.create!({email: "slowdive@gmail.com", username:"Slowdive", password: "123456789", location: "Reading, UK"})


user1.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/KakaoTalk_Photo_2017-02-11-15-35-55.jpeg'), filename: 'avatar.jpg')
user2.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/KakaoTalk_Photo_2017-02-11-15-35-55.jpeg'), filename: 'avatar.jpg')
user3.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/KakaoTalk_Photo_2017-02-11-15-35-55.jpeg'), filename: 'avatar.jpg')
user4.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/KakaoTalk_Photo_2017-02-11-15-35-55.jpeg'), filename: 'avatar.jpg')
user5.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/KakaoTalk_Photo_2017-02-11-15-35-55.jpeg'), filename: 'avatar.jpg')
user6.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/KakaoTalk_Photo_2017-02-11-15-35-55.jpeg'), filename: 'avatar.jpg')
user7.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/KakaoTalk_Photo_2017-02-11-15-35-55.jpeg'), filename: 'avatar.jpg')
user8.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/KakaoTalk_Photo_2017-02-11-15-35-55.jpeg'), filename: 'avatar.jpg')
user9.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/KakaoTalk_Photo_2017-02-11-15-35-55.jpeg'), filename: 'avatar.jpg')
user10.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/KakaoTalk_Photo_2017-02-11-15-35-55.jpeg'), filename: 'avatar.jpg')
user11.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/KakaoTalk_Photo_2017-02-11-15-35-55.jpeg'), filename: 'avatar.jpg')
user12.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/KakaoTalk_Photo_2017-02-11-15-35-55.jpeg'), filename: 'avatar.jpg')
user13.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/KakaoTalk_Photo_2017-02-11-15-35-55.jpeg'), filename: 'avatar.jpg')
user14.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/KakaoTalk_Photo_2017-02-11-15-35-55.jpeg'), filename: 'avatar.jpg')
user15.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/KakaoTalk_Photo_2017-02-11-15-35-55.jpeg'), filename: 'avatar.jpg')
user16.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/KakaoTalk_Photo_2017-02-11-15-35-55.jpeg'), filename: 'avatar.jpg')
user17.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/KakaoTalk_Photo_2017-02-11-15-35-55.jpeg'), filename: 'avatar.jpg')



track1 = Track.create({title:"Nocturn", artist_id: 7, tag_id: 12})
track2 = Track.create({title:"Chinatown", artist_id: 1, tag_id: 8})
track3 = Track.create({title:"There Is A Light That Never Goes Out", artist_id: 9, tag_id: 3})
track4 = Track.create({title:"Bermuda Triangle", artist_id: 1, tag_id: 14})
track5 = Track.create({title:"Homecoming", artist_id: 13, tag_id: 1})
track6 = Track.create({title:"If I Ever Feel Better", artist_id: 16, tag_id: 5})
track7 = Track.create({title:"Feather", artist_id: 4, tag_id: 3})
track8 = Track.create({title:"Sing", artist_id: 17, tag_id: 6})
track9 = Track.create({title:"Motion Sickness", artist_id: 8, tag_id: 2})
track10 = Track.create({title:"Machu Pichu", artist_id: 5, tag_id: 9})
track11 = Track.create({title:"Look At Where We Are", artist_id: 8, tag_id: 1})
track12 = Track.create({title:"Dirty Harry", artist_id: 12, tag_id: 6})
track13 = Track.create({title:"Alison", artist_id: 17 , tag_id: 10})
track14 = Track.create({title:"World's End Rhapsody", artist_id: 4, tag_id: 7})
track15 = Track.create({title:"Souvlaki Space Station", artist_id: 17, tag_id: 6})
track16 = Track.create({title:"Flutes", artist_id: 8, tag_id: 8})
track17 = Track.create({title:"The Tourist", artist_id: 1, tag_id: 15})
track18 = Track.create({title:"On Melancholy Hill", artist_id:12 , tag_id: 9})
track19 = Track.create({title:"Kick Push", artist_id: 14, tag_id: 3})
track20 = Track.create({title:"When the Sun Hits", artist_id: 17, tag_id: 2})
track21 = Track.create({title:"Aruarian Dance", artist_id: 4, tag_id: 8})
track22 = Track.create({title:"Sleepyhead", artist_id: 15, tag_id: 14})
track23 = Track.create({title:"40 Days", artist_id: 17, tag_id: 12})
track24 = Track.create({title:"Goodbye Yellow Brick Road", artist_id: 1, tag_id: 11})
track25 = Track.create({title:"Feel Good Inc.", artist_id: 12, tag_id: 1})
track26 = Track.create({title:"Amazing (Feat. Young Jeezy)", artist_id: 13, tag_id: 5})
track27 = Track.create({title:"Lisztomania", artist_id: 16, tag_id: 3})
track28 = Track.create({title:"Gold Digger (Feat. Jamie Foxx)", artist_id: 13, tag_id: 1})
track29 = Track.create({title:"Heard 'Em Say (Feat. Adam Levine)", artist_id: 13, tag_id: 4})
track30 = Track.create({title:'The Reeling', artist_id: 15, tag_id: 15})


track1.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/03+Nocturne.mp3'), filename: 'Nocturn.mp3')
track2.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/1-01+Chinatown.mp3'), filename: 'Chinatown.mp3')
track3.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/13+There+Is+A+Light+That+Never+Goes+Out.mp3'), filename: 'There+Is+A+Light+That+Never+Goes+Out.mp3')
track4.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/1-04+Bermuda+Triangle.mp3'), filename: 'Bermuda+Triangle.mp3')
track5.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/12+Homecoming.m4a'), filename: 'Homecoming.mp3')
track6.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/04+If+I+Ever+Feel+Better.mp3'), filename: 'If+I_ever+feel+better.mp3')
track7.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/01+Feather+(feat.+Cise+Starr+%26+Akin).mp3'), filename: 'Feather.mp3')
track8.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/1-04+Sing.mp3'), filename: 'Sing.mp3')
track9.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/1-01+Motion+Sickness.mp3'), filename: 'Motion+Sickness.mp3')
track10.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/01+Machu+Picchu.mp3'), filename: 'Machu+Pichu.mp3')
track11.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/1-04+Look+At+Where+We+Are.mp3'), filename: 'Look+At+Where+We+Are.mp3')
track12.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/Gorillaz+-+Dirty+Harry.mp3'), filename: 'Dirty+Harry.mp3')
track13.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/1-01+Alison.mp3'), filename: 'Alison.mp3')
track14.audio.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-dev/1-09+World's+End+Rhapsody.mp3"), filename: "World's+End+Rhapsody.mp3")
track15.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/06+Souvlaki+Space+Station.mp3'), filename: 'Souvlaki_Space_Station.mp3')
track16.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/1-07+Flutes.mp3'), filename: 'Flutes.mp3')
track17.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/1-11+The+Tourist.mp3'), filename: 'The+Tourist.mp3')
track18.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/On+Melancholy+Hill.mp3'), filename: 'On_Melancholy_Hill.mp3')
track19.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/Kick+Push.mp3'), filename: 'Kick+Push.mp3')
track20.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/1-07+When+the+Sun+Hits.mp3'), filename: 'When+the+Sun+Hits.mp3')
track21.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/1-03+Aruarian+Dance.mp3'), filename: 'Aruarian+Dance.mp3')
track22.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/1-09+Sleepyhead.mp3'), filename: 'Sleepyhead.mp3')
track23.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/1-03+40+Days.mp3'), filename: '40+Days.mp3')
track24.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/1-08+Goodbye+Yellow+Brick+Road.mp3'), filename: 'Goodbye+Yellow+Brick+Road.mp3')
track25.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/Feel+Good+Inc..mp3'), filename: 'Feel+Good+Inc.mp3')
track26.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/04+Amazing+(Feat.+Young+Jeezy).m4a'), filename: 'Amazing+(Feat. Young Jeezy).mp3')
track27.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/01+Lisztomania.mp3'), filename: 'Lisztomania.mp3')
track28.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/04+Gold+Digger+(Feat.+Jamie+Foxx).m4a'), filename: 'Gold Digger(Feat. Jamie Foxx).mp3')
track29.audio.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-dev/02+Heard+'Em+Say+(Feat.+Adam+Levine).m4a"), filename: "Heard'Em Say+(Feat. Adam Levine).mp3")
track30.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/1-04+The+Reeling.mp3'), filename: 'The+Reeling.mp3')



track1.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/1.jpg'), filename: 'track.img')
track2.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/2.jpg'), filename: 'track.img')
track3.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/3.jpeg'), filename: 'track.img')
track4.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/4.jpg'), filename: 'track.img')
track5.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/5.jpg'), filename: 'track.img')
track6.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/6.jpg'), filename: 'track.img')
track7.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/7.jpg'), filename: 'track.img')
track8.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/8.jpeg'), filename: 'track.img')
track9.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/9.png'), filename: 'track.img')
track10.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/10.png'), filename: 'track.img')
track11.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/11.png'), filename: 'track.img')
track12.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/12.jpg'), filename: 'track.img')
track13.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/13.jpg'), filename: 'track.img')
track14.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/14.png'), filename: 'track.img')
track15.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/15.png'), filename: 'track.img')
track16.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/16.jpg'), filename: 'track.img')
track17.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/17.jpg'), filename: 'track.img')
track18.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/18.jpg'), filename: 'track.img')
track19.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/19.jpg'), filename: 'track.img')
track20.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/20.jpg'), filename: 'track.img')
track21.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/21.jpg'), filename: 'track.img')
track22.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/22.jpg'), filename: 'track.img')
track23.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/23.png'), filename: 'track.img')
track24.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/24.png'), filename: 'track.img')
track25.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/25.png'), filename: 'track.img')
track26.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/26.jpg'), filename: 'track.img')
track27.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/27.png'), filename: 'track.img')
track28.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/28.png'), filename: 'track.img')
track29.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/29.jpg'), filename: 'track.img')
track30.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/30.png'), filename: 'track.img')
