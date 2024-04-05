import React from "react"
import { Button, Text, Heading } from "@/components"

interface Props {
  className?: string
  all?: string
  following?: string
  games?: string
  news?: string
}

export default function NavigationFilter({
  all = "All",
  following = "Following",
  games = "Games",
  news = "News",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex self-stretch items-center gap-5 flex-wrap">
        <Heading
          size="3xl"
          as="h1"
          className="h-[30px] !text-gray-100 capitalize"
        >
          {all}
        </Heading>
        <Text size="4xl" as="p" className="self-end !text-gray-100 capitalize">
          {following}
        </Text>
      </div>
      <div className="flex  gap-[11px]">
        <Button
          size="md"
          variant="fill"
          shape="round"
          className=" capitalize border-white-A700_66 border border-solid !rounded-[7px]"
        >
          {games}
        </Button>
        <Button
          size="md"
          variant="fill"
          shape="round"
          className=" capitalize border-white-A700_66 border border-solid !rounded-[7px]"
        >
          {news}
        </Button>
      </div>
    </div>
  )
}
