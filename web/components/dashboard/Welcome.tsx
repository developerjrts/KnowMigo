"use client";

import { Box, Button, Card, Typography } from "@mui/material";
import PersonSearchRoundedIcon from "@mui/icons-material/PersonSearchRounded";
import AddTaskRoundedIcon from "@mui/icons-material/AddTaskRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

const Welcome = () => {
  const pendingRequests = 2;

  return (
    <Card
      elevation={0}
      sx={{
        width: "100%",
        borderRadius: 4,
        border: "1px solid #DBEAFE",
        background:
          "linear-gradient(115deg, #FFFFFF 0%, #F0F6FF 65%, #E8F1FF 100%)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 p-6 md:p-9">
        <Box className="flex flex-col gap-3 max-w-2xl z-10">
          <Box className="flex items-center gap-2">
            <AutoAwesomeRoundedIcon sx={{ color: "#2563EB", fontSize: 19 }} />
            <Typography
              sx={{
                color: "#2563EB",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              Your learning journey
            </Typography>
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 750,
              color: "#123B70",
              letterSpacing: "-0.8px",
              fontSize: { xs: 25, md: 32 },
            }}
          >
            Welcome back, Rutik 👋
          </Typography>

          <Typography
            sx={{
              color: "#64748B",
              fontSize: { xs: 14, md: 16 },
              lineHeight: 1.8,
              maxWidth: 570,
            }}
          >
            Every skill has a story. Share what you know, discover something
            new, and grow together with your learning community.
          </Typography>

          <Box
            className="flex items-center gap-2 mt-2 w-fit rounded-xl px-3 py-2"
            sx={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #DBEAFE",
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: "#F59E0B",
              }}
            />

            <Typography sx={{ fontSize: 13, color: "#475569" }}>
              You have{" "}
              <Box component="span" sx={{ fontWeight: 700, color: "#123B70" }}>
                {pendingRequests} pending requests
              </Box>{" "}
              to review
            </Typography>

            <ArrowForwardRoundedIcon sx={{ fontSize: 16, color: "#2563EB" }} />
          </Box>
        </Box>

        <Box className="flex flex-col gap-3 w-full md:w-auto z-10">
          <Button
            variant="contained"
            endIcon={<ArrowForwardRoundedIcon />}
            startIcon={<PersonSearchRoundedIcon />}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              fontSize: 14,
              borderRadius: 2.5,
              py: 1.5,
              px: 3,
              minWidth: 215,
              boxShadow: "0 4px 12px rgba(37,99,235,0.18)",
              backgroundColor: "#2563EB",
              "&:hover": {
                backgroundColor: "#1D4ED8",
                boxShadow: "0 6px 16px rgba(37,99,235,0.25)",
              },
            }}
          >
            Find Learning Partner
          </Button>

          <Button
            variant="outlined"
            startIcon={<AddTaskRoundedIcon />}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              fontSize: 14,
              borderRadius: 2.5,
              py: 1.5,
              px: 3,
              minWidth: 215,
              color: "#123B70",
              borderColor: "#BFDBFE",
              backgroundColor: "#FFFFFF",
              "&:hover": {
                borderColor: "#2563EB",
                backgroundColor: "#EFF6FF",
              },
            }}
          >
            Offer New Skill
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          width: 220,
          height: 220,
          borderRadius: "50%",
          border: "35px solid rgba(37,99,235,0.035)",
          right: { xs: -130, md: 160 },
          top: -120,
          pointerEvents: "none",
        }}
      />
    </Card>
  );
};

export default Welcome;
