# StayStrong Site

## Overview
StayStrong is a supportive platform designed to provide users with emotional support and guidance through AI-driven interactions. The platform includes features such as message validation, random speech display, and chat interactions with an AI assistant named Serenity.

<img width="1493" alt="image" src="https://github.com/user-attachments/assets/e9af59d9-eab8-4c5f-aa56-788eef6786c7" />

<img width="1480" alt="image" src="https://github.com/user-attachments/assets/117d002d-037f-4b24-a101-794f09481727" />

<img width="1487" alt="image" src="https://github.com/user-attachments/assets/22756be1-5fb0-412b-b847-0d319c7069b2" />

<img width="1473" alt="image" src="https://github.com/user-attachments/assets/2c6e8d87-c908-439b-9d24-4ad15800d9ba" />


<img width="1444" alt="image" src="https://github.com/user-attachments/assets/84857238-cd0a-4bea-829c-02558bb61696" />


<img width="1482" alt="image" src="https://github.com/user-attachments/assets/84728a20-1d7e-4619-ae54-1d7da3240ee2" />

<img width="1478" alt="image" src="https://github.com/user-attachments/assets/c862cb6b-5e86-492b-8626-04b6a4a2da8c" />


## Features
- **Message Validation**: Checks user-submitted messages for offensive content and provides feedback.
- **Random Speech Display**: Retrieves and displays random supportive messages from a database.
- **Chat Interaction**: Engages users in meaningful conversations with Serenity, a friendly AI assistant.

## Technology Stack
- **Frontend**: React, Framer Motion for animations
- **Backend**: Node.js, Express
- **Database**: SQLite with Sequelize ORM
- **AI Model**: Integrated with Ollama's AI models ( https://ollama.com/library/llama3.2:1b )

## Project Structure

### Root Directory
- **LICENSE.txt**: Contains the licensing information for the project.
- **README.md**: Provides an overview, installation instructions, and usage details for the project.

### Backend
- **app.js**: The main entry point for the backend server, setting up routes and connecting to the database.
- **db**: Contains the SQLite database file.
- **models**
  - **index.js**: Initializes the Sequelize connection to the SQLite database.
  - **speeches.js**: Defines the `Speech` model using Sequelize.
- **routes**
  - **ChatDisplayRoutes.js**: Handles chat-related routes, interacting with the AI for conversation support.
  - **RandomSpeechDisplayRoutes.js**: Manages routes for displaying random supportive speeches.
  - **sendMessageRoutes.js**: Handles message validation and processing routes.

### Frontend
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **eslint.config.js**: Configuration for ESLint, a tool for identifying and fixing JavaScript code issues.
- **index.html**: The main HTML file for the frontend application.
- **package.json**: Lists the project's dependencies and scripts.
- **postcss.config.js**: Configuration for PostCSS, a tool for transforming CSS with JavaScript.
- **tailwind.config.js**: Configuration for Tailwind CSS, a utility-first CSS framework.
- **vite.config.js**: Configuration for Vite, a frontend build tool.
- **src**
  - **assets**: Contains static assets like images.
  - **components**
    - **ChatDisplay**: Contains components related to chat functionality.
    - **ErrorPage**: Contains components for displaying error pages.
    - **Header**: Manages the navigation bar and logo display.
    - **SendMessage**: Handles message sending features.
    - **SpDisplay**: Manages the display of random speeches.
    - **StartingPage**: Contains components for the starting page of the application.
  - **context**: Manages context providers for state management.
  - **index.css**: The main CSS file for styling the application.
  - **main.jsx**: The main entry point for the React application.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ArtSN7/StayStrong.git
   ```
2. Navigate to the project directory:
   ```bash
   cd StayStrongSite
   ```
3. Install dependencies for both frontend and backend:
   ```bash
   npm install
   ```

## Running the Application
1. Start the backend server:
   ```bash
   cd backend
   node app.js
   ```
2. Start the frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```
3. Access the application at the URL in the frontend terminal

## Usage
- **Message Form**: Submit messages to be validated by the AI.
- **Random Speech**: View random supportive messages.
- **Chat**: Engage with Serenity for support and guidance.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any features or bug fixes.

## License
This project is licensed under the MIT License.
