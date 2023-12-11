import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  styled,
  ListItemButton,
  ListItemText,
} from "@mui/material";
// menu
import DrawerItem from "./DrawerItem";
// rutas
import { Link } from "react-router-dom";
import LogoPrincipal from "../../assets/svg/logo-principal.svg";

// personalizado
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const ListMenu = styled(List)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

//rutas
const itemList = [
  {
    text: "Inicio",
    to: "/",
  },
  {
    text: "Servicios",
    to: "/about",
  },
  {
    text: "P.Q.R.S",
    to: "/contact",
  },
  {
    text: "SingIn",
    to: "/admin",
  },
];

const Navbar = () => {
  return (
    <AppBar
      component="nav"
      position="static"
      sx={{
        backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity));",
        color:'rgb(255 255 255 / var(--tw-bg-opacity));' 
      }}
      elevation={0}
    >
      <StyledToolbar>
        <Box>
          <img
            src={LogoPrincipal}
            alt="Logo"
            style={{ height: "100px", width: "auto" }}
          />
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <DrawerItem />
        </Box>
        <ListMenu>
          {itemList.map((item) => {
            const { text } = item;
            return (
              <ListItem key={text}>
                <ListItemButton
                  component={Link}
                  to={item.to}
                  sx={{
                    color: "rgb(34 34 34 )",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#1e2a5a",
                    },
                  }}
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </ListMenu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
