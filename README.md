# Google Flights Clone

A responsive flight search application built using React and the Sky Scrapper API. This project demonstrates the ability to fetch real-time flight data, build a user-friendly UI, and implement a responsive design.

## Features

Responsive Design: Optimized for various screen sizes.
Real-Time Flight Search: Integrated with Sky Scrapper API for live flight data.
Search Functionality: Search flights by origin and destination airports.
User-Friendly Interface: Clean and intuitive UI inspired by Google Flights.

## Tech Stack

Frontend: React, SCSS, Material UI
API Integration: Sky Scrapper API
Styling: Material UI + Custom SCSS

## Getting Started

1. Clone the Repository

**Client**

```
   git clone https://github.com/your-username/google-flights-clone.git
   cd google-flights-clone
```

**Server**

```
  git clone
  cd
```

### Configure Environment Variables

- Create a .env file in the server and client directories with these variables:

**Client/.env**

```
  VITE_PORT=
  VITE_BACKEND_URL=http://localhost
```

**Client/.env**

```
  PORT=
  BACKEND_URL=http://localhost
```

2. Install Dependencies

```
   npm install
```

3. Set Up Environment Variables
   Create a .env file in the root directory and configure it with your API key:

```
  REACT_APP_API_KEY=
```

4. Run the Application

```
  npm start
```

The app will be available at http://localhost:8080.

## API Usage

This project uses the Sky Scrapper API to fetch real-time flight data. For more details, refer to the API documentation.

## Folder Structure

```
  src/
  ├── components/ # React components
  ├── styles/ # SCSS files
  │ └── partials/ # SCSS partials
  ├── utils/ # Helper functions
  ├── App.js # Main app component
  ├── index.js # Entry point
  └── services/ # API service configurations
```

## Scripts

Start Development Server: npm start
Build for Production: npm run build
Run Tests: npm test

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Author

#### Bruna

Feel free to reach out on LinkedIn https://www.linkedin.com/in/brunasfenandes/
