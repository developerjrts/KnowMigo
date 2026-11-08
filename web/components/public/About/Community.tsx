import { Box, Card } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import React from "react";
import { communityCard } from "@/constants/card.constant";

const Community = () => {
  return (
    <Box className="text-center p-10 flex flex-col gap-4">
      <Box className="flex justify-center items-center">
        <p className="text-blue-500 flex flex-row items-center justify-center gap-2 w-fit py-2 px-4 rounded-full bg-blue-500/10 font-bold">
          <GroupsIcon />
          Peer Ecosystem
        </p>
      </Box>
      <h1 className="text-5xl  font-bold text-[#002550]">
        Different Skills. Different Perspectives. One Community.
      </h1>
      <p className="text-lg">
        KnowMigo brings together curious minds from different colleges,
        backgrounds, and areas of expertise. Together, they create an
        environment where sharing knowledge becomes a natural part of learning.
      </p>
      <Box className="grid text-left grid-cols-1 gap-10 md:grid-cols-3">
        {communityCard.map((card, i) => {
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
              <Box className="w-full flex flex-col gap-2">
                <h1 className="text-md bg-blue-500/20 w-fit rounded-full py-2 px-4 font-bold text-[#002550]">
                  {card.title}
                </h1>
                <p className="text-lg text-[#333]">{card.caption}</p>
              </Box>
              <p className="text-[#002550] h-fit w-fit bg-blue-500/10 p-2 rounded-md">
                <Icon />
              </p>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default Community;
