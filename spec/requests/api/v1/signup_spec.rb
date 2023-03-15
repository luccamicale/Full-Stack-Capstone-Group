require 'swagger_helper'

RSpec.describe 'Register User', type: :request do
  path '/api/v1/signup' do
    post 'Sign up User' do
      tags 'Sign Up'
      consumes 'application/json'
      parameter name: :user, in: :body, schema: {
        type: :object,
        properties: {
          username: { type: :string },
          password: { type: :string }
        },
        required: %w[username password]
      }

      response '200', 'Sign up success' do
        let(:user) do
          { user: { username: 'Lucas Bermudez', password: '123456'} }
        end
        run_test!
      end

      response '422', 'invalid request' do
        let(:user) do
          { user: { username: 'Hans Zizold' } }
        end
        run_test!
      end
    end
  end
end
