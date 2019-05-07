class Tag < ApplicationRecord
    validates :title, presence: true

    has_many :tracks,
        foreign_key: :tag_id,
        class_name: :Track
       
end
