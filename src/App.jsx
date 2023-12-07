// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CustomerList from './components/CustomerList';
import TrainingList from './components/TrainingList';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/customers">Customers</Link></li>
            <li><Link to="/trainings">Trainings</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/trainings" element={<TrainingList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


