"use client"
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar"
import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link"
import { link as linkStyles } from "@nextui-org/theme"
import { siteConfig } from "@/config/site"
import NextLink from "next/link"
import clsx from "clsx"
import "@rainbow-me/rainbowkit/styles.css"
import {
  injectedWallet,
  metaMaskWallet,
  walletConnectWallet,
  uniswapWallet,
  bitgetWallet,
  coinbaseWallet,
  okxWallet,
} from "@rainbow-me/rainbowkit/wallets"

import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/icons"

import { Logo } from "@/components/icons"
import Image from "next/image"
import { useScroll } from "ahooks"

import { ConnectButton } from "@rainbow-me/rainbowkit"
import { Input } from "@nextui-org/react"

export const Navbar = () => {
  const scroll = useScroll()
  return (
    <NextUINavbar
      className={clsx(
        !scroll?.top
          ? "bg-transparent backdrop-filter-none"
          : "bg-[#0B0D21]/90  backdrop-filter-none z-50",
        "fixed"
      )}
      classNames={{
        wrapper: "max-w-8xl px-4 md:px-20 h-[64px] md:h-[75px]",
      }}
    >
      <NavbarContent className="" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              width={252}
              height={40}
              className="md:w-[252px] w-[200px]"
              src={"/logo.png"}
              alt="Social Signal"
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="basis-full hidden md:flex items-center">
        <ul className="hidden lg:flex gap-4 justify-between items-center ml-2 ">
          {siteConfig.navItems.map((item, i) => (
            <NavbarItem
              key={i}
              className="text-lg not-italic font-normal leading-[110.6%] tracking-[0.72px] capitalize hover:font-extrabold min-w-[100px] transition-all duration-300 flex justify-center items-center"
            >
              <NextLink
                className={clsx(linkStyles({ color: "foreground" }))}
                target="_blank"
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>
      <NavbarContent className="basis-full hidden md:flex items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="md"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="center">
        <NavbarItem className="hidden md:flex">
          <Button
            // isExternal
            as={Link}
            className="font-normal rounded-full border border-white/20"
            href={`/groups`}
            variant="flat"
            style={{
              background:
                "radial-gradient(1604.13% 347.57% at 50% 50%, #6119AB 0%, #BF97BF 90%)",
            }}
          >
            Join
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem className="hidden md:flex">
          <ConnectButton chainStatus="icon" showBalance={false} />
        </NavbarItem>
      </NavbarContent>

      {/* <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent> */}

      {/* <NavbarMenu className="bg-[#0B0D21] bg-opacity-80">
        <div className="mx-4 mt-2 pt-4 flex flex-col gap-4">
          {siteConfig.navItems.map((item, i) => (
            <NavbarItem
              key={i}
              className="not-italic font-normal leading-[110.6%] tracking-[0.72px] capitalize hover:font-extrabold min-w-[100px] transition-all duration-300 flex justify-center items-center"
            >
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "!text-2xl "
                )}
                target="_blank"
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
          <Button
            isExternal
            as={Link}
            className="font-normal rounded-full border border-white/20 mt-4 text-xl"
            // href={siteConfig.links.sponsor}
            variant="flat"
            style={{
              background:
                "radial-gradient(1604.13% 347.57% at 50% 50%, #6119AB 0%, #BF97BF 90%)",
            }}
          >
            Join Group2
          </Button>
        </div>
      </NavbarMenu> */}
    </NextUINavbar>
  )
}
