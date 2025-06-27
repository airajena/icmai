# ICMAI Portal Builder

A modern, responsive web application for The Institute of Cost Accountants of India (ICMAI) built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern UI/UX**: Sleek, responsive design with smooth animations using Framer Motion
- **Interactive Components**: Built with shadcn/ui for consistent, accessible UI elements
- **Comprehensive Sections**:
  - Advanced Studies & Research
  - Professional Development & CPE
  - Industry Connect with Reports
  - BFSI Programs
  - Taxation Resources
  - Student Services
  - Journal Publications
  - Membership Services

## 🚀 Quick Start

### Prerequisites

- Node.js 16.x or higher
- npm 7.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/icmai-portal-builder.git
cd icmai-portal-builder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🛠️ Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: 
  - Tailwind CSS for utility-first styling
  - shadcn/ui for pre-built components
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Development Tools**:
  - ESLint for code linting
  - Prettier for code formatting

## 📁 Project Structure

```
icmai-portal-builder/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # shadcn/ui components
│   │   └── ...          
│   ├── pages/            # Page components
│   │   ├── about/        # About section pages
│   │   ├── students/     # Student section pages
│   │   └── ...
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utilities and helpers
│   ├── App.tsx          
│   └── main.tsx
├── public/               # Static assets
├── package.json
└── ...config files
```

## 🎨 Features & Pages

### Core Features
- Responsive design for all device sizes
- Modern animation and transitions
- Accessible UI components
- Fast page loads with Vite
- Type-safe development with TypeScript

### Key Pages
- **Home**: Dynamic hero section, quick access cards
- **Advanced Studies**: Research programs and resources
- **Industry Connect**: Interactive industry reports
- **Professional Development**: Training and certification
- **Student Services**: Course information and admissions
- **BFSI Programs**: Banking and financial services
- **Journal Publications**: Latest research publications

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Adding New Features

1. Create new components in `src/components`
2. Add new pages in `src/pages`
3. Update routing in `App.tsx`
4. Follow TypeScript and ESLint guidelines

## 📱 Responsive Design

The portal is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software owned by ICMAI. All rights reserved.

