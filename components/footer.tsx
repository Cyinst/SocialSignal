import React from "react"
import { Text, Heading } from "."
import { Image } from "@nextui-org/react"
interface Props {
  className?: string
}

export default function Footer({ ...props }: Props) {
  return (
    <footer {...props}>
      <div className="flex md:flex-col justify-between w-full gap-5 mx-auto md:p-5 max-w-7xl">
        <Image
          src="images/Image_1.svg"
          alt="one_one"
          className="h-[150px] md:w-full"
        />
        <div className="flex justify-center w-[62%] md:w-full pr-7 sm:pr-5">
          <div className="flex sm:flex-col justify-between items-start w-full gap-5">
            <div className="flex flex-col items-start w-[19%] sm:w-full gap-6">
              <div className="flex items-center gap-2">
                <Image
                  src="images/Image_link.svg"
                  alt="link_one"
                  className="h-[24px] w-[24px]"
                />
                <Heading size="lg" as="h6" className="self-start">
                  links
                </Heading>
              </div>
              <div className="flex flex-col items-start gap-6">
                <a href="#" className="self-center">
                  <Text as="p" className="!text-white-A700_99_01 capitalize">
                    telegram bot
                  </Text>
                </a>
                <a href="#" className="ml-[26px] md:ml-0">
                  <Text as="p" className="!text-white-A700_99_01">
                    Buy $SS
                  </Text>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start w-[21%] sm:w-full gap-6">
              <div className="flex items-center gap-2">
                <Image
                  src="images/Image_youtube.svg"
                  alt="youtube_one"
                  className="h-[24px] w-[24px]"
                />
                <Heading size="lg" as="h6" className="self-start capitalize">
                  social
                </Heading>
              </div>
              <div className="flex flex-col items-start justify-center gap-6">
                <a href="#" className="self-center">
                  <Text as="p" className="!text-white-A700_99_01 capitalize">
                    Telegram group
                  </Text>
                </a>
                <a
                  href="Twitter"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-[27px] md:ml-0"
                >
                  <Text as="p" className="!text-white-A700_99_01">
                    Twitter
                  </Text>
                </a>
                <a href="#" className="ml-[27px] md:ml-0">
                  <Text as="p" className="!text-white-A700_99_01 capitalize">
                    Contact us
                  </Text>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start w-[16%] sm:w-full gap-6">
              <div className="flex items-center gap-2">
                <Image
                  src="images/Image_thumbs_up.svg"
                  alt="thumbsup_one"
                  className="h-[24px] w-[24px]"
                />
                <Heading size="lg" as="h6" className="self-start">
                  Resources
                </Heading>
              </div>
              <div className="flex flex-col items-start gap-[25px]">
                <a
                  href="Doc"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-[27px] md:ml-0"
                >
                  <Text as="p" className="!text-white-A700_99_01">
                    Doc
                  </Text>
                </a>
                <a
                  href="news"
                  target="_blank"
                  rel="noreferrer"
                  className="self-center"
                >
                  <Text as="p" className="!text-white-A700_99_01 capitalize">
                    news
                  </Text>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch p-5 border-white-A700_0f border-t border-solid">
        <div className="flex sm:flex-col justify-between items-center w-full gap-5 mx-auto max-w-7xl">
          <a href="#" className="self-end mb-[3px]">
            <Text as="p" className="!text-white-A700_99_01">
              <span className="text-white-A700_99_01">@</span>
              <span className="text-white-A700_99_01 capitalize">
                Social Signal 2023
              </span>
            </Text>
          </a>
          <ul className="flex gap-6 flex-wrap">
            <li>
              <a href="#">
                <Text as="p" className="!text-white-A700_99_01 text-right">
                  Terms of Service
                </Text>
              </a>
            </li>
            <li>
              <a href="#" className="self-end">
                <Text as="p" className="!text-white-A700_99_01 text-right">
                  Privacy Policy
                </Text>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
