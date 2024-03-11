"use client"
import { AddGroupParams } from "@/app/actions"
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
} from "@nextui-org/react"
import React, { useEffect, useState } from "react"
export interface GroupModalProps {
  isOpen: boolean
  onOpenChange: () => void
  title: string
  data?: AddGroupParams
  onSubmit: (params: AddGroupParams) => Promise<boolean>
}

const Topics = [
  { key: "a", value: "@a", label: "#A" },
  { key: "b", value: "@b", label: "#B" },
  { key: "c", value: "@c", label: "#C" },
  { key: "btc", value: "@btc", label: "#BTC" },
]
const GroupModal = (props: GroupModalProps) => {
  const { isOpen, onOpenChange, data, onSubmit, title } = props
  const [groupName, setGroupName] = useState(data?.groupName || "")
  const [token, setToken] = useState(data?.token || "")
  const [topics, setTopics] = React.useState(
    new Set<string | number>(data?.topic || [])
  )

  const [isLoading, setIsLoading] = useState(false)
  //   const { isOpen, onOpen, onOpenChange } = useDisclosure()
  useEffect(() => {
    setGroupName(data?.groupName || "")
    setToken(data?.token || "")
    setTopics(new Set<string | number>(data?.topic || []))
  }, [data])

  console.log(groupName)
  return (
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
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                value={groupName}
                onValueChange={setGroupName}
                label="Group Name"
                variant="bordered"
                labelPlacement="inside"
              />
              <Input
                value={token}
                onValueChange={setToken}
                label="Token"
                type="number"
                variant="bordered"
                labelPlacement="inside"
              />
              <Select
                selectionMode="multiple"
                items={Topics}
                selectedKeys={topics}
                onSelectionChange={(selected) => {
                  setTopics(new Set(selected))
                  //   setTopics()
                  return
                }}
                label="Topic"
                variant="bordered"
                labelPlacement="inside"
              >
                {Topics.map((topic) => (
                  <SelectItem key={topic.key} value={topic.value}>
                    {topic.label}
                  </SelectItem>
                ))}
              </Select>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Close
              </Button>
              <Button
                isLoading={isLoading}
                color="primary"
                onPress={() => {
                  if (!!groupName && !!token && !!topics) {
                    setIsLoading(true)
                    onSubmit({
                      groupName,
                      token,
                      topic: Array.from(topics) as string[],
                    })
                      .then((res) => {
                        console.log(res)
                        if (res) {
                          onClose()
                        } else {
                          console.log("error")
                        }
                      })
                      .finally(() => setIsLoading(false))
                  }
                }}
              >
                submit
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default GroupModal
