# Employee Management Portal

A responsive **Employee Management Portal (Admin Dashboard)** built using **React, JavaScript, HTML, CSS, React Router, and APIs**.

The application allows administrators to manage employees, attendance, leaves, timesheets, profiles, and other employee-related activities through a clean and reusable component-based architecture.

## Features

### Authentication

* Login
* Logout
* Protected Routes
* Local Storage Session Management

### Dashboard

* Total Employees
* Present Employees
* Absent Employees
* Pending Leaves
* Pending Timesheets
* Recent Activities

### Employee Management

* View employee list
* View employee details
* Add employee
* Edit employee
* Delete employee
* Search employees
* Filter employees
* Sort employees

### Attendance Management

* Employee Check-In
* Employee Check-Out
* Attendance History
* Monthly Attendance Table

### Leave Management

* Apply for Leave
* View Leave History
* Approve Leave
* Reject Leave

### Timesheet Management

* Add Timesheet
* View Timesheets
* Approve Timesheet
* Reject Timesheet

### Profile

* View Profile
* Update Profile

### Other Features

* Protected Routes
* Custom 404 Page
* Responsive Design
* Reusable Components
* API Integration

## Tech Stack

* React.js
* JavaScript
* HTML5
* CSS3
* React Router
* REST APIs
* Local Storage

## APIs

The project uses the following APIs:

### Authentication

```text
https://dummyjson.com/auth/login
```

### Employees

```text
https://dummyjson.com/users
```

Mock JSON data can be used for:

* Attendance
* Leaves
* Timesheets

## Project Routes

```text
/login
/dashboard
/employees
/employees/:id
/add-employee
/edit-employee/:id
/attendance
/leaves
/timesheets
/profile
/*
```

## Folder Structure

```text
src/
│
├── assets/
├── components/
├── pages/
├── services/
├── hooks/
├── routes/
├── utils/
├── styles/
│
├── App.jsx
└── main.jsx
```

## Reusable Components

The application can contain reusable components such as:

```text
Button
Input
Table
Card
Modal
Loader
Pagination
SearchBar
Sidebar
Navbar
```

## Utility Files

Common utility files:

```text
utils/
├── constants.js
├── helpers.js
├── validators.js
└── storage.js
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project directory:

```bash
cd employee-management-portal
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application in your browser using the URL shown in the terminal.

## Development Guidelines

* Use `PascalCase` for React components.
* Use `camelCase` for variables and functions.
* Keep components small and reusable.
* Avoid duplicate code.
* Keep API calls inside the `services` folder.
* Use meaningful commit messages.
* Do not push code directly to the `main` branch.

## Git Workflow

Create a new branch before starting your task:

```bash
git checkout -b feature/your-feature-name
```

Add your changes:

```bash
git add .
```

Commit your changes:

```bash
git commit -m "Add employee management feature"
```

Push your branch:

```bash
git push origin feature/your-feature-name
```

After pushing the branch, create a **Pull Request** to merge your changes into the main branch.

## Theme Colors

| Purpose    | Color     |
| ---------- | --------- |
| Primary    | `#2563EB` |
| Secondary  | `#3B82F6` |
| Success    | `#22C55E` |
| Danger     | `#EF4444` |
| Background | `#F8FAFC` |
| Border     | `#E5E7EB` |

## Optional Features

The following features can be added to improve the application:

* Dark Mode
* CSV Export
* Debounced Search
* React Lazy Loading
* React Suspense
* `React.memo`
* `useMemo`
* `useCallback`

## Team Responsibilities

### Person 1

* Authentication
* Dashboard
* Employee CRUD

### Person 2

* Attendance
* Leave Management

### Person 3

* Timesheet
* Profile
* Navbar
* Sidebar
* Modal
* Loader
* Pagination

### All Members

* Integration
* Responsive Design
* Testing
* Bug Fixing

## Project Deliverables

* Responsive React Application
* GitHub Repository
* README Documentation
* Clean Folder Structure
* Final Project Demo

## Future Improvements

Possible improvements include:

* Backend integration
* Role-based authentication
* Advanced employee filtering
* Data visualization
* Notifications
* Dark mode
* Export employee data
* Better performance optimization

## License

This project is developed for learning and internship purposes.
