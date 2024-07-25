"use client";
import { useEffect, useState } from "react";
import pb from "../lib/pb";
import { currentUser } from "./authcontext";

const Login = function Login({setclickedfalse} : {setclickedfalse : any}){
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');




  const handleLogin = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      await pb.collection("users").authWithPassword(
        email,
        password, 
      );
      console.log("logged in")
    }catch(e){
      throw e;
      console.log(e)
    }
  }


  return (
    <div className="w-full h-[600px] flex absolute top-0  justify-center  content-center ">
      <div className="w-[380px] h-[520px] bg-white rounded-xl mt-20 flex flex-col">
        <button onClick={setclickedfalse} className="ml-[19rem] mt-3 text-2xl">X</button>
        <h1 className="self-center mt-5 text-3xl">Welcome back!</h1>
        <p className=" self-center text-xl text-gray-500">good to see you again !!</p>
        <form className='flex flex-col justify-center items-center'>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-white w-80 mt-10 p-2 border-2 border-prim rounded-[0.5rem]'            
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-white w-80 mt-3 p-2 border-2 border-prim rounded-[0.5rem]'            
          />
          <button  onClick={handleLogin} className="mt-2 w-80  border-prim text-xl text-prim h-11 rounded-md border-2 duration-500 hover:bg-sec">Log in</button>
        </form>
          <p className='self-center text-xl mt-1'>Don t have an account ? <button className="text-blue-500 underline">sign up</button></p>
      </div>
    </div>
  );
}

export default Login;
