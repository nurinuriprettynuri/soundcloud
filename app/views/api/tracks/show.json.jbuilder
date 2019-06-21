
json.track do
    json.partial! "api/tracks/track", track: @track
end

json.artist do
    json.extract! @track.artist, :id, :username, :email
end

if @track.comments.length > 0
    puts "ekekekekeke"
    json.comments do 
        @track.comments.each do |comment|
            json.set! comment.id do
                json.extract! comment, :id, :body, :track_id
                json.extract! comment.user, :username
            end
        end
    end
else
    puts "kekeke"
    json.comments({})
end

