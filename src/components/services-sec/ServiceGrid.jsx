import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const ServiceGrid = () => {
  return (
    <Box m={7} pt={0} sx={{ flexGrow: 1 }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={6} sm={4} md={3}>
          <Item sx={{ backgroundColor: "transparent" }}>
            <div>
              <img
                src="https://img.icons8.com/color/96/000000/react-native.png"
                alt="skills"
              />
              <br />
              <h6 className="h2 text-light">React</h6>
            </div>
          </Item>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Item sx={{ backgroundColor: "transparent" }}>
            <div>
              <img
                src="https://img.icons8.com/color/96/000000/material-ui.png"
                alt="skills"
              />
              <br />
              <h6 className="h2 text-light">Material UI</h6>
            </div>
          </Item>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Item sx={{ backgroundColor: "transparent" }}>
            <div>
              <img
                src="https://img.icons8.com/color/96/000000/bootstrap.png"
                alt="skills"
              />
              <br />
              <h6 className="h2 text-light">BootStrap</h6>
            </div>
          </Item>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Item sx={{ backgroundColor: "transparent" }}>
            <div>
              <img
                src="https://img.icons8.com/nolan/96/css-filetype.png"
                alt="skills"
              />
              <br />
              <h6 className="h2 text-light">CSS</h6>
            </div>
          </Item>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Item sx={{ backgroundColor: "transparent" }}>
            <div>
              <img
                src="https://img.icons8.com/fluency/96/000000/node-js.png"
                alt="skills"
              />
              <br />
              <h6 className="h2 text-light">Node JS</h6>
            </div>
          </Item>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Item sx={{ backgroundColor: "transparent" }}>
            <div>
              <img src="https://img.icons8.com/nolan/96/js.png" alt="skills" />
              <br />
              <h6 className="h2 text-light">Express JS</h6>
            </div>
          </Item>
        </Grid>

        <Grid item xs={6} sm={4} md={3}>
          <Item sx={{ backgroundColor: "transparent" }}>
            <div>
              <img
                src="https://img.icons8.com/color/96/000000/mongodb.png"
                alt="skills"
              />
              <br />
              <h6 className="h2 text-light">MongoDB</h6>
            </div>
          </Item>
        </Grid>

        <Grid item xs={6} sm={4} md={3}>
          <Item sx={{ backgroundColor: "transparent" }}>
            <div>
              <img
                src="https://img.icons8.com/color/96/000000/amazon-web-services.png"
                alt="skills"
              />
              <br />
              <h6 className="h2 text-light">AWS</h6>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};
