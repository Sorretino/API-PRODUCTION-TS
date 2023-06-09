import "dotenv/config";
import http from "http";
import { app } from "./app";

//@ts-ignore
let PORT = process.env.PORT || 3333;

http.createServer(app).listen(PORT, () => {
  console.log(`APP listenner on port ${PORT}`);
});
