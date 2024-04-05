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
    <>
      <div className="relative h-60 w-full">
        <div className="w-full overflow-clip h-36 absolute">
          <div className="relative bg-[url('/groupBg.svg')] h-36 w-full blur-2xl" />
        </div>
      </div>
      <div className="w-[80%] translate-y-[-50%] mx-auto  min-w-[600px]">
        <div className="flex justify-between items-end h-full mb-24">
          <div className="flex justify-between items-end ">
            <div className="mx-2 h-48 w-48 flex items-center justify-center">
              <Image
                src="/images/img_download_1_36x36.png"
                alt=""
                removeWrapper
                className="w-[80%] h-[80%]"
              />
            </div>
            <div className="flex items-end justify-center p-1">
              <div className="">
                <Button
                  startContent={"+"}
                  className="p-2 mr-3 bg-[#6119AB]"
                  size="lg"                
                >
                  join 
                </Button>
              </div>
              <div>
                <Image
                  src="/twitterWithBorder.svg"
                  alt=""

                  className=" p-2 translate-y-2"
                />
              </div>
              <div>
                <Image
                  src="/cameraWithBorder.svg"
                  alt=""
                  // removeWrapper
                  className=" p-2 translate-y-2"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-around items-center pb-1">
            <div className="flex items-center justify-center gap-5">
              <Avatar
                radius="md"
                src="/images/img_download_1_36x36.png"
                size="lg"
              />
              <div className="flex flex-col justify-around items-start">
                <div>Owner</div>
                <div>Zhang San </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-around"></div>
          </div>
        </div>
        <div className="flex items-start gap-12">
          <div className="flex-2">
            <div className="text-[40px] font-bold mb-2">Group Name</div>
            <div className=" min-w-[400px] max-w-[600px] text-ellipsis overflow-hidden">
              our slogan is to make the world a better place! our slogan is to
              make the world a better place
            </div>
          </div>
          <div className="flex flex-1 gap-6 items-start justify-between">
            <div className="">
              <div className="text-[20px] font-semibold mb-2">Topic</div>
              <div className="flex flex-col gap-3">
                <Chip>Trading Analyisis</Chip>
                <Chip>Defi</Chip>
              </div>
            </div>
            <div>
              <div className="text-[20px] font-semibold leading-normal mb-2">
                Members
              </div>
              <div>
                <div className="flex items-center">
                  <Image src="/availableGroup.svg" alt=""></Image>
                  <span className="mx-2">11 / 22</span>
                </div>
              </div>
            </div>
            <div>
              <div className="text-[20px] font-semibold leading-normal mb-2 min-w-[120px]">
                My Token
              </div>
              <div>$111</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GroupInfo
