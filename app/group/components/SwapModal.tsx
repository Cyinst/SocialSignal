import React, { useState } from "react"
import { SupportedChainId, SwapWidget } from "@uniswap/widgets"
import "@uniswap/widgets/fonts.css"
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react"
import { ethers, providers } from "ethers"
import detectEthereumProvider from "@metamask/detect-provider"
import { useEthersProvider } from "@/app/hooks/useProvider"

// const theme: Theme = {
//   primary: "#FFF",
//   secondary: "#A9A9A9",
//   interactive: "#000",
//   container: "#4E4E5A",
//   module: "#222633",
//   accent: "#71FF98",
//   dialog: "#000",
//   fontFamily: "Josefin Sans",
// }



const SwapModal: React.FC<{ isOpen: boolean; onOpenChange: () => void }> = ({
  isOpen,
  onOpenChange,
}) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        hideCloseButton
        placement="top-center"
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                
              </ModalBody>
              {/* <ModalFooter>
                <Button onClick={onClose}>exit</Button>
              </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default SwapModal
