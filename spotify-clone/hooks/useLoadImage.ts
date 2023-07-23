import { Song } from "@/types"; 
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadIamge = (song: Song) => {
    const supabaseClient = useSupabaseClient();

    // check if there is a song
    if (!song) {
        return null;
    }

    const { data: imageData } = supabaseClient.storage.from("images").getPublicUrl(song.image_path);

    return imageData.publicUrl;
}

export default useLoadIamge;