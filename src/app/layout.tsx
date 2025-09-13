import "./globals.css";
import React, { useEffect, useState } from 'react';
import AuthContext from "./auth-context";
import {User} from '@supabase/supabase-js';
import { createBrowserCli } from "./lib/api/supabase";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    const fetchUser = async () => {
      const supabase = await createBrowserCli();
      const { data } =  await supabase.auth.onAuthStateChange((event, session) => {
        setUser(session?.user || null);
      });

      return () => {
        data.subscription.unsubscribe();
      }
  }

  fetchUser();
}, [])

  return (
      <AuthContext.Provider value={user}>
        {children}
      </AuthContext.Provider> 
  );
}
