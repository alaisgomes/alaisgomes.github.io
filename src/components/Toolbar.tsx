import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Link } from "react-router-dom";

const Topbar = () => (
  <AppBar color="transparent" position="static">
    <Toolbar>
      <Box sx={{ flexGrow: 1 }} />
      <Typography variant="h6" color="inherit" component="div"></Typography>
      <IconButton size="large" component={Link} to="/" aria-label="Home Page">
        <HomeRoundedIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Topbar;
