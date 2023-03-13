require 'rails_helper'

RSpec.describe 'Reservations', type: :model do
  subject do
    user = User.create!(username: "Amare", password: 'hello')
    Product.create(id: 3, name: 'Model X', image: 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2016/05/2016-Tesla-Model-X-101-1-626x383.jpg', price: 0.68e5, description:
    'A bold new approach to steering offers better feel and an unobstructed view of the road ahead. Tap the brake and Model X automatically selects the correct direction to start your trip.', created_at: 'Thu, 09 Mar 2023 19:27:56.241180000 UTC +00:00')
    Reservation.create(id: '1', date: '20-05-2023', city: 'New York', user_id: '1', product_id: '1')
  end

  it 'is not valid without a city' do
    subject.city = nil
    expect(subject).to_not be_valid
  end

  it 'is not valid without a date' do
    subject.date = nil
    expect(subject).to_not be_valid
  end

  it 'can have an city attached' do
    expect(subject).to respond_to(:city)
  end

  it 'can have an date attached' do
    expect(subject).to respond_to(:date)
  end
end