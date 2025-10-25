"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSupaClient = createSupaClient;
exports.createBrowserCli = createBrowserCli;
exports.createAuthClient = createAuthClient;
var supabase_js_1 = require("@supabase/supabase-js");
var ssr_1 = require("@supabase/ssr");
var supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
var supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
var supabaseService = process.env.SUPABSE_SERVICE_ROLE;
if (!supabaseUrl || !supabaseKey) {
    console.log("subasepase info:", supabaseUrl, supabaseKey, supabaseService);
    throw new Error('Missing Supabase URL or Key in environment variables');
}
function createSupaClient() {
    console.log('Creating Supabase client with URL:', supabaseUrl);
    console.log('Using Supabase Key:', supabaseKey ? 'Provided' : 'Not Provided');
    return (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
}
;
function createBrowserCli() {
    return (0, ssr_1.createBrowserClient)(supabaseUrl, supabaseKey);
}
function createAuthClient() {
    return (0, supabase_js_1.createClient)(supabaseUrl, supabaseService, {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    });
}
