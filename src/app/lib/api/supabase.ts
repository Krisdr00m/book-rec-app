import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL as string
const supabaseKey = process.env.SUPABASE_KEY as string

if (!supabaseUrl || !supabaseKey) {
  console.log(supabaseUrl, supabaseKey);
  throw new Error('Missing Supabase URL or Key in environment variables');
}


// Create a single supabase client for interacting with your database
export function createSupaClient() {
  console.log('Creating Supabase client with URL:', supabaseUrl);
  console.log('Using Supabase Key:', supabaseKey ? 'Provided' : 'Not Provided');
  return createClient(supabaseUrl, supabaseKey);
};
