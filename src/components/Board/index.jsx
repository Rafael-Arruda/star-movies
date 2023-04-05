import React, { useContext } from "react";

import * as C from './style';

import { ModalContext } from "../../contexts/modal";
import { MovieContext } from "../../contexts/movie";

import Card from "../Card";
import Modal from '../Modal';
import Pagination from '../Pagination';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function Board() {

    const {open, movie} = useContext(ModalContext);
    const {moviesFilter, loading} = useContext(MovieContext);

    return(
        <C.Container>
            {loading?
            <Box sx={{ display: 'flex'}}>
                <CircularProgress />
            </Box>
            :
            <>
                <Box className="box-grid" sx={{ width: '100%', padding: 3 }}>
                    <Grid container spacing={2}>
                        {moviesFilter.map((movie) => (
                            <Grid 
                            key={movie.id} 
                            item 
                            lg={3} md={4} sm={6} xs={12} 
                            sx={{display: 'flex', justifyContent: 'center'}}
                            >
                                <Card item={movie} action={'Salvar'}/>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Pagination/>
            </>
            }
            {open && <Modal item={movie}/>}
        </C.Container>
    )
}