import pool from "../config/config";

/**
 * T = table
 * @param table name
 * @returns 
 */

export const findAll = async <T = any>(table: string) => {
  const [rows] = await pool.query(`SELECT * FROM ${table}`);
  return rows as T[];
};