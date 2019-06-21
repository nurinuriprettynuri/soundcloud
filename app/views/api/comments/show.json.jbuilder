json.partial! "api/comments/comment", comment: @comment
json.extract! @comment.user, :username
