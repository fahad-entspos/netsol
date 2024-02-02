/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Chart } from "tw-elements";
import Sidebar from '../Sidebar'
import Footer from '../Footer';


function Investor() {

  const [selectedButton, setSelectedButton] = useState("5Y");

  const handleButtonClick = (num:any) => {
    setSelectedButton(num === selectedButton ? null : num);
  };useEffect(()=>{
  const dataScatter = {
    type: "scatter",
    data: {
      datasets: [
        {
          borderColor: "#4285F4",
          backgroundColor: "rgba(66, 133, 244, 0.5)",
          label: "V(node2)",
          data: [
            {
              x: 1,
              y: -1.711e-2,
            },
            {
              x: 1.26,
              y: -2.708e-2,
            },
            {
              x: 1.58,
              y: -4.285e-2,
            },
            {
              x: 2.0,
              y: -6.772e-2,
            },
            {
              x: 2.51,
              y: -1.068e-1,
            },
            {
              x: 3.16,
              y: -1.681e-1,
            },
            {
              x: 3.98,
              y: -2.635e-1,
            },
            {
              x: 5.01,
              y: -4.106e-1,
            },
            {
              x: 6.31,
              y: -6.339e-1,
            },
            {
              x: 7.94,
              y: -9.659e-1,
            },
            {
              x: 10.0,
              y: -1.445,
            },
            {
              x: 12.6,
              y: -2.11,
            },
            {
              x: 15.8,
              y: -2.992,
            },
            {
              x: 20.0,
              y: -4.102,
            },
            {
              x: 25.1,
              y: -5.429,
            },
            {
              x: 31.6,
              y: -6.944,
            },
            {
              x: 39.8,
              y: -8.607,
            },
            {
              x: 50.1,
              y: -1.038e1,
            },
            {
              x: 63.1,
              y: -1.223e1,
            },
            {
              x: 79.4,
              y: -1.413e1,
            },
            {
              x: 100.0,
              y: -1.607e1,
            },
            {
              x: 126,
              y: -1.803e1,
            },
            {
              x: 158,
              y: -2e1,
            },
            {
              x: 200,
              y: -2.199e1,
            },
            {
              x: 251,
              y: -2.398e1,
            },
            {
              x: 316,
              y: -2.597e1,
            },
            {
              x: 398,
              y: -2.797e1,
            },
            {
              x: 501,
              y: -2.996e1,
            },
            {
              x: 631,
              y: -3.196e1,
            },
            {
              x: 794,
              y: -3.396e1,
            },
            {
              x: 1000,
              y: -3.596e1,
            },
          ],
        },
      ],
    },
  };
  
  const optionsScatter = {
    options: {
      plugins: {
        title: {
          display: true,
          text: "Scatter Chart - Logarithmic X-Axis",
          color: "rgb(102,102,102)",
        },
      },
      scales: {
        x: {
          type: "logarithmic",
          position: "bottom",
          scaleLabel: {
            labelString: "Frequency",
            display: true,
          },
        },
        y: {
          type: "linear",
          scaleLabel: {
            labelString: "Voltage",
            display: true,
          },
        },
      },
    },
  };
  
  const optionsScatterDark = {
    options: {
      plugins: {
        title: {
          color: "#fff",
        },
        legend: {
          labels: {
            color: "#fff",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#fff",
          },
          grid: {
            color: "#555",
          },
        },
        y: {
          ticks: {
            color: "#fff",
          },
          grid: {
            color: "#555",
          },
        },
      },
    },
  };
  
  new Chart(
    document.getElementById("scatter-chart"),
    dataScatter,
    optionsScatter,
    optionsScatterDark
  );
},[])

  return (
    <div className="flex   flex-col md:flex-row h-screen relative">

 <Sidebar />
 <div className="md:flex-1 flex flex-col ml-[18px] md:ml-12 mt-36 md:mt-20">

  {/* nav */}


 <div>
         <h1 className="text-[#3c3c3c]">
           You are now viewing <u className="text-[#1a75bb] ">Investors</u>{" "}
           / <u className="text-[#1a75bb] "> Overview</u>{" "}
         </h1>

         <div className="relative rounded-2xl transition-all duration-1000 mt-12">
           <img
             className="object-cover transition-all duration-1000 "
             src="vercel.svg"
             alt="Error"
           />

           <div className="absolute top-4 text-black transition-all duration-1000 ">
             <h2 className="text-4xl sm:text-4xl  md:text-5xl lg:text-6xl xl:text-6xl sm:mt-[23px]   md:mt-[20px]     lg:mt-[39px]   xl:mt-[63px] transition-all duration-1000 font-bold font-AkkuratLight">
             Investor Relations
             </h2>
           </div>
         </div>
         <p className="xl:w-[70%] md:w-[80%] sm:w-[80%] xl:h-auto md:h-auto sm:h-auto h-[auto] font-light transition-all duration-1000 mt-6 md:mt-12 text-[#9a9b9b] text-xl sm:text-lg md:text-xl xl:text-2xl leading-relaxed whitespace-pre-line overflow-hidden">
         This section includes the latest news, financial reports, companys performance, share value and other investor related information about NETSOL Technologies         </p>
    
  
        
       </div>

{/* images */}

       <div className="relative w-[98%] xl:w-[88%] transition-all duration-1000  mt-20">
  <img src="mohammad-rahmani-lPKIb8dJ8kw-unsplash.jpg" alt="Your Image" className=" object-cover transition-all duration-1000  w-full h-[820px]  md:h-[430px] lg:h-[460px] xl:h-[460px] rounded-lg shadow-lg"/>

  <div className="absolute top-0 left-0 p-4 text-white transition-all duration-1000 ">
    <h2 className="text-5xl  font-semibold font-serif mt-16 xl:mt-20 transition-all duration-1000 ">A brief overview of NETSOL</h2>
    <p className=" text-lg md:text-xl mt-10 transition-all duration-1000 ">NETSOL Technologies, Inc. (Nasdaq:NTWK) is a worldwide provider of IT and enterprise software solutions primarily serving the global leasing and financing industry. The Companys suite of applications are backed by 40 years of domain expertise and supported by a committed team of 1300+ professionals placed in eight strategically located support and delivery centers throughout the world.</p>
<u className='mt-6 transition-all duration-1000 '>View Fact Sheet</u>

  </div>

</div>


{/*4 card */}
   








<div className=" w-[98%] xl:w-[88%] flex justify-between   mt-20">
  <h1 className='font-AkkuratLight font-semibold  text-2xl'>News</h1>
  <h1 className='font-AkkuratLight font-semibold  text-xl text-[#1a75bb]'>SHOW ALL</h1>
</div>

<div className="flex gap-[20px]  xl:gap-[36px] mt-4 flex-wrap transition duration-1000 ease-in-out transform">

<div 
 style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 8px' }}
className="mt-6 flex flex-col justify-between   w-[98%]  h-72 xl:w-[270px] py-6 px-6 border rounded-xl transition duration-1000 ease-in-out transform">



 <h1 className="text-lg text-black font-AkkuratLight font-semibold transition duration-1000 ease-in-out transform">
 NETSOL Technologies Sets Fiscal Second Quarter 2024 Conference Call for Tuesday, February 13 at 9:00 am ET      </h1>

<div>
 <p className="font-light transition-all duration-1000   text-[#4c4c4c]">
 31/01/2024    </p>
<div>
<button className=" bg-transparent border  border-[#1c72b8] rounded-3xl text-[#1c72b8]  px-6  py-2   hover:bg-[#1c72b8] hover:text-white transition duration-1000 ease-in-out transform  text-sm font-semibold ">
        EXPLOR
       </button>
</div>


</div>
   </div>
   <div 
 style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 8px' }}
className="mt-6 flex flex-col justify-between   w-[98%]  h-72 xl:w-[270px] py-6 px-6 border rounded-xl transition duration-1000 ease-in-out transform">



 <h1 className="text-lg text-black font-AkkuratLight font-semibold transition duration-1000 ease-in-out transform">
 NETSOL Technologies appoints Jason Hurwitz as Sales Director of Europe    </h1>

<div>
 <p className="font-light transition-all duration-1000   text-[#4c4c4c]">
 16/01/2024   </p>
<div>
<button className=" bg-transparent border  border-[#1c72b8] rounded-3xl text-[#1c72b8]  px-6  py-2   hover:bg-[#1c72b8] hover:text-white transition duration-1000 ease-in-out transform  text-sm font-semibold ">
        EXPLOR
       </button>
</div>


</div>
   </div>
   <div 
 style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 8px' }}
className="mt-6 flex flex-col justify-between   w-[98%]  h-72 xl:w-[270px] py-6 px-6 border rounded-xl transition duration-1000 ease-in-out transform">



 <h1 className="text-lg text-black font-AkkuratLight font-semibold transition duration-1000 ease-in-out transform">
 Haydock Finance Subscribes to Additional Appex Now Products – Dock and Lane   </h1>

<div>
 <p className="font-light transition-all duration-1000   text-[#4c4c4c]">
 3/01/2024     </p>
<div>
<button className=" bg-transparent border  border-[#1c72b8] rounded-3xl text-[#1c72b8]  px-6  py-2   hover:bg-[#1c72b8] hover:text-white transition duration-1000 ease-in-out transform  text-sm font-semibold ">
        EXPLOR
       </button>
</div>


</div>
   </div>
   <div 
 style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 8px' }}
className="mt-6 flex flex-col justify-between   w-[98%]  h-72 xl:w-[270px] py-6 px-6 border rounded-xl transition duration-1000 ease-in-out transform">



 <h1 className="text-lg text-black font-AkkuratLight font-semibold transition duration-1000 ease-in-out transform">
 NETSOL Technologies Welcomes Erik Wagner as Chief Marketing Officer    </h1>

<div>
 <p className="font-light transition-all duration-1000   text-[#4c4c4c]">
 29/11/2023    </p>
<div>
<button className=" bg-transparent border  border-[#1c72b8] rounded-3xl text-[#1c72b8]  px-6  py-2   hover:bg-[#1c72b8] hover:text-white transition duration-1000 ease-in-out transform  text-sm font-semibold ">
        EXPLOR
       </button>
</div>


</div>
   </div>
</div>

{/* 2 card */}



<div className='flex flex-wrap gap-8 mt-14'>


<div 
 style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 8px' }}
className="mt-6 flex flex-col justify-between   w-[98%]  h-auto md:h-[350px] xl:w-[580px] py-6 px-6 border rounded-xl transition duration-1000 ease-in-out transform">



 <h1 className="text-3xl text-black font-AkkuratLight font-semibold transition duration-1000 ease-in-out transform">
 Company <br />
Information      </h1>

<div className='flex justify-between flex-wrap mb-10'>
<p className="font-light transition-all duration-1000 text-[#4c4c4c] tracking-wider mt-5 mb-10">
    Address: <br />
    16000 Ventura Blvd <br />
    Suite 770 <br />
    Encino <br />
    CA 91436, US
</p>

<p className="font-light transition-all duration-1000 text-[#4c4c4c] tracking-wider mt-5 mb-10">
Telephone:<br />
818-222-9195 <br />
   <br />
   Email:<br />
   info@netsoltech.com
</p>
</div>

<div>

</div>


   </div>




<div 
 style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 8px' }}
className="mt-6 flex flex-col    w-[98%]      h-auto md:h-[350px] xl:w-[580px] px-4   py-2  border rounded-xl transition duration-1000 ease-in-out transform">



 <h1 className="text-3xl text-black font-AkkuratLight mt-5 font-semibold transition duration-1000 ease-in-out transform">
 Corporate <br />
Governance     </h1>



<div className='flex  justify-between  gap-20 md:gap-2 py-1 mt-4 scroll-smooth  overflow-x-scroll  md:overflow-x-hidden overflow-y-hidden  '>

  <div className='flex flex-col gap-2'>
    <div className='flex flex-col gap-1  md:gap-2'>
      <p className='flex items-center gap-1  md:gap-2 font-light transition-all duration-1000 text-[#4c4c4c] tracking-wider text-xs'>
        Chair <span className='hidden md:block'>— </span> <img className='w-4 h-4' src="userFill.svg" alt="Error" />
      </p>
      <p className='flex items-center gap-2 font-light transition-all duration-1000 text-[#4c4c4c] tracking-wider text-xs'>
        Member <span className='hidden md:block'>— </span>  <img className='w-4 h-4' src="userOutline.svg" alt="Error" />
      </p>
    </div>

    <div className='mt-1 md:mt-4 '>
      <h1 className='font-light transition-all duration-1000 mt-1 text-[#4c4c4c] font-sans text-[10px]  md:text-sm'>Najeeb Ghauri</h1>
      <h1 className='font-light transition-all duration-1000 mt-1 text-[#4c4c4c] font-sans text-[10px]  md:text-sm'>Mark Caton</h1>
      <h1 className='font-light transition-all duration-1000 mt-1 text-[#4c4c4c] font-sans text-[10px]  md:text-sm'>Malea Farsai</h1>
      <h1 className='font-light transition-all duration-1000 mt-1 text-[#4c4c4c] font-sans text-[10px]  md:text-sm'>Syed Kausar </h1>
      <h1 className='font-light transition-all duration-1000 mt-1 md:mt-3 text-[#4c4c4c] font-sans text-[10px]  md:text-sm'>Michael Francis</h1>
    </div>
  </div>

  <div className='flex flex-col items-center text-center '>
    <p className='font-light transition-all duration-1000 text-[#4c4c4c] tracking-wider text-xs'>Audit <br />Committee</p>
    <img className='w-6 h-6 mt-12' src="userOutline.svg" alt="Error" />
    <img className='w-6 mt-6 h-6' src="userFill.svg" alt="Error" />
    <img className='w-6 h-6 mt-4' src="userOutline.svg" alt="Error" />
  </div>

  <div className='flex flex-col items-center text-center '>
    <p className='font-light transition-all duration-1000 text-[#4c4c4c] tracking-wider text-xs'>Compensation <br />Committee</p>
    <img className='w-6 h-6 mt-12' src="userFill.svg" alt="Error" />
    <img className='w-6 mt-6 h-6' src="userOutline.svg" alt="Error" />
    <img className='w-6 h-6 mt-4' src="userOutline.svg" alt="Error" />
  </div>

  <div className='flex flex-col items-center text-center '>
    <p className='font-light transition-all duration-1000 text-[#4c4c4c] tracking-wider text-xs'>Governance and <span className='hidden md:block'>Nominating Committee</span></p>
    <img className='w-6 h-6 mt-12' src="userOutline.svg" alt="Error" />
    <img className='w-6 mt-6 h-6' src="userOutline.svg" alt="Error" />
    <img className='w-6 h-6 mt-4' src="userFill.svg" alt="Error" />
  </div>

</div>




  



<div>

</div>


   </div>
   </div>


{/*again 2 card */}
<div className='flex flex-wrap mt-14 gap-8'>


<div 

className="mt-6 flex flex-col    w-[95%]  h-auto md:h-[420px] xl:w-[580px]  rounded-xl transition duration-1000 ease-in-out transform">



 <h1 className="text-3xl text-[#212121] font-AkkuratLight font-semibold transition duration-1000 ease-in-out transform">
 Share <br />
Performance  </h1>
<p className="font-light text-sm transition-all duration-1000 mt-2 text-[#4c4c4c] tracking-wider">
NETSOL is listed on the NASDAQ with the symbol NTWK
</p>

<div className="mx-auto w-full overflow-hidden ">
  <canvas id="scatter-chart"></canvas>
</div>

 
 <div className='flex justify-between mt-5'>
      {["1D", "5D", "1M", "6M", "1Y", "2Y", "5Y"].map((num) => (
        <button
          key={num}
          className={`p-2 m-1 rounded-lg  cursor-pointer ${
            num === selectedButton ? 'bg-[#1c76bc] text-white' : 'bg-white'
          }`}
          onClick={() => handleButtonClick(num)}
        >
          {num}
        </button>
      ))}
    </div>


   </div>


   <div 
 style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 8px' }}
className="mt-6 flex flex-col justify-between   w-[98%]  h-auto md:h-[420px] xl:w-[580px] py-10 px-10 border rounded-xl transition duration-1000 ease-in-out transform">



 <h1 className="text-4xl text-black font-AkkuratLight font-semibold transition duration-1000 ease-in-out transform">
 Stock Snapshot   </h1>

<div className='flex justify-between mt-3'>



<div className='flex flex-col gap-6'>


<div className='flex  flex-col justify-between flex-wrap '>
<p className="font-light text-base transition-all duration-1000 text-[#4c4c4c] tracking-wider">
CurrentPrice
</p>
<h1 className="text-2xl text-black font-AkkuratLight font-semibold transition duration-1000 ease-in-out transform">
$2.07  </h1>

</div>

<div className='flex  flex-col justify-between flex-wrap '>
<p className="font-light text-base transition-all duration-1000 text-[#4c4c4c] tracking-wider">
MKT Cap
</p>
<h1 className="text-2xl text-black font-AkkuratLight font-semibold transition duration-1000 ease-in-out transform">
23.54m </h1>

</div>
</div>

<div className='flex flex-col gap-6'>


<div className='flex  flex-col justify-between flex-wrap '>
<p className="font-light text-base transition-all duration-1000 text-[#4c4c4c] tracking-wider">
Net Change
</p>
<h1 className="text-2xl text-black font-AkkuratLight font-semibold transition duration-1000 ease-in-out transform">
0.01 (0.49%) </h1>

</div>

<div className='flex  flex-col justify-between flex-wrap '>
<p className="font-light text-base transition-all duration-1000 text-[#4c4c4c] tracking-wider">
Volume
</p>
<h1 className="text-2xl text-black font-AkkuratLight font-semibold transition duration-1000 ease-in-out transform">
2,127 </h1>

</div>
</div>



</div>


{/* paragraph */}

<p className="font-light text-base transition-all duration-1000 mt-8 text-[#4c4c4c] tracking-wider">
LAST UPDATED JANUARY 31, 2024 4:00 PM EST
</p>



<div>

<button className=" bg-transparent border  mt-8 border-[#1c72b8] rounded-3xl text-[#1c72b8]  px-4  py-2   hover:bg-[#1c72b8] hover:text-white transition duration-300 ease-in-out transform  text-sm font-semibold ">
        MORE STOCK DATA
       </button>

</div>

   </div>

   </div>





{/* footer */}



<Footer/>
</div>
</div>
  )
}

export default Investor