import React from 'react'
import {Box, List,ListItem, ListItemText,ListItemIcon,ListItemAvatar,Avatar,ListItemButton,Divider} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'




export const MuiList = () => {
  return (
   <Box sx={{width:'400px' ,bgcolor:'#efefef'}}>
<List>
    
<ListItem disablePadding>
    <ListItemButton>
    <ListItemIcon>
     <Avatar>
     <MailIcon/>
     </Avatar>
    </ListItemIcon>
    <ListItemText primary='List item 1' secondary='Secondary Tex'/>
    </ListItemButton>
</ListItem>
<Divider/>
<ListItem>
<ListItemIcon>
<Avatar>
     <MailIcon/>
     </Avatar>
    </ListItemIcon>
    <ListItemText primary='List item 2'/>
</ListItem>
<Divider/>
<ListItem>
<ListItemIcon>
<Avatar>
     <MailIcon/>
     </Avatar>
    </ListItemIcon>
    <ListItemText primary='List item 3'/>
</ListItem>
</List>
   </Box>
  )
}
