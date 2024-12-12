# API Documentation

## Base URL
```
http://<your-server-domain>/
```

---

## Endpoints

### 1. **Register**
Registers a new user.

#### **Endpoint**
```
POST /auth/register
```

#### **Request Body**
```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

#### **Response**

##### **Success Response (201)**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "string",
    "username": "string",
    "email": "string"
  }
}
```

##### **Error Responses**

- **400 Bad Request**
```json
{
  "error": "Invalid input"
}
```

- **500 Internal Server Error**
```json
{
  "error": "An error occurred"
}
```

---

### 2. **Login**
Authenticates a user and returns a token.

#### **Endpoint**
```
POST /auth/login
```

#### **Request Body**
```json
{
  "email": "string",
  "password": "string"
}
```

#### **Response**

##### **Success Response (200)**
```json
{
  "message": "Login successful",
  "token": "string"
}
```

##### **Error Responses**

- **401 Unauthorized**
```json
{
  "error": "Invalid credentials"
}
```

- **500 Internal Server Error**
```json
{
  "error": "An error occurred"
}
```

---

### 3. **Logout**
Logs out the user by invalidating the token.

#### **Endpoint**
```
POST /auth/logout
```

#### **Response**

##### **Success Response (200)**
```json
{
  "message": "Logout successful"
}
```

##### **Error Responses**

- **500 Internal Server Error**
```json
{
  "error": "An error occurred"
}
```

---

### 4. **Get Profile**
Fetches the profile of the logged-in user.

#### **Endpoint**
```
GET /auth/profile
```

#### **Response**

##### **Success Response (200)**
```json
{
  "id": "string",
  "username": "string",
  "email": "string"
}
```

##### **Error Responses**

- **401 Unauthorized**
```json
{
  "error": "Unauthorized"
}
```

- **500 Internal Server Error**
```json
{
  "error": "An error occurred"
}
```

---

### 5. **Add Allergen**
Adds a new allergen to the user’s profile.

#### **Endpoint**
```
POST /allergens
```

#### **Request Body**
```json
{
  "name": "string"
}
```

#### **Response**

##### **Success Response (201)**
```json
{
  "message": "Allergen added successfully",
  "allergen": {
    "id": "string",
    "name": "string"
  }
}
```

##### **Error Responses**

- **400 Bad Request**
```json
{
  "error": "Invalid input"
}
```

- **500 Internal Server Error**
```json
{
  "error": "An error occurred"
}
```

---

### 6. **Get All Allergens**
Fetches all allergens associated with the user.

#### **Endpoint**
```
GET /allergens
```

#### **Response**

##### **Success Response (200)**
```json
{
  "allergens": [
    {
      "id": "string",
      "name": "string"
    }
  ]
}
```

##### **Error Responses**

- **500 Internal Server Error**
```json
{
  "error": "An error occurred"
}
```

---

### 7. **Edit Allergen**
Edits an existing allergen.

#### **Endpoint**
```
PUT /allergens/:id
```

#### **Path Parameters**
| Parameter | Type   | Description           |
|-----------|--------|-----------------------|
| `id`      | string | The ID of the allergen. |

#### **Request Body**
```json
{
  "name": "string"
}
```

#### **Response**

##### **Success Response (200)**
```json
{
  "message": "Allergen updated successfully",
  "allergen": {
    "id": "string",
    "name": "string"
  }
}
```

##### **Error Responses**

- **404 Not Found**
```json
{
  "error": "Allergen not found"
}
```

- **500 Internal Server Error**
```json
{
  "error": "An error occurred"
}
```

---

### 8. **Delete Allergen**
Deletes an allergen from the user’s profile.

#### **Endpoint**
```
DELETE /allergens/:id
```

#### **Path Parameters**
| Parameter | Type   | Description           |
|-----------|--------|-----------------------|
| `id`      | string | The ID of the allergen. |

#### **Response**

##### **Success Response (200)**
```json
{
  "message": "Allergen deleted successfully"
}
```

##### **Error Responses**

- **404 Not Found**
```json
{
  "error": "Allergen not found"
}
```

- **500 Internal Server Error**
```json
{
  "error": "An error occurred"
}
```

---

### 9. **Get Product by ID**
Fetches details of a product by its ID.

#### **Endpoint**
```
GET /products/:product_id
```

#### **Path Parameters**
| Parameter     | Type   | Description                |
|---------------|--------|----------------------------|
| `product_id`  | string | The ID of the product.     |

#### **Response**

##### **Success Response (200)**
```json
{
  "product_id": "string",
  "name": "string",
  "composition": "string",
  "nutrition": {
    "calories": "number",
    "fat": "number",
    "carbohydrates": "number",
    "protein": "number",
    "sugar": "number",
    "salt": "number"
  },
  "allergens": ["string"]
}
```

##### **Error Responses**

- **404 Not Found**
```json
{
  "error": "Product not found"
}
```

- **500 Internal Server Error**
```json
{
  "error": "An error occurred"
}
```

---

### 10. **Create Product**
Creates a new product in the database.

#### **Endpoint**
```
POST /products
```

#### **Request Body**
```json
{
  "product_id": "string",
  "name": "string",
  "composition": "string",
  "nutrition": {
    "calories": "number",
    "fat": "number",
    "carbohydrates": "number",
    "protein": "number",
    "sugar": "number",
    "salt": "number"
  },
  "allergens": ["string"]
}
```

#### **Response**

##### **Success Response (201)**
```json
{
  "message": "Product created successfully",
  "product": {
    "product_id": "string",
    "name": "string",
    "composition": "string",
    "nutrition": {
      "calories": "number",
      "fat": "number",
      "carbohydrates": "number",
      "protein": "number",
      "sugar": "number",
      "salt": "number"
    },
    "allergens": ["string"]
  }
}
```

##### **Error Responses**

- **500 Internal Server Error**
```json
{
  "error": "Failed to create product",
  "details": "string"
}
```

---

