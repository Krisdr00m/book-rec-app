"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSupaClient = createSupaClient;
exports.createAuthClient = createAuthClient;
var supabase_js_1 = require("@supabase/supabase-js");
var supabaseUrl = process.env.SUPABASE_URL;
var supabaseKey = process.env.SUPABASE_KEY;
var supabaseService = process.env.SUPABSE_SERVICE_ROLE;
if (!supabaseUrl || !supabaseKey || !supabaseService) {
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
function createAuthClient() {
    return (0, supabase_js_1.createClient)(supabaseUrl, supabaseService, {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    });
}
