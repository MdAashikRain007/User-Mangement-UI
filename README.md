# User Management Application

A full-stack React + Spring Boot CRUD application for managing users.

## Project Structure

- `backend/` - Spring Boot API
  - `src/main/java/com/example/usermanagement`
    - `controller` - REST endpoints
    - `service` - business logic
    - `repository` - JPA repository
    - `entity` - User entity
    - `exception` - error handling
  - `src/main/resources/application.properties`
- `frontend/` - React UI
  - `src/components` - reusable components
  - `src/pages` - route pages
  - `src/services/api.js` - Axios API service
  - `.env` - frontend API base URL

## Setup

### Backend

1. Install MySQL and create a database:
   ```sql
   CREATE DATABASE user_db;
   ```
2. Update `backend/src/main/resources/application.properties` with your MySQL credentials:
   ```properties
   spring.datasource.username=root
   spring.datasource.password=your_password_here
   ```
3. Run the backend:
   ```bash
   cd backend
   ./mvnw spring-boot:run
   ```

### Frontend

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Start the React app:
   ```bash
   npm run dev
   ```

## API Endpoints

- `GET /api/users` - fetch all users
- `GET /api/users/{id}` - fetch a single user
- `POST /api/users` - create a user
- `PUT /api/users/{id}` - update a user
- `DELETE /api/users/{id}` - delete a user

## Example Postman Requests

### Create User

POST `http://localhost:8080/api/users`

Body (JSON):
```json
{
  "name": "Alice Walker",
  "email": "alice@example.com",
  "phone": "1234567890"
}
```

### Update User

PUT `http://localhost:8080/api/users/1`

Body (JSON):
```json
{
  "name": "Alice Walker",
  "email": "alice.new@example.com",
  "phone": "0987654321"
}
```

### Delete User

DELETE `http://localhost:8080/api/users/1`

## Notes

- Frontend runs on `http://localhost:5173`
- Backend runs on `http://localhost:8080`
- CORS is enabled for the React app
