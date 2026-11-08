import { Box } from "@mui/material";
import HeroSection from "./HeroSection";
import Mission from "./Mission";
import KnowMigo from "./KnowMigo";
import Vision from "./Vision";
import Values from "./Values";
import Community from "./Community";
import Accountability from "./Accountability";
import SubFooter from "./SubFooter";

const About = () => {
  return (
    <Box className="flex flex-col">
      <HeroSection />
      <KnowMigo />
      <Mission />
      <Vision />
      <Values />
      <Community />
      <Accountability />
      <SubFooter />
    </Box>
  );
};

export default About;
