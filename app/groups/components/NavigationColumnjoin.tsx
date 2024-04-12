import React from "react"
import { Button, Text, Img } from "@/components"
import Link from "next/link"

interface Props {
  avatarnumber?:number
  className?: string
  socialsignal?: string
  type?: string
  lumiterra?: string
  ninetyninethous?: string
  join?: string
}

export default function NavigationColumnjoin({
  avatarnumber = 0,
  socialsignal = "Social Signal",
  type = "Meme",
  lumiterra = "Lumiterra",
  ninetyninethous = "99/200",
  join = "+ Join",
  ...props
}: Props) {
  const avatarSrc = "images/groupAvatar" + avatarnumber + ".png"
  const groupNameList = ['Ton Fish', 'Dogecoin', 'VOYA', 'dogwifcoin', 'Pepe', 'Huhu Cat Community', 'Declaration', 'AI PEPE KING']
  const groupName = groupNameList[avatarnumber]
  return (
    <div {...props}>
      <div className="flex self-stretch items-start gap-5">
        <Img
          src={avatarSrc}
          alt="social_signal"
          className="h-[67px] w-[67px] rounded-[50%]"
        />
        <div className="flex flex-col items-start gap-[5px]">
          <Text
            size="2xl"
            as="p"
            className="tracking-[0.24px] !font-alfaslabone"
          >
            {groupName}
          </Text>
          <div className="flex gap-2">
            <Button
              variant="fill"
              shape="round"
              className="capitalize border-white-A700_33 border border-solid min-w-[59px] !rounded-md"
            >
              {type}
            </Button>
            <Button
              variant="fill"
              shape="round"
              className="capitalize border-white-A700_33 border border-solid min-w-[70px] !rounded-md"
            >
              {lumiterra}
            </Button>
          </div>
          <div className="flex items-center gap-[5px]">
            <Img
              src="images/img_frame_teal_a700.svg"
              alt="image"
              className="h-[14px] w-[14px]"
            />
            <Text as="p" className="self-end !text-teal-A700 tracking-[0.21px]">
              {ninetyninethous}
            </Text>
          </div>
        </div>
      </div>
      <Link href="/groups/1">
        <Button
          size="xl"
          variant="fill"
          shape="round"
          className="w-full sm:px-5 !text-white-A700 capitalize font-bold border-white-A700_66 border border-solid !rounded-[7px]"
        >
          {join}
        </Button>
      </Link>
    </div>
  )
}
