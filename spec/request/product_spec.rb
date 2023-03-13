require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :controller do
  describe 'GET #index' do
    before do
        user2 = User.create!(id: 2, name: "Lucca", age: 22)
      get :index
    end

    it 'returns a success response' do
      expect(response).to have_http_status(:success)
    end

    it 'returns all users' do
      users = JSON.parse(response.body)
      expect(users.size).to eq(2)
    end
  end
end