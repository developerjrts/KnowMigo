"use client";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import Exchange from "@/assets/images/Exchange.png";
import { useRouter } from "next/navigation";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";

const HeroSection = () => {
  return (
    <Box className="flex flex-col md:flex-row bg-gradient-to-r from-[#3b82f61a] via-gray-100 to-white text-[#222]">
      <Box className="md:w-[50%] w-full p-10 flex flex-col gap-4">
        <p className="py-2 px-4 bg-blue-500/10 text-blue-500 flex gap-2 rounded-lg w-fit">
          <AutoAwesomeIcon />
          About K N O W M I G O
        </p>
        <h1 className="text-5xl font-bold text-[#002550]">
          We Believe Knowledge <br />
          <span className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Grows When It's Shared.
          </span>
        </h1>
        <p className="text-xl">
          KnowMigo was built around a simple belief: everyone has something
          valuable to teach, and everyone deserves the opportunity to learn. We
          bring students together to exchange skills, share knowledge, and grow
          through meaningful collaboration.
        </p>
        <Box className="flex md:flex-row flex-col gap-4">
          <Button
            sx={{
              textTransform: "none",
            }}
            onClick={() => {
              document
                .getElementById("mission")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            variant="contained"
          >
            Our Mission
            <ArrowDownwardRoundedIcon />
          </Button>
          <Button
            sx={{
              textTransform: "none",
            }}
            variant="outlined"
          >
            Explore skills
          </Button>
        </Box>
        <p className="flex justiy-center gap-2 text-[#444] font-bold">
          <TaskAltOutlinedIcon className="text-blue-500" />
          Built for curious university minds across Indian campuses
        </p>
      </Box>
      <Box className="md:w-[50%] flex justify-center items-center w-full">
        <Image src={Exchange} alt="Exchange" />
      </Box>
    </Box>
  );
};

export default HeroSection;
