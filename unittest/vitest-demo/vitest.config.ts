import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
export default defineConfig({
  test: {
    include: ["./test/**/*.test.{ts,tsx}"],
    globals: true,
    environment: "happy-dom",
  },
  plugins: [react()],
});
