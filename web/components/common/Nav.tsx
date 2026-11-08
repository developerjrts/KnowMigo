"use client";
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
} from "@mui/material";
import logoWithText from "@/assets/images/logo-with-text.png";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "How it works", path: "/working" },
];

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DrawerNav = ({ open, setOpen }: Props) => {
  const pathname = usePathname();

  const handleClose = () => setOpen(false);

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={handleClose}
      slotProps={{
        paper: {
          sx: {
            width: "280px",
            maxWidth: "100vw",
            padding: 3,
            display: "flex",
            flexDirection: "column",
          },
        },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
        <IconButton onClick={handleClose} aria-label="close drawer">
          <CloseIcon />
        </IconButton>
      </Box>

      <Box className="flex flex-col gap-3">
        {links.map((link, i) => {
          const isActive = pathname === link.path;

          return (
            <Link
              key={i}
              href={link.path}
              onClick={handleClose}
              className={`text-lg py-3 px-4 rounded-xl transition-all duration-200 block ${
                isActive
                  ? "bg-blue-500/10 font-bold text-blue-600"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {link.title}
            </Link>
          );
        })}
      </Box>
    </Drawer>
  );
};

const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

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
          onClick={() => router.push("/")}
        />

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

        <IconButton
          onClick={() => setOpen(!open)}
          sx={{
            display: { md: "none", xs: "block" },
          }}
        >
          <MenuIcon />
        </IconButton>

        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            display: { md: "block", xs: "none" },
          }}
          onClick={() => router.push("/auth/sign-up")}
        >
          Get Started
        </Button>
        <DrawerNav open={open} setOpen={setOpen} />
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
