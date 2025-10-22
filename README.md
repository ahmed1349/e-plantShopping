# Paradise Nursery - Plant Shopping Application

A modern React-based e-commerce application for purchasing houseplants, built with Redux for state management.

## Features

### Landing Page
- Beautiful background image with company branding
- Company description and mission statement
- "Get Started" button to navigate to products

### Product Listing Page
- **6 Categories of Plants:**
  - Air Purifying Plants
  - Aromatic Fragrant Plants  
  - Insect Repellent Plants
  - Medicinal Plants
  - Low Maintenance Plants
- Each plant includes:
  - High-quality thumbnail image
  - Plant name and description
  - Price information
  - "Add to Cart" functionality
- Dynamic cart counter in header navigation
- Responsive design for mobile and desktop

### Shopping Cart Page
- Complete cart management functionality
- View all items with thumbnails and details
- Quantity adjustment (increase/decrease buttons)
- Individual item removal
- Real-time total calculation
- Continue shopping and checkout options
- Empty cart state handling

## Technical Implementation

### Technologies Used
- **React 18** - Frontend framework
- **Redux Toolkit** - State management
- **React Redux** - React-Redux bindings
- **Vite** - Build tool and development server
- **CSS3** - Styling with responsive design

### State Management
- Redux store with cart slice
- Actions: `addItem`, `removeItem`, `updateQuantity`
- Persistent cart state across page navigation

### Key Components
- `App.jsx` - Main application component with routing
- `ProductList.jsx` - Product display and cart management
- `CartItem.jsx` - Shopping cart functionality
- `CartSlice.jsx` - Redux state management
- `AboutUs.jsx` - Company information

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Project Structure
```
src/
├── App.jsx              # Main application component
├── main.jsx             # Application entry point
├── store.js             # Redux store configuration
├── CartSlice.jsx        # Redux cart slice
├── ProductList.jsx      # Product listing component
├── CartItem.jsx         # Shopping cart component
├── AboutUs.jsx          # About us component
├── App.css              # Main application styles
├── ProductList.css      # Product listing styles
├── CartItem.css         # Cart component styles
└── AboutUs.css          # About us styles
```

## Features Implemented

✅ **Landing Page**
- Background image
- Company branding
- Navigation to products

✅ **Product Display**
- 6 plant categories with 6+ plants each
- Product images, names, descriptions, prices
- Add to cart functionality

✅ **Shopping Cart**
- Add/remove items
- Quantity adjustment
- Total calculation
- Cart persistence

✅ **Navigation**
- Header with cart icon and counter
- Page navigation
- Responsive design

✅ **State Management**
- Redux implementation
- Cart state persistence
- Real-time updates

## Deployment

The application is ready for deployment to GitHub Pages or any static hosting service. Use the build command to create production-ready files in the `dist` directory.

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License
This project is licensed under the MIT License.