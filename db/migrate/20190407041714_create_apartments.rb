class CreateApartments < ActiveRecord::Migration[5.2]
  def change
    create_table :apartments do |t|
      t.string :street
      t.string :city
      t.string :zip
      t.string :state
      t.string :beds
      t.string :baths
      t.string :sq__ft
      t.datetime :sale_date
      t.integer :price
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
