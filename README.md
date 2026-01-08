# ConvoHub – A Student Collaboration Platform

![ConvoHub Preview](https://github.com/asnaatif/ConvoHub/blob/main/ConvoHub.png?raw=true)

## 📌 Table of Contents
1. [Overview](#overview)
2. [Key Features](#key-features)
3. [Tech Stack](#tech-stack)
4. [Architecture & WebSockets](#architecture--websockets)
5. [Manual Setup](#manual-setup)
6. [Configuration (.env)](#configuration-env)
7. [Project Structure](#project-structure)

---

## Overview
ConvoHub is a **web-based platform** for university students to collaborate within course-specific spaces — share resources, chat in real time, and leave feedback about courses and instructors.

---

## Key Features
- Course-based discussion groups  
- Resource sharing with attachments  
- Instructor feedback and ratings  
- Real-time chat using **Django Channels** and WebSockets  
- Public and private groups  
- Student profiles with basic moderation tools  

---

## Tech Stack
- **Frontend:** React.js (Vite)  
- **Backend:** Django + Django REST Framework  
- **Real-Time:** Django Channels, WebSockets  
- **Database:** PostgreSQL  
- **Authentication:** Django Auth (token/session)  
- **UI/Design:** Figma  

---

## Architecture & WebSockets
The platform architecture works as follows:

- **Frontend ↔ Backend:** REST API for resources such as courses, posts, and users  
- **Frontend ↔ Backend:** WebSocket channels for **real-time chat** and presence updates  

---

## Manual Setup

### Prerequisites
- Python 3.10+ (3.12 recommended)  
- Node.js + npm  
- PostgreSQL  
- Git  

---

### Backend Setup

1. Navigate to the backend directory:
cd convohubBackend

2. Install Python >= 3.10 (if needed):
brew install python@3.12

3. Create and activate a virtual environment:
python3.12 -m venv env
source env/bin/activate

4. Install Python dependencies:
pip install -r requirements.txt

5. Create the PostgreSQL database:
# using createdb
createdb convohub

# or via psql
psql -U postgres -c "CREATE DATABASE convohub;"

6. Import the initial SQL schema:
psql -h localhost -p 5432 -U postgres -d convohub -f convohub.sql

7. Navigate inside the backend folder:
cd backend

8. Create and activate another virtual environment:
python3.12 -m venv env
source env/bin/activate

9. Apply migrations and start the server:
python manage.py makemigrations
python manage.py migrate
python manage.py runserver

---

### Frontend Setup

1. Navigate to the frontend directory:
cd ../convohubFrontend/ConvoHub

2. Install dependencies and start the development server:
npm install
npm run dev

3. Fix vulnerabilities if prompted:
npm audit fix

---

## Configuration (.env)

Add a `.env` file in `convohubBackend/` or root directory and include the following:

DATABASE_URL=postgres://postgres:password@localhost:5432/convohub
SECRET_KEY=your_django_secret_key
DEBUG=True

Adjust settings in Django to ensure the `.env` file is loaded correctly.

---

## Project Structure

ConvoHub/
├── convohubBackend/             # Django backend
├── convohubFrontend/            # React frontend
├── ConvoHub.png                 # Preview image
├── Convohub Figma Design.pdf    # Figma export
└── README.md
