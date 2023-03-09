import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchReservations } from "../redux/reservation/Reservation";
import './reservation.css'

function Reservations() {
  const { reservations, getReservationStatus } = useSelector((state) => state.reservations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  if (getReservationStatus === "pending") return <div className="reservation"> <span class="reservation-loader"></span></div>

  return (
    <div className="reservation-container">
      <h1>My Reservations</h1>
      <table>
        <tr>
          <th>Date</th>
          <th>Product name</th>
          <th>City</th>
          <th>Actions</th>
        </tr>
      {reservations.map((reservation) =>

        <tr>
          <td>{reservation.date}</td>
          <td>{reservation.product.name}</td>
          <td>{reservation.city}</td>
          <td><button type="button" className="btn cancel">Cancel</button></td>
        </tr>
      )}
      </table>
    </div>
  );
}

export default Reservations;