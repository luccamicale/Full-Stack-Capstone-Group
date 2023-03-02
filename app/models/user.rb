class User < ApplicationRecord
  has_secure_password
  has_many :reservations

  #Add validation to attributes
  validates :name, presence: true, length: { maximum: 50 }
  validates :user_name, presence: true, length: { maximum: 50 }, uniqueness: true
  validates :email, presence: true, length: { maximum: 255 }, uniqueness: true
  validates :password, presence: true, length: { minimum: 6 }
end
