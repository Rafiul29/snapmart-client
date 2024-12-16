# SnapMart E-commerce Online Platform

Welcome to **SnapMart**, an e-commerce platform designed to provide a seamless online shopping experience. This repository contains the client-side code for SnapMart, built with modern web technologies.

## Project Setup

Follow these steps to set up and run the project on your local development environment.

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [Git](https://git-scm.com/)

### Clone the Repository

```bash
git clone https://github.com/Rafiul29/snapmart-client.git
```

Navigate into the project directory:

```bash
cd snapmart-client
```

### Install Dependencies

Use `npm` or `yarn` to install the project dependencies:

```bash
npm install
```

or

```bash
yarn install
```

### Environment Variables

Create a `.env` file in the root of the project and add the following environment variable:

```env
VITE_APP_API_URL=https://snapmart-wzw3.onrender.com/api
```

This sets up the API base URL for the backend.

### Run the Project

Start the development server:

```bash
npm run dev
```



The application will be available at `http://localhost:5173`.

## Project Structure

Below is an overview of the project structure:

```
.
├── public          # Static assets
├── src
│   ├── components  # Reusable components
│   ├── pages       # Application pages
│   ├── context     # API calls  
│   ├── utils       # Utility functions
│   ├── App.jsx     # Root component
│   └── main.jsx    # Application entry point
├── .env            # Environment variables
├── package.json    # Project metadata and dependencies
└── README.md       # Project documentation
```

## Features

- User-friendly interface
- Secure API integration
- State management using Context API

## Scripts

Here are the commonly used scripts for development and production:

- **Start Development Server:**

  ```bash
  npm run dev
  ```

- **Build for Production:**

  ```bash
  npm run build
  ```


## Deployment

This project is deployed on [Vercel](https://vercel.com/). You can access the live application [here](https://snapmart-client.vercel.app/).

## Contributing

Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).