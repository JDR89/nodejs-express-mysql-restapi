import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import pingRoutes from "./routes/ping.routes.js";

import "../config/config.js";



const app = express();
app.use(express.json());

//RUTAS
app.use(pingRoutes)

app.use("/api",employeesRoutes)

app.use((req,res,next)=>{
  res.status(404).json({
    message: "Endpoint no encontrado"
  })
})

export default app;