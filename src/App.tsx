import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FeedbackForm from './Components/FeedBackForm';
import FeedbackList from './Components/FeedBackList';
import FrontPage from './Components/FrontPage';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App: React.FC = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container d-flex justify-content-center">
          <Link className="navbar-brand" to="/">Feedback Management System</Link>
        </div>
      </nav>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/submit" element={<FeedbackForm />} />
          <Route path="/feedbacks" element={<FeedbackList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
