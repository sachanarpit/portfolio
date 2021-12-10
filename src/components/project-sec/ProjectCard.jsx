import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ImageSlide from "./ImageSlide";
import CardPopup from "./CardPopUp";
import GitHubIcon from "@mui/icons-material/GitHub";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
export default function ProjectCard({ title, des, imgSlid, more, link }) {
  return (
    <Card elevation={10} sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ color: "#f8004c" }}
        >
          <b>{title} </b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {des}
        </Typography>
      </CardContent>
      <ImageSlide images={imgSlid} />
      <CardActions>
        <Button size="small">
          <a href={link.github} target="_blank">
            <GitHubIcon style={{ transform: "scale(1.5)", color: "#000000" }} />
          </a>
        </Button>
        <Button size="small">
          <a href={link.website} target="_blank">
            <InsertLinkIcon
              style={{ transform: "scale(1.5)", color: "#313131" }}
            />
          </a>
        </Button>
        <CardPopup more={more} />
      </CardActions>
    </Card>
  );
}
