import ApiClient from "../../util/ApiClient"

export interface MemberItem {
    id: number,
    name: string
}

export interface MemberListView {
    totalCount: number,
    totalPage: number,
    members: MemberItem[]
}

export const getMembers = async (page:number): Promise<MemberListView> => {
    const response = await ApiClient.get<MemberListView>(`/api/members?page=${page}`)
    return response.data.data;
}