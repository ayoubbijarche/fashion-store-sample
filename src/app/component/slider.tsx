"use client";
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import Image from "next/image";
import style from "./styles/Slider.module.css";
import cover1 from "../../../assets/slide1.jpg";
import cover2 from "../../../assets/slide2.jpg";
import cover3 from "../../../assets/slide3.jpg";
import cover4 from "../../../assets/slide4.jpg";
import github from "../../../assets/github.svg";



const Cover = () => {

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        const clearNextTimeout = function clearNextTimeout() {
          clearTimeout(timeout);
        }
        const nextTimeout = function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 1500);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        })
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return(
    <>
      <div ref={sliderRef} className="keen-slider  h-full rounded-[30px]">
        <div className="keen-slider__slide number-slide1">
          <Image src={cover1} layout="fill" objectFit="cover" alt="Cover image"  className="filter brightness-75"/>
        </div>
        <div className="keen-slider__slide number-slide2">
          <Image src={cover2} layout="fill" objectFit="cover" alt="Cover image" className="filter brightness-75"/>
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image src={cover3} layout="fill" objectFit="cover" alt="Cover image" className="filter brightness-75"/>
        </div>
        <div className="keen-slider__slide number-slide4">
          <Image src={cover4} layout="fill" objectFit="cover" alt="Cover image" className="filter brightness-75"/>
        </div>
        
          <div className="flex flex-col">
            <div className="absolute inset-0 flex  mt-10 justify-normal ml-16 w-[500px]">
              <h1 className={`text-5xl text-white font-normal ${style.animatedtext1}`}>Get The best High Quality Clothes Now</h1>
            </div>
            <div className="absolute inset-0 flex  mt-36 justify-normal ml-16 w-[300px]">
              <h1 className={`text-xl text-white font-normal ${style.animatedtext2}`}>this is only a show work sample made by ayoub bijarche and is not for production or real work.</h1>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-normal ml-16 pt-96">
            <button className={`items-center font-medium flex flex-row text-black bg-white w-36 h-10 rounded-2xl ${style.repobtn}`}>
              <Image alt="" src={github} className="w-6 ml-2 "/>
              <p className="ml-3">github repo</p>
            </button>
          </div>
        </div>        
      </>
  )
}


const Slider = () =>{
  return(
    <div className="self-center mt-1 w-[95%] h-[550px] rounded-[30px]  ">
      <Cover/>
    </div>
  )
}


export default Slider;
