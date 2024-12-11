import {
    pgTable,
    serial,
    timestamp,
    text,
  } from 'drizzle-orm/pg-core';
  
  export const workspace = pgTable('workspace', {
    id: serial('id').primaryKey(),
    name: text('name')
      .notNull()
     ,
    email: text('email'),
    mediaUrl: text('media_url'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
  });