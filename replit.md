# Portfolio Website

## Overview

This is a modern, full-stack portfolio website built with React and Express.js. The application showcases a developer's projects, skills, and experience through a clean, responsive design. It features a contact form with backend storage and a comprehensive UI component library based on shadcn/ui.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React with TypeScript**: Single-page application using React 18 with TypeScript for type safety and better developer experience
- **Component Library**: Comprehensive UI component system built on Radix UI primitives with shadcn/ui design patterns
- **Styling**: Tailwind CSS with custom CSS variables for theming and consistent design tokens
- **State Management**: React Query (TanStack Query) for server state management and API caching
- **Routing**: Wouter for lightweight client-side routing
- **Build System**: Vite for fast development and optimized production builds

### Backend Architecture
- **Express.js Server**: RESTful API server with TypeScript for handling contact form submissions
- **Storage Layer**: Abstracted storage interface with in-memory implementation (MemStorage) that can be easily swapped for database implementations
- **Request Handling**: Structured API routes with validation using Zod schemas
- **Development Integration**: Vite middleware integration for seamless full-stack development

### Data Storage
- **Database Schema**: Drizzle ORM with PostgreSQL schema definitions for users and contact messages
- **Validation**: Zod schemas for runtime type checking and validation of API requests
- **Migration System**: Drizzle Kit for database migrations and schema management

### Design System
- **Component Architecture**: Modular, reusable UI components with consistent styling patterns
- **Theming**: CSS custom properties for light/dark mode support and brand-specific color schemes
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Accessibility**: Built on Radix UI primitives ensuring WCAG compliance

### Development Experience
- **TypeScript Configuration**: Strict type checking with path mapping for clean imports
- **Hot Module Replacement**: Vite's HMR for instant development feedback
- **Error Handling**: Runtime error overlays and structured error responses
- **Code Organization**: Clear separation between client, server, and shared code with TypeScript path aliases

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Query for state management
- **UI Components**: Extensive Radix UI component library for accessible primitives
- **Styling**: Tailwind CSS, class-variance-authority for component variants, clsx for conditional classes
- **Form Handling**: React Hook Form with Hookform resolvers for form validation
- **Icons**: Lucide React for consistent iconography
- **Development**: Wouter for routing, date-fns for date manipulation

### Backend Dependencies
- **Server Framework**: Express.js with TypeScript support
- **Database**: Drizzle ORM with Neon Database serverless PostgreSQL
- **Validation**: Zod for schema validation and type inference
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development Tools**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Build System**: Vite with React plugin and custom Replit integrations
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: PostCSS with Tailwind and Autoprefixer
- **Database Management**: Drizzle Kit for migrations and schema management

### Third-party Services
- **Database Hosting**: Configured for Neon Database (serverless PostgreSQL)
- **Image Assets**: Unsplash integration for placeholder images
- **Development Platform**: Replit-specific plugins and banner integration