# Task Management System

## Overview

This project is a **Task Management System** built using **microservices architecture**, leveraging **Docker, Kubernetes, CI/CD, and multiple databases**. It includes authentication, task management, notifications, and search functionality.

## Tech Stack

- **Frontend:** Next.js (Landing Page), React.js (Main App)
- **Backend Services:**
  - **User Service:** Node.js, Express.js, PostgreSQL
  - **Task Service:** FastAPI, Python, MongoDB
  - **Notification Service:** Node.js, WebSockets, Redis
  - **Search Service:** Node.js, Elasticsearch
  - **Auth Service:** Node.js, JWT, OAuth2, Redis
- **DevOps:** Docker, Kubernetes, CI/CD (GitHub Actions), Nginx, Rate Limiter (Redis)
- **Messaging & Caching:** Redis, RabbitMQ

## Project Structure

```
task-management-system/
│── frontend/
│   ├── landing-page/       # Next.js (For Fast Rendering)
│   ├── main-app/           # React.js (Main Application)
│
│── backend/
│   ├── auth-service/       # Handles Authentication & Authorization (Node.js, JWT, Redis)
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── routes/
│   │   │   ├── services/
│   │   │   ├── models/
│   │   ├── Dockerfile
│   │   ├── package.json
│   │
│   ├── user-service/       # Manages Users (Node.js, Express, PostgreSQL)
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── routes/
│   │   │   ├── services/
│   │   │   ├── models/
│   │   ├── Dockerfile
│   │   ├── package.json
│   │
│   ├── task-service/       # Manages Tasks (FastAPI, Python, MongoDB)
│   │   ├── src/
│   │   │   ├── routers/
│   │   │   ├── services/
│   │   │   ├── models/
│   │   ├── Dockerfile
│   │   ├── requirements.txt
│
│   ├── notification-service/ # Real-Time Notifications (WebSockets, Node.js, Redis)
│   │   ├── src/
│   │   │   ├── events/
│   │   │   ├── services/
│   │   ├── Dockerfile
│   │   ├── package.json
│
│   ├── search-service/     # Search Functionality (Node.js, Elasticsearch)
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── services/
│   │   ├── Dockerfile
│   │   ├── package.json
│
│── gateway/
│   ├── api-gateway/        # API Gateway for Routing (Node.js, Express, Nginx, Rate Limiter)
│   │   ├── src/
│   │   ├── Dockerfile
│   │   ├── package.json
│
│── infra/                  # Infrastructure Configurations (Docker, Kubernetes, CI/CD)
│   ├── docker-compose.yml
│   ├── k8s/
│   ├── nginx/
│   ├── github-actions/
│
│── docs/                   # Documentation & Postman Collections
│── README.md               # Project Documentation
```

## Running the Project

### 1. Clone the Repository

```sh
git clone https://github.com/your-username/task-management-system.git
cd task-management-system
```

### 2. Start the Services with Docker

```sh
docker-compose up --build -d
```

### 3. Access the Application

- **Landing Page:** `http://localhost:3000`
- **Main App:** `http://localhost:3001`
- **API Gateway:** `http://localhost:8000`

## Debugging

### Going into a Docker Container

```sh
docker exec -it <container_name> sh
```

### Seeing the Network

```sh
docker network inspect project2_default
```

### Listing All Networks

```sh
docker network ls
```

### Checking Logs of a Container

```sh
docker-compose logs -f <service_name>
```

## Security Measures

- **Rate Limiting:** Implemented via Redis to prevent abuse.
- **JWT Authentication:** Secure token-based authentication.
- **CORS Handling:** Configured for security in API Gateway.
- **Data Encryption:** Sensitive data is encrypted before storage.

## Features Implemented

✅ User authentication (JWT, OAuth2)  
✅ Task management (CRUD operations)  
✅ Real-time notifications (WebSockets, Redis)  
✅ Full-text search (Elasticsearch)  
✅ Secure API gateway with rate-limiting  
✅ CI/CD pipelines for automated deployment  

---

This project is designed to **demonstrate real-world microservices architecture** while focusing on **DevOps, Docker, Kubernetes, and CI/CD**. 🚀
