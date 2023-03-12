import React from 'react'
import { Stack, ImageList, ImageListItem ,Box,ImageListItemBar} from '@mui/material'
export const MuiImageList = () => {
    return (
        <Stack spacing={4}>
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {
                    itemData.map((item) => (
                        <ImageListItem key={item!.img}>
                            <img src={`${item!.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item!.title} loading='lazy' />
                        </ImageListItem>
                    ))}
            </ImageList>
            <ImageList variant='woven' sx={{ width: 500, height: 450 }} cols={3} rowHeight={164} gap={8}>
                {
                    itemData2.map((item) => (
                        <ImageListItem key={item!.img}>
                            <img src={`${item!.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item!.title} loading='lazy' />
                        </ImageListItem>
                    ))}
            </ImageList>
            <Box sx={{ width: 500, height: 450, overflowY:'scroll'}}>
            <ImageList variant='masonry' cols={3}  gap={8}>
                {
                    itemData3.map((item) => (
                        <ImageListItem key={item!.img}>
                            <img src={`${item!.img}?w=148&fit=crop&auto=format&dpr=2`} alt={item!.title} loading='lazy' />
                            <ImageListItemBar title ={item!.title}/>
                        </ImageListItem>
                    ))}
            </ImageList>
            </Box>
            
        </Stack>
    )
}
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1677939748562-9289efc24bf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60',
        title: 'Sky Scrappers'
    },
    {
        img: 'https://images.unsplash.com/photo-1677916042905-533ef80dba7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
        title: 'Warrior'
    },

    {
        img: 'https://images.unsplash.com/photo-1677725979845-e1895887e1d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
        title: 'Pineapple'
    },
    ,
    {
        img: 'https://images.unsplash.com/photo-1677873475213-1dfa66d46706?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
        title: 'Snow and mountains'
    },

    {
        img: 'https://images.unsplash.com/photo-1677769872249-7238d5b034f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
        title: 'Palm'
    },
    {
        img: 'https://images.unsplash.com/photo-1677830181821-cd489bfcc2bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
        title: 'China'
    },
]
const itemData2 = [
    {
        img: 'https://images.unsplash.com/photo-1677939748562-9289efc24bf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60',
        title: 'Sky Scrappers'
    },
    {
        img: 'https://images.unsplash.com/photo-1677916042905-533ef80dba7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
        title: 'Warrior'
    },

    {
        img: 'https://images.unsplash.com/photo-1677725979845-e1895887e1d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
        title: 'Pineapple'
    },
    ,
    {
        img: 'https://images.unsplash.com/photo-1677873475213-1dfa66d46706?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
        title: 'Snow and mountains'
    },

    {
        img: 'https://images.unsplash.com/photo-1677769872249-7238d5b034f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
        title: 'Palm'
    },
    {
        img: 'https://images.unsplash.com/photo-1677830181821-cd489bfcc2bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
        title: 'China'
    },
]
const itemData3 = [
    {
        img: 'https://images.unsplash.com/photo-1677939748562-9289efc24bf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60',
        title: 'Sky Scrappers'
    },
    {
        img: 'https://images.unsplash.com/photo-1677916042905-533ef80dba7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
        title: 'Warrior'
    },

    {
        img: 'https://images.unsplash.com/photo-1677725979845-e1895887e1d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
        title: 'Pineapple'
    },
    ,
    {
        img: 'https://images.unsplash.com/photo-1677873475213-1dfa66d46706?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
        title: 'Snow and mountains'
    },

    {
        img: 'https://images.unsplash.com/photo-1677769872249-7238d5b034f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
        title: 'Palm'
    },
    {
        img: 'https://images.unsplash.com/photo-1677830181821-cd489bfcc2bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
        title: 'China'
    },
]
//5:15