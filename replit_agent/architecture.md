# Architecture Overview

## Overview

ToPast is a web application for a toast/bakery business that combines static HTML pages with a modern, server-rendered React application. The application is built with a hybrid architecture that supports both static content serving and dynamic, data-driven interactions.

The system uses a Vite-powered React frontend with a Node.js Express backend. Data persistence is handled through PostgreSQL using Drizzle ORM. The application is designed to be deployed on various platforms, with specific configurations for Netlify.

## System Architecture

The application follows a layered architecture with clear separation of concerns:

1. **Presentation Layer**: Consists of static HTML pages and React components
2. **Application Layer**: Express server with API routes and server-side rendering capabilities
3. **Data Access Layer**: Drizzle ORM for database interactions
4. **Database Layer**: PostgreSQL database (via Neon Serverless Postgres)

The system employs a hybrid approach between static site generation and server-side rendering:
- Static HTML pages for marketing content (index.html, splash.html, blog.html, etc.)
- Dynamic React components for interactive elements
- Server-side API for data operations

## Key Components

### Frontend

1. **Static HTML Pages**
   - Marketing pages written in HTML with Tailwind CSS
   - Pages include: splash, index, blog, cart
   - Styling via Tailwind CSS loaded from CDN

2. **React Application**
   - Built with Vite and React
   - Uses ShadCN UI components (based on Radix UI primitives)
   - Styling with Tailwind CSS (configured with PostCSS)
   - Client-side state management with React Query

### Backend

1. **Express Server**
   - Handles API requests and static file serving
   - Server-side rendering of React components
   - API routes defined in `/server/routes.ts`

2. **Data Access**
   - Drizzle ORM for type-safe database access
   - Schema defined in `/shared/schema.ts`
   - Fallback in-memory storage implementation for development/testing

### APIs

The server provides REST API endpoints, primarily for blog functionality:
- `GET /api/blog-posts` - Retrieve all blog posts
- `GET /api/blog-posts/:id` - Get a single blog post by ID
- `GET /api/blog-posts/slug/:slug` - Get a blog post by slug

## Data Flow

1. **Static Content Flow**
   - HTTP request → Netlify CDN → Static HTML/CSS/JS → Browser

2. **Dynamic Content Flow**
   - HTTP request → Express server → API route handler → Database query → Response

3. **Server-Side Rendering Flow**
   - HTTP request → Express server → Vite SSR → React component → Database query (if needed) → Rendered HTML → Browser

## Database Schema

The application uses a PostgreSQL database with the following schema:

1. **Users Table**
   - ID (primary key)
   - Username (unique)
   - Password

2. **Blog Posts Table**
   - ID (primary key)
   - Title
   - Slug (unique)
   - Summary
   - Content
   - Image URL
   - Published timestamp
   - View count

## External Dependencies

### Core Dependencies
- React and React DOM for UI
- Vite for build system and development server
- Express for server-side logic
- Drizzle ORM for database access
- TailwindCSS for styling
- Radix UI components via ShadCN UI

### External Services
- Neon Serverless PostgreSQL for database storage
- Netlify for hosting and deployment
- Anthropic AI SDK for possible AI integration

## Deployment Strategy

The application is configured for deployment on Netlify with a hybrid approach:

1. **Build Process**
   - Custom `build.sh` script that:
     - Runs standard build process via Vite
     - Copies static HTML files to the build output
     - Copies assets to the build output

2. **Netlify Configuration**
   - Configured in `netlify.toml`
   - Build command: `bash build.sh`
   - Publish directory: `dist/client`
   - Serverless functions directory: `dist/functions`
   - Redirects configured to handle SPA routing

3. **Development Environment**
   - Support for Replit through `.replit` configuration
   - Local development via `npm run dev`

## Development Patterns

1. **Code Organization**
   - `/client` - Frontend React application
   - `/server` - Backend Express server
   - `/shared` - Shared types and schemas
   - Static HTML files in root directory

2. **Type Safety**
   - TypeScript for type checking
   - Zod schemas for runtime validation (via Drizzle)

3. **Component Architecture**
   - UI components from Radix UI / ShadCN
   - Custom components built on top of primitives

## Remix Integration

The repository includes a submodule linking to the Remix framework repository, suggesting potential plans to migrate to or integrate with Remix in the future. This could enable more sophisticated server-side rendering and data loading patterns.