# Pritam Das Portfolio Website

## Overview

This is a modern, cyberpunk-themed personal portfolio website for Pritam Das, a Computer Science student specializing in Web3 development and AI/ML. The application showcases technical projects, skills, and achievements with a futuristic design aesthetic targeting the next generation of tech professionals.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### Contact Information Update (January 21, 2025)
- Updated all contact details across the portfolio:
  - Email: dpritam2708@gmail.com
  - Phone: +91 7683927667
  - LinkedIn: linkedin.com/in/pritam-das-738aaa237
  - GitHub: github.com/Pritam9078
  - Twitter: @BlocksmithP_D
- Updated social media links in footer with proper URLs
- Added phone number contact section in contact page
- Updated terminal commands with real contact information
- Project GitHub links already correctly configured:
  - LMS: github.com/Pritam9078/LMS
  - Skill_DAO: github.com/Pritam9078/Skill_DAO
  - ONYX-CHAIN: github.com/Pritam9078/ONYX-CHAIN

### EmailJS Integration & Resume Feature (January 21, 2025)
- Integrated EmailJS for real email functionality with credentials:
  - Service ID: service_omcki4p
  - Template ID: template_sdaioob
  - Public Key: 2C2CUHwJptdmAyJgf
- Added resume download and view functionality
- Connected resume buttons to GitHub repository: github.com/Pritam9078/Resume_Pritam
- Enhanced hero section with dual resume buttons (View/Download)
- Updated profile picture to: https://i.postimg.cc/T38MYw2h/Whats-App-Image-2025-07-16-at-16-56-51.jpg
- Resume now served from GitHub for easy updates and better performance
- Updated all skill levels to intermediate (60-70% proficiency)
- Prepared deployment configurations for free hosting platforms:
  - Vercel configuration (vercel.json)
  - Netlify configuration (netlify.toml)
  - Railway-ready package.json
  - Deployment guide (README-DEPLOYMENT.md)

### Portfolio Deployment Success (January 21, 2025)
- Successfully deployed on Vercel: https://pritam-das-portfolio.vercel.app
- GitHub repository: https://github.com/Pritam9078/pritam-das-portfolio
- Status: Live and ready for production
- Features verified: EmailJS contact form, resume integration, project showcases
- All contact information and social links properly configured

### Content Updates - Blockchain Focus (January 22, 2025)
- Updated personal brand to emphasize blockchain and Web3 passion
- Reduced AI/ML focus per user preference
- Added new role badges: "Campus to Crypto Member" and "Campus Maven @RiseIn"
- Updated hero section tagline to focus on blockchain innovation
- Modified about section to highlight DeFi applications and smart contracts
- Updated skill focus: Smart Contract Development (Advanced), DeFi Protocols (Intermediate), Web3 Development (Advanced)
- Enhanced ONYX-CHAIN project with real screenshots:
  - Added 3 project images: UI interface, dashboard, and features
  - Implemented multi-image gallery for project showcase
- Updated typing animation: removed "AI Explorer", added "DeFi Innovator" and "Crypto Pioneer"

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: TailwindCSS with custom cyberpunk theme and CSS variables
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack React Query for server state and local React state
- **Animations**: Custom CSS animations and hover effects for cyberpunk aesthetic
- **Theme**: Dark mode with neon cyberpunk colors (blue, purple, green accents)

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript throughout the entire stack
- **Build Tool**: Vite for fast development and optimized production builds
- **Development**: Hot module replacement and runtime error overlay for enhanced DX

### Key Components

#### UI Design System
- **Typography**: Inter font family for modern readability
- **Color Scheme**: Dark background with cyberpunk accent colors (cyber-blue, cyber-purple, cyber-green)
- **Components**: Glassmorphism effects, animated backgrounds, floating elements
- **Responsive**: Mobile-first design with breakpoint-based layouts

#### Content Sections
- **Hero**: Dynamic typing animation, professional portrait, call-to-action buttons
- **About**: Personal story, achievements, current focus areas
- **Skills**: Categorized technical skills with animated progress bars
- **Projects**: Featured portfolio projects with technology badges and links
- **Certifications**: Achievement showcase with visual icons
- **Contact**: Form handling with validation and toast notifications

#### Interactive Features
- **Terminal**: Hidden Konami code Easter egg that opens a functional terminal
- **Animations**: Floating elements, gradient animations, hover effects
- **Navigation**: Smooth scrolling between sections
- **Forms**: Contact form with validation using react-hook-form and Zod

## Data Flow

### Static Content Management
- Project data stored in TypeScript files (`/client/src/data/`)
- Skills and certifications defined as structured data objects
- Terminal commands system for interactive developer experience

### Form Handling
- Contact form uses react-hook-form for state management
- Zod schemas for form validation
- Toast notifications for user feedback
- Currently set up for client-side handling (ready for backend integration)

### State Management
- React Query for any future API calls
- Local component state for UI interactions
- Context providers for theme and tooltip management

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, TypeScript
- **Routing**: Wouter for lightweight routing
- **Styling**: TailwindCSS, PostCSS, Autoprefixer
- **UI Components**: Complete shadcn/ui library with Radix UI primitives

### Development Tools
- **Build**: Vite with React plugin and runtime error overlay
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts (Inter) for typography
- **Utilities**: clsx, tailwind-merge for conditional styling

### Form and Validation
- **Forms**: react-hook-form with Zod resolvers
- **Validation**: Zod schemas for type-safe validation
- **UI Feedback**: Custom toast notification system

### Database Setup (Prepared)
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: Neon serverless PostgreSQL (connection ready)
- **Migrations**: Drizzle Kit for database schema management
- **Schema**: User table structure defined in shared schema

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized static assets to `/dist/public`
- **Backend**: esbuild compiles TypeScript server to `/dist`
- **Assets**: Static assets served from build output

### Development Environment
- **Dev Server**: Express server with Vite middleware for HMR
- **Port Configuration**: Configurable for various hosting environments
- **Error Handling**: Runtime error overlay and comprehensive logging

### Production Readiness
- **Environment Variables**: DATABASE_URL configuration for production database
- **Static Serving**: Express serves built frontend assets
- **Error Boundaries**: Global error handling for both client and server
- **Performance**: Optimized builds with tree shaking and code splitting

### Hosting Considerations
- **Frontend**: Can be deployed to Vercel, Netlify, or any static hosting
- **Backend**: Node.js compatible hosting (Railway, Render, etc.)
- **Database**: Neon PostgreSQL for scalable data storage
- **Assets**: CDN-ready static asset organization

The application is structured as a full-stack TypeScript monorepo with clear separation between client, server, and shared code, making it easy to scale and maintain while providing an exceptional user experience with modern web technologies.