import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Service.css";
import { Mydata } from "../db";

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
        {Mydata.Skills.map((x) => (
          <Grid item xs={6} sm={4} md={3}>
            <Item sx={{ backgroundColor: "transparent" }}>
              <div className="hoverE">
                <img src={x.logo} alt="skills" />
                <br />
                <h6 className="h2 text-light">{x.label}</h6>
              </div>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
