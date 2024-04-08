import React from "react"
import { Button, Text, Heading } from "@/components"

interface Props {
  activeIndex?: number
  setActiveIndex?: (idx: number) => void
  className?: string
  all?: string
  following?: string
  Meme?: string
  news?: string
}
{
  /* <Text size="4xl" as="p" className="self-end !text-gray-100 capitalize">
          {following}
        </Text> */
}
export default function NavigationFilter({
  activeIndex = 0,
  setActiveIndex,
  all = "All",
  following = "Following",
  Meme = "Meme",
  news = "News",
  ...props
}: Props) {
  const titles = [all, following]
  return (
    <div {...props}>
      <div className="flex self-stretch items-center gap-5 flex-wrap">
        {titles.map((title, idx) => (
          <div
            key={title}
            onClick={() => setActiveIndex && setActiveIndex(idx)}
          >
            {activeIndex === idx ? (
              <Heading
                size="3xl"
                as="h1"
                className="h-[30px] !text-gray-100 capitalize cursor-pointer"
              >
                {title}
              </Heading>
            ) : (
              <Text
                size="4xl"
                as="p"
                className="self-end !text-gray-100 capitalize cursor-pointer"
              >
                {title}
              </Text>
            )}
          </div>
        ))}
      </div>
      <div className="flex  gap-[11px]">
        <Button
          size="md"
          variant="fill"
          shape="round"
          className=" capitalize border-white-A700_66 border border-solid !rounded-[7px]"
        >
          {Meme}
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
