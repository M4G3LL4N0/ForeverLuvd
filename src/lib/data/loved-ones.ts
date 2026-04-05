import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";

export type LovedOne = {
  id: string;
  name: string;
  relationship_type: string | null;
  birth_date: string | null;
  death_date: string | null;
  created_at: string;
  updated_at: string | null;
};

export type CreateLovedOneInput = {
  name: string;
  relationship_type?: string;
  birth_date?: string | null;
  death_date?: string | null;
};

export type LovedOneResult = {
  data: LovedOne[] | null;
  error: string | null;
};

export async function getLovedOnes(): Promise<LovedOneResult> {
  if (!isSupabaseConfigured()) {
    return { data: null, error: "Supabase not configured" };
  }

  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("loved_ones")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("[DATA] getLovedOnes error:", error);
      return { data: null, error: error.message };
    }

    return { 
      data: (data ?? []) as LovedOne[],
      error: null 
    };
  } catch (error) {
    console.error("[DATA] getLovedOnes exception:", error);
    return { data: null, error: "Failed to fetch loved ones" };
  }
}

export async function createLovedOne(input: CreateLovedOneInput): Promise<{
  data: LovedOne | null;
  error: string | null;
}> {
  if (!isSupabaseConfigured()) {
    return { data: null, error: "Supabase not configured" };
  }

  if (!input.name) {
    return { data: null, error: "Name is required" };
  }

  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("loved_ones")
      .insert({
        name: input.name,
        relationship_type: input.relationship_type || null,
        birth_date: input.birth_date || null,
        death_date: input.death_date || null,
      })
      .select()
      .single();

    if (error) {
      console.error("[DATA] createLovedOne error:", error);
      return { data: null, error: error.message };
    }

    return { 
      data: data as LovedOne,
      error: null 
    };
  } catch (error) {
    console.error("[DATA] createLovedOne exception:", error);
    return { data: null, error: "Failed to create loved one" };
  }
}
