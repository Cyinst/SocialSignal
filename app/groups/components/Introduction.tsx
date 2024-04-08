"use client"
import React from "react"
import { Image } from "@nextui-org/react"
import { Heading } from "@/components/Heading"
import { Button } from "@/components/Button"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
const Introduction: React.FC = () => {
  return (
    <div className="w-full bg-gray-900_01">
      <div className="flex flex-col items-start">
        <div className="self-stretch py-5 bg-gray-800_01">
          <div className="flex flex-col items-center mb-[65px]">
            <div className="flex items-center justify-between w-full gap-4 mt-[105px] mx-auto md:p-5 max-w-[1226px]">
              <div className="flex flex-col items-start w-[48%] self-stretch gap-6">
                <div className="flex flex-col self-stretch items-start h-full gap-2">
                  <div className="flex w-[94%] md:w-full pt-[13px]">
                    <Heading size="5xl" as="h1" className="leading-[54px]">
                      Unlocking Memecoin Growth via Incentivized Decentralized
                      Communities
                    </Heading>
                  </div>
                  <div className="flex self-center pr-[7px] py-[7px]">
                    <Heading
                      size="2xl"
                      as="h2"
                      className="self-end text-[#94A3B8] !font-bold"
                    >
                      Preferred Private Social Keys to Web3 Powered By SFTs{" "}
                    </Heading>
                  </div>
                </div>
                <Button
                  color="white_A700_33"
                  size="4xl"
                  className="flex justify-center items-center gap-[11px] min-w-[240px] rounded-[30px] bg-[#6119AB]"
                >
                  Follow us
                </Button>
              </div>
              <div className="flex-1 relative ">
                <div className="flex items-center justify-center sm:relative">
                  <div className="flex justify-center items-center">
                    <Carousel  showStatus={false} showThumbs={false}>
                      <div className="">
                        <Image src={`/groups_1.png`} alt=""></Image>
                      </div>
                      <div className="">
                        <Image src={`/groups_2.png`} alt=""></Image>
                      </div>
                      <div >
                        <Image
                          src={`/groups_3.png`}
                          // className="h-full w-full"
                          alt=""
                          removeWrapper
                        ></Image>
                      </div>
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
