import { useState } from 'react';
import './App.css';
import { Box, Button, Drawer } from '@mui/material';
import DrawerLayout from './components/drawer';
import { Copyright } from '@mui/icons-material';

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
  };

  return (
    <div>
      <header>
        <Button variant='contained' onClick={toggleDrawer(true)}>Edit</Button>
      </header>
      <div>
        <h1></h1>
      </div>
      <Drawer open={openDrawer} anchor='right' onClose={toggleDrawer(false)}>
        <Box sx={{width: 600}}>
          <DrawerLayout/>
        </Box>
      </Drawer>
      <footer>
        <div>See Toh Yee Ding - CV Web Design</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Copyright/>&thinsp;CV Web Design, All right reserved</div>
      </footer>
    </div>
  );
}

export default App;
