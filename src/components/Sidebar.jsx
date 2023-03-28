import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CategoryIcon from "@mui/icons-material/Category";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DescriptionIcon from "@mui/icons-material/Description";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import Dashboard from "./Dashboard";
import { motion } from "framer-motion";
import Profile from "../assets/avatar.jpg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar, Badge, InputAdornment, TextField } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import Waiters from "./Waiters";
import Tables from "./Tables";
import Categories from "./Categories";
import Fooditems from "./Fooditems";
import Orders from "./Orders";
import Kot from "./Kot";
import Invoices from "./Invoices";
import Barchart from "./Barchart";
import Piechart from "./Piechart";
const drawerWidth = 240;

function Sidebar(props) {
  const defaultColDef = React.useMemo(() => ({
    // minWidth: "100vw",
  }));
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleChipClick = () => {
    console.info("You clicked the Chip.");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const drawer = (
    <div>
      <Box backgroundColor="#01A361" color="white" height="100vh">
        <Toolbar sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            ADMIN
          </Typography>
        </Toolbar>
        <Divider sx={{ backgroundColor: "white" }} />
        <List>
          <Link
            to="/dashboard"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <ListItem
              disablePadding
              sx={{
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "30px",
                },
              }}
            >
              <ListItemButton>
                <Box
                  display="flex"
                  gap={3}
                  justifyContent="center"
                  alignItems="center"
                >
                  <DashboardIcon />
                  <ListItemText primary="Dashboard" />
                </Box>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link
            to="/waiters"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <ListItem
              disablePadding
              sx={{
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "30px",
                },
              }}
            >
              <ListItemButton>
                <Box
                  display="flex"
                  gap={3}
                  justifyContent="center"
                  alignItems="center"
                >
                  <PersonOutlineIcon />
                  <ListItemText primary="Waiters" />
                </Box>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link
            to="/tables"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <ListItem
              disablePadding
              sx={{
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "30px",
                },
              }}
            >
              <ListItemButton>
                <Box
                  display="flex"
                  gap={3}
                  justifyContent="center"
                  alignItems="center"
                >
                  <TableRestaurantIcon />
                  <ListItemText primary="Tables" />
                </Box>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link
            to="/category"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <ListItem
              disablePadding
              sx={{
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "30px",
                },
              }}
            >
              <ListItemButton>
                <Box
                  display="flex"
                  gap={3}
                  justifyContent="center"
                  alignItems="center"
                >
                  <CategoryIcon />

                  <ListItemText primary="Categories" />
                </Box>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link
            to="/foods"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <ListItem
              disablePadding
              sx={{
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "30px",
                },
              }}
            >
              <ListItemButton>
                <Box
                  display="flex"
                  gap={3}
                  justifyContent="center"
                  alignItems="center"
                >
                  <LocalDiningIcon />
                  <ListItemText primary="Food Items" />
                </Box>
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <Divider sx={{ backgroundColor: "white" }} />
        <List>
          <Link
            to="/orders"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <ListItem
              disablePadding
              sx={{
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "30px",
                },
              }}
            >
              <ListItemButton>
                <Box
                  display="flex"
                  gap={3}
                  justifyContent="center"
                  alignItems="center"
                >
                  <ReceiptIcon />

                  <ListItemText primary="Orders" />
                </Box>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link
            to="/kot"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <ListItem
              disablePadding
              sx={{
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "30px",
                },
              }}
            >
              <ListItemButton>
                <Box
                  display="flex"
                  gap={3}
                  justifyContent="center"
                  alignItems="center"
                >
                  <MenuBookIcon />

                  <ListItemText primary="KOT" />
                </Box>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link
            to="/invoices"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <ListItem
              disablePadding
              sx={{
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "30px",
                },
              }}
            >
              <ListItemButton>
                <Box
                  display="flex"
                  gap={3}
                  justifyContent="center"
                  alignItems="center"
                >
                  <DescriptionIcon />

                  <ListItemText primary="Invoices" />
                </Box>
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <Divider sx={{ backgroundColor: "white" }} />

        <List>
          <Link
            to="/barchart"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <ListItem
              disablePadding
              sx={{
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "30px",
                },
              }}
            >
              <ListItemButton>
                <Box
                  display="flex"
                  gap={3}
                  justifyContent="center"
                  alignItems="center"
                >
                  <BarChartIcon />

                  <ListItemText primary="Bar Chart" />
                </Box>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link
            to="/piechart"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <ListItem
              disablePadding
              sx={{
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "30px",
                },
              }}
            >
              <ListItemButton>
                <Box
                  display="flex"
                  gap={3}
                  justifyContent="center"
                  alignItems="center"
                >
                  <PieChartIcon />

                  <ListItemText primary="Pie Chart" />
                </Box>
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "white",
          color: "black",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box display="flex" justifyContent="space-between" width="100%">
            <TextField
              id="outlined-basic"
              placeholder="Search..."
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={2}
            >
              <Badge
                badgeContent={4}
                color="success"
                sx={{ marginTop: "10px" }}
              >
                <motion.div whileTap={{ scale: 0.8 }}>
                  <NotificationsIcon sx={{ color: "#01A361" }} />
                </motion.div>
              </Badge>
              <motion.div whileTap={{ scale: 0.8 }}>
                <Avatar
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  alt="Remy Sharp"
                  src={Profile}
                />
              </motion.div>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/waiters" element={<Waiters />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/category" element={<Categories />} />
          <Route path="/foods" element={<Fooditems />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/kot" element={<Kot />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/barchart" element={<Barchart />} />
          <Route path="/piechart" element={<Piechart />} />
        </Routes>
      </Box>
    </Box>
  );
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Sidebar;
