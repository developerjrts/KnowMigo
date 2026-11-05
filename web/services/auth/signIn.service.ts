import api from "@/api/api";
import { isAxiosError } from "axios";
import toast from "react-hot-toast";

interface Parameters {
  user: {
    username: string;
    password: string;
  };
  setLoading: (value: boolean) => void;
}

const signIn = async ({ user, setLoading }: Parameters) => {
  setLoading(true);
  try {
    const { data } = await api.post("/auth/login", user);

    if (data.status) {
      toast.success("Signed in successfully!");
    } else {
      toast.error(data.message || "An error occurred while signing in.");
    }
  } catch (error) {
    console.log(error);
    if (isAxiosError(error)) {
      const errMessage = error.response?.data.message;
      toast.error(errMessage || "An error occurred while signing in.");
    }
  } finally {
    setLoading(false);
  }
};

export default signIn;
