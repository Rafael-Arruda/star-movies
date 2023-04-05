import React, {useContext, useEffect} from 'react';

import './modal.css';

import { ModalContext } from '../../contexts/modal';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import CardMedia  from '@mui/material/CardMedia';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 600,
  minHeight: 300,
  bgcolor: 'background.paper',
  border: '0px solid #fff',
  boxShadow: 24,
  p: 0,
};

export default function TransitionsModal({item}) {
  
    const {open, handleClose} = useContext(ModalContext);

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                // timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <CardMedia
                        component="img"
                        alt={item.title}
                        height='250'
                        image={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                        />
                        <Box p={2}>
                            <Typography id="transition-modal-title" variant="h5" component="h2">
                                {item.title}
                            </Typography>
                            <Typography variant='h6' sx={{mt: 1}}>
                                {item.release_date}
                            </Typography>
                            <Typography 
                            id="transition-modal-description" 
                            sx={{ mt: 2, maxHeight: 100, overflow: 'auto' }}>
                                {item.overview}
                            </Typography>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}