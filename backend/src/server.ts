import path from "path";
import express from "express";
import { pagesRouter } from "./routes/pages";
import { contactRouter } from "./routes/contact";

const app = express();
const frontendDir = path.join(__dirname, "..", "..", "frontend");

app.set("view engine", "ejs");
app.set("views", path.join(frontendDir, "views"));

app.use(express.json());
app.use(pagesRouter);
app.use(contactRouter);
app.use(express.static(path.join(frontendDir, "public")));

const port = Number(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`Matombo Agency site running on http://localhost:${port}`);
});
