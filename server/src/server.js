import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "../src/routes/index.js";

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use("/", router);

export default server;
