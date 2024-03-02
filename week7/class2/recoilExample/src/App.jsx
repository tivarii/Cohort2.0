import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { CountAtom } from './store/atoms/countAtom'
import { EvenSelector } from './store/selectors/EvenSelector'

function App() {

  return (
    <>
      <RecoilRoot>
        <Count>
        </Count>
      </RecoilRoot>
    </>
  )
}

function Count(){
  return(
    <div>
      <CountRenderer></CountRenderer>
      <Button></Button>
      <Even></Even>
    </div>
  )
}

function Button(){
  // const [count,setCount ]=useRecoilState(CountAtom);

  //here we only need to set value that we can do only with the help of setCount

  const setCount=useSetRecoilState(CountAtom);
return(
  <div>
    <button onClick={()=>{setCount(count=>count+1)}}>Increase</button>
    <button onClick={()=>{setCount(count=>count-1)}}>Decrease</button>
  </div>
)
}

function CountRenderer(){
  const count=useRecoilValue(CountAtom);
  return <div>
    <b> Count is {count}</b>
  </div>
}

function Even(){
  const isEven=useRecoilValue(EvenSelector);
  return <div>
    {(isEven==0) ? "It is Even":"" }
  </div>
}

export default App
