# Backend for Employees

This repository contains the backend codebase for [employees-front-end](https://github.com/TaurusVB/employees-front-end). It serves as the server-side component to support the frontend application.

## Features

- **API Endpoints:** This backend provides various API endpoints to support the functionality of the frontend application.
- **Database Integration:** Utilizes MongoDB to store and manage application data.
- **Authentication:** Implements authentication for secure access to certain endpoints.

## API Endpoints

The backend exposes the following endpoints:

## Authentication and Authorization

### Register
- **Description:** User Register
- **Method:** `POST`
- **Endpoint:**
```js
https://employees-back-end.onrender.com/api/user/register
```
- **Request Body:** 
    ```json
    {
        "name": "value",
        "email": "value",
        "password": "value"
    }
    ```
- **Response:**
    ```json
    {
    "id": "value",
    "email": "value",
    "name": "value",
    "token": "value"
    }  
    ```
    
### Login
- **Description:** User Login
- **Method:** `POST`
- **Endpoint:**
```js
https://employees-back-end.onrender.com/api/user/login
```
- **Request Body:** 
    ```json
    {
        "email": "value",
        "password": "value"
    }
    ```
- **Response:**
    ```json
    {
    "id": "value",
    "email": "value",
    "name": "value",
    "token": "value"
    }  
    ```

### Current
- **Description:** Checking if the user is logged in
- **Method:** `GET`
- **Endpoint:**
```js
https://employees-back-end.onrender.com/api/user/current
```
- **Request Headers:** 
    ```Baerer Token```

- **Response:**
    ```json
    {
    "id": "value",
    "email": "value",
    "name": "value",
    }  
    ```
## Employess API

### getEmployees
- **Description:** Return all employees
- **Method:** `GET`
- **Endpoint:**
```js
https://employees-back-end.onrender.com/api/employees
```
- **Request Headers:** 
    ```Baerer Token```

- **Response:**
    ```js
    [ {}, {} ... ]
    ```
### getEmployee
- **Description:** Return one employee by id
- **Method:** `GET`
- **Endpoint:**
```js
https://employees-back-end.onrender.com/api/employees/{id}
```
- **Request Headers:** 
    ```Baerer Token```

- **Response:**
    ```json
   {
    "id": "value",
    "firstName": "value",
    "lastName": "value",
    "age": "value",
    "address": "value",
    "userId": "value"
   }
    ```

### addEmployee
- **Description:** Add one employee to databse
- **Method:** `POST`
- **Endpoint:**
```js
https://employees-back-end.onrender.com/api/employees/add
```
- **Request Headers:** 
    ```Baerer Token```

- **Request Body:** 
    ```json
    {
        "firstName": "value",
        "lastName": "value",
        "address": "value",
        "age": "value"
    }
    ```  

- **Response:**
    ```json
   {
    "id": "value",
    "firstName": "value",
    "lastName": "value",
    "age": "value",
    "address": "value",
    "userId": "value"
   }
    ```

### updateEmployee
- **Description:** Update one employee by id
- **Method:** `PATCH`
- **Endpoint:**
```js
https://employees-back-end.onrender.com/api/employees/edit/{id}
```
- **Request Headers:** 
    ```Baerer Token```

- **Request Body:** 
    ```json
    {
        "firstName": "value",
        "lastName": "value",
        "address": "value",
        "age": "value"
    }
    ```  

- **Response:**
    ```json
   {
    "id": "value",
    "firstName": "value",
    "lastName": "value",
    "age": "value",
    "address": "value",
    "userId": "value"
   }
    ```

### removeEmployee
- **Description:** Remove one employee by id
- **Method:** `PATCH`
- **Endpoint:**
```js
https://employees-back-end.onrender.com/api/employees/remove/{id}
```
- **Request Headers:** 
    ```Baerer Token```    

### Setup .env file

```js
DATABASE_URL=

JWT_SECRET=

PORT=

```

