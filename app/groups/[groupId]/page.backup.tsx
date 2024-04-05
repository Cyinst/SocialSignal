"use client"
import React, { useCallback, useEffect } from "react"
import { Image } from "@nextui-org/react"
import { useEthersProvider, useEthersSigner } from "@/hooks/useProvider"
import { useAccount, useSendTransaction } from "wagmi"
import { Button } from "@/components/Button"
import Header from "@/components/Header"
import { Heading, SelectBox, Text } from "@/components"
import Footer from "@/components/Footer"

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
]

const Home: React.FC<{ params: { groupId: string } }> = ({
  params: { groupId },
}) => {
  const provider = useEthersProvider()
  const signer = useEthersSigner()
  const { address } = useAccount()
  return (
    <div className="w-full bg-gray-900_01">
      <div>
        <div className="h-[410px] relative">
          <div className="h-[340px] w-full md:h-auto top-[0.00px] right-0 left-0 m-auto absolute">
            <Image
              src="images/Image_1d2b7b62b9e27af_340x1439.png"
              alt="1d2b7b62b9e27af"
              className="h-[340px] w-full object-cover"
            />
            <div className="w-full h-max pb-[250px] left-0 bottom-0 right-0 top-0 m-auto md:pb-5 border-black-900 border border-solid bg-black-900_7f_01 absolute">
              <Header className="flex md:flex-col items-center" />
            </div>
          </div>
          <div className="flex md:flex-col justify-between items-center w-full bottom-[0.00px] right-0 left-0 gap-5 m-auto md:p-5 absolute max-w-[1100px] md:relative">
            <div className="flex sm:flex-col justify-between items-center w-[49%] md:w-full gap-5">
              <Image
                src="images/Image_1d2b7b62b9e27af.png"
                alt="1d2b7b62b9e27af"
                className="w-[206px] sm:w-full object-cover"
              />
              <div className="flex self-end gap-5">
                <Button
                  color="white_A700_33"
                  size="6xl"
                  shape="round"
                  className="sm:px-5 min-w-[156px] !rounded-md"
                >
                  + Join
                </Button>
                <Button size="5xl" shape="square" className="w-[42px]">
                  <Image src="images/Image_frame_white_a700.svg" />
                </Button>
                <Button
                  color="white_A700_7f"
                  size="5xl"
                  shape="round"
                  className="w-[42px] !rounded-md"
                >
                  <Image src="images/Image_info.svg" />
                </Button>
              </div>
            </div>
            <div className="flex self-end justify-center items-center w-[17%] md:w-full gap-[22px]">
              <Image
                src="images/Image_moonb01_1_1_59x59.png"
                alt="moonb011oneone"
                className="w-[59px] object-cover rounded-md"
              />
              <div className="flex flex-col self-end items-start gap-[3px]">
                <Heading size="2xl" as="h1">
                  Owner
                </Heading>
                <Text size="2xl" as="p" className="!text-gray-100 capitalize">
                  @S030912
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col items-center w-full mt-12 mx-auto md:p-5 max-w-[1111px]">
          <Heading
            as="h2"
            className="self-end !text-black-900 capitalize !font-bold"
          >
            + Join
          </Heading>
          <div className="flex md:flex-col justify-between items-center md:self-stretch ml-[-37px] pr-[68px] gap-5 md:pr-5 md:ml-0 relative flex-1">
            <div className="flex flex-col items-start w-[47%] md:w-full pt-[15px] gap-[23px]">
              <Heading size="4xl" as="h3">
                Group name
              </Heading>
              <Text size="4xl" as="p" className="w-[93%] md:w-full">
                Our Slogan is to make the world better. Our Slogan is to make
                the world better.{" "}
              </Text>
            </div>
            <div className="flex sm:flex-col self-end items-start mb-[9px]">
              <div className="flex flex-col items-start gap-[13px]">
                <Heading size="2xl" as="h4">
                  Topic
                </Heading>
                <div className="flex flex-col items-start gap-2">
                  <Text
                    size="4xl"
                    as="p"
                    className="flex justify-center items-center h-[32px] px-2 py-[3px] !text-gray-100 capitalize border-white-A700_66 border border-solid bg-blue-700_19 rounded-[7px]"
                  >
                    Trading Analysis
                  </Text>
                  <Button
                    size="md"
                    variant="fill"
                    shape="round"
                    className="capitalize border-white-A700_66 border border-solid min-w-[59px] !rounded-[7px]"
                  >
                    DeFi
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-start ml-[25px] gap-3.5 sm:ml-0">
                <Heading size="2xl" as="h5">
                  Members
                </Heading>
                <div className="flex items-center gap-[5px]">
                  <Image
                    src="images/Image_frame_teal_a700.svg"
                    alt="imageone_one"
                    className="h-[18px] w-[18px]"
                  />
                  <Text
                    size="2xl"
                    as="p"
                    className="self-end !text-teal-A700 tracking-[0.24px]"
                  >
                    99/200
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center ml-[55px] gap-3 sm:ml-0">
                <Heading size="2xl" as="h6" className="text-center">
                  My Token
                </Heading>
                <Heading as="h6" className="mb-0.5 !font-bold">
                  <span className="text-white-A700">888&nbsp;</span>
                  <span className="text-white-A700">$SS</span>
                </Heading>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col items-start w-full mt-[118px] gap-[41px] mx-auto md:p-5 max-w-[1286px]">
          <Image
            src="images/Image_icons_settings.svg"
            alt="iconssettings"
            className="h-[24px] w-[24px] md:w-full mt-[45px]"
          />
          <div className="flex flex-col items-center md:self-stretch gap-[133px] md:gap-[99px] sm:gap-[66px] flex-1">
            <div className="flex flex-col self-stretch items-center gap-12 px-[105px] md:px-5">
              <Text
                size="8xl"
                as="p"
                className="tracking-[0.60px] !font-peacesans text-shadow-ts"
              >
                Dashboard
              </Text>
              <div className="flex flex-col self-stretch items-center gap-8 p-8 sm:p-5 border-white-A700_66 border border-solid shadow-sm rounded-[30px]">
                <div className="flex md:flex-col w-[96%] md:w-full gap-8">
                  <div className="flex flex-col items-start justify-center w-[21%] md:w-full gap-[11px] bg-gray-900 rounded-[34px]">
                    <Heading
                      as="h2"
                      className="mt-[29px] ml-[29px] md:ml-0 tracking-[-0.18px]"
                    >
                      SS Token
                    </Heading>
                    <div className="flex flex-col self-end items-start justify-center mb-[27px] gap-[5px]">
                      <Text
                        size="5xl"
                        as="p"
                        className="mt-0.5 tracking-[0.36px] !font-geomgraphic"
                      >
                        0.0
                      </Text>
                      <Text
                        size="md"
                        as="p"
                        className="tracking-[0.20px] !font-geomgraphic"
                      >
                        ≈$0.0
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center w-[21%] md:w-full gap-[11px] bg-gray-900 rounded-[34px]">
                    <Heading
                      as="h3"
                      className="mt-[29px] ml-[29px] md:ml-0 tracking-[-0.18px]"
                    >
                      KSFT Token
                    </Heading>
                    <div className="flex flex-col self-end items-start justify-center mb-[27px] gap-[5px]">
                      <Text
                        size="5xl"
                        as="p"
                        className="mt-0.5 tracking-[0.36px] !font-geomgraphic"
                      >
                        0.0
                      </Text>
                      <Text
                        size="md"
                        as="p"
                        className="tracking-[0.20px] !font-geomgraphic"
                      >
                        ≈$0.0
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center gap-[11px] p-[19px] bg-gray-900 flex-1 rounded-[34px]">
                    <Heading
                      as="h4"
                      className="mt-[11px] ml-[11px] md:ml-0 tracking-[-0.18px]"
                    >
                      Staked KSFT
                    </Heading>
                    <div className="flex mb-[9px]">
                      <Text
                        size="5xl"
                        as="p"
                        className="mb-8 tracking-[0.36px] !font-geomgraphic"
                      >
                        $4.550
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center gap-3 p-5 bg-gray-900 flex-1 rounded-[34px]">
                    <Heading
                      as="h5"
                      className="mt-[9px] ml-2.5 md:ml-0 tracking-[-0.18px]"
                    >
                      KSFT Market Price
                    </Heading>
                    <div className="flex mb-2">
                      <Text
                        size="5xl"
                        as="p"
                        className="mb-[33px] tracking-[0.36px] !font-geomgraphic"
                      >
                        $2.175
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col w-[95%] md:w-full gap-px">
                  <div className="flex p-[31px] sm:p-5 bg-gray-900 flex-1 rounded-[34px]">
                    <Heading
                      as="h6"
                      className="mb-[55px] ml-7 md:ml-0 tracking-[-0.18px]"
                    >
                      KSFT Circulate Market Cap
                    </Heading>
                  </div>
                  <div className="flex mb-7 md:mb-0">
                    <Text
                      size="5xl"
                      as="p"
                      className="self-end tracking-[0.36px] !font-geomgraphic"
                    >
                      $ 4,984,675.722
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-center pl-7 gap-[23px] py-7 sm:pl-5 sm:py-5 bg-gray-900 flex-1 rounded-[34px]">
                    <Heading
                      as="h6"
                      className="mt-[3px] ml-8 md:ml-0 tracking-[-0.18px]"
                    >
                      KSFT Circulate Supply
                    </Heading>
                    <div className="flex self-end">
                      <Text
                        size="5xl"
                        as="p"
                        className="self-end tracking-[0.36px] !font-geomgraphic"
                      >
                        2,060,428.925
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-[82%] md:w-full gap-12">
              <Text
                size="8xl"
                as="p"
                className="tracking-[0.60px] !font-peacesans text-shadow-ts"
              >
                Swap
              </Text>
              <div className="flex flex-col self-stretch items-start gap-[29px]">
                <div className="flex justify-between items-center w-[28%] md:w-full gap-5 flex-wrap">
                  <Heading
                    size="3xl"
                    as="h4"
                    className="!text-gray-100 capitalize"
                  >
                    Buy KSFT
                  </Heading>
                  <Text
                    size="4xl"
                    as="p"
                    className="self-start !text-gray-100 capitalize"
                  >
                    Stake KSFT
                  </Text>
                </div>
                <div className="flex flex-col self-stretch gap-8 bg-white-A700">
                  <div className="flex flex-col justify-center pl-16 pr-14 gap-[31px] py-16 md:p-5 bg-blue_gray-900 rounded-[30px]">
                    <div className="flex md:flex-col justify-between items-center gap-5">
                      <div className="flex justify-between items-start w-[53%] md:w-full gap-5 p-8 sm:p-5 border-white-A700_4c border border-solid bg-gray-900 rounded-[24px]">
                        <div className="flex flex-col items-start justify-center gap-5">
                          <Text
                            size="7xl"
                            as="p"
                            className="mt-[3px] tracking-[0.54px] !font-geomgraphic"
                          >
                            0.0
                          </Text>
                          <Text
                            size="xl"
                            as="p"
                            className="tracking-[0.22px] !font-geomgraphic"
                          >
                            $0.0
                          </Text>
                        </div>
                        <Button
                          color="blue_gray_900"
                          size="4xl"
                          variant="fill"
                          shape="round"
                          className="mr-1.5 md:mr-0 capitalize min-w-[87px]"
                        >
                          Max
                        </Button>
                      </div>
                      <Image
                        src="images/defaultNoData.png"
                        alt="unionone_one"
                        className="h-[152px] md:w-full"
                      />
                    </div>
                    <div className="flex items-center gap-[23px]">
                      <Image
                        src="images/Image_frame_gray_300.svg"
                        alt="imagetwo_one"
                        className="h-[43px] w-[43px]"
                      />
                      <div className="flex flex-col items-start gap-2">
                        <Text
                          size="2xl"
                          as="p"
                          className="!text-deep_purple-A200 capitalize"
                        >
                          Market Price
                        </Text>
                        <Text
                          size="2xl"
                          as="p"
                          className="!text-gray-100 capitalize"
                        >
                          1 SS = 4.55 KSFT
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-col justify-between items-center gap-5">
                      <div className="flex flex-col items-start justify-center w-[53%] md:w-full gap-5 p-[33px] sm:p-5 border-white-A700_4c border border-solid bg-gray-900 rounded-[24px]">
                        <Text
                          size="7xl"
                          as="p"
                          className="mt-[3px] tracking-[0.54px] !font-geomgraphic"
                        >
                          0.0
                        </Text>
                        <Text
                          size="xl"
                          as="p"
                          className="tracking-[0.22px] !font-geomgraphic"
                        >
                          $0.0
                        </Text>
                      </div>
                      <div className="flex flex-col w-[37%] md:w-full pb-[18px] gap-[27px]">
                        <SelectBox
                          shape="round"
                          name="ksft"
                          placeholder={`KSFT`}
                          options={dropDownOptions}
                          className="sm:p-5 capitalize border-white-A700_4c border border-solid"
                        />
                        <div className="flex justify-between gap-5 px-3 flex-wrap">
                          <Text
                            size="4xl"
                            as="p"
                            className="!text-gray-100_66 capitalize"
                          >
                            Balance:
                          </Text>
                          <Text
                            size="4xl"
                            as="p"
                            className="mr-[11px] md:mr-0 !text-gray-100_66 capitalize"
                          >
                            0.0
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    color="blue_gray_900"
                    size="8xl"
                    variant="fill"
                    className="w-full sm:px-5 capitalize font-semibold rounded-[30px]"
                  >
                    Connect Wallet
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex flex-col mt-[324px] gap-[60px] sm:gap-[30px]" />
        <Image
          src="images/Image_vector.png"
          alt="vectorone_one"
          className="w-full md:h-auto mt-[802px] mx-auto md:p-5 object-cover max-w-[1292px]"
        />
      </div>
    </div>
  )
}

export default Home
