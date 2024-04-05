import React from "react"
import { Img, Heading, Text, Button } from "@/components"

interface Props {
  className?: string
  socialsignal?: string
  gamefi?: string
  lumiterra?: string
  mapletwo?: string
  ninetyninethous?: string
  web3zero?: string
}

export default function NavigationPromotedcard({
  socialsignal = "Social Signal",
  gamefi = "GameFi",
  lumiterra = "Lumiterra",
  mapletwo = "@Maple",
  ninetyninethous = "99/200",
  web3zero = "Web 3.0 promises a decentralized internet built on the blockchain.",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex self-stretch items-center gap-[13px]">
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex flex-col items-start pt-[5px] gap-1.5">
            <Heading
              size="3xl"
              as="h1"
              className="tracking-[0.36px] !font-bold"
            >
              {socialsignal}
            </Heading>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="fill"
                shape="round"
                className="capitalize border-white-A700_66 border border-solid min-w-[74px] !rounded-[7px]"
              >
                {gamefi}
              </Button>
              <Button
                size="sm"
                variant="fill"
                shape="round"
                className="capitalize border-white-A700_66 border border-solid min-w-[88px] !rounded-[7px]"
              >
                {lumiterra}
              </Button>
            </div>
          </div>
          <div className="flex justify-between items-center gap-5">
            <div className="flex items-center gap-[9px] flex-1">
              <Img
                src="images/img_download_1.png"
                alt="maple_one"
                className="h-[36px] w-[36px] rounded-[50%]"
              />
              <Text
                as="p"
                className="self-end mb-2 !text-white-A700_b2 tracking-[0.21px]"
              >
                {mapletwo}
              </Text>
            </div>
            <div className="flex items-center gap-[5px]">
              <Img
                src="images/img_frame_teal_a700.svg"
                alt="image"
                className="h-[14px] w-[14px]"
              />
              <Text
                as="p"
                className="self-end !text-teal-A700 tracking-[0.21px]"
              >
                {ninetyninethous}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <Img
            src="images/img_social_signal_logo.png"
            alt="social_signal"
            className="w-full object-cover rounded-[15px]"
          />
        </div>
      </div>
      <div className="flex self-stretch justify-center items-center gap-2 p-1.5 bg-indigo-A200 rounded-lg">
        <Heading
          size="s"
          as="h2"
          className="w-[89%] tracking-[0.22px] !font-semibold leading-[150%] italic"
        >
          {web3zero}
        </Heading>
        <Img src="images/img_user.svg" alt="image_one" className="h-[30px]" />
      </div>
    </div>
  )
}
