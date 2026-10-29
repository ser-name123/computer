import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

/**
 * Health-check endpoint: GET /api/health
 * Verifies that the app can construct a Supabase client with the
 * configured environment variables. Runs as a serverless function on Vercel.
 */
export async function GET() {
  const urlSet = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL);
  const keySet = Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  let supabaseReachable = false;
  try {
    const supabase = await createClient();
    // A lightweight call that does not require any table to exist.
    const { error } = await supabase.auth.getSession();
    supabaseReachable = !error;
  } catch {
    supabaseReachable = false;
  }

  return NextResponse.json({
    status: "ok",
    env: {
      NEXT_PUBLIC_SUPABASE_URL: urlSet,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: keySet,
    },
    supabaseReachable,
    timestamp: new Date().toISOString(),
  });
}
