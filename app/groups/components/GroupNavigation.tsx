import React, { useState } from "react"
import { Link } from "@nextui-org/link"
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
} from "@nextui-org/react"
import { Text } from "@/components"
import { motion } from "framer-motion"
import NavigationColumndbbb from "./NavigationColumndbbb"
import NavigationColumnjoin from "./NavigationColumnjoin"
import NavigationFilter from "./NavigationFilter"
interface GroupCardDataType {
  groupId: string | number
  avatarUrl: string
  groupName: string
  topics: string[]
  currentMembersCount: number
  memberLimit: number
}

const GroupCard: React.FC<{ data: GroupCardDataType }> = ({ data }) => {
  return (
    <Card className="bg-[rgba(24,31,46,0.6)] px-6 m-2">
      <CardBody>
        <div className="flex gap-5">
          <div className="flex justify-center items-center m-4">
            <Avatar size="lg" src="/groupAvatar.png" />
          </div>
          <div className="flex flex-col justify-between">
            <div className="font-bold text-[16px] leading-normal">
              {data.groupName}
            </div>
            <div className="my-2">
              {data.topics.map((topic) => (
                <Chip
                  key={topic}
                  radius="sm"
                  className="text-[16px] mr-2 bg-[rgba(46,120,207,0.1)] ring-1 ring-white"
                >
                  {topic}
                </Chip>
              ))}
            </div>
            <div className="flex text-[14px]">
              <motion.img src="/availableGroup.svg"></motion.img>
              {data.currentMembersCount} / {data.memberLimit}
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter className="flex justify-center items-center ">
        <Button
          className="ring-1 ring-white"
          startContent={"+"}
          fullWidth
          href="/groups/0"
          as={Link}
        >
          join
        </Button>
      </CardFooter>
    </Card>
  )
}

const groupCardData: GroupCardDataType[] = Array(8)
  .fill(0)
  .map((_, idx) => ({
    groupId: idx,
    avatarUrl: "",
    groupName: "social signal",
    topics: ["games", "Fi"],
    currentMembersCount: 10,
    memberLimit: 30,
  }))
const groupLabel = ["All", "following"]
const tagLabel = ["Games", "News"]
const GroupNavigation = () => {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0)
  return (
    <div className="flex flex-col items-center w-full gap-[47px] mx-auto max-w-[1278px]">
      <Text
        size="8xl"
        as="p"
        className="tracking-[0.60px] !font-alfaslabone text-shadow-ts"
      >
        <span className="leading-normal drop-shadow-[0px_4px_8px_#b133ff]  my-16font-peacesans font-peace text-[40px] my-16">
          Group 
        </span>
          <span className="leading-normal drop-shadow-[0px_4px_8px_#b133ff]  my-16font-peacesans font-peace text-[40px] my-16">Navigation</span>
      </Text>
      <div className="flex flex-col self-stretch gap-[30px]">
        <NavigationFilter className="flex flex-col w-[14%] md:w-full gap-[11px]" />
        <div>
          <div className="justify-center gap-7 grid-cols-[repeat(auto-fill,_minmax(266px_,_1fr))] grid">
            <NavigationColumnjoin className="flex flex-col w-full gap-[18px] p-4 bg-gray-900_99 rounded-[10px] border border-solid black_900_1a_01_purple_A200_00_border bg-gradient4 shadow-xs" />
            <NavigationColumndbbb className="flex flex-col w-full gap-[18px] p-4 bg-gray-900_99 rounded-[10px] border border-solid black_900_1a_01_purple_A200_00_border bg-gradient4 shadow-xs" />
            <NavigationColumndbbb className="flex flex-col w-full gap-[18px] p-4 bg-gray-900_99 rounded-[10px] border border-solid black_900_1a_01_purple_A200_00_border bg-gradient4 shadow-xs" />
            <NavigationColumnjoin className="flex flex-col w-full gap-[18px] p-4 bg-gray-900_99 rounded-[10px] border border-solid black_900_1a_01_purple_A200_00_border bg-gradient4 shadow-xs" />
            <NavigationColumndbbb className="flex flex-col w-full gap-[18px] p-4 bg-gray-900_99 rounded-[10px] border border-solid black_900_1a_01_purple_A200_00_border bg-gradient4 shadow-xs" />
            <NavigationColumnjoin className="flex flex-col w-full gap-[18px] p-4 bg-gray-900_99 rounded-[10px] border border-solid black_900_1a_01_purple_A200_00_border bg-gradient4 shadow-xs" />
            <NavigationColumnjoin className="flex flex-col w-full gap-[18px] p-4 bg-gray-900_99 rounded-[10px] border border-solid black_900_1a_01_purple_A200_00_border bg-gradient4 shadow-xs" />
            <NavigationColumnjoin className="flex flex-col w-full gap-[18px] p-4 bg-gray-900_99 rounded-[10px] border border-solid black_900_1a_01_purple_A200_00_border bg-gradient4 shadow-xs" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupNavigation
