# TGHAR - Tea Selling Website

A modern single-page tea selling website built with React.js featuring integrated PayPal payment system for seamless online tea purchases.

## Features

- **Product Showcase:**
  - Beautiful tea product gallery
  - Product details and descriptions
 

- **E-commerce Functionality:**
  - Shopping cart system
  - Real-time price calculation
  - Secure PayPal payment integration
  - Order confirmation system

- **User Experience:**
  - Single-page application for fast navigation
  - Smooth animations and interactions

## Technologies Used

- **Frontend:** React.js, JavaScript (ES6+), CSS3, HTML5
- **Payment:** PayPal JavaScript SDK
- **Styling:** CSS Modules / Styled Components 
- **Build Tool:** Create React App / Vite 

## Installation

1. **Prerequisites:**
   - Node.js 14+
   - npm or yarn

2. **Setup:**
   ```bash
   git clone https://github.com/sandhyapaudel18/tghar-tea-website.git
   cd tghar-tea-website
   npm install
   ```


3. **Run:**
   ```bash
   npm start
   ```
   Open `http://localhost:3000`

## PayPal Integration

The website uses PayPal's JavaScript SDK for secure payment processing:

- Sandbox mode for testing
- Production-ready configuration
- Secure transaction handling
- Order confirmation system

### Setting up PayPal:
1. Create PayPal Developer account
2. Get Client ID from PayPal Developer Dashboard
3. Add Client ID to `.env` file
4. Configure webhook endpoints (if needed)

## Usage

1. **Browse Products:** View available tea varieties with descriptions and prices
2. **Add to Cart:** Select desired products and quantities
3. **Checkout:** Review order and proceed to PayPal payment
4. **Payment:** Complete secure payment through PayPal
5. **Confirmation:** Receive order confirmation



- [ ] Homepage/Product Gallery
- [ ] Product Details
- [ ] Shopping Cart
- [ ] PayPal Checkout
- [ ] Order Confirmation



### Build for Production:
```bash
npm run build
```


## Environment Setup

### Development:
- Uses PayPal Sandbox environment
- Test payments with PayPal test accounts

### Production:
- Switch to PayPal Live environment
- Update Client ID in environment variables
- Configure proper webhook URLs

## Future Enhancements

- User authentication system
- Order tracking functionality
- Email notifications
- Inventory management
- Customer reviews and ratings
- Multiple payment methods
- Admin dashboard

## Contributing

1. Fork the project
2. Create feature branch (`git checkout -b feature/NewFeature`)
3. Commit changes (`git commit -m 'Add NewFeature'`)
4. Push to branch (`git push origin feature/NewFeature`)
5. Open Pull Request


🍵 **Enjoy premium quality tea with TGHAR!** ⭐
