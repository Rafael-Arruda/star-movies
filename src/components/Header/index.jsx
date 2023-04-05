import React, {useContext} from 'react';

import {Link} from 'react-router-dom';

import { MovieContext } from '../../contexts/movie';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';

import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        '#back-to-top-anchor',
      );
  
      if (anchor) {
        anchor.scrollIntoView({
          block: 'center',
        });
      }
    };
  
    return (
      <Fade in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          {children}
        </Box>
      </Fade>
    );
}
  
ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function Header(props) {

  const {movies, setMoviesFilter} = useContext(MovieContext);

  function searchMovie(e) {
    const search = e.target.value.toLowerCase()
    const filterList = movies.filter((movie) => movie.title.toLowerCase().includes(search));

    setMoviesFilter(filterList);    
  }

  return (
      <Box sx={{ flexGrow: 1 }}>
          <CssBaseline />
          <AppBar>
              <Toolbar>
                  <Typography
                      variant="h6"
                      noWrap
                      component="div"
                      sx={{ flexGrow: 1, display: { xs: 'block'} }}
                  >
                      <Link to='/'>Star Movies</Link>
                  </Typography>
                  <Link to='/favorites'>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: {xs: 0, sm: 1} }}
                    >
                        <FavoriteIcon />
                    </IconButton>
                  </Link>
                  <Search sx={{maxWidth: {xs: 150, sm: 300}}}>
                      <SearchIconWrapper>
                          <SearchIcon />
                      </SearchIconWrapper>
                      <StyledInputBase
                          onChange={searchMovie}
                          placeholder="Search…"
                          inputProps={{ 'aria-label': 'search' }}
                      />
                  </Search>
              </Toolbar>
          </AppBar>
          <Toolbar id="back-to-top-anchor" />
          <ScrollTop {...props}>
              <Fab size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
              </Fab>
      </ScrollTop>
      </Box>
  );
}