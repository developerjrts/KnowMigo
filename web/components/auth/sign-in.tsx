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
  CircularProgress,
} from "@mui/material";
import Image from "next/image";
import students from "@/assets/images/students.png";
import signIn from "@/services/auth/signIn.service";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  return (
    <Box className="min-h-screen flex p-2 md:p-10 items-center justify-center">
      <Card className="p-12 gap-20 flex flex-col w-full md:flex-row">
        <Box className="md:w-[40%] w-full flex flex-col gap-4">
          <Box>
            <h1 className="font-bold text-3xl md:text-4xl">Welcome Back!</h1>
            <p className="text-[#43474F] text-md md:text-lg">
              Continue your peer learning journey and collaborate with fellow
              students across campuses.
            </p>
          </Box>
          <TextField
            label="Username"
            type="text"
            required={true}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Enter your username"
          />
          <TextField
            label="Password"
            type="password"
            required={true}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Enter your student password"
          />
          {/* <Link
            className="text-right cursor-pointer"
            sx={{
              fontWeight: 700,
            }}
          >
            Forgot password?
          </Link> */}
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Stay signed in on this device"
          />
          <Button
            variant="contained"
            disabled={loading}
            sx={{ textTransform: "none", fontSize: 20 }}
            onClick={() => signIn({ user, setLoading })}
          >
            {loading ? (
              <Box className="flex items-center justify-center gap-2">
                <CircularProgress size={24} />
                <span>Signing in...</span>
              </Box>
            ) : (
              "Sign In to learning space"
            )}
          </Button>
          <p className="text-[#43474F] text-center">OR</p>
          <p className="text-[#43474F] text-center">
            New to peer exchange?{" "}
            <Link
              className="cursor-pointer"
              sx={{
                fontWeight: 700,
              }}
              href={"/auth/sign-up"}
            >
              Create an Account
            </Link>
          </p>
        </Box>
        <Box className="w-[60%] hidden md:flex justify-center items-center">
          <Image src={students} alt="Student swaping skill" />
        </Box>
      </Card>
    </Box>
  );
};

export default SignIn;
