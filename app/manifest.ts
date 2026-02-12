import { MetadataRoute } from "next"

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Adam Hinckley"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteName} Portfolio`,
    short_name: siteName,
    description:
      "Portfolio of Adam Hinckley, senior frontend engineer focused on product outcomes.",
    start_url: "/",
    display: "standalone",
    background_color: "#090b11",
    theme_color: "#090b11",
    icons: [
      {
        src: "/icon-dark-32x32.png",
        sizes: "32x32",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-light-32x32.png",
        sizes: "32x32",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  }
}
