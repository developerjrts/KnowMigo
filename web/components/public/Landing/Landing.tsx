import { Box } from "@mui/material";
import Nav from "./Nav";
import HeroSection from "./HeroSection";
import Cards from "./Cards";
import Steps from "./Steps";

const Landing = () => {
  return (
    <Box>
      <Nav />
      <Box className="flex flex-col gap-2">
        <HeroSection />
        <Cards />
        <Steps />
      </Box>
    </Box>
  );
};

export default Landing;
