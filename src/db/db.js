import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectedString =
  "postgresql://postgres.cwbbadphrqssxilzsimc:peopleareshitasalways@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres";
export const connection = postgres(connectedString);
export const db = drizzle(connection);
