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
import { motion } from "framer-motion"
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
            <Avatar size="lg" src="/groupAvatar.png"/>
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
    <div className="my-16">
      <div className="font-peace text-[40px] leading-normal drop-shadow-[0px_4px_8px_#b133ff] flex justify-center">
        Group Naviagton
      </div>
      <div className="flex gap-5 items-center my-8">
        {groupLabel.map((label, index) => (
          <div
            key={label}
            className={
              activeGroupIndex === index
                ? "text-[24px] font-semibold"
                : "text-[20px]"
            }
          >
            {label}
          </div>
        ))}
      </div>
      <div className="flex gap-5 items-center my-4">
        {tagLabel.map((label, index) => (
          <div key={label} className=" ring-1 ring-white rounded-md px-2 py-1">
            {label}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 grid-flow-row gap-5">
        {groupCardData.map((data) => (
          <GroupCard key={data.groupId} data={data} />
        ))}
      </div>
    </div>
  )
}

export default GroupNavigation
