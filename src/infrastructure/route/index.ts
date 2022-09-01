import { readdirSync } from "fs";
import { Router } from "express";

const PATH = __dirname;
const router: Router = Router();
/**
 * 
 * @param filename 
 * @returns 
 */
function removeExtencion(filename: string): string {
  const cleanName = <string>filename.split(".").shift();
  return cleanName;
}

/**
 * 
 * @param file 
 */
function loadRoute(file: string): void {
  const name = removeExtencion(file);
  if (name !== "index") {
    import(`./${file}`).then((routerModule) => {
      router.use(`/${name}`, routerModule.router);
    });
  }
}

readdirSync(PATH).filter((file) => loadRoute(file));
export default router;
