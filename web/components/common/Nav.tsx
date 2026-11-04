"use client";
import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import logoWithText from "@/assets/images/logo-with-text.png";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "How it works", path: "/working" },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <AppBar position="static" sx={{ boxShadow: "none" }}>
      <Toolbar
        sx={{ backgroundColor: "#FFF" }}
        className="flex items-center justify-between"
      >
        <Image src={logoWithText} alt="Logo" className="w-[100px]" />

        <Box className="md:flex hidden items-center justify-center gap-6">
          {links.map((link, i) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={i}
                href={link.path}
                className={`${
                  isActive
                    ? "bg-blue-500/10 font-semibold"
                    : "hover:bg-blue-500/10 transition duration-300"
                } text-blue-500 py-2 px-4 rounded-md`}
              >
                {link.title}
              </Link>
            );
          })}
        </Box>

        <Button
          variant="contained"
          sx={{ textTransform: "none" }}
          onClick={() => router.push("/auth/sign-up")}
        >
          Get Started
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
