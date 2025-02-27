import { Box, Grid, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Book, PictureAsPdf, PlayCircle, Info, Email } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const navItems = [
  { title: "Books", desc: "Find free books to read and download.", link: "/books", icon: <Book fontSize="large" /> },
  { title: "Slides", desc: "Access lecture slides and notes.", link: "/slides", icon: <PictureAsPdf fontSize="large" /> },
  { title: "Courses", desc: "Explore free online courses.", link: "/courses", icon: <PlayCircle fontSize="large" /> },
];

const NavigationCards = () => {
  return (
    <Box sx={{ py: 5, px: 2, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Explore Free Learning Resources
      </Typography>
      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        {navItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.title}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                transition: "transform 0.2s ease-in-out",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
                <NavLink to={item.link}>
              <CardActionArea sx={{ py: 3, textAlign: "center" }}>
                <Box sx={{ fontSize: 50, color: "primary.main" }}>{item.icon}</Box>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>
                    {item.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
                </NavLink>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NavigationCards;
