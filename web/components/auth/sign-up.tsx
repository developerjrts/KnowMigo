"use client";
import studentsTwo from "@/assets/images/students-2.png";
import createAccount from "@/services/auth/createAccount.service";
import {
  Box,
  Button,
  Card,
  Checkbox,
  CircularProgress,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import SignUpComplete from "../dialog/SignUpComplete";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  return (
    <Box className="min-h-screen flex p-4 items-center justify-center">
      <Card className="p-12 gap-20 flex flex-col w-full md:flex-row">
        <Box className="md:w-[40%] w-full flex flex-col gap-4">
          <Box>
            <h1 className="font-bold text-3xl md:text-4xl">
              Create your KnowMigo account
            </h1>
            <p className="text-[#43474F] text-md md:text-lg">
              Join a community where everyone has something to teach and
              something to learn.
            </p>
          </Box>
          <Box className="flex gap-4 md:flex-row flex-col">
            <TextField
              label="Name"
              type="text"
              value={user.name}
              required={true}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              placeholder="Enter your full name"
            />
            <TextField
              label="Username"
              type="username"
              value={user.username}
              required={true}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="Create your username"
            />
          </Box>
          <TextField
            label="Email"
            value={user.email}
            type="email"
            required={true}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="name@university.edu"
          />
          <TextField
            label="Password"
            type="password"
            required={true}
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Create a strong password"
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
            disabled={loading}
            sx={{ textTransform: "none", fontSize: 20 }}
            onClick={() => createAccount({ user, setOpen, setLoading })}
          >
            {loading ? (
              <Box className="flex items-center justify-center gap-2">
                <CircularProgress size={24} />
                <span>Creating Account...</span>
              </Box>
            ) : (
              "Create Account"
            )}
          </Button>
          <p className="text-[#43474F] text-center">OR</p>
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
        <Box className="w-[60%] hidden md:flex flex-col justify-center items-center">
          <Image src={studentsTwo} alt="Student swaping skill" />
        </Box>
      </Card>
      <SignUpComplete
        open={open}
        email={user.email}
        onClose={() => setOpen(false)}
      />
    </Box>
  );
};

export default SignUp;
