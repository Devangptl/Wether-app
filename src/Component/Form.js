import React ,{useState} from 'react'
import { Box,InputBase,Button ,styled } from '@mui/material'
import { getWeather } from '../services/api'
const Container = styled(Box)({
    backgroundColor: '#283e5d',
    // borderRadius : '0 8px 8px 0',
    padding : 8

})

const Input = styled(InputBase)({
    color : "#fff",
    marginRight : 20,
    fontSize :15
})

const GetButton = styled(Button)({
    background : "#e67e22"
})


export default function Form({setResult}) {

    const[data , setData] = useState({city : '' , country : ''})    

    const handleChange = (e) =>{
        setData({...data, [e.target.name] :e.target.value})
    }  

    const getWeatherInfo = async () =>{
      let response =   await getWeather(data.city , data.country)
      setResult(response)
    }

  return (
    <>
    
      <Container className='rounded-r-lg md:rounded-l-none rounded-l-lg'>
        <Input 
         placeholder='City'
         onChange={(e)=>handleChange(e)}
         name = 'city'
         />
        <Input 
        placeholder='Country'
        onChange={(e)=>handleChange(e)}
        name = 'country'
        />
        <GetButton 
        variant='contained'
        onClick={() =>getWeatherInfo()}
        >Get Wether</GetButton>
    </Container>
</>
  )
}
