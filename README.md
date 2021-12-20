# Steps to run the program on your local machine

1. Clone the Repository and make sure that you have Node Packet Manager (npm), Node.js and Ionic already installed on your machine before performing the next steps.

2. Go into the "fasal-assignment" folder, use cmd and change directory to "backend", then install dependencies and finally start the server locally.
   cd backend
   npm install
   npm run start

3. Keep the first cmd alive and open another cmd. Go into the "fasal-assignment" folder and change the directory to "frontend", then install dependencies and finally run the application locally.
   cd frontend
   npm install
   ionic serve

4. The backend will run on "localhost:5000" while the frontend will run on "localhost:8000" or on the next port if the first port is unavailable.

5. Now create an account on the application using Signup page, then login using the same username and password form the Login page.

6. After successful login navigate between Home and Search tab from the bottom of the screen. Use the searchbar in the Search tab to find your favourite movies and add them to your list on the Home page. You can also remove any movie from your Home page by using the Remove button.
