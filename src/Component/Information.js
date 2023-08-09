import React from 'react'
import { Box ,Typography ,styled } from '@mui/material'
import {LocationOn ,SettingsBrightness ,Opacity ,Brightness5,Brightness6, Dehaze, Cloud} from '@mui/icons-material';

const Icon = styled(Typography)({
    padding : 10,
    letterSpacing : 2,
})

const Plan = styled(Typography)({
    color : 'red',
    margin:50,
    padding : 20
})
export default function Information({result}) {
  return (
    result && Object.keys(result).length > 0?
    <div className='mt-[40px] md:ml-[60px] ml-0 text-sm'>
    <Box>
        <Icon><LocationOn/> Location : {result.name} , {result.sys.country}</Icon>
        <Icon><SettingsBrightness/> Temperature : {result.main.temp} </Icon>
        <Icon><Opacity/> Humidity : {result.main.humidity} </Icon>
        <Icon><Brightness5/> Sun Rise : {new Date(result.sys.sunrise *1000).toLocaleTimeString() } </Icon>
        <Icon><Brightness6/> Sun Set : {new Date(result.sys.sunset * 1000).toLocaleTimeString()} </Icon>
        <Icon><Dehaze/> Humidity : {result.weather[0].main} </Icon>
        <Icon><Cloud/> Clouds : {result.clouds.all}% </Icon>
    </Box>
    </div>
    : <Plan>Please Enter the value check weather </Plan>
  )
}
