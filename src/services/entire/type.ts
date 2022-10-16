import { IHomeInfoItem } from '../home/type'

export interface IEntireRoomInfoItem extends IHomeInfoItem {
  reviews?: any
  picture_urls?: string[]
  star_rating?: number
}

export interface IEntireRoomInfo {
  errcode: number
  list: IEntireRoomInfoItem[]
  totalCount: number
}
