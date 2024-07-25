"use client";
import Nav from "./navbar";
import Navauth from "./authnavbar";
import { useEffect, useState } from "react";
import pb from "../lib/pb";

const Mynav = () => {
  const [isAuth , setIsAuth] = useState(false);
  useEffect(()=>{
    const checkAuth = async () =>{
      const isValid = pb.authStore.isValid;
      setIsAuth(isValid);
    }
    checkAuth();
    pb.authStore.onChange(()=>{
      setIsAuth(pb.authStore.isValid);
    });
  }, [])

  return(
    <>
      {isAuth? <Navauth/> : <Nav/>}
    </>
  )
}

export default Mynav;
