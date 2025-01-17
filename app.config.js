import { createApp } from "vinxi";
import reactRefresh from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

export default createApp({
  server: {
    preset: "vercel", // change to 'node' or 'bun' or anyof the supported presets for nitro (nitro.unjs.io)
    experimental: {
      asyncContext: true,
    },
  },
  routers: [
    {
      type: "static",
      name: "public",
      dir: "./public",
    },
    {
      type: "http",
      name: "trpc",
      base: "/trpc",
      handler: "./trpc-server.handler.ts",
      target: "server",
      plugins: () => [reactRefresh()],
    },
    {
      type: "spa",
      name: "client",
      handler: "./index.html",
      target: "browser",
      plugins: () => [
        tsconfigPaths(),
        TanStackRouterVite({
          routesDirectory: "./app/routes",
          generatedRouteTree: "./app/routeTree.gen.ts",
          autoCodeSplitting: true,
        }),
        reactRefresh(),
        svgr({
          // svgr options: https://react-svgr.com/docs/options/
          svgrOptions: {
            exportType: "default",
            ref: true,
            svgo: false,
            titleProp: true,
          },
          include: "**/*.svg",
        }),
      ],
    },
  ],
});
