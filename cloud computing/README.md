# API Documentation

This documentation provides detailed information about the user authentication API. The endpoints allow users to register, log in, log out, and retrieve their profile information.



---

## Endpoints

### 1. Register User
**URL**: `/signup`  
**Method**: `POST`  
**Description**: Registers a new user.  

**Request Body**:
```json
{
  "email": "string",
  "password": "string"
}
```

**Response (Success)**:
- **Status Code**: `201`
- **Body**:
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
```

**Response (Failure)**:
- **Status Code**: `400` (If email or password is missing, or email is already registered)
```json
{
  "message": "Email and password are required"
}
```
```json
{
  "message": "Email is already registered"
}
```

- **Status Code**: `500` (On server error)
```json
{
  "message": "Failed to register user",
  "error": "string"
}
```

---

### 2. Login User
**URL**: `/login`  
**Method**: `POST`  
**Description**: Logs in an existing user and generates a JWT token.  

**Request Body**:
```json
{
  "email": "string",
  "password": "string"
}
```

**Response (Success)**:
- **Status Code**: `200`
- **Body**:
```json
{
  "message": "Login successful",
  "token": "string"
}
```

**Response (Failure)**:
- **Status Code**: `400` (If email or password is missing)
```json
{
  "message": "Email and password are required"
}
```

- **Status Code**: `401` (If email or password is invalid)
```json
{
  "message": "Invalid email or password"
}
```

- **Status Code**: `500` (On server error)
```json
{
  "message": "Failed to log in",
  "error": "string"
}
```

---

### 3. Logout User
**URL**: `/logout`  
**Method**: `POST`  
**Description**: Logs out the currently logged-in user. Requires a valid token.  

**Headers**:
- `Authorization`: `Bearer <token>`

**Response (Success)**:
- **Status Code**: `200`
- **Body**:
```json
{
  "message": "Logout successful",
  "user": {
    "id": "string",
    "email": "string"
  }
}
```

**Response (Failure)**:
- **Status Code**: `401` (If token is not provided)
```json
{
  "message": "Access denied. No token provided."
}
```

- **Status Code**: `403` (If token is invalid or expired)
```json
{
  "message": "Invalid or expired token"
}
```

---

### 4. Get User Profile
**URL**: `/profile`  
**Method**: `GET`  
**Description**: Retrieves the profile information of the currently logged-in user. Requires a valid token.  

**Headers**:
- `Authorization`: `Bearer <token>`

**Response (Success)**:
- **Status Code**: `200`
- **Body**:
```json
{
  "message": "User profile",
  "user": {
    "id": "string",
    "email": "string"
  }
}
```

**Response (Failure)**:
- **Status Code**: `401` (If token is not provided)
```json
{
  "message": "Access denied. No token provided."
}
```

- **Status Code**: `403` (If token is invalid or expired)
```json
{
  "message": "Invalid or expired token"
}
```

---

## Middleware

### Token Verification
The following middleware is used to verify the JWT token for protected routes:

- If the token is valid, the request proceeds.
- If the token is invalid or missing, appropriate error responses are sent.

---

This documentation is ready to be added to your GitHub repository. If you need further formatting or customization, let me know!



