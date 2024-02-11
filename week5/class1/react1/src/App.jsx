
// import './App.css'
import { useState } from "react";


function App() {
  // const[count,setCount]= useState(0);
  // console.log(count);
  // return (
  //   <div>
  //     <CustomButton count={count} setCount={setCount}></CustomButton>
  //   </div>
  // )

  const [todo,setTodo]= useState([{
    title: "todo1",
    description: "we have to do shopping",
  },
  {
    title: "todo2",
    description: "we have to do gaming",
  },
  {
    title: "todo3",
    description: "we have to do studying",
  },])

  function addTodo(){
    setTodo([...todo,{
      title: "Random titile",
      description: "Random description"
    }])
  }

  return <div>
    <button onClick={addTodo}> Add Random Todo</button>
    {
      todo.map((item,index)=>(
        <TodoComponent title={item.title} description={item.description}></TodoComponent>
      ))
    }
  </div>


}

function TodoComponent(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}
// function CustomButton(props){
//   function incrementCounter(){
//     props.setCount(props.count+1);
//   }
//   return <button onClick={incrementCounter}>
//     Counter {props.count}
//   </button>
// }



export default App
