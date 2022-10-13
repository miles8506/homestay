import { msRequest } from ".."

export function getGoodPriceData<T>() {
  return msRequest.get<T>({
    url: '/home/goodprice'
  })
}

export function getHighScoreData<T>() {
  return msRequest.get<T>({
    url: '/home/highscore'
  })
}

export function getDiscountData<T>() {
  return msRequest.get<T>({
    url: '/home/discount'
  })
}

export function getRecommendData<T>() {
  return msRequest.get<T>({
    url: '/home/hotrecommenddest'
  })
}

export function getLongForData<T>() {
  return msRequest.get<T>({
    url: '/home/longfor'
  })
}

export function getHomePlus<T>() {
  return msRequest.get<T>({
    url: '/home/plus'
  })
}
