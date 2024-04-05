import React from "react"

const Daskboard = () => {
  return (
    <div className="w-[80%] mx-auto">
      <div className="flex items-center justify-center text-[40px] text-white font-peace drop-shadow-[0px_4px_8px_#b133ff]">
        Dashboard
      </div>
      <div className="flex flex-col justify-around items-center w-full text-white rounded-md stroke-1 stroke-white p-8 gap-4 m-2">
        <div className="flex justify-between items-stretch gap-8 w-full ">
          <div className="bg-[#131829] flex-1 rounded-lg p-8">
            <div className="font-semibold text-[16px] leading-normal">
              SS Token
            </div>
            <div className="text-[24px] font-['geom-graphics'] leading-normal">
              0.0
            </div>
            <div className="text-[13px] leading-normal">≈$0.0</div>
          </div>
          <div className="bg-[#131829] flex-1 rounded-lg p-8">
            <div className="font-semibold text-[16px] leading-normal ">
              KSFT Token
            </div>
            <div className="text-[24px] font-['geom-graphics'] leading-normal">
              0.0
            </div>
            <div className="text-[13px] font-['geom-graphics'] leading-normal">
              ≈$0.0
            </div>
          </div>
          <div className="bg-[#131829] flex-1 rounded-lg p-8">
            <div className="font-semibold text-[16px] leading-normal">
              Stacked KSFT
            </div>
            <div className="text-[24px] font-['geom-graphics'] leading-normal">
              0.0
            </div>
          </div>
          <div className="bg-[#131829] flex-1 rounded-lg p-8">
            <div className="font-semibold text-[16px] leading-normal">
              KSFT Market Price
            </div>
            <div className="text-[24px] font-['geom-graphics'] leading-normal">
              0.0
            </div>
          </div>
        </div>
        <div className="flex justify-between items-stretch gap-8 w-full">
          <div className="flex flex-col items-start bg-[#131829] flex-1 rounded-lg p-8">
            <div className="font-semibold text-[16px] leading-normal">
              KSFT Circulate Market Cap
            </div>
            <div className="text-[24px] font-['geom-graphics'] leading-normal">
              $ 4,984,675.722
            </div>
          </div>
          <div className="flex flex-col items-starts bg-[#131829] flex-1 rounded-lg p-8">
            <div className="font-semibold text-[16px] leading-normal">
              KSFT Circulate Supply
            </div>
            <div className="text-[24px] font-['geom-graphics'] leading-normal">
              $ 2,060,428,925
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Daskboard
