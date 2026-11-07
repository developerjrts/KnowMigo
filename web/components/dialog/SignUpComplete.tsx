import React from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import {
  MarkEmailUnreadRounded,
  CloseRounded,
  ArrowOutwardRounded,
  CheckCircleRounded,
} from "@mui/icons-material";

interface SignUpCompleteProps {
  open?: boolean;
  email?: string;
  onClose?: () => void;
}

const SignUpComplete: React.FC<SignUpCompleteProps> = ({
  open = true,
  email = "",
  onClose,
}) => {
  const handleOpenMail = () => {
    window.open("https://mail.google.com/", "_blank", "noopener,noreferrer");
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: 4,
            overflow: "hidden",
            position: "relative",
            mx: 2,
          },
        },
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 12,
          top: 12,
          color: "text.secondary",
        }}
      >
        <CloseRounded />
      </IconButton>

      <DialogContent sx={{ p: { xs: 3, sm: 4 }, textAlign: "center" }}>
        {/* Mail Illustration */}
        <Box
          sx={{
            width: 100,
            height: 100,
            mx: "auto",
            mb: 3,
            borderRadius: "50%",
            bgcolor: "#EAF6FC",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <MarkEmailUnreadRounded sx={{ fontSize: 55, color: "#123B70" }} />

          <Box
            sx={{
              position: "absolute",
              bottom: 2,
              right: 0,
              bgcolor: "#21A67A",
              borderRadius: "50%",
              display: "flex",
              p: 0.4,
              border: "3px solid white",
            }}
          >
            <CheckCircleRounded sx={{ color: "white", fontSize: 22 }} />
          </Box>
        </Box>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 800,
          }}
          color="#123B70"
          gutterBottom
        >
          You're almost there!
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ lineHeight: 1.8, mb: 2.5 }}
        >
          Your KnowMigo account has been created successfully. We've sent a
          verification link to your email address.
        </Typography>

        {/* Email Address */}
        {email && (
          <Box
            sx={{
              bgcolor: "#EAF6FC",
              border: "1px solid #D4EAF7",
              borderRadius: 2,
              px: 2,
              py: 1.5,
              mb: 3,
            }}
          >
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ mb: 0.5, display: "block" }}
            >
              Verification email sent to
            </Typography>

            <Typography
              variant="body2"
              color="#123B70"
              sx={{ overflowWrap: "anywhere", fontWeight: 600 }}
            >
              {email}
            </Typography>
          </Box>
        )}

        {/* Open Mail Button */}
        <Button
          fullWidth
          variant="contained"
          onClick={handleOpenMail}
          endIcon={<ArrowOutwardRounded />}
          sx={{
            bgcolor: "#123B70",
            py: 1.5,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 700,
            fontSize: 15,
            boxShadow: "none",
            "&:hover": {
              bgcolor: "#2563EB",
              boxShadow: "none",
            },
          }}
        >
          Open Gmail
        </Button>

        {/* Footer */}
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ mt: 2.5, lineHeight: 1.7, display: "block" }}
        >
          Didn't receive the email? Check your spam folder or try requesting a
          new verification link.
        </Typography>

        {onClose && (
          <Button
            onClick={onClose}
            sx={{
              mt: 1.5,
              textTransform: "none",
              color: "#123B70",
              fontWeight: 600,
            }}
          >
            I'll verify later
          </Button>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SignUpComplete;
