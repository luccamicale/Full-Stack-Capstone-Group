import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reserveProduct } from "../redux/reservation/Reservation";
import { useNavigate } from "react-router-dom";
import { updateReservationStatus } from "../redux/reservation/Reservation";
import { cities } from "../redux/cities";
import './reservationForm.css'

const ReservationForm = ({ product, user, setProduct }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const reserveStatus = useSelector(
    (state) => state.reservations.reserveStatus
  );

  const products = useSelector((state) => state.homes);
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [successMsg, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date !== "" && location !== "" && user !== null && product !== null) {
      const reservationData = {
        date,
        city: location,
        user_id: user,
        product_id: product,
      };
      dispatch(reserveProduct(reservationData));
    } else {
      alert("please fill all fields");
    }
  };

  useEffect(() => {
    if (reserveStatus === "fulfilled") {
      setSuccess(true);
      setTimeout(() => {
        navigate("/reservations");
        dispatch(updateReservationStatus(""));
        setProduct(null);
      }, 3000);
    }
  }, [reserveStatus, navigate, dispatch]);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Reserve A Tesla Car</h1>
      <p>{successMsg && "Product Reserved Successfully"}</p>
      <p>You are reserving the car: {product}</p>
      {(product === null ) && <div className="select-container">
        <p>Please Select a product</p>
        <select value={product} onChange={(e) => setProduct(e.target.value)} >
          {products.map((product) => (
            <option value={product.id}>{product.name}</option>
          ))}
        </select>
      </div>}

      <div>
        <p>Please Select date</p>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
        <p>you selected the date: {date}</p>
      </div>

      <div className="select-container">
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          {cities.map((city) => (
            <option value={city.name}>{city.name}</option>
          ))}
        </select>
        <p>you selected the city: {location}</p>
      </div>

      <button type="submit">
        Reserve{reserveStatus === "pending" && <span class="loader"></span>}
      </button>
    </form>
  );
};

export default ReservationForm;
