import express from "express";
import userRoutes from './routes/user.js'
import mongoose from "mongoose";
const app = express();
const PORT = 4000;
app.use(express.json()); //poori app pe laga he

//connect to database

mongoose.connect('mongodb+srv://bilal:bilal@cluster0.hw5owlh.mongodb.net/test').then(() => console.log("DB connected"))
  .catch((err) => console.log(err))

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use('/user', userRoutes)


app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));


//route=>request=>controllers=>service=>controller=>response

//route banta he request kya lye

//controller , =>req se data lena , data ko validate krna ,
// =>service , service se jo data return hota he wo
// => response mein chala jata he

//service   //=> database se saara jo kaam wo service mein krte hen