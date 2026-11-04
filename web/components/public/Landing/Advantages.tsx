import { Box, Card } from "@mui/material";
import { advantagesCard } from "@/constants/card.constant";

const Advantages = () => {
  return (
    <Box className="text-center p-10 flex flex-col gap-4">
      <p className="text-blue-500 font-bold">THE KNOWMIGO ADVANTAGES</p>
      <h1 className="text-5xl  font-bold text-[#002550]">
        A Different Way to Grow Your <br className="md:block hidden" /> Skills.
      </h1>
      <p className="text-lg">
        Find peers who know what you want to learn—and offer what you know in{" "}
        <br />
        return. No complicated enrollments.
      </p>
      <Box className="grid text-left grid-cols-1 gap-10 md:grid-cols-2">
        {advantagesCard.map((card, i) => {
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

export default Advantages;
