import { createClient } from '@supabase/supabase-js'
import { createBrowserClient } from '@supabase/ssr'
import { Database } from '../../../../database.types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string
const supabaseService = process.env.SUPABSE_SERVICE_ROLE as string

if (!supabaseUrl || !supabaseKey) {
  console.log("subasepase info:", supabaseUrl, supabaseKey, supabaseService);
  throw new Error('Missing Supabase URL or Key in environment variables');
}

export function createSupaClient() {
  console.log('Creating Supabase client with URL:', supabaseUrl);
  console.log('Using Supabase Key:', supabaseKey ? 'Provided' : 'Not Provided');
  return createClient<Database>(supabaseUrl, supabaseKey);
};

export function createBrowserCli() {
  return createBrowserClient<Database>(
    supabaseUrl!,
    supabaseKey!
  )
}

export function createAuthClient(){
  return createClient<Database>(supabaseUrl,supabaseService, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})
}

