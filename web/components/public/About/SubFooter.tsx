"use client";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const SubFooter = () => {
  const router = useRouter();

  return (
    <Box className="md:p-10 p-4">
      <Box className="md:p-16 p-6 flex flex-col gap-4 rounded-md bg-gradient-to-r from-blue-800 via-blue-700 to-blue-500">
        <h1 className="md:w-[60%] text-white font-bold text-3xl md:text-5xl">
          Your Knowledge Has Value. Share It.
        </h1>
        <p className="text-xl md:text-2xl md:w-[75%] text-gray-300">
          Join a community where your skills can help someone grow, and someone
          else's knowledge can help you grow too. Experience education as it
          should be—collaborative, accessible, and human.
        </p>
        <Box className="flex flex-col gap-2 md:flex-row">
          <Button
            variant="contained"
            onClick={() => router.push("/auth/sign-up")}
            sx={{
              textTransform: "none",
              backgroundColor: "#FFF",
              color: "#002550",
            }}
          >
            Become a part of KnowMigo
          </Button>
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              border: "1px solid #FFF",
              color: "#FFF",
            }}
          >
            Explore Skills
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SubFooter;
