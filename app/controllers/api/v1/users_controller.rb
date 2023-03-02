class API::V1::UsersController < ApplicationController
  skip_before_action :authenticate_user, only: [:create]
  before_action :find_user, only: [:show, :update, :destroy]
  
  def index
    @users = User.all
    render json: @users, status: 200
  end

  def show
    render json: @user, status: 200
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: 201
    else
      render json: {errors: @user.errors.full_messages}, status: 503
    end 
  end

  def update
    if @user.update(user_params)
      render json: @user, status: 200
    else
      render json: {errors: @user.errors.full_messages}, status: 503
    end
  end

  def destroy
    if @user.destroy
      render json: {message: "User deleted"}, status: 200
    else
      render json: {errors: @user.errors.full_messages}, status: 503
    end
  end

  private
  def user_params
    params.permit(:user_name, :email, :password, :name, :age)
  end

  def find_user
    @user = User.find(params[:id])
  end
end
