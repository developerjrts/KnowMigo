"use client";
import logoWithText from "@/assets/images/logo-with-text.png";
import { AppBar, Avatar, IconButton, Toolbar } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();

  return (
    <AppBar position="static" sx={{ boxShadow: "none" }}>
      <Toolbar
        sx={{ backgroundColor: "#FFF" }}
        className="flex items-center justify-between"
      >
        <Image
          src={logoWithText}
          alt="Logo"
          className="w-[100px] cursor-pointer"
          onClick={() => router.push("/dashboard")}
        />

        <IconButton>
          <Avatar />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
