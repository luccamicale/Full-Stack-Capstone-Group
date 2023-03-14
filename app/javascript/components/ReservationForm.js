import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reserveProduct } from "../redux/reservation/Reservation";
import { useNavigate } from "react-router-dom";
import { updateReservationStatus } from "../redux/reservation/Reservation";
import { cities } from "../redux/cities";
import "./reservationForm.css";

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
  const [bgImg, setBgImg] = useState("");

  useEffect(() => {
    if (product !== null) {
      const filter = products.filter((prod) => prod.id === parseInt(product));
      if (filter.length > 0) {
        setBgImg(filter[0].image);
      } else {
        setBgImg("");
      }
    }
  }, [product, products]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      date !== "" &&
      location !== "" &&
      user !== null &&
      product !== null &&
      product !== "null"
    ) {
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
      }, 1000);
    }
  }, [reserveStatus, navigate, dispatch]);

  return (
    <div
      className="reservationForm-container"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <p>{successMsg && "Product Reserved Successfully"}</p>
      {reserveStatus === "rejected" && (
        <p style={{ color: "red" }}>Something went wrong, please try again </p>
      )}

      <h1>RESERVE A CAR</h1>
      <p>
        There are many models of the tesla car please select a car model,
        reservation date, and city to book a test right of any of the model if
        it is available in your city
      </p>

      <form onSubmit={handleSubmit} className="form-reservation">
        <div className="select-container">
          <select
            value={product}
            onChange={(e) => {
              setProduct(e.target.value);
            }}
          >
            <option value={"null"}>Select car</option>
            {products.map((product) => (
              <option value={product.id}>{product.name}</option>
            ))}
          </select>
        </div>

        <div>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>

        <div className="select-container">
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value={""}>Select city</option>
            {cities.map((city) => (
              <option value={city}>{city}</option>
            ))}
          </select>
        </div>

        <button type="submit">
          Book Now{reserveStatus === "pending" && <span class="loader"></span>}
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
