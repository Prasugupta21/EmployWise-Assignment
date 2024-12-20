# EmployWise Platform

A responsive React-based User Management Dashboard application that allows users to edit and delete user details fetched from an API. The application includes essential features like alerts, loading states, and a navigation bar with user authentication.


#### Deploy Link : https://employ-wise-platform.netlify.app
## Features

### Core Features
- **Login Functionality** : Allows User to login by mock credentials with validation.
- **User Listing**: Fetch All the users from api and display it by a list.
- **Pagination**: Users per page are listed then prev and next button allows us to see all the users.
- **Edit User Details**: Fetch and update user data using `reqres.in` API.
- **Delete User**: Delete user data and provide feedback to the user.
- **Responsive Design**: Designed to work seamlessly across devices using Tailwind CSS.
- **Alert Notifications**: Display success or error alerts during operations.
- **Loading Indicators**: Indicate ongoing operations like fetching, updating, or deleting data.
- **Navbar with Dropdown**: A user profile dropdown with logout functionality.

### Technology Stack
- **Frontend**: React, Tailwind CSS.
- **API**: `reqres.in` API for fetching, updating, and deleting user data.
- **Icons**: Lucide React for iconography.

---

## Project Structure

### Components


1. **Navbar**: 
   - Displays user information and logout functionality.
   - Dropdown menu with smooth transitions.
2. **Alert**:
   - Customizable alert component for success and error messages.

### Pages


1. **Login Functionality**
    - Validation: Ensures both email and password fields are filled before submission.
    - Error Handling: Displays a user-friendly error message if the login fails.
    - Token Storage: Saves the authentication token in localStorage for session persistence.
    - Redirection: Redirects the user to the Users List page after successful login.
2. **User Listing**
    - Pagination: Navigate through pages using "Previous" and "Next" buttons.
    - Loading State: Displays a loading message while data is being fetched.
    - Error Handling: Shows an error message if the API request fails.
    - User Cards: Displays user details (name, email, and avatar) in a card format.

3. **Edit User Page**:
    - Fetches user data by ID.
    - Provides a form to edit and update user details.
4. **Delete User Functionality**:
    - Allows users to delete a user's details and navigates back to the user list after a successful deletion.


---

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (v20 or above)
- npm 

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/Prasugupta21/EmployWise-Assignment.git

2. Navigate to the project directory:
   ```bash
   cd EmployWise-Assignment

3. Install dependencies:
   ```bash
   npm install

4. Start the development server:
   ```bash
   npm run dev

5. Type http://localhost:5173 in Browser

