'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import LogoutIcon from '@mui/icons-material/LogoutOutlined';
import { useRouter } from 'next/navigation';


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();

  const handleSignOut = () => {
    router.push('/login');
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar color='secondary' component="nav">
        <Toolbar sx={{pt: 1}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }}}
          >
            <img
              src='https://bikeindex.org/assets/resources/logo_striped-af937709dee2ba8124298e6edd99a80412297a41e748b46aba9cabcef6b4097a.svg'
              alt='Logo'
              height='70px'
              loading="lazy"
            />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Avatar src="https://www.google.com/imgres?q=broken%20profile%20image%20link&imgurl=https%3A%2F%2Fapi-private.atlassian.com%2Fusers%2F8d594cb13c662d6fbe738434174f4199%2Favatar&imgrefurl=https%3A%2F%2Fcommunity.atlassian.com%2Ft5%2FMarketplace-Apps-Integrations%2FrenderUser-creates-broken-link%2Fqaq-p%2F670831&docid=KM1BZRybHCBoEM&tbnid=rwxrJ41h22qTIM&vet=12ahUKEwjwv_SEw6CIAxVChv0HHX4GBG4QM3oECEEQAA..i&w=256&h=256&hcb=2&itg=1&ved=2ahUKEwjwv_SEw6CIAxVChv0HHX4GBG4QM3oECEEQAA" />
            <Typography variant="button" sx={{margin: 'auto', mx: 1}}>Police Officer</Typography>
            <LogoutIcon onClick={handleSignOut} sx={{width: '25px', height: '25px', textAlign: 'center', justifyContent: 'center',color: 'secondary', margin: 'auto', mx: 1}}  />
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
