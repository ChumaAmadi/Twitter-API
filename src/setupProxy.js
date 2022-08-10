import { createProxyMiddleware } from "http-proxy-middleware";

// This proxy redirects requests to /api endpoints to
// the Express server running on port 3001.
export default function (app) {
  app.use(
    ["/api"],
    createProxyMiddleware({
      target: "http://localhost:3001",
    })
  );
};