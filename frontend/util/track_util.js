export const fetchAllTracks = () =>
  $.ajax({
    method: "GET",
    url: "api/tracks"
  });

export const fetchTrack = id => {
  return $.ajax({
    method: "GET",
    url: `api/tracks/${id}`
  });
};

export const createTrack = track =>
  $.ajax({
    method: "POST",
    url: "api/tracks",
    data: track,
    contentType: false,
    processData: false
  });

export const updateTrack = (track, id) => {
  return $.ajax({
    method: "PATCH",
    url: `api/tracks/${id}`,
    data: track,
    contentType: false,
    processData: false
  });
};

// let track = {id:11, title:"111"};

export const deleteTrack = id =>
  $.ajax({
    method: "DELETE",
    url: `api/tracks/${id}`
  });
