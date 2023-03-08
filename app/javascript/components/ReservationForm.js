import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reserveProduct } from '../redux/reservation/Reservation';
import { useNavigate } from 'react-router-dom';
import { updateReservationStatus } from '../redux/reservation/Reservation';
import { cities } from '../redux/cities';


const ReservationForm = ({product, user}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reserveStatus = useSelector((state) => state.reservations.reserveStatus);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [successMsg, setSuccess] = useState(false);
  console.log(cities)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(date !== '' && time !== '' && location !== '') {
      const reservationData = {
        date,
        time,
        user_id: user,
        product_id: product
      }
      dispatch(reserveProduct(reservationData))
    } else {
      alert("please fill all fields")
    }
  }
  
  useEffect(() => {
    if (reserveStatus === "fulfilled") {
      setSuccess(true)
      setTimeout(() => {
        navigate('/reservations')
        dispatch(updateReservationStatus(''))
      }, 3000)
    }
  }, [reserveStatus, navigate, dispatch]);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Reserve A Doctor</h1>
      <p>{successMsg && "Product Reserved Successfully"}</p>
      <div>
        <p>Please Select date</p>
        <input type="date" onChange={(e) => setDate(e.target.value)} value={date} />
        <p>you selected the date: {date}</p>
      </div>

      <div>
        <p>Please Select time</p>
        <input type="time" onChange={(e) => setTime(e.target.value)} value={time} />
        <p>you selected the time: {time}</p>
      </div>

      <div className="select-container">
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          {cities.map((city) => (
            <option value={city.name} >{city.name}</option>
          ))}
        </select>
        <p>you selected the city: {location}</p>
      </div>

      <button type="submit">Reserve{(reserveStatus === "pending") && <span class="loader"></span>}</button>
    </form>
  )
}

export default ReservationForm