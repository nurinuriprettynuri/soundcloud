# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

ActiveRecord::Base.transaction do

User.destroy_all
Track.destroy_all
Tag.destroy_all

Tag.create!({title: "jazz"})
Tag.create!({title: "rock"})
Tag.create!({title: "funk"})
Tag.create!({title: "grunge"})
Tag.create!({title: "indie"})
Tag.create!({title: "acoustic"})
Tag.create!({title: "pop"})
Tag.create!({title: "rapping"})
Tag.create!({title: "folk"})
Tag.create!({title: "country"})
Tag.create!({title: "techno"})

user1 = User.create!({email: "aliglaser@gmail.com", username:"alison_glaser", password: "123456789", location:"Seattle, WA"})
user2 = User.create!({email: "nooti77@gmail.com", username:"nuri_jeon", password: "123456789", location:"Puyallup, WA"})
user3 = User.create!({email: "briceyokoyama@gmail.com", username:"brice_yokoyama", password: "123456789", location:"San Jose, CA"})
user4 = User.create!({email: "timjao@gmail.com", username:"tim_jao", password: "123456789", location:"Los Angeles, CA"})
user5 = User.create!({email: "yepez@gmail.com", username:"yepezzzzz", password: "123456789", location:"Berkley, CA"})
user6 = User.create!({email: "johnson@gmail.com", username:"johnson_phan", password: "123456789", location:"Dallas, TX"})
user7 = User.create!({email: "raphael_kyu@gmail.com", username:"raphael_hwang", password: "123456789", location:"San francisco, CA"})

user1.image.attach(io: open("https://s3-us-west-1.amazonaws.com/notspotify-pro/user1-avatar.jpg"), filename: 'avatar.jpg')
user2.image.attach(io: open("https://s3-us-west-1.amazonaws.com/notspotify-pro/user1-avatar.jpg"), filename: 'avatar.jpg')
user3.image.attach(io: open("https://s3-us-west-1.amazonaws.com/notspotify-pro/user1-avatar.jpg"), filename: 'avatar.jpg')
user4.image.attach(io: open("https://s3-us-west-1.amazonaws.com/notspotify-pro/user1-avatar.jpg"), filename: 'avatar.jpg')
user5.image.attach(io: open("https://s3-us-west-1.amazonaws.com/notspotify-pro/user1-avatar.jpg"), filename: 'avatar.jpg')
user6.image.attach(io: open("https://s3-us-west-1.amazonaws.com/notspotify-pro/user1-avatar.jpg"), filename: 'avatar.jpg')
user7.image.attach(io: open("https://s3-us-west-1.amazonaws.com/notspotify-pro/user1-avatar.jpg"), filename: 'avatar.jpg')

track1 = Track.create({title:"Feather", artist_id: 1, tag_id: 3})
track2 = Track.create({title:"Machu Picchu", artist_id: 1, tag_id: 2})
track3 = Track.create({title:"Nocturn", artist_id: 2, tag_id: 1})
track4 = Track.create({title:"If I Ever Feel Better", artist_id: 2, tag_id: 5})
track5 = Track.create({title:"Souvlaki Space Station", artist_id: 4, tag_id: 6})
track6 = Track.create({title:"There Is A Light That Never Goes Out", artist_id: 5, tag_id: 3})


track1.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/01+Feather+(feat.+Cise+Starr+%26+Akin).mp3'), filename: 'feather.mp3')
track2.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/01+Machu+Picchu.mp3'), filename: 'machu pichu.mp3')
track3.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/03+Nocturne.mp3'), filename: 'nocturne.mp3')
track4.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/04+If+I+Ever+Feel+Better.mp3'), filename: 'If I ever feel better.mp3')
track5.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/06+Souvlaki+Space+Station.mp3', filename: 'Souvlaki Space Station')
track6.audio.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/13+There+Is+A+Light+That+Never+Goes+Out.mp3', filename: 'There Is A Light That Never Goes Out')

track1.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/20398131_158046971426557_7747940793746194432_n.jpg', filename: 'track.img')
track2.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/20582792_475450329474793_6087499779913285632_n.jpg', filename: 'track.img')
track3.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/20478517_1746368148993867_2653653287659634688_n.jpg', filename: 'track.img')
track4.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/20225343_1873601219559859_4445886382287618048_n.jpg', filename: 'track.img')
track5.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/20582792_475450329474793_6087499779913285632_n.jpg', filename: 'track.img')
track6.image.attach(io: open('https://s3-us-west-1.amazonaws.com/soundcloud-dev/tumblr_myu3ziIA2n1r1arpmo1_500.jpg', filename: 'track.img')