import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  return NextResponse.json({
    success: true,
    groupDetails: {
      groupId: 1,
      groupName: "group 1",
      members: 20,
      token: "200",
      KOL: "??",
      topic: ["btc","a","b"],
      description: "this is description ",
    },
  })
}
