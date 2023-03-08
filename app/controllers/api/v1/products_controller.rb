class Api::V1::ProductsController < ApplicationController

  def index
    @products = Product.all
    render json: @products, status: 200
  end

  def show
    @product = Product.find(params[:id])
    render json: @product, status: 200
  end

  def create
    @product = Product.new(product_params)
    @product.user = @current_user

    if @product.save
      render json: @product, status: 201
    else
      render json: { errors: @product.errors.full_messages }, status: 503
    end
  end

  def update
    if @product.update(product_params)
      render json: @product, status: 200
    else
      render json: { errors: @product.errors.full_messages }, status: 503
    end
  end

  def destroy
    if @product.destroy
      render json: { message: 'product deleted' }, status: 200
    else
      render json: { errors: @product.errors.full_messages }, status: 503
    end
  end

  private

  def product_params
    params.require(:product).permit(:date, :product_id)
  end

  def find_product
    @product = Product.find(params[:id])
  end
end
