import emailjs from "@emailjs/nodejs";

const sendVerificationEmail = async (
  to: string,
  name: string,
  verificationLink: string,
): Promise<any> => {
  try {
    const params = {
      email: to,
      to_name: name,

      app_name: "KnowMigo",
      app_email: process.env.APP_SUPPORT_EMAIL!,
      website_link: process.env.CLIENT_URL!,
      verification_link: verificationLink,
      expiry_time: "5 minutes",
      current_year: new Date().getFullYear().toString(),
    };

    console.log(params);

    const response = await emailjs.send(
      process.env.EMAILJS_SERVICEID!,
      process.env.VERIFY_EMAIL_TEMPLATEID!,
      params,
      {
        publicKey: process.env.EMAILJS_PUBLICKEY!,
        privateKey: process.env.EMAILJS_PRIVATEKEY!,
      },
    );

    console.log("Recipient:", to);

    return response;
  } catch (error) {
    console.error("Verification email failed:", error);
    throw error;
  }
};

export default sendVerificationEmail;
