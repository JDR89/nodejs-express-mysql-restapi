import { PORT } from "../config/config.js";
import app from "./app.js";

//PUERTO
app.listen(PORT);
console.log(`server running on port ${PORT}`);


