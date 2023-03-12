import  {Box,Card, CardContent,Typography,CardActions,Button,CardMedia} from '@mui/material'

export const MuiCard = () => {
  return (
    <Box width='300px'>
        <Card>
            <CardMedia component='img' height='140' image='https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60'alt='unsplash image'/>
            <CardContent>
<Typography gutterBottom variant='h5' component='div'>
    React
</Typography>
<Typography variant='body2' color='GrayText.secondary'>
React · Declarative. React makes it painless to create interactive UIs. · Component-Based. Build encapsulated components that manage their own state, then compose ...
</Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn more</Button>
            </CardActions>
        </Card>
    </Box>
  )
}
