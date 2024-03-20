"use client";
import { Link } from "@nextui-org/link";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { useMemo, useState } from "react";
import { Image as NUImage } from "@nextui-org/image";
import Marquee from "react-fast-marquee";
import clsx from "clsx";
import { motion } from "framer-motion";
import NextLink from "next/link"
export default function Home() {

  // console.log(connectBrowserExtensionWallet())
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="w-full relative overflow-hidden">
        <motion.img
          src="/bg-1.png"
          className="w-full h-screen scale-x-110 relative mx-auto top-0 select-none md:block hidden"
          alt=""
          initial={{ x: 10 }}
          animate={{ x: -10 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 5,
          }}
        />
        <motion.img
          src="/bg-1-1.webp"
          className="w-full h-screen relative top-0 left-1/2 -translate-x-1/2 select-none block md:hidden"
          alt=""
        />

        <div className="w-[90%] md:w-full max-w-full md:max-w-6xl mx-auto z-10  flex items-center flex-wrap-reverse md:flex-nowrap absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            className=" min-w-full md:min-w-[700px]"
          >
            <div className="text-3xl md:text-7xl  font-bold md:leading-[72px]">
              The key to <br className="" /> an on-chain ecology.
            </div>
            <div className="flex flex-col justify-center shrink-0 mt-4 text-slate-400 text-base  font-bold leading-6">
              Use our free-to-use Telegram bots and aggregators to quickly
              locate the communities you want to go to for the latest signals
              and value growth.
            </div>
            <Button
              isExternal
              as={Link}
              className="font-normal mt-10 rounded-full border border-white/20 flex  text-xl max-w-[260px] h-[60px] flex-col justify-center items-center mx-auto md:mx-0"
              href={"https://t.me/test_signal_swap_bot"}
              target="_blank"
              variant="flat"
              style={{
                background:
                  "radial-gradient(1604.13% 347.57% at 50% 50%, #6119AB 0%, #BF97BF 90%)",
              }}
            >
              Start navigation
            </Button>
          </motion.div>
          <motion.img
            src={"/bg-1-2.svg"}
            alt=""
            initial={{ y: 20, scale: 1.1 }}
            whileInView={{ y: -20, opacity: 0.9 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className=" select-none mt-10 md:mt-0 w-3/4 md:w-auto mx-auto md:mx-0 md:-ml-12 "
          />
        </div>
      </div>
      <S2 />
      <S3 />
      <div
        className="w-full h-[2.433px] shrink-0 bg-blend-overlay rounded-[10px_10px_0px_0px]"
        style={{
          background: `linear-gradient(90deg, rgba(249, 248, 247, 0) 0%, #641DAC 9.09%, rgba(249, 248, 247, 0) 100%)`,
        }}
      />
      <S4 />
      <S5 />
    </section>
  );
}

const s2List = [
  {
    title: "SocialFi",
    subTitle: "Crypto-Social Investing Platform",
    desc: `To seamlessly facilitate trusted crypto communities where members can collectively discover opportunities, powered by expertise-led social channels with tailored insights for every investing goal.`,
    image: "c1.mp4",
    video: true,
  },
  {
    title: "C.A.I.N",
    subTitle: "Community Alpha Intelligence Network (C.A.I.N)",
    desc: `To emerge as the premiere platform allowing frictionless access and sharing of alpha signals between crypto experts and enthusiasts, showcasing proven strategies to enable 24/7 wealth creation.`,
    image: "c2.mp4",
    video: true,
  },
  {
    title: "Telegram Bot",
    subTitle: "Social Signal Bot",
    desc: `Meet the Social Signal Bot - your gateway to simplified crypto trading through social.
	Seamlessly connect with top trader channels, mirror positions with one click, and build your portfolio like an expert, all from Telegram.
	No more complexity. No more information overload. Just an intelligent bot powering smart community-based trading.
	Join channels now and experience the future of social crypto investing with Social Signal!
	`,
    image: "s-2-3.png",
    video: false,
  },
];

const S2 = () => {
  const [active, setActive] = useState(0);
  const activeData = useMemo(() => s2List[active], [active]);

  return (
    <div className=" min-h-screen py-8 flex flex-col justify-center items-center">
      <h1
        className=" font-peace text-[40px] md:text-6xl md:mb-4  font-normal leading-[150%] tracking-[0.6px]"
        style={{
          textShadow: `0px 4px 8px #B133FF`,
        }}
      >
        Key Features
      </h1>

      <div className="flex gap-4 md:gap-10 items-center justify-center">
        {s2List.map((item, index) => {
          return (
            <Button
              key={item.title}
              className="font-normal mt-10 rounded-full border flex  md:text-xl md:min-w-[260px] md:h-[60px] flex-col justify-center items-center hover:!bg-[#6119AB]/70"
              variant="flat"
              style={{
                background:
                  active === index
                    ? "radial-gradient(1604.13% 347.57% at 50% 50%, #6119AB 0%, #BF97BF 90%)"
                    : "transparent",
                borderColor:
                  active === index ? "rgba(255,255,255,0.20)" : "#641DAC",
              }}
              onClick={() => setActive(index)}
            >
              {item.title}
            </Button>
          );
        })}
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        key={activeData.title}
        className="flex items-start justify-center flex-wrap md:flex-nowrap mt-10 md:mt-14 max-w-7xl gap-5"
      >
        <div className="flex-1 px-4 md:px-0">
          <div className="text-2xl md:text-[40px]  font-bold leading-[48px] text-center md:text-left">
            {activeData.subTitle}
          </div>
          <div className="shrink-0 text-slate-400 text-base md:text-xl  font-bold leading-6 mt-4 text-center md:text-left">
            {activeData.desc}
          </div>
        </div>
        <div
          className="w-full md:w-[520px] h-[324px] flex items-center justify-center"
          // style={{
          //   background: "rgba(196, 196, 196, 0.05)",
          // }}
        >
          {activeData.video ? (
            <video
              className="w-full h-full"
              autoPlay
              loop
              muted
              playsInline
              src={`/${activeData.image}`}
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={activeData.image} className="h-full w-auto" alt="" />
          )}
        </div>
      </motion.div>
    </div>
  );
};

const S3 = () => {
  const list = [
    {
      title: "2024 Q1",
      lis: [
        "Creator economy incentives",
        "Enriched community engagement tools",
        "Start marketing initiatives",
      ],
      class: "md:mt-[120px] mt-10",
    },
    {
      title: "2024 Q2",
      lis: [
        "Token generation event",
        "Market making strategies",
        "Token airdrop",
        "Expand partnerships",
        "Amplify influencer signals",
      ],
      class: "md:mt-[60px] mt-10",
    },
    {
      title: "2024 Q3",
      lis: [
        "Support seamless multi-device use",
        "Launch integrated cryptocurrency exchange",
        "Broad token admission system",
      ],
      class: "md:mt-[0px] mt-10",
    },
  ];

  return (
    <div className=" min-h-screen mt-10 md:pt-[50px] mb-24 flex flex-col justify-center items-center relative">
      <h1
        className=" font-peace text-[40px] md:text-6xl mb-14 font-normal leading-[150%] tracking-[0.6px]"
        style={{
          textShadow: `0px 4px 8px #B133FF`,
        }}
      >
        Roadmap
      </h1>
      <Image
        className=" absolute -top-[130px] -left-1/2 md:-left-[550px] w-4/5 md:w-[500px]"
        src="/left-2.png"
        width={1312}
        height={1548}
        alt=""
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:mt-6">
        {list.map((item, index) => {
          return (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              className={clsx(
                " w-[88%] md:w-[350px] rounded-lg mt-14 justify-self-center",
                item.class
              )}
            >
              <div className="border-gradient relative ">
                <div className="p-4 pr-1 ">
                  <div className="text-xl  font-semibold leading-6 ">
                    {item.title}
                  </div>
                  <div className="pl-2 mt-1">
                    {item.lis.map((li, i) => {
                      return (
                        <li
                          key={i}
                          className="text-[15px]  font-normal leading-[150%] tracking-[0.225px]"
                        >
                          {li}
                        </li>
                      );
                    })}
                  </div>
                </div>
                <div className=" absolute -left-6 top-0 flex items-end">
                  <Image src="road-1.svg" width={75} height={197.5} alt="" />
                  <Image
                    className=" absolute -bottom-6 -right-4 animate-r1"
                    src="road.svg"
                    width={34}
                    height={34}
                    alt=""
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const S4 = () => {
  const titleList = ["hot topic", "private group"];
  const [active, setActive] = useState(titleList[0]);

  return (
    <div className="mt-16 md:mt-[150px] pb-[150px] flex flex-col justify-start items-center w-full px-4 md:px-0 relative">
      <div className=" max-w-6xl w-full">
      <div className="flex justify-between items-center">
          <div className="flex gap-12  justify-center md:justify-start items-center">
            {titleList.map((item) => (
              <div
                key={item}
                onClick={() => setActive(item)}
                className={clsx(
                  "shrink-0 text-[color:var(--Gray-6,#F2F2F2)] text-xl not-italic font-normal leading-[normal] capitalize cursor-pointer hover:opacity-80 transition-all duration-300",
                  active === item && "!text-2xl !font-semibold"
                )}
              >
                {item}
              </div>
            ))}
          </div>

          <NextLink href="/group" > view all </NextLink>
        </div>
        <Image
          className=" absolute bottom-[35%] -left-1/2 md:-left-[10%] w-full md:w-[500px]"
          src="/left-1.png"
          width={1088}
          height={1088}
          alt=""
        />
        {/* table-1 */}
        <div className="mt-3 relative z-10">
          <ul className="border-gradient-2 p-10 overflow-x-scroll scrollbar-hide">
            <li className="grid grid-cols-5 items-center justify-between text-xs font-semibold  w-[800px] md:w-auto">
              <div className="flex justify-start items-center">
                <span className="px-2 py-1 rounded-lg bg-white/10">Group</span>
              </div>
              <div className="flex justify-center items-center">
                <span className="px-2 py-1 rounded-lg bg-white/10">
                  Members
                </span>
              </div>
              <div className="flex justify-start items-center">
                <span className="px-2 py-1 rounded-lg bg-white/10">KOL</span>
              </div>
              <div className="flex justify-center items-center">
                <span className="px-2 py-1 rounded-lg bg-white/10">Token</span>
              </div>
              <div className="flex justify-end items-center">
                <span className="px-2 py-1 rounded-lg bg-white/10">Topic</span>
              </div>
            </li>
            {[1, 2, 3, 4].map((item, index) => {
              return (
                <motion.li
                  key={`${item}-${index}-${active}`}
                  initial={{
                    opacity: 0,
                    x: -100,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                  }}
                  className="grid grid-cols-5  w-[800px]  md:w-auto items-center justify-between py-3 last:pb-0 border-b border-dashed border-[#6119AB] last-of-type:border-transparent"
                >
                  <div className="flex items-center gap-4 ">
                    <div className="w-10 h-10 rounded-lg bg-pink-100/90"></div>
                    <span className="w-[124px] text-base not-italic font-semibold leading-[18px] tracking-[0.32px] text-ellipsis">
                      {active}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center text-center text-base  font-medium  capitalize">
                    20
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-pink-100/90"></div>
                    <span className="w-[124px] text-base  font-semibold leading-[18px] tracking-[0.32px] text-ellipsis">
                      Name
                    </span>
                  </div>
                  <div className="flex flex-col justify-center text-center text-sm  font-medium ">
                    1,000
                  </div>
                  <div className="flex items-center justify-end gap-0.5 text-[#CE9EFF] text-center text-sm not-italic font-medium">
                    <span>#Metaverse</span>
                    <span>#GameFi</span>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>

        <div className="flex gap-12 w-full justify-center md:justify-start items-center">
          <div
            className={clsx(
              "shrink-0 text-[color:var(--Gray-6,#F2F2F2)] text-xl not-italic font-normal leading-[normal] capitalize cursor-pointer hover:opacity-80 transition-all duration-300",
              "!text-2xl !font-semibold"
            )}
          >
            Purchasers
          </div>
        </div>
        {/* table-2 */}
        <div className="mt-3 relative z-10">
          <ul className="border-gradient-3 p-10 overflow-x-scroll scrollbar-hide">
            <li className="grid grid-cols-4 items-center justify-between text-xs font-semibold w-[800px] md:w-auto">
              <div className="flex justify-start items-center">
                <span className="px-2 py-1 rounded-lg bg-white/10">Group</span>
              </div>
              <div className="flex justify-center items-center">
                <span className="px-2 py-1 rounded-lg bg-white/10">
                  Categories
                </span>
              </div>
              <div className="flex justify-center items-center">
                <span className="px-2 py-1 rounded-lg bg-white/10">
                  Purchaser
                </span>
              </div>
              <div className="flex justify-end items-center">
                <span className="px-2 py-1 rounded-lg bg-white/10">Token</span>
              </div>
            </li>
            {[1, 2, 3, 4].map((item, index) => {
              return (
                <motion.li
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -100,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                  className="grid   w-[800px] md:w-auto grid-cols-4 items-center justify-between py-3 last:pb-0 border-b border-dashed border-[#6119AB] last-of-type:border-transparent"
                >
                  <div className="flex items-center gap-4 ">
                    <div className="w-10 h-10 rounded-lg bg-pink-100/90"></div>
                    <span className="w-[124px] text-base not-italic font-semibold leading-[18px] tracking-[0.32px] text-ellipsis">
                      Name
                    </span>
                  </div>
                  <div className="flex flex-col justify-center text-center text-base  font-medium  capitalize">
                    Private Group
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-center text-base  font-semibold leading-[18px] tracking-[0.32px] text-ellipsis">
                      ******asda
                    </span>
                  </div>
                  <div className="flex flex-col justify-end text-sm  font-medium text-right ">
                    1,000
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const s5List = [
  {
    img: "/a-2.svg",
    desc: `"Social Signal is truly an innovative platform! With seamless integration with the Telegram Bot, I can easily access race and investment recommendations, eliminating the tedious search steps and making my trading more intelligent and convenient."`,
    name: "Wade Warren",
    id: "@Ralph Edwards",
  },
  {
    img: "/a-2.svg",
    desc: `"Social Signal is truly an innovative platform! With seamless integration with the Telegram Bot, I can easily access race and investment recommendations, eliminating the tedious search steps and making my trading more intelligent and convenient."`,
    name: "Wade Warren",
    id: "@Ralph Edwards",
  },
  {
    img: "/a-2.svg",
    desc: `"Social Signal is truly an innovative platform! With seamless integration with the Telegram Bot, I can easily access race and investment recommendations, eliminating the tedious search steps and making my trading more intelligent and convenient."`,
    name: "Wade Warren",
    id: "@Ralph Edwards",
  },
  {
    img: "/a-2.svg",
    desc: `"Social Signal is truly an innovative platform! With seamless integration with the Telegram Bot, I can easily access race and investment recommendations, eliminating the tedious search steps and making my trading more intelligent and convenient."`,
    name: "Wade Warren",
    id: "@Ralph Edwards",
  },
  {
    img: "/a-2.svg",
    desc: `"Social Signal is truly an innovative platform! With seamless integration with the Telegram Bot, I can easily access race and investment recommendations, eliminating the tedious search steps and making my trading more intelligent and convenient."`,
    name: "Wade Warren",
    id: "@Ralph Edwards",
  },
];
const S5 = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full">
      <h1
        className=" font-peace text-[40px] md:text-6xl  text-center  font-normal leading-[150%] tracking-[0.6px]"
        style={{
          textShadow: `0px 4px 8px #B133FF`,
        }}
      >
        What Our User Say
      </h1>
      <Marquee className="flex items-center gap-12" pauseOnHover>
        <ul className="flex gap-12 mt-20 mb-10">
          {s5List.map((item, index) => {
            return (
              <li
                key={index}
                className="flex items-start gap-6 w-[350px] md:w-[600px] p-6 md:p-10 border-gradient-2 shadow-md hover:shadow-pink-500"
              >
                <Image src={"/s5-1.svg"} width={39} height={31} alt="" />
                <div className="flex flex-col justify-between">
                  <div className="md:w-[370px]">{item.desc}</div>
                  <div className="flex mt-14">
                    <NUImage
                      src={item.img}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-2 flex flex-col">
                      <span className="font-medium leading-[150%] tracking-[0.24px] capitalize">
                        {item.name}
                      </span>
                      <span className="text-[rgba(255,255,255,0.60)] text-xs not-italic font-medium leading-[normal] ">
                        {item.id}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Marquee>
    </div>
  );
};
