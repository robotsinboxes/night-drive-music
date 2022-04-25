import React, { useState } from 'react';
import { RiMenuFill } from 'react-icons/ri'
import { 
   Drawer, 
   List, 
   ListItem, 
   ListItemText, 
   IconButton 
} from '@mui/material';

const NavDrawer = () => {
   const [openNavDrawer, setOpenNavDrawer] = useState(false);
   return (
      <>
         <Drawer
           open={openNavDrawer}
           onClose={() => setOpenNavDrawer(false)}
         >
            <List>
               <ListItem onClick={() => setOpenNavDrawer(false)}>
                  <ListItemText>
                     <a to='/music'>MUSIC</a>
                  </ListItemText>
               </ListItem>
               <ListItem onClick={() => setOpenNavDrawer(false)}>
                  <ListItemText>
                     <a to='/videos'>VIDEOS</a>
                  </ListItemText>
               </ListItem>
            </List>
         </Drawer>
         <IconButton onClick={() => setOpenNavDrawer(!openNavDrawer)}>
            <RiMenuFill />
         </IconButton>
      </>
   )
}

export default NavDrawer;