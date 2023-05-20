# Users Table

This is a React application that displays a table of users. It allows you to fetch user data from an API, toggle the status of users, and select multiple users using checkboxes.

## Features

1.Fetches user data from an API

2.Updates user status using toggle buttons

3.Selects multiple users using checkboxes

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

1.@reduxjs/toolkit: A package that provides utilities for efficient Redux development.

2.axios: A promise-based HTTP client for making API requests.

3.react: A JavaScript library for building user interfaces.

4.react-redux: The official React bindings for Redux.

5.redux: A predictable state container for JavaScript applications.





