import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const FeedbackForm: React.FC = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/feedbacks', { name, feedback });
      setName('');
      setFeedback('');
      setSuccessMessage('Feedback successfully submitted!');
      setTimeout(() => setSuccessMessage(''), 5000); // Hide message after 5 seconds
    } catch (error) {
      console.error('Error submitting feedback', error);
      setSuccessMessage('Failed to submit feedback.');
    }
  };

  return (
    <>
      {successMessage && (
        <div className="alert alert-success text-center" role="alert">
          {successMessage}
        </div>
      )}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="bi bi-person"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon2">
                      <i className="bi bi-chat-text"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    id="feedback"
                    className="form-control"
                    placeholder="Enter Feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    required
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-block">
                    Submit Feedback
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackForm;
