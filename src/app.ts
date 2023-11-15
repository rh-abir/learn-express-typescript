import express, { Request, Response } from "express";

const app = express();

// parser
app.use(express.json());
app.use(express.text());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello word!");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  //   res.send("got data");
  res.json({
    message: "succefully recive data",
  });
});

export default app;
