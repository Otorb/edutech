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
// const onSuccessLogin = async (response) => {
//     try {
//       const token = response.tokenId;
//       const email = response.profileObj.email;

//       // Enviar el token y el email al backend
//       const res = await fetch('http://localhost:3001s/auth/google', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ token, email }),
//       });

//       const data = await res.json();
//       console.log('Success:', data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
