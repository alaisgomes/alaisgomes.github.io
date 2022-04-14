import React from "react";
import { Grid, Typography, Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Planet from "../components/Planet";
import { styled } from "@mui/material/styles";

const Text = styled(Typography)(({ theme }) => ({
  ...theme.typography.h1,
  color: theme.palette.primary.contrastText,
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

const MainContainer = () => (
  <Container className="home">
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid container direction="row" justifyContent="center">
        <Grid item sm={8} md={3}>
          <Planet />
        </Grid>
        <Grid item sm={8} md={4}>
          <Text variant="h3">Aline Tavares</Text>
        </Grid>
      </Grid>
      <Grid item xs={6} style={{ textAlign: "center" }}>
        <IconButton
          target="_blank"
          rel="noopener"
          href="https://www.linkedin.com/in/alaisgomes"
          aria-label="linkedin"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          target="_blank"
          rel="noopener"
          href="https://github.com/alaisgomes"
          aria-label="github"
        >
          <GitHubIcon />
        </IconButton>
      </Grid>
    </Grid>
  </Container>
);

export default MainContainer;
