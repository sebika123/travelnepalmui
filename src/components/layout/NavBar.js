import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import travelLogo from '../../assets/images/logo.png'; // Ensure this path is correct

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSubMenuAnchorEl(null);
    setOpenSubMenu(null);
  };

  const handleSubMenuOpen = (event, subMenuId) => {
    setSubMenuAnchorEl(event.currentTarget);
    setOpenSubMenu(subMenuId);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const renderMenu = (menuId, menuItems) => (
    <Menu
      id={menuId}
      anchorEl={anchorEl}
      open={Boolean(anchorEl && openSubMenu === menuId)}
      onClose={handleMenuClose}
    >
      {menuItems.map((item, index) => (
        item.subMenu ? (
          <MenuItem
            key={index}
            onClick={(event) => handleSubMenuOpen(event, `${menuId}-submenu-${index}`)}
          >
            {item.title} <ArrowDropDownIcon />
            {renderMenu(`${menuId}-submenu-${index}`, item.subMenu)}
          </MenuItem>
        ) : (
          <MenuItem key={index} onClick={handleMenuClose}>
            {item}
          </MenuItem>
        )
      ))}
    </Menu>
  );

  const menuItems = [
    'Home',
    {
      title: 'Place',
      subMenu: [
        'Himal',
        {
          title: 'Hilly',
          subMenu: ['Ktm', 'PKr', 'Bkt'],
        },
        'Terai',
      ],
    },
    'About Us',
  ];

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box display="flex" alignItems="center">
          <img src={travelLogo} alt="logo" style={{ width: '50px', marginRight: '20px' }} />
          <Typography variant="h6" component="div">
            Travel
          </Typography>
        </Box>
        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <List>
                {menuItems.map((item, index) => (
                  item.subMenu ? (
                    <React.Fragment key={index}>
                      <ListItem button onClick={handleMenuOpen}>
                        <ListItemText primary={item.title} />
                        <ArrowDropDownIcon />
                      </ListItem>
                      {renderMenu(`drawer-menu-${index}`, item.subMenu)}
                    </React.Fragment>
                  ) : (
                    <ListItem button key={index}>
                      <ListItemText primary={item} />
                    </ListItem>
                  )
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box display="flex" flexGrow={1} justifyContent="flex-end">
            {menuItems.map((item, index) => (
              item.subMenu ? (
                <Typography
                  key={index}
                  variant="h6"
                  component="div"
                  style={{ margin: '0 10px' }}
                  onClick={(event) => handleSubMenuOpen(event, `menu-${index}`)}
                >
                  {item.title}
                  <ArrowDropDownIcon />
                  {renderMenu(`menu-${index}`, item.subMenu)}
                </Typography>
              ) : (
                <Typography
                  key={index}
                  variant="h6"
                  component="div"
                  style={{ margin: '0 10px' }}
                >
                  {item}
                </Typography>
              )
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
