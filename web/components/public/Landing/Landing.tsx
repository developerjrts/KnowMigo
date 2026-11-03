import { Box } from "@mui/material";
import Cards from "./Cards";
import HeroSection from "./HeroSection";
import Steps from "./Steps";

const Landing = () => {
  return (
    <Box className="flex flex-col gap-2">
      <HeroSection />
      <Cards />
      <Steps />
    </Box>
  );
};

export default Landing;
