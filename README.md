Project Structure
This project contains two main folders:

Backend
Src
Backend
app.ts:
Contains all routes and necessary modules for the backend.

server.ts:
Contains the port number to connect the backend and some connection code for the backend.

feedback.ts:
Contains all the data types and attributes related to the feedback form and methods for accessing the data.

Modules used:
Express.js: Used to create a simple backend server that handles feedback submissions and retrievals.
Node.js: Used to create a backend server that handles the feedback submissions and stores them in an in-memory data structure.
cors: Used to connect the backend and frontend for authorized resource sharing with external third parties.
Src/Components
FeedbackForm:
Contains a form with some fields for feedback submission.

FeedbackList:
Used to fetch data from the backend and display the data in a bootstrap card format.

FrontPage:
Used for navigation purposes.

WebWorker:
Primarily designed for running scripts in the background in the browser environment.

Modules used:
Axios: Used to make HTTP requests from or in a browser.
Bootstrap: Used for styling the form and other components.
React Router DOM: Simplifies navigation in your web applications, keeping the URL and UI in sync.
Additional Information
Backend:
The backend folder is set up using TypeScript and Node.js with Express. It includes routes for handling feedback submissions and retrieval, and it uses an in-memory data structure to store feedback entries temporarily.

Frontend (Src/Components):
The frontend is built using React and TypeScript. It uses Axios to communicate with the backend, Bootstrap for styling, and React Router DOM for navigation. The WebWorker component is used to run scripts in the background, improving the performance of the web application.

Running the Project
Backend:

Navigate to the backend folder.
Install dependencies using npm install.
Start the server using npm run dev.
Frontend:

Navigate to the src folder.
Install dependencies using npm install.
Start the frontend server using npm start.
This setup ensures a smooth development workflow, with a clearly defined structure for both backend and frontend components.
