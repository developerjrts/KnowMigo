import React from "react";
import { Box, Card } from "@mui/material";
import { stepsCard } from "@/constants/card.constant";

const Steps = () => {
  return (
    <Box className="bg-white text-center p-10 flex flex-col gap-4">
      <p className="text-blue-500 font-bold">SIMPLE 3-STEPS PROCESS</p>
      <h1 className="text-5xl  font-bold text-[#002550]">
        Learning Is Better When It's <br className="md:block hidden" /> Shared.
      </h1>
      <p className="text-lg">
        Find peers who know what you want to learn—and offer what you know in{" "}
        <br />
        return. No complicated enrollments.
      </p>
      <Box className="grid text-left grid-cols-1 gap-6 md:grid-cols-3">
        {stepsCard.map((card, i) => {
          const Icon = card.icon;
          return (
            <Card
              key={i}
              sx={{
                backgroundColor: "#3b82f61a",
              }}
              className="bg-blue-800/15 p-10 flex flex-col gap-2 rounded-md"
            >
              <Box className="w-full flex justify-between items-center">
                <h1 className="text-3xl font-bold text-[#64748b]">0{i + 1}</h1>{" "}
                <p className="text-[#002550] w-fit bg-blue-500/10 p-2 rounded-md">
                  <Icon />
                </p>
              </Box>
              <h1 className="text-2xl font-bold text-[#002550]">
                {card.title}
              </h1>
              <p className="text-lg text-[#333]">{card.caption}</p>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default Steps;
