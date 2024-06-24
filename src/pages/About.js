import React from 'react'
import Layout from '../components/Layout'
import {Box, Typography,} from '@mui/material'

const About = () => {
  return (
    <Layout>
       <Box sx={{my:13,
       textAlign:'center',
       "&h3":{
        fontWeight:"bold",
        my:2,
        fontSize: "50px",
        "&p":{
          textAlign:'justify'
        }
       }
       }}>
         <Typography variant='h3'>
          Welcome To Our Restaurant!!!
         </Typography>
         <p>
         A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also 
         offer take-out and food delivery services.The full form of RESTAURANT is Restaurant Eating Services To All Under Righteousness And Nourishment. This term 
         encompasses all types of restaurants from fast food joints to fine dining establishments.Establishment where refreshments or meals may be procured by the 
         public. The public dining room that ultimately came to be known as the restaurant originated in France, and the French have continued to make major 
         contributions to the restaurant's development.
         </p>
         <br/>
         <p>
         A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also 
         offer take-out and food delivery services.The full form of RESTAURANT is Restaurant Eating Services To All Under Righteousness And Nourishment. This term 
         encompasses all types of restaurants from fast food joints to fine dining establishments.Establishment where refreshments or meals may be procured by the 
         public. The public dining room that ultimately came to be known as the restaurant originated in France, and the French have continued to make major 
         contributions to the restaurant's development. A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also 
         offer take-out and food delivery services.The full form of RESTAURANT is Restaurant Eating Services To All Under Righteousness And Nourishment. This term 
         encompasses all types of restaurants from fast food joints to fine dining establishments.Establishment where refreshments or meals may be procured by the 
         public. The public dining room that ultimately came to be known as the restaurant originated in France, and the French have continued to make major 
         contributions to the restaurant's development.
         </p>

       </Box>
    </Layout>
  )
}

export default About