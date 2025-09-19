# 🧚‍♀️ Fairy Tale E-commerce

A beautiful, handcrafted bag e-commerce website built with Angular and Bootstrap, featuring an elegant pink theme and comprehensive filtering system.

## ✨ Features

### 🛍️ Core E-commerce Functionality
- **Product Catalog**: Display of handcrafted bags with detailed information
- **Shopping Cart**: Add/remove items with quantity management and localStorage persistence
- **Product Details**: Individual product pages with image galleries
- **Responsive Design**: Fully responsive across all devices

### 🔍 Advanced Filtering System
- **Price Range Filter**: Interactive slider from $50 to $5000
- **Color Filter**: Black, Red, Blue, Brown, White, Silver, Multi-color, Transparent, Wooden
- **Material Filter**: Crystal, Pearl
- **Style Filter**: Tote Bags, Crossbody, Clutch, Backpack
- **Real-time Results**: Instant filtering with dynamic product count updates

### 📄 Additional Pages
- **Contact Us**: Contact form with validation, business info, FAQ, social media links
- **About Us**: Company story, team members, values, timeline, sustainability focus
- **Cart & Checkout**: Complete shopping flow with routing between cart and checkout

### 🎨 Design & UX
- **Pink Theme**: Elegant color scheme (#d94e73, #fec7d0, #9b4d63)
- **Bootstrap 5.3.8**: Modern, responsive styling
- **FontAwesome Icons**: Beautiful iconography throughout
- **Custom Directives**: Button styling and scaling effects
- **Smooth Animations**: Enhanced user experience with hover effects

## 🚀 Technology Stack

- **Framework**: Angular 20.2.0
- **Language**: TypeScript 5.9.2
- **Styling**: Bootstrap 5.3.8, Custom CSS
- **Icons**: FontAwesome 7.0.1
- **Build Tool**: Angular CLI
- **Architecture**: Standalone Components

## 📦 Project Structure

```
src/
├── app/
│   ├── Components/
│   │   ├── contact/           # Contact page with form validation
│   │   ├── about/             # About us page with team & timeline
│   │   ├── products/          # Product listing with filter logic
│   │   ├── product-cards/     # Product display cards
│   │   ├── side-bar/          # Advanced filter sidebar
│   │   ├── cart/              # Shopping cart management
│   │   ├── checkout/          # Checkout process
│   │   └── navbar/            # Navigation bar
│   ├── Service/
│   │   ├── cart-service.ts    # Cart management with localStorage
│   │   └── product-service.ts # Product data service
│   ├── models/
│   │   ├── product.ts         # Product interface
│   │   ├── product-filter.ts  # Filter interface
│   │   └── cart-item.ts       # Cart item interface
│   ├── Directives/            # Custom directives for styling
│   └── Pipes/                 # Custom pipes for data formatting
└── public/assets/images/      # Product images and logos
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/mohamedelekhnawy/Fairy_Tale_Ecommerce.git
   cd Fairy_Tale_Ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   ng serve
   ```

4. **Open in browser**
   Navigate to `http://localhost:4200`

## 🔧 Available Scripts

- `ng serve` - Start development server
- `ng build` - Build for production
- `ng test` - Run unit tests
- `ng lint` - Run linting

## 🛒 Key Features in Detail

### Advanced Filter System
The comprehensive filtering system allows users to filter products by:
- **Price Range**: Interactive slider with real-time updates
- **Colors**: Multiple color selection with visual indicators
- **Materials**: Crystal and Pearl material options
- **Styles**: Various bag styles for different occasions

### Cart Management
- Add/remove products with quantity control
- Persistent cart storage using localStorage
- Real-time cart updates and total calculation
- Smooth navigation between cart and checkout

### Contact & About Pages
- **Contact**: Form validation, business information, FAQ section
- **About**: Company story, team showcase, timeline, sustainability focus

### Responsive Design
- Mobile-first approach with Bootstrap grid
- Touch-friendly interface for mobile devices
- Optimized images and performance
- Cross-browser compatibility

## 🎨 Color Scheme

- **Primary**: #d94e73 (Fairy Tale Pink)
- **Secondary**: #fec7d0 (Light Pink)
- **Accent**: #9b4d63 (Dark Pink)
- **Background**: White with subtle shadows

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Mohamed Elekhnawy**
- GitHub: [@mohamedelekhnawy](https://github.com/mohamedelekhnawy)

## 🙏 Acknowledgments

- Angular team for the amazing framework
- Bootstrap for the responsive CSS framework
- FontAwesome for the beautiful icon library
- All contributors and supporters

---

⭐ **Star this repository if you found it helpful!**

🐛 **Found a bug?** [Open an issue](https://github.com/mohamedelekhnawy/Fairy_Tale_Ecommerce/issues)

💡 **Have suggestions?** [Start a discussion](https://github.com/mohamedelekhnawy/Fairy_Tale_Ecommerce/discussions)
