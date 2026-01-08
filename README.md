# ConvoHub – A Student Collaboration Platform

![ConvoHub Preview](https://github.com/asnaatif/ConvoHub/blob/main/ConvoHub.png?raw=true)

Table of Contents
1. Overview
2. Key Features
3. Tech Stack
4. Architecture & WebSockets
6. Manual Setup
7. Configuration 
8. Project Structure

Overview
========
ConvoHub is a web-based platform for university students to collaborate within course-specific spaces — share resources, chat in real time, and leave feedback about courses and instructors.

Key Features
============
- Course-based discussion groups
- Resource sharing and attachments
- Instructor feedback and ratings
- Real-time chat using WebSockets (Django Channels)
- Public and private groups
- Student profiles and basic moderation tools

Tech Stack
==========
- Frontend: React.js (Vite)
- Backend: Django + Django REST Framework
- Real-Time: Django Channels, WebSockets
- Database: PostgreSQL
- Authentication: Django Auth (token/session)
- UI/Design: Figma

Architecture & WebSockets
=========================
High level:
- Frontend ↔ Backend: REST API for resources (courses, posts, users)
- Frontend ↔ Backend: WebSocket channel for real-time chat and presence updates

Manual Setup
==========================
Prerequisites
- Python 3.10+ (3.12 recommended)
- Node.js + npm
- PostgreSQL
- Git

Backend
1. Enter backend
   cd convohubBackend

2.⁠ ⁠Install any python >= 3.10 (recommend 3.12) 
   brew install python@3.12 (for Homebrew)

3. Create & activate venv
   python3.12 -m venv env
   source env/bin/activate

4. Install Python dependencies
   pip install -r requirements.txt

5. Create database in pgadmin
   # create DB
   createdb convohub
   # or via psql:
   psql -U postgres -c "CREATE DATABASE convohub;"

6. Execute the following command
    ⁠psql -h localhost -p 5432 -U postgres -d convohub -     f convohub.sql

7. Navigate inside the backend folder
   cd backend

8. Create and activate another virtual environment
   python3.12 -m venv env
   source env/bin/activate
   
9. Apply migrations and run
   python manage.py makemigrations
   python manage.py migrate
   python manage.py runserver 

Frontend
1. Enter frontend
   cd ../convohubFrontend/ConvoHub

2. Install and run
   npm install
   npm run dev

3.⁠ ⁠Incase of any vulnerabilities
   npm audit fix

Configuration (.env)
====================
Add a `.env` in `convohubBackend/` or root (adjust settings to load it). Provide:
DATABASE_URL=postgres://postgres:password@localhost:5432/convohub
SECRET_KEY=your_django_secret_key
DEBUG=True

Project Structure
=================
ConvoHub/
├── convohubBackend/             # Django backend
├── convohubFrontend/            # React frontend
├── ConvoHub.png                 # Preview image
├── Convohub Figma Design.pdf    # Figma export
└── README.md
