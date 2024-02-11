import { useEffect, useState } from "react";
// import { memo } from "react"
import React from "react";
// function App() {
//   // function changeTitle(setTitle) {
//   //        const t = Math.random();
//   //        setTitle("" + t);
//   //      }
//   // const [title, setTitle] = useState("Jai Shree");
//   // return (
//   //   <>
//   //     <button onClick={() => changeTitle(setTitle)}>
//   //        Click to change the title
//   //      </button>
//   //      <HeaderComponent title={title}></HeaderComponent>
//   //     <HeaderComponent title={"Ram"}></HeaderComponent>
//   //     <HeaderComponent title={"Ram"}></HeaderComponent>
//   //     <HeaderComponent title={"Ram"}></HeaderComponent>
//   //     <HeaderComponent title={"Ram"}></HeaderComponent>
//   //   </>
//   // );

// }

// // function HeaderWithButton() {
// //   function changeTitle(setTitle) {
// //     const t = Math.random();
// //     setTitle("" + t);
// //   }
// //   const [title, setTitle] = useState("Jai Shree");
// //   return (
// //     <>
// //       <button onClick={() => changeTitle(setTitle)}>
// //         Click to change the title
// //       </button>
// //       <HeaderComponent title={title}></HeaderComponent>
// //     </>
//   // );
// // }
// // const HeaderComponent = React.memo(function HeaderComponent({ title }) {
// //   return <div>{title}</div>;
// // });

// function App() {
//   let counter=3;
//   const [title, setTitle] = useState([
//     {
//       id: 0,
//       title: "food",
//       description: "eat fast food",
//     },
//     {
//       id: 1,
//       title: "cake",
//       description: "eat cake",
//     },
//     {
//       id: 2,
//       title: "protein",
//       description: "eat protein",
//     },
//   ]);
//   function addTodo(){
//     setTitle([...title,{
//       id:counter++,
//       title:"Random",
//       description:"sdkfjdskljdsf"
//     }])
//   }
//   return <>
//   <button onClick={addTodo}>Add a Todo</button>
//   {title.map((todo)=>{
//     return(
//       <div>
//         <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>
//       </div>
//     )
//   })}
//   </>;
// }

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h3>{description}</h3>
//     </div>
//   );
// }

// function App(){
//   return(<>
//     <CardWrapper>
//       see me in the warpper
//     </CardWrapper>
//     <CardWrapper >
//       <CardWrapper>i am in a CardWrapper CardWrapper</CardWrapper>
//     </CardWrapper>
//     </>
//   )
// }

// function TextComponent(){
//   return <div>
//     Hey bro
//   </div>
// }

// function CardWrapper({children}){
//   return(
//     <div style={{border:"2px solid black", padding: "12px"}}>
//       {children}
//     </div>
//   )
// }

function App(){
  const [todos,setTodo]=useState([]);

  useEffect(()=>{
    setInterval(()=>{
      fetch("https://sum-server.100xdevs.com/todos").then(async(response)=>{
      const json= await response.json();
      setTodo(json.todos)
    })
    },10000)
    
  },[]);
  return (
    <div>
      {todos.map(todo=>{return <TodoComponent key={todo.key} title={todo.title} description={todo.description}></TodoComponent>})}
    </div>
  )
}

function TodoComponent({title,description}){
  return(
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  )
}
export default App;
