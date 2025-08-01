# Fulcrum AI Landing Page

## Overview

This is a modern, responsive landing page application for Fulcrum, an AI-powered organizational transformation consulting company. The application is built using a full-stack TypeScript architecture with React on the frontend and Express.js on the backend, featuring a clean separation between client and server code.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom brand colors and design tokens
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Code Structure**: Component-based architecture with clear separation of concerns

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Module System**: ES modules for modern JavaScript support
- **Development**: Hot reload with tsx for rapid development
- **Error Handling**: Centralized error handling middleware
- **Logging**: Custom request/response logging for API endpoints

### Build System
- **TypeScript**: Strict type checking across client, server, and shared code
- **Build Process**: Vite for client bundling, esbuild for server compilation
- **Development**: Concurrent development with Vite dev server and Express
- **Asset Management**: Static asset serving in production

## Key Components

### Database Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Type-safe database schema definitions in `shared/schema.ts`
- **Migrations**: Managed through Drizzle Kit
- **Development Storage**: In-memory storage implementation for rapid prototyping

### UI Components
- **Design System**: Comprehensive component library using Shadcn/ui
- **Theming**: CSS variables for consistent theming with light/dark mode support
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Built on Radix UI primitives for accessibility compliance

### Landing Page Sections
- **Navigation**: Sticky navigation with smooth scrolling (Home, Projects, Team, Blog, Contact)
- **Hero**: Full-screen hero section with call-to-action
- **Solution**: Service overview with animated cards
- **Journey**: Interactive step-by-step AI transformation process
- **AI Layers**: Interactive vertical layout with fixed height content areas
- **Modular Proof**: Detailed explanation of AI implementation approaches
- **Tools**: Assessment tools showcase
- **Projects**: Portfolio carousel
- **Team**: Leadership team presentation (moved to separate page and projects page)
- **Footer**: Contact information and navigation

### Page Structure
- **Home Page**: Hero, Solution, Journey, AI Layers, Modular Proof, Tools, Projects sections
- **Projects Page**: Project listings with "We've partnered with" and "Our AI Infrastructure Ecosystem" modules at bottom, followed by Team section
- **Team Page**: Dedicated team page with header and team section
- **Blog Page**: Blog listings and featured posts
- **Contact Page**: Contact forms and information

## Data Flow

### Client-Side Data Flow
1. React components manage local UI state
2. TanStack Query handles server state and caching
3. API requests use centralized fetch wrapper with error handling
4. Components consume data through custom hooks

### Server-Side Data Flow
1. Express routes handle API endpoints (prefixed with `/api`)
2. Storage layer abstracts data operations
3. Type-safe request/response handling with shared schemas
4. Middleware for logging and error handling

### Development Data Flow
1. Vite dev server proxies API requests to Express
2. Hot module replacement for instant client updates
3. Server restart on backend changes
4. Shared types ensure consistency between client and server

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Components**: Radix UI primitives, Lucide React icons
- **State Management**: TanStack Query for server state
- **Styling**: Tailwind CSS, Class Variance Authority
- **Utilities**: Date-fns, clsx for conditional classes

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Session Management**: Connect PG Simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution

### Development Dependencies
- **Build Tools**: Vite, esbuild for compilation
- **TypeScript**: Strict configuration with path mapping
- **Linting/Formatting**: ESLint and Prettier integration

## Deployment Strategy

### Production Build
1. **Client Build**: Vite creates optimized bundle in `dist/public`
2. **Server Build**: esbuild compiles TypeScript to `dist/index.js`
3. **Static Assets**: Served by Express in production mode
4. **Environment**: Production environment variables for database connection

### Development Workflow
1. **Local Development**: Vite dev server with Express backend
2. **Hot Reload**: Instant updates for both client and server code
3. **Type Safety**: Shared schemas ensure consistency
4. **Database**: Drizzle migrations for schema management

### Deployment Configuration
- **Database**: PostgreSQL with Neon serverless for scalability
- **Environment Variables**: DATABASE_URL for database connection
- **Build Commands**: Separate build and start scripts for production
- **Static Serving**: Express serves built client files in production

The application follows modern best practices with type safety, component reusability, and clear separation of concerns. The architecture supports rapid development while maintaining production readiness through proper build processes and deployment strategies.