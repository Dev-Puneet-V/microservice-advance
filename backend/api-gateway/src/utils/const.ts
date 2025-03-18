export type Service = "user" | "auth" | "search" | "task";

export const PUBLIC_SERVICES = {
  user: "user-service",
  auth: "auth-service",
  search: "search-service",
  task: "task-service",
};

export const PRIVATE_SERVICES = {
  notification: "notification-service",
  realTime: "real-time-service",
};
