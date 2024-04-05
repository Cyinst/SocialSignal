import React from "react"

const sizes = {
  "5xl": "text-2xl font-normal md:text-[22px]",
  xs: "text-[10px] font-normal",
  lg: "text-sm font-normal",
  "6xl": "text-[32px] font-normal md:text-3xl sm:text-[28px]",
  "7xl": "text-4xl font-normal md:text-[34px] sm:text-[32px]",
  "8xl": "text-[40px] font-normal md:text-[38px] sm:text-4xl",
  s: "text-xs font-medium",
  "2xl": "text-base font-normal",
  "3xl": "text-lg font-normal",
  "4xl": "text-xl font-normal",
  xl: "text-[15px] font-normal",
  md: "text-[13px] font-normal",
}

export type TextProps = Partial<{
  className: string
  as: any
  size: keyof typeof sizes
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "lg",
  ...restProps
}) => {
  const Component = as || "p"

  return (
    <Component
      className={`text-white-A700 font-inter ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  )
}

export { Text }
