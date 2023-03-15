require 'swagger_helper'

RSpec.describe 'api/v1/users', type: :request do

  path '/api/v1/signup' do

    post('create user') do
      response(200, 'successful') do

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse({"name": "Amare", password: "123456"})
            }
          }
        end
        run_test!
      end
    end
  end

  # path '/api/v1/users' do

  #   get('list users') do
  #     response(200, 'successful') do

  #       after do |example|
  #         example.metadata[:response][:content] = {
  #           'application/json' => {
  #             example: JSON.parse(response.body, symbolize_names: true)
  #           }
  #         }
  #       end
  #       run_test!
  #     end
  #   end
  # end
end
