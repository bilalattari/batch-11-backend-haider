import express from "express";

const app = express();
const PORT = 4000;

function middleware(req, res, next) {
  next();
}

app.get("/", middleware, (req, res) => {
  console.log("req.accepted=>");
  res.send("Seeing to First API!");
});

app.get("/:id", (req, res) => {
  console.log(req.query);
  res.send("Product id is" + req.params.id);
});

app.listen(PORT, () => console.log(`Server is runnong on PORT ${PORT}`));
