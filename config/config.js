import { config } from "dotenv";

config(); // Esto sigue siendo útil para cargar tu .env local

const PORT = process.env.PORT || 4000;
// --- CAMBIOS AQUÍ ---
const DB_HOST= process.env.MYSQLHOST || "localhost"; // Ahora busca MYSQLHOST
const DB_PORT= process.env.MYSQLPORT || 3306; // Ahora busca MYSQLPORT
const DB_USER= process.env.MYSQLUSER || "root"; // Ahora busca MYSQLUSER
const DB_PASSWORD= process.env.MYSQLPASSWORD || "admin"; // Ahora busca MYSQLPASSWORD
const DB_DATABASE= process.env.MYSQLDATABASE || "company_db"; // Ahora busca MYSQLDATABASE
// -------------------

export {PORT,DB_HOST,DB_PORT,DB_USER,DB_PASSWORD,DB_DATABASE};