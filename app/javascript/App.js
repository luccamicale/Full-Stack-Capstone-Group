import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './pages/NavBar';
import Home from './components/Home';
import Landing from './components/Landing';
import Detail from './components/Detail';
import Reservations from './components/Reservations';
import ReservationForm from './components/ReservationForm';

function App() {
  const [user, setUser ]= useState(1);
  const [product, setProduct] = useState(null);
 // const dispatch = useDispatch();
 // dispatch(retrieveRocket());

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Home/:id" element={<Detail />} />
        <Route path="/Reservations" element={<Reservations />} />  
        <Route path="/Reservations" element={<Reservations setProduct={setProduct} setUser={setUser} />} />
        <Route path="/reservationForm" element={<ReservationForm product={product} user={user} />} />
      </Routes>

    </div>
  );
}

export default App;
