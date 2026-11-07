import api from "@/api/api";
import { isAxiosError } from "axios";
import toast from "react-hot-toast";

interface params {
  verification_session: string;
  setStatus: (value: "loading" | "success" | "error") => void;
}

const verifyEmail = async ({ verification_session, setStatus }: params) => {
  try {
    const { data } = await api.post(
      `/auth/verify?verification_session=${verification_session}`,
    );
    setStatus("success");
    toast.success(data.message);
  } catch (error) {
    console.log(error);
    if (isAxiosError(error)) {
      const errMessage =
        error.response?.data?.message || "Something went wrong.";
      toast.error(errMessage);
      setStatus("error");
      throw new Error(errMessage);
    }
  }
};

export default verifyEmail;
