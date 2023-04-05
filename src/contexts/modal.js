import React, {useState} from 'react';
import { createContext } from "react";

export const ModalContext = createContext({});

function ModalProvider({children}) {
    
    const [open, setOpen] = useState(false);
    const [movie, setMovie] = useState({});

    const handleOpen = (movie) => {
        setOpen(true);
        setMovie(movie);
    }
    const handleClose = () => setOpen(false);
    
    return(
        <ModalContext.Provider
        value={{open, movie, handleOpen, handleClose}}
        >
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;