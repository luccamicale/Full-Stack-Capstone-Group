require 'rails_helper'

RSpec.describe 'Users', type: :model do
  subject do
    user = User.create!(username: "Amare", password: 'hello')
  end

  it 'is not valid without a username' do
    subject.username = nil
    expect(subject).to_not be_valid
  end

  it 'is not valid without an age' do
    subject.password = nil
    expect(subject).to_not be_valid
  end

  it 'has many reservations' do
    expect(subject).to respond_to(:reservations)
  end

  it 'can have an password attached' do
    expect(subject).to respond_to(:password)
  end

  it 'can have an username attached' do
    expect(subject).to respond_to(:username)
  end
end