# airuba-app

A production-ready Next.js application with a modern tech stack including database, authentication, type-safe APIs, UI components, and comprehensive testing.

## Tech Stack

### Core

- **Next.js 16.0.1** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type safety
- **Tailwind CSS 4.1.17** - Utility-first CSS

### Database & ORM

- **PostgreSQL** - Relational database
- **Prisma 6.19.0** - Next-generation ORM
  - Type-safe database client
  - Automatic migrations
  - NextAuth adapter integration

### Authentication

- **NextAuth v5.0.0-beta.30 (Auth.js)** - Authentication solution
  - Prisma adapter for database sessions
  - Support for OAuth providers (GitHub, Google)
  - Server-side session management

### API Layer

- **tRPC 11.0.0** - End-to-end type-safe APIs
- **TanStack Query 5.90.7** - Powerful data synchronization
- **Zod 4.1.12** - Schema validation
- **SuperJSON 2.2.5** - JSON serialization with types

### UI Components

- **shadcn/ui** - Beautifully designed components
  - Radix UI primitives
  - Tailwind CSS styling
  - Fully customizable

### Environment & Configuration

- **@t3-oss/env-nextjs 0.13.8** - Type-safe environment variables
  - Build-time validation
  - Runtime validation
  - Client/server separation

### Code Quality

- **ESLint 9.39.1** - Flat config with Next.js rules
- **Prettier 3.6.2** - Code formatting
- **Husky 9.1.7** - Git hooks
- **lint-staged 16.2.6** - Run linters on staged files

### Testing

- **Vitest 4.0.8** - Unit & component testing
  - React Testing Library integration
  - Fast and modern test runner
- **Playwright 1.56.1** - End-to-end testing
  - Multi-browser support
  - Auto-wait and retry

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- PostgreSQL database

### Installation

1. Clone and install dependencies:

```bash
cd airuba-app
bun install
```

2. Set up environment variables:

```bash
cp .env.example .env
```

Edit `.env` and configure:

- `DATABASE_URL` - Your PostgreSQL connection string
- `NEXTAUTH_SECRET` - Generate with `openssl rand -hex 32`
- `NEXTAUTH_URL` - Your application URL (http://localhost:3000 for dev)

3. Set up the database:

```bash
# Generate Prisma client
bunx prisma generate

# Run migrations
bunx prisma migrate dev
```

4. Start the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

### Development

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server

### Code Quality

- `bun run lint` - Run ESLint
- `bun run lint:fix` - Fix ESLint issues
- `bun run format` - Format code with Prettier
- `bun run format:check` - Check formatting
- `bun run type-check` - Run TypeScript type checking

### Testing

- `bun run test` - Run unit tests with Vitest
- `bun run test:ui` - Open Vitest UI
- `bun run test:e2e` - Run E2E tests with Playwright
- `bun run test:e2e:ui` - Open Playwright UI

### Database

- `bunx prisma studio` - Open Prisma Studio (database GUI)
- `bunx prisma migrate dev` - Create and apply migrations
- `bunx prisma generate` - Generate Prisma Client

## Project Structure

```
airuba-app/
├── prisma/
│   └── schema.prisma          # Database schema
├── public/                     # Static assets
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── api/
│   │   │   ├── auth/[...nextauth]/  # NextAuth API route
│   │   │   └── trpc/[trpc]/         # tRPC API route
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   └── ui/                # shadcn/ui components
│   ├── features/              # Feature-based modules
│   ├── hooks/                 # Shared React hooks
│   ├── lib/
│   │   ├── trpc/              # tRPC client setup
│   │   └── utils.ts           # Utility functions
│   ├── server/
│   │   ├── api/
│   │   │   ├── routers/       # tRPC routers
│   │   │   ├── trpc.ts        # tRPC initialization
│   │   │   └── root.ts        # Root router
│   │   ├── auth.ts            # NextAuth config
│   │   └── db.ts              # Prisma client instance
│   ├── types/                 # TypeScript type definitions
│   └── env.js                 # Environment validation
├── tests/
│   ├── e2e/                   # Playwright tests
│   ├── unit/                  # Vitest tests
│   └── setup.ts               # Test setup
├── .env.example               # Environment template
├── .gitignore
├── .husky/                    # Git hooks
├── eslint.config.mjs          # ESLint flat config
├── next.config.ts             # Next.js config
├── playwright.config.ts       # Playwright config
├── tsconfig.json              # TypeScript config
└── vitest.config.ts           # Vitest config
```

## Using tRPC

### Server-side (Creating routers)

```typescript
// src/server/api/routers/example.ts
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return { greeting: `Hello ${input.text}` };
    }),
});
```

### Client-side (Using in components)

```typescript
"use client";
import { api } from "@/lib/trpc/client";

export function MyComponent() {
  const { data } = api.example.hello.useQuery({ text: "world" });
  return <div>{data?.greeting}</div>;
}
```

## Database Migrations

```bash
# Create a new migration
bunx prisma migrate dev --name your_migration_name

# Apply migrations in production
bunx prisma migrate deploy

# Reset database (development only)
bunx prisma migrate reset
```

## Adding OAuth Providers

1. Get credentials from OAuth provider (GitHub, Google, etc.)
2. Add to `.env`:
   ```
   GITHUB_CLIENT_ID=your_client_id
   GITHUB_CLIENT_SECRET=your_client_secret
   ```
3. Update `src/server/auth.ts`:

   ```typescript
   import GitHub from "next-auth/providers/github";

   providers: [
     GitHub({
       clientId: process.env.GITHUB_CLIENT_ID,
       clientSecret: process.env.GITHUB_CLIENT_SECRET,
     }),
   ];
   ```

4. Update `src/env.js` to validate the new environment variables

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy

### Manual Deployment

```bash
bun run build
bun run start
```

Ensure all environment variables are set in production.

## AI Chatbot

This application includes a production-ready AI chatbot powered by Vercel AI SDK.

### Features

- **Streaming Responses**: Real-time AI responses with streaming
- **Multiple AI Models**: Support for Claude (Anthropic) and GPT (OpenAI)
- **Chat History**: Persistent chat history stored in PostgreSQL
- **Markdown Support**: Rich text rendering with syntax highlighting
- **Type-Safe**: Full type safety from API to UI

### Configuration

Add your AI provider API keys to `.env`:

```bash
# Anthropic Claude (recommended)
ANTHROPIC_API_KEY=sk-ant-...

# OpenAI GPT (optional)
OPENAI_API_KEY=sk-...
```

### Usage

1. Navigate to `/chat` route
2. Start chatting with the AI
3. Chat history is automatically saved to your database

### Customization

- **Models**: Edit `src/lib/ai/models.ts` to add/remove models
- **UI**: Customize `src/components/chat/chat-interface.tsx`
- **API**: Modify `src/app/api/chat/route.ts` for custom behavior

## Important Notes

- **Environment Variables**: Always set `NEXTAUTH_SECRET` in production
- **AI API Keys**: At least one AI provider key (ANTHROPIC_API_KEY or OPENAI_API_KEY) required for chat
- **Database**: Ensure PostgreSQL is accessible from your deployment environment
- **Git Hooks**: Husky will run linting on pre-commit
- **Type Safety**: The entire stack is type-safe from DB to UI

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [tRPC Documentation](https://trpc.io)
- [Prisma Documentation](https://www.prisma.io/docs)
- [NextAuth.js Documentation](https://authjs.dev)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

MIT
