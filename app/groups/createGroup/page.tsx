"use client"
import {
  Checkbox,
  Input,
  Textarea,
  Button,
  RadioGroup,
  Radio,
} from "@nextui-org/react"
import React from "react"
const CreateGroup = () => {
  return (
    <div className="mt-16 mx-auto w-[60%] rounded-md bg-slate-800 p-8">
      <div className="flex my-4">
        <div className=" w-1/3 flex items-center">Telegrame ID</div>
        <div>
          <Input
            variant="bordered"
            className="bg-black rounded-2xl flex-1 mr-8"
            placeholder="@Jason"
          ></Input>
        </div>
      </div>
      <div className="flex my-4">
        <div className=" w-1/3 flex items-center">Group Name</div>
        <div>
          <Input
            variant="bordered"
            className="bg-black rounded-2xl flex-1 mr-8"
            placeholder="BTC Trend Tracker"
          ></Input>
        </div>
      </div>
      <div className="flex my-4">
        <div className=" w-1/3 flex items-center">Group Tag</div>
        <div>
          <Input
            variant="bordered"
            className="bg-black rounded-2xl flex-1 mr-8"
            placeholder="#Bitcoin #Trading Strategies"
          ></Input>
        </div>
      </div>
      <div className="flex my-4">
        <div className=" w-1/3 flex items-center">Group description</div>
        <Textarea
          variant="bordered"
          className="bg-black rounded-2xl flex-1 mr-8"
          placeholder="Join our exclusive group for daily BTC analysis, trade signals and strategies from experienced crypto traders."
        ></Textarea>
      </div>
      <div className="flex my-4">
        <div className=" w-1/3 flex items-center">Group Size Limit</div>
        <div>
          <RadioGroup orientation="horizontal">
            <Radio value="30">30</Radio>
            <Radio value="50">50</Radio>
          </RadioGroup>
        </div>
      </div>
      <div>
        <Checkbox>
          I have read and agree to abide by the platform` guidelines
        </Checkbox>
      </div>
      <div className="flex items-center">
        <Input
          type="number"
          className="max-w-[30%] bg-black rounded-2xl flex-1 mr-8"
        ></Input>
        <Button className="bg-gradient-to-tr from-green-500 to-blue-500 text-white shadow-lg">
          Stake SS
        </Button>
      </div>
    </div>
  )
}

export default CreateGroup
