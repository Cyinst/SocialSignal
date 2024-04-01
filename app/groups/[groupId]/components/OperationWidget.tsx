import React, { useState } from "react"
import SwapWidget from "./SwapWidget"
import StakeWidget from "./StakeWidget"
import clsx from "clsx"
import { motion } from "framer-motion"
const OperationWidget = () => {
  const titleList = ["buy SS", "stake SS"]
  const [active, setActive] = useState(titleList[0])
  return (
    <div className="w-[80%] mx-auto ">
      <div className="flex gap-12  justify-center md:justify-start items-center mb-8">
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
      {active === titleList[0] && (
        <motion.div
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
            delay: 0.2,
          }}
        >
          <SwapWidget />
        </motion.div>
      )}
      {active === titleList[1] && (
        <motion.div
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
            delay: 0.2,
          }}
        >
          <StakeWidget />
        </motion.div>
      )}
    </div>
  )
}

export default OperationWidget
