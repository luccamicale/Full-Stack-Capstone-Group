class Product < ApplicationRecord
  has_many :reservations

  validates :name, presence: true
  validates :image, presence: true
  validates :price, presence: true
  validates :description, presence: true
  validates :brand, presence: true
end
