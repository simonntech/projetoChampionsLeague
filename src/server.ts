import express, {json, Request, Response} from "express";

const app = express();
const port = process.env.PORT;

//midleware para configurar requisição JSON
app.use(json());

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ player: "Tsubasa"});
});

app.listen(port, () => {
    console.log(`💜 Server running at http://localhost:${port}`);
});