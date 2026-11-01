"use client";
import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import logoWithText from "@/assets/images/logo-with-text.png";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    // {
    //     title: "About",
    //     path: "/about"
    // },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          backgroundColor: "#FFF",
        }}
        className="flex items-center justify-between"
      >
        <Image src={logoWithText} alt="Logo" className="w-[100px]" />

        <Box className="md:flex hidden items-center justify-center gap-6">
          {links.map((link, i) => {
            const isActive = pathname === link.path;

            return (
              <a
                key={i}
                href={link.path}
                className={`${isActive ? "bg-blue-500/10 text-blue-500 font-semibold py-2 px-4 rounded-md" : "hover:bg-blue-500/10 py-2 px-4 rounded-md transition duration-300"} text-blue-500`}
              >
                {link.title}
              </a>
            );
          })}
        </Box>

        <Button
          variant="contained"
          sx={{
            textTransform: "none",
          }}
          onClick={() => router.push("/auth/sign-up")}
        >
          Get Started
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
