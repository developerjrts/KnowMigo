"use client";

import {
  accountLinks,
  learningLinks,
  mainLinks,
} from "@/constants/links.constant";
import { Box, Card, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <Card
      elevation={0}
      className="h-full"
      sx={{
        width: 260,
        minWidth: 260,
        borderRadius: 0,
        bgcolor: "#FFFFFF",
        boxShadow: "none",
        overflowY: "scroll",
      }}
    >
      <Box className="px-4 py-2">
        <Typography
          variant="caption"
          sx={{
            color: "#9CA3AF",
            fontWeight: 700,
            letterSpacing: "1.2px",
            px: 1.5,
          }}
        >
          MAIN
        </Typography>

        <Box className="flex flex-col gap-1 mt-1">
          {mainLinks.map((link, i) => {
            const Icon = link.icon;
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.path || i}
                href={link.path}
                className="no-underline"
              >
                <Box
                  className="flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200"
                  sx={{
                    bgcolor: isActive ? "#EFF6FF" : "transparent",
                    color: isActive ? "#2563EB" : "#64748B",
                    "&:hover": {
                      bgcolor: "#F8FAFC",
                      color: "#2563EB",
                    },
                  }}
                >
                  <Icon />

                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: isActive ? 600 : 500,
                      color: "inherit",
                    }}
                  >
                    {link.title}
                  </Typography>

                  {isActive && (
                    <Box
                      className="ml-auto rounded-full"
                      sx={{
                        width: 6,
                        height: 6,
                        bgcolor: "#2563EB",
                      }}
                    />
                  )}
                </Box>
              </Link>
            );
          })}
        </Box>
      </Box>
      <Box className="px-4 py-2">
        <Typography
          variant="caption"
          sx={{
            color: "#9CA3AF",
            fontWeight: 700,
            letterSpacing: "1.2px",
            px: 1.5,
          }}
        >
          LEARNING
        </Typography>

        <Box className="flex flex-col gap-1 mt-1">
          {learningLinks.map((link, i) => {
            const Icon = link.icon;
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.path || i}
                href={link.path}
                className="no-underline"
              >
                <Box
                  className="flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200"
                  sx={{
                    bgcolor: isActive ? "#EFF6FF" : "transparent",
                    color: isActive ? "#2563EB" : "#64748B",
                    "&:hover": {
                      bgcolor: "#F8FAFC",
                      color: "#2563EB",
                    },
                  }}
                >
                  <Icon />

                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: isActive ? 600 : 500,
                      color: "inherit",
                    }}
                  >
                    {link.title}
                  </Typography>

                  {isActive && (
                    <Box
                      className="ml-auto rounded-full"
                      sx={{
                        width: 6,
                        height: 6,
                        bgcolor: "#2563EB",
                      }}
                    />
                  )}
                </Box>
              </Link>
            );
          })}
        </Box>
      </Box>
      <Box className="px-4 py-2">
        <Typography
          variant="caption"
          sx={{
            color: "#9CA3AF",
            fontWeight: 700,
            letterSpacing: "1.2px",
            px: 1.5,
          }}
        >
          ACCOUNT
        </Typography>

        <Box className="flex flex-col gap-1 mt-1">
          {accountLinks.map((link, i) => {
            const Icon = link.icon;
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.path || i}
                href={link.path}
                className="no-underline"
              >
                <Box
                  className="flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200"
                  sx={{
                    bgcolor: isActive ? "#EFF6FF" : "transparent",
                    color: isActive ? "#2563EB" : "#64748B",
                    "&:hover": {
                      bgcolor: "#F8FAFC",
                      color: "#2563EB",
                    },
                  }}
                >
                  <Icon />

                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: isActive ? 600 : 500,
                      color: "inherit",
                    }}
                  >
                    {link.title}
                  </Typography>

                  {isActive && (
                    <Box
                      className="ml-auto rounded-full"
                      sx={{
                        width: 6,
                        height: 6,
                        bgcolor: "#2563EB",
                      }}
                    />
                  )}
                </Box>
              </Link>
            );
          })}
        </Box>
      </Box>
    </Card>
  );
};

export default Sidebar;
