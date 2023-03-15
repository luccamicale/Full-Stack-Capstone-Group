require 'swagger_helper'

RSpec.describe 'api/v1/reservations', type: :request do
  before(:each) do
    @user = User.create!(username: 'amare', password: '1234567')
    @product = Product.create!(name: 'model 14', image: 'https://images.prismic.io/drive-electric/5119970b-fb90-48dc-b479-18e9f9ec1dcf_0x0-ModelY_01.jpg?auto=compress,format&rect=881,1253,2462,1293&w=1200&h=630&fit=crop',
    price: 20000, description: 'heloo world geyjjj kllllllllllllllllllll  jhhhhhhhh')
    @reservation = Reservation.create!(date: '2023-04-25', city: 'Addis Ababa', user_id: @user.id,
    product_id: @product.id)
  end

  # index
  describe 'Reservations API' do
    path '/api/v1/reservations' do
      get 'fetch Reservations' do
        tags 'data from the reservations route'
        produces 'application/json', 'application/xml'
        response '200', 'List of Reservations' do
          schema type: :array,
                 properties: {
                   date: { type: :date },
                   city: { type: :string },
                   user_id: { type: :integer },
                   product_id: { type: :integer }
                 },
                 required: %w[date city user_id product_id]
          run_test!
        end
      end
    end

    # create

    path '/api/v1/reservations' do
      post 'Creates a reservation' do
        tags 'Reservation'
        consumes 'application/json'
        parameter name: :reservation_params, in: :body, schema: {
          type: :object,
          properties: {
            date: { type: :date },
            city: { type: :city },
            user_id: { type: :integer },
            product_id: { type: :integer }
          },
          required: %w[date city user_id product_id]
        }

        response '201', 'Product created' do
          let(:reservation_params) { { date: '2023-07-29', city: 'london', user_id: @user.id, product_id: @product.id } }
          run_test!
        end

        response '503', 'invalid request' do
          let(:reservation_params) { {} }
          run_test!
        end
      end
    end


    # # delete
    path '/api/v1/reservations/{id}' do
      delete 'Delete a reservation' do
        tags 'Reservations'
        consumes 'application/json'
        parameter name: :id, in: :path, type: :integer

        response '200', 'Reservation deleted successfully' do
          let(:id) { @reservation.id }
          run_test!
        end
      end
    end
  end
end
