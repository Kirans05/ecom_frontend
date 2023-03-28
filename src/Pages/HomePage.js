import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import Header from '../Components/Header/Header'
import Banner from '../Components/HomePageComponents/Banner'
import BestSeller from '../Components/HomePageComponents/BestSeller'
import DifferentBikes from '../Components/HomePageComponents/DifferentBikes'
import ElectricVehicleLocation from '../Components/HomePageComponents/ElectricVehicleLocation'
import ShopByBrands from '../Components/HomePageComponents/ShopByBrands'
import ShopElectricVehicle from '../Components/HomePageComponents/ShopElectricVehicle'
import TopOffers from '../Components/HomePageComponents/TopOffers'

const HomePage = () => {

  

  return (
    <Box>
        <Header />
        <DifferentBikes />
        <Banner />
        <ShopElectricVehicle />
        <ShopByBrands />
        <ElectricVehicleLocation />
        <TopOffers />
        <BestSeller />
        <Typography>jhkhjk</Typography>
        <Typography>jhkhjk</Typography>
        <Typography>jhkhjk</Typography>
        <Typography>jhkhjk</Typography>
        <Typography>jhkhjk</Typography>
        <Typography>jhkhjk</Typography>
        <Typography>jhkhjk</Typography>
        <Typography>jhkhjk</Typography>
    </Box>
  )
}

export default HomePage