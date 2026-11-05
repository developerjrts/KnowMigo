import createRouter from "../utils/create.router.js";
import authRouter from "./auth.router.js";

const router = createRouter();

router.use("/auth", authRouter);

export default router;
