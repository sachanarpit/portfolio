import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";

import { ButtonMainP } from "../Hero-sec/Hero";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import ButtonGroup from "@mui/material/ButtonGroup";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function MobileNav() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <a href="#HomeP">
          <ListItem button key="Home">
            <ListItemText primary="Home" />
          </ListItem>
        </a>
        <a href="#AboutP">
          <ListItem button key="About">
            <ListItemText primary="About" />
          </ListItem>
        </a>
        <a href="#ServicesP">
          <ListItem button key="Services">
            <ListItemText primary="Services" />
          </ListItem>
        </a>
        <a href="#ProjectP">
          <ListItem button key="Project">
            <ListItemText primary="Project" />
          </ListItem>
        </a>
        <a href="#ContactP">
          <ListItem button key="Contact">
            <ListItemText primary="Contact" />
          </ListItem>
        </a>
      </List>
      <Divider />
      <List>
        {["Download Resume"].map((text, index) => (
          <ListItem button key={text}>
            <ButtonMainP>Dowload Resume</ButtonMainP>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <ButtonGroup
            style={{ marginRight: "20px" }}
            variant="text"
            aria-label="text button group"
          >
            <Button style={{ color: "#f8004c" }}>
              <a
                href="https://www.linkedin.com/in/sachanarpit/"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
            </Button>
            <Button style={{ color: "#f8004c" }}>
              <a href="https://github.com/sachanarpit" target="_blank">
                <GitHubIcon />
              </a>
            </Button>
            <Button style={{ color: "#f8004c" }}>
              <a href="https://twitter.com/sachanarpit1" target="_blank">
                <TwitterIcon style={{ color: "#f8004c" }} />
              </a>
            </Button>
          </ButtonGroup>

          <Button
            style={{ transform: "scale(1.8)", color: "#f8004c" }}
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuOpenIcon />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
