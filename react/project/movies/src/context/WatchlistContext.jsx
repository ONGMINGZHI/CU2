import { createContext, useContext } from "react";
import useStorage from "../hooks/useStorage";

const WatchlistContext = createContext();
//create a "container" to store the watchlist data
//components access by using useWatchlist()

export function WatchlistProvider({ children }) {
    const { watchlist, setWatchlist } = useStorage();
    //so data can go to localStorage

    const addTitle = (newTitle) => {
        setWatchlist((prev) => [...prev, newTitle]);
    };//add new movie/series-CREATE

    const updateTitle = (updatedTitle) => {
        setWatchlist((prev) =>
            prev.map((item) =>
                item.id === updatedTitle.id ? updatedTitle : item
            )
        );//use .map to replace only the item that have matching id
    };//edit old movie/series-WatchlistDetail

    const deleteTitle = (id) => {
        setWatchlist((prev) =>
            prev.filter((item) => item.id !== id)
        //use .filter to create a new array with everything 除了 the item wuth selected id
        );
    };//remove movie/series-WatchlistCard

    return (
        <WatchlistContext.Provider
            value={{
                watchlist,
                addTitle,
                updateTitle,
                deleteTitle,
                //These can be shared
            }}
        >
            {children}
        </WatchlistContext.Provider>
    );
}

export function useWatchlist() {
    return useContext(WatchlistContext);
}