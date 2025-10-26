import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Link from 'next/link';;
import { Database } from '@/database.types';
import { createBrowserCli } from '@/src/app/lib/api/supabase';


interface MediaCardProps {  
    // title?: string;
    // imageLink?: string;
    // description?: string;
    // author?: string;
    isHome?: boolean; 
    // first_publish_year?: number;
    // genre?: string;
    // indivLink?: string;
    book: Database['public']['Tables']['books']['Row'],

}



// This component is used to display a book cover with an image
export default async function MediaCard({
    book,
    isHome = true,
    // title = 'Red Rising', 
    // imageLink = 'https://m.media-amazon.com/images/I/81wGzzxqHSL.jpg', 
    // description = 'Greatest book in all of fiction',
    // author = 'Pierce Brown',
    // isHome = true,
    // indivLink = "indiv-page/1",
}: MediaCardProps){
  const browserClient = createBrowserCli();
  let image;
  const { data: imgUrl} = await browserClient.storage
         .from("books")
         .getPublicUrl(`${book?.coverurl}`);

    if(!isHome && imgUrl){
      return (
        <div>
            <Card sx={{width: '30vh' , height: "50vh" }}>
              <CardMedia
                sx={{ height: '100%', width: '100%' }}
                image = {imgUrl.publicUrl}
              />
            </Card>
        </div>

      )
    }
    else if (imgUrl){
      return(
        <Card sx={{ minWidth: 150, maxWidth: 200}}>
          <CardMedia
            sx={{height: '25vh'}}
            image={imgUrl.publicUrl}
            title={book.title}
          />
          <CardActions>
            <Link href= {"indiv-page/" + book?.id}>
              <Button size="small">View Details</Button>
            </Link>
            {/* <Button size="small">Share</Button> */}
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
  );
}}
