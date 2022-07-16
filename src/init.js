import "dotenv/config";
import "./server.js";
import app from "./server";

const PORT = 7777;

const handlePortListen = () => {
  console.log(`http://localhost:${PORT}`);
};

app.listen(PORT, handlePortListen);
