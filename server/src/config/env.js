import dotenv from "dotenv";
import path from "path";

dotenv.config();

const env = {
  port: process.env.PORT || 5000,
  databaseUrl: process.env.DATABASE_URL,
  storagePath: process.env.STORAGE_PATH || path.join(process.cwd(), "storage"),
  clientUrl: process.env.CLIENT_URL || "http://localhost:5173"
};

export default env;