import jwt from "jsonwebtoken";

const createSessionCode = (id: string) => {
  const session_code = jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: "30d",
  });
  return session_code;
};

export default createSessionCode;
