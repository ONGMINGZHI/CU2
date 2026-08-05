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
        );//use .map to make sure the id is correct
    };//edit old movie/series

    const deleteTitle = (id) => {
        setWatchlist((prev) =>
            prev.filter((item) => item.id !== id)
        //use .filter so everything remains except the selected id
        );
    };//remove movie/series

    return (
        <WatchlistContext.Provider
            value={{
                watchlist,
                addTitle,
                updateTitle,
                deleteTitle,
            }}
        >
            {children}
        </WatchlistContext.Provider>
    );
}

export function useWatchlist() {
    return useContext(WatchlistContext);
}