import instance from "./utils"
export interface GroupType {
  groupId: number
  groupName: string
  members: number
  token: string
  KOL: string
  topic: string[]
}

export interface AddGroupParams {
  groupName: string
  token: string
  topic: string[]
}

export interface GroupDetail extends GroupType {
  description: string
}
export const getHotGroups = async (
  groupId: string
): Promise<{ groups: GroupType[] }> => {
  return instance.get<null, { groups: GroupType[] }>(`/group/${groupId}`)
}

export const getGroupList = async ({
  currentPage,
  pageSize,
}: {
  currentPage: number
  pageSize: number
}) => {
  return instance.get<null, { groupList: GroupType[]; pageNumber: number }>(
    `/group`,
    {
      params: {
        currentPage,
        pageSize,
      },
    }
  )
}

export const getHW = async (): Promise<{ message: string }> => {
  return instance.get<null, { message: string }>("/")
}

export const getGroupDetail = async (groupId: string) => {
  return instance.get<null, { groupDetails: GroupDetail }>(`/groupdetails`, {
    params: { groupId },
  })
}

export const addGroup = async (params: AddGroupParams) => {
  return instance.post<null, { success: boolean }>(`/addgroup`, params)
}
