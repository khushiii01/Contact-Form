import express from "express";
import sentMailRouter from './sentMail.js';
import cors from "cors";
// Used dotenv library to configure .env variable
import dotenv from "dotenv";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = 1000;
const app = express();

app.use(express.json());
dotenv.config();
// Cors library is used for cross origin resource sharing
app.use(cors());
app.use("/api", sentMailRouter);


// Serve static files from the "dist" directory
app.use(express.static(path.resolve(__dirname, "contactpage_frontend", "dist")));

// Route all requests to React app to handle client-side routing
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "contactpage_frontend", "dist", "index.html"));
});


app.listen(port, () => {
  console.log("Server started");
});
