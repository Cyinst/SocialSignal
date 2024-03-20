import React from "react"
import { Avatar, Button, Chip, Image } from "@nextui-org/react"

interface GroupInfoDataType {
  groupName: string
  slogan: string
  topic: string[]
  currentMembersCount: number
  memberLimit: number
  tokenNumber: number
}

const GroupInfo: React.FC = () => {
  return (
    <div className="relative h-60 w-full mb-48">
      <div className="w-full overflow-clip h-40">
        <div className="relative bg-[url('/groupBg.svg')] h-32 w-full blur-2xl" />
      </div>

      <div className="h-40 w-[80%] translate-y-[-50%] mx-auto ">
        <div className="flex justify-between items-end h-full mb-16">
          <div className="flex justify-between items-end">
            <div className="mx-2 h-32 w-32">
              <Image
                src="/logo-1.png"
                alt=""
                removeWrapper
                className="w-[100%] h-[100%]"
              />
            </div>
            <div className="flex items-end">
              <Button startContent={"+"}> join </Button>
              <Image
                src="/twitterWithBorder.svg"
                alt=""
                removeWrapper
                className="w-[100%] h-[100%]"
              />
              <Image
                src="/cameraWithBorder.svg"
                alt=""
                removeWrapper
                className="w-[100%] h-[100%]"
              />
            </div>
          </div>
          <div className="flex justify-around items-center">
            <div className="flex items-center justify-center gap-5">
              <Avatar radius="md" />
              <div className="flex flex-col justify-around items-start">
                <div>Owner</div>
                <div>Zhang San </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-around"></div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-1">
            <div className="text-[40px] font-bold">Group Name</div>
            <div>
              our slogan is to make the world a better place! our slogan is to
              make the world a better place
            </div>
          </div>
          <div className="flex flex-1 gap-6">
            <div className="">
              <div className="text-[20px] font-semibold">topic</div>
              <div className="flex flex-col">
                <Chip>Trading Analyisis</Chip>
                <Chip>Defi</Chip>
              </div>
            </div>
            <div>
              <div className="text-[20px] font-semibold leading-normal">Members</div>
              <div>
                <div className="flex items-center">
                  <Image src="/availableGroup.svg" alt=""></Image>11/22
                </div>
              </div>
            </div>
            <div>
              <div className="text-[20px] font-semibold leading-normal">My Token</div>
              <div>$111</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupInfo
