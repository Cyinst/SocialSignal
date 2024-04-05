import React from "react"
import { Button, Text, Img } from "@/components"

interface Props {
  className?: string
  socialsignal?: string
  gamefi?: string
  lumiterra?: string
  twohundredthous?: string
  full?: string
  join?: string
}

export default function NavigationColumndbbb({
  socialsignal = "Social Signal",
  gamefi = "GameFi",
  lumiterra = "Lumiterra",
  twohundredthous = "200/200",
  full = "Full",
  join = "+ Join",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex self-stretch items-start gap-5">
        <Img
          src="images/img_1d2b7b62b9e27af_67x67.png"
          alt="1d2b7b62b9e27af"
          className="h-[67px] w-[67px] rounded-[50%]"
        />
        <div className="flex flex-col items-start gap-[5px] flex-1">
          <Text
            size="2xl"
            as="p"
            className="tracking-[0.24px] !font-alfaslabone"
          >
            {socialsignal}
          </Text>
          <div className="flex gap-2">
            <Button
              variant="fill"
              shape="round"
              className="capitalize border-white-A700_33 border border-solid min-w-[59px] !rounded-md"
            >
              {gamefi}
            </Button>
            <Button
              variant="fill"
              shape="round"
              className="capitalize border-white-A700_33 border border-solid min-w-[70px] !rounded-md"
            >
              {lumiterra}
            </Button>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-[5px]">
              <Img
                src="images/img_frame_red_500.svg"
                alt="image_one"
                className="h-[14px] w-[14px]"
              />
              <Text as="p" className="self-end !text-red-500 tracking-[0.21px]">
                {twohundredthous}
              </Text>
            </div>
            <Text
              as="p"
              className="flex justify-center items-center h-[21px] px-[9px] py-0.5 !text-red-500 tracking-[0.21px] text-center bg-red-500_47 rounded-md"
            >
              {full}
            </Text>
          </div>
        </div>
      </div>
      <Button
        size="xl"
        variant="fill"
        shape="round"
        className="w-full sm:px-5 !text-white-A700 capitalize font-bold border-white-A700_66 border border-solid !rounded-[7px]"
      >
        {join}
      </Button>
    </div>
  )
}
