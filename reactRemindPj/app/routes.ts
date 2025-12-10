import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("apply/:jobId", "routes/apply.tsx"),
  route("my-applications", "routes/my-applications.tsx"),
] satisfies RouteConfig;
