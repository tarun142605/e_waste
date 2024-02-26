import express from "express";
import "./config/dbconnect.js";
import customerRoutes from "./routes/customerRoute.js";
import collectionAgentRoutes from "./routes/collectionAgentRoute.js";
const app = express();

import cors from "cors";

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/customer", customerRoutes);
app.use("/collectionAgent", collectionAgentRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});