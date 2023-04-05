import React, {useContext} from "react";

import { ModalContext } from "../../contexts/modal";
import { MovieContext } from '../../contexts/movie';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardMovie({item, action}) {

    const {handleOpen} = useContext(ModalContext);
    const {setFavorites} = useContext(MovieContext);

    function handleSave() {
        const myList = localStorage.getItem('starMovies');

        let savedMovies = JSON.parse(myList) || [];

        const hasMovie = savedMovies.some( (movieSaved) => movieSaved.id === item.id )

        if(hasMovie) {
            return;
        }

        savedMovies.push(item);
        setFavorites(savedMovies);
        localStorage.setItem('starMovies', JSON.stringify(savedMovies));
    }

    function handleRemove(id) {
        const myList = localStorage.getItem('starMovies');

        let savedMovies = JSON.parse(myList);
        let filterList = savedMovies.filter((movie) => movie.id !== id);

        setFavorites(filterList);
        localStorage.setItem('starMovies', JSON.stringify(filterList));
    }

    return(
        <Card sx={{ maxWidth: 375 }}>
            <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
            />
            <CardContent>
                <Typography 
                gutterBottom 
                variant="h5" 
                component="div"
                sx={{ height: 60, overflow: 'hidden' }}
                >
                    {item.title}
                </Typography>
                <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{height: 71, overflow: 'hidden'}}
                >
                    {item.overview}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="text" size="small" onClick={action === 'Salvar'? handleSave : () => handleRemove(item.id)}>{action}</Button>
                <Button variant="text" size="small" onClick={() => handleOpen(item)}>Saiba mais</Button>
            </CardActions>
        </Card>
    )
}