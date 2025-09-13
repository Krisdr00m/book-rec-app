import Image from "next/image";
import SearchComponent from "@/components/search-actions-components/search-component";
import MediaCard from "@/components/book-components/book-card";
import HorizontalSlider from "@/components/book-components/slide-panel";
import SignInSide from "./general-pages/auth-page/mui-sign-in/page";
import SignUp from "./general-pages/auth-page/mui-sign-up/page";
const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

export default function Entry() {
  
  return (
    <SignInSide></SignInSide>

  );
}
