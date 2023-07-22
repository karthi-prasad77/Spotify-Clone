"use client";

import AuthModal from "@/components/AuthModal";
import { useEffect, useState } from "react";
import UplaodModal from "@/components/UploadModal";

const ModelProvider = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <AuthModal />
            <UplaodModal />
        </>
    )
}

export default ModelProvider;