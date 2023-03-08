import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './pages/NavBar';
import Home from './components/Home';
import Landing from './components/Landing';
import Details from './components/Details';
import Reservations from './components/Reservations';

function App() {
 // const dispatch = useDispatch();
 // dispatch(retrieveRocket());

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/Reservations" element={<Reservations />} />
      </Routes>

    </div>
  );
}

export default App;