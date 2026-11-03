import React from "react";
import { detailCards } from "@/constants/card.constant";
import { Box, Card } from "@mui/material";

const Cards = () => {
  return (
    <Box className="grid gap-6 md:grid-cols-4 text-[#222] grid-cols-1 p-10">
      {detailCards.map((card, i) => {
        const Icon = card.icon;

        return (
          <Card key={i} className="p-4 flex flex-col gap-2 rounded-3xl">
            <p className="text-blue-500 w-fit bg-blue-500/10 p-2 rounded-md">
              <Icon />
            </p>
            <h1 className="text-2xl font-medium">{card.title}</h1>
            <p className="text-lg">{card.caption}</p>
          </Card>
        );
      })}
    </Box>
  );
};

export default Cards;
