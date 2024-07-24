"use client";
import { useState } from "react";

const Login = function Login({setclickedfalse , setclickedsign} : {setclickedfalse : any , setclickedsign : any}){
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');

  /*
  const handleLogin = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      const {error} = await supabase.auth.signInWithPassword({
        email : email,
        password : password,
      });
      if (error) throw error;
    }catch(error){
      throw error;
    }
  }*/

  return (
    <div className="w-full h-[600px] flex absolute top-0  justify-center  content-center  bg-black bg-opacity-65">
      <div className="w-[380px] h-[520px] bg-white rounded-xl mt-10 flex flex-col">
        <button onClick={setclickedfalse} className="ml-[19rem] mt-3 text-2xl">X</button>
        <h1 className="self-center mt-5 text-3xl">Welcome back!</h1>
        <p className=" self-center text-xl text-gray-500">good to see you again !!</p>
        <form className='flex flex-col justify-center items-center'>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-white w-80 mt-10 p-2 border-2 border-black rounded-[0.5rem]'            
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-white w-80 mt-3 p-2 border-2 border-black rounded-[0.5rem]'            
          />
          <button className="mt-2 w-80 border-black text-xl text-black h-11 rounded-md border-2 duration-500 hover:text-white hover:bg-black ">Log in</button>
        </form>
          <p className='self-center text-xl mt-1'>Don t have an account ? <button onClick={setclickedsign} className="text-blue-500 underline">sign up</button></p>
      </div>
    </div>
  );
}

export default Login;
