class Track < ApplicationRecord
    validates :title, :artist_id, :tag_id, presence: true

    belongs_to :artist,
        foreign_key: :artist_id,
        class_name: :User

    belongs_to :tag,
        foreign_key: :tag_id,
        class_name: :Tag

    has_many :comments,
        foreign_key: :track_id,
        class_name: :Comment    
        
    has_one_attached :image
    has_one_attached :audio
end
