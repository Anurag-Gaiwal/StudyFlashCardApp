# Flashcard Study App

This Flashcard Study App is built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to create, view, and study flashcards to enhance their learning experience.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add new flashcards with questions and answers.
- View all flashcards.
- Reveal the answer to a flashcard by clicking on it.
- Responsive and clean UI design.
- Loading spinner to indicate data fetching.
- Toast notifications for error handling.

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running
- Render account for deploying backend server

### Steps

1. Clone the repository:

```
git clone https://github.com/your-username/flashcard-study-app.git
cd flashcard-study-app
```

2. Install server dependencies:

```
cd server
npm install
```

3. Install client dependencies:

```bash
cd ../client
npm install
```

## Usage

### Running the Server

1. Navigate to the `server` directory:

```
cd server
```

2. Start the server:

```
npm start
```

The server will start running on `http://localhost:5000`.

### Running the Client

1. Navigate to the `client` directory:

```
cd client
```

2. Start the client:

```
npm start
```

The client will start running on `http://localhost:3000`.

## Environment Variables

Create a `.env` file in the `client` directory and add the following line:

```
REACT_APP_SERVER_URL=https://your_server_hosted_on.onrender.com
```

## Technologies Used

- **Frontend:**
  - React
  - Axios
  - React Toastify
  - Tailwind CSS
  - Pacman Loader (react-spinners)

- **Backend:**
  - Node.js
  - Express
  - MongoDB
  - Mongoose (if used, otherwise MongoClient)

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the existing style and conventions.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
