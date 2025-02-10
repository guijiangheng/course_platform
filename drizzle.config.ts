import { defineConfig } from 'drizzle-kit';

import { env } from '@/data/env/server';

export default defineConfig({
  dialect: "postgresql",
  out: "./src/drizzle/migrations",
  schema: "./src/drizzle/schema.ts",
  strict: true,
  verbose: true,
  dbCredentials: {
    password: env.DB_PASSWORD,
    user: env.DB_USER,
    host: env.DB_HOST,
    database: env.DB_NAME,
    ssl: false
  }
})