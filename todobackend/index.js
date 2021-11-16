const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");

//config enviroment variable
dotenv.config();

//instiate express
const app = express();


// router


//built-in level middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());


const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});