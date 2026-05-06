import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dentsspa Dental Studio",
    short_name: "Dentsspa",
    description:
      "Dental clinic in Model Colony, Shivaji Nagar, Pune. Led by Dr. Priti Munde, BDS. Established 2011.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F4",
    theme_color: "#FAF8F4",
    lang: "en-IN",
    categories: ["health", "medical", "lifestyle"],
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/Logo.png", sizes: "800x200", type: "image/png" },
    ],
  };
}
