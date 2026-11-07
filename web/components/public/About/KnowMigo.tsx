import React from "react";
import { Box } from "@mui/material";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";

const KnowMigo = () => {
  return (
    <Box className="bg-white flex gap-4 md:gap-10 md:flex-row flex-col p-10">
      <Box className="flex flex-col gap-2 w-full md:w-[40%]">
        <p className="text-blue-500 flex flex-row gap-2 w-fit py-2 px-4 rounded-full bg-blue-500/10 font-bold">
          <TipsAndUpdatesIcon />
          Our Origin
        </p>
        <h1 className="text-5xl  font-bold text-[#002550]">
          The Idea Behind KnowMigo
        </h1>
        <p className="text-lg bg-blue-500/10 p-4 flex flex-col gap-2 rounded-md">
          <FormatQuoteRoundedIcon
            className="text-blue-500"
            sx={{
              fontSize: 42,
            }}
          />
          "Learning doesn't always need to happen inside a classroom. True
          mastery ignites when two peers sit down to solve a problem together."
        </p>
      </Box>
      <Box className="flex w-full md:w-[60%] flex-col gap-6 ">
        <p className="text-lg">
          Every student develops different skills through coursework, personal
          interests, late-night hackathons, and real projects. One student may
          understand backend system architecture and database index tuning,
          while another excels at interactive product prototyping or public
          communication.
        </p>
        <p className="text-lg">
          Yet opportunities for students to learn directly from one another are
          often limited by institutional boundaries, departmental silos, and
          disconnected campus circles. Expensive private coaching platforms
          prioritize commercial transactions over pure learning curiosity.
        </p>
        <Box className="bg-blue-500/10 flex flex-col gap-2 rounded-xl p-4">
          <h1 className="text-[#002550] text-2xl font-bold">
            The Campus Knowledge Network
          </h1>
          <p className="text-lg">
            KnowMigo changes this equation. We created an open exchange where
            students connect beyond their colleges, offer what they have
            mastered, discover what they want to learn, and grow together
            without monetary gatekeepers.
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default KnowMigo;
