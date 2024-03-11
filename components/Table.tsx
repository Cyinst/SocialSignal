import React, { useEffect, useState } from "react"
import {
  Table as NextTable,
  TableHeader,
  TableBody,
} from "@nextui-org/table"
import { motion } from "framer-motion"
import { GroupType, getGroupList } from "@/app/actions"
export interface TableProps<T> {
  className?: string
  style?: React.CSSProperties
  columns: { label: string; key: string }[]
  renderTitle: (
    titles: { label: string; key: string }[]
  ) => React.ReactElement[] | React.ReactElement
  renderItem: (datum: T, index: number) => React.ReactElement
  itemKey: keyof T
  pageSize: number
  data: T[]
}
function Table<T>(props: TableProps<T>): React.ReactNode {
  const { className, style, pageSize, data, columns, renderTitle, renderItem } =
    props
  return (
    <NextTable className={className} style={style} as="ul">
      <TableHeader>{renderTitle(columns)}</TableHeader>
      <TableBody>{data.map((row, index) => renderItem(row, index))}</TableBody>
    </NextTable>
  )
}

export default Table