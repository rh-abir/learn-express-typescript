import express, { NextFunction, Request, Response } from "express";

const app = express();

// parser
app.use(express.json());
app.use(express.text());

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next();
};

app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello word!");
});

app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  //   res.send("got data");
  res.json({
    message: "succefully recive data",
  });
});

export default app;
