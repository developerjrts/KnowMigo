import { Box, Card } from "@mui/material";
import React from "react";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import { accountabilityCard } from "@/constants/card.constant";

const Accountability = () => {
  return (
    <Box className="text-center p-10 flex flex-col gap-4">
      <Box className="flex justify-center items-center">
        <p className="text-blue-500 flex flex-row items-center justify-center gap-2 w-fit py-2 px-4 rounded-full bg-blue-500/10 font-bold">
          <VerifiedUserOutlinedIcon />
          Accountability
        </p>
      </Box>
      <h1 className="text-5xl  font-bold text-[#002550]">
        Building a Better Way to Learn Together
      </h1>
      <p className="text-lg">
        Our three foundational commitments to safe and high-quality peer
        learning.
      </p>
      <Box className="grid text-left grid-cols-1 gap-10 md:grid-cols-3">
        {accountabilityCard.map((card, i) => {
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

export default Accountability;
