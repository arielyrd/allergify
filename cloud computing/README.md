# API Contract

1. API Register, Login, Logout, Get User Profile
   * Endpoints
   - **URL**: `/signup`
   - **Method**: `POST`
   - **Request Body**:
   - 
    ```json
  {
    "email": "string",
    "password": "string"
  } 
  **Response (Success):** 
  **Status Code:201**
  * **Body:**
     ```json
{
  "message": "User registered successfully",
  "user": {
  "id": "string",
  "email": "string",
  "password": "string",
  "createdAt": "string"
  }
} 
  **Response(Failure):**
  * Status code: **400** (If email or password is missing, or email is already registered)
   ```json

  {
    "message": "Email and password are required",
  } 
  {
    "message": "Email is already registered"
  }


