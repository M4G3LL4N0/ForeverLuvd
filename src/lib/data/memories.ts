import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";

export type Memory = {
  id: string;
  loved_one_id: string;
  title: string;
  description: string | null;
  memory_type: string;
  memory_date: string | null;
  file_url: string | null;
  created_at: string;
  updated_at: string | null;
};

export type MemoryResult = {
  data: Memory[] | null;
  error: string | null;
};

export type CreateMemoryInput = {
  loved_one_id: string;
  title: string;
  description?: string;
  memory_type?: string;
  memory_date?: string | null;
  file?: File | null;
};

export type CreateMemoryResult = {
  data: Memory | null;
  error: string | null;
};

export async function getMemoriesByLovedOne(
  lovedOneId: string
): Promise<MemoryResult> {
  if (!isSupabaseConfigured()) {
    return { data: null, error: "Supabase not configured" };
  }

  if (!lovedOneId) {
    return { data: null, error: "Loved one ID is required" };
  }

  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("memories")
      .select("*")
      .eq("loved_one_id", lovedOneId)
      .order("memory_date", { ascending: false });

    if (error) {
      console.error("[DATA] getMemories error:", error);
      return { data: null, error: error.message };
    }

    return {
      data: (data ?? []) as Memory[],
      error: null
    };
  } catch (error) {
    console.error("[DATA] getMemories exception:", error);
    return { data: null, error: "Failed to fetch memories" };
  }
}

export async function createMemory(
  input: CreateMemoryInput
): Promise<CreateMemoryResult> {
  if (!isSupabaseConfigured()) {
    return { data: null, error: "Supabase not configured" };
  }

  if (!input.loved_one_id) {
    return { data: null, error: "Loved one ID is required" };
  }

  if (!input.title) {
    return { data: null, error: "Title is required" };
  }

  try {
    const supabase = createClient();
    let file_url: string | null = null;

    // Handle file upload if present
    if (input.file) {
      const filePath = `${crypto.randomUUID()}-${input.file.name}`;
      const { error: uploadError } = await supabase.storage
        .from("memory-files")
        .upload(filePath, input.file);

      if (uploadError) {
        console.error("[DATA] createMemory upload error:", uploadError);
        return { data: null, error: uploadError.message };
      }

      const { data: publicUrlData } = supabase.storage
        .from("memory-files")
        .getPublicUrl(filePath);
      file_url = publicUrlData.publicUrl;
    }

    const { data, error } = await supabase
      .from("memories")
      .insert({
        loved_one_id: input.loved_one_id,
        title: input.title,
        description: input.description || null,
        memory_type: input.memory_type || "note",
        memory_date: input.memory_date || null,
        file_url,
      })
      .select()
      .single();

    if (error) {
      console.error("[DATA] createMemory error:", error);
      return { data: null, error: error.message };
    }

    return {
      data: data as Memory,
      error: null,
    };
  } catch (error) {
    console.error("[DATA] createMemory exception:", error);
    return { data: null, error: "Failed to create memory" };
  }
}
