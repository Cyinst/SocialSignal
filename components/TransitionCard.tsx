import React, { useState } from "react"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Input,
  Select,
  SelectItem,
  Button,
} from "@nextui-org/react"
export interface TransitionCardProps {
  title: string
}

const coins = [
  { key: "btc", label: "btc" },
  { key: "lua", label: "lua" },
]
const TransitionCard = (props: TransitionCardProps) => {
  const { title } = props
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)

  const handleBuy=()=>{
    
  }

  return (
    <Card className="max-w-[400px]">
      <CardHeader>{title}</CardHeader>
      <CardBody>
        <div className="flex">
          <Input
            type="number"
            max={10}
            value={String(num1)}
            onValueChange={(value) => setNum1(Number(value))}
            endContent={
              <Button
                size="sm"
                onPress={() => {
                  setNum1(10)
                }}
              >
                max
              </Button>
            }
          />
          <Select items={coins} label="coins">
            {(coin) => <SelectItem key={coin.key}>{coin.label}</SelectItem>}
          </Select>
        </div>
        <div className="flex">
          <Input
            type="number"
            max={20}
            value={String(num2)}
            onValueChange={(value) => setNum2(Number(value))}
            endContent={
              <Button
                size="sm"
                onPress={() => {
                  setNum2(20)
                }}
              >
                max
              </Button>
            }
          />
          <Select items={coins} label="coins">
            {(coin) => <SelectItem key={coin.key}>{coin.label}</SelectItem>}
          </Select>
        </div>
        <div>market price</div>
      </CardBody>
      <CardFooter>
        <Button onPress={handleBuy}>Buy</Button>
      </CardFooter>
    </Card>
  )
}

export default TransitionCard
