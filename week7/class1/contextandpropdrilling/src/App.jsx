import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './component/count'
import { useContext } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountContext.Provider value={{count}}>
        <Button setCount={setCount}></Button>
      </CountContext.Provider>
    </>
  )
}


function Button({setCount}){
  const {count}=useContext(CountContext);
  return(
<div>
  <b>Count is {count}</b> <br />
  <button onClick={()=>setCount(count+1)}>Increase</button>
  <button onClick={()=>setCount(count-1)}>Decrease</button>

</div>
  )
}

export default App
