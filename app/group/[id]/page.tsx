"use client"
// import { Link } from "@nextui-org/link";
import Image from "next/image"
import { Button } from "@nextui-org/button"
import { HtmlHTMLAttributes, useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import NextLink from "next/link"
import useTransition from "./useTransaction"
import { GroupDetail, getGroupDetail } from "@/app/actions"
import { useRouter } from "next/router"
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react"
import GroupModal from "../components/GroupModal"

export default function Home(props: { params: { id: string } }) {
  return (
    <section className="flex flex-col items-center justify-center">
      <S4 id={props.params.id} />
    </section>
  )
}
// const g1Info = {
//   groupName: "g1",
//   groupId: 0,
//   members: 2,
//   KOLName: "k1",
//   token: 1000,
//   topic: "#GameFi",
// }
// const g2Info = {
//   groupName: "g2",
//   groupId: 1,
//   members: 20,
//   KOLName: "k2",
//   token: 2000,
//   topic: "#SocialFi",
// }

const isOwner = false
const S4 = (props: { id: string }) => {
  const { id } = props
  const titleList = ["hot topic", "private group"]
  // const [active, setActive] = useState(titleList[0])
  // const g1Info = {
  //   groupName: "g1",
  //   groupId: 0,
  //   members: 2,
  //   KOLName: "k1",
  //   token: 1000,
  //   topic: "#GameFi",
  // }
  // const g2Info = {
  //   groupName: "g2",
  //   groupId: 1,
  //   members: 20,
  //   KOLName: "k2",
  //   token: 2000,
  //   topic: "#SocialFi",
  // }
  // const groupInfo = [g1Info, g2Info]
  const [groupDetail, setGroupDetail] = useState<GroupDetail | null>(null)

  useEffect(() => {
    const _fetchData = async () => {
      const { groupDetails: _details } = await getGroupDetail(id)
      setGroupDetail(_details)
    }
    _fetchData()
  }, [id])

  const { isLoading, isConfirming, isConfirmed, sendTransition } =
    useTransition()

  const handlePurchase: React.MouseEventHandler<HTMLElement> = (event) => {
    sendTransition({
      to: "0x7737d4589BBc0C737D62F16E462aCAE0a0CB9e62",
      value: "0.01",
    })
  }
  const {
    isOpen: isOpenEditModal,
    onOpen: onOpenEditModal,
    onOpenChange: onOpenChangeEditModal,
  } = useDisclosure()
  const {
    isOpen: isOpenDeleteModal,
    onOpen: onOpenDeleteModal,
    onOpenChange: onOpenChangeDeleteModal,
  } = useDisclosure()

  const handleEdit = () => {}

  const [deleteText, setDeleteText] = useState("")

  const handleDelete: React.ReactEventHandler = (event) => {
    console.log("delete")
  }
  console.log(groupDetail)
  return (
    <>
      <Modal
        isOpen={isOpenDeleteModal}
        onOpenChange={onOpenChangeDeleteModal}
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
          <ModalHeader>Delete</ModalHeader>
          <Divider />
          <ModalBody>
            <span>
              enter group name (<strong>{groupDetail?.groupName}</strong>) to
              delete
            </span>
            <Input
              label="group name"
              labelPlacement="inside"
              size="sm"
              type="text"
              value={deleteText}
              onValueChange={setDeleteText}
            ></Input>
          </ModalBody>
          <Divider />
          <ModalFooter>
            <Button
              color="danger"
              fullWidth
              isDisabled={deleteText !== groupDetail?.groupName}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <GroupModal
        title="Edit group infomation"
        isOpen={isOpenEditModal}
        data={groupDetail || undefined}
        onOpenChange={onOpenChangeEditModal}
        onSubmit={() => {
          handleEdit()
          return Promise.resolve(true)
        }}
      />
      <div className="mt-16 md:mt-[150px] pb-[150px] flex flex-col justify-start items-center w-full px-4 md:px-0 relative">
        <div className="max-w-6xl w-full flex justify-center gap-12 md:gap-24 lg:gap-36 xl:gap-64">
          <div className="max-w-2xl w-96 h-96 bg-pink-300">
            <Image src="" alt="" />
          </div>
          <div className="flex flex-col justify-between h-96 w-64 md:w-80 lg:w-96">
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
              className="font-semibold text-[20px] md:text-[28px] lg:text-[32px] leading-[150%] tracking-[0.6px] text-ellipsis"
            >
              <div className="flex justify-between">
                <div>name :</div>
                <div>{groupDetail?.groupName}</div>
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
                <div>{groupDetail?.KOL}</div>
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
                <div>{groupDetail?.members}</div>
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
                <div>
                  {groupDetail?.topic.map((topic) => "#" + topic).join(",") ||
                    "no topic related"}
                </div>
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
              {!isOwner ? (
                <Button
                  size="lg"
                  radius="lg"
                  color="secondary"
                  onClick={handlePurchase}
                >
                  purchase
                </Button>
              ) : (
                <div className="flex justify-around w-full">
                  <Button
                    size="lg"
                    radius="lg"
                    color="default"
                    onClick={onOpenEditModal}
                  >
                    Edit
                  </Button>
                  <Button
                    size="lg"
                    radius="lg"
                    color="danger"
                    onClick={onOpenDeleteModal}
                  >
                    delete
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
        <div className="mt-4 shrink-0 text-slate-400 text-base md:text-xl  font-bold leading-6 text-center md:text-left">
          {groupDetail?.description}
        </div>
      </div>
    </>
  )
}
