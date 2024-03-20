"use client"
import React from "react"
import GroupNavigation from "./components/GroupNavigation"
import WeeklySelect from "./components/WeeklySelect"
import Introduction from "./components/Introduction"
const Groups = () => {
  return (
    <div
      className="mt-[75px] mx-auto w-[80%]"
    >
      <Introduction />
      <GroupNavigation />
      <WeeklySelect />
    </div>
  )
}

export default Groups
