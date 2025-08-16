import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Link from 'next/link';;


interface MediaCardProps {  
    title?: string;
    imageLink?: string;
    description?: string;
    author?: string;
    isHome?: boolean; 
    first_publish_year?: number;
    genre?: string;
    indivLink?: string;
}

// This component is used to display a book cover with an image
export default function MediaCard({
    title = 'Red Rising', 
    imageLink = 'https://m.media-amazon.com/images/I/81wGzzxqHSL.jpg', 
    description = 'Greatest book in all of fiction',
    author = 'Pierce Brown',
    isHome = true,
    indivLink = "/main-pages/indiv-page/1",
}: MediaCardProps){
    if(!isHome){
      return (
        <div>
            <Card sx={{width: '30vh' , height: "50vh" }}>
              <CardMedia
                sx={{ height: '100%', width: '100%' }}
                image={imageLink}
              />
            </Card>
        </div>

      )
    }
    else{
      return(
        <Card sx={{ minWidth: 150, maxWidth: 200}}>
          <CardMedia
            sx={{height: '25vh'}}
            image={imageLink}
            title={title}
          />
          <CardActions>
            <Link href={indivLink}>
              <Button size="small">View Details</Button>
            </Link>
            {/* <Button size="small">Share</Button> */}
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
  );
}}
