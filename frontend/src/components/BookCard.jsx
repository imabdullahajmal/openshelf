import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

const BookCard = ({ book }) => {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: 3, transition: "transform 0.2s", "&:hover": { transform: "scale(1.03)" } }}>
      <CardActionArea href={book.link}>
        <CardMedia component="img" height="180" image={book.image} alt={book.title} />
        <CardContent>
          <Typography variant="h6" fontWeight="bold">
            {book.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {book.author}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BookCard;
