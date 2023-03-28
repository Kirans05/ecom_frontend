import { Box, Rating, Typography } from '@mui/material'
import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const BestSellerCard = ({item}) => {
  return (
    <Box>
        <Typography>BestSellerCard</Typography>
        <Box component={"img"} src={item.url} alt={"image"} />
        <Typography>{item.name}</Typography>
        <Rating name="half-rating" defaultValue={item.ratings.toString()} precision={0.5} readOnly/>
        <Box>
            <CurrencyRupeeIcon />
            <Typography>{item.price}</Typography>
        </Box>
    </Box>
  )
}

export default BestSellerCard