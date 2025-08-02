// server/index.ts
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var app = express();
var PORT = parseInt(process.env.PORT || "3000", 10);
app.use(express.static(path.join(__dirname, "..", "dist", "public")));
app.use("/assets", express.static(path.join(__dirname, "..", "attached_assets")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "public", "index.html"));
});
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
