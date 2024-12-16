import express from "express";
import userRoutes from './routes/user.js'
import authRoutes from './routes/authroutes.js'
import taskRoutes from './routes/task.js'
import mongoose from "mongoose";
import 'dotenv/config'
import authenticateUser from "./middlewares/authenticateUser.js";
import cors from 'cors'
const app = express();
app.use(express.json()); //poori app pe laga he
app.use(cors("*"))
//connect to database

mongoose.connect(process.env.MONGODB_URI).then(() => console.log("DB connected"))
  .catch((err) => console.log(err))

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use('/user', userRoutes)
app.use('/auth', authRoutes)
app.use('/task', authenticateUser, taskRoutes)


app.listen(process.env.PORT, () => console.log(`Server is running on PORT ${process.env.PORT}`));


//route=>request=>controllers=>service=>controller=>response

//route banta he request kya lye

//controller , =>req se data lena , data ko validate krna ,
// =>service , service se jo data return hota he wo
// => response mein chala jata he

//service   //=> database se saara jo kaam wo service mein krte hen