class User < ApplicationRecord
  has_many :reservations, dependent: :destroy

  validates :username, presence: true
  validates :password, presence: true
end
