import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import {  notificationCount } from './store/atoms/notification'
import { useRecoilValue, RecoilRoot, useSetRecoilState } from "recoil";
// import { messageCount } from './store/atoms/messageCount'
// import { myNetworkCount } from './store/atoms/myNetworkCount'
// import { jobsCount } from './store/atoms/jobsCount'
// import { totalCount } from './store/selectors/totalCount'
import { todoAtom } from "./store/atoms/todos";
import { todosfamily } from "./store/atoms/todosAtomfamily";
import { todo } from "./store/atoms/todosAtomfamily";

function App() {
  return (
    <>
      <RecoilRoot>
        
        <Updater></Updater>
        <MainComponent id={1}></MainComponent>
        <MainComponent id={2}></MainComponent>
        <MainComponent id={2}></MainComponent>
        <MainComponent id={2}></MainComponent>
        <MainComponent id={2}></MainComponent>
        <MainComponent id={2}></MainComponent>
      </RecoilRoot>
    </>
  );
}

// function MainComponent(){
//   const notificationcount=useRecoilValue(notificationCount);
//   const messagecount=useRecoilValue(messageCount);
//   const jobscount=useRecoilValue(jobsCount);
//   const NetworkCount=useRecoilValue(myNetworkCount);
//   const tc=useRecoilValue(totalCount)
// return <div>
//   <button>Home</button>
//   <button>My Network ({(NetworkCount>99)?'99+':NetworkCount})</button>
//   <button>Jobs ({(jobscount>99)?'99+':jobscount})</button>
//   <button>Messaging ({(messagecount>99)?'99+':messagecount})</button>
//   <button>Notification ({(notificationcount>99)?'99+':notificationcount})</button>
//   <button>Me({tc})</button>
// </div>
// }

// function MainComponent(){
//   const todo=useRecoilValue(todoAtom);
//   console.log(todo);
//   return <div>
//   {/* <button>Home</button>
//   <button>My Network ({(todo.network>99)?'99+':todo.network})</button>
//   <button>Jobs ({todo.jobs})</button>
//   <button>Messaging ({todo.messaging})</button>
//   <button>Notification ({todo.notifications})</button>
//   <button>Me()</button> */}
//   {JSON.stringify(todo)}
// </div>
// }

function MainComponent({ id }) {
  const todo = useRecoilValue(todosfamily(id));
  console.log(todo);
  return <div>{JSON.stringify(todo)}</div>;
}

function Updater(){
  const updateTodo=useSetRecoilState(todosfamily(2)); 
  useEffect(()=>{
    setTimeout(() => {
      updateTodo({id:2,title:"nothing new",description:"nothing new"})
    }, 5000);
  },[])
}
export default App;
