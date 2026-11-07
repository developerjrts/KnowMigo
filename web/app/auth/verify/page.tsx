import { Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import Verify from "@/components/auth/verify";

const VerifyPage = () => {
  return (
    <Suspense
      fallback={
        <Box className="min-h-screen flex items-center justify-center bg-[#EAF6FC]">
          <CircularProgress sx={{ color: "#123B70" }} />
        </Box>
      }
    >
      <Verify />
    </Suspense>
  );
};

export const metadata = {
  title: "Verify KnowMigo Account",
  description: "Verify your email address to activate your KnowMigo account.",
};

export default VerifyPage;
