import React from "react"
import Select, { Props } from "react-select"

const shapes = {
  round: "rounded-[24px]",
} as const
const variants = {
  fill: {
    gray_900: "bg-gray-900 text-gray-100",
  },
} as const
const sizes = {
  xs: "h-[81px] px-[35px] text-xl",
} as const

type selectOptionType = { value: string; label: string }
type SelectProps = Omit<Props, "getOptionLabel"> &
  Partial<{
    className: string
    options: selectOptionType[]
    isSearchable: boolean
    isMulti: boolean
    onChange: (option: any) => void
    value: string
    indicator: React.ReactElement
    getOptionLabel: (e: any) => string
    [x: string]: any
    shape: keyof typeof shapes
    variant: keyof typeof variants
    size: keyof typeof sizes
    color: keyof (typeof variants)[keyof typeof variants]
  }>

const SelectBox = React.forwardRef<any, SelectProps>(
  (
    {
      children,
      className = "",
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      shape,
      variant = "fill",
      size = "xs",
      color = "gray_900",
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <Select
          ref={ref}
          options={options}
          className={`${className} flex ${(shape && shapes[shape]) || ""} ${
            (size && sizes[size]) || ""
          } ${
            (variant &&
              variants[variant]?.[
                color as keyof (typeof variants)[typeof variant]
              ]) ||
            ""
          }`}
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          styles={{
            container: (provided) => ({
              ...provided,
              zIndex: 0,
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "0 !important",
              minHeight: "auto",
              width: "100%",
              "&:hover": {
                border: "0 !important",
              },
            }),
            input: (provided) => ({
              ...provided,
              color: "inherit",
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected ? "#2d77cf19" : "transparent",
              color: state.isSelected ? "#f2f2f2" : "inherit",
              "&:hover": {
                backgroundColor: "#2d77cf19",
                color: "#f2f2f2",
              },
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: 0,
            }),
            placeholder: (provided) => ({
              ...provided,
              margin: 0,
            }),
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event: any) => {
            return event.target.id === "scrollContainer"
          }}
          {...restProps}
        />
        {children}
      </>
    )
  }
)
SelectBox.displayName="select-box"
export { SelectBox }
