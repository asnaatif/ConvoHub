# ConvoHub – A Student Collaboration Platform

![ConvoHub Preview](https://github.com/asnaatif/ConvoHub/blob/main/ConvoHub.png?raw=true)

## Table of Contents
1.[Overview](#-overview)
2.[Key Features](#-key-features)
3.[Tech Stack](#-tech-stack)
4.[Architecture and WebSockets](#-architecture-and-websockets)  
5.[Manual Setup](#-manual-setup)
6.[Configuration](#-configuration)  
7.[Project Structure](#-project-structure)  

---

## Overview
ConvoHub is a web-based platform designed for university students to collaborate within course-specific spaces. It allows students to share resources, communicate in real time, and provide feedback on courses and instructors, all within a centralized and structured environment.

---

## Key Features
- Course-based discussion groups  
- Resource sharing and file attachments  
- Instructor feedback and ratings  
- Real-time chat using WebSockets (Django Channels)  
- Public and private groups  
- Student profiles with basic moderation tools  

---

## Tech Stack
- Frontend: React.js (Vite)  
- Backend: Django + Django REST Framework  
- Real-Time Communication: Django Channels, WebSockets  
- Database: PostgreSQL  
- Authentication: Django Authentication (token/session based)  
- UI/Design: Figma  

---

## Architecture & WebSockets
High-level architecture:
- Frontend ↔ Backend: REST APIs for courses, posts, users, and resources  
- Frontend ↔ Backend: WebSocket connections for real-time chat and presence updates  

Django Channels is used on the backend to manage WebSocket connections, enabling real-time messaging alongside traditional HTTP-based APIs.

---

## Manual Setup

### Prerequisites
- Python 3.10+ (3.12 recommended)  
- Node.js and npm  
- PostgreSQL  
- Git  

Clone the repositories and proceed with the following steps:
### Backend Setup

1. Navigate to the backend directory
```bash
   cd convohubBackend
```
2. Install Python (3.12 recommended)  
```bash
   brew install python@3.12
```
3. Create and activate a virtual environment  
```bash python3.12 -m venv env  
   source env/bin/activate
```

4. Install backend dependencies  
```bash
   pip install -r requirements.txt
```
5. Create the PostgreSQL database  
```bash
   createdb convohub  
```
   Or using psql:  
```bash
   psql -U postgres -c "CREATE DATABASE convohub;"
```
6. Import the database schema  
```bash
   psql -h localhost -p 5432 -U postgres -d convohub -f convohub.sql
```
7. Navigate into the backend project folder
```bash
   cd backend
```
8. Create and activate another virtual environment (if required)
```bash
   python3.12 -m venv env  
   source env/bin/activate
```
9. Apply migrations and start the development server
```bash
   python manage.py makemigrations  
   python manage.py migrate  
   python manage.py runserver
```
---

### Frontend Setup

1. Navigate to the frontend directory
```bash 
   cd ../convohubFrontend/ConvoHub
```
2. Install frontend dependencies
```bash
   npm install
```
3. Run the development server
```bash
   npm run dev
```
4. If any vulnerabilities are reported
```bash
   npm audit fix
```
---

## Configuration (.env)
Create a .env file inside convohubBackend/ (or project root, depending on settings) with the following variables:

DATABASE_URL=postgres://postgres:password@localhost:5432/convohub  
SECRET_KEY=your_django_secret_key  
DEBUG=True

Ensure Django is configured to load environment variables correctly.

---

## Project Structure
```bash
ConvoHub/
├── convohubBackend/             # Django backend
│   └── ...
├── convohubFrontend/            # React frontend
│   └── ...
├── ConvoHub.png/                # ConvoHub Preview
├── ConvoHub Figma Design.pdf/   # Figma design
├── README.md
```
