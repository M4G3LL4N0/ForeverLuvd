import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";

export type Memory = {
  id: string;
  loved_one_id: string;
  title: string;
  description: string | null;
  memory_type: string;
  memory_date: string | null;
  file_url: string | null;
  created_at?: string;
};

export type CreateMemoryInput = {
  loved_one_id: string;
  title: string;
  description?: string | null;
  memory_type?: string;
  memory_date?: string | null;
  file?: File | null;
};

export async function getMemories(): Promise<Memory[]> {
  if (!isSupabaseConfigured()) {
    return [];
  }

  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("memories")
      .select("*")
      .order("memory_date", { ascending: false });

    if (error) {
      console.error("getMemories error:", error.message);
      return [];
    }

    return (data ?? []) as Memory[];
  } catch (error) {
    console.error("getMemories exception:", error);
    return [];
  }
}

export async function createMemory(input: CreateMemoryInput): Promise<{
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
    let file_url: string | null = null;

    if (input.file) {
      const filePath = `${crypto.randomUUID()}-${input.file.name}`;

      const { error: uploadError } = await supabase.storage
        .from("memory-files")
        .upload(filePath, input.file);

      if (uploadError) {
        return {
          success: false,
          error: uploadError.message,
        };
      }

      const { data: publicUrlData } = supabase.storage
        .from("memory-files")
        .getPublicUrl(filePath);

      file_url = publicUrlData.publicUrl;
    }

    const { error } = await supabase.from("memories").insert({
      loved_one_id: input.loved_one_id,
      title: input.title,
      description: input.description ?? null,
      memory_type: input.memory_type ?? "note",
      memory_date: input.memory_date ?? null,
      file_url,
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
    console.error("createMemory exception:", error);
    return {
      success: false,
      error: "Unexpected error creating memory.",
    };
  }
}
