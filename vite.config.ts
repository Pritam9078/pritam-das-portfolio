import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          reactThree: ['@react-three/fiber', '@react-three/drei'],
          physics: ['@react-three/rapier'],
          gsap: ['gsap']
        }
      }
    }
  }
});
