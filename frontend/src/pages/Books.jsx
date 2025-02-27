import { Box, Grid, Typography } from "@mui/material";
import BookCard from "../components/BookCard";
import BackToHome from "../components/BackToHome";

const books = [
  { title: "JavaScript Essentials", author: "John Doe", image: "/books/js-essentials.jpg", link: "#" },
  { title: "React for Beginners", author: "Jane Smith", image: "/books/react-beginners.jpg", link: "#" },
  { title: "Python Mastery", author: "Alex Johnson", image: "/books/python-mastery.jpg", link: "#" },
];

const Books = () => {
  return (
    <Box sx={{ py: 5, px: 2, textAlign: "center" }}>
        <BackToHome />
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Free Books Collection
      </Typography>
      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        {books.map((book, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Books;
