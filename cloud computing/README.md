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

---

## Authentication
Currently, no authentication mechanisms (e.g., tokens) are required to access the API endpoints. Future versions may introduce secure authentication.

---

## Endpoints

### User Authentication
**Base Path**: `/userLogin`

- _Routes for user login and authentication are defined in the `userAuth` module. This section will be updated as features are implemented._

---

### User Tracking
**Base Path**: `/trackingUser`

#### Add Allergen
**Endpoint**: `POST /trackingUser/allergens`

- **Description**: Add a new allergen to the database.
- **Request Body**:
  ```json
  {
    "name": "string (required)"
  }
  ```
- **Responses**:
  - **201 Created**:
    ```json
    {
      "message": "Allergen added successfully",
      "data": {
        "id": "string",
        "name": "string",
        "insertedAt": "ISO8601 timestamp",
        "updatedAt": "ISO8601 timestamp"
      }
    }
    ```
  - **400 Bad Request**:
    ```json
    {
      "message": "Invalid allergen name! Please enter a valid allergen name."
    }
    ```
  - **400 Bad Request**:
    ```json
    {
      "message": "Allergen already added"
    }
    ```

#### Get All Allergens
**Endpoint**: `GET /trackingUser/allergens`

- **Description**: Fetch all allergens from the database with optional filtering by name.
- **Query Parameters**:
  - `name` (optional): Filter allergens containing the specified name.
- **Responses**:
  - **200 OK**:
    ```json
    {
      "message": "Allergens fetched successfully",
      "data": [
        {
          "id": "string",
          "name": "string",
          "insertedAt": "ISO8601 timestamp",
          "updatedAt": "ISO8601 timestamp"
        }
      ]
    }
    ```
  - **404 Not Found**:
    ```json
    {
      "message": "No allergens found",
      "data": []
    }
    ```

#### Edit Allergen
**Endpoint**: `PUT /trackingUser/allergens/:id`

- **Description**: Update an allergen's name by its ID.
- **Path Parameters**:
  - `id` (required): The unique identifier of the allergen.
- **Request Body**:
  ```json
  {
    "name": "string (required)"
  }
  ```
- **Responses**:
  - **200 OK**:
    ```json
    {
      "message": "Allergen updated successfully",
      "data": {
        "id": "string",
        "name": "string"
      }
    }
    ```
  - **400 Bad Request**:
    ```json
    {
      "message": "Invalid allergen name! Please enter a valid allergen name."
    }
    ```
  - **404 Not Found**:
    ```json
    {
      "message": "Allergen not found"
    }
    ```
  - **400 Bad Request**:
    ```json
    {
      "message": "Allergen name already exists"
    }
    ```

#### Delete Allergen
**Endpoint**: `DELETE /trackingUser/allergens/:id`

- **Description**: Delete an allergen by its ID.
- **Path Parameters**:
  - `id` (required): The unique identifier of the allergen.
- **Responses**:
  - **200 OK**:
    ```json
    {
      "message": "Allergen deleted successfully",
      "data": {
        "id": "string",
        "name": "string",
        "insertedAt": "ISO8601 timestamp",
        "updatedAt": "ISO8601 timestamp"
      }
    }
    ```
  - **404 Not Found**:
    ```json
    {
      "message": "Allergen not found"
    }
    ```

---


## Changelog
- **v1.0.0**: Initial release of the Allergify API documentation.

For further assistance, please contact the development team.

This documentation is ready to be added to your GitHub repository. If you need further formatting or customization, let me know!



