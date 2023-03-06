class Api::V1::ReservationsController < ApplicationController
  def index
    @reservations = Reservation.all
    render json: @reservations, status: 200
  end

  def show
    render json: @reservation, status: 200
  end

  def create
    @reservation = Reservation.new(reservation_params)
    @reservation.user = @current_user

    if @reservation.save
      render json: @reservation, status: 201
    else
      render json: { errors: @reservation.errors.full_messages }, status: 503
    end
  end

  def update
    if @reservation.update(reservation_params)
      render json: @reservation, status: 200
    else
      render json: { errors: @reservation.errors.full_messages }, status: 503
    end
  end

  def destroy
    if @reservation.destroy
      render json: { message: 'reservation deleted' }, status: 200
    else
      render json: { errors: @reservation.errors.full_messages }, status: 503
    end
  end

  private

  def reservation_params
    params.require(:reservation).permit(:date, :product_id)
  end

  def find_reservation
    @reservation = Reservation.find(params[:id])
  end
end
