import { createBrowserCli } from "./supabase";
import { User } from "@supabase/supabase-js";


export async function signInWithEmail(email: string, password: string) {
  console.log("helper entered");

  const supabase = await createBrowserCli();
  console.log("client created:", supabase);

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log("sign in data:", data, error);
    return { loginData: data, loginError: error };
  } catch (err) {
    console.error("sign in threw:", err);
    throw err;  
  }
}

export async function retrieveSession() {
  const supabase = await createBrowserCli();
  const { data, error } = await supabase.auth.getSession();
    if (error) {
        console.error("Error retrieving session:", error);
    }
    else{
        console.log("Session data:", data);
    }
}

// export async function checkStateChange(){

//   try{
//     const supabase = await createBrowserCli();
//     const authStatus = await supabase.auth.onAuthStateChange((event, session) => {
      
//       console.log("Auth state changed:", event, session);
//     });

//     return authStatus;
//   }
//   catch(err){
//     console.error("Error in auth state change listener:", err);
//   }
// }