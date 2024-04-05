import React from "react"

const sizes = {
  "3xl": "text-2xl font-semibold md:text-[22px]",
  "2xl": "text-xl font-semibold",
  xl: "text-lg font-extrabold",
  "5xl": "text-5xl font-bold md:text-[44px] sm:text-[38px]",
  "4xl": "text-[40px] font-bold md:text-[38px] sm:text-4xl",
  s: "text-[15px] font-bold",
  md: "text-base font-semibold",
  xs: "text-xs font-semibold",
  lg: "text-[17px] font-semibold",
}

export type HeadingProps = Partial<{
  className: string
  as: any
  size: keyof typeof sizes
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "md",
  as,
  ...restProps
}) => {
  const Component = as || "h6"

  return (
    <Component
      className={`text-white-A700 font-inter ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  )
}

export { Heading }
