class Product < ApplicationRecord
  has_many :reservations, dependent: :destroy

  validates :name, presence: true
  validates :image, presence: true
  validates :price, presence: true
  validates :description, presence: true
end
