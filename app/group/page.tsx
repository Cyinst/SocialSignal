"use client"
import Image from "next/image"
import GroupModal from "./components/GroupModal"
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
  ButtonGroup,
  Select,
  SelectItem,
} from "@nextui-org/react"
import { useEffect, useMemo, useState } from "react"
import clsx from "clsx"
import { motion } from "framer-motion"
import NextLink from "next/link"
import { AddGroupParams, GroupType, getGroupList, getHW } from "@/app/actions"
import TransitionCard from "@/components/TransitionCard"
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <S4 />
    </section>
  )
}

const S4 = () => {
  const titleList = ["hot topic", "private group"]
  const [active, setActive] = useState(titleList[0])
  const [groups, setGroups] = useState<GroupType[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  const [pageNumber, setPageNumber] = useState(0)
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
  useEffect(() => {
    const _fetchData = async () => {
      const { groupList, pageNumber } = await getGroupList({
        currentPage,
        pageSize,
      })
      // const { groups ,} = await getGroups(String(id))
      setGroups(groupList)
      setPageNumber(pageNumber)
    }
    _fetchData()
  }, [currentPage, pageSize])
  const groupInfo = [g1Info, g2Info]
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const addGroup = () => {
    console.log("addGroup")
    onOpenChange()
    console.log(isOpen)
  }

  return (
    <>
      {/* <GroupModal
        title="add new group"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onSubmit={function (params: AddGroupParams): Promise<boolean> {
          return new Promise<boolean>((resolve) => {
            setTimeout(() => {
              resolve(true)
            }, 2000)
          })
        }}
      /> */}
      <Modal
        isOpen={isOpen}
        placement="top-center"
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          <ModalBody>
            <TransitionCard title="test" />
          </ModalBody>
        </ModalContent>
      </Modal>
      <div className="mt-16 md:mt-[150px] pb-[150px] flex flex-col justify-start items-center w-full px-4 md:px-0 relative">
        <div className=" max-w-6xl w-full">
          <div className="flex justify-between items-center">
            <div className="flex gap-12  justify-center md:justify-start items-center">
              {titleList.map((item) => (
                <div
                  key={item}
                  onClick={() => setActive(item)}
                  className={clsx(
                    "shrink-0 text-[color:var(--Gray-6,#F2F2F2)] text-xl not-italic font-normal leading-[normal] capitalize cursor-pointer hover:opacity-80 transition-all duration-300",
                    active === item && "!text-2xl !font-semibold"
                  )}
                >
                  {item}
                </div>
              ))}
            </div>
            <div>
              <Button size="sm" className="rounded-full" onPress={addGroup}>
                +
              </Button>
              <NextLink href="/group"> view all </NextLink>
            </div>
          </div>
          <Image
            className=" absolute bottom-[35%] -left-1/2 md:-left-[10%] w-full md:w-[500px]"
            src="/left-1.png"
            width={1088}
            height={1088}
            alt=""
          />
          {/* table-1 */}
          <div className="mt-3 relative z-10">
            <ul className="border-gradient-2 p-10 overflow-x-scroll scrollbar-hide">
              <li className="grid grid-cols-5 items-center justify-between text-xs font-semibold  w-[800px] md:w-auto">
                <div className="flex justify-start items-center">
                  <span className="px-2 py-1 rounded-lg bg-white/10">
                    Group
                  </span>
                </div>
                <div className="flex justify-center items-center">
                  <span className="px-2 py-1 rounded-lg bg-white/10">
                    Members
                  </span>
                </div>
                <div className="flex justify-start items-center">
                  <span className="px-2 py-1 rounded-lg bg-white/10">KOL</span>
                </div>
                <div className="flex justify-center items-center">
                  <span className="px-2 py-1 rounded-lg bg-white/10">
                    Token
                  </span>
                </div>
                <div className="flex justify-end items-center">
                  <span className="px-2 py-1 rounded-lg bg-white/10">
                    Topic
                  </span>
                </div>
              </li>
              {groups.map((item, index) => {
                return (
                  <motion.li
                    key={`${item.groupId}-${index}-${active}`}
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
                      delay: index * 0.2,
                    }}
                    className="grid grid-cols-5  w-[800px]  md:w-auto items-center justify-between py-3 last:pb-0 border-b border-dashed border-[#6119AB] last-of-type:border-transparent"
                  >
                    <NextLink
                      // target="_blank"
                      // color="foreground"
                      href={`/group/${item.groupId}`}
                      as={`/group/${item.groupId}`}
                    >
                      <div className="flex items-center gap-4 ">
                        <div className="w-10 h-10 rounded-lg bg-pink-100/90"></div>
                        <span className="w-[124px] text-base not-italic font-semibold leading-[18px] tracking-[0.32px] text-ellipsis">
                          {item.groupName}
                        </span>
                      </div>
                    </NextLink>
                    <div className="flex flex-col justify-center text-center text-base  font-medium  capitalize">
                      {item.members}
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100/90"></div>
                      <span className="w-[124px] text-base  font-semibold leading-[18px] tracking-[0.32px] text-ellipsis">
                        {item.KOL}
                      </span>
                    </div>
                    <div className="flex flex-col justify-center text-center text-sm  font-medium ">
                      {item.token}
                    </div>
                    <div className="flex items-center justify-end gap-0.5 text-[#CE9EFF] text-center text-sm not-italic font-medium">
                      <span>{item.topic}</span>
                    </div>
                  </motion.li>
                )
              })}
            </ul>
            <div className="w-full overflow-hidden">
              <div className="flex flex-col items-end">
                <div className="flex items-center bg-transparent">
                  <div className="mr-2">
                    {currentPage} / {pageNumber}
                  </div>
                  <ButtonGroup
                    size="sm"
                    className="bg-transparent"
                    variant="light"
                  >
                    <Button
                      size="sm"
                      onClick={() => {
                        if (currentPage - 1 >= 0)
                          setCurrentPage((_curr) => _curr - 1)
                      }}
                    >
                      {"<"}
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => {
                        if (currentPage + 1 <= pageNumber)
                          setCurrentPage((_curr) => _curr + 1)
                      }}
                    >
                      {">"}
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-12 w-full justify-center md:justify-start items-center">
            <div
              className={clsx(
                "shrink-0 text-[color:var(--Gray-6,#F2F2F2)] text-xl not-italic font-normal leading-[normal] capitalize cursor-pointer hover:opacity-80 transition-all duration-300",
                "!text-2xl !font-semibold"
              )}
            >
              Purchasers
            </div>
          </div>
          {/* table-2 */}
          <div className="mt-3 relative z-10 overflow-hidden">
            <ul className="border-gradient-3 p-10 overflow-x-scroll scrollbar-hide">
              <li className="grid grid-cols-4 items-center justify-between text-xs font-semibold w-[800px] md:w-auto">
                <div className="flex justify-start items-center">
                  <span className="px-2 py-1 rounded-lg bg-white/10">
                    Group
                  </span>
                </div>
                <div className="flex justify-center items-center">
                  <span className="px-2 py-1 rounded-lg bg-white/10">
                    Categories
                  </span>
                </div>
                <div className="flex justify-center items-center">
                  <span className="px-2 py-1 rounded-lg bg-white/10">
                    Purchaser
                  </span>
                </div>
                <div className="flex justify-end items-center">
                  <span className="px-2 py-1 rounded-lg bg-white/10">
                    Token
                  </span>
                </div>
              </li>
              {[1, 2, 3, 4].map((item, index) => {
                return (
                  <motion.li
                    key={index}
                    initial={{
                      opacity: 0,
                      x: -100,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2,
                    }}
                    className="grid   w-[800px] md:w-auto grid-cols-4 items-center justify-between py-3 last:pb-0 border-b border-dashed border-[#6119AB] last-of-type:border-transparent"
                  >
                    <div className="flex items-center gap-4 ">
                      <div className="w-10 h-10 rounded-lg bg-pink-100/90"></div>
                      <span className="w-[124px] text-base not-italic font-semibold leading-[18px] tracking-[0.32px] text-ellipsis">
                        Name
                      </span>
                    </div>
                    <div className="flex flex-col justify-center text-center text-base  font-medium  capitalize">
                      Private Group
                    </div>
                    <div className="flex items-center justify-center gap-4">
                      <span className="text-center text-base  font-semibold leading-[18px] tracking-[0.32px] text-ellipsis">
                        ******asda
                      </span>
                    </div>
                    <div className="flex flex-col justify-end text-sm  font-medium text-right ">
                      1,000
                    </div>
                  </motion.li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
