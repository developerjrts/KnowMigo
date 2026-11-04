import { Box } from "@mui/material";
import Cards from "./Cards";
import HeroSection from "./HeroSection";
import Steps from "./Steps";
import Advantages from "./Advantages";

const Landing = () => {
  return (
    <Box className="flex flex-col gap-2">
      <HeroSection />
      <Cards />
      <Steps />
      <Advantages />
    </Box>
  );
};

export default Landing;
