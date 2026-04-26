import express, { type Request, type Response } from "express";
import pool from "./config/config";
import userRoute from "./routes/user.route";
import accountRoute from "./routes/account.route";
const app = express();
const PORT = 3000;
app.use(express.json());
(async () => {
  try {
    const conn = await pool.getConnection();
    console.log("MySQL connected successfully");
    conn.release();
  } catch (err) {
    console.error("❌ Connection failed:", err);
  }
})();



app.use("/users",userRoute);
app.use("/accounts",accountRoute);


app.listen(PORT, () => {
  console.log(`Server running  on http://localhost:${PORT}`);
});