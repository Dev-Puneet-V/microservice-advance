import { Request, Response, NextFunction } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import config from "../utils/config";

// Proxy middleware optionsnpm
const options = {
  changeOrigin: true,
  ws: true,
  pathRewrite: {
    "^/api/v1/auth": "/",
    "^/api/v1/users": "/",
    "^/api/v1/products": "/",
    "^/api/v1/orders": "/",
  },
};

// Create proxy middlewares for each service
export const authServiceProxy = createProxyMiddleware({
  ...options,
  target: config.AUTH_SERVICE_URL,
});

export const userServiceProxy = createProxyMiddleware({
  ...options,
  target: config.USER_SERVICE_URL,
});

export const searchServiceProxy = createProxyMiddleware({
  ...options,
  target: config.SEARCH_SERVICE_URL,
});

export const taskServiceProxy = createProxyMiddleware({
  ...options,
  target: config.TASK_SERVICE_URL,
});

// Error handling middleware
export const handleProxyError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("Proxy Error:", err);
  res.status(500).json({ error: "Proxy Error", message: err.message });
};
