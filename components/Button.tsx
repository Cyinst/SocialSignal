import React from "react"

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-lg",
} as const
const variants = {
  outline: {
    purple_800_03_purple_200_01:
      "border-white-A700_33 border border-solid bg-gradient text-white-A700",
    purple_800_02: "border-purple-800_02 border border-solid text-white-A700",
    white_A700_7f: "border-white-A700_7f border border-solid",
    white_A700_66: "border-white-A700_66 border border-solid",
    purple_800_purple_200:
      "border-white-A700_33 border border-solid bg-gradient text-white-A700",
  },
  fill: {
    white_A700: "bg-white-A700 text-black-900",
    white_A700_14_01: "bg-white-A700_14_01 text-white-A700",
    blue_gray_900: "bg-blue_gray-900 text-gray-100",
    white_A700_14: "bg-white-A700_14_01",
    blue_700_19: "bg-blue-700_19 text-gray-100",
    blue_gray_100: "bg-blue_gray-100 text-black-900",
  },
} as const
const sizes = {
  "2xl": "h-[35px] px-[35px] text-xl",
  "6xl": "h-[42px] px-[35px] text-xl",
  "4xl": "h-[42px] px-[19px] text-2xl",
  "8xl": "h-[93px] px-[33px] text-2xl",
  "5xl": "h-[42px] px-1.5",
  "7xl": "h-[60px] px-[35px] text-xl",
  lg: "h-[32px] px-2 text-xs",
  md: "h-[32px] px-2 text-xl",
  "3xl": "h-[40px] px-3 text-base",
  xl: "h-[34px] px-[35px] text-base",
  sm: "h-[29px] px-[35px] text-base",
  xs: "h-[23px] px-1.5 text-xs",
} as const

type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string
    leftIcon: React.ReactNode
    rightIcon: React.ReactNode
    onClick: () => void
    shape: keyof typeof shapes
    variant: keyof typeof variants
    size: keyof typeof sizes
    color: string
  }>
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "xs",
  color = "blue_700_19",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${
        (shape && shapes[shape]) || ""
      } ${(size && sizes[size]) || ""} ${
        (variant &&
          variants[variant]?.[
            color as keyof (typeof variants)[typeof variant]
          ]) ||
        ""
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  )
}

export { Button }
