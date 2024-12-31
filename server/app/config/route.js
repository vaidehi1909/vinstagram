import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

export const registerRoutes = async (app) => {
  try {
    const routesPath = path.join(process.cwd(), "app/routes");

    const files = fs
      .readdirSync(routesPath)
      .filter((file) => file.endsWith(".js"));

    return Promise.mapSeries(files, async (file) => {
      try {
        const routePath = path.join(routesPath, file);
        // Convert absolute path to a file URL
        const moduleURL = pathToFileURL(routePath).href;
        const { default: router } = await import(moduleURL);
        if (router && typeof router === "function") {
          // Assuming the filename is the base path for the route
          const basePath = "/" + path.basename(file, ".js");
          app.use(basePath, router);
        } else {
          console.error(`Could not found router for ${file}`);
        }
      } catch (error) {
        console.log(`Error in register route for ${file}`);
        console.error(error);
      }
    }).then(() => {
      console.log("Routes Registered.");
    });
  } catch (error) {
    console.log("Error in register routes.");
    console.error(error);
  }
};
