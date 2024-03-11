"use client";
import React from "react";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function Footer() {
  const list = [
    {
      ico: "/link.svg",
      title: "Links",
      lis: [
        {
          title: "Telegram Bot",
          href: "https://t.me/test_signal_swap_bot",
        },
        {
          title: "Buy $SS",
          href: "#",
        },
      ],
    },
    {
      ico: "/youtube.svg",
      title: "Social",
      lis: [
        {
          title: "Telegram Group",
          href: "https://t.me/+tUVTFP3zEdMxZGVl",
        },
        {
          title: "Twitter",
          href: "#",
        },
        {
          title: "Contact Us",
          href: "#",
        },
      ],
    },
    {
      ico: "/codesandbox.svg",
      title: "Resources",
      lis: [
        {
          title: "Doc",
          href: "#",
        },
        {
          title: "News",
          href: "#",
        },
      ],
    },
  ];
  return (
    <footer className="w-full md:pb-2.5 md:mt-[180px] mt-16 ">
      <div className="w-full overflow-hidden relative">
        <div className="pb-16 max-w-8xl w-full px-4 md:px-20 mx-auto flex justify-center md:justify-between flex-wrap ">
          <Image
            src="/logo-2.svg"
            className="w-[128px] rounded-none md:mb-0 mb-12"
            alt=""
          />
          <div className="flex justify-between md:justify-end md:gap-[170px] flex-wrap">
            {list.map((item, index) => (
              <div key={item.title} className="flex">
                <Image src={item.ico} className="w-6 rounded-none" alt="" />
                <div className="ml-2">
                  <div className="text-[17px] not-italic font-semibold leading-[21px]">
                    {item.title}
                  </div>
                  <div className="flex flex-col mt-7 gap-6">
                    {item.lis.map((li, index) => (
                      <Link
                        key={li.title}
                        href={li.href}
                        target="_blank"
                        className="text-[rgba(255,255,255,0.60)] text-sm not-italic font-normal leading-[18px]"
                      >
                        {li.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-8xl w-full px-4 md:px-20 py-5  flex items-center justify-center md:justify-between mx-auto flex-wrap">
            <span className="text-[rgba(255,255,255,0.60)] text-sm not-italic font-normal leading-[27px] capitalize">
              @Social Signal 2023
            </span>
            <div className="flex gap-6 text-[rgba(255,255,255,0.60)] text-right text-sm not-italic font-normal leading-[27px]">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="#"
              >
                Terms of Service
              </Link>
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="#"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <motion.img
          className="absolute top-[60%] md:top-0 left-1/2 -translate-x-1/2 w-full md:w-1/2"
          src="/left-2.png"
          alt=""
        />
      </div>
    </footer>
  );
}
