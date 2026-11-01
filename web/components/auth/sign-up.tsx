"use client";
import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Link,
  Button,
} from "@mui/material";
import Image from "next/image";
import studentsTwo from "@/assets/images/students-2.png";

const SignUp = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <Box className="min-h-screen flex p-2 md:p-10 items-center justify-center">
      <Card className="p-12 gap-20 flex flex-col w-full md:flex-row">
        <Box className="md:w-[50%] w-full flex flex-col gap-4">
          <Box>
            <h1 className="font-bold text-3xl md:text-4xl">
              Create your KnowMigo account
            </h1>
            <p className="text-[#43474F] text-md md:text-lg">
              Join a community where everyone has something to teach and
              something to learn.
            </p>
          </Box>
          <TextField
            label="Name"
            type="text"
            required={true}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
          />
          <TextField
            label="Email"
            type="email"
            required={true}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@university.edu"
          />
          <TextField
            label="Password"
            type="password"
            required={true}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your student password"
          />
          <Box className="flex items-center">
            <Checkbox defaultChecked />
            <Typography>
              I agree to the{" "}
              <Link
                className="cursor-pointer"
                sx={{
                  fontWeight: 700,
                }}
                href={"/terms"}
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                className="cursor-pointer"
                sx={{
                  fontWeight: 700,
                }}
                href={"/privacy"}
              >
                Privacy Policy
              </Link>
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{ textTransform: "none", fontSize: 20 }}
          >
            Create Account
          </Button>
          <p className="text-[#43474F] text-center">OR REGISTER WITH</p>
          <p className="text-[#43474F] text-center">
            Already have an account?{" "}
            <Link
              className="cursor-pointer"
              sx={{
                fontWeight: 700,
              }}
              href={"/auth/sign-in"}
            >
              Sign In
            </Link>
          </p>
        </Box>
        <Box className="w-[50%] hidden md:flex flex-col justify-center items-center">
          <Box>
            <h1 className="font-bold text-3xl md:text-4xl">
              Learn together. Grow together.
            </h1>
            <p className="text-[#43474F] text-md md:text-lg">
              Join a community where everyone has something to teach and
              something to learn.
            </p>
          </Box>
          <Image src={studentsTwo} alt="Student swaping skill" />
        </Box>
      </Card>
    </Box>
  );
};

export default SignUp;
