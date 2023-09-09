import { pgTable, serial, varchar, foreignKey, timestamp, integer } from "drizzle-orm/pg-core"

import { sql } from "drizzle-orm"


export const user = pgTable("user", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 50 }).notNull(),
});

export const todo = pgTable("todo", {
	id: serial("id").primaryKey().notNull(),
	title: varchar("title", { length: 50 }).notNull(),
	description: varchar("description", { length: 50 }),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	userId: integer("user_id").references(() => user.id),
});