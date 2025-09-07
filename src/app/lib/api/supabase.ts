import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string
const supabaseService = process.env.SUPABASE_SERVICE_ROLE as string

if (!supabaseUrl || !supabaseKey) {
  console.log("subasepase info:", supabaseUrl, supabaseKey, supabaseService);
  throw new Error('Missing Supabase URL or Key in environment variables');
}

export function createSupaClient() {
  console.log('Creating Supabase client with URL:', supabaseUrl);
  console.log('Using Supabase Key:', supabaseKey ? 'Provided' : 'Not Provided');
  return createClient(supabaseUrl, supabaseKey);
};


export function createAuthClient(){
  return createClient(supabaseUrl,supabaseService, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

}

