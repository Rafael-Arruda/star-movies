import React from "react";
import GlovalStyle from './styles/global';

import ModalProvider from "./contexts/modal";
import MovieProvider from "./contexts/movie";
import PaginationProvider from './contexts/pagination';

import RoutesApp from "./routes/route";

export default function App() {
  return(
    <PaginationProvider>
      <MovieProvider>
        <ModalProvider>
          <RoutesApp/>

          <GlovalStyle/>
        </ModalProvider>
      </MovieProvider>
    </PaginationProvider>
  )
}