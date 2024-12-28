const { sql } = require("drizzle-orm");

const { pgTable, serial, text,varchar,timestamp } = require("drizzle-orm/pg-core");

export const recipes=pgTable("recipes", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 50 }).notNull(),
  description: text("description", { length: 50 }).notNull(),
  subname: varchar("subname", { length: 100 }),
  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`),
});
