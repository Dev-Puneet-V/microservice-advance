## 🔥 Understanding Docker Volumes & Hot Reloading

Docker **volumes themselves do not inherently enable or disable hot reloading**. Whether a volume allows hot reloading depends on **how it's used**.

---

## **1️⃣ Bind Mounts (Enable Hot Reloading)**

### 🚀 How it works:

- A **bind mount** maps a directory on your host machine to a directory inside the container.
- When you **edit files locally**, they instantly reflect inside the container (hot reloading).

### 🔧 Example in `docker-compose.yml`:

```yaml
services:
  frontend:
    build:
      context: ./frontend
    volumes:
      - ../frontend:/app # Maps local `frontend` folder to `/app` in container
      - /app/node_modules # Prevents overwriting `node_modules`
    command: ["npm", "run", "dev"] # Hot reload enabled in dev mode
```
