# 📄 API Documentation

## 🌐 Overview

This documentation provides comprehensive details on the available routes, methods, and expected responses for the API.

## 🚀 Base URL

All API requests should be initiated to:
[http://localhost:3030/api/v1/](http://localhost:3030/api/v1/)

## 🛠 Endpoints

### 📅 Appointments

#### 📖 GET `/appointments`

- **Description:** Retrieve a list of all appointments.
- **Method:** `GET`
- **URL:** [http://localhost:3030/api/v1/appointments](http://localhost:3030/api/v1/appointments)
- **Response:** A JSON array containing appointment objects.

#### ➕ POST `/appointments`

- **Description:** Create a new appointment.
- **Method:** `POST`
- **URL:** [http://localhost:3030/api/v1/appointments](http://localhost:3030/api/v1/appointments)
- **Body:** JSON object containing appointment details.
- **Response:** A JSON object of the created appointment.

#### 🔄 PUT `/appointments/:id`

- **Description:** Update an existing appointment by ID.
- **Method:** `PUT`
- **URL:** [http://localhost:3030/api/v1/appointments/:id](http://localhost:3030/api/v1/appointments/:id)
- **Parameters:** `id` - The ID of the appointment to update.
- **Body:** JSON object containing updated appointment details.
- **Response:** A JSON object of the updated appointment.

#### ❌ DELETE `/appointments/:id`

- **Description:** Delete an appointment by ID.
- **Method:** `DELETE`
- **URL:** [http://localhost:3030/api/v1/appointments/:id](http://localhost:3030/api/v1/appointments/:id)
- **Parameters:** `id` - The ID of the appointment to delete.
- **Response:** A confirmation message indicating successful deletion.

## ⚠️ Error Handling

In case of an error, the API will return a JSON object with an `error` key, providing a description of the encountered issue.

## 🚫 Rate Limiting

Please be aware that the API enforces rate limiting. If the number of allowed requests within a specific time frame is exceeded, a `429 Too Many Requests` response will be returned.

## 🔐 Authentication

Certain routes of the API necessitate authentication. Ensure to include the required authentication headers with your requests.

## 📚 Conclusion

This documentation offers a foundational overview of the API's capabilities. For a more in-depth understanding or specific use cases, kindly refer to the official documentation or get in touch with the API support team.
