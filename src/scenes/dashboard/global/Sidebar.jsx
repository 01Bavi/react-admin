import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from "react-router-dom";
import { tokens } from "../../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        {/* Sidebar Header */}
        <Box>
          {!isCollapsed && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="15px"
            >
              <Typography variant="h3" color={colors.grey[100]}>
                ADMINIS
              </Typography>
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          )}

          {isCollapsed && (
            <Box display="flex" justifyContent="center" alignItems="center">
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          )}
        </Box>

        {/* USER */}
        {!isCollapsed && (
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={`../../assets/user.png`}
                style={{ cursor: 'pointer', borderRadius: '50%' }}
              />
            </Box>

            <Box textAlign="center">
              <Typography variant="h6" color={colors.grey[100]} mt="10px">
                Ed Roh
              </Typography>
              <Typography variant="body2" color={colors.greenAccent[500]}>
                VP Fancy Admin
              </Typography>
            </Box>
          </Box>
        )}

        {/* Menu Items */}
        <Menu iconShape="square">
          <MenuItem icon={<HomeOutlinedIcon />}>
            <Link to="/dashboard">Dashboard</Link>
          </MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>
            <Link to="/team">Team</Link>
          </MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}>
            <Link to="/contacts">Contacts</Link>
          </MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>
            <Link to="/invoices">Invoices</Link>
          </MenuItem>
          <MenuItem icon={<PersonOutlinedIcon />}>
            <Link to="/profile">Profile</Link>
          </MenuItem>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
