import { useEffect } from "react";


export function useLocalStorage(key, value) {
    useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value]);
}