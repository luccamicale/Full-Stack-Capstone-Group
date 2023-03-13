class Api::V1::LoginController < ApplicationController
    def login
        @user = User.find_by(name: params[:name])
#       @user.user = @current_user
    
        if @user.save
          render json: @user, status: 201
        else
          render json: { errors: @user.errors.full_messages }, status: 503
        end
      end
      

    def user_params
       params.require(:user).permit(:name, :age)
     end

end