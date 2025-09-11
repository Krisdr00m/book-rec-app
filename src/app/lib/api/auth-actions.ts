import { createBrowserCli } from "./supabase";

export async function signInWithEmail(email: string, password: string) {
  console.log("helper entered");

  const supabase = createBrowserCli();
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
  const supabase = createBrowserCli();
  const { data, error } = await supabase.auth.getSession();
    if (error) {
        console.error("Error retrieving session:", error);
    }
    else{
        console.log("Session data:", data);
    }
}