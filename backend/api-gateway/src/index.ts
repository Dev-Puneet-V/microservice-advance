import express from "express";
import cors from "cors";
import morgan from "morgan";
import config from "./utils/config";
import {
  authServiceProxy,
  userServiceProxy,
  searchServiceProxy,
  taskServiceProxy,
  handleProxyError,
} from "./middleware/proxy.middleware";

const app = express();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "API Gateway is running" });
});

// Service routes
app.use("/api/v1/auth", authServiceProxy);
app.use("/api/v1/users", userServiceProxy);
app.use("/api/v1/tasks", taskServiceProxy);
app.use("/api/v1/search", searchServiceProxy);

app.use((req, res, next) => {
  res.status(404).json({
    error: "Not Found",
    message: "The requested resource was not found on this server.",
  });
});

// Error handling
app.use(handleProxyError);

// Start server
const PORT = config.PORT || 8006;
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
  console.log("Service URLs:");
  console.log(`Auth Service: ${config.AUTH_SERVICE_URL}`);
  console.log(`User Service: ${config.USER_SERVICE_URL}`);
  console.log(`Search Service: ${config.SEARCH_SERVICE_URL}`);
  console.log(`Task Service: ${config.TASK_SERVICE_URL}`);
});
