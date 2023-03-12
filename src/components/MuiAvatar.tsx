import React from 'react'
import {Stack,Avatar,AvatarGroup} from '@mui/material'



export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={1}>
            <Avatar sx={{bgcolor:'primary.light'}}>BW</Avatar>
            <Avatar sx={{bgcolor:'success.light'}}>CK</Avatar>
        </Stack>
        <Stack direction='row' spacing={1}>

<AvatarGroup max={3}>
<Avatar sx={{bgcolor:'primary.light'}}>BW</Avatar>
            <Avatar sx={{bgcolor:'success.light'}}>CK</Avatar>
<Avatar src='https://images.unsplash.com/photo-1677890975420-6518baceda27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60' alt='Michael'/>
                <Avatar src='https://images.unsplash.com/photo-1677890975420-6518baceda27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60' alt='Michael'/>
</AvatarGroup>
        </Stack>
        <Stack direction='row' spacing={1}>
            <Avatar variant='rounded' sx={{bgcolor:'primary.light',width:48,height:48}}>BW</Avatar>
            <Avatar sx={{bgcolor:'success.light'}}>CK</Avatar>
        </Stack>
     
    </Stack>
  )
}
