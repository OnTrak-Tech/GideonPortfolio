# Overview

This is a modern portfolio website built with React and Vite, designed to showcase Gideon Adjei's DevOps and software development expertise. The application is a purely client-side single-page website with responsive design, smooth animations, professional styling, and direct resume download functionality. Perfect for static hosting on platforms like Vercel, Netlify, or GitHub Pages.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with minimal bundle impact
- **UI Framework**: Radix UI primitives with shadcn/ui components for accessibility and consistent design
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **Animations**: Framer Motion for smooth page transitions and scroll-triggered animations
- **State Management**: Local component state for interactive elements
- **Build Tool**: Vite for fast development and optimized production builds

## Static Website Architecture
- **Build Tool**: Vite for fast development and optimized production builds
- **Language**: TypeScript for modern JavaScript development
- **File Serving**: Static file serving with direct PDF access from public folder
- **Development**: Hot module replacement for fast development cycles
- **Deployment**: Ready for static hosting platforms (Vercel, Netlify, GitHub Pages)

## Component Structure
- **Layout**: Single-page application with sectioned components (Hero, About, Experience, Skills, Education, Contact)
- **UI Components**: Modular shadcn/ui components with consistent theming
- **Navigation**: Fixed navigation with smooth scrolling and active section tracking
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts

## Database and Data Layer
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Schema**: User management schema with username/password authentication structure
- **Storage**: In-memory storage implementation for development with interface for database abstraction
- **Migrations**: Drizzle Kit for database schema migrations and version control

## File Management
- **Static Assets**: Dedicated attached_assets directory for resume and media files
- **Resume Handling**: Secure file streaming with appropriate MIME types and download headers
- **Path Resolution**: Centralized path management with TypeScript path mapping

# External Dependencies

## UI and Styling
- **Radix UI**: Complete set of accessible UI primitives for consistent component behavior
- **Tailwind CSS**: Utility-first CSS framework with custom configuration for design system
- **Framer Motion**: Animation library for smooth transitions and interactive elements
- **React Icons**: Icon library including Lucide React and Simple Icons for professional branding

## Development and Build Tools
- **Vite**: Modern build tool with React plugin and development server
- **TypeScript**: Static type checking with strict configuration
- **PostCSS**: CSS processing with Tailwind and Autoprefixer plugins
- **ESBuild**: Fast bundling for production server builds

## Backend Dependencies
- **Express.js**: Web framework for API endpoints and middleware
- **Drizzle ORM**: Type-safe database operations with PostgreSQL support
- **Neon Database**: Serverless PostgreSQL database connection
- **File System**: Node.js fs module for secure file operations

## Database and ORM
- **PostgreSQL**: Production database with Neon serverless hosting
- **Drizzle Kit**: Database migration and schema management tools
- **Zod**: Runtime type validation integrated with Drizzle schemas

## Query and State Management
- **TanStack Query**: Server state management with caching and synchronization
- **React Hook Form**: Form handling with validation resolver integration
- **Date-fns**: Date manipulation and formatting utilities