"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config/config"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    // res.send("Hello from Express bh");
    res.send("Hello from Express How are you today?");
});
(async () => {
    try {
        const conn = await config_1.default.getConnection();
        console.log("✅ MySQL connected successfully");
        conn.release();
    }
    catch (err) {
        console.error("❌ Connection failed:", err);
    }
})();
app.listen(PORT, () => {
    console.log(`Server running  on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map