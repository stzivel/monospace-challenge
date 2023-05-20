# Users Table

This is a React application that displays a table of users. It allows you to fetch user data from an API, toggle the status of users, and select multiple users using checkboxes.

## Features

-Fetches user data from an API
-Updates user status using toggle buttons
-Selects multiple users using checkboxes

### Installation

1.Clone the repository:
`git clone <repository-url>`

2.Navigate to the project directory:
`cd <project-name>`

3.Install the dependencies:
`npm install`

### Usage

1.Start the development server:
`npm start`

2.Open the application in your browser:
`http://localhost:3000`

3.The table will display user data fetched from the API. You can toggle the status of each user by clicking on the toggle buttons. You can also select multiple users using the checkboxes.

### Configuration
The application uses Redux for state management and Axios for making API requests. The Redux store is configured in the store.js file, and the user-related Redux slice is defined in the userSlice.js file.

To modify the API endpoint, update the URL in the fetchTableData and updateToggleStatus async thunks in the userSlice.js file.

### Dependencies
The project uses the following dependencies:

-@reduxjs/toolkit: A package that provides utilities for efficient Redux development.
-axios: A promise-based HTTP client for making API requests.
-react: A JavaScript library for building user interfaces.
-react-redux: The official React bindings for Redux.
-redux: A predictable state container for JavaScript applications.





