import { supabase } from "../utils/supabase";
import { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: "example@email.com",
    password: "example-password",
  });
}
// Permet la connexion avec github
async function signInWithGitHub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });
}

async function signout() {
  const { error } = await supabase.auth.signOut();
}
