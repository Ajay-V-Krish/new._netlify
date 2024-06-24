import React from 'react'
import { Box, Typography, } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
     <Box sx={{bgcolor:"black", textAlign:'center',color:'white',p:3}}>
        <Box sx={{my: 3, "& svg":{
            fontSize:"60px",
            cursor:"pointer",
            mr:2,
        },
        "& svg:hover":{
            color:'goldenrod',
            // transform:'translateX(5px)',
            // transition: 'all 400ms',
        }
        }}>
          <InstagramIcon/>
          <FacebookIcon/>
          <WhatsAppIcon/>
          <XIcon/>
          <GitHubIcon/>
          <YouTubeIcon/>
        </Box>
        <Typography variant='h5'>
            All Rights Reserved & copyright @ AArestaurant
        </Typography>
     </Box>
    </>
  )
}

export default Footer