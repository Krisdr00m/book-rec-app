import Image from "next/image";
import SearchComponent from "../components/search-actions-components/search-component";
import MediaCard from "../components/book-components/book-card";
import HorizontalSlider from "../components/book-components/slide-panel";
import { createBrowserCli } from "@/src/app/lib/api/supabase";

export default async function HomePage(){
    const browserClient = createBrowserCli()

    const {data, error} = await browserClient
    .from('books')
    .select('*')
    .limit(10);

    // const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`)
  console.log("data: ", data);
  console.log("error:", error)
    return(
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '16px 24px'}}>
        <div style={{width: '75%'}}>
          <SearchComponent />
        
          <HorizontalSlider sectionHeader="Featured Books">
            {data?.map((item, index) => (
              <MediaCard 
              book = {item} 
              key = {index} />
            ))}

          </HorizontalSlider>

          <HorizontalSlider sectionHeader="New Arrivals">
            {data?.map((item, index) => (
              <MediaCard 
              book = {item} 
              key={index}/>
            ))}
          </HorizontalSlider>

          <HorizontalSlider sectionHeader="Recommended for You">
            {data?.map((item, index) => (
              <MediaCard 
              book =  {item}
              key = {index} />
            ))}
          </HorizontalSlider>
        </div>
        <div style={{width: '20%', backgroundColor: '#c56969ff'}}>
            hello
        </div>
        </div>
    )
}