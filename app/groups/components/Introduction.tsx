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
            <div className="flex items-center w-full gap-4 mt-[105px] mx-auto md:p-5 max-w-[1226px]">
              <div className="flex flex-col items-start w-[48%] gap-10">
                <div className="flex flex-col self-stretch items-start gap-4">
                  <div className="flex w-[94%] md:w-full pt-[13px]">
                    <Heading size="5xl" as="h1" className="leading-[72px]">
                      Unlocking The New SocialFi Frontier{" "}
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
                  size="7xl"
                  rightIcon={
                    <Image
                      src="/images/Image_frame_1000002923.svg"
                      alt="Frame 1000002923"
                    />
                  }
                  className="flex justify-center items-center gap-[11px] min-w-[260px] rounded-[30px] bg-[#6119AB]"
                >
                  Follow us
                </Button>
              </div>
              <div className=" flex-1 relative ">
                <div className="flex items-center w-full h-full  sm:relative">
                  <div className="w-full h-full justify-center items-center">
                    <Carousel className="h-full">
                      <div className="">
                        <Image src={`/groups_1.png`} alt=""></Image>
                      </div>
                      <div className="">
                        <Image src={`/groups_2.png`} alt=""></Image>
                      </div>
                      <div className=" h-full w-full">
                        <Image src={`/groups_3.png`} className="h-full w-full" alt="" removeWrapper></Image>
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
