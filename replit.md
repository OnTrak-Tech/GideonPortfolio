# Overview

This is a modern portfolio website built with React and Express.js, designed to showcase a DevOps engineer's professional profile. The application features a responsive single-page design with smooth animations, professional styling, and resume download functionality. The site presents comprehensive information about the professional's experience, skills, education, and volunteer work in an elegant, modern interface.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with minimal bundle impact
- **UI Framework**: Radix UI primitives with shadcn/ui components for accessibility and consistent design
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **Animations**: Framer Motion for smooth page transitions and scroll-triggered animations
- **State Management**: TanStack Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for REST API endpoints
- **Language**: TypeScript with ES modules for modern JavaScript features
- **File Serving**: Custom static file serving for resume downloads with proper headers
- **Development**: Hot module replacement and development middleware integration
- **Error Handling**: Centralized error handling middleware with structured responses

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