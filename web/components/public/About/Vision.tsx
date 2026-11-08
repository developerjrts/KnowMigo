import React from "react";
import { Box, Card } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { visionCard } from "@/constants/card.constant";

const Vision = () => {
  return (
    <Box className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 flex flex-col gap-4 p-10">
      <Box className="flex flex-col gap-2 w-full md:w-[40%]">
        <p className="text-white flex flex-row gap-2 w-fit py-2 px-4 rounded-full bg-blue-500/10 font-bold">
          <VisibilityOutlinedIcon />
          Looking Ahead
        </p>
        <h1 className="text-5xl  font-bold text-[#FFF]">Our Vision</h1>
        <p className="text-xl text-gray-300">
          To build a connected learning ecosystem where every individual can
          contribute knowledge, discover new abilities, and grow together
          without boundaries.
        </p>
      </Box>
      <Box className="grid text-left grid-cols-1 gap-10 md:grid-cols-3">
        {visionCard.map((card, i) => {
          const Icon = card.icon;
          return (
            <Card
              key={i}
              sx={{
                backgroundColor: "#FFF",
                transition: "transform 200ms linear",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
              className="bg-blue-800/15 p-6 flex flex-col gap-6 rounded-md"
            >
              <p className="text-[#002550] h-fit w-fit bg-blue-500/20 p-2 rounded-md">
                <Icon />
              </p>
              <Box className="w-full flex flex-col gap-2">
                <h1 className="text-2xl font-bold text-[#002550]">
                  {card.title}
                </h1>
                <p className="text-lg text-[#333]">{card.caption}</p>
              </Box>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default Vision;
