"use client"
import React from "react"
import GroupNavigation from "./components/GroupNavigation"
import WeeklySelect from "./components/WeeklySelect"
import Introduction from "./components/Introduction"
const Groups = () => {
  return (
    <div className="mt-[75px] mx-auto w-[80%]">
      <Introduction />
      <WeeklySelect />
      <div className="mt-20">
        <GroupNavigation />
      </div>
      {/* <div className="main-container flex w-[calc(1441*var(--rpx))] flex-col gap-[calc(150*var(--rpx))] items-center flex-nowrap relative mx-auto my-0">
        <div className="flex w-[calc(1279*var(--rpx))] flex-col gap-[calc(48*var(--rpx))] items-center shrink-0 flex-nowrap relative">
          <span className="flex w-[calc(318*var(--rpx))] h-[calc(60*var(--rpx))] justify-center items-start shrink-0 basis-auto font-['Peace_Sans'] text-[calc(40*var(--rpx))] font-normal leading-[calc(60*var(--rpx))] text-[#fff] tracking-[calc(0.6*var(--rpx))] relative text-center whitespace-nowrap z-[1]">
            Weekly Selects
          </span>
          <div className="flex w-[calc(1279*var(--rpx))] gap-[calc(38*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[2]">
            <div className="w-[calc(401*var(--rpx))] h-[calc(238*var(--rpx))] shrink-0 bg-[rgba(0,0,0,0.04000000000000001)] rounded-[calc(19.310300827026367*var(--rpx))] relative z-[3]">
              <div className="flex w-[calc(369*var(--rpx))] gap-[calc(13*var(--rpx))] items-start flex-nowrap relative z-[4] mt-[calc(16*var(--rpx))] mr-0 mb-0 ml-[calc(16*var(--rpx))]">
                <div className="flex w-[calc(219*var(--rpx))] h-[calc(134*var(--rpx))] flex-col gap-[calc(32*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[5]">
                  <div className="flex w-[calc(189*var(--rpx))] flex-col gap-[calc(6*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[6]">
                    <span className="flex w-[calc(189*var(--rpx))] h-[calc(36*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[calc(24*var(--rpx))] font-bold leading-[calc(36*var(--rpx))] text-[#fff] tracking-[calc(0.36*var(--rpx))] relative text-left whitespace-nowrap z-[7]">
                      Social Signal
                    </span>
                    <div className="flex w-[calc(170*var(--rpx))] gap-[calc(8*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[8]">
                      <button className="flex w-[calc(74*var(--rpx))] pt-[calc(4*var(--rpx))] pr-[calc(8*var(--rpx))] pb-[calc(4*var(--rpx))] pl-[calc(8*var(--rpx))] gap-[calc(14*var(--rpx))] items-start shrink-0 flex-nowrap bg-[rgba(45,119,207,0.1)] rounded-[calc(7*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.4)] relative z-[9] pointer">
                        <span className="h-[calc(19*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(16*var(--rpx))] font-normal leading-[calc(19*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-10">
                          GameFi
                        </span>
                      </button>
                      <button className="flex w-[calc(88*var(--rpx))] pt-[calc(4*var(--rpx))] pr-[calc(8*var(--rpx))] pb-[calc(4*var(--rpx))] pl-[calc(8*var(--rpx))] gap-[calc(14*var(--rpx))] items-start shrink-0 flex-nowrap bg-[rgba(45,119,207,0.1)] rounded-[calc(7*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.4)] relative z-[11] pointer">
                        <span className="h-[calc(19*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(16*var(--rpx))] font-normal leading-[calc(19*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[12]">
                          Lumiterra
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex w-[calc(219*var(--rpx))] gap-[calc(6*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[13]">
                    <div className="flex w-[calc(140*var(--rpx))] gap-[calc(9*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[14]">
                      <div className="w-[calc(36*var(--rpx))] h-[calc(36*var(--rpx))] shrink-0 (../assets/images/0c610f69-7221-4467-becb-36ce60190d94.png)] bg-cover bg-no-repeat relative z-[15]" />
                      <span className="flex w-[calc(95*var(--rpx))] h-[calc(21*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[calc(14*var(--rpx))] font-normal leading-[calc(21*var(--rpx))] text-[rgba(255,255,255,0.7)] tracking-[calc(0.21*var(--rpx))] relative text-left whitespace-nowrap z-[16]">
                        @Maple
                      </span>
                    </div>
                    <div className="flex w-[calc(73*var(--rpx))] gap-[calc(5*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[17]">
                      <div className="w-[calc(14*var(--rpx))] h-[calc(14*var(--rpx))] shrink-0 (../assets/images/a44aa77a-27cc-4901-bbf9-7b415ed5b702.png)] bg-cover bg-no-repeat relative overflow-hidden z-[18]" />
                      <span className="flex w-[calc(64*var(--rpx))] h-[calc(21*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[calc(14*var(--rpx))] font-normal leading-[calc(21*var(--rpx))] text-[#00c498] tracking-[calc(0.21*var(--rpx))] relative text-left whitespace-nowrap z-[19]">
                        99/200
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-[calc(137*var(--rpx))] h-[calc(134*var(--rpx))] shrink-0 (../assets/images/64c2fdd7-0e79-4b7b-81cb-3b189033d9ef.png)] bg-cover bg-no-repeat rounded-[calc(15*var(--rpx))] relative z-20" />
              </div>
              <button className="flex w-[calc(368.609375*var(--rpx))] pt-[calc(6*var(--rpx))] pr-[calc(12*var(--rpx))] pb-[calc(6*var(--rpx))] pl-[calc(12*var(--rpx))] gap-[calc(8*var(--rpx))] items-center flex-nowrap bg-[#5d54fd] rounded-[calc(8*var(--rpx))] border-none relative z-[21] pointer mt-[calc(14*var(--rpx))] mr-0 mb-0 ml-[calc(16*var(--rpx))]">
                <span className="flex w-[calc(298*var(--rpx))] h-[calc(46*var(--rpx))] justify-start items-start shrink-0 font-['Inter'] text-[calc(15*var(--rpx))] font-semibold leading-[calc(22.5*var(--rpx))] text-[#fff] tracking-[calc(0.22*var(--rpx))] relative text-left z-[22]">
                  Web 3.0 promises a decentralized internet built on the
                  blockchain.
                </span>
                <div className="w-[calc(38.609375*var(--rpx))] h-[calc(30.875*var(--rpx))] shrink-0 relative overflow-hidden z-[23]">
                  <div className="w-[calc(38.60940170288086*var(--rpx))] h-[calc(30.875*var(--rpx))] absolute top-0 left-1/2 translate-x-[-50%] translate-y-0 z-[24]">
                    <div className="w-[calc(38.594234466552734*var(--rpx))] h-[calc(30.026273727416992*var(--rpx))]  bg-[length:100%_100%] bg-no-repeat relative z-[25] mt-0 mr-0 mb-0 ml-[calc(0.0078125*var(--rpx))]" />
                  </div>
                </div>
              </button>
            </div>
            <div className="w-[calc(401*var(--rpx))] h-[calc(238*var(--rpx))] shrink-0 bg-[rgba(0,0,0,0.04000000000000001)] rounded-[calc(19.310300827026367*var(--rpx))] relative z-[26]">
              <div className="flex w-[calc(369*var(--rpx))] gap-[calc(13*var(--rpx))] items-start flex-nowrap relative z-[27] mt-[calc(16*var(--rpx))] mr-0 mb-0 ml-[calc(16*var(--rpx))]">
                <div className="flex w-[calc(219*var(--rpx))] h-[calc(134*var(--rpx))] flex-col gap-[calc(32*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[28]">
                  <div className="flex w-[calc(189*var(--rpx))] flex-col gap-[calc(6*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[29]">
                    <span className="flex w-[calc(189*var(--rpx))] h-[calc(36*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[calc(24*var(--rpx))] font-bold leading-[calc(36*var(--rpx))] text-[#fff] tracking-[calc(0.36*var(--rpx))] relative text-left whitespace-nowrap z-30">
                      Social Signal
                    </span>
                    <div className="flex w-[calc(170*var(--rpx))] gap-[calc(8*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[31]">
                      <button className="flex w-[calc(74*var(--rpx))] pt-[calc(4*var(--rpx))] pr-[calc(8*var(--rpx))] pb-[calc(4*var(--rpx))] pl-[calc(8*var(--rpx))] gap-[calc(14*var(--rpx))] items-start shrink-0 flex-nowrap bg-[rgba(45,119,207,0.1)] rounded-[calc(7*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.4)] relative z-[32] pointer">
                        <span className="h-[calc(19*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(16*var(--rpx))] font-normal leading-[calc(19*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[33]">
                          GameFi
                        </span>
                      </button>
                      <button className="flex w-[calc(88*var(--rpx))] pt-[calc(4*var(--rpx))] pr-[calc(8*var(--rpx))] pb-[calc(4*var(--rpx))] pl-[calc(8*var(--rpx))] gap-[calc(14*var(--rpx))] items-start shrink-0 flex-nowrap bg-[rgba(45,119,207,0.1)] rounded-[calc(7*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.4)] relative z-[34] pointer">
                        <span className="h-[calc(19*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(16*var(--rpx))] font-normal leading-[calc(19*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[35]">
                          Lumiterra
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex w-[calc(219*var(--rpx))] gap-[calc(6*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[36]">
                    <div className="flex w-[calc(140*var(--rpx))] gap-[calc(9*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[37]">
                      <div className="w-[calc(36*var(--rpx))] h-[calc(36*var(--rpx))] shrink-0 (../assets/images/65ebe70b-fa69-4290-8b46-4b10013eaf74.png)] bg-cover bg-no-repeat relative z-[38]" />
                      <span className="flex w-[calc(95*var(--rpx))] h-[calc(21*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[calc(14*var(--rpx))] font-normal leading-[calc(21*var(--rpx))] text-[rgba(255,255,255,0.7)] tracking-[calc(0.21*var(--rpx))] relative text-left whitespace-nowrap z-[39]">
                        @Maple
                      </span>
                    </div>
                    <div className="flex w-[calc(73*var(--rpx))] gap-[calc(5*var(--rpx))] items-center shrink-0 flex-nowrap relative z-40">
                      <div className="w-[calc(14*var(--rpx))] h-[calc(14*var(--rpx))] shrink-0 (../assets/images/b8083bce-36d4-4090-a47e-6ccc7d0d1400.png)] bg-cover bg-no-repeat relative overflow-hidden z-[41]" />
                      <span className="flex w-[calc(64*var(--rpx))] h-[calc(21*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[calc(14*var(--rpx))] font-normal leading-[calc(21*var(--rpx))] text-[#ff3333] tracking-[calc(0.21*var(--rpx))] relative text-left whitespace-nowrap z-[42]">
                        Full
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-[calc(137*var(--rpx))] h-[calc(134*var(--rpx))] shrink-0 (../assets/images/417302c0-858f-476b-824c-6733d7b1255e.png)] bg-cover bg-no-repeat rounded-[calc(15*var(--rpx))] relative z-[43]" />
              </div>
              <button className="flex w-[calc(368.609375*var(--rpx))] pt-[calc(6*var(--rpx))] pr-[calc(12*var(--rpx))] pb-[calc(6*var(--rpx))] pl-[calc(12*var(--rpx))] gap-[calc(8*var(--rpx))] items-center flex-nowrap bg-[#5d54fd] rounded-[calc(8*var(--rpx))] border-none relative z-[44] pointer mt-[calc(14*var(--rpx))] mr-0 mb-0 ml-[calc(16*var(--rpx))]">
                <span className="flex w-[calc(298*var(--rpx))] h-[calc(46*var(--rpx))] justify-start items-start shrink-0 font-['Inter'] text-[calc(15*var(--rpx))] font-semibold leading-[calc(22.5*var(--rpx))] text-[#fff] tracking-[calc(0.22*var(--rpx))] relative text-left z-[45]">
                  Web 3.0 promises a decentralized internet built on the
                  blockchain.
                </span>
                <div className="w-[calc(38.609375*var(--rpx))] h-[calc(30.875*var(--rpx))] shrink-0 relative overflow-hidden z-[46]">
                  <div className="w-[calc(38.60940170288086*var(--rpx))] h-[calc(30.875*var(--rpx))] absolute top-0 left-1/2 translate-x-[-50%] translate-y-0 z-[47]">
                    <div className="w-[calc(38.594234466552734*var(--rpx))] h-[calc(30.026273727416992*var(--rpx))] (../assets/images/1bc4ced2-c67d-4757-829f-c0d861e033c6.png)] bg-[length:100%_100%] bg-no-repeat relative z-[48] mt-0 mr-0 mb-0 ml-[calc(0.0078125*var(--rpx))]" />
                  </div>
                </div>
              </button>
            </div>
            <div className="w-[calc(401*var(--rpx))] h-[calc(238*var(--rpx))] shrink-0 bg-[rgba(0,0,0,0.2)] rounded-[calc(19.310300827026367*var(--rpx))] relative z-[49]">
              <div className="flex w-[calc(369*var(--rpx))] gap-[calc(13*var(--rpx))] items-start flex-nowrap relative z-50 mt-[calc(16*var(--rpx))] mr-0 mb-0 ml-[calc(16*var(--rpx))]">
                <div className="flex w-[calc(219*var(--rpx))] h-[calc(134*var(--rpx))] flex-col gap-[calc(32*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[51]">
                  <div className="flex w-[calc(189*var(--rpx))] flex-col gap-[calc(6*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[52]">
                    <span className="flex w-[calc(189*var(--rpx))] h-[calc(36*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[calc(24*var(--rpx))] font-bold leading-[calc(36*var(--rpx))] text-[#fff] tracking-[calc(0.36*var(--rpx))] relative text-left whitespace-nowrap z-[53]">
                      Social Signal
                    </span>
                    <div className="flex w-[calc(170*var(--rpx))] gap-[calc(8*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[54]">
                      <button className="flex w-[calc(74*var(--rpx))] pt-[calc(4*var(--rpx))] pr-[calc(8*var(--rpx))] pb-[calc(4*var(--rpx))] pl-[calc(8*var(--rpx))] gap-[calc(14*var(--rpx))] items-start shrink-0 flex-nowrap bg-[rgba(45,119,207,0.1)] rounded-[calc(7*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.4)] relative z-[55] pointer">
                        <span className="h-[calc(19*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(16*var(--rpx))] font-normal leading-[calc(19*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[56]">
                          GameFi
                        </span>
                      </button>
                      <button className="flex w-[calc(88*var(--rpx))] pt-[calc(4*var(--rpx))] pr-[calc(8*var(--rpx))] pb-[calc(4*var(--rpx))] pl-[calc(8*var(--rpx))] gap-[calc(14*var(--rpx))] items-start shrink-0 flex-nowrap bg-[rgba(45,119,207,0.1)] rounded-[calc(7*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.4)] relative z-[57] pointer">
                        <span className="h-[calc(19*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(16*var(--rpx))] font-normal leading-[calc(19*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[58]">
                          Lumiterra
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex w-[calc(219*var(--rpx))] gap-[calc(6*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[59]">
                    <div className="flex w-[calc(140*var(--rpx))] gap-[calc(9*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[60]">
                      <div className="w-[calc(36*var(--rpx))] h-[calc(36*var(--rpx))] shrink-0 (../assets/images/969ed06e-53ed-488d-bb5e-a4a7c96521e1.png)] bg-cover bg-no-repeat relative z-[61]" />
                      <span className="flex w-[calc(95*var(--rpx))] h-[calc(21*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[calc(14*var(--rpx))] font-normal leading-[calc(21*var(--rpx))] text-[rgba(255,255,255,0.7)] tracking-[calc(0.21*var(--rpx))] relative text-left whitespace-nowrap z-[62]">
                        @Maple
                      </span>
                    </div>
                    <div className="flex w-[calc(73*var(--rpx))] gap-[calc(5*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[63]">
                      <div className="w-[calc(14*var(--rpx))] h-[calc(14*var(--rpx))] shrink-0 (../assets/images/a9f9fbaf-8b78-436f-9de2-fee2c5bd3c76.png)] bg-cover bg-no-repeat relative overflow-hidden z-[64]" />
                      <span className="flex w-[calc(64*var(--rpx))] h-[calc(21*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[calc(14*var(--rpx))] font-normal leading-[calc(21*var(--rpx))] text-[#00c498] tracking-[calc(0.21*var(--rpx))] relative text-left whitespace-nowrap z-[65]">
                        99/200
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-[calc(137*var(--rpx))] h-[calc(134*var(--rpx))] shrink-0 (../assets/images/bd432fbd-56d4-4882-9713-7dbdac6ce8ba.png)] bg-cover bg-no-repeat rounded-[calc(15*var(--rpx))] relative z-[66]" />
              </div>
              <button className="flex w-[calc(368.609375*var(--rpx))] pt-[calc(6*var(--rpx))] pr-[calc(12*var(--rpx))] pb-[calc(6*var(--rpx))] pl-[calc(12*var(--rpx))] gap-[calc(8*var(--rpx))] items-center flex-nowrap bg-[#5d54fd] rounded-[calc(8*var(--rpx))] border-none relative z-[67] pointer mt-[calc(14*var(--rpx))] mr-0 mb-0 ml-[calc(16*var(--rpx))]">
                <span className="flex w-[calc(298*var(--rpx))] h-[calc(46*var(--rpx))] justify-start items-start shrink-0 font-['Inter'] text-[calc(15*var(--rpx))] font-semibold leading-[calc(22.5*var(--rpx))] text-[#fff] tracking-[calc(0.22*var(--rpx))] relative text-left z-[68]">
                  Web 3.0 promises a decentralized internet built on the
                  blockchain.
                </span>
                <div className="w-[calc(38.609375*var(--rpx))] h-[calc(30.875*var(--rpx))] shrink-0 relative overflow-hidden z-[69]">
                  <div className="w-[calc(38.60940170288086*var(--rpx))] h-[calc(30.875*var(--rpx))] absolute top-0 left-1/2 translate-x-[-50%] translate-y-0 z-[70]">
                    <div className="w-[calc(38.594234466552734*var(--rpx))] h-[calc(30.026273727416992*var(--rpx))] (../assets/images/b50d3f19-29e2-4d46-b7a6-5d475bf6cedb.png)] bg-[length:100%_100%] bg-no-repeat relative z-[71] mt-0 mr-0 mb-0 ml-[calc(0.0078125*var(--rpx))]" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-[calc(1278*var(--rpx))] flex-col gap-[calc(48*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[72]">
          <div className="w-[calc(378*var(--rpx))] shrink-0 font-['Alfa_Slab_One'] text-[calc(40*var(--rpx))] font-normal leading-[calc(60*var(--rpx))] tracking-[calc(0.6*var(--rpx))] relative text-left whitespace-nowrap z-[73]">
            <span className="font-['Peace_Sans'] text-[calc(40*var(--rpx))] font-normal leading-[calc(60*var(--rpx))] text-[#fff] tracking-[calc(0.6*var(--rpx))] relative text-left">
              Group
            </span>
            <span className="font-['Peace_Sans'] text-[calc(40*var(--rpx))] font-normal leading-[calc(60*var(--rpx))] text-[#fff] tracking-[calc(0.6*var(--rpx))] relative text-left">
              Navigation
            </span>
          </div>
          <div className="flex w-[calc(1278*var(--rpx))] flex-col gap-[calc(30*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[74]">
            <div className="flex w-[calc(175*var(--rpx))] flex-col gap-[calc(12*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[75]">
              <div className="flex w-[calc(175*var(--rpx))] gap-[calc(56*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[76]">
                <span className="h-[calc(29*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(24*var(--rpx))] font-semibold leading-[calc(29*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[77]">
                  All
                </span>
                <span className="h-[calc(24*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(20*var(--rpx))] font-normal leading-[calc(24*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[78]">
                  Following
                </span>
              </div>
              <div className="flex w-[calc(163*var(--rpx))] gap-[calc(11*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[79]">
                <button className="flex w-[calc(82*var(--rpx))] gap-[calc(8*var(--rpx))] items-start shrink-0 flex-nowrap border-none relative z-[80] pointer">
                  <div className="flex w-[calc(82*var(--rpx))] pt-[calc(4*var(--rpx))] pr-[calc(8*var(--rpx))] pb-[calc(4*var(--rpx))] pl-[calc(8*var(--rpx))] gap-[calc(14*var(--rpx))] items-start shrink-0 flex-nowrap bg-[rgba(45,119,207,0.1)] rounded-[calc(7*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.4)] relative z-[81]">
                    <span className="h-[calc(24*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(20*var(--rpx))] font-normal leading-[calc(24*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[82]">
                      Games
                    </span>
                  </div>
                </button>
                <button className="flex w-[calc(70*var(--rpx))] gap-[calc(8*var(--rpx))] items-start shrink-0 flex-nowrap border-none relative z-[83] pointer">
                  <div className="flex w-[calc(70*var(--rpx))] pt-[calc(4*var(--rpx))] pr-[calc(8*var(--rpx))] pb-[calc(4*var(--rpx))] pl-[calc(8*var(--rpx))] gap-[calc(14*var(--rpx))] items-start shrink-0 flex-nowrap bg-[rgba(45,119,207,0.1)] rounded-[calc(7*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.4)] relative z-[84]">
                    <span className="h-[calc(24*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(20*var(--rpx))] font-normal leading-[calc(24*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[85]">
                      News
                    </span>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex w-[calc(1278*var(--rpx))] gap-[calc(28*var(--rpx))] items-start shrink-0 flex-wrap relative z-[86]">
              <div className="flex w-[calc(298*var(--rpx))] pt-[calc(16*var(--rpx))] pr-[calc(22*var(--rpx))] pb-[calc(16*var(--rpx))] pl-[calc(22*var(--rpx))] flex-col gap-[calc(18*var(--rpx))] items-center flex-nowrap bg-[rgba(24,31,46,0.6)] rounded-[calc(10*var(--rpx))] relative z-[87]">
                <div className="flex w-[calc(254*var(--rpx))] gap-[calc(20*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[88]">
                  <div className="w-[calc(67*var(--rpx))] h-[calc(67*var(--rpx))] shrink-0 (../assets/images/78cf05bf-b5da-40a2-8ad0-e65a570c9701.png)] bg-cover bg-no-repeat relative z-[89]" />
                  <div className="flex w-[calc(167*var(--rpx))] flex-col gap-[calc(6*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[90]">
                    <span className="flex w-[calc(173*var(--rpx))] h-[calc(24*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Alfa_Slab_One'] text-[calc(16*var(--rpx))] font-normal leading-[calc(24*var(--rpx))] text-[#fff] tracking-[calc(0.24*var(--rpx))] relative text-left whitespace-nowrap z-[91]">
                      Social Signal
                    </span>
                    <div className="flex w-[calc(137*var(--rpx))] gap-[calc(8*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[92]">
                      <button className="flex w-[calc(59*var(--rpx))] pt-[calc(4*var(--rpx))] pr-[calc(8*var(--rpx))] pb-[calc(4*var(--rpx))] pl-[calc(8*var(--rpx))] gap-[calc(14*var(--rpx))] items-start shrink-0 flex-nowrap bg-[rgba(45,119,207,0.1)] rounded-[calc(6*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.2)] relative z-[93] pointer">
                        <span className="h-[calc(15*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(12*var(--rpx))] font-normal leading-[calc(15*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[94]">
                          GameFi
                        </span>
                      </button>
                      <button className="flex w-[calc(70*var(--rpx))] pt-[calc(4*var(--rpx))] pr-[calc(8*var(--rpx))] pb-[calc(4*var(--rpx))] pl-[calc(8*var(--rpx))] gap-[calc(14*var(--rpx))] items-start shrink-0 flex-nowrap bg-[rgba(45,119,207,0.1)] rounded-[calc(6*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.2)] relative z-[95] pointer">
                        <span className="h-[calc(15*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(12*var(--rpx))] font-normal leading-[calc(15*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[96]">
                          Lumiterra
                        </span>
                      </button>
                    </div>
                    <div className="flex w-[calc(73*var(--rpx))] gap-[calc(5*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[97]">
                      <div className="w-[calc(14*var(--rpx))] h-[calc(14*var(--rpx))] shrink-0 (../assets/images/c1f2f755-995f-4641-b301-b678080ff7bc.png)] bg-cover bg-no-repeat relative overflow-hidden z-[98]" />
                      <span className="flex w-[calc(64*var(--rpx))] h-[calc(21*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[calc(14*var(--rpx))] font-normal leading-[calc(21*var(--rpx))] text-[#00c498] tracking-[calc(0.21*var(--rpx))] relative text-left whitespace-nowrap z-[99]">
                        99/200
                      </span>
                    </div>
                  </div>
                </div>
                <button className="flex w-[calc(254*var(--rpx))] h-[calc(34*var(--rpx))] gap-[calc(10*var(--rpx))] justify-center items-center shrink-0 flex-nowrap rounded-[calc(7*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.4)] relative z-[100] pointer">
                  <span className="h-[calc(19*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(16*var(--rpx))] font-bold leading-[calc(19*var(--rpx))] text-[#fff] relative text-left capitalize whitespace-nowrap z-[101]">
                    + Join
                  </span>
                </button>
              </div>
              <div className="flex w-[calc(298*var(--rpx))] pt-[calc(16*var(--rpx))] pr-[calc(22*var(--rpx))] pb-[calc(16*var(--rpx))] pl-[calc(22*var(--rpx))] flex-col gap-[calc(18*var(--rpx))] items-center flex-nowrap bg-[rgba(24,31,46,0.6)] rounded-[calc(10*var(--rpx))] relative z-[153]">
                <div className="flex w-[calc(254*var(--rpx))] gap-[calc(20*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[154]">
                  <div className="w-[calc(67*var(--rpx))] h-[calc(67*var(--rpx))] shrink-0 (../assets/images/65c210f0-f8c1-416b-90b0-751433cc7b19.png)] bg-cover bg-no-repeat relative z-[155]" />
                  <div className="flex w-[calc(167*var(--rpx))] flex-col gap-[calc(6*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[156]">
                    <span className="flex w-[calc(173*var(--rpx))] h-[calc(24*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Alfa_Slab_One'] text-[calc(16*var(--rpx))] font-normal leading-[calc(24*var(--rpx))] text-[#fff] tracking-[calc(0.24*var(--rpx))] relative text-left whitespace-nowrap z-[157]">
                      Social Signal
                    </span>
                    <div className="flex w-[calc(137*var(--rpx))] gap-[calc(8*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[158]">
                      <button className="flex w-[calc(59*var(--rpx))] pt-[calc(4*var(--rpx))] pr-[calc(8*var(--rpx))] pb-[calc(4*var(--rpx))] pl-[calc(8*var(--rpx))] gap-[calc(14*var(--rpx))] items-start shrink-0 flex-nowrap bg-[rgba(45,119,207,0.1)] rounded-[calc(6*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.2)] relative z-[159] pointer">
                        <span className="h-[calc(15*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(12*var(--rpx))] font-normal leading-[calc(15*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[160]">
                          GameFi
                        </span>
                      </button>
                      <button className="flex w-[calc(70*var(--rpx))] pt-[calc(4*var(--rpx))] pr-[calc(8*var(--rpx))] pb-[calc(4*var(--rpx))] pl-[calc(8*var(--rpx))] gap-[calc(14*var(--rpx))] items-start shrink-0 flex-nowrap bg-[rgba(45,119,207,0.1)] rounded-[calc(6*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.2)] relative z-[161] pointer">
                        <span className="h-[calc(15*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(12*var(--rpx))] font-normal leading-[calc(15*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[162]">
                          Lumiterra
                        </span>
                      </button>
                    </div>
                    <div className="flex w-[calc(167*var(--rpx))] gap-[calc(16*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[163]">
                      <div className="flex w-[calc(81*var(--rpx))] gap-[calc(5*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[164]">
                        <div className="w-[calc(14*var(--rpx))] h-[calc(14*var(--rpx))] shrink-0 (../assets/images/e446e01b-13f3-4b78-85c4-a2223edc09af.png)] bg-cover bg-no-repeat relative overflow-hidden z-[165]" />
                        <span className="flex w-[calc(67*var(--rpx))] h-[calc(21*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[calc(14*var(--rpx))] font-normal leading-[calc(21*var(--rpx))] text-[#ff3333] tracking-[calc(0.21*var(--rpx))] relative text-left whitespace-nowrap z-[166]">
                          200/200
                        </span>
                      </div>
                      <button className="flex w-[calc(41*var(--rpx))] gap-[calc(5*var(--rpx))] justify-end items-center shrink-0 flex-nowrap bg-[rgba(255,51,51,0.28)] rounded-[calc(6*var(--rpx))] border-none relative z-[167] pointer">
                        <span className="flex w-[calc(39*var(--rpx))] h-[calc(21*var(--rpx))] justify-center items-start shrink-0 basis-auto font-['Inter'] text-[calc(14*var(--rpx))] font-normal leading-[calc(21*var(--rpx))] text-[#ff3333] tracking-[calc(0.21*var(--rpx))] relative text-center whitespace-nowrap z-[168]">
                          Full
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <button className="flex w-[calc(254*var(--rpx))] h-[calc(34*var(--rpx))] gap-[calc(10*var(--rpx))] justify-center items-center shrink-0 flex-nowrap rounded-[calc(7*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.4)] relative z-[169] pointer">
                  <span className="h-[calc(19*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(16*var(--rpx))] font-bold leading-[calc(19*var(--rpx))] text-[#fff] relative text-left capitalize whitespace-nowrap z-[170]">
                    + Join
                  </span>
                </button>
              </div>
              <div className="flex w-[calc(298*var(--rpx))] pt-[calc(16*var(--rpx))] pr-[calc(22*var(--rpx))] pb-[calc(16*var(--rpx))] pl-[calc(22*var(--rpx))] flex-col gap-[calc(18*var(--rpx))] items-center flex-nowrap bg-[rgba(24,31,46,0.6)] rounded-[calc(10*var(--rpx))] relative z-[102]">
                <div className="flex w-[calc(254*var(--rpx))] gap-[calc(20*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[103]">
                  <div className="w-[calc(67*var(--rpx))] h-[calc(67*var(--rpx))] shrink-0 (../assets/images/f5c953ce-a460-4db4-be86-15b18ac47dff.png)] bg-cover bg-no-repeat relative z-[104]" />
                  <div className="flex w-[calc(167*var(--rpx))] flex-col gap-[calc(6*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[105]">
                    <span className="flex w-[calc(173*var(--rpx))] h-[calc(24*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Alfa_Slab_One'] text-[calc(16*var(--rpx))] font-normal leading-[calc(24*var(--rpx))] text-[#fff] tracking-[calc(0.24*var(--rpx))] relative text-left whitespace-nowrap z-[106]">
                      Social Signal
                    </span>
                    <div className="flex w-[calc(137*var(--rpx))] gap-[calc(8*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[107]">
                      <button className="flex w-[calc(59*var(--rpx))] pt-[calc(4*var(--rpx))] pr-[calc(8*var(--rpx))] pb-[calc(4*var(--rpx))] pl-[calc(8*var(--rpx))] gap-[calc(14*var(--rpx))] items-start shrink-0 flex-nowrap bg-[rgba(45,119,207,0.1)] rounded-[calc(6*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.2)] relative z-[108] pointer">
                        <span className="h-[calc(15*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(12*var(--rpx))] font-normal leading-[calc(15*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[109]">
                          GameFi
                        </span>
                      </button>
                      <button className="flex w-[calc(70*var(--rpx))] pt-[calc(4*var(--rpx))] pr-[calc(8*var(--rpx))] pb-[calc(4*var(--rpx))] pl-[calc(8*var(--rpx))] gap-[calc(14*var(--rpx))] items-start shrink-0 flex-nowrap bg-[rgba(45,119,207,0.1)] rounded-[calc(6*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.2)] relative z-[110] pointer">
                        <span className="h-[calc(15*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(12*var(--rpx))] font-normal leading-[calc(15*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[111]">
                          Lumiterra
                        </span>
                      </button>
                    </div>
                    <div className="flex w-[calc(167*var(--rpx))] gap-[calc(16*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[112]">
                      <div className="flex w-[calc(81*var(--rpx))] gap-[calc(5*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[113]">
                        <div className="w-[calc(14*var(--rpx))] h-[calc(14*var(--rpx))] shrink-0 (../assets/images/adcf0706-d921-4bc9-9eaa-332e588f4f7b.png)_] bg-cover bg-no-repeat relative overflow-hidden z-[114]" />
                        <span className="flex w-[calc(67*var(--rpx))] h-[calc(21*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[calc(14*var(--rpx))] font-normal leading-[calc(21*var(--rpx))] text-[#ff3333] tracking-[calc(0.21*var(--rpx))] relative text-left whitespace-nowrap z-[115]">
                          200/200
                        </span>
                      </div>
                      <button className="flex w-[calc(41*var(--rpx))] gap-[calc(5*var(--rpx))] justify-end items-center shrink-0 flex-nowrap bg-[rgba(255,51,51,0.28)] rounded-[calc(6*var(--rpx))] border-none relative z-[116] pointer">
                        <span className="flex w-[calc(39*var(--rpx))] h-[calc(21*var(--rpx))] justify-center items-start shrink-0 basis-auto font-['Inter'] text-[calc(14*var(--rpx))] font-normal leading-[calc(21*var(--rpx))] text-[#ff3333] tracking-[calc(0.21*var(--rpx))] relative text-center whitespace-nowrap z-[117]">
                          Full
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <button className="flex w-[calc(254*var(--rpx))] h-[calc(34*var(--rpx))] gap-[calc(10*var(--rpx))] justify-center items-center shrink-0 flex-nowrap rounded-[calc(7*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.4)] relative z-[118] pointer">
                  <span className="h-[calc(19*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(16*var(--rpx))] font-bold leading-[calc(19*var(--rpx))] text-[#fff] relative text-left capitalize whitespace-nowrap z-[119]">
                    + Join
                  </span>
                </button>
              </div>
              <div className="flex w-[calc(298*var(--rpx))] pt-[calc(16*var(--rpx))] pr-[calc(22*var(--rpx))] pb-[calc(16*var(--rpx))] pl-[calc(22*var(--rpx))] flex-col gap-[calc(18*var(--rpx))] items-center flex-nowrap bg-[rgba(24,31,46,0.6)] rounded-[calc(10*var(--rpx))] relative z-[171]">
                <div className="flex w-[calc(254*var(--rpx))] gap-[calc(20*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[172]">
                  <div className="w-[calc(67*var(--rpx))] h-[calc(67*var(--rpx))] shrink-0 bg-cover bg-no-repeat relative z-[173]" />
                  <div className="flex w-[calc(167*var(--rpx))] flex-col gap-[calc(6*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[174]">
                    <span className="flex w-[calc(173*var(--rpx))] h-[calc(24*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Alfa_Slab_One'] text-[calc(16*var(--rpx))] font-normal leading-[calc(24*var(--rpx))] text-[#fff] tracking-[calc(0.24*var(--rpx))] relative text-left whitespace-nowrap z-[175]">
                      Social Signal
                    </span>
                    <div className="flex w-[calc(137*var(--rpx))] gap-[calc(8*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[176]">
                      <button className="flex w-[calc(59*var(--rpx))] pt-[calc(4*var(--rpx))] pr-[calc(8*var(--rpx))] pb-[calc(4*var(--rpx))] pl-[calc(8*var(--rpx))] gap-[calc(14*var(--rpx))] items-start shrink-0 flex-nowrap bg-[rgba(45,119,207,0.1)] rounded-[calc(6*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.2)] relative z-[177] pointer">
                        <span className="h-[calc(15*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(12*var(--rpx))] font-normal leading-[calc(15*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[178]">
                          GameFi
                        </span>
                      </button>
                      <button className="flex w-[calc(70*var(--rpx))] pt-[calc(4*var(--rpx))] pr-[calc(8*var(--rpx))] pb-[calc(4*var(--rpx))] pl-[calc(8*var(--rpx))] gap-[calc(14*var(--rpx))] items-start shrink-0 flex-nowrap bg-[rgba(45,119,207,0.1)] rounded-[calc(6*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.2)] relative z-[179] pointer">
                        <span className="h-[calc(15*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(12*var(--rpx))] font-normal leading-[calc(15*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[180]">
                          Lumiterra
                        </span>
                      </button>
                    </div>
                    <div className="flex w-[calc(73*var(--rpx))] gap-[calc(5*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[181]">
                      <div className="w-[calc(14*var(--rpx))] h-[calc(14*var(--rpx))] shrink-0 bg-cover bg-no-repeat relative overflow-hidden z-[182]" />
                      <span className="flex w-[calc(64*var(--rpx))] h-[calc(21*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[calc(14*var(--rpx))] font-normal leading-[calc(21*var(--rpx))] text-[#00c498] tracking-[calc(0.21*var(--rpx))] relative text-left whitespace-nowrap z-[183]">
                        99/200
                      </span>
                    </div>
                  </div>
                </div>
                <button className="flex w-[calc(254*var(--rpx))] h-[calc(34*var(--rpx))] gap-[calc(10*var(--rpx))] justify-center items-center shrink-0 flex-nowrap rounded-[calc(7*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.4)] relative z-[184] pointer">
                  <span className="h-[calc(19*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(16*var(--rpx))] font-bold leading-[calc(19*var(--rpx))] text-[#fff] relative text-left capitalize whitespace-nowrap z-[185]">
                    + Join
                  </span>
                </button>
              </div>
              <div className="flex w-[calc(298*var(--rpx))] pt-[calc(16*var(--rpx))] pr-[calc(22*var(--rpx))] pb-[calc(16*var(--rpx))] pl-[calc(22*var(--rpx))] flex-col gap-[calc(18*var(--rpx))] items-center flex-nowrap bg-[rgba(24,31,46,0.6)] rounded-[calc(10*var(--rpx))] relative z-[120]">
                <div className="flex w-[calc(254*var(--rpx))] gap-[calc(20*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[121]">
                  <div className="w-[calc(67*var(--rpx))] h-[calc(67*var(--rpx))] shrink-0 bg-cover bg-no-repeat relative z-[122]" />
                  <div className="flex w-[calc(167*var(--rpx))] flex-col gap-[calc(6*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[123]">
                    <span className="flex w-[calc(173*var(--rpx))] h-[calc(24*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Alfa_Slab_One'] text-[calc(16*var(--rpx))] font-normal leading-[calc(24*var(--rpx))] text-[#fff] tracking-[calc(0.24*var(--rpx))] relative text-left whitespace-nowrap z-[124]">
                      Social Signal
                    </span>
                    <div className="flex w-[calc(137*var(--rpx))] gap-[calc(8*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[125]">
                      <button className="flex w-[calc(59*var(--rpx))] pt-[calc(4*var(--rpx))] pr-[calc(8*var(--rpx))] pb-[calc(4*var(--rpx))] pl-[calc(8*var(--rpx))] gap-[calc(14*var(--rpx))] items-start shrink-0 flex-nowrap bg-[rgba(45,119,207,0.1)] rounded-[calc(6*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.2)] relative z-[126] pointer">
                        <span className="h-[calc(15*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(12*var(--rpx))] font-normal leading-[calc(15*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[127]">
                          GameFi
                        </span>
                      </button>
                      <button className="flex w-[calc(70*var(--rpx))] pt-[calc(4*var(--rpx))] pr-[calc(8*var(--rpx))] pb-[calc(4*var(--rpx))] pl-[calc(8*var(--rpx))] gap-[calc(14*var(--rpx))] items-start shrink-0 flex-nowrap bg-[rgba(45,119,207,0.1)] rounded-[calc(6*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.2)] relative z-[128] pointer">
                        <span className="h-[calc(15*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(12*var(--rpx))] font-normal leading-[calc(15*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[129]">
                          Lumiterra
                        </span>
                      </button>
                    </div>
                    <div className="flex w-[calc(167*var(--rpx))] gap-[calc(16*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[130]">
                      <div className="flex w-[calc(81*var(--rpx))] gap-[calc(5*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[131]">
                        <div className="w-[calc(14*var(--rpx))] h-[calc(14*var(--rpx))] shrink-0 (../assets/images/0d20db9a-25ab-41c9-8b7e-793e1e076e68.png)] bg-cover bg-no-repeat relative overflow-hidden z-[132]" />
                        <span className="flex w-[calc(67*var(--rpx))] h-[calc(21*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[calc(14*var(--rpx))] font-normal leading-[calc(21*var(--rpx))] text-[#ff3333] tracking-[calc(0.21*var(--rpx))] relative text-left whitespace-nowrap z-[133]">
                          200/200
                        </span>
                      </div>
                      <button className="flex w-[calc(41*var(--rpx))] gap-[calc(5*var(--rpx))] justify-end items-center shrink-0 flex-nowrap bg-[rgba(255,51,51,0.28)] rounded-[calc(6*var(--rpx))] border-none relative z-[134] pointer">
                        <span className="flex w-[calc(39*var(--rpx))] h-[calc(21*var(--rpx))] justify-center items-start shrink-0 basis-auto font-['Inter'] text-[calc(14*var(--rpx))] font-normal leading-[calc(21*var(--rpx))] text-[#ff3333] tracking-[calc(0.21*var(--rpx))] relative text-center whitespace-nowrap z-[135]">
                          Full
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <button className="flex w-[calc(254*var(--rpx))] h-[calc(34*var(--rpx))] gap-[calc(10*var(--rpx))] justify-center items-center shrink-0 flex-nowrap rounded-[calc(7*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.4)] relative z-[136] pointer">
                  <span className="h-[calc(19*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(16*var(--rpx))] font-bold leading-[calc(19*var(--rpx))] text-[#fff] relative text-left capitalize whitespace-nowrap z-[137]">
                    + Join
                  </span>
                </button>
              </div>
              <div className="flex w-[calc(298*var(--rpx))] pt-[calc(16*var(--rpx))] pr-[calc(22*var(--rpx))] pb-[calc(16*var(--rpx))] pl-[calc(22*var(--rpx))] flex-col gap-[calc(18*var(--rpx))] items-center flex-nowrap bg-[rgba(24,31,46,0.6)] rounded-[calc(10*var(--rpx))] relative z-[186]">
                <div className="flex w-[calc(254*var(--rpx))] gap-[calc(20*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[187]">
                  <div className="w-[calc(67*var(--rpx))] h-[calc(67*var(--rpx))] shrink-0 (../assets/images/1e328764-5b67-416d-99f9-7cec1b478076.png)] bg-cover bg-no-repeat relative z-[188]" />
                  <div className="flex w-[calc(167*var(--rpx))] flex-col gap-[calc(6*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[189]">
                    <span className="flex w-[calc(173*var(--rpx))] h-[calc(24*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Alfa_Slab_One'] text-[calc(16*var(--rpx))] font-normal leading-[calc(24*var(--rpx))] text-[#fff] tracking-[calc(0.24*var(--rpx))] relative text-left whitespace-nowrap z-[190]">
                      Social Signal
                    </span>
                    <div className="flex w-[calc(137*var(--rpx))] gap-[calc(8*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[191]">
                      <button className="flex w-[calc(59*var(--rpx))] pt-[calc(4*var(--rpx))] pr-[calc(8*var(--rpx))] pb-[calc(4*var(--rpx))] pl-[calc(8*var(--rpx))] gap-[calc(14*var(--rpx))] items-start shrink-0 flex-nowrap bg-[rgba(45,119,207,0.1)] rounded-[calc(6*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.2)] relative z-[192] pointer">
                        <span className="h-[calc(15*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(12*var(--rpx))] font-normal leading-[calc(15*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[193]">
                          GameFi
                        </span>
                      </button>
                      <button className="flex w-[calc(70*var(--rpx))] pt-[calc(4*var(--rpx))] pr-[calc(8*var(--rpx))] pb-[calc(4*var(--rpx))] pl-[calc(8*var(--rpx))] gap-[calc(14*var(--rpx))] items-start shrink-0 flex-nowrap bg-[rgba(45,119,207,0.1)] rounded-[calc(6*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.2)] relative z-[194] pointer">
                        <span className="h-[calc(15*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(12*var(--rpx))] font-normal leading-[calc(15*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[195]">
                          Lumiterra
                        </span>
                      </button>
                    </div>
                    <div className="flex w-[calc(73*var(--rpx))] gap-[calc(5*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[196]">
                      <div className="w-[calc(14*var(--rpx))] h-[calc(14*var(--rpx))] shrink-0 (../assets/images/9291546b-9e13-4882-b310-0f6313fb4940.png)] bg-cover bg-no-repeat relative overflow-hidden z-[197]" />
                      <span className="flex w-[calc(64*var(--rpx))] h-[calc(21*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[calc(14*var(--rpx))] font-normal leading-[calc(21*var(--rpx))] text-[#00c498] tracking-[calc(0.21*var(--rpx))] relative text-left whitespace-nowrap z-[198]">
                        99/200
                      </span>
                    </div>
                  </div>
                </div>
                <button className="flex w-[calc(254*var(--rpx))] h-[calc(34*var(--rpx))] gap-[calc(10*var(--rpx))] justify-center items-center shrink-0 flex-nowrap rounded-[calc(7*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.4)] relative z-[199] pointer">
                  <span className="h-[calc(19*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(16*var(--rpx))] font-bold leading-[calc(19*var(--rpx))] text-[#fff] relative text-left capitalize whitespace-nowrap z-[200]">
                    + Join
                  </span>
                </button>
              </div>
              <div className="flex w-[calc(298*var(--rpx))] pt-[calc(16*var(--rpx))] pr-[calc(22*var(--rpx))] pb-[calc(16*var(--rpx))] pl-[calc(22*var(--rpx))] flex-col gap-[calc(18*var(--rpx))] items-center flex-nowrap bg-[rgba(24,31,46,0.6)] rounded-[calc(10*var(--rpx))] relative z-[138]">
                <div className="flex w-[calc(254*var(--rpx))] gap-[calc(20*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[139]">
                  <div className="w-[calc(67*var(--rpx))] h-[calc(67*var(--rpx))] shrink-0 (../assets/images/730059ed-d794-4e8f-859c-f930f3d2298c.png)] bg-cover bg-no-repeat relative z-[140]" />
                  <div className="flex w-[calc(167*var(--rpx))] flex-col gap-[calc(6*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[141]">
                    <span className="flex w-[calc(173*var(--rpx))] h-[calc(24*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Alfa_Slab_One'] text-[calc(16*var(--rpx))] font-normal leading-[calc(24*var(--rpx))] text-[#fff] tracking-[calc(0.24*var(--rpx))] relative text-left whitespace-nowrap z-[142]">
                      Social Signal
                    </span>
                    <div className="flex w-[calc(137*var(--rpx))] gap-[calc(8*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[143]">
                      <button className="flex w-[calc(59*var(--rpx))] pt-[calc(4*var(--rpx))] pr-[calc(8*var(--rpx))] pb-[calc(4*var(--rpx))] pl-[calc(8*var(--rpx))] gap-[calc(14*var(--rpx))] items-start shrink-0 flex-nowrap bg-[rgba(45,119,207,0.1)] rounded-[calc(6*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.2)] relative z-[144] pointer">
                        <span className="h-[calc(15*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(12*var(--rpx))] font-normal leading-[calc(15*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[145]">
                          GameFi
                        </span>
                      </button>
                      <button className="flex w-[calc(70*var(--rpx))] pt-[calc(4*var(--rpx))] pr-[calc(8*var(--rpx))] pb-[calc(4*var(--rpx))] pl-[calc(8*var(--rpx))] gap-[calc(14*var(--rpx))] items-start shrink-0 flex-nowrap bg-[rgba(45,119,207,0.1)] rounded-[calc(6*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.2)] relative z-[146] pointer">
                        <span className="h-[calc(15*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(12*var(--rpx))] font-normal leading-[calc(15*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[147]">
                          Lumiterra
                        </span>
                      </button>
                    </div>
                    <div className="flex w-[calc(73*var(--rpx))] gap-[calc(5*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[148]">
                      <div className="w-[calc(14*var(--rpx))] h-[calc(14*var(--rpx))] shrink-0 (../assets/images/040081a7-5be1-412a-9ddd-9309a5e9e472.png)] bg-cover bg-no-repeat relative overflow-hidden z-[149]" />
                      <span className="flex w-[calc(64*var(--rpx))] h-[calc(21*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[calc(14*var(--rpx))] font-normal leading-[calc(21*var(--rpx))] text-[#00c498] tracking-[calc(0.21*var(--rpx))] relative text-left whitespace-nowrap z-[150]">
                        99/200
                      </span>
                    </div>
                  </div>
                </div>
                <button className="flex w-[calc(254*var(--rpx))] h-[calc(34*var(--rpx))] gap-[calc(10*var(--rpx))] justify-center items-center shrink-0 flex-nowrap rounded-[calc(7*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.4)] relative z-[151] pointer">
                  <span className="h-[calc(19*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(16*var(--rpx))] font-bold leading-[calc(19*var(--rpx))] text-[#fff] relative text-left capitalize whitespace-nowrap z-[152]">
                    + Join
                  </span>
                </button>
              </div>
              <div className="flex w-[calc(298*var(--rpx))] pt-[calc(16*var(--rpx))] pr-[calc(22*var(--rpx))] pb-[calc(16*var(--rpx))] pl-[calc(22*var(--rpx))] flex-col gap-[calc(18*var(--rpx))] items-center flex-nowrap bg-[rgba(24,31,46,0.6)] rounded-[calc(10*var(--rpx))] relative z-[201]">
                <div className="flex w-[calc(254*var(--rpx))] gap-[calc(20*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[202]">
                  <div className="w-[calc(67*var(--rpx))] h-[calc(67*var(--rpx))] shrink-0 (../assets/images/41adb857-da9f-4d30-a997-964bcc25ce1e.png)] bg-cover bg-no-repeat relative z-[203]" />
                  <div className="flex w-[calc(167*var(--rpx))] flex-col gap-[calc(6*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[204]">
                    <span className="flex w-[calc(173*var(--rpx))] h-[calc(24*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Alfa_Slab_One'] text-[calc(16*var(--rpx))] font-normal leading-[calc(24*var(--rpx))] text-[#fff] tracking-[calc(0.24*var(--rpx))] relative text-left whitespace-nowrap z-[205]">
                      Social Signal
                    </span>
                    <div className="flex w-[calc(137*var(--rpx))] gap-[calc(8*var(--rpx))] items-start shrink-0 flex-nowrap relative z-[206]">
                      <button className="flex w-[calc(59*var(--rpx))] pt-[calc(4*var(--rpx))] pr-[calc(8*var(--rpx))] pb-[calc(4*var(--rpx))] pl-[calc(8*var(--rpx))] gap-[calc(14*var(--rpx))] items-start shrink-0 flex-nowrap bg-[rgba(45,119,207,0.1)] rounded-[calc(6*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.2)] relative z-[207] pointer">
                        <span className="h-[calc(15*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(12*var(--rpx))] font-normal leading-[calc(15*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[208]">
                          GameFi
                        </span>
                      </button>
                      <button className="flex w-[calc(70*var(--rpx))] pt-[calc(4*var(--rpx))] pr-[calc(8*var(--rpx))] pb-[calc(4*var(--rpx))] pl-[calc(8*var(--rpx))] gap-[calc(14*var(--rpx))] items-start shrink-0 flex-nowrap bg-[rgba(45,119,207,0.1)] rounded-[calc(6*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.2)] relative z-[209] pointer">
                        <span className="h-[calc(15*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(12*var(--rpx))] font-normal leading-[calc(15*var(--rpx))] text-[#f2f2f2] relative text-left capitalize whitespace-nowrap z-[210]">
                          Lumiterra
                        </span>
                      </button>
                    </div>
                    <div className="flex w-[calc(73*var(--rpx))] gap-[calc(5*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[211]">
                      <div className="w-[calc(14*var(--rpx))] h-[calc(14*var(--rpx))] shrink-0 (../assets/images/e869e1d2-4472-4ee0-b482-3c841123527c.png)] bg-cover bg-no-repeat relative overflow-hidden z-[212]" />
                      <span className="flex w-[calc(64*var(--rpx))] h-[calc(21*var(--rpx))] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[calc(14*var(--rpx))] font-normal leading-[calc(21*var(--rpx))] text-[#00c498] tracking-[calc(0.21*var(--rpx))] relative text-left whitespace-nowrap z-[213]">
                        99/200
                      </span>
                    </div>
                  </div>
                </div>
                <button className="flex w-[calc(254*var(--rpx))] h-[calc(34*var(--rpx))] gap-[calc(10*var(--rpx))] justify-center items-center shrink-0 flex-nowrap rounded-[calc(7*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[rgba(255,255,255,0.4)] relative z-[214] pointer">
                  <span className="h-[calc(19*var(--rpx))] shrink-0 basis-auto font-['Inter'] text-[calc(16*var(--rpx))] font-bold leading-[calc(19*var(--rpx))] text-[#fff] relative text-left capitalize whitespace-nowrap z-[215]">
                    + Join
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Groups
