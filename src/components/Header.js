import React,{useState} from 'react'
import {Box, AppBar, Typography, Toolbar, IconButton} from '@mui/material'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Link } from 'react-router-dom';
import '../styles/Header.css'
import WidgetsIcon from '@mui/icons-material/Widgets';

const Header = () => {
   
  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{bgcolor: "black"}}>
            <Toolbar>
                <IconButton color='inherit' aria-label='open drawer' edge='start' sx={{mr:2, display:{sm:"none"}}}>
                    <WidgetsIcon/>
                </IconButton>
            <Typography 
            color={'goldenrod'} 
            variant='h6' 
            component={'div'} 
            sx={{flexGrow:1}}>
                <RestaurantIcon/>
                My Resturant
            </Typography>
            <Box sx={{display: {xs:'none',sm:'block'}}}>
               <ul className='Navigation-menu'>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    <Link to={'/menu'}>Menu</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contact</Link>
                </li>
                </ul> 
            </Box>
            </Toolbar>
        </AppBar>
      </Box> 
      <Box >
      <Toolbar/> 
      </Box>
     
    </>
  )
}

export default Header