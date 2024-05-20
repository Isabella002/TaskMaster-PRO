### 

TaskMaster PRO is an innovative task managing app that brings efficiency and organization together. TaskMaster PRO follows the MERN (MongoDB, Express, React, and Node.js) stack. The combination of classic and modern frontend technology provides an enjoyable experience for both administrators and users. Hopefully with this application you will be able to being your productivity to a whole new level.

## **Administrator Features**
1. **User Management:**
    - Create admin accounts
    - Add/manage team members 

2. **Task Assignment:**
    - Assign tasks to individual or multiple users
    - Update task details/status

3. **Task Attributes:**
    - Assign priority levels
    - Add/manage sub-tasks
    - Label tasks 
4. **Attach/Upload Files:**
    - Upload task attachments, like images

5. **User Account Control:**
    - Disable or activate user accounts.
    - Permanently delete or trash tasks.

## **User Features**
1. **Task Interaction:**
    - Change task status
    - View task info

2. **Communication:**
    - Comment/correspond with others


## **General User Features**
1. **Authentication and Authorization:**
    - User login with secure authentication
    - Access is based on roles

2. **Profile Management:**
    - Update user profiles

3. **Password Management:**
    - Change password
    - Create a new password

4. **Dashboard:**
    - Summary of user activity
    - Task filters 

## **Technologies Used**
- **Frontend:**
    - React/Vite
    - Headless UI
    - Tailwind CSS
    - Redux Toolkit for State Management
    - Postman
    - Firebase 

- **Backend:**
    - Node.js/Express.js
    
- **Database:**
    - MongoDB Atlas

&nbsp;

## SETUP INSTRUCTIONS
# Server 

## Environment variables
Create the environment variables file `.env` in the server folder. 

- MONGODB_URI = `your MongoDB URL`
- JWT_SECRET = `any secret key - must be secured`
- PORT = `5001` or any port number
- NODE_ENV = `development`

&nbsp;

## Set Up MongoDB:

1. Setting up MongoDB involves a few steps:
    - Visit MongoDB Atlas Website
    - Go to the MongoDB Atlas website: [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).

    - Create an Account
    - Log into your MongoDB Atlas account.
    - Create a New Cluster
    - Choose a Cloud Provider and Region
    - Configure Cluster Settings
    - Create Cluster
    - Wait for Cluster to Deploy
    - Create Database User
    - Set Up IP Whitelist
    - Connect to Cluster
    - Configure Your Application
    - Test the Connection

2. Create a new database and configure the `.env` file with the MongoDB connection URL. 

## Run server

1. Open the project in any editor of choice.
2. Navigate into the server directory `cd server`.
3. Run `npm install` to install the packages.
4. Run `npm start` to start the server.

If configured correctly, you should see a message indicating that the server is running successfully and `Database Connected`.

&nbsp;

# Client

## Environment variables
Create the environment variables file `.env` in the client folder. The `.env` file contains the following environment variables:

- VITE_APP_BASE_URL = `http://localhost:5001` #Note: Change the port 5001 to your port number.
- VITE_APP_FIREBASE_API_KEY = `Firebase api key`

1. Navigate into the client directory `cd client`.
2. Run `npm install` to install the packages.
3. Run `npm start` to run the app on `http://localhost:3000`.
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.



