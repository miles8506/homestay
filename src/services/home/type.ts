export interface IGoodPriceInfoItem {
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

export interface IGoodPriceInfo {
  _id: string
  type: string
  title: string
  list: IGoodPriceInfoItem[]
}
