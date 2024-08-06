"use strict";
// import React,{useState} from 'react'
exports.__esModule = true;
// function App() {
//   const [count,setCount]=useState<number>(0)
//   const changeCount=(num:number):void=>{
//     if(num>=0){
//       setCount(num)
//     }
//   }
//   return (
//     <div className='App'>
// <h1>Count:{count}</h1>
// <button onClick={()=>changeCount(count+1)}>Add</button>
// <button onClick={()=>changeCount(count-11)}>Del</button>
// <button onClick={()=>changeCount(0)}>Res</button>
//     </div>
//   )
// }
// export default App
// import React, { useEffect, useState } from "react";
// import { newCountries } from "./data";
// type CountriesProps = {
//   title: string;
//   lang: string;
//   gdp: number;
//   president: boolean;
//   population: number;
// };
// const App = () => {
//   let [countries, setCountries] = useState<CountriesProps[]>([]);
//   useEffect(() => {
//     setCountries(newCountries);
//   },[]);
//   let numberss = (num:number):void => {
//     let updatedCountries = [...countries];
//     updatedCountries.splice(num, 1);
//     setCountries(updatedCountries);
//   };
//   return (
//     <div>
//       {countries.map((country, index) => (
//         <div key={index}>
//           <h1>Title: {country.title}</h1>
//           <h3>Language: {country.lang}</h3>
//           <p>GDP: ${country.gdp} trillion</p>
//           <p>System: {country.president ? "President" : "Prime Minister"}</p>
//           <p>Population: {country.population} mln</p>
//           <button onClick={()=>numberss(index)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default App;
// import React, { useEffect, useState } from 'react'
// import { CountriesProps } from './Types'
// import { newCountries } from './data'
// import List from './components/List'
// const App = () => {
//   let [countries,setCountries]=useState<CountriesProps[]>([])
//   useEffect(()=>{
//     setCountries(newCountries)
//   },[])
//   const delItem=(num:number):void=>{
//     let copyCountries=[...countries]
//     copyCountries.splice(num,1)
//     setCountries(copyCountries)
//   }
//   return (
//     <div>
// <List delItem={delItem} countries={countries}/>
//     </div>
//   )
// }
// export default App
// import React, { useState, useEffect } from 'react';
// import { FaPlay, FaPause } from 'react-icons/fa';
// import { MdLockReset } from 'react-icons/md';
// const App = () => {
//   const [millisecond, setMillisecond] = useState<number>(0);
//   const [second, setSecond] = useState<number>(0);
//   const [minute, setMinute] = useState<number>(0);
//   const [hour, setHour] = useState<number>(0);
//   const [inter, setInter] = useState<NodeJS.Timeout | null>(null);
//   const [toggle, setToggle] = useState<boolean>(false);
//   const startTimer = (): void => {
//     setInter(
//       setInterval(() => {
//         setMillisecond((old): number => {
//           if (old === 99) {
//             setMillisecond(0);
//             updateSecond(1);
//             return 0;
//           } else {
//             return old + 1;
//           }
//         });
//       }, 10)
//     );
//     setToggle(true);
//   };
//   const updateSecond = (seconds: number): void => {
//     setSecond((old): number => {
//       if (old === 59) {
//         setSecond(0);
//         updateMinute(1);
//         return 0;
//       } else {
//         return old + seconds;
//       }
//     });
//   };
//   const updateMinute = (minutes: number): void => {
//     setMinute((old): number => {
//       if (old === 59) {
//         setMinute(0);
//         updateHour(1);
//         return 0;
//       } else {
//         return old + minutes;
//       }
//     });
//   };
//   const updateHour = (hours: number): void => {
//     setHour((old) => old + hours);
//   };
//   useEffect(() => {
//     return () => {
//       if (inter) {
//         clearInterval(inter);
//       }
//     };
//   }, [inter]);
//   const pauseTimer = (): void => {
//     if (inter) {
//       clearInterval(inter);
//     }
//     setToggle(false);
//   };
//   const resetTimer = (): void => {
//     if (inter) {
//       clearInterval(inter);
//     }
//     setMillisecond(0);
//     setSecond(0);
//     setMinute(0);
//     setHour(0);
//     setToggle(false);
//   };
//   const format = (value: number): string => {
//     return value < 10 ? '0' + value : value.toString();
//   };
//   useEffect(() => {
//     if (millisecond === 99) {
//       setMillisecond(0);
//       updateSecond(1);
//     }
//   }, [millisecond]);
//   return (
//     <div className=" mt-60 text-2xl border border-blue-800 rounded-md shadow-xl shadow-blue-900 p-5 ml-[470px] w-[400px] text-center text-red-600">
//       <span className='text-5xl'>{format(hour)}:</span>
//       <span className='text-5xl'>{format(minute)}:</span>
//       <span className='text-5xl'>{format(second)}:</span>
//       <span className='text-5xl'>{format(millisecond)}</span>
//         <div>
//           <button className="border border-red-600 mt-3 pt-1 pb-1 pl-5 pr-5 rounded-md" onClick={startTimer}>
//            { <FaPlay />}
//           </button>
//         </div>
//         <div>
//           <button className="border mt-3 border-red-600 pt-1 pb-1 pl-5 pr-5 rounded-md" onClick={pauseTimer}>
//             {<FaPause />}
//           </button>
//         </div>
//       <button className="border border-red-600 pt-1 pb-1 pl-5 pr-5 mt-4 rounded-md" onClick={resetTimer}>
//         {<MdLockReset />}
//       </button>
//     </div>
//   );
// };
// export default App;
// import React, { useEffect, useState } from "react";
// import { FaAccusoft } from "react-icons/fa";
// import { AiFillStar, AiOutlineStar,  } from "react-icons/ai";
// import { newFrameworks, newLanguages } from "./datar";
// import { SiJirasoftware } from "react-icons/si";
// import { FaStarHalfAlt } from "react-icons/fa";
// type FrameworksProps = {
//   title: string;
//   description: string;
//   language: string;
//   rating: number;
//   logo: React.ReactNode;
//   definition: string;
// };
// const App = () => {
//   const [languages, setLanguages] = useState<string[]>(newLanguages);
//   const [frameworks, setFrameworks] = useState<FrameworksProps[]>([]);
//   const [currentFramework, setCurrentFramework] =
//     useState<FrameworksProps | null>(null);
//   const [filteredFrameworks, setFilteredFrameworks] = useState<
//     FrameworksProps[]
//   >([]);
//   useEffect(() => {
//     setFrameworks(newFrameworks);
//     setCurrentFramework(newFrameworks[0]);
//   }, []);
//   useEffect(() => {
//     setFilteredFrameworks(frameworks);
//   }, [frameworks]);
//   const generateStars = (rating: number) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 >= 0.5;
//     const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
//     const stars = [];
//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<AiFillStar className="text-yellow-500" key={`full-${i}`} />);
//     }
//     if (halfStar) {
//       stars.push(<FaStarHalfAlt className="text-xl text-yellow-500"  key="half" />);
//     }
//     for (let i = 0; i < emptyStars; i++) {
//       stars.push(<AiOutlineStar key={`empty-${i}`} />);
//     }
//     return stars;
//   };
//   const handleLanguageClick = (language: string) => {
//     if (language === "All") {
//       setFilteredFrameworks(frameworks);
//     } else {
//       const filtered = frameworks.filter((item) => item.language === language);
//       setFilteredFrameworks(filtered);
//     }
//   };
//   const handleCardClick = (framework: FrameworksProps) => {
//     setCurrentFramework(framework);
//   };
//   return (
//     <div className="h-[100vh] overflow-hidden">
//       <nav className="flex bg-pink-600 h-[10vh] justify-between items-center text-white px-5">
//         <SiJirasoftware className="text-3xl" />
//         <ul className="max-md:hidden flex gap-20">
//           {languages.map((item, index) => (
//             <li
//               className="cursor-pointer"
//               key={index}
//               onClick={() => handleLanguageClick(item)}
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       </nav>
//       <div className="grid grid-cols-1">
//         <div className="flex flex-col gap-2 p-2 text-white h-[90vh] shadow-md shadow-zinc-500 overflow-auto">
//           {filteredFrameworks.map((item, index) => (
//             <div
//               key={index}
//               className="bg-purple-600 py-3 rounded-md cursor-pointer flex justify-center items-center flex-col hover:bg-purple-500 duration-300"
//               onClick={() => handleCardClick(item)}
//             >
//               <p>{item.logo}</p>
//               <h2 className="text-2xl">{item.language}</h2>
//               <h4 className="text-md">{item.title}</h4>
//               <div>{item.rating}</div>
//             </div>
//           ))}
//         </div>
//         <div className="p-4 bg-gray-100  w-[1000px] mt-20">
//           {currentFramework && (
//             <div className=" p-4 rounded-lg shadow-md shadow-blue-700 bg-slate-300 h-[400px] flex justify-center items-center flex-col text-2xl">
//               <p className="text-6xl mb-4 text-red-400">{currentFramework.logo}</p>
//               <h2 className="text-2xl font-bold">{currentFramework.title}</h2>
//               <div className="flex">
//                 {generateStars(currentFramework.rating).map((star, index) => (
//                   <span key={index}>{star}</span>
//                 ))}
//               </div>
//               <p className="mt-2 text-md italic">
//                 {currentFramework.definition}
//               </p>
//               <p  className="mt-2 text-center">{currentFramework.description}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default App;
// import React from 'react'
// import rasm1 from './sh.jpg'
// import rasm2 from './me.jpg'
// import rasm3 from './be.jpg'
// import rasm4 from './n.jpg'
// import rasm5 from './gild.jpg'
// const App = () => {
//   return (
//     <div className='bg-slate-50 border rounded-3xl shadow-md shadow-red-500 w-[250px] mt-40 ml-96 h-[260px] '>
//       <div className='absolute top-[67px]'>
//         <img className='ml-[40px] h-44' width={170}   src={rasm1} alt="" />
//       </div>
//       <div>
//         <h1 className='text-lg text-center mt-[120px]'>VASKEN MOURADIAN</h1>
//         <h2 className='text-lg text-center ml-4  mt-6'>Sr.UX Designer</h2>
//         <div className='flex p-5 ml-[38px]  mt-[1px] '>
//           <img width={22} src={rasm2} alt=""  />
//           <img className='ml-[20px]'  width={22} src={rasm3} alt=""  />
//           <img className='ml-[20px]' width={22} src={rasm5} alt=""  />
//           <img className='ml-[20px]' width={22} src={rasm4} alt=""  />
//         </div>
//       </div>
//     </div>
//   )
// }
// export default App
var react_1 = require("react");
var Logo_png_1 = require("./images/Logo.png");
var Watch_1_png_1 = require("./images/Watch_1.png");
var Watch_2_png_1 = require("./images/Watch_2.png");
var Watch_3_png_1 = require("./images/Watch_3.png");
var Watch_4_png_1 = require("./images/Watch_4.png");
var Shadow_png_1 = require("./images/Shadow.png");
var fa6_1 = require("react-icons/fa6");
var io_1 = require("react-icons/io");
var fa_1 = require("react-icons/fa");
var fa_2 = require("react-icons/fa");
var fa_3 = require("react-icons/fa");
var App = function () {
    var watches = [Watch_1_png_1["default"], Watch_2_png_1["default"], Watch_3_png_1["default"], Watch_4_png_1["default"]];
    var Bg = [
        "bg-gradient-to-r from-[#bd5f0c] to-[#c48a58]",
        "bg-gradient-to-r from-[#95b9b9] to-[#bb8282]",
        "bg-gradient-to-r from-[#0dac42] to-[#2f864c]",
        "bg-gradient-to-r from-[#bb0c0c] to-[#a85643]",
    ];
    var _a = react_1.useState(0), Index = _a[0], setIndex = _a[1];
    var _b = react_1.useState(Bg[0]), Background = _b[0], setBackground = _b[1];
    var oldingisi = function () {
        if (Index === 0) {
            setIndex(watches.length - 1);
            setBackground(Bg[watches.length - 1]);
        }
        else {
            setIndex(Index - 1);
            setBackground(Bg[Index - 1]);
        }
    };
    var keyingisi = function () {
        if (Index === watches.length - 1) {
            setIndex(0);
            setBackground(Bg[0]);
        }
        else {
            setIndex(Index + 1);
            setBackground(Bg[Index + 1]);
        }
    };
    return (react_1["default"].createElement("div", { className: "w-screen h-screen font-sofia" },
        react_1["default"].createElement("div", { className: "w-full h-full  " + Background },
            react_1["default"].createElement("nav", { className: "w-full h-28 flex justify-between items-center px-20" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("img", { src: Logo_png_1["default"], alt: "", className: "w-[123px] cursor-pointer " })),
                react_1["default"].createElement("div", { className: "flex gap-24 items-center" },
                    react_1["default"].createElement("ul", { className: " flex gap-12  text-xl" },
                        react_1["default"].createElement("li", { className: "hover:bg-black border-black hover:text-white hover:rounded-3xl hover:border hover:p-2 p-2 cursor-pointer" }, "Shop"),
                        react_1["default"].createElement("li", { className: "hover:bg-black border-black hover:text-white hover:rounded-3xl hover:border hover:p-2 p-2 cursor-pointer" }, "Brand"),
                        react_1["default"].createElement("li", { className: "hover:bg-black border-black hover:text-white hover:rounded-3xl hover:border hover:p-2 p-2 cursor-pointer" }, "Contact Us"),
                        react_1["default"].createElement("button", { className: "bg-black text-white rounded-3xl  border p-2 mr-[60px] border-black pl-5 pr-5" }, "Sign Up")))),
            react_1["default"].createElement("div", { className: "h-[80vh] flex " },
                react_1["default"].createElement("div", { className: "w-2/4 text-white px-20 flex flex-col justify-evenly" },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("h1", { className: "text-[63px] mt-2 " }, "Exquisite Watches"),
                        react_1["default"].createElement("h2", { className: "text-[42px] mt-2 " },
                            "Choose Luxury, ",
                            react_1["default"].createElement("span", { className: "text-black" }, "Choose Us"))),
                    react_1["default"].createElement("p", { className: "text-2xl mt-4 font-leading-8  text-black" },
                        "Discover the Perfect Watch for Every Occasion ",
                        react_1["default"].createElement("br", null),
                        " and Elevate Your Style with  Timeless  Elegance ",
                        react_1["default"].createElement("br", null),
                        "  and Precision Craftsmanship - watch"),
                    react_1["default"].createElement("h1", { className: "text-5xl mt-4 " }, "$430.00"),
                    react_1["default"].createElement("div", { className: "flex gap-3 mb-8 mt-8" },
                        react_1["default"].createElement(fa6_1.FaFacebookF, { className: "w-10 h-10 p-2 border rounded-[50%] border-white cursor-pointer  " }),
                        react_1["default"].createElement(io_1.IoLogoTwitter, { className: "w-10 h-10 p-2 border rounded-[50%] border-white cursor-pointer" }),
                        react_1["default"].createElement(fa_1.FaYoutube, { className: "w-10 h-10 p-2 border rounded-[50%] border-white cursor-pointer" }))),
                react_1["default"].createElement("div", { className: "w-2/4 relative flex flex-col items-center pt-8 mr-6 " },
                    react_1["default"].createElement("img", { src: watches[Index], alt: "", className: "w-[350px] mb-5 mt-2" }),
                    react_1["default"].createElement("img", { className: "mt-2", src: Shadow_png_1["default"], alt: "" }),
                    react_1["default"].createElement(fa_2.FaChevronLeft, { onClick: oldingisi, className: "w-12 h-12 p-3 absolute top-[43%] left-28 text-white border rounded-[50%] border-white cursor-pointer hover:bg-white hover:text-black duration-300  " }),
                    react_1["default"].createElement(fa_3.FaChevronRight, { onClick: keyingisi, className: "w-12 h-12 p-3 absolute  top-[43%] right-28 text-white border rounded-[50%] border-white cursor-pointer hover:bg-white hover:text-black duration-300  " }))))));
};
exports["default"] = App;
