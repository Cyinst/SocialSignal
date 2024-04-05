"use client"
import React from "react"
import Daskboard from "./components/Daskboard"
import GroupInfo from "./components/GroupInfo"
import SwapWidget from "./components/SwapWidget"

const Home: React.FC<{ params: { groupId: string } }> = ({
  params: { groupId },
}) => {
  return (
    <div className="mt-16 mx-auto">
      <div className="">
        <GroupInfo />
      </div>
      <div className="overflow-hidden">
        <Daskboard />
      </div>
      {window.ethereum ? (
        <div className="flex justify-center items-center  mt-10 w-[80%] mx-auto ">
          <SwapWidget />
        </div>
      ) : (
        <div className="mx-auto text-center">
          please install extension metamask for swapping
        </div>
      )}
    </div>
    // <div className="main-container w-[calc(1728*var(--rpx))] h-[calc(2860*var(--rpx))] bg-[#0b0d21] relative overflow-hidden mx-auto my-0">
    //   <div className="flex w-[calc(1280*var(--rpx))] justify-between items-center flex-nowrap relative z-[5] mt-[calc(2531*var(--rpx))] mr-0 mb-0 ml-[calc(224*var(--rpx))]">
    //     <div className="w-[calc(125.83892822265625*var(--rpx))] h-[calc(150*var(--rpx))] shrink-0 bg-[url(../app/assets/images/074a003c-8b1f-418f-829c-6dbff0acdb3c.png)] bg-cover bg-no-repeat relative overflow-hidden z-[6]" />
    //     <div className="w-[calc(795*var(--rpx))] h-[calc(150*var(--rpx))] shrink-0 relative z-[7]">
    //       <div className="flex w-[calc(767*var(--rpx))] gap-[calc(171*var(--rpx))] items-start flex-nowrap relative z-[8] mt-0 mr-0 mb-0 ml-0">
    //         <div className="flex w-[calc(144*var(--rpx))] flex-col gap-[calc(24*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[9]">
    //           <div className="flex w-[calc(71*var(--rpx))] gap-[calc(8*var(--rpx))] items-start shrink-0 flex-nowrap relative z-10">
    //             <div className="w-[calc(24*var(--rpx))] h-[calc(24*var(--rpx))] shrink-0 bg-[url(../app/assets/images/d3dca6b8-2336-49c9-bb29-e0b4cede5d9d.png)] bg-cover bg-no-repeat relative overflow-hidden z-[11]" />
    //             <span className="h-[calc(21*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(17*var(--rpx))] font-semibold leading-[calc(21*var(--rpx))] text-[#fff] relative text-left whitespace-nowrap z-[12]">
    //               links
    //             </span>
    //           </div>
    //           <div className="flex w-[calc(144*var(--rpx))] pt-0 pr-[calc(28*var(--rpx))] pb-0 pl-[calc(28*var(--rpx))] flex-col gap-[calc(24*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[13]">
    //             <span className="h-[calc(18*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(14*var(--rpx))] font-normal leading-[calc(18*var(--rpx))] text-[rgba(255,255,255,0.6)] relative text-left capitalize whitespace-nowrap z-[14]">
    //               telegram bot
    //             </span>
    //             <span className="h-[calc(18*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(14*var(--rpx))] font-normal leading-[calc(18*var(--rpx))] text-[rgba(255,255,255,0.6)] relative text-left whitespace-nowrap z-[15]">
    //               Buy $SS
    //             </span>
    //           </div>
    //         </div>
    //         <div className="flex w-[calc(162*var(--rpx))] flex-col gap-[calc(24*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[16]">
    //           <div className="flex w-[calc(82*var(--rpx))] gap-[calc(8*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[17]">
    //             <div className="w-[calc(24*var(--rpx))] h-[calc(24*var(--rpx))] shrink-0 bg-[url(../app/assets/images/6f8c5d93-a3ae-404f-bb76-32dbefad8e1b.png)] bg-cover bg-no-repeat relative overflow-hidden z-[18]" />
    //             <span className="h-[calc(21*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(17*var(--rpx))] font-semibold leading-[calc(21*var(--rpx))] text-[#fff] relative text-left capitalize whitespace-nowrap z-[19]">
    //               social
    //             </span>
    //           </div>
    //           <div className="flex w-[calc(162*var(--rpx))] pt-0 pr-[calc(28*var(--rpx))] pb-0 pl-[calc(28*var(--rpx))] flex-col gap-[calc(24*var(--rpx))] items-start shrink-0 flex-nowrap relative z-20">
    //             <div className="flex w-[calc(106*var(--rpx))] gap-[calc(12*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[21]">
    //               <span className="h-[calc(18*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(14*var(--rpx))] font-normal leading-[calc(18*var(--rpx))] text-[rgba(255,255,255,0.6)] relative text-left capitalize whitespace-nowrap z-[22]">
    //                 Telegram group
    //               </span>
    //             </div>
    //             <div className="flex w-[calc(47*var(--rpx))] gap-[calc(12*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[23]">
    //               <span className="h-[calc(18*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(14*var(--rpx))] font-normal leading-[calc(18*var(--rpx))] text-[rgba(255,255,255,0.6)] relative text-left whitespace-nowrap z-[24]">
    //                 Twitter
    //               </span>
    //             </div>
    //             <div className="flex w-[calc(78*var(--rpx))] gap-[calc(12*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[25]">
    //               <span className="h-[calc(18*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(14*var(--rpx))] font-normal leading-[calc(18*var(--rpx))] text-[rgba(255,255,255,0.6)] relative text-left capitalize whitespace-nowrap z-[26]">
    //                 Contact us
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="flex w-[calc(119*var(--rpx))] flex-col gap-[calc(24*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[27]">
    //           <div className="flex w-[calc(119*var(--rpx))] gap-[calc(8*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[28]">
    //             <div className="w-[calc(24*var(--rpx))] h-[calc(24*var(--rpx))] shrink-0 bg-[url(../app/assets/images/7f28b9aa-c2f1-4aa1-89e9-2d4617810501.png)] bg-cover bg-no-repeat relative overflow-hidden z-[29]" />
    //             <span className="h-[calc(21*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(17*var(--rpx))] font-semibold leading-[calc(21*var(--rpx))] text-[#fff] relative text-left whitespace-nowrap z-30">
    //               Resources
    //             </span>
    //           </div>
    //           <div className="flex w-[calc(94*var(--rpx))] pt-0 pr-[calc(28*var(--rpx))] pb-0 pl-[calc(28*var(--rpx))] flex-col gap-[calc(24*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[31]">
    //             <div className="flex w-[calc(27*var(--rpx))] gap-[calc(12*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[32]">
    //               <span className="h-[calc(18*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(14*var(--rpx))] font-normal leading-[calc(18*var(--rpx))] text-[rgba(255,255,255,0.6)] relative text-left whitespace-nowrap z-[33]">
    //                 Doc
    //               </span>
    //             </div>
    //             <div className="flex w-[calc(38*var(--rpx))] gap-[calc(12*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[34]">
    //               <span className="h-[calc(18*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(14*var(--rpx))] font-normal leading-[calc(18*var(--rpx))] text-[rgba(255,255,255,0.6)] relative text-left capitalize whitespace-nowrap z-[35]">
    //                 news
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex w-[calc(1280*var(--rpx))] justify-between items-start flex-nowrap relative z-[37] mt-[calc(81*var(--rpx))] mr-0 mb-0 ml-[calc(224*var(--rpx))]">
    //     <div className="w-[calc(136*var(--rpx))] shrink-0 font-['Inter'] text-[calc(14*var(--rpx))] font-normal leading-[calc(27*var(--rpx))] relative text-left whitespace-nowrap z-[38]">
    //       <span className="font-['Inter'] text-[calc(14*var(--rpx))] font-normal leading-[calc(27*var(--rpx))] text-[rgba(255,255,255,0.6)] relative text-left">
    //         @
    //       </span>
    //       <span className="font-['Inter'] text-[calc(14*var(--rpx))] font-normal leading-[calc(27*var(--rpx))] text-[rgba(255,255,255,0.6)] relative text-left capitalize">
    //         Social Signal
    //       </span>
    //       <span className="font-['Inter'] text-[calc(14*var(--rpx))] font-normal leading-[calc(27*var(--rpx))] text-[rgba(255,255,255,0.6)] relative text-left">
    //         2023
    //       </span>
    //     </div>
    //     <div className="flex w-[calc(228*var(--rpx))] gap-[calc(24*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[39]">
    //       <span className="flex w-[calc(112*var(--rpx))] h-[calc(27*var(--rpx))] justify-end items-center shrink-0 basis-auto font-['Inter'] text-[calc(14*var(--rpx))] font-normal leading-[calc(27*var(--rpx))] text-[rgba(255,255,255,0.6)] relative text-right whitespace-nowrap z-40">
    //         Terms of Service
    //       </span>
    //       <span className="flex w-[calc(92*var(--rpx))] h-[calc(27*var(--rpx))] justify-end items-center shrink-0 basis-auto font-['Inter'] text-[calc(14*var(--rpx))] font-normal leading-[calc(27*var(--rpx))] text-[rgba(255,255,255,0.6)] relative text-right whitespace-nowrap z-[41]">
    //         Privacy Policy
    //       </span>
    //     </div>
    //   </div>
    //   <div className="w-[calc(1292.0000564751201*var(--rpx))] h-[calc(1665.7770503524753*var(--rpx))] bg-[url(../app/assets/images/41397400-28c8-464a-b6f5-efd51edf2e71.png)] bg-cover bg-no-repeat relative z-[2] mix-blend-color-dodge mt-[calc(822.3313480850247*var(--rpx))] mr-0 mb-0 ml-[calc(217.99994352487988*var(--rpx))]" />
    //   <div className="w-[calc(1727*var(--rpx))] h-[calc(344*var(--rpx))] bg-[url(../app/assets/images/a8e54f68a9bb4b4e4f20d5f9af9baa99cde26e74.png)] bg-cover bg-no-repeat absolute top-[calc(-4*var(--rpx))] left-[calc(1*var(--rpx))]">
    //     <div className="w-[calc(1728*var(--rpx))] h-[calc(340*var(--rpx))] bg-[rgba(0,0,0,0.5)] relative z-[1] mt-[calc(4*var(--rpx))] mr-0 mb-0 ml-[calc(-1*var(--rpx))]"></div>
    //   </div>
    //   <div className="flex w-[calc(1100*var(--rpx))] h-[calc(207*var(--rpx))] gap-[calc(373*var(--rpx))] justify-center items-end flex-nowrap absolute top-[calc(203*var(--rpx))] left-[calc(314*var(--rpx))] z-[65]">
    //     <div className="flex w-[calc(537*var(--rpx))] gap-[calc(51*var(--rpx))] items-end shrink-0 flex-nowrap relative z-[66]">
    //       <div className="flex w-[calc(537*var(--rpx))] gap-[calc(51*var(--rpx))] items-end shrink-0 flex-nowrap relative z-[67]">
    //         <div className="w-[calc(206*var(--rpx))] h-[calc(207*var(--rpx))] shrink-0 bg-[url(../app/assets/images/a8e54f68a9bb4b4e4f20d5f9af9baa99cde26e74.png)] bg-cover bg-no-repeat relative z-[68]" />
    //         <div className="flex w-[calc(280*var(--rpx))] gap-[calc(20*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[69]">
    //           <button className="flex w-[calc(156*var(--rpx))] h-[calc(42*var(--rpx))] pt-[calc(8*var(--rpx))] pr-[calc(14*var(--rpx))] pb-[calc(8*var(--rpx))] pl-[calc(14*var(--rpx))] flex-col gap-[calc(10*var(--rpx))] justify-center items-center shrink-0 flex-nowrap rounded-[calc(6*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.2)] relative overflow-hidden z-[70] pointer">
    //             <div className="flex w-[calc(59*var(--rpx))] gap-[calc(4*var(--rpx))] justify-center items-center shrink-0 flex-nowrap relative z-[71]">
    //               <span className="flex w-[calc(59*var(--rpx))] h-[calc(24*var(--rpx))] justify-center items-center shrink-0 basis-auto font-['Inter'] text-[calc(20*var(--rpx))] font-normal leading-[calc(24*var(--rpx))] text-[#fff] relative text-center whitespace-nowrap z-[72]">
    //                 + Join
    //               </span>
    //             </div>
    //           </button>
    //           <div className="w-[calc(42*var(--rpx))] h-[calc(42*var(--rpx))] shrink-0 relative z-[73]">
    //             <div className="w-[calc(29*var(--rpx))] h-[calc(29*var(--rpx))] relative overflow-hidden z-[74] mt-[calc(6*var(--rpx))] mr-0 mb-0 ml-[calc(6*var(--rpx))]">
    //               <div className="w-[calc(29.024728775024414*var(--rpx))] h-[calc(24.06999969482422*var(--rpx))] bg-[url(../app/assets/images/82a091d1-1c7b-485e-8190-7777256c8443.png)] bg-[length:100%_100%] bg-no-repeat relative z-[75] mt-[calc(2.43597412109375*var(--rpx))] mr-0 mb-0 ml-0" />
    //             </div>
    //             <div className="w-[calc(42*var(--rpx))] h-[calc(42*var(--rpx))] rounded-[calc(6*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.5)] absolute top-0 left-0 z-[76]" />
    //           </div>
    //           <div className="w-[calc(42*var(--rpx))] h-[calc(42*var(--rpx))] shrink-0 relative z-[77]">
    //             <div className="w-[calc(24*var(--rpx))] h-[calc(24*var(--rpx))] relative overflow-hidden z-[79] mt-[calc(9*var(--rpx))] mr-0 mb-0 ml-[calc(9*var(--rpx))]">
    //               <div className="w-full h-full bg-[url(../app/assets/images/6519ee05-f3fd-4e94-8a3c-2056edf4a937.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-0 z-[80]" />
    //             </div>
    //             <div className="w-[calc(42*var(--rpx))] h-[calc(42*var(--rpx))] rounded-[calc(6*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.5)] absolute top-0 left-0 z-[78]" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex w-[calc(190*var(--rpx))] gap-[calc(22*var(--rpx))] items-end shrink-0 flex-nowrap relative z-[81]">
    //       <div className="w-[calc(59*var(--rpx))] h-[calc(59*var(--rpx))] shrink-0 bg-[url(../app/assets/images/58942949201f9daa38e4cbb720d030e4a2d91fb2.png)] bg-cover bg-no-repeat rounded-[calc(6*var(--rpx))] relative z-[82]" />
    //       <div className="flex w-[calc(109*var(--rpx))] flex-col gap-[calc(4*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[83]">
    //         <span className="flex w-[calc(109*var(--rpx))] h-[calc(23*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[calc(20*var(--rpx))] font-semibold leading-[calc(23*var(--rpx))] text-[#fff] relative text-left whitespace-nowrap z-[84]">
    //           Owner
    //         </span>
    //         <span className="flex w-[calc(87*var(--rpx))] h-[calc(22*var(--rpx))] justify-start items-center shrink-0 basis-auto font-['Inter'] text-[calc(16*var(--rpx))] font-normal leading-[calc(19.363636016845703*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[85]">
    //           @S030912
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex w-[calc(1100*var(--rpx))] h-[calc(153*var(--rpx))] gap-[calc(110*var(--rpx))] items-center flex-nowrap absolute top-[calc(458*var(--rpx))] left-[calc(314*var(--rpx))] z-[43]">
    //     <div className="flex w-[calc(484*var(--rpx))] flex-col gap-[calc(16*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[44]">
    //       <span className="flex w-[calc(553*var(--rpx))] h-[calc(72*var(--rpx))] justify-start items-center shrink-0 basis-auto font-['Inter'] text-[calc(40*var(--rpx))] font-bold leading-[calc(72*var(--rpx))] text-[#fff] relative text-left whitespace-nowrap z-[45]">
    //         Group name
    //       </span>
    //       <span className="flex w-[calc(451*var(--rpx))] h-[calc(65*var(--rpx))] justify-start items-start shrink-0 font-['Inter'] text-[calc(20*var(--rpx))] font-normal leading-[calc(24.204544067382812*var(--rpx))] text-[#fff] relative text-left z-[46]">
    //         Our Slogan is to make the world better. Our Slogan is to make the
    //         world better.
    //       </span>
    //     </div>
    //     <div className="flex w-[calc(438*var(--rpx))] h-[calc(87*var(--rpx))] gap-[calc(56*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[47]">
    //       <div className="flex w-[calc(141*var(--rpx))] flex-col gap-[calc(16*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[48]">
    //         <span className="flex w-[calc(109*var(--rpx))] h-[calc(23*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[calc(20*var(--rpx))] font-semibold leading-[calc(23*var(--rpx))] text-[#fff] relative text-left whitespace-nowrap z-[49]">
    //           Topic
    //         </span>
    //         <div className="flex w-[calc(172*var(--rpx))] flex-col gap-[calc(8*var(--rpx))] items-start shrink-0 flex-nowrap relative z-50">
    //           <button className="flex w-[calc(172*var(--rpx))] gap-[calc(8*var(--rpx))] items-start shrink-0 flex-nowrap border-none relative z-[51] pointer">
    //             <div className="flex w-[calc(172*var(--rpx))] pt-[calc(4*var(--rpx))] pr-[calc(8*var(--rpx))] pb-[calc(4*var(--rpx))] pl-[calc(8*var(--rpx))] gap-[calc(14*var(--rpx))] items-start shrink-0 flex-nowrap bg-[rgba(45,119,207,0.1)] rounded-[calc(7*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.4)] relative z-[52]">
    //               <span className="h-[calc(24*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(20*var(--rpx))] font-normal leading-[calc(24*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[53]">
    //                 Trading Analysis
    //               </span>
    //             </div>
    //           </button>
    //           <button className="flex w-[calc(59*var(--rpx))] gap-[calc(8*var(--rpx))] items-start shrink-0 flex-nowrap border-none relative z-[54] pointer">
    //             <div className="flex w-[calc(59*var(--rpx))] pt-[calc(4*var(--rpx))] pr-[calc(8*var(--rpx))] pb-[calc(4*var(--rpx))] pl-[calc(8*var(--rpx))] gap-[calc(14*var(--rpx))] items-start shrink-0 flex-nowrap bg-[rgba(45,119,207,0.1)] rounded-[calc(7*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.4)] relative z-[55]">
    //               <span className="h-[calc(24*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(20*var(--rpx))] font-normal leading-[calc(24*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[56]">
    //                 DeFi
    //               </span>
    //             </div>
    //           </button>
    //         </div>
    //       </div>
    //       <div className="flex w-[calc(91*var(--rpx))] flex-col gap-[calc(16*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[57]">
    //         <span className="flex w-[calc(109*var(--rpx))] h-[calc(23*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[calc(20*var(--rpx))] font-semibold leading-[calc(23*var(--rpx))] text-[#fff] relative text-left whitespace-nowrap z-[58]">
    //           Members
    //         </span>
    //         <div className="flex w-[calc(73*var(--rpx))] gap-[calc(5*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[59]">
    //           <div className="w-[calc(18*var(--rpx))] h-[calc(18*var(--rpx))] shrink-0 bg-[url(../app/assets/images/49f68c71-9c4f-4641-8ef4-5294ea1e1081.png)] bg-cover bg-no-repeat relative overflow-hidden z-[60]" />
    //           <span className="flex w-[calc(64*var(--rpx))] h-[calc(24*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[calc(16*var(--rpx))] font-normal leading-[calc(24*var(--rpx))] text-[#00c498] tracking-[calc(0.24*var(--rpx))] relative text-left whitespace-nowrap z-[61]">
    //             99/200
    //           </span>
    //         </div>
    //       </div>
    //       <div className="flex w-[calc(94*var(--rpx))] flex-col gap-[calc(16*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[62]">
    //         <span className="flex w-[calc(94*var(--rpx))] h-[calc(24*var(--rpx))] justify-center items-start shrink-0 basis-auto font-['Inter'] text-[calc(20*var(--rpx))] font-semibold leading-[calc(24*var(--rpx))] text-[#fff] relative text-center whitespace-nowrap z-[63]">
    //           My Token
    //         </span>
    //         <div className="w-[calc(73*var(--rpx))] h-[calc(23*var(--rpx))] shrink-0 font-['Inter'] text-[calc(16*var(--rpx))] font-bold leading-[calc(19.363636016845703*var(--rpx))] relative text-left whitespace-nowrap z-[64]">
    //           <span className="font-['Inter'] text-[calc(16*var(--rpx))] font-bold leading-[calc(19.363636016845703*var(--rpx))] text-[#fff] relative text-left">
    //             888
    //           </span>
    //           <span className="font-['Inter'] text-[calc(16*var(--rpx))] font-bold leading-[calc(19.363636016845703*var(--rpx))] text-[#fff] relative text-left">
    //             $SS
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <span className="flex h-[calc(19*var(--rpx))] justify-start items-start font-['Inter'] text-[calc(16*var(--rpx))] font-bold leading-[calc(19*var(--rpx))] text-[#000] absolute top-[calc(592*var(--rpx))] left-[calc(159*var(--rpx))] text-left capitalize whitespace-nowrap z-[42]">
    //     + Join
    //   </span>
    //   <div className="flex w-[calc(1221*var(--rpx))] h-[calc(1478*var(--rpx))] flex-col gap-[calc(133*var(--rpx))] items-center flex-nowrap absolute top-[calc(734*var(--rpx))] left-[calc(183*var(--rpx))] z-[86]">
    //     <div className="flex w-[calc(1221*var(--rpx))] flex-col gap-[calc(48*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[87]">
    //       <span className="h-[calc(60*var(--rpx))] shrink-0 basis-auto font-['Peace_Sans'] text-[calc(40*var(--rpx))] font-normal leading-[calc(60*var(--rpx))] text-[#fff] tracking-[calc(0.6*var(--rpx))] relative text-left whitespace-nowrap z-[88]">
    //         Dashboard
    //       </span>
    //       <div className="flex w-[calc(1011*var(--rpx))] pt-[calc(32*var(--rpx))] pr-[calc(32*var(--rpx))] pb-[calc(32*var(--rpx))] pl-[calc(32*var(--rpx))] gap-[calc(32*var(--rpx))] justify-center items-center shrink-0 flex-wrap rounded-[calc(30*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.4)] relative shadow-[calc(1*var(--rpx))_calc(4*var(--rpx))_calc(19.899999618530273*var(--rpx))_0_rgba(255,255,255,0.25)] z-[89]">
    //         <div className="flex w-[calc(193*var(--rpx))] pt-[calc(28*var(--rpx))] pr-[calc(40*var(--rpx))] pb-[calc(28*var(--rpx))] pl-[calc(30*var(--rpx))] flex-col gap-[calc(10*var(--rpx))] items-start flex-nowrap bg-[#131829] rounded-[calc(34*var(--rpx))] relative z-[90]">
    //           <span className="flex w-[calc(144*var(--rpx))] h-[calc(24*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[calc(16*var(--rpx))] font-semibold leading-[calc(24*var(--rpx))] text-[#fff] tracking-[calc(-0.18*var(--rpx))] relative text-left whitespace-nowrap z-[91]">
    //             SS Token
    //           </span>
    //           <div className="flex w-[calc(162*var(--rpx))] flex-col items-start shrink-0 flex-nowrap relative z-[92]">
    //             <span className="flex w-[calc(162*var(--rpx))] h-[calc(36*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Geom_Graphic'] text-[calc(24*var(--rpx))] font-normal leading-[calc(36*var(--rpx))] text-[#fff] tracking-[calc(0.36*var(--rpx))] relative text-left whitespace-nowrap z-[93]">
    //               0.0
    //             </span>
    //             <span className="flex w-[calc(162*var(--rpx))] h-[calc(20*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Geom_Graphic'] text-[calc(13*var(--rpx))] font-normal leading-[calc(19.5*var(--rpx))] text-[#fff] tracking-[calc(0.2*var(--rpx))] relative text-left whitespace-nowrap z-[94]">
    //               ≈$0.0
    //             </span>
    //           </div>
    //         </div>
    //         <div className="flex w-[calc(433*var(--rpx))] pt-[calc(28*var(--rpx))] pr-[calc(62*var(--rpx))] pb-[calc(28*var(--rpx))] pl-[calc(60*var(--rpx))] flex-col gap-[calc(23*var(--rpx))] items-start flex-nowrap bg-[#131829] rounded-[calc(34*var(--rpx))] relative z-[108]">
    //           <span className="flex w-[calc(376*var(--rpx))] h-[calc(24*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[calc(16*var(--rpx))] font-semibold leading-[calc(24*var(--rpx))] text-[#fff] tracking-[calc(-0.18*var(--rpx))] relative text-left whitespace-nowrap z-[109]">
    //             KSFT Circulate Market Cap
    //           </span>
    //           <div className="flex w-[calc(446*var(--rpx))] flex-col items-start shrink-0 flex-nowrap relative z-[110]">
    //             <span className="flex w-[calc(446*var(--rpx))] h-[calc(36*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Geom_Graphic'] text-[calc(24*var(--rpx))] font-normal leading-[calc(36*var(--rpx))] text-[#fff] tracking-[calc(0.36*var(--rpx))] relative text-left whitespace-nowrap z-[111]">
    //               $ 4,984,675.722
    //             </span>
    //           </div>
    //         </div>
    //         <div className="flex w-[calc(193*var(--rpx))] pt-[calc(28*var(--rpx))] pr-[calc(40*var(--rpx))] pb-[calc(28*var(--rpx))] pl-[calc(30*var(--rpx))] flex-col gap-[calc(10*var(--rpx))] items-start flex-nowrap bg-[#131829] rounded-[calc(34*var(--rpx))] relative z-[95]">
    //           <span className="flex w-[calc(162*var(--rpx))] h-[calc(24*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[calc(16*var(--rpx))] font-semibold leading-[calc(24*var(--rpx))] text-[#fff] tracking-[calc(-0.18*var(--rpx))] relative text-left whitespace-nowrap z-[96]">
    //             KSFT Token
    //           </span>
    //           <div className="flex w-[calc(162*var(--rpx))] flex-col items-start shrink-0 flex-nowrap relative z-[97]">
    //             <span className="flex w-[calc(162*var(--rpx))] h-[calc(36*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Geom_Graphic'] text-[calc(24*var(--rpx))] font-normal leading-[calc(36*var(--rpx))] text-[#fff] tracking-[calc(0.36*var(--rpx))] relative text-left whitespace-nowrap z-[98]">
    //               0.0
    //             </span>
    //             <span className="flex w-[calc(162*var(--rpx))] h-[calc(20*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Geom_Graphic'] text-[calc(13*var(--rpx))] font-normal leading-[calc(19.5*var(--rpx))] text-[#fff] tracking-[calc(0.2*var(--rpx))] relative text-left whitespace-nowrap z-[99]">
    //               ≈$0.0
    //             </span>
    //           </div>
    //         </div>
    //         <div className="flex w-[calc(211*var(--rpx))] pt-[calc(28*var(--rpx))] pr-[calc(40*var(--rpx))] pb-[calc(28*var(--rpx))] pl-[calc(30*var(--rpx))] flex-col gap-[calc(10*var(--rpx))] items-start flex-nowrap bg-[#131829] rounded-[calc(34*var(--rpx))] relative z-[100]">
    //           <span className="flex w-[calc(215*var(--rpx))] h-[calc(24*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[calc(16*var(--rpx))] font-semibold leading-[calc(24*var(--rpx))] text-[#fff] tracking-[calc(-0.18*var(--rpx))] relative text-left whitespace-nowrap z-[101]">
    //             Staked KSFT
    //           </span>
    //           <div className="flex w-[calc(162*var(--rpx))] h-[calc(70*var(--rpx))] flex-col items-start shrink-0 flex-nowrap relative z-[102]">
    //             <span className="flex w-[calc(162*var(--rpx))] h-[calc(36*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Geom_Graphic'] text-[calc(24*var(--rpx))] font-normal leading-[calc(36*var(--rpx))] text-[#fff] tracking-[calc(0.36*var(--rpx))] relative text-left whitespace-nowrap z-[103]">
    //               $4.550
    //             </span>
    //           </div>
    //         </div>
    //         <div className="flex w-[calc(434*var(--rpx))] pt-[calc(28*var(--rpx))] pr-[calc(62*var(--rpx))] pb-[calc(28*var(--rpx))] pl-[calc(60*var(--rpx))] flex-col gap-[calc(23*var(--rpx))] items-start flex-nowrap bg-[#131829] rounded-[calc(34*var(--rpx))] relative z-[112]">
    //           <span className="flex w-[calc(376*var(--rpx))] h-[calc(24*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[calc(16*var(--rpx))] font-semibold leading-[calc(24*var(--rpx))] text-[#fff] tracking-[calc(-0.18*var(--rpx))] relative text-left whitespace-nowrap z-[113]">
    //             KSFT Circulate Supply
    //           </span>
    //           <div className="flex w-[calc(390*var(--rpx))] flex-col items-start shrink-0 flex-nowrap relative z-[114]">
    //             <span className="h-[calc(36*var(--rpx))] shrink-0 basis-auto font-['Geom_Graphic'] text-[calc(24*var(--rpx))] font-normal leading-[calc(36*var(--rpx))] text-[#fff] tracking-[calc(0.36*var(--rpx))] relative text-left whitespace-nowrap z-[115]">
    //               2,060,428.925
    //             </span>
    //           </div>
    //         </div>
    //         <div className="flex w-[calc(212*var(--rpx))] pt-[calc(28*var(--rpx))] pr-[calc(40*var(--rpx))] pb-[calc(28*var(--rpx))] pl-[calc(30*var(--rpx))] flex-col gap-[calc(10*var(--rpx))] items-start flex-nowrap bg-[#131829] rounded-[calc(34*var(--rpx))] relative z-[104]">
    //           <span className="flex w-[calc(214*var(--rpx))] h-[calc(24*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[calc(16*var(--rpx))] font-semibold leading-[calc(24*var(--rpx))] text-[#fff] tracking-[calc(-0.18*var(--rpx))] relative text-left whitespace-nowrap z-[105]">
    //             KSFT Market Price
    //           </span>
    //           <div className="flex w-[calc(162*var(--rpx))] h-[calc(71*var(--rpx))] flex-col items-start shrink-0 flex-nowrap relative z-[106]">
    //             <span className="flex w-[calc(162*var(--rpx))] h-[calc(36*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Geom_Graphic'] text-[calc(24*var(--rpx))] font-normal leading-[calc(36*var(--rpx))] text-[#fff] tracking-[calc(0.36*var(--rpx))] relative text-left whitespace-nowrap z-[107]">
    //               $2.175
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex w-[calc(1000*var(--rpx))] flex-col gap-[calc(48*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[116]">
    //       <span className="h-[calc(60*var(--rpx))] shrink-0 basis-auto font-['Peace_Sans'] text-[calc(40*var(--rpx))] font-normal leading-[calc(60*var(--rpx))] text-[#fff] tracking-[calc(0.6*var(--rpx))] relative text-left whitespace-nowrap z-[117]">
    //         Swap
    //       </span>
    //       <div className="flex w-[calc(1000*var(--rpx))] flex-col gap-[calc(30*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[118]">
    //         <div className="flex w-[calc(278*var(--rpx))] gap-[calc(56*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[119]">
    //           <span className="h-[calc(29*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(24*var(--rpx))] font-semibold leading-[calc(29*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[120]">
    //             Buy KSFT
    //           </span>
    //           <span className="h-[calc(24*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(20*var(--rpx))] font-normal leading-[calc(24*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[121]">
    //             Stake KSFT
    //           </span>
    //         </div>
    //         <div className="flex w-[calc(1000*var(--rpx))] flex-col gap-[calc(32*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[122]">
    //           <div className="flex w-[calc(1000*var(--rpx))] pt-[calc(64*var(--rpx))] pr-[calc(64*var(--rpx))] pb-[calc(64*var(--rpx))] pl-[calc(64*var(--rpx))] flex-col gap-[calc(32*var(--rpx))] items-start shrink-0 flex-nowrap bg-[#26273e] rounded-[calc(30*var(--rpx))] relative z-[123]">
    //             <div className="flex w-[calc(872*var(--rpx))] gap-[calc(86*var(--rpx))] justify-center items-start shrink-0 flex-nowrap relative z-[124]">
    //               <div className="flex w-[calc(460*var(--rpx))] pt-[calc(32*var(--rpx))] pr-[calc(34*var(--rpx))] pb-[calc(32*var(--rpx))] pl-[calc(34*var(--rpx))] gap-[calc(139*var(--rpx))] items-start shrink-0 flex-nowrap bg-[#131829] rounded-[calc(24*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.3)] relative z-[125]">
    //                 <div className="flex w-[calc(162*var(--rpx))] flex-col gap-[calc(14*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[126]">
    //                   <span className="flex w-[calc(162*var(--rpx))] h-[calc(54*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Geom_Graphic'] text-[calc(36*var(--rpx))] font-normal leading-[calc(54*var(--rpx))] text-[#fff] tracking-[calc(0.54*var(--rpx))] relative text-left whitespace-nowrap z-[127]">
    //                     0.0
    //                   </span>
    //                   <span className="flex w-[calc(162*var(--rpx))] h-[calc(23*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Geom_Graphic'] text-[calc(15*var(--rpx))] font-normal leading-[calc(22.5*var(--rpx))] text-[#fff] tracking-[calc(0.22*var(--rpx))] relative text-left whitespace-nowrap z-[128]">
    //                     $0.0
    //                   </span>
    //                 </div>
    //                 <button className="w-[calc(87*var(--rpx))] h-[calc(42*var(--rpx))] shrink-0 bg-[#26273e] rounded-[calc(8*var(--rpx))] border-none relative z-[129] pointer">
    //                   <span className="flex w-full h-full justify-center items-center font-['Inter'] text-[calc(24*var(--rpx))] font-normal leading-[calc(29.045454025268555*var(--rpx))] text-[#f2f2f2] absolute top-0 left-0 text-center capitalize whitespace-nowrap z-[130]">
    //                     Max
    //                   </span>
    //                 </button>
    //               </div>
    //               <div className="flex w-[calc(326*var(--rpx))] h-[calc(152*var(--rpx))] flex-col gap-[calc(28*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[131]">
    //                 <button className="flex w-[calc(326*var(--rpx))] pt-[calc(16*var(--rpx))] pr-[calc(32*var(--rpx))] pb-[calc(16*var(--rpx))] pl-[calc(32*var(--rpx))] gap-[calc(144*var(--rpx))] items-center shrink-0 flex-nowrap bg-[#131829] rounded-[calc(24*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.3)] relative z-[132] pointer">
    //                   <div className="flex w-[calc(107*var(--rpx))] gap-[calc(30*var(--rpx))] justify-center items-center shrink-0 flex-nowrap relative z-[133]">
    //                     <div className="w-[calc(51*var(--rpx))] h-[calc(51*var(--rpx))] shrink-0 bg-[url(../app/assets/images/c21c1939cc60d227e366feacf704afe020723e9e.png)] bg-cover bg-no-repeat relative z-[134]" />
    //                     <span className="h-[calc(24*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(20*var(--rpx))] font-normal leading-[calc(24*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[135]">
    //                       SS
    //                     </span>
    //                   </div>
    //                   <div className="w-[calc(24*var(--rpx))] h-[calc(24*var(--rpx))] shrink-0 relative overflow-hidden z-[136]">
    //                     <div className="w-[calc(23.571001052856445*var(--rpx))] h-[calc(13.491601943969727*var(--rpx))] bg-[url(../app/assets/images/66ee93a5-83a1-4a95-8ea8-0a1fd128eaff.png)] bg-[length:100%_100%] bg-no-repeat relative z-[137] mt-[calc(5.2530059814453125*var(--rpx))] mr-0 mb-0 ml-[calc(0.2129974365234375*var(--rpx))]" />
    //                   </div>
    //                 </button>
    //                 <div className="flex w-[calc(326*var(--rpx))] pt-0 pr-[calc(12*var(--rpx))] pb-0 pl-[calc(12*var(--rpx))] gap-[calc(180*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[138]">
    //                   <span className="h-[calc(24*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(20*var(--rpx))] font-normal leading-[calc(24*var(--rpx))] text-[rgba(242,242,242,0.4)] relative text-left capitalize whitespace-nowrap z-[139]">
    //                     Balance:
    //                   </span>
    //                   <span className="flex w-[calc(40*var(--rpx))] h-[calc(24*var(--rpx))] justify-start items-center shrink-0 basis-auto font-['Inter'] text-[calc(20*var(--rpx))] font-normal leading-[calc(24*var(--rpx))] text-[rgba(242,242,242,0.4)] relative text-left capitalize whitespace-nowrap z-[140]">
    //                     0.0
    //                   </span>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="flex w-[calc(197*var(--rpx))] gap-[calc(23*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[141]">
    //               <div className="w-[calc(43*var(--rpx))] h-[calc(43*var(--rpx))] shrink-0 relative overflow-hidden z-[142]">
    //                 <div className="w-[calc(26.87590217590332*var(--rpx))] h-[calc(29.56257438659668*var(--rpx))] bg-[url(../app/assets/images/b0367977-0bbd-40cb-b620-16a95ad42ef3.png)] bg-[length:100%_100%] bg-no-repeat relative z-[143] mt-[calc(6.718719482421875*var(--rpx))] mr-0 mb-0 ml-[calc(8.06207275390625*var(--rpx))]" />
    //               </div>
    //               <div className="flex w-[calc(131*var(--rpx))] flex-col gap-[calc(9*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[144]">
    //                 <span className="h-[calc(19*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(16*var(--rpx))] font-normal leading-[calc(19*var(--rpx))] text-[#5e4fff] relative text-left capitalize whitespace-nowrap z-[145]">
    //                   Market Price
    //                 </span>
    //                 <span className="h-[calc(19*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(16*var(--rpx))] font-normal leading-[calc(19*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[146]">
    //                   1 SS = 4.55 KSFT
    //                 </span>
    //               </div>
    //             </div>
    //             <div className="flex w-[calc(872*var(--rpx))] gap-[calc(86*var(--rpx))] justify-center items-start shrink-0 flex-nowrap relative z-[147]">
    //               <div className="flex w-[calc(460*var(--rpx))] pt-[calc(32*var(--rpx))] pr-[calc(34*var(--rpx))] pb-[calc(32*var(--rpx))] pl-[calc(34*var(--rpx))] gap-[calc(298*var(--rpx))] items-start shrink-0 flex-nowrap bg-[#131829] rounded-[calc(24*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.3)] relative z-[148]">
    //                 <div className="flex w-[calc(162*var(--rpx))] flex-col gap-[calc(14*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[149]">
    //                   <span className="flex w-[calc(162*var(--rpx))] h-[calc(54*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Geom_Graphic'] text-[calc(36*var(--rpx))] font-normal leading-[calc(54*var(--rpx))] text-[#fff] tracking-[calc(0.54*var(--rpx))] relative text-left whitespace-nowrap z-[150]">
    //                     0.0
    //                   </span>
    //                   <span className="flex w-[calc(162*var(--rpx))] h-[calc(23*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Geom_Graphic'] text-[calc(15*var(--rpx))] font-normal leading-[calc(22.5*var(--rpx))] text-[#fff] tracking-[calc(0.22*var(--rpx))] relative text-left whitespace-nowrap z-[151]">
    //                     $0.0
    //                   </span>
    //                 </div>
    //               </div>
    //               <div className="flex w-[calc(326*var(--rpx))] h-[calc(152*var(--rpx))] flex-col gap-[calc(28*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[152]">
    //                 <button className="flex w-[calc(326*var(--rpx))] pt-[calc(16*var(--rpx))] pr-[calc(32*var(--rpx))] pb-[calc(16*var(--rpx))] pl-[calc(32*var(--rpx))] gap-[calc(92*var(--rpx))] items-center shrink-0 flex-nowrap bg-[#131829] rounded-[calc(24*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.3)] relative z-[153] pointer">
    //                   <div className="flex w-[calc(130*var(--rpx))] gap-[calc(30*var(--rpx))] justify-center items-center shrink-0 flex-nowrap relative z-[154]">
    //                     <div className="w-[calc(49*var(--rpx))] h-[calc(49*var(--rpx))] shrink-0 bg-[url(../app/assets/images/7b8b9aa6ac2b95723f42bf1e18f437f34d833165.png)] bg-cover bg-no-repeat relative z-[155]" />
    //                     <span className="h-[calc(24*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(20*var(--rpx))] font-normal leading-[calc(24*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[156]">
    //                       KSFT
    //                     </span>
    //                   </div>
    //                   <div className="w-[calc(24*var(--rpx))] h-[calc(24*var(--rpx))] shrink-0 relative overflow-hidden z-[157]">
    //                     <div className="w-[calc(23.571001052856445*var(--rpx))] h-[calc(13.491601943969727*var(--rpx))] bg-[url(../app/assets/images/e6fcc511-aa46-4716-946e-6a2e853d83c6.png)] bg-[length:100%_100%] bg-no-repeat relative z-[158] mt-[calc(5.25299072265625*var(--rpx))] mr-0 mb-0 ml-[calc(0.2129974365234375*var(--rpx))]" />
    //                   </div>
    //                 </button>
    //                 <div className="flex w-[calc(326*var(--rpx))] pt-0 pr-[calc(12*var(--rpx))] pb-0 pl-[calc(12*var(--rpx))] gap-[calc(180*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[159]">
    //                   <span className="h-[calc(24*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(20*var(--rpx))] font-normal leading-[calc(24*var(--rpx))] text-[rgba(242,242,242,0.4)] relative text-left capitalize whitespace-nowrap z-[160]">
    //                     Balance:
    //                   </span>
    //                   <span className="flex w-[calc(40*var(--rpx))] h-[calc(24*var(--rpx))] justify-start items-center shrink-0 basis-auto font-['Inter'] text-[calc(20*var(--rpx))] font-normal leading-[calc(24*var(--rpx))] text-[rgba(242,242,242,0.4)] relative text-left capitalize whitespace-nowrap z-[161]">
    //                     0.0
    //                   </span>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <button className="flex w-[calc(1000*var(--rpx))] pt-[calc(32*var(--rpx))] pr-[calc(64*var(--rpx))] pb-[calc(32*var(--rpx))] pl-[calc(64*var(--rpx))] flex-col gap-[calc(32*var(--rpx))] justify-center items-center shrink-0 flex-nowrap bg-[#26273e] rounded-[calc(30*var(--rpx))] border-none relative z-[162] pointer">
    //             <span className="h-[calc(29*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(24*var(--rpx))] font-semibold leading-[calc(29*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[163]">
    //               Connect Wallet
    //             </span>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="w-[calc(24*var(--rpx))] h-[calc(24*var(--rpx))] bg-[url(../app/assets/images/9198f6e6-e5bd-4674-b15c-9c813af3cc46.png)] bg-cover bg-no-repeat absolute top-[calc(774*var(--rpx))] left-[calc(45*var(--rpx))] overflow-hidden z-[3]" />
    // </div>
  )
}

export default Home
