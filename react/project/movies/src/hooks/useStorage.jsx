import { useEffect, useState } from "react";
//useEffect = save the changes to localStorage
//useState = store the watchlist state

const STORAGE_KEY = "watchlist";

export default function useStorage() {
    const [watchlist, setWatchlist] = useState(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(watchlist)
        );
    }, [watchlist]);

    return {
        watchlist,
        setWatchlist,
    };
}