"use client";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import {
  MarkEmailReadRounded,
  ArrowBackRounded,
  VerifiedRounded,
  ErrorOutlineRounded,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import verifyEmail from "@/services/auth/verify.service";

type VerificationStatus = "loading" | "success" | "error";

const Verify = () => {
  const [status, setStatus] = useState<VerificationStatus>("loading");

  const searchParams = useSearchParams();
  const verification_session = searchParams.get("verification_session");

  useEffect(() => {
    if (!verification_session) {
      return;
    }
    verifyEmail({ verification_session, setStatus });
  }, []);

  return (
    <Box className="min-h-screen flex items-center justify-center bg-[#EAF6FC] px-4 py-10 relative overflow-hidden">
      <Box className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#45B8E8]/10 blur-3xl" />
      <Box className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#21A67A]/10 blur-3xl" />

      <Box className="relative w-full max-w-md">
        <Box className="text-center mb-8">
          <Typography
            variant="h4"
            sx={{ color: "#123B70", fontWeight: 800, letterSpacing: "-1px" }}
          >
            Know<span className="text-[#2563EB]">Migo</span>
          </Typography>

          <Typography variant="body2" sx={{ color: "#64748B", mt: 0.5 }}>
            Learn together. Grow together.
          </Typography>
        </Box>

        <Box className="bg-white rounded-3xl shadow-xl shadow-[#123B70]/10 border border-[#DCEBF5] p-7 sm:p-9 text-center">
          <Box className="flex justify-center mb-7">
            <Box
              className="w-24 h-24 rounded-full flex items-center justify-center"
              sx={{
                bgcolor:
                  status === "success"
                    ? "#DCFCE7"
                    : status === "error"
                      ? "#FEE2E2"
                      : "#EAF6FC",
              }}
            >
              {status === "loading" && (
                <MarkEmailReadRounded sx={{ fontSize: 48, color: "#123B70" }} />
              )}

              {status === "success" && (
                <VerifiedRounded sx={{ fontSize: 52, color: "#21A67A" }} />
              )}

              {status === "error" && (
                <ErrorOutlineRounded sx={{ fontSize: 52, color: "#DC2626" }} />
              )}
            </Box>
          </Box>

          {status === "loading" && (
            <>
              <Typography
                variant="h5"
                sx={{ fontWeight: 800, color: "#123B70", mb: 1.5 }}
              >
                Verifying your email
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "#64748B", lineHeight: 1.8, mb: 4 }}
              >
                Please wait while we verify your email address and activate your
                KnowMigo account. This will only take a moment.
              </Typography>

              <CircularProgress
                size={30}
                thickness={4}
                sx={{ color: "#2563EB" }}
              />

              <Typography
                variant="caption"
                sx={{ display: "block", color: "#94A3B8", mt: 2 }}
              >
                Please don't close this page.
              </Typography>
            </>
          )}

          {status === "success" && (
            <>
              <Typography
                variant="h5"
                sx={{ fontWeight: 800, color: "#123B70", mb: 1.5 }}
              >
                Email verified!
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "#64748B", lineHeight: 1.8, mb: 4 }}
              >
                Your email address has been successfully verified. Your KnowMigo
                account is now ready to use.
              </Typography>

              <Button
                variant="contained"
                fullWidth
                endIcon={<ArrowBackRounded />}
                sx={{
                  bgcolor: "#123B70",
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 700,
                  textTransform: "none",
                  "&:hover": { bgcolor: "#2563EB" },
                }}
              >
                Continue to Sign In
              </Button>
            </>
          )}

          {status === "error" && (
            <>
              <Typography
                variant="h5"
                sx={{ fontWeight: 800, color: "#123B70", mb: 1.5 }}
              >
                Verification failed
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "#64748B", lineHeight: 1.8, mb: 4 }}
              >
                This verification link may have expired or already been used.
                Please request a new verification email.
              </Typography>

              <Button
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: "#123B70",
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 700,
                  textTransform: "none",
                  "&:hover": { bgcolor: "#2563EB" },
                }}
              >
                Back to Sign In
              </Button>
            </>
          )}
        </Box>

        <Typography
          variant="caption"
          className="block text-center"
          sx={{ color: "#94A3B8", mt: 4 }}
        >
          © {new Date().getFullYear()} KnowMigo. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Verify;
