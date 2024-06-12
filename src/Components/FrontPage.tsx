import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const FrontPage: React.FC = () => {
  return (
    <div className="container mt-5 text-center">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to Simple Feedback Management System</h1>
        <p className="lead">You can submit your feedback and view your feedbacks.</p>
        <hr className="my-4" />
        <p>
          <Link className="btn btn-primary btn-lg mx-2" to="/submit" role="button">
            Submit Feedback
          </Link>
          <Link className="btn btn-secondary btn-lg mx-2" to="/feedbacks" role="button">
            View Feedbacks
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FrontPage;
