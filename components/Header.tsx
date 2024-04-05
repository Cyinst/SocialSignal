import React from "react"
import { Button, Text, Heading } from "./"
import { Image } from "@nextui-org/react"
interface Props {
  className?: string
}

export default function Header({ ...props }: Props) {
  return (
    <header {...props}>
      <div className="flex md:flex-col justify-between items-center w-[65%] md:w-full ml-[55px] gap-5 md:ml-0">
        <div className="flex justify-center w-[36%] md:w-full gap-3.5">
          <Image
            src="images/Image_settings_blue_200.svg"
            alt="settings_one"
            className="h-[40px]"
          />
          <Image
            src="images/Image_group_1000002854_gray_50.png"
            alt="image"
            className="w-[88%] object-cover"
          />
        </div>
        <ul className="flex self-end mb-1.5 gap-10 flex-wrap">
          <li>
            <a
              href="Tutorials"
              target="_blank"
              rel="noreferrer"
              className="self-start"
            >
              <Heading
                size="xl"
                as="h6"
                className="tracking-[0.72px] capitalize"
              >
                Tutorials
              </Heading>
            </a>
          </li>
          <li>
            <a
              href="points"
              target="_blank"
              rel="noreferrer"
              className="self-start cursor-pointer hover:font-extrabold"
            >
              <Text size="3xl" as="p" className="tracking-[0.72px] capitalize">
                points
              </Text>
            </a>
          </li>
          <li>
            <a
              href="twitter"
              target="_blank"
              rel="noreferrer"
              className="self-start cursor-pointer hover:font-extrabold"
            >
              <Text size="3xl" as="p" className="tracking-[0.72px] capitalize">
                twitter
              </Text>
            </a>
          </li>
          <li>
            <a
              href="telegram"
              target="_blank"
              rel="noreferrer"
              className="self-end cursor-pointer hover:font-extrabold"
            >
              <Text size="3xl" as="p" className="tracking-[0.72px] capitalize">
                telegram
              </Text>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center w-[16%] md:w-full mr-[55px] gap-4 md:mr-0">
        <Button
          color="white_A700_33"
          size="3xl"
          className="capitalize min-w-[143px] rounded-[20px]"
        >
          Connect Wallet
        </Button>
        <Image
          src="images/Image_rectangle_40x40.png"
          alt="circleimage"
          className="h-[40px] w-[40px] rounded-[50%]"
        />
      </div>
    </header>
  )
}
