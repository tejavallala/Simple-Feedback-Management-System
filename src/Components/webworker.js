// feedbackWorker.js
onmessage = async () => {
    try {
      const response = await fetch("http://localhost:4000/feedback");
      const data = await response.json();
      postMessage({ type: "success", data });
    } catch (error) {
      postMessage({ type: "error", error: error.message });
    }
  };
  