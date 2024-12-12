// schema.ts
import { 
  pgTable, 
  timestamp, 
  text, 
  uuid 
} from 'drizzle-orm/pg-core';

export const images = pgTable('images', {
  id: uuid('id').primaryKey().defaultRandom(),
  imageurl: text('image_url').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow()
});