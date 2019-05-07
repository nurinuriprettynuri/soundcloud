json.extract! track, :id, :artist_id, :title

if track.image.attached?
    json.imageUrl url_for(track.image)
else
    json.imageUrl ''
end

if track.audio.attached?
    json.audioUrl url_for(track.audio)
else
    json.audioUrl ''
end
