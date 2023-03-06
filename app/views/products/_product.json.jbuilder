json.extract! product, :id, :name, :image, :price, :description, :brand, :created_at, :updated_at
json.url product_url(product, format: :json)
