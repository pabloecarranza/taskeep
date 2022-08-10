import express from "express";
import cors from "cors";
import usersRoutes from "./routes/user.routes.js";
import tasksRoutes from "./routes/task.routes.js";
import authRoutes from "./routes/auth.routes.js";
import listRoutes from "./routes/list.routes.js";

const app = express();
app.use(express.json());

app.use(cors());

app.use(function (red, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(usersRoutes);
app.use(tasksRoutes);
app.use(authRoutes);
app.use(listRoutes);

export default app;
