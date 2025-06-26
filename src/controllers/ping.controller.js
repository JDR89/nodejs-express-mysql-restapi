import pool from "../../database/database.js";


export const pingController = async (req, res) => {
    const [result] = await pool.query("SELECT 0 AS pong")
    res.json(result[0])
  }