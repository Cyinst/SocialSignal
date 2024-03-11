"use client"
// import { Link } from "@nextui-org/link";
import Image from "next/image"
import { Button } from "@nextui-org/button"
import { HtmlHTMLAttributes, useMemo, useState } from "react"
// import { Image as NUImage } from "@nextui-org/image";
import Marquee from "react-fast-marquee"
import clsx from "clsx"
import { motion } from "framer-motion"
import NextLink from "next/link"
import useTransition from "./useTransaction"

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <S4 />
    </section>
  )
}
const g1Info = {
  groupName: "g1",
  groupId: 0,
  members: 2,
  KOLName: "k1",
  token: 1000,
  topic: "#GameFi",
}
const g2Info = {
  groupName: "g2",
  groupId: 1,
  members: 20,
  KOLName: "k2",
  token: 2000,
  topic: "#SocialFi",
}
const S4 = () => {
  const titleList = ["hot topic", "private group"]
  const [active, setActive] = useState(titleList[0])
  const g1Info = {
    groupName: "g1",
    groupId: 0,
    members: 2,
    KOLName: "k1",
    token: 1000,
    topic: "#GameFi",
  }
  const g2Info = {
    groupName: "g2",
    groupId: 1,
    members: 20,
    KOLName: "k2",
    token: 2000,
    topic: "#SocialFi",
  }
  const groupInfo = [g1Info, g2Info]

  const { isLoading, isConfirming, isConfirmed, sendTransition } =
    useTransition()

  const handlePurchase: React.MouseEventHandler<HTMLElement> = (event) => {
    sendTransition({
      to: "0x7737d4589BBc0C737D62F16E462aCAE0a0CB9e62",
      value: "0.01",
    })
  }
  return (
    <div className="mt-16 md:mt-[150px] pb-[150px] flex flex-col justify-start items-center w-full px-4 md:px-0 relative">
      <div className="max-w-6xl w-full flex justify-center gap-12 md:gap-24 lg:gap-36 xl:gap-64">
        <div className="max-w-2xl w-96 h-96 bg-pink-300">
          <Image src="" alt="" />
        </div>
        <div className="flex flex-col justify-between h-96 w-64">
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="font-semibold text-[32px] leading-[150%] tracking-[0.6px] text-ellipsis"
          >
            <div className="flex justify-between">
              <div>name :</div>
              <div>{g1Info.groupName}</div>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
            className="font-semibold text-ellipsis text-2xl"
          >
            <div className="flex justify-between">
              <div>KOL :</div>
              <div>{g1Info.KOLName}</div>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.6,
            }}
            className="font-semibold text-ellipsis text-2xl"
          >
            <div className="flex justify-between">
              <div>members :</div>
              <div>{g1Info.members}</div>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.8,
            }}
            className="font-semibold text-ellipsis text-2xl"
          >
            <div className="flex justify-between">
              <div>topic :</div>
              <div>{g1Info.topic}</div>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 1,
            }}
            className="flex flex-col items-end"
          >
            <Button
              size="lg"
              radius="lg"
              color="secondary"
              onClick={handlePurchase}
            >
              purchase
            </Button>
          </motion.div>
        </div>
      </div>
      <div>description</div>
    </div>
  )
}
