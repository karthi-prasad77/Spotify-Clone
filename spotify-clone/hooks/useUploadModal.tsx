import { create } from "zustand";

interface UploadModal {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

const useUploadModal = create<UploadModal>((set) => ({isOpen: false, onOpen: () => set({ isOpen: true }), onClose: () => set({ isOpen: false })}))


export default useUploadModal;