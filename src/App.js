import { useState } from 'react';
import './App.css';
import { Box, Button, Drawer, Toolbar, Typography } from '@mui/material';
import DrawerLayout from './components/drawer';
import { Copyright } from '@mui/icons-material';
import { ResumeProvider } from './contexts/resume-context';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import 'dayjs/locale/en-gb'
import PreviewLayout from './previews/preview';

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
      
      <ResumeProvider>
        <PreviewLayout></PreviewLayout>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
          <Drawer open={openDrawer} anchor='right' >
            <Box sx={{width: 800}}>
              <Box>
                <Toolbar className='drawer-appbar-style'>
                  <Typography variant='h4'>Personal Information Edit</Typography>
                  <Button onClick={toggleDrawer(false)} variant='outlined' sx={{bgcolor: 'white'}}>close</Button>
                </Toolbar>
              </Box>
              <DrawerLayout/>
            </Box>
          </Drawer>
        </LocalizationProvider>
      </ResumeProvider>
      <footer>
        <div>See Toh Yee Ding - My Resume or CV Maker Web Design</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Copyright/>&thinsp;CV Web Design, All right reserved</div>
      </footer>
    </div>
  );
}

export default App;
