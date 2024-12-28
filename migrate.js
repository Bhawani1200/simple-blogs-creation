const { connection } = require("@/db/db");
const { migrate } = require("drizzle-orm/postgres/migrator");

(async () => {
  await migrate(db, { migrationsFolder: "./drizzle" });
  await connection.end();
})();
