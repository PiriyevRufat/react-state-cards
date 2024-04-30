import React, { useState } from "react";

function App() {
  const [isSignedIn,setIsSignedIn] = useState(false);
  
  const Profile =()=>{
    return <p>Welcome back,good to see you in here</p>
  }
  const Home =()=>{
    return <p>Please Sign in</p>
  }
  const TrueorFalse =() => {
    if(isSignedIn) return <Profile />
    else return <Home />
  }
  const Button =(props) => {
    return <button type = "button" onClick = {props.onClick}>
      {props.isSignedIn? "Sign out"
      : "Sign in"}
    </button>
  }
  const handleClick =() => {
    setIsSignedIn(!isSignedIn);
  }
  return (
    <div className="App">
    <Button isSignedIn = {isSignedIn} onClick = {handleClick}/>
    <TrueorFalse />
    </div>
  );
}
export default App;
