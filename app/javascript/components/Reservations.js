import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchReservations } from "../redux/reservation/Reservation";
import { NavLink } from "react-router-dom";

function Reservations({setProduct, setUser}) {
  const {reservations, getReservationStatus} = useSelector((state) => state.reservations);
  const dispatch = useDispatch();
  console.log(reservations)

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  if (getReservationStatus === "pending") return <div className="reservation"> <span class="loader"></span></div>

    return (
      <div className="reservations">
        <NavLink to="/reservationForm" onClick={() => setProduct(1)}>Reserve</NavLink>
        <h1>My Reservations</h1>
        {reservations.map((reservation) =>
          <div>
            <h2>Date: {reservation.date}</h2>
            <h3>Time: {reservation.time}</h3>
            <h4>Product id: {reservation.product_id}</h4>
            <h3>User id: {reservation.user_id}</h3>
          </div>

        )}
      </div>
    );
  }
  
  export default Reservations;