import React from "react";
import { Box, Card } from "@mui/material";
import { valuesCard } from "@/constants/card.constant";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Values = () => {
  return (
    <Box className="text-center p-10 flex flex-col gap-4">
      <Box className="flex justify-center items-center">
        <p className="text-blue-500 flex flex-row items-center justify-center gap-2 w-fit py-2 px-4 rounded-full bg-blue-500/10 font-bold">
          <FavoriteBorderOutlinedIcon />
          Our Purpose
        </p>
      </Box>
      <h1 className="text-5xl  font-bold text-[#002550]">
        The Values We Build On
      </h1>
      <p className="text-lg">
        The core tenets that guide every interaction on KnowMigo.
      </p>
      <Box className="grid text-left grid-cols-1 gap-10 md:grid-cols-2">
        {valuesCard.map((card, i) => {
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
              className="bg-blue-800/15 p-6 flex flex-row gap-6 rounded-md"
            >
              <p className="text-[#002550] h-fit w-fit bg-blue-500/10 p-2 rounded-md">
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

export default Values;
