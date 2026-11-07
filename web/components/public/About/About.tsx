import { Box } from "@mui/material";
import HeroSection from "./HeroSection";
import Mission from "./Mission";
import KnowMigo from "./KnowMigo";

const About = () => {
  return (
    <Box className="flex flex-col">
      <HeroSection />
      <KnowMigo />
      <Mission />
    </Box>
  );
};

export default About;
