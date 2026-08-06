// app/routes.ts
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),      // Home/Landing page (Hero, Services, etc.)
  // route("about", "routes/About.tsx"), // Separate About Us page
//   route("contact-us", "routes/contact-us.tsx"),
route("news", "components/News.tsx"), // News & Insights page
route("news/:postId", "components/NewsDetail.tsx"), // News detail page
] satisfies RouteConfig;
