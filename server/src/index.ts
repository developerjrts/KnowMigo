import "dotenv/config";
import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import connectDB from "./configs/db.js";
import cors from "cors";
import router from "./router/router.js";

const app: Application = express();
const port: Number = Number(process.env.PORT);

app.use(
  cors({
    origin: ["http://localhost:3000", "https://knowmigo.vercel.app"],
    credentials: true,
  }),
);
app.use(express.json());
app.use("/api", router);

app.use((req: Request, res: Response) => {
  res.status(404).json({
    message: "Page not found",
    status: false,
  });
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

startServer();
