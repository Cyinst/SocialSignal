"use client"
import React, { useEffect, useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table"
import NextLink from "next/link"
import { motion } from "framer-motion"
import { GroupType, getGroupList } from "@/app/actions"
const pageSize = 3
const g1Info = {
  groupName: "g1",
  groupId: 0,
  members: 2,
  KOL: "k1",
  token: "1000",
  topic: ["#GameFi"],
}
const g2Info = {
  groupName: "g2",
  groupId: 1,
  members: 20,
  KOL: "k2",
  token: "2000",
  topic: ["#SocialFi"],
}
const groupInfo = [g1Info, g2Info]
const columns = [
  { key: "Group", label: "Group" },
  { key: " Members", label: " Members" },
  { key: "KOL", label: "KOL" },
  { key: "TokenL", label: "Token" },
  { key: "Topic", label: "Topic" },
]
const GroupTable = () => {
  const [data, setData] = useState<GroupType[]>([])
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    const _fetchData = async () => {
      //   const data = await getGroupList({ currentPage, pageSize })
      //   setData(data.group)
      setData(groupInfo)
    }
    _fetchData()
  }, [currentPage])
  return (
    <Table>
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody>
        <div>1</div>
        {/* {groupInfo.map((item) => (
          <TableRow key={item.groupId}>
            <NextLink
              // target="_blank"
              // color="foreground"
              href={`/group/[id]`}
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
                {item.kol}
              </span>
            </div>
            <div className="flex flex-col justify-center text-center text-sm  font-medium ">
              {item.token}
            </div>
            <div className="flex items-center justify-end gap-0.5 text-[#CE9EFF] text-center text-sm not-italic font-medium">
              <span>{item.topic}</span>
            </div>
          </TableRow>
        ))} */}
      </TableBody>
    </Table>
  )
}

export default GroupTable
