import { sql } from "drizzle-orm";
import { PgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const recipes = PgTable("recipes", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 50 }).notNull(),
  description: text("description", { length: 50 }).notNull(),
  subname: varchar("subname", { length: 100 }),
  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp("updated_at").$default(sql`CURRENT_TIMESTAMP`),
});
