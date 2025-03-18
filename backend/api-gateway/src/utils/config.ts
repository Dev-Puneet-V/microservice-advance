import dotenv from "dotenv";

// Load environment variables from .env file in development
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

interface Config {
  PORT: string;
  NODE_ENV: string;
  AUTH_SERVICE_URL: string;
  USER_SERVICE_URL: string;
  TASK_SERVICE_URL: string;
  SEARCH_SERVICE_URL: string;
}

const config: Config = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || "8006",
  AUTH_SERVICE_URL: process.env.AUTH_SERVICE_URL || "http://auth-service:8001",
  USER_SERVICE_URL: process.env.USER_SERVICE_URL || "http://user-service:8000",
  TASK_SERVICE_URL: process.env.TASK_SERVICE_URL || "http://task-service:8005",
  SEARCH_SERVICE_URL:
    process.env.SEARCH_SERVICE_URL || "http://search-service:8004",
};

export default config;
