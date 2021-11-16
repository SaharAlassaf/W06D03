const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");

//config enviroment variable
dotenv.config();

//instiate express
const app = express();

// routers
const authRouter = require("./routers/routes/auth");
app.use("/auth", authRouter);
const todoRouter = require("./routers/routes/todo");
app.use("/todo", todoRouter);

//built-in level middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
