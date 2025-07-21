# Quick Deployment Fix

## Issue Found
The deployment failed because Vercel couldn't find the server modules due to missing `.js` extensions in imports.

## Files to Update in GitHub

### 1. Update `server/index.ts`:
```typescript
import { registerRoutes } from "./routes.js";
import { setupVite, serveStatic, log } from "./vite.js";
```

### 2. Update `server/routes.ts`:
```typescript
import { storage } from "./storage.js";
```

### 3. Replace `vercel.json` with:
```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "dist/public",
  "installCommand": "npm install",
  "framework": "vite",
  "routes": [
    {
      "handle": "filesystem"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

## Quick Fix Steps:
1. Go to your GitHub repository: https://github.com/Pritam9078/pritam-das-portfolio
2. Edit the three files above with the changes shown
3. Commit changes with message: "Fix: Module imports for Vercel deployment"
4. Vercel will auto-redeploy in 2-3 minutes

Your portfolio will be live at: https://pritam-das-portfolio.vercel.app