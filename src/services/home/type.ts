export interface IHomeInfoItem {
  id: string
  picture_url: string
  verify_info: any
  name: string
  price: number
  price_format: string
  star_rating_color: string
  reviews_count: number
  bottom_info: any
  lat: number
  lng: number
  image_url: string
}

export interface IHomeInfo {
  _id: string
  type: string
  title: string
  subtitle?: string
  list: IHomeInfoItem[]
}

interface IDestAddress {
  homes: string[]
  name: string
}

interface ITabsList {
  bottom_info: any
  id: string
  image_url: string
  lat: number
  lng: number
  name: string
  picture_url: string
  price: number
  price_format: string
  reviews: any
  reviews_count: number
  star_rating: number
  star_rating_color: string
  verify_info: any
}

export interface ITabs {
  dest_address: IDestAddress[]
  dest_list: { [key: string]: ITabsList[] }
  subtitle: string
  title: string
  type: string
  _id: string
}