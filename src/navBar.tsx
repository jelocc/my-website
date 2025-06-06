import { AppBar, Toolbar, Button, Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Avatar from '@mui/material/Avatar';

const NavBar = () => {
  return (
    <AppBar position="sticky" color="primary" sx={{
      backgroundColor: 'rgba(255,0,0,0.2)', 
      borderRadius: '25px',
      maxWidth: '1100px',
      padding: '0 16px',
      boxSizing: 'border-box',
      marginTop: '2rem',
      mx: 'auto',
      position: 'sticky',
      zIndex: 1100
    }}>
      <Toolbar sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          flex: 0
        }}>
          <Avatar alt="Hanni" src="/src/assets/hanni baby.png"/>
        </Box>
        <Box sx={{
          display: { xs: 'none', sm: 'none', md: 'flex' },
          alignItems: 'center',
          gap: 2,
          flex: 1,
          overflow: 'hidden',
          justifyContent: 'center',
          width: '100%'
        }}>
          <Button color="inherit" sx={{
            fontSize: '18px',
            '&:hover': {
              color: '#61adfb'
            }
          }}>Home</Button>
          <Button color="inherit" sx={{
            fontSize: '18px',
            '&:hover': {
              color: '#61adfb'
            }
          }}>About</Button>
          <Button color="inherit" sx={{
            fontSize: '18px',
            '&:hover': {
              color: '#61adfb'
            }
          }}>Projects</Button>
          <Button color="inherit" sx={{
            fontSize: '18px',
            '&:hover': {
              color: '#61adfb'
            }
          }}>Contact</Button>
        </Box>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          flex: 0
        }}>
          <IconButton color="inherit" href="https://github.com/jelocc" target="_blank" sx={{
            '&:hover': {
              color: '#61adfb'
            }
          }}>
            <GitHubIcon sx={{ fontSize: '30px' }}/>
          </IconButton>
          <IconButton color="inherit" href="https://linkedin.com/in/ramil-rosal-025983363" target="_blank" sx={{
            '&:hover': {
              color: '#61adfb'
            }
          }}>
            <LinkedInIcon sx={{ fontSize: '30px' }}/>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;