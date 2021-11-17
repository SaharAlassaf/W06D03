const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");

//config enviroment variable
dotenv.config();

//instiate express
const app = express();
app.use(express.json())

//router
const authRouter = require("./routers/routes/auth");
const todoRouter = require("./routers/routes/todo");


// routers
app.use("/auth", authRouter);
app.use("/todo", todoRouter);

//built-in level middleware
app.use(morgan("dev"));
app.use(cors());


const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
