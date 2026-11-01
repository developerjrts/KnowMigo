"use client";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import Exchange from "@/assets/images/Exchange.png";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();

  return (
    <Box className="flex md:flex-row bg-white flex-col">
      <Box className="md:w-[50%] w-full p-10 flex flex-col gap-4">
        <p className="py-2 px-4 bg-blue-500/10 text-blue-500 rounded-lg w-fit">
          Your Skills. Someone Else's Superpower
        </p>
        <h1 className="text-5xl font-bold text-[#002550]">
          Don't Just Learn Skills. <br />
          <span className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Exchange Them.
          </span>
        </h1>
        <p className="text-xl">
          Teach what you know. Learn what you don't. Connect with driven
          students across campuses and turn your unique capabilities into
          collaborative opportunities—without tuition friction.
        </p>
        <Box className="flex md:flex-row flex-col gap-4">
          <Button
            sx={{
              textTransform: "none",
            }}
            onClick={() => router.push("/auth/sign-up")}
            variant="contained"
          >
            Start Exchanging Skills
          </Button>
          <Button
            sx={{
              textTransform: "none",
            }}
            variant="outlined"
          >
            Explore How it Works
          </Button>
        </Box>
      </Box>
      <Box className="md:w-[50%] w-full">
        <Image src={Exchange} alt="Exchange" />
      </Box>
    </Box>
  );
};

export default HeroSection;
