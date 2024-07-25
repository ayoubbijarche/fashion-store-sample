"use client";
import { useState } from "react";
import pb from "../lib/pb";


const Signup = () => {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [name , setName] = useState('');

  const Sign = async (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    try{
      const record = await pb.collection("users").create({
      username : name,
      email : email,
      password : password,
      passwordConfirm : password,
    });
    console.log("created user ");
    await pb.collection("users").authWithPassword(email , password);
  }catch(e){
    console.log(e);
  }
 };


  return(
     <div className="w-full h-[600px] flex absolute top-10  justify-center  content-center">
      <div className="w-[380px] h-[520px] bg-white rounded-xl mt-10 flex flex-col">
        <button  className="ml-[19rem] mt-3 text-2xl">X</button>
        <h1 className="self-center mt-5 text-3xl">Welcome</h1>
        <p className=" self-center text-xl text-gray-500">buy the best clothing!</p>
        <form  onSubmit={Sign} className='flex flex-col justify-center items-center'>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='bg-white w-80 mt-5 p-2 border-2 border-black rounded-[0.5rem]'            
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-white w-80 mt-3 p-2 border-2 border-black rounded-[0.5rem]'            
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-white w-80 mt-3 p-2 border-2 border-black rounded-[0.5rem]'            
          />
          <button className="mt-2 w-80 border-black text-xl text-black h-11 rounded-md border-2 duration-500 hover:text-white hover:bg-black ">Sign Up</button>
        </form>
          <p className='self-center text-xl mt-1'>create an account & join us</p>
      </div>
    </div>

  )
}

export default Signup;
