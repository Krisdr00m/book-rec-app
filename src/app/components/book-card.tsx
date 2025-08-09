import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


interface MediaCardProps {  
    title?: string;
    image?: string;
    description?: string;
    author?: string;
    isHome?: boolean;
}
export default function MediaCard({
    title = 'Red Rising', 
    image = 'https://m.media-amazon.com/images/I/81wGzzxqHSL.jpg', 
    description = 'Greatest book in all of fiction',
    author = 'Pierce Brown',
    isHome = true
}: MediaCardProps){
    if(!isHome){
      return (
        <div>
            <Card sx={{width: '30vh' , height: "50vh" }}>
            <CardMedia
              sx={{ height: '100%', width: '100%' }}
              image={image}
            />
          </Card>
        </div>

      )
    }
    else{
      return(
        <Card sx={{ minWidth: 150, maxWidth: 200}}>
          <CardMedia
            sx={{ height: 240 }}
            image={image}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {author} 
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
  );
}}
