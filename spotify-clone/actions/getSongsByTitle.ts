import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers"; 
import getSongs from "./getSongs";

const getSongsByTitle = async (title: string): Promise<Song[]> => {
    // server component
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    if (!title) {
        const allSongs = await getSongs();
        return allSongs;
    }

    const { data: sessionData, error: sessionError } = await supabase.auth.getSession();

    if (sessionError) {
        console.log(sessionError.message);
        return [];
    }

    const { data, error } = await supabase.from("songs").select("*").eq("user_id", sessionData.session?.user.id).ilike('title', `%${title}%`).order("created_at", { ascending: false });
    
    if (error) {
        console.log(error.message);
    }

    return ( data as any ) || [];
}

export default getSongsByTitle;