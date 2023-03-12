import React from 'react'
import { Stack, Alert, AlertTitle,Button } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'


export const MuiAlert = () => {
    return (
        <Stack spacing={2}>
            <Alert severity='error'>
                This is an error alert
            </Alert>
            <Alert severity='warning'>
                This is an warning alert
            </Alert>
            <Alert severity='success' >
                This is an success alert
            </Alert>
            <Alert severity='info'>
                This is an info alert
            </Alert>
            <Alert severity='error' variant='outlined' onClose={()=>alert('Error Alert')}>
                This is an error alert
            </Alert>
            <Alert severity='warning' variant='outlined'>
                This is an warning alert
            </Alert>
            <Alert severity='success' variant='outlined' icon={<CheckIcon fontSize='inherit'/>} action={<Button color='inherit' size='small'>Undo</Button>}>
                This is an success alert
            </Alert>
            <Alert severity='info' variant='outlined'>
                This is an info alert
            </Alert>
            <Alert severity='error' variant='filled'>
                <AlertTitle>    This is an error alert</AlertTitle>
                This is an error alert
            </Alert>
            <Alert severity='warning' variant='filled'>
                This is an warning alert
            </Alert>
            <Alert severity='success' variant='filled'>
                This is an success alert
            </Alert>
            <Alert severity='info' variant='filled'>
                This is an info alert
            </Alert>
        </Stack>
    )
}
