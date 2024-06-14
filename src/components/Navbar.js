import React, { useState } from 'react';
import { Box, Drawer, IconButton, List, ListItem, ListItemText, Collapse, ListSubheader } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/images/travel-logo.png';

const Navbar = () => {
  const [navOverlayVisible, setNavOverlayVisible] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleNav = () => {
    setNavOverlayVisible(!navOverlayVisible);
  };

  const toggleSubMenu = (event, submenuId) => {
    if (event) {
      event.stopPropagation();
    }
    setOpenSubmenus((prevState) => ({
      ...prevState,
      [submenuId]: !prevState[submenuId],
    }));
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <header className="header">
      <nav id="menu">
        <Box id="hamburger" onClick={toggleNav}>
          <IconButton onClick={toggleDrawer} sx={{ color: 'white' }}>
            <MenuIcon />
          </IconButton>
          Menu
        </Box>
        <List component="ul" className="main-menu clearfix">
          <img src={logo} className="travel-logo" alt="logo" />
          <ListItem component="li"><a href="/">Home</a></ListItem>
          <ListItem component="li">
            <a href="javascript:void(0);" onClick={(e) => toggleSubMenu(e, 'submenu-1')}>
              Place <span className="drop-icon">▾</span>
            </a>
            <ul className={`sub-menu ${openSubmenus['submenu-1'] ? 'open' : ''}`} id="submenu-1">
              <li><a href="/">Himal</a></li>
              <li>
                <a href="javascript:void(0);" onClick={(e) => toggleSubMenu(e, 'submenu-2')}>
                  Hilly <span className="drop-icon"></span>
                </a>
                <ul className={`sub-menu ${openSubmenus['submenu-2'] ? 'open' : ''}`} id="submenu-2">
                  <li>
                    <a href="javascript:void(0);" onClick={(e) => toggleSubMenu(e, 'submenu-3')}>
                      Ktm <span className="drop-icon"></span>
                    </a>
                    <ul className={`sub-menu ${openSubmenus['submenu-3'] ? 'open' : ''}`} id="submenu-3">
                      <li><a href="/">Baneshwor</a></li>
                      <li><a href="/">Koteswor</a></li>
                    </ul>
                  </li>
                  <li><a href="/">PKr</a></li>
                  <li><a href="/">Bkt</a></li>
                </ul>
              </li>
              <li><a href="/">Terai</a></li>
            </ul>
          </ListItem>
          <li><a href="/">About us</a></li>
        </List>
      </nav>
      {navOverlayVisible && (
        <div id="nav-overlay" onClick={toggleNav}>
          <div className="nav-content">
            <ul className="overlay-menu">
              <li><a href="/">Home</a></li>
              <li>
                <a href="javascript:void(0);" onClick={(e) => toggleSubMenu(e, 'overlay-submenu-1')}>
                  Place <span className="drop-icon">▾</span>
                </a>
                <ul className={`sub-menu ${openSubmenus['overlay-submenu-1'] ? 'open' : ''}`} id="overlay-submenu-1">
                  <li><a href="/">Himal</a></li>
                  <li>
                    <a href="javascript:void(0);" onClick={(e) => toggleSubMenu(e, 'overlay-submenu-2')}>
                      Hilly <span className="drop-icon">▾</span>
                    </a>
                    <ul className={`sub-menu ${openSubmenus['overlay-submenu-2'] ? 'open' : ''}`} id="overlay-submenu-2">
                      <li>
                        <a href="javascript:void(0);" onClick={(e) => toggleSubMenu(e, 'overlay-submenu-3')}>
                          Ktm <span className="drop-icon">▾</span>
                        </a>
                        <ul className={`sub-menu ${openSubmenus['overlay-submenu-3'] ? 'open' : ''}`} id="overlay-submenu-3">
                          <li><a href="/">Baneshwor</a></li>
                          <li><a href="/">Koteswor</a></li>
                        </ul>
                      </li>
                      <li><a href="/">PKr</a></li>
                      <li><a href="/">Bkt</a></li>
                    </ul>
                  </li>
                  <li><a href="/">Terai</a></li>
                </ul>
              </li>
              <li><a href="/">About us</a></li>
            </ul>
          </div>
        </div>
      )}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }} role="presentation">
          <ListSubheader>
            <IconButton onClick={toggleDrawer} sx={{ color: 'black' }}>
              <CloseIcon />
            </IconButton>
          </ListSubheader>
          <List>
            <ListItem onClick={() => toggleSubMenu(null, 'drawer-home')}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem onClick={(e) => toggleSubMenu(e, 'drawer-submenu-1')}>
              <ListItemText primary="Place" />
              {openSubmenus['drawer-submenu-1'] ? '▾' : '▸'}
            </ListItem>
            <Collapse in={openSubmenus['drawer-submenu-1']} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItem onClick={(e) => toggleSubMenu(e, 'drawer-himal')}>
                  <ListItemText primary="Himal" />
                </ListItem>
                <ListItem onClick={(e) => toggleSubMenu(e, 'drawer-submenu-2')}>
                  <ListItemText primary="Hilly" />
                  {openSubmenus['drawer-submenu-2'] ? '▾' : '▸'}
                </ListItem>
                <Collapse in={openSubmenus['drawer-submenu-2']} timeout="auto" unmountOnExit>
                  <List disablePadding>
                    <ListItem onClick={(e) => toggleSubMenu(e, 'drawer-submenu-3')}>
                      <ListItemText primary="Ktm" />
                      {openSubmenus['drawer-submenu-3'] ? '▾' : '▸'}
                    </ListItem>
                    <Collapse in={openSubmenus['drawer-submenu-3']} timeout="auto" unmountOnExit>
                      <List disablePadding>
                        <ListItem>
                          <ListItemText primary="Baneshwor" />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="Koteswor" />
                        </ListItem>
                      </List>
                    </Collapse>
                  </List>
                  <ListItem>
                    <ListItemText primary="PKr" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Bkt" />
                  </ListItem>
                </Collapse>
              </List>
              <ListItem>
                <ListItemText primary="Terai" />
              </ListItem>
            </Collapse>
            <ListItem>
              <ListItemText primary="About us" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </header>
  );
};

export default Navbar;
