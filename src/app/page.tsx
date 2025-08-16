import Image from "next/image";
import SearchComponent from "@/components/search-actions-components/search-component";
import MediaCard from "@/components/book-components/book-card";
import HorizontalSlider from "@/components/book-components/slide-panel";

const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

export default function Home() {
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '16px 24px'}}>
    <div style={{width: '75%'}}>
      <SearchComponent />
       
      <HorizontalSlider sectionHeader="Featured Books">
        {items.map((item, index) => (
          <MediaCard key = {index} />
        ))}

      </HorizontalSlider>

      <HorizontalSlider sectionHeader="New Arrivals">
        {items.map((item, index) => (
          <MediaCard key = {index} />
        ))}
      </HorizontalSlider>

      <HorizontalSlider sectionHeader="Recommended for You">
        {items.map((item, index) => (
          <MediaCard key = {index} />
        ))}
      </HorizontalSlider>
    </div>
    <div style={{width: '20%', backgroundColor: '#c56969ff'}}>
        hello
    </div>
    </div>
  );
}
