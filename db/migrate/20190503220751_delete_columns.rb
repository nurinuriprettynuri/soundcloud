class DeleteColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :image_url
    remove_column :tracks, :image_url
    remove_column :tracks, :audio_url
  end
end
