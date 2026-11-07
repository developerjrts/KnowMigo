import { Box, Card } from "@mui/material";
import { missionCard } from "@/constants/card.constant";
import ExploreIcon from "@mui/icons-material/Explore";

const Mission = () => {
  return (
    <Box id="mission" className="text-center p-10 flex flex-col gap-4">
      <Box className="flex justify-center items-center">
        <p className="text-blue-500 flex flex-row items-center justify-center gap-2 w-fit py-2 px-4 rounded-full bg-blue-500/10 font-bold">
          <ExploreIcon />
          Our Purpose
        </p>
      </Box>
      <h1 className="text-5xl  font-bold text-[#002550]">Our Mission</h1>
      <p className="text-lg">
        To make skill exchange accessible to every student by building a
        collaborative community where knowledge is shared, skills are{" "}
        <br className="md:block hidden" />
        strengthened, and opportunities are created through peer-to-peer
        learning.
      </p>
      <Box className="grid text-left grid-cols-1 gap-10 md:grid-cols-4">
        {missionCard.map((card, i) => {
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

export default Mission;
