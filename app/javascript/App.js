import React from 'react';
import { Routes, Route } from 'react-router-dom';

//import { useDispatch } from 'react-redux';
import NavBar from './pages/NavBar';
import Home from './components/Home';
import Landing from './components/Landing';
import Details from './components/Details';
import Reservations from './components/Reservations';
import Greeting from './components/Greeting';
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
        <Route path="/Greeting" element={<Greeting />} />
    
      </Routes>

    </div>
  );
}

export default App;
