import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import database from "./config/database/connection";
import router from "./presentation/routes/userRouter";
import session from "express-session";

dotenv.config();

const PORT = process.env.PORT || 3001;


import { errorMiddleware } from "../src/middleware/errorMiddleware"; 

database();

const app = express();
app.use(express.json());

app.use(session({
  secret: 'your-secret-key-session',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));


app.use(cors());

app.use("/", router);

app.use(errorMiddleware);



app.listen(PORT, () => {
  console.log(`server is runnign ${PORT}`);
});
