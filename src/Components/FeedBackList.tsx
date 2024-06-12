import React, { useState, useEffect } from "react";

interface Feedback {
  name: string;
  feedback: string;
}

const FeedbackList: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const worker = new Worker(new URL("webworker.js", import.meta.url));

    worker.onmessage = (event) => {
      const { type, data, error } = event.data;
      if (type === "success") {
        setFeedbacks(data);
      } else if (type === "error") {
        setError(error);
      }
    };

    worker.postMessage({});

    return () => {
      worker.terminate();
    };
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Feedback List</h2>
      {error && <p className="text-danger text-center">Error: {error}</p>}
      <div className="row">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">
                  <strong>{feedback.name}</strong>
                </h5>
                <p className="card-text">{feedback.feedback}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackList;
