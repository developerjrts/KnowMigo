import createRouter from "../utils/create.router.js";
import * as authController from "../controllers/auth.controller.js";

const authRouter = createRouter();

authRouter.route("/register").post(authController.signUp);
authRouter.route("/login").post(authController.signIn);

export default authRouter;
