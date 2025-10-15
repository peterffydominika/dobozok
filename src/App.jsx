import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='border'>
        Dobozok App
        <BoxComponent hatterSzin="green" kiindulo={2} />
        <BoxComponent hatterSzin="blue" kiindulo={3} />
        <BoxComponent hatterSzin="red" kiindulo={4} />
      </div>
    </>
  )
}
const BoxComponent=({kiindulo, hatterSzin}) => {
  const [getSzamlalo, setSzamlalo] = useState(kiindulo);
  return(
    <div
      style={{
        width: "150px",
        height: "150px",
        backgroundColor: hatterSzin
      }}
      className='p-2 m-5 rounded'
      onClick={()=>{
        setSzamlalo(getSzamlalo +1);
      }}><br/><br/>
        <h1>{getSzamlalo}</h1>
    </div>
  );
}

export default App;
