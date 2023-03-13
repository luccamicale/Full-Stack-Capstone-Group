RSpec.describe Api::V1::ReservationsController, type: :controller do
  describe 'GET #index' do
    it 'returns a success response' do
      get :index
      expect(response).to be_successful
    end
  end
end
