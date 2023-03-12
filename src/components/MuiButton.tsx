import {Button,Stack,IconButton,ButtonGroup,ToggleButtonGroup,ToggleButton} from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderLined from '@mui/icons-material/FormatUnderlined'
import {useState} from 'react';
export const MuiButton = () => {
    const [formats,setFormat] = useState<string | null>(null);
    console.log({formats})
    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>,updatedFormats:string | null) =>{
        setFormat(updatedFormats)
    }
  return (
   <Stack spacing={4}>
     <Stack spacing={2} direction='row'>
        <Button variant="text" href="https://www.google.com">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">OutLined</Button>
    </Stack>
    <Stack spacing={2} direction="row">
        <Button variant="contained" color='primary'>Primary</Button>
        <Button variant="contained" color='secondary'>Secondary</Button>
        <Button variant="contained" color='error'>Error</Button>
        <Button variant="contained" color='info'>Info</Button>
        <Button variant="contained" color='warning'>Warning</Button>
        <Button variant="contained" color='success'>Success</Button>
    </Stack>
    <Stack display='block' spacing={2} direction='row'>
        <Button variant="contained" size='small'>
            Small
        </Button>
        <Button variant="contained" size='medium'>
            Medium
        </Button>
        <Button variant="contained" size='large'>
            Large
        </Button>
    </Stack>
    <Stack direction='row' spacing={2}>
        <Button variant="contained" startIcon={<SendIcon/>} disableElevation>Send</Button>
        <Button variant="contained" endIcon={<SendIcon/>} onClick={()=>alert('Clicked')}>Send</Button>
        <IconButton aria-label="Send" color='secondary' size='small'>
            <SendIcon/>
        </IconButton>
    </Stack>
    <Stack direction='row'>
      <ButtonGroup arial-aria-label="alignment button group" variant="contained" color='success' orientation="vertical" size='large'>
      <Button >Left</Button>
        <Button >Center</Button>
        <Button >Right</Button>
      </ButtonGroup>
    </Stack>
    <Stack direction='row'>
        <ToggleButtonGroup aria-label="text formatting" value={formats} onChange={handleFormatChange} size="small" color="success" orientation="vertical" exclusive>
            <ToggleButton value='bold' aria-label="bold"><FormatBoldIcon/></ToggleButton>
            <ToggleButton  value='italic' aria-label="italic"><FormatItalicIcon/></ToggleButton>
            <ToggleButton value='underline' aria-label="underline"><FormatUnderLined/></ToggleButton>
        </ToggleButtonGroup>
    </Stack>
   </Stack>
  )
}
