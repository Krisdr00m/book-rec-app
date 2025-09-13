'use client';
import { createContext } from "react";
import {User} from "@supabase/supabase-js"

const AuthContext = createContext(<User | null>(null));

export default AuthContext;