"use client"
import React from "react"
import { Link } from "@nextui-org/link"
import { motion } from "framer-motion"
import { Button } from "@nextui-org/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow } from "swiper/modules"
import "swiper/css"
const Introduction: React.FC = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <div className="w-[90%] md:w-full max-w-full md:max-w-6xl mx-auto z-10">
        <div className="flex items-center justify-between gap-5">
          <motion.div
            className="w-[60%]"
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="text-3xl md:text-6xl font-bold md:leading-[72px]">
              Unlocking The New SocialFi Frontier
            </div>
            <div className="text-xl md:text-3xl">
              Preferred Private Social Keys To Web3 Powered By SFTS
            </div>
            <Button
              isExternal
              as={Link}
              className="font-normal mt-10 rounded-full border border-white/20 flex  text-xl max-w-[260px] h-[60px] flex-col justify-center items-center mx-auto md:mx-0"
              variant="flat"
              style={{
                background:
                  "radial-gradient(1604.13% 347.57% at 50% 50%, #6119AB 0%, #BF97BF 90%)",
              }}
            >
              Start navigation
            </Button>
          </motion.div>

          <Swiper
            className="h-full"
            effect="coverflow"
            modules={[EffectCoverflow]}
            coverflowEffect={{
              rotate: 20,
              depth: 100,
              modifier: 1.5,
              scale: 1,
              stretch: 0,
              slideShadows: true,
            }}
            spaceBetween={10}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className=" bg-[red] h-[200px] w-[200px]"> slide 1</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[green] h-[200px] w-[200px]"> slide 2</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[yellow] h-[200px] w-[200px]"> slide 3</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[purple] h-[200px] w-[200px]"> slide 4</div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Introduction
