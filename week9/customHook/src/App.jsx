import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import axios from "axios";

function App() {
  
  // function useTodos() {
  //   const [loader, setLoader] = useState(true);
  //   const [todo, setTodo] = useState([]);
  //   useEffect(() => {
  //     axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
  //       setTodo(res.data.todos);
  //     });
  //     setLoader(false);
  //   }, []);

  //   return { todo, loader };
  // }


  //now we create isOnline hook
  // function useIsOnline(){
  //   const isOnline=window.navigator.onLine;
  //   return isOnline;
  // }
  // const[isline,setOnline]=useState(true);

  // useEffect(()=>{
  //   setInterval(()=>{
  //   const l=useIsOnline();
  //   setOnline(l);
  // },10000);},[])

  //   if(isline){
  //     return <div> online </div>
  //   }else{
  //     return <div>offline</div>
  //   }



  //create a hook which run a function after a given time

  // function useInterval(callback,delay){
  //   useEffect(()=>{
  //   const ci=setInterval(callback,delay);
  //   return ()=>{clearInterval(ci)}
  //   },[callback,delay])
  // }
  // const[c,setC]=useState(0);
  // useInterval(()=>{
  //   setC(c+1);
  // },1000);
  // return <div><b>the timer is at{c}</b></div>


  //now we create a debounce hook which continue bouncing for a timeinterval
  


  const[value,setValue]=useState("");
  const debouncevalue=useDebounce(value,10000);
  return (
    <div>
      <input type="text" onChange={(e)=>{setValue(e.target.value)}} /> <br/>
      <b>the debounce value is {debouncevalue}</b>
    </div>
  )
  



}

function useDebounce(value,interval){
  const [debouncevalue,setDebounceValue]=useState(value)
  useEffect(()=>{
    let timeout=setTimeout(()=>{
      setDebounceValue(value);
    },10000)
    return ()=>{clearTimeout(timeout)};
  },[value])
  return debouncevalue;
  
}
// function MyComponent(){
//   const [count, setCount] = useState(0);
//   const incrementCount=()=>{
//     setCount(count+1);
//   }

//   return(
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   )
// }

//same component using class based object

// class MyComponent extends React.Component{
//   constructor (props){
//     super(props);
//     this.state={count:0};
//   }

//   increment=()=>{
//       this.setState({count:this.state.count+1});
//     }

//   render(){
//       return(
//         <div>
//           <p>{this.state.count}</p>
//           <button onClick={this.increment}>increment</button>
//         </div>
//       );
//     }

// }

//now we seeing how a function return by useState hook called
// function MyComponent(){

//   useEffect(()=>{
//     console.log("in the useEffect hook");
//     return ()=>{console.log("return some effect")};
//   },[]);
//   return <div>In the MyComponent</div>
// }

// class MyComponent extends React.Component{
//   componentDidMount(){
//     console.log("Component mounted");
//   }
//   componentWillUnmount(){
//     console.log("component unmounted");
//   }
//   render(){
//     return <div>hey there</div>
//   }
// }

export default App;
