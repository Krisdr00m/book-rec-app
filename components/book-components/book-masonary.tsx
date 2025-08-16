import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import BookMasonarySingle from './single-masonary-comp';


let books = Array.from({length: 50}, (_, i) =>({
    title: 'Red Rising ${i}' ,
    indivLink: '/main-pages/indiv-page/1',
    coverImage: 'https://m.media-amazon.com/images/I/81wGzzxqHSL.jpg',
}))

export default function BookMasonary() {
    return(
        <Box sx={{ width: '100%', height: '90%'}}>
            <Masonry
                columns={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
                spacing={5}
                sx={{
                    padding: '16px 24px',
                }}
            >
                {books.map((BookComponent, index) => (
                        <BookMasonarySingle key = {index} book={BookComponent} />
                ))}
            </Masonry>
        </Box>
    )
}