import React,{useState} from 'react'
import  {Stack,Chip,Avatar} from '@mui/material'
import FaceIcon from '@mui/icons-material/Face' 


export const MuiChip = () => {
    const [chips,setChips] = useState(['Chip 1','Chip 2','Chip 3'])

    const handleDelete = (chipToDelete:string) => {
        setChips(chips => chips.filter(chip =>chip ! == chipToDelete));
    }
  return (
   <Stack direction='row' spacing={1}>
    <Chip label='Chip' color='primary' size='small' icon={<FaceIcon/>}/>
    <Chip  variant='outlined' label='Chip' color='secondary' size='small' avatar={<Avatar>V</Avatar>}/>
    <Chip label='Click' color='success' onClick={()=> alert('Clicked')}/>
    <Chip label='Delete' color='error' onClick={()=>alert('Delete Called')}/>
  {
    chips.map(
        chip => (
            <Chip key={chip} label={chip} onDelete={()=>handleDelete(chip)}/>
        )
    )
  }
  
   </Stack>
  )
}
