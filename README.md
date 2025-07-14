
# Hotel Booking App

This is a full-stack hotel booking application.

## Tech Stack

- **Frontend:** React (Vite)
- **Backend:** Django (REST API)
- **Containerization:** Docker (optional)

## Features

- Search for hotels by location, date, rooms, and guests
- Responsive and modern UI
- RESTful API for hotel data

## Getting Started

### Backend (Django)

1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
3. Run migrations:
   ```sh
   python manage.py migrate
   ```
4. Start the backend server:
   ```sh
   python manage.py runserver
   ```

### Frontend (React)

1. Go to the project root:
   ```sh
   cd ..
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend server:
   ```sh
   npm run dev
   ```

The React app will be available at `http://localhost:5173` and the Django API at `http://localhost:8000`.

### Docker (Optional)

You can use Docker and docker-compose for containerized development. See `docker-compose.yml` for details.

## License

This project is licensed under the MIT License.
