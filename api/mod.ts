import { Hono } from "jsr:@hono/hono";
import emojiToEmoticonMap from "./emoji.json" with { type: "json" };

const app = new Hono();

app.use("*", (c, next) => {
  c.res.headers.set("Access-Control-Allow-Origin", "*");
  c.res.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  c.res.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return next();
});

app.get("/:emoji", (c) => {
  const emoji = c.req.param("emoji");
  const emoticon = Object.entries(emojiToEmoticonMap).find(([k, _]) => k.split(",").includes(emoji))?.[1] || "Not Found";
  return c.text(emoticon);
});

app.get("/reverse/:emoticon", (c) => {
  const emoticon = c.req.param("emoticon");
  const emoji = Object.entries(emojiToEmoticonMap).filter(([_, v]) => v === emoticon).map(([k, _]) => k).join(", ") || "Not Found";
  return c.text(emoji);
});

app.notFound((c) => c.text("Not Found", 404));

Deno.serve(app.fetch);

export { app };
