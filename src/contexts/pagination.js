import React, {createContext, useState} from 'react';

export const PaginationContext = createContext({});


function PaginationProvider({children}) {

    const [page, setPage] = useState();

    return(
        <PaginationContext.Provider value={{page, setPage}}>
            {children}
        </PaginationContext.Provider>
    )
}

export default PaginationProvider;