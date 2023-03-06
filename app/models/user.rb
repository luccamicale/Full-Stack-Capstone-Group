class User < ApplicationRecord
  has_many :reservations

  validates :name, presence: true
  validates :age, prsence: true
end
