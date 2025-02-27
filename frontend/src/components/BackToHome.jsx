import { Button } from "@mui/material";
import { Home as HomeIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const BackToHome = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="contained"
      startIcon={<HomeIcon />}
      sx={{
        position: "absolute",
        top: 20,
        left: 20,
        backgroundColor: "#1976d2",
        borderRadius: 3,
        textTransform: "none",
        "&:hover": { backgroundColor: "#1565c0" },
      }}
      onClick={() => navigate("/")}
    >
      Home
    </Button>
  );
};

export default BackToHome;
