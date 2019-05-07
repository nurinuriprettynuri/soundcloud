class Api::TagsController < ApplicationController
    def index
        @tags = Tag.all()
        render "api/tags/index"
    end
end
