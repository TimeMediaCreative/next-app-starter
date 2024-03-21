import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Name",
    short_name: "short_name",
    // icons: [
    //     {
    //         src: "/android-chrome-192x192.png",
    //         sizes: "192x192",
    //         type: "image/png"
    //     },
    //     {
    //         src: "/android-chrome-384x384.png",
    //         sizes: "384x384",
    //         type: "image/png"
    //     }
    // ],
    // theme_color: "#ffffff",
    // background_color: "#ffffff",
    // display: "standalone"
  };
}
