# Hotel Booking Application

## Project Overview
A modern, responsive hotel booking application built with React that allows users to browse available rooms, view room details, make bookings, and manage their reservations. The application also includes a dedicated dashboard for hotel owners to manage their properties.

## Technologies Used
- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.0
- **Styling**: Tailwind CSS 4.1.11
- **Authentication**: Clerk 5.40.0
- **Routing**: React Router DOM 7.8.0
- **Language**: JavaScript (ES6+)

## Features

### User Features
- **Home Page**: Hero section with featured content and call-to-action
- **Room Browsing**: View all available rooms with filtering options
- **Room Details**: Detailed view of individual rooms with amenities and pricing
- **Booking Management**: View and manage personal bookings
- **Authentication**: Secure user registration and login via Clerk
- **Responsive Design**: Mobile-first design that works on all devices

### Hotel Owner Features
- **Dashboard**: Overview of hotel performance and metrics
- **Room Management**: Add, edit, and list hotel rooms
- **Booking Analytics**: View booking statistics and revenue
- **Admin Interface**: Dedicated layout for hotel management

## Installation Instructions

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager
- Clerk account for authentication

### Setup Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd hotel-booking-app/client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the `client` directory with:
   ```
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Environment Variables
- `VITE_CLERK_PUBLISHABLE_KEY`: Your Clerk publishable key for authentication

## Usage

### Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Application Structure
```
hotel-booking-app/
├── client/
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── hotelOwner/     # Owner-specific components
│   │   │   └── ...            # General components
│   │   ├── pages/              # Page components
│   │   │   ├── hotelOwner/     # Owner dashboard pages
│   │   │   └── ...            # Public pages
│   │   ├── assets/             # Images and icons
│   │   ├── App.jsx             # Main application component
│   │   └── main.jsx            # Application entry point
│   ├── public/                 # Static assets
│   ├── package.json            # Dependencies and scripts
│   └── vite.config.js          # Vite configuration
└── README.md                   # This file
```

### Key Components
- **Navbar**: Navigation bar with authentication state
- **Hero**: Landing page hero section
- **FeaturedDestination**: Showcases popular destinations
- **ExclusiveOffers**: Displays special offers and deals
- **Testimonial**: Customer reviews and testimonials
- **NewsLetter**: Email subscription component
- **HotelRegistration**: Hotel registration form
- **Room Management**: Components for managing hotel rooms

## Contributing
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Support
For support and questions, please open an issue in the repository or contact the development team.
