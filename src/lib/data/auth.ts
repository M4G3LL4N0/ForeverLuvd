import { createClient } from "@/lib/supabase/client";

export type SignInInput = {
  email: string;
  password: string;
};

export type SignUpInput = {
  email: string;
  password: string;
};

export async function signIn(input: SignInInput): Promise<{
  success: boolean;
  error: string | null;
}> {
  try {
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email: input.email,
      password: input.password,
    });

    if (error) {
      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: true,
      error: null,
    };
  } catch (error) {
    console.error("signIn error:", error);
    return {
      success: false,
      error: "Failed to sign in",
    };
  }
}

export async function signUp(input: SignUpInput): Promise<{
  success: boolean;
  error: string | null;
}> {
  try {
    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email: input.email,
      password: input.password,
      options: {
        emailRedirectTo: window.location.origin + "/dashboard",
      },
    });

    if (error) {
      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: true,
      error: null,
    };
  } catch (error) {
    console.error("signUp error:", error);
    return {
      success: false,
      error: "Failed to create account",
    };
  }
}
