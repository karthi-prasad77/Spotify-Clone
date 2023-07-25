import { Song } from "@/types";
import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";
import useSubscribeModal from "./useSubscribeModal";

const useOnPlay = (songs: Song[]) => {

    const subscribeModel = useSubscribeModal();
    const player = usePlayer();
    const authModal = useAuthModal();
    const { user, subscription } = useUser();

    const onPlay = (id: string) => {
        if (!user) {
            return authModal.onOpen();
        }

        // Based on the feedback it would be changed in future
        /* if (!subscription) {
            return subscribeModel.onOpen();
        } */

        player.setId(id);
        player.setIds(songs.map((song) => song.id));
    }
    return onPlay;
}

export default useOnPlay;