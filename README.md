
# YouTube Content Analytics Platform - TubeGenius by AngelGaitanG

This repository contains the source code for a YouTube Content Analytics Platform. The platform allows users to analyze personalized YouTube video content using advanced metrics and visualizations.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Installation](#installation)
  - [Backend (NestJS)](#backend-nestjs)
  - [Frontend (Angular)](#frontend-angular)
- [Running the Application](#running-the-application)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Overview

The platform provides a personalized YouTube analytics experience, delivering insights into video performance, audience engagement, and content trends. It uses a RESTful API built with **NestJS** for the backend and a responsive **Angular** application for the frontend.

## Features

- Personalized video performance tracking
- Content analysis based on multiple metrics (views, likes, comments, etc.)
- Customizable dashboards for users
- Integration with the YouTube API
- User authentication and session management

## Architecture

The project is structured as a monorepo with two main folders:

- `frontend/` - Angular application that provides the user interface.
- `backend/` - NestJS application that handles the server-side logic and API interactions.

## Installation

### Backend (NestJS)

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on the `.env.example` file:
   ```bash
   cp .env.example .env
   ```

4. Add your YouTube API key and other necessary environment variables to the `.env` file.

5. Run the NestJS development server:
   ```bash
   npm run start:dev
   ```

### Frontend (Angular)

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Run the Angular development server:
   ```bash
   npm start
   ```

## Running the Application

To run the complete application:

1. Start the backend server:
   ```bash
   cd backend
   npm run start:dev
   ```

2. Start the frontend server in a separate terminal:
   ```bash
   cd frontend
   npm start
   ```

Visit `http://localhost:4200` in your browser to interact with the frontend, and the backend API will be available at `http://localhost:3000`.

## Technologies

- **Frontend**: Angular, TypeScript, SCSS
- **Backend**: NestJS, TypeScript, PostgreSQL, YouTube API
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: Docker (optional), Firebase (for hosting)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch with your feature or fix: `git checkout -b my-feature-branch`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin my-feature-branch`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```
