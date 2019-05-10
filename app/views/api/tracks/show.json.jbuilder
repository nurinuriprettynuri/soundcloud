
json.track do
    json.partial! "api/tracks/track", track: @track
end

json.artist do
    json.extract! @track.artist, :id, :username, :email
end