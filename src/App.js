import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReservationDetails from './pages/ReservationDetails';
import SideNav from './components/SideNav';
import ReserveForm from './pages/ReserveForm';
import TopNav from './components/TopNav';
import DeleteTour from './pages/DeleteTour';
// import MyReservations from './pages/MyReservations';

function App() {
  return (
    <div className="App">
      <TopNav btnColor="text-green" />

      <SideNav />
      <Routes>
        <Route path="/" element={<DeleteTour />} />

        <Route path="/reservations/:id" element={<ReservationDetails />} />
        <Route path="/reserve-tour/:id" element={<ReserveForm />} />
      </Routes>
    </div>
  );
}

export default App;
