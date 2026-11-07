import jwt from "jsonwebtoken";

const createVerificationToken = (id: string) => {
  const verification_token = jwt.sign(
    { id },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "5m",
    },
  );
  return verification_token;
};

export default createVerificationToken;
