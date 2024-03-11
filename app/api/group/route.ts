import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  return NextResponse.json({
    success: true,
    pageNumber: 20,
    groupList: Array(6)
      .fill(0)
      .map((_, idx) => ({
        groupId: idx,
        groupName: "group" + idx,
        memebers: 20 + idx,
        KOL: "KOL" + idx,
        token: "2000",
        topic: ["#BTC"],
      })),
  })
}
