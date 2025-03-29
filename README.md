# User Management App

This is a simple React-based user management application that interacts with the [ReqRes API](https://reqres.in/) to perform CRUD operations such as listing users, editing user details, and deleting users. It includes authentication functionality as well.

## Features
- User Login
- Fetch and Display User List
- Edit User Details
- Delete Users

## Technologies Used
- **React** (Component-based UI development)
- **React Router DOM** (Client-side routing)
- **Tailwind CSS** (Styling)
- **useContext** (State management for global user data)
- **Axios** (HTTP requests to ReqRes API)

## Folder Structure
```
src/
├── pages/
│   ├── Login.jsx
│   ├── ListUsers.jsx
│   ├── EditUser.jsx
├── App.js
├── Main.js
```

## Installation
1. Clone the repository:
   ```sh
   git clone <GITHUB_REPO_URL>
   cd user-management-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## API Endpoints Used
- **GET** `/api/users?page=1` - Fetch user list
- **PUT** `/api/users/:id` - Update user details
- **DELETE** `/api/users/:id` - Delete a user

## Usage
- Navigate to the login page and enter your credentials.
- View the list of users and edit or delete them.

## Contribution
Feel free to contribute by submitting pull requests!

## License
This project is licensed under the MIT License.

