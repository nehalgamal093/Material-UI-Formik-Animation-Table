import React from 'react'
import {Box,FormControlLabel,Checkbox,FormControl,FormLabel,FormGroup} from '@mui/material'
import {useState} from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

export const MuiCheckBox = () => {
    const [skills,setSkills] = useState<string[]>([])
    const [acceptInc, setAcceptInc] = useState(false)
console.log({acceptInc})
console.log([skills])
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptInc(event.target.checked)
}

const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
const index = skills.indexOf(event.target.value)
if(index  === -1){
    setSkills([...skills,event.target.value])
} else {
    setSkills(skills.filter((skill) => skill !== event.target.value))
}
}
  return (
    <Box>
        <Box>
            <FormControlLabel label='I accept terms and conditions' control={<Checkbox checked={acceptInc} onChange={handleChange}/>} checked ={acceptInc}  />
        </Box>
        <Box>
            <Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon/>} onChange={handleChange}/>
        </Box>
        <Box>
            <FormControl>
                <FormLabel>Skills</FormLabel>
                <FormGroup>
                <FormControlLabel label='HTML' control={<Checkbox checked={skills.includes('html')} onChange={handleSkillChange} value='html'/>} checked ={acceptInc}  />
                <FormControlLabel label='CSS' control={<Checkbox checked={skills.includes('css')} onChange={handleSkillChange} value='css'/>} checked ={acceptInc}  />
                <FormControlLabel label='JavaScript' control={<Checkbox checked={skills.includes('javascript')} onChange={handleSkillChange} value='javascript'/>} checked ={acceptInc}  />
                </FormGroup>
            </FormControl>
        </Box>
    </Box>
  )
}
