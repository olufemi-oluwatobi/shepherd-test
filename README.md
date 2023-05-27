# Shepherd Tutors Test

This is the repository for the Shepherd Tutors Test project. It is built using Next.js, a React framework for server-side rendering and static site generation. The project follows a specific file structure and utilizes styled-components for styling. It also includes a Theme Provider that serves the theme for the entire application.

## File Structure

The project follows the following file structure:

```
- pages/
  - index.tsx
- src/
  - components/
    - ui.components/
      - component1.tsx
      - component2.tsx
    - layout.components/
      - component3.tsx
      - component4.tsx
  - hooks/
    - hook1.ts
    - hook2.ts
  - providers/
    - ThemeProvider.tsx
  - pages/
    - index.tsx
```

- **pages**: This directory contains the Next.js page files. The main file of the project is `index.tsx`, which represents the homepage of the application.

- **src**: This directory serves as the root for the project's source code.

  - **components**: This directory contains reusable components used throughout the application. The components are further categorized into two subdirectories:

    - **ui**: This directory contains UI components, which are small, self-contained components responsible for rendering specific UI elements.

    - **layout**: This directory contains layout components, which define the overall structure and arrangement of the application's UI.

  - **hooks**: This directory contains custom hooks used to encapsulate reusable logic and functionality.

  - **providers**: This directory contains the `ThemeProvider.tsx` file, which serves as the Theme Provider for the application. It provides the theme to styled-components and allows for consistent theming throughout the project.

  - **pages**: This directory contains the `index.tsx` file, which serves as the entry point of the application and handles the initialization and configuration of the project.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open your browser and navigate to `http://localhost:3000` to see the application.

## Styling

This project uses styled-components for styling. The styling code is co-located with the components and follows a component-based approach. The `ThemeProvider.tsx` file, located in the `providers` directory, provides the theme for the entire application. Styling is done using tagged template literals and the power of CSS-in-JS.

Feel free to explore the existing components and create new ones following the established structure and styling patterns.

# Shepherd Tutors Test - Backend

This is the README document for the backend of the Shepherd Tutors Test project. The backend handles the database, provides endpoints for data retrieval and manipulation, and implements caching for improved performance. Below, you'll find detailed information about the database specifications, endpoint design, and caching implementation.

## Database Specifications

The database for Shepherd Tutors Test is designed to store information about tutors, their availability, and user interactions. Here is the schema of the database:

### Tutors Table

| Column          | Type         | Description                                          |
|-----------------|--------------|------------------------------------------------------|
| id              | integer      | Unique identifier for the tutor (primary key)         |
| name            | string       | Name of the tutor                                    |
| qualification   | string       | Qualification of the tutor                           |
| description     | string       | Description or bio of the tutor                       |
| isBookmarked    | boolean      | Indicates if the tutor is bookmarked by a user        |
| imageUrl        | string       | URL of the tutor's profile image                      |
| createdAt       | timestamp    | Timestamp of when the tutor entry was created         |
| updatedAt       | timestamp    | Timestamp of the last update to the tutor entry       |

### Ratings Table

| Column          | Type         | Description                                          |
|-----------------|--------------|------------------------------------------------------|
| id              | integer      | Unique identifier for the rating (primary key)        |
| tutorId         | integer      | Foreign key referencing the tutor the rating belongs to |
| rating          | float        | Numerical rating given to the tutor                   |
| userId          | integer      | Identifier of the user who submitted the rating       |
| createdAt       | timestamp    | Timestamp of when the rating was created              |
| updatedAt       | timestamp    | Timestamp of the last update to the rating            |

### Availability Table

| Column          | Type         | Description                                          |
|-----------------|--------------|------------------------------------------------------|
| id              | integer      | Unique identifier for the availability entry (primary key) |
| tutorId         | integer      | Foreign key referencing the tutor the availability belongs to |
| day             | string       | Day of the week the tutor is available                |
| startTime       | time         | Start time of availability for that day               |
| endTime         | time         | End time of availability for that day                 |
| createdAt       | timestamp    | Timestamp of when the availability entry was created  |
| updatedAt       | timestamp    | Timestamp of the last update to the availability entry |

## API Endpoints

The backend provides the following API endpoints for retrieving and manipulating data:

### Retrieve All Tutors

- **Endpoint**: `/api/tutors`
- **Method**: GET
- **Request Params**: None
- **Returns**: An array of tutor objects with their respective details, including availability and ratings.

**Example Response**:
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "qualification": "Mathematics PhD",
    "description": "Experienced mathematics tutor specializing in calculus and algebra.",
    "isBookmarked": false,
    "imageUrl": "https://example.com/profile/johndoe.jpg",
    "createdAt": "2023-05-26T10:00:00Z",
    "updatedAt": "2023-05-26T14:30:00Z",
    "availability": [
      {
        "day": "Monday",
        "startTime": "10:00",
        "endTime": "12:00"
      },
      {
        "day": "Wednesday",
        "startTime": "14:00",
        "endTime": "16:00"
      }
    ],
    "ratings":

 [
      {
        "id": 1,
        "rating": 4.5,
        "userId": 12345,
        "createdAt": "2023-05-26T15:00:00Z",
        "updatedAt": "2023-05-26T15:00:00Z"
      },
      {
        "id": 2,
        "rating": 5,
        "userId": 67890,
        "createdAt": "2023-05-27T09:30:00Z",
        "updatedAt": "2023-05-27T09:30:00Z"
      }
    ]
  },
  // More tutors...
]
```

### Retrieve Tutor by ID

- **Endpoint**: `/api/tutors/:id`
- **Method**: GET
- **Request Params**: `id` (integer) - The ID of the tutor to retrieve
- **Returns**: A tutor object with the specified ID, including availability and ratings.

**Example Response**:
```json
{
  "id": 1,
  "name": "John Doe",
  "qualification": "Mathematics PhD",
  "description": "Experienced mathematics tutor specializing in calculus and algebra.",
  "isBookmarked": false,
  "imageUrl": "https://example.com/profile/johndoe.jpg",
  "createdAt": "2023-05-26T10:00:00Z",
  "updatedAt": "2023-05-26T14:30:00Z",
  "availability": [
    {
      "day": "Monday",
      "startTime": "10:00",
      "endTime": "12:00"
    },
    {
      "day": "Wednesday",
      "startTime": "14:00",
      "endTime": "16:00"
    }
  ],
  "ratings": [
    {
      "id": 1,
      "rating": 4.5,
      "userId": 12345,
      "createdAt": "2023-05-26T15:00:00Z",
      "updatedAt": "2023-05-26T15:00:00Z"
    },
    {
      "id": 2,
      "rating": 5,
      "userId": 67890,
      "createdAt": "2023-05-27T09:30:00Z",
      "updatedAt": "2023-05-27T09:30:00Z"
    }
  ]
}
```

### Create a New Tutor

- **Endpoint**: `/api/tutors`
- **Method**: POST
- **Request Params**: A JSON object containing the details of the new tutor to create.
- **Returns**: The created tutor object with its assigned ID.

**Example Request**:
```json
{
  "name": "Jane Smith",
  "qualification": "English Literature BA",
  "description": "Passionate about teaching literature and improving reading skills.",
  "isBookmarked": false,
  "imageUrl": "https://example.com/profile/janesmith.jpg",
  "availability": [
    {
      "day": "Tuesday",
      "startTime": "14:00",
      "endTime": "16:00"
    },
    {
      "day": "Thursday",
      "startTime": "10:00",
      "endTime": "12:00"
    }
  ]
}
```

**Example Response**:
```json
{
  "id": 3,
  "name": "Jane Smith",
  "qualification": "English Literature BA",
  "description": "Passionate about teaching literature and improving reading skills.",
  "isBookmarked": false,
  "imageUrl": "https://example.com/profile

/janesmith.jpg",
  "createdAt": "2023-05-27T11:30:00Z",
  "updatedAt": "2023-05-27T11:30:00Z",
  "availability": [
    {
      "day": "Tuesday",
      "startTime": "14:00",
      "endTime": "16:00"
    },
    {
      "day": "Thursday",
      "startTime": "10:00",
      "endTime": "12:00"
    }
  ],
  "ratings": []
}
```

### Update Tutor

- **Endpoint**: `/api/tutors/:id`
- **Method**: PUT
- **Request Params**: `id` (integer) - The ID of the tutor to update
- **Returns**: The updated tutor object.

**Example Request**:
```json
{
  "name": "John Doe",
  "qualification": "Mathematics PhD",
  "description": "Experienced mathematics tutor specializing in calculus, algebra, and statistics.",
  "isBookmarked": true,
  "imageUrl": "https://example.com/profile/johndoe.jpg",
  "availability": [
    {
      "day": "Monday",
      "startTime": "10:00",
      "endTime": "12:00"
    },
    {
      "day": "Wednesday",
      "startTime": "14:00",
      "endTime": "16:00"
    }
  ]
}
```

**Example Response**:
```json
{
  "id": 1,
  "name": "John Doe",
  "qualification": "Mathematics PhD",
  "description": "Experienced mathematics tutor specializing in calculus, algebra, and statistics.",
  "isBookmarked": true,
  "imageUrl": "https://example.com/profile/johndoe.jpg",
  "createdAt": "2023-05-26T10:00:00Z",
  "updatedAt": "2023-05-27T14:30:00Z",
  "availability": [
    {
      "day": "Monday",
      "startTime": "10:00",
      "endTime": "12:00"
    },
    {
      "day": "Wednesday",
      "startTime": "14:00",
      "endTime": "16:00"
    }
  ],
  "ratings": [
    {
      "id": 1,
      "rating": 4.5,
      "userId": 12345,
      "createdAt": "2023-05-26T15:00:00Z",
      "updatedAt": "2023-05-26T15:00:00Z"
    },
    {
      "id": 2,
      "rating": 5,
      "userId": 67890,
      "createdAt": "2023-05-27T09:30:00Z",
      "updatedAt": "2023-05-27T09:30:00Z"
    }
  ]
}
```

### Delete Tutor

- **Endpoint**: `/api/tutors/:id`
- **Method**: DELETE
- **Request Params**: `id` (integer) - The ID of the tutor to delete
- **Returns**: A success message indicating the deletion was successful.

**Example Response**:
```json
{
  "message": "Tutor with ID 1 has been deleted successfully."
}
```

## Caching Implementation

## Caching Implementation

To optimize the performance of the Shepherd Tutors Test backend, we will employ Redis as our caching solution. Redis is a powerful in-memory data store that enables rapid storage and retrieval of key-value pairs.

By implementing caching with Redis, we can achieve the following benefits for our project:

1. **Improved Response Times**: Caching frequently accessed tutor data in Redis allows us to serve the data directly from memory, eliminating the need for costly database queries. This results in significantly faster response times, providing a more responsive experience for our users.

2. **Reduced Database Load**: With Redis caching in place, we can offload repetitive database requests by retrieving data from the cache instead. By reducing the load on the database server, we can enhance its performance and ensure scalability even during periods of high traffic.

3. **Scalability and Concurrency**: Redis's ability to handle large amounts of data and concurrent operations makes it an ideal choice for our project. By leveraging Redis for caching, we can accommodate a growing user base and handle increased traffic without sacrificing performance or responsiveness.

4. **Enhanced User Experience**: The combination of faster response times and reduced database load translates to an improved overall user experience. Users will experience quicker page loads, smoother interactions, and a more seamless browsing experience.

By strategically implementing Redis caching, we can optimize our backend performance, reduce database load, improve scalability, and deliver a superior user experience for Shepherd Tutors Test.

## Data Pagination
----------------
To handle large datasets and improve efficiency, we can implement data pagination in the API endpoints that return lists of tutors or ratings. Rather than returning the entire dataset at once, pagination allows us to retrieve the data in smaller, manageable chunks.

We can add pagination parameters to the relevant endpoints, such as `/api/tutors` or `/api/tutors/:id/ratings`, to control the number of items returned and the offset from which to start. Typical pagination parameters include:

- `page`: The page number of the results.
- `limit`: The maximum number of items to return per page.
- `offset`: The starting index from which to fetch the items.

By implementing pagination, we can reduce the response size and improve the performance of the API, especially when dealing with large datasets.

Utilizing Messaging Queues for Notifications and Emails:
---------------------------------------------------------
To handle notifications and emails efficiently, we can employ messaging queues, such as RabbitMQ or Apache Kafka. Messaging queues decouple the sender of a message (producer) from the receiver (consumer), enabling asynchronous processing and scalability.

Here's how messaging queues can be utilized for notifications and emails:

1. **Producer**: When a specific event occurs in the system, such as a new tutor registration or a tutor being rated, the backend can act as a producer and send a message to the appropriate queue. The message would contain the necessary information for generating the notification or email.

2. **Consumer**: Consumers would be separate services or workers responsible for processing messages from the queue. They can retrieve the messages, generate the required notifications or emails, and send them to the intended recipients.

3. **Asynchronous Processing**: By leveraging messaging queues, we can achieve asynchronous processing, allowing the backend to continue handling other requests without waiting for the notifications or emails to be sent. This improves the responsiveness and scalability of the system.

Overall, messaging queues help decouple components, ensure reliable message delivery, and provide a scalable solution for handling notifications and emails in the Shepherd Tutors Test backend.

