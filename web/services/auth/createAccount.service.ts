import api from "@/api/api";
import { isAxiosError } from "axios";
import toast from "react-hot-toast";

interface Parameters {
  user: {
    name: string;
    username: string;
    email: string;
    password: string;
  };
  setLoading: (value: boolean) => void;
}

const createAccount = async ({ user, setLoading }: Parameters) => {
  setLoading(true);
  try {
    const { data } = await api.post("/auth/register", user);

    if (data.status) {
      toast.success("Account created successfully!");
    } else {
      toast.error(
        data.message || "An error occurred while creating the account.",
      );
    }
  } catch (error) {
    console.log(error);
    if (isAxiosError(error)) {
      const errMessage = error.response?.data.message;
      toast.error(
        errMessage || "An error occurred while creating the account.",
      );
    }
  } finally {
    setLoading(false);
  }
};

export default createAccount;
