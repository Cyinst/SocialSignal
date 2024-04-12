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
  groupAvatar: string
  groupName: string
  kolAvatar: string
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
      className="backdrop-blur-[20px] rounded-2xl px-2"
    >
      <CardBody>
        <div className="flex justify-between items-center ">
          <div className="flex flex-col items-start flex-1">
            <div className="my-2">{data.groupName}</div>
            <div className="mb-6">
              {data.topics.map((topic) => (
                <Chip key={topic} className="mr-1">
                  {topic}
                </Chip>
              ))}
            </div>
            <div className="flex justify-between items-cetner ">
              <div className="flex items-center">
                <Avatar src={data.kolAvatar} />
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
          <div className="flex w-[30%]  relative overflow-hidden  justify-center items-center ring-2 ring-[#2E2E2E] rounded-md">
            <Image
              removeWrapper
              src={data.groupAvatar}
              alt=""
              className="w-full h-auto"
              radius="md"
            ></Image>
          </div>
        </div>
      </CardBody>
      <CardFooter>
        <div className="flex justify-between bg-[#5D54FD] rounded-md w-full px-4">
          <div className="capitalize">{data.description}</div>
          <motion.img src="/backQuote.svg"></motion.img>
        </div>
      </CardFooter>
    </Card>
  )
}

const groupDescriptionList = ['Unleashing Memecoin pandemonium.',
  'The book that changed it all',
  'The new sloth on the block.'
]
const kolNameList = ['SS MAX', 'BOME', 'Slerf']
const groupNameList = ['Social Signal', 'BOME', 'Slerf']
const groupTypeList = [['Social', 'Meme'], ['Meme'], ['Meme']]
const groupData: GroupCardDataType[] = Array(3)
  .fill(0)
  .map((_, idx) => ({
    groupId: idx,
    groupName: groupNameList[idx],
    groupAvatar: "/groupAvatar"+idx+".png",
    kolAvatar: "/kolAvatar" + idx + ".png",
    kolName: kolNameList[idx],
    topics: groupTypeList[idx],
    currentMembersCount: 9,
    memberLimit: 15,
    description: groupDescriptionList[idx],
  }))

const WeeklySelect: React.FC = () => {
  return (
    <div className="w-full 3 max-w-[1278px] mx-auto">
      <div className="font-peace text-[40px] leading-normal drop-shadow-[0px_4px_8px_#b133ff] flex justify-center my-16 ">
        Weekly Select
      </div>
      {/* <div className="grid grid-cols-3 grid-flow-row gap-8"> */}
        <div className="justify-center gap-7 grid-cols-[repeat(auto-fill,_minmax(380px_,_1fr))] grid">
        {groupData.map((data,idx) => (
          <motion.div
            className="border-gradient-3"
            key={data.groupId}
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              delay: idx * 0.08,
            }}
          >
            <GroupCard data={data} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default WeeklySelect
