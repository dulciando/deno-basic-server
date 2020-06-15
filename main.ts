//import { readJson } from "https://deno.land/std/fs/mod.ts";
import { Application, Router } from "https://deno.land/x/oak/mod.ts";

//const data = await readJson("./data.json");

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/fetch", async (context) =>{
    const res = await fetch('https://api.spotify.com/v1/artists/{id}').then(res => res.json());
    context.response.body = JSON.stringify(res, null, 4);
  });
  //.get("/data", (context) => {
  //  context.response.body = data;
  // });
  
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());


await app.listen({ port: 8000 });