require 'rails_helper'

RSpec.describe 'Users', type: :model do
  subject do
    user2 = User.create!(id: 2, name: "Lucca", age: 22)
  end

  it 'is not valid without a name' do
    subject.name = nil
    expect(subject).to_not be_valid
  end

  it 'is not valid without an age' do
    subject.age = nil
    expect(subject).to_not be_valid
  end

  it 'has many reservations' do
    expect(subject).to respond_to(:reservations)
  end

  it 'can have an age attached' do
    expect(subject).to respond_to(:age)
  end

  it 'can have an name attached' do
    expect(subject).to respond_to(:name)
  end
end
