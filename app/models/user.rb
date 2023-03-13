class User < ApplicationRecord
  has_many :reservations, dependent: :destroy

  validates :name, presence: true
  validates :age, presence: true
end
