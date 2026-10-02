# Cape Barber

### Modern Barber Shop Website

A professional, responsive barber shop web application built with React and Vite for a **Full-Stack Developer practical assessment**.

Cape Barber is designed as a realistic business website for a fictional Cape Town barbershop. The application provides customers with information about the business, services, barbers, opening hours, contact details, and an interactive appointment booking experience.

## Live Assessment Website

**Live Website:** https://cape-barber.vercel.app/

**GitHub Repository:** https://github.com/luvuyombewu-dev/cape-barber

---

## Project Overview

The objective of this project was to design, build, test, and deploy a complete professional website that could realistically be used by a modern barber shop.

The application focuses on:

* Professional business presentation
* Responsive web design
* Clear navigation
* Service discovery
* Barber selection
* Appointment scheduling
* Dynamic booking availability
* Calendar integration
* Accessible and semantic UI components
* Client-side validation
* Production deployment

The website follows a clean, modern visual design using a professional blue, teal, white, and neutral colour palette.

---

## Features

### 1. Home Page

The homepage provides the primary introduction to Cape Barber and includes:

* Full-width hero section
* Professional barber imagery
* Clear call-to-action buttons
* Online booking access
* Featured services
* Business value propositions
* Welcome popup for first-time visitors
* Responsive layout for desktop and mobile devices

### 2. Services Page

Customers can browse the available barber services, including:

| Service          | Duration | Price |
| ---------------- | -------: | ----: |
| Classic Haircut  |   30 min |  R180 |
| Skin Fade        |   45 min |  R220 |
| Haircut & Beard  |   60 min |  R280 |
| Beard Trim       |   30 min |  R140 |
| Kids Cut         |   30 min |  R140 |
| The Cape Package |   75 min |  R350 |

Each service provides:

* Service description
* Price
* Estimated duration
* Direct booking action

Selecting **Book This Service** automatically carries the selected service into the booking page.

---

### 3. About Page

The About page presents the fictional Cape Barber brand and includes:

* Company story
* Business values
* Precision
* Quality
* Community
* Barber team profiles
* Barber experience
* Barber specialties

Current barber profiles include:

| Barber | Role          | Experience | Specialty                     |
| ------ | ------------- | ---------: | ----------------------------- |
| Marcus | Master Barber |   8+ years | Fades & Modern Cuts           |
| Liam   | Senior Barber |   6+ years | Classic Cuts & Beard Grooming |
| Thabo  | Barber        |   4+ years | Fades & Precision Cuts        |

---

### 4. Online Booking System

The booking page provides an interactive appointment workflow.

Customers can select:

1. Service
2. Barber
3. Date
4. Time
5. Full name
6. Email address
7. Phone number

The system validates the selected appointment before showing the booking confirmation.

The booking flow also displays:

* Selected service
* Barber
* Appointment date
* Appointment time
* Service duration
* Service price
* Booking confirmation
* Calendar options

---

### 5. Dynamic Appointment Availability

Appointment times are calculated based on:

* Selected date
* Selected service
* Service duration
* Business closing time

Business hours:

**Monday – Friday**

`09:00 – 18:00`

**Saturday**

`09:00 – 16:00`

**Sunday**

`Closed`

The application automatically removes appointment times that would cause a selected service to extend beyond the shop's closing time.

For example, a longer service cannot be booked at a time where the service would finish after closing.

---

### 6. Calendar Integration

After completing a booking, users can add the appointment to their calendar.

Supported options:

* Google Calendar
* Apple Calendar / `.ics` calendar file

The generated calendar event includes:

* Appointment title
* Service
* Barber
* Duration
* Price
* Shop location
* Start time
* End time

---

### 7. Contact Page

The Contact page provides:

* Business location
* Telephone number
* Email address
* Opening hours
* Booking call-to-action
* Links to services and booking

Current business information:

**Location:** Cape Town, Western Cape, South Africa

**Phone:** +27 21 000 0000

**Email:** [hello@capebarber.co.za](mailto:hello@capebarber.co.za)

---

### 8. Terms & Conditions

The website includes a dedicated Terms & Conditions page to provide a more complete real-world business website experience.

---

### 9. Responsive Navigation

The application includes:

* Desktop navigation
* Mobile navigation
* Mobile menu toggle
* Active navigation states
* Persistent header
* Direct booking CTA

---

### 10. Reusable Components

The application is structured using reusable React components, including:

* `Header`
* `Footer`
* `Button`
* `Modal`

This reduces duplication and makes the UI easier to maintain and extend.

---

## Technology Stack

### Frontend

* **React 19**
* **JavaScript**
* **Vite**
* **React Router**
* **Tailwind CSS**
* **Lucide React**

### Development Tools

* **ESLint**
* **npm**
* **Git**
* **GitHub**

### Deployment

* **Vercel**

---

## Project Architecture

The application uses a component-based React architecture with separate areas for pages, reusable UI components, static data, and utility functions.

```text
cape-barber/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   ├── images/
│   │   └── logo/
│   │
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── Modal.jsx
│   │
│   ├── data/
│   │   ├── barbers.js
│   │   └── services.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Booking.jsx
│   │   ├── Contact.jsx
│   │   └── Terms.jsx
│   │
│   ├── utils/
│   │   └── calendar.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

---

## Application Routes

| Route       | Purpose                               |
| ----------- | ------------------------------------- |
| `/`         | Home page                             |
| `/services` | Services and pricing                  |
| `/about`    | About the business and barber team    |
| `/booking`  | Appointment booking                   |
| `/contact`  | Contact information and opening hours |
| `/terms`    | Terms & Conditions                    |

The application uses React Router for client-side navigation.

---

## Component Structure

### `Header.jsx`

Responsible for:

* Main navigation
* Mobile navigation
* Active route states
* Booking CTA
* Responsive menu

### `Footer.jsx`

Responsible for:

* Business information
* Navigation links
* Contact details
* Opening hours
* Booking CTA
* Copyright information

### `Button.jsx`

A reusable button component supporting:

* React Router links
* Standard buttons
* Primary style
* Secondary style
* Dark style
* Focus states
* Hover states

### `Modal.jsx`

Reusable modal component available for interface interactions.

---

## Data Structure

Business data is separated from page components to improve maintainability.

### Services

Services are stored in:

```text
src/data/services.js
```

Each service contains:

```javascript
{
  id,
  name,
  description,
  duration,
  price
}
```

### Barbers

Barber information is stored in:

```text
src/data/barbers.js
```

Each barber contains:

```javascript
{
  id,
  name,
  role,
  experience,
  specialty
}
```

---

## Booking Logic

The booking system contains client-side scheduling logic.

The application:

1. Reads the selected service.
2. Reads the selected barber.
3. Determines the selected day of the week.
4. Generates valid appointment times.
5. Calculates the expected appointment end time.
6. Checks the business closing time.
7. Removes invalid appointment slots.
8. Validates the selected appointment.
9. Displays the booking confirmation.

### Weekday Scheduling

Weekday appointment slots are generated from:

```text
09:00 – 17:00
```

The selected service duration is then used to determine whether each slot can finish before the `18:00` closing time.

### Saturday Scheduling

Saturday appointments operate between:

```text
09:00 – 16:00
```

The booking logic ensures the selected service can finish before closing.

### Sunday Scheduling

Sunday appointments are disabled because the shop is closed.

---

## Calendar Integration

Calendar functionality is implemented in:

```text
src/utils/calendar.js
```

### Google Calendar

The application generates a Google Calendar event URL with the appointment details.

### Apple Calendar

The application creates an `.ics` calendar file directly in the browser.

Example generated file:

```text
cape-barber-appointment.ics
```

This approach allows users to save appointment information without requiring a dedicated calendar backend.

---

## Design System

The interface uses a modern professional colour palette.

### Primary Colours

```text
Dark Blue:  #12304A
Teal:       #159A9C
Light Blue: #EAF4F8
White:      #FFFFFF
Text:       #263746
Muted Text: #526574
```

The design emphasizes:

* Strong visual hierarchy
* High readability
* Consistent spacing
* Rounded UI elements
* Clear call-to-action buttons
* Responsive layouts
* Minimal visual clutter

---

## Accessibility Considerations

The project includes several accessibility-focused implementation details:

* Semantic HTML structure
* Form labels connected to inputs
* `aria-label` attributes where appropriate
* `aria-expanded` for the mobile navigation
* `aria-modal` for the welcome dialog
* Keyboard-focus styling
* Disabled form controls when input prerequisites are missing
* Clear form validation requirements
* Meaningful image alternative text

---

## Responsive Design

The website is designed to work across:

* Desktop computers
* Laptops
* Tablets
* Mobile phones

Responsive Tailwind CSS utilities are used throughout the application to adapt layouts, typography, navigation, grids, forms, and buttons to different screen sizes.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git

### 1. Clone the Repository

```bash
git clone https://github.com/luvuyombewu-dev/cape-barber.git
```

### 2. Navigate to the Project

```bash
cd cape-barber
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will be available through the local Vite development server.

---

## Available Scripts

### Start Development Server

```bash
npm run dev
```

Starts the Vite development environment with hot module replacement.

### Build for Production

```bash
npm run build
```

Creates the optimized production build.

### Preview Production Build

```bash
npm run preview
```

Runs the production build locally for verification.

### Run ESLint

```bash
npm run lint
```

Checks the project for ESLint issues.

---

## Production Build

To create a production build:

```bash
npm run build
```

The compiled application is generated in:

```text
dist/
```

The production build can then be deployed to a static hosting platform such as Vercel.

---

## Deployment

The application is deployed using **Vercel**.

### Deployment Flow

```text
GitHub Repository
       │
       ▼
     Vercel
       │
       ▼
Production Build
       │
       ▼
Live Website
```

Live assessment website:

**https://cape-barber.vercel.app/**

---

## Current Application Scope

This project is currently a **frontend-focused booking website**.

The booking workflow is implemented on the client side. A production barber business would require a backend service and persistent database to store actual appointments and prevent conflicting bookings across multiple users.

The current implementation does **not** include:

* Backend API
* Database
* User authentication
* Persistent appointment storage
* Real-time appointment availability
* Admin dashboard
* Payment processing
* Email notifications
* SMS notifications

These are intentionally outside the current frontend assessment scope.

---

## Production Expansion

The application can be extended into a complete full-stack booking platform by adding:

```text
React Frontend
      │
      ▼
Spring Boot / Node.js API
      │
      ▼
PostgreSQL Database
      │
      ├── Customers
      ├── Barbers
      ├── Services
      ├── Appointments
      └── Availability
```

Additional production functionality could include:

* Secure customer accounts
* Admin authentication
* Barber management
* Appointment management
* Real-time availability
* Booking conflict prevention
* Email confirmation
* SMS reminders
* Online payments
* Customer appointment history
* Admin dashboard
* Database-backed business hours
* API validation
* Rate limiting
* Audit logging

---

## Development Approach

The project was developed with a focus on:

### Component Reusability

Common interface elements were separated into reusable components instead of duplicating UI code.

### Separation of Concerns

The project separates:

* UI components
* Page-level views
* Business data
* Calendar utilities
* Application routing

### Maintainability

Services and barber information are stored separately from the UI, making it easier to modify business information without rewriting page components.

### User Experience

The interface focuses on a simple customer journey:

```text
Discover
   ↓
View Services
   ↓
Choose Service
   ↓
Choose Barber
   ↓
Choose Date & Time
   ↓
Enter Details
   ↓
Confirm Booking
   ↓
Add to Calendar
```

---

## Manual Testing Areas

The application should be checked across the following user flows:

### Navigation

* Home navigation
* Services navigation
* About navigation
* Contact navigation
* Booking navigation
* Terms navigation
* Mobile navigation

### Service Selection

* View all services
* Confirm displayed prices
* Confirm displayed durations
* Open booking with a selected service

### Booking

* Select service
* Select barber
* Select date
* Select time
* Enter customer details
* Submit valid booking
* Prevent invalid appointment times
* Prevent Sunday bookings
* Verify Saturday scheduling
* Display booking confirmation

### Calendar

* Open Google Calendar integration
* Download Apple Calendar `.ics` file

### Responsive UI

* Desktop layout
* Tablet layout
* Mobile layout
* Mobile navigation
* Booking form responsiveness

---

## Repository Information

**Project:** Cape Barber

**Project Type:** Professional Barber Shop Web Application

**Assessment Type:** Junior Full-Stack Developer Practical Assessment

**Frontend:** React + JavaScript

**Build Tool:** Vite

**Styling:** Tailwind CSS

**Routing:** React Router

**Icons:** Lucide React

**Hosting:** Vercel

---

## Author

### Luvuyo Mbewu

Computer Engineering graduate and software developer focused on building practical web applications, backend systems, APIs, and software engineering projects.

**GitHub:**
https://github.com/luvuyombewu-dev

---

## Project Status

**Status:** Completed and deployed

The application is available as a live assessment website and the source code is available in the GitHub repository.

---

## License

No open-source license has been specified for this repository.

Unless otherwise stated, the source code remains under the copyright of the repository owner.
