import { config } from "dotenv";

config();

const PORT = process.env.PORT || 3500;

const DB_HOST= process.env.DB_HOST || "localhost"; 
const DB_PORT= process.env.DB_PORT || 3306; 
const DB_USER= process.env.DB_USER || "root"; 
const DB_PASSWORD= process.env.DB_PASSWORD || "admin"; 
const DB_DATABASE= process.env.DB_DATABASE || "company_db"; 


export {PORT,DB_HOST,DB_PORT,DB_USER,DB_PASSWORD,DB_DATABASE};