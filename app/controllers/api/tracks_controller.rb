class Api::TracksController < ApplicationController
    
    def index
        @tracks = Track.all
        render "api/tracks/index"
    end
    
    def show
        @track = Track.find(params[:id])
        render "api/tracks/show"
    end

    def create
        @track = Track.new(track_params)
        if @track.save
            render "api/tracks/show"
        else
            render json: @track.errors.full_messages, status: 422
        end

    end

    def destroy
        @track = Track.find(params[:id])
        @track.destroy
        render 'api/tracks/show'
    end


    def update
        @track = Track.find(params[:id])
        if @track.update_attributes(track_params)
            render "api/tracks/show"
        else
            render json: @track.errors.full_messages, status: 401
        end
    end

    private
    
    def track_params
        params.require(:track).permit(:title, :artist_id, :tag_id, :image, :audio)
    end


end
