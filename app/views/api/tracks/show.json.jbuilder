
json.track do
    json.partial! "api/tracks/track", track: @track
end

json.artist do
    json.extract! @track.artist, :id, :username, :email
end

json.comments(@track.comments) do |comment|
    json.extract! comment, :id, :body, :track_id
    json.extract! comment.user, :username
end

