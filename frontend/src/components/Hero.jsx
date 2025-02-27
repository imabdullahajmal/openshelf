import { Box, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        bgcolor: "#f5f5f5",
        px: 2,
      }}
    >
      <Typography variant="h3" fontWeight="bold">
        Welcome to OpenShelf 📚
      </Typography>
      <Typography variant="h6" sx={{ mt: 2, maxWidth: "600px" }}>
        A modern way to discover, explore, and manage books effortlessly.
      </Typography>
    </Box>
  );
};

export default Hero;
