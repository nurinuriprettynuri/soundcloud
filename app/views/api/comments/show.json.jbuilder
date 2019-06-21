json.set! @comment.id do
    json.partial! "api/comments/comment", comment: @comment
    json.extract! @comment.user, :username
end