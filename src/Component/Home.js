import React,{useState} from 'react'
import sunset from '../assest/bg.jpg'
import Form from './Form'
import Information from './Information'


export default function Home() {

    const [result , setResult] = useState({})
  return (
    <>
    <div className='flex items-center h-[100vh] ml-auto mr-auto w-[65%]'>
      <div className=' w-[27%] h-[80%] bg-cover'><img className=' invisible md:visible   rounded-l-lg ' src={sunset}  alt="" /></div>
      <div className='w-[73%] h-[80%] '>
        <Form setResult={setResult}/>
        <Information result ={result} />
      </div>
    </div>
    </>
  )
}
