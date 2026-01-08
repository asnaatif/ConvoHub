# ConvoHub – A Student Collaboration Platform

![ConvoHub Preview](https://github.com/asnaatif/ConvoHub/blob/main/ConvoHub.png?raw=true)

## 📌 Overview

**ConvoHub** is a web-based platform built for university students to support
course-specific academic collaboration. 

It enables students to participate in structured discussion groups, exchange
learning resources, and communicate in real time, all within a centralized,
course-focused environment. The platform also allows students to share
feedback and insights about instructors to help peers make informed academic
decisions.

The goal of ConvoHub is to simplify peer-to-peer learning and improve access to
reliable, course-specific information.

---
## ✨ Key Features
-Join course-based discussion groups
-Share academic resources, tips, and study strategies
-Provide and view instructor feedback and ratings
-Communicate via real-time chat using WebSockets
-Create and join public or private chat groups
-Customize their student profiles
---

## 🛠 Tech Stack

- **Frontend**: React.js
- **Backend**: Django
- **Real-Time Communication**: WebSockets (Django Channels)
- **Database**: PostgreSQL
- **Authentication**: Django Auth
- **UI Design**: Figma (Designs uploaded)

---

## 📁 Project Structure

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
---
## 🎨 Design

The interface for ConvoHub was planned and visualized in Figma
to ensure clear user flows, layout consistency, and intuitive interactions prior to
development.

📄 **View the Figma design (PDF):**
https://github.com/asnaatif/ConvoHub/blob/main/Convohub%20Figma%20Design.pdf

---
## ⚙️ Setup & Run & Configuration

Follow the steps below to get ConvoHub running locally. All commands are listed exactly as used.

```bash
# ------------------------
# Prerequisites
# ------------------------
# Python >= 3.10 (recommended 3.12)
# Node.js and npm
# PostgreSQL
# Git

# ------------------------
# Initial Setup:
# ------------------------
# Clone the repository and navigate to the folder
cd ConvoHub

# ------------------------
# Backend Setup
# ------------------------
cd /ConvoHub/convohubBackend

# Install Python >= 3.10 (recommended 3.12)
# Example using Homebrew:
brew install python@3.12

# Check version
python3 --version
# Use 3.12 in environment commands

# Create virtual environment
python3.12 -m venv env

# Activate environment
source env/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create PostgreSQL database in pgAdmin named 'convohub'

# Load initial database schema
psql -h localhost -p 5432 -U postgres -d convohub -f convohub.sql

cd backend

# Create virtual environment again
python3.12 -m venv env

# Activate environment
source env/bin/activate

# Django migrations
python manage.py makemigrations
python manage.py migrate

# Run backend server
python manage.py runserver

# ------------------------
# Frontend Setup
# ------------------------
cd /ConvoHub/convohubFrontend/ConvoHub

# Install dependencies
npm install

# Start development server
npm run dev

# If any vulnerabilities appear
npm audit fix

# ------------------------
# Configuration
# ------------------------
# Create a .env file in the backend folder with required variables:

# Example .env
DATABASE_URL=postgres://postgres:your_password@localhost:5432/convohub
SECRET_KEY=your_django_secret_key
DEBUG=True

