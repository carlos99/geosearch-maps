require 'csv'

Apartment.destroy_all

CSV.foreach("Sacramentorealestatetransactions.csv", headers: true) do |line|
  Apartment.create! line.to_hash.except(*%w{type latitude longitude})
end
