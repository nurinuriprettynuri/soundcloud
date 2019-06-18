class Api::CommentsController < ApplicationController
    def index
        @comments = Comment.all
        render "api/comments/index"
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render "api/comments/show"
        else
            render json: @comment.errors.full_messages, status: 422
        end 
    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
        render 'api/comments/index'
    end

    private
    def comment_params
        p params
        p "here?"
        params.require(:comment).permit(:body, :user_id, :track_id)
    end
end
