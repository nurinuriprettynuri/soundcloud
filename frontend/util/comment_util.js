export const fetchAllComments = () =>
  $.ajax({
    method: "GET",
    url: "api/comments"
  });

export const fetchComment = id =>
  $.ajax({
    method: "GET",
    url: `api/comments/${id}`
  });

export const createComment = comment =>
  $.ajax({
    method: "POST",
    url: "api/comments",
    data: comment,
    contentType: false,
    processData: false
  });

export const deleteComment = id =>
  $.ajax({
    method: "DELETE",
    url: `api/comments/${id}`
  });
