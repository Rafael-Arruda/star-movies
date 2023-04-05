import React, {useState, useEffect, useContext} from 'react';

import * as C from './style';

import { ModalContext } from '../../contexts/modal';
import { MovieContext } from '../../contexts/movie';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Box } from '@mui/material';
import { Grid } from '@mui/material';

import { CircularProgress } from '@mui/material';

import Card from '../../components/Card';
import Modal from '../../components/Modal';

export default function Favorites() {

    const {open, movie} = useContext(ModalContext);
    const {favorites, setFavorites} = useContext(MovieContext);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const list = localStorage.getItem('starMovies');

        setFavorites(JSON.parse(list) || []);
        setTimeout(() => {
            setLoading(false);
        }, 1500)
    }, [])

    return(
        <C.Container>
            <Header/>
            {loading?
            <Box className='box-favorites' sx={{ display: 'flex'}}>
                <CircularProgress />
            </Box>
            :
            <Box className="box-favorites" sx={{ width: '100%', padding: 3 }}>
                <Grid container spacing={2}>
                    {favorites.map((movie) => (
                        <Grid 
                        key={movie.id} 
                        item 
                        lg={3} md={4} sm={6} xs={12} 
                        sx={{display: 'flex', justifyContent: 'center'}}
                        >
                            <Card item={movie} action={'Remover'}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            }
            <Footer/>
            {open && <Modal item={movie}/>}
        </C.Container>
    )
}