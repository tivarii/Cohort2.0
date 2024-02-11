import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios";



// function App() {
//   const [todo, setTodo] = useState([])
//   const [id,setId]=useState(1);
//   useEffect(() => {
//     axios.get(`https://sum-server.100xdevs.com/todos?id=${id}`)
//       .then((res) => {
//         setTodo(res.data.todos);
//       })
//       .catch((error) => {
//         console.error("Error fetching todos:", error);
//       });
//   }, [id]);
//   return (
//     <>
//       <input type="text" id="id1" placeholder='Id' />
//       <button onClick={()=>{setId(document.getElementById('id1').value)}}>For Todo</button>
//       {todo.map(todo=>{return <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>})}
//     </>
//   )
// }

// function Todo({title,description}){
//   return(
//     <div>
//     <h1>{title}</h1>
//     <h4>{description}</h4>
//     </div>
//   )

// function App(){
//   const[counter,setCounter]=useState(0);
//   const[input,ChangeInput]=useState(0);

//   let count=useMemo(()=>{
//     let c=0;
//     for(let i=0;i<=input;i++){
//       c=c+i;
//     }
//     return c;
//   },[input]);
//   return(<>
//   <input type="text" placeholder='Sum till here' onChange={(e)=>{ChangeInput(e.target.value)}} />

//   <div>sum from 0 to {input} is {count}</div>
//     <button onClick={()=>setCounter(counter+1)}>Count {counter}</button>
//   </>)
// }

function App(){
  const[counter,setCounter]=useState(0);
  var a=useCallback(()=>{
    console.log("I am a function")
  },[])
  return(
    <>
      
      
      <div>
        <button onClick={()=>{setCounter(counter+1)}}>Counter {counter}</button>
        <Show val={a}></Show>
      </div>
    </>
  )
}
const Show=memo(function ({val}){
  console.log("you are in show");
  return<>
  <h1>You have shown</h1></>
})

export default App
