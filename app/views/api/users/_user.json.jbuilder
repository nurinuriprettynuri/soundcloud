json.extract! user, :id, :email, :username, :location

if user.image.attached?
    json.imageUrl url_for(user.image) 
else
    json.imageUrl ''
end