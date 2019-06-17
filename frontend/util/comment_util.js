export const createComment = comment =>
  $.ajax({
    method: "POST",
    url: "api/comments",
    data: comment
  });

export const destroyComment = id =>
  $.ajax({
    method: "DELETE",
    url: `api/comments/${id}`
  });
