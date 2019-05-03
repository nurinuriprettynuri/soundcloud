class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :title, null:false
      t.string :length, null:false
      t.integer :artist_id, null:false
      t.integer :tag_id, null:false
      t.binary :audio_url, null:false
      t.string :image_url, null:false
      t.timestamps
    end
    add_index :tracks, :title 
    add_index :tracks, :artist_id 
  end
end
