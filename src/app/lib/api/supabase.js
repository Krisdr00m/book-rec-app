"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSupaClient = createSupaClient;
var supabase_js_1 = require("@supabase/supabase-js");
var supabaseUrl = process.env.SUPABASE_URL;
var supabaseKey = process.env.SUPABASE_KEY;
if (!supabaseUrl || !supabaseKey) {
    console.log(supabaseUrl, supabaseKey);
    throw new Error('Missing Supabase URL or Key in environment variables');
}
// Create a single supabase client for interacting with your database
function createSupaClient() {
    console.log('Creating Supabase client with URL:', supabaseUrl);
    console.log('Using Supabase Key:', supabaseKey ? 'Provided' : 'Not Provided');
    return (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
}
;
