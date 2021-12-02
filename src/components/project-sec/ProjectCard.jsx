import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ImageSlide from "./ImageSlide";
import CardPopup from "./CardPopUp";

export default function ProjectCard() {
  return (
    <Card elevation={10} sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Make My Trip
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Full Stack React Application Including Frontend and Backend
        </Typography>
      </CardContent>
      <ImageSlide />
      <CardActions>
        <Button size="small">More Details</Button>
        <Button size="small">Learn More</Button>
        <CardPopup />
      </CardActions>
    </Card>
  );
}
