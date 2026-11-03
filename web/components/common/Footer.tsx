import Logo from "@/assets/images/logo-with-text.png";
import { Box } from "@mui/material";
import Image from "next/image";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  return (
    <Box className="bg-white border-t border-t-gray-400 ">
      <Box className="flex md:flex-row flex-col justify-between p-14 gap-10">
        <Box className="flex max-w-[500px] flex-col gap-4">
          <Image src={Logo} alt="Logo" className="w-50" />
          <p className="text-lg">
            A peer-to-peer skill exchange platform connecting university
            students across campuses to trade knowledge, accelerate learning,
            and build community.
          </p>
        </Box>

        <Box className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-xl font-bold text-[#002550]">Account</h1>
          <Box className="flex flex-col gap-1 text-center">
            <a
              className="text-[#222] text-lg no-underline"
              href="/auth/sign-in"
            >
              Sign In
            </a>
            <a href="/auth/sign-up">Create Account</a>
          </Box>
        </Box>

        <Box className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-xl font-bold text-[#002550]">Legal & Social</h1>
          <Box className="flex flex-col gap-1 text-center">
            <a className="text-[#222] text-lg no-underline" href="/privacy">
              Sign In
            </a>
            <a className="text-[#222] text-lg no-underline" href="/terms">
              Create Account
            </a>
          </Box>
        </Box>
      </Box>
      <Box className="flex md:flex-row flex-col gap-3 justify-between p-10">
        <Box>
          <p className="text-lg text-[#222]">
            © 2026 KnowMigo. All rights reserved.
          </p>
          <a
            className="flex gap-1 text-lg items-center text-[#222] no-underline"
            href="mailto:developer.jrts@gmail.com"
          >
            <MailIcon />
            developer.jrts@gmail.com
          </a>
        </Box>
        <p className="text-lg text-[#222]">
          Connecting peer learners everywhere.
        </p>
      </Box>
    </Box>
  );
};

export default Footer;
