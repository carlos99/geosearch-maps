json.extract! apartment, :id, :street, :city, :zip, :state, :beds, :baths, :sq__ft, :sale_date, :price, :latitude, :longitude, :created_at, :updated_at
json.url apartment_url(apartment, format: :json)
