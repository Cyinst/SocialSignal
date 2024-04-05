"use client"
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Image,
} from "@nextui-org/react"
import { motion } from "framer-motion"
import React from "react"
interface GroupCardDataType {
  groupId: string | number
  avatarUrl: string
  coinUrl: string
  groupName: string
  kolName: string
  topics: string[]
  currentMembersCount: number
  memberLimit: number
  description: string
}

const GroupCard: React.FC<{ data: GroupCardDataType }> = ({ data }) => {
  return (
    <Card
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(179.26deg, rgba(78, 49, 91, 0.1) -1.53%, rgba(49, 58, 91, 0.5) 65.9%, rgba(49, 58, 91, 0) 101.48%)",
        boxShadow: "0px 4px 4px rgba(180, 41, 154, 0.3)",
      }}
      className="backdrop-blur-[20px] rounded-2xl px-2 "
    >
      <CardBody>
        <div className="flex justify-between items-center ">
          <div className="flex flex-col items-start flex-1">
            <div className="my-2">{data.groupName}</div>
            <div className="mb-6">
              {data.topics.map((topic) => (
                <Chip key={topic}>{topic}</Chip>
              ))}
            </div>
            <div className="flex justify-between items-cetner ">
              <div className="flex items-center">
                <Avatar src="/groupsNavigationAvatar.png" />
                <div className="mx-2">@{data.kolName}</div>
              </div>
              <div className="flex items-center mr-2">
                <motion.img
                  src="/availableGroup.svg"
                  className="inline"
                ></motion.img>
                {data.currentMembersCount} / {data.memberLimit}
              </div>
            </div>
          </div>
          <div className="flex w-[30%] p-6 relative pt-[30%] overflow-hidden  justify-center items-center ring-2 ring-[#2E2E2E] rounded-md">
            <Image
              removeWrapper
              src={data.coinUrl}
              alt=""
              className="w-full h-auto absolute top-0 left-0"
              radius="md"
            ></Image>
          </div>
        </div>
      </CardBody>
      <CardFooter>
        <div className="flex justify-between bg-[#5D54FD] rounded-md w-full px-4">
          <div className="">{data.description}</div>
          <motion.img src="/backQuote.svg"></motion.img>
        </div>
      </CardFooter>
    </Card>
  )
}

const groupData: GroupCardDataType[] = Array(6)
  .fill(0)
  .map((_, idx) => ({
    groupId: idx,
    groupName: "Social Signal",
    avatarUrl: "",
    coinUrl: "/logo-1.png",
    kolName: "zhangsan",
    topics: ["games", "BTC"],
    currentMembersCount: 9,
    memberLimit: 15,
    description: "this is a long long description",
  }))

const WeeklySelect: React.FC = () => {
  return (
    <div>
      <div className="font-peace text-[40px] leading-normal drop-shadow-[0px_4px_8px_#b133ff] flex justify-center my-16">
        Weekly Select
      </div>
      <div className="grid grid-cols-3 grid-flow-row gap-8">
        {groupData.map((data) => (
          <GroupCard key={data.groupId} data={data} />
        ))}
      </div>
    </div>
  )
}

export default WeeklySelect
