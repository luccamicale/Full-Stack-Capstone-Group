require 'swagger_helper'

RSpec.describe 'api/v1/products', type: :request do
  before(:each) do
    @product = Product.create!(name: 'model 14', image: 'https://images.prismic.io/drive-electric/5119970b-fb90-48dc-b479-18e9f9ec1dcf_0x0-ModelY_01.jpg?auto=compress,format&rect=881,1253,2462,1293&w=1200&h=630&fit=crop',
                               price: 20_000, description: 'heloo world geyjjj kllllllllllllllllllll  jhhhhhhhh')
  end

  # index
  describe 'products API' do
    path '/api/v1/products' do
      get 'Fetch all Products' do
        tags 'All products'
        produces 'application/json', 'application/xml'
        response '200', 'List of products' do
          schema type: :array,
                 properties: {
                   name: { type: :string },
                   image: { type: :string },
                   price: { type: :decimal },
                   description: { type: :text }
                 },
                 required: %w[name image price description]
          run_test!
        end
      end
    end

    # create

    path '/api/v1/products' do
      post 'Creates a product' do
        tags 'Create a product'
        consumes 'application/json'
        parameter name: :product_params, in: :body, schema: {
          type: :object,
          properties: {
            name: { type: :string },
            image: { type: :string },
            price: { type: :decimal },
            description: { type: :text }
          },
          required: %w[name image price description]
        }

        response '201', 'Product created' do
          let(:product_params) do
            { name: 'Model 12', image: 'https://images.prismic.io/drive-electric/5119970b-fb90-48dc-b479-18e9f9ec1dcf_0x0-ModelY_01.jpg?auto=compress,format&rect=881,1253,2462,1293&w=1200&h=630&fit=crop',
              price: 20_000, description: 'hello world snnjn lkkkkkkkkkkkkkkkkkkkkkkkkklmmmmmmmmmm jhhhhhh' }
          end
          run_test!
        end

        response '503', 'Invalid request' do
          let(:product_params) { {} }
          run_test!
        end
      end
    end

    # show
    path '/api/v1/products/{id}' do
      get 'show a product' do
        tags 'Show a product'
        consumes 'application/json'
        parameter name: :id, in: :path, schema: {
          type: :object,
          properties: {
            name: { type: :string },
            image: { type: :string },
            price: { type: :decimal },
            description: { type: :description }
          },
          required: %w[id name image price description]
        }

        response '200', 'Product found' do
          let(:id) { @product.id }
          run_test!
        end
      end
    end

    # # delete
    path '/api/v1/products/{id}' do
      delete 'Delete a product' do
        tags 'Delete a product'
        consumes 'application/json'
        parameter name: :id, in: :path, type: :integer

        response '204', 'Product deleted successfully' do
          let(:id) { @product.id }
          run_test!
        end
      end
    end
  end
end
