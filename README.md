#  Job Portal

A full-stack Job Portal web application built using **HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB**. The application allows administrators to create, update, view, and delete job postings, while candidates can browse available jobs and apply for them.

##  Features

- Create new job postings
- View all available jobs
- View detailed job information
- Update existing job postings
- Delete jobs with confirmation modal
- Apply for jobs
- Responsive and user-friendly interface
- RESTful API integration
- MongoDB database connectivity

##  Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (ES6)

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

##  Project Structure

```
Job-Portal/
│
├── Frontend/
│   ├── home.html
│   ├── jobs.html
│   ├── createJob.html
│   ├── profile.html
│   ├── jobs.js
│   └── style.css
│
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── package.json
│
└── README.md
```

##  Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/job-portal.git
```

### Install dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

### Start the Server

```bash
npm start
```

Server runs on:

```
http://localhost:3000
```

##  API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/findjobs` | Get all jobs |
| GET | `/api/viewDetails/:id` | Get job details |
| POST | `/api/createJob` | Create a job |
| PUT | `/api/updateJob/:id` | Update a job |
| DELETE | `/api/deleteJob/:id` | Delete a job |

##  Key Learning Outcomes

- CRUD Operations
- REST API Development
- Frontend & Backend Integration
- MongoDB Database Management
- Express.js Routing
- Fetch API
- Asynchronous JavaScript
- Error Handling & Debugging
- Modal Implementation
- Dynamic DOM Manipulation

##  Future Enhancements

- User Authentication (JWT)
- Role-Based Access (Admin & Candidate)
- Resume Upload
- Search & Filter Jobs
- Saved Jobs
- Applied Jobs Dashboard
- Email Notifications
- React Frontend
- Cloud Deployment (Railway/Render/Vercel)

##  Author

**Rakshith**

GitHub: https://github.com/Raksh0527

LinkedIn: https://linkedin.com/in/rakshith-k-27dec/
