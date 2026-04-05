import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";

export type LovedOne = {
  id: string;
  name: string;
  relationship_type: string | null;
  birth_date: string | null;
  death_date?: string | null;
  created_at?: string;
};

export type CreateLovedOneInput = {
  name: string;
  relationship_type?: string | null;
  birth_date?: string | null;
};

export async function getLovedOnes(): Promise<LovedOne[]> {
  if (!isSupabaseConfigured()) {
    return [];
  }

  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("loved_ones")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("getLovedOnes error:", error.message);
      return [];
    }

    return (data ?? []) as LovedOne[];
  } catch (error) {
    console.error("getLovedOnes exception:", error);
    return [];
  }
}

export async function createLovedOne(input: CreateLovedOneInput): Promise<{
  success: boolean;
  error: string | null;
}> {
  if (!isSupabaseConfigured()) {
    return {
      success: false,
      error: "Supabase is not configured.",
    };
  }

  try {
    const supabase = createClient();

    const { error } = await supabase.from("loved_ones").insert({
      name: input.name,
      relationship_type: input.relationship_type ?? null,
      birth_date: input.birth_date ?? null,
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
    console.error("createLovedOne exception:", error);
    return {
      success: false,
      error: "Unexpected error creating loved one.",
    };
  }
}
