'use client'
import SignInSide from "./general-pages/auth-page/mui-sign-in/page";
import SignUp from "./general-pages/auth-page/mui-sign-up/page";
import HomePage from "./general-pages/main-pages/home-page/page";
import {use, useContext} from "react";
import AuthContext from "./auth-context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

export default function Entry() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const userSession = useContext(AuthContext);

  useEffect(() => {
     if(userSession){
      router.push('general-pages/main-pages/home-page')
    }
    else{
      setIsLoading(false);
      router.push('general-pages/auth-page/mui-sign-in')
    }
  }, [userSession, router]);

  if (isLoading) {
    return <div>Loading...</div>; // or a spinner, etc.
  };
}
